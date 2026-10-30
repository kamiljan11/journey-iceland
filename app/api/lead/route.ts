import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { type Lead, escapeHtml } from '@/lib/lead';
import { type StoreResult, handleLead } from '@/lib/lead-handler';
import { createRateLimiter } from '@/lib/rate-limit';

export const runtime = 'nodejs';

const DB_TIMEOUT_MS = 5000;
const RESEND_TIMEOUT_MS = 8000;
// 10 requests per IP per 10 minutes — a real guest sends one or two; leaves room for a shared hotel Wi-Fi.
const allow = createRateLimiter(10, 10 * 60 * 1000);

function errClass(e: unknown): string {
  return e instanceof Error ? e.name : typeof e;
}

/** Insert into Supabase `leads` (skipped when Supabase is not configured). */
async function store(data: Lead, id: string): Promise<StoreResult> {
  const db = supabaseAdmin();
  if (!db) {
    console.warn(`[lead ${id}] Supabase not configured`);
    return 'skipped';
  }
  try {
    const { error } = await db.from('leads').insert({
      tour: data.tour, date: data.date, people: data.people,
      name: data.name, email: data.email, phone: data.phone,
      message: data.msg, lang: data.lang, source: data.source,
    }).abortSignal(AbortSignal.timeout(DB_TIMEOUT_MS));
    if (!error) return 'stored';
    console.error(`[lead ${id}] insert error: ${error.code ?? 'unknown'}`);
  } catch (e) {
    console.error(`[lead ${id}] insert threw (DB unreachable / paused?): ${errClass(e)}`);
  }
  return 'failed';
}

/** Notification email via Resend; false when not configured or not accepted. */
async function notify(data: Lead, id: string): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.warn(`[lead ${id}] RESEND_API_KEY not set; no email`);
    return false;
  }
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
    `</table><p style="color:#6F6052">Sent from journeyiceland.is · ref ${id}</p>`;
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
    if (res.ok) return true;
    console.error(`[lead ${id}] resend responded ${res.status}`);
  } catch (e) {
    console.error(`[lead ${id}] email notify failed: ${errClass(e)}`);
  }
  return false;
}

export async function POST(req: Request) {
  const { status, body } = await handleLead(req, { allow, store, notify, newId: randomUUID, log: console });
  return NextResponse.json(body, { status });
}
