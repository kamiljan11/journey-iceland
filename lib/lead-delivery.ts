/* Where a lead goes: Supabase `leads` row + Resend notification email. Factories take the database
   client and fetch as arguments so the failure paths are unit-tested (tests/lead.test.mjs). */
import { type Lead, escapeHtml } from './lead';
import type { LeadDeps, StoreResult } from './lead-handler';

export const DB_TIMEOUT_MS = 5000;
export const RESEND_TIMEOUT_MS = 8000;

type InsertResult = { error: { code?: string } | null };
export type LeadsDb = {
  from: (table: 'leads') => {
    insert: (row: Record<string, string | null>) => { abortSignal: (s: AbortSignal) => PromiseLike<InsertResult> };
  };
};
type Log = LeadDeps['log'];

function errClass(e: unknown): string {
  return e instanceof Error ? e.name : typeof e;
}

/** Insert into `leads` with the request id as primary key, so log lines and the email `ref` match the row. */
export function createStore(getDb: () => LeadsDb | null, log: Log): LeadDeps['store'] {
  return async (data: Lead, id: string): Promise<StoreResult> => {
    const db = getDb();
    if (!db) {
      log.warn(`[lead ${id}] Supabase not configured`);
      return 'skipped';
    }
    try {
      const { error } = await db.from('leads').insert({
        id, tour: data.tour, date: data.date, people: data.people,
        name: data.name, email: data.email, phone: data.phone,
        message: data.msg, lang: data.lang, source: data.source,
      }).abortSignal(AbortSignal.timeout(DB_TIMEOUT_MS));
      if (!error) return 'stored';
      // postgrest reports a timeout / network failure as an error with an empty code
      log.error(`[lead ${id}] insert error: ${error.code || 'no code (timeout or DB unreachable)'}`);
    } catch (e) {
      log.error(`[lead ${id}] insert threw: ${errClass(e)}`);
    }
    return 'failed';
  };
}

type MailEnv = { key?: string; to?: string; from?: string };

/** Notification email via Resend; false when not configured or not accepted. */
export function createNotify(env: MailEnv, fetchImpl: typeof fetch, log: Log): LeadDeps['notify'] {
  return async (data: Lead, id: string): Promise<boolean> => {
    if (!env.key) {
      log.warn(`[lead ${id}] RESEND_API_KEY not set; no email`);
      return false;
    }
    const rows = [
      ['Tour', data.tour], ['Date', data.date], ['People', data.people],
      ['Name', data.name], ['Email', data.email], ['Phone', data.phone],
      ['Message', data.msg], ['Language', data.lang], ['Source', data.source],
    ].filter(([, v]) => v);
    const html =
      `<h2>New availability request</h2><table cellpadding="6" style="border-collapse:collapse">` +
      rows.map(([k, v]) => `<tr><td style="color:#6F6052"><b>${k}</b></td><td>${escapeHtml(String(v))}</td></tr>`).join('') +
      `</table><p style="color:#6F6052">Sent from journeyiceland.is · ref ${id}</p>`;
    try {
      const res = await fetchImpl('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${env.key}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: env.from || 'Journey Iceland <onboarding@resend.dev>',
          to: [env.to || 'hello@journeyiceland.is'],
          reply_to: data.email,
          subject: `New request — ${data.name}${data.tour ? ' · ' + data.tour : ''}`,
          html,
        }),
        signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
      });
      if (res.ok) return true;
      log.error(`[lead ${id}] resend responded ${res.status}`);
    } catch (e) {
      log.error(`[lead ${id}] email notify failed: ${errClass(e)}`);
    }
    return false;
  };
}
