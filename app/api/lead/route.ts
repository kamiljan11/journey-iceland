import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { type Lead, MAX_BODY_BYTES, escapeHtml, parseLead } from '@/lib/lead';
import { clientIp, createRateLimiter } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const RESEND_TIMEOUT_MS = 8000;
// 5 requests per IP per 10 minutes — a real guest sends one, maybe two.
const allow = createRateLimiter(5, 10 * 60 * 1000);

function errClass(e: unknown): string {
  return e instanceof Error ? e.name : typeof e;
}

/** Fire a notification email via Resend (no-op if not configured). */
async function notify(data: Lead, id: string) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return;
  const to = process.env.LEAD_NOTIFY_EMAIL || 'hello@journeyiceland.is';
  const from = process.env.LEAD_FROM_EMAIL || 'Journey Iceland <onboarding@resend.dev>';
  const rows = [
    ['Tour', data.tour], ['Date', data.date], ['People', data.people],
    ['Name', data.name], ['Email', data.email], ['Phone', data.phone],
    ['Message', data.msg], ['Language', data.lang], ['Source', data.source],
  ].filter(([, v]) => v);
  const html =
    `<h2>New availability request</h2><table cellpadding="6" style="border-collapse:collapse">` +
    rows.map(([k, v]) => `<tr><td style="color:#6F6052"><b>${k}</b></td><td>${escapeHtml(String(v))}</td></tr>`).join('') +
    `</table><p style="color:#6F6052">Sent from journeyiceland.is</p>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: data.email,
        subject: `New request — ${data.name}${data.tour ? ' · ' + data.tour : ''}`,
        html,
      }),
      signal: AbortSignal.timeout(RESEND_TIMEOUT_MS),
    });
    if (!res.ok) console.error(`[lead ${id}] resend responded ${res.status}`);
  } catch (e) {
    console.error(`[lead ${id}] email notify failed: ${errClass(e)}`);
  }
}

export async function POST(req: Request) {
  if (!allow(clientIp(req.headers))) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }
  const declared = Number(req.headers.get('content-length') ?? 0);
  const body = declared > MAX_BODY_BYTES ? '' : await req.text().catch(() => '');
  if (declared > MAX_BODY_BYTES || Buffer.byteLength(body) > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: 'too_large' }, { status: 413 });
  }
  let raw: unknown = null;
  try { raw = JSON.parse(body); } catch { /* raw stays null -> invalid */ }

  const parsed = parseLead(raw);
  // Honeypot hit: answer like a success so the bot does not learn, but store and send nothing.
  if (!parsed.ok && parsed.error === 'spam') return NextResponse.json({ ok: true, stored: false });
  if (!parsed.ok) return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  const data = parsed.lead;
  const id = randomUUID();

  // Store the lead (best-effort). A database outage must NEVER block the
  // notification email — that is the part the guide actually relies on.
  let stored = false;
  const db = supabaseAdmin();
  if (db) {
    try {
      const { error } = await db.from('leads').insert({
        tour: data.tour, date: data.date, people: data.people,
        name: data.name, email: data.email, phone: data.phone,
        message: data.msg, lang: data.lang, source: data.source,
      });
      if (error) console.error(`[lead ${id}] insert error: ${error.code ?? 'unknown'}`);
      else stored = true;
    } catch (e) {
      console.error(`[lead ${id}] insert threw (DB unreachable / paused?): ${errClass(e)}`);
    }
  } else {
    console.warn(`[lead ${id}] Supabase not configured; lead not stored`);
  }

  await notify(data, id);
  return NextResponse.json({ ok: true, stored });
}
