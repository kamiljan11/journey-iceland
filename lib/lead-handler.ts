/* Request flow of POST /api/lead with its side effects injected, so every outcome is unit-tested
   (tests/lead.test.mjs). The route wires in Supabase, Resend and the rate limiter. Logs never carry guest data. */
import { type Lead, MAX_BODY_BYTES, parseLead } from './lead';
import { clientIp } from './rate-limit';

export type StoreResult = 'stored' | 'failed' | 'skipped';

export type LeadDeps = {
  allow: (ip: string) => boolean;
  /** instance-wide cap, independent of the client address (IP rotation, cross-site submissions) */
  allowGlobal: () => boolean;
  store: (lead: Lead, id: string) => Promise<StoreResult>;
  /** true when the notification email was accepted by the provider */
  notify: (lead: Lead, id: string) => Promise<boolean>;
  newId: () => string;
  log: Pick<Console, 'warn' | 'error'>;
};

// A success never says whether the lead was stored, so a bot cannot tell the honeypot answer apart.
export type LeadReply = { status: number; body: { ok: true } | { ok: false; error: string } };

/** Reads at most `max` bytes of the body; null when it is larger (works without Content-Length too). */
export async function readCapped(req: Request, max: number): Promise<string | null> {
  if (Number(req.headers.get('content-length') ?? 0) > max) return null;
  if (!req.body) return '';
  const reader = req.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > max) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  return Buffer.concat(chunks).toString('utf8');
}

const reject = (status: number, error: string, log: LeadDeps['log']): LeadReply => {
  log.warn(`[lead] rejected: ${error}`);
  return { status, body: { ok: false, error } };
};

export async function handleLead(req: Request, deps: LeadDeps): Promise<LeadReply> {
  const { log } = deps;
  // Without a client address (not behind Vercel) one shared bucket would block everyone; skip the limit then.
  const ip = clientIp(req.headers);
  if (ip !== 'unknown' && !deps.allow(ip)) return reject(429, 'rate_limited', log);
  // JSON content type forces a CORS preflight, so other sites cannot post leads from visitors' browsers.
  if (!(req.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) {
    return reject(415, 'unsupported_media_type', log);
  }
  if (!deps.allowGlobal()) return reject(429, 'rate_limited_global', log);

  let body: string | null;
  try { body = await readCapped(req, MAX_BODY_BYTES); } catch { return reject(400, 'body_unreadable', log); }
  if (body === null) return reject(413, 'too_large', log);

  let raw: unknown = null;
  try { raw = JSON.parse(body); } catch { /* raw stays null -> invalid */ }
  const parsed = parseLead(raw);
  if (!parsed.ok && parsed.error === 'spam') {
    // Answer like a success so the bot learns nothing; the log line lets us spot false positives.
    log.warn('[lead] honeypot hit; not stored');
    return { status: 200, body: { ok: true } };
  }
  if (!parsed.ok) return reject(400, 'invalid', log);

  const id = deps.newId();
  // Store and notify independently: a database outage must never block the email the guide relies on.
  const [stored, emailed] = await Promise.all([deps.store(parsed.lead, id), deps.notify(parsed.lead, id)]);
  // The email is how the guide learns about a lead; a stored-only lead would sit unseen in the table,
  // so without the email the guest is sent to WhatsApp / phone instead.
  if (!emailed) {
    log.error(`[lead ${id}] NOT EMAILED (${stored === 'stored' ? 'stored in leads' : 'LOST: not stored'})`);
    return { status: 503, body: { ok: false, error: 'not_delivered' } };
  }
  if (stored !== 'stored') log.warn(`[lead ${id}] emailed but not stored (${stored})`);
  return { status: 200, body: { ok: true } };
}
