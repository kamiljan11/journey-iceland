import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const runtime = 'nodejs';

type Lead = {
  tour?: string; date?: string; people?: string; name?: string;
  email?: string; phone?: string; msg?: string; lang?: string; source?: string;
};

/** Fire a notification email via Resend (no-op if not configured). */
async function notify(data: Lead) {
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
    rows.map(([k, v]) => `<tr><td style="color:#6F6052"><b>${k}</b></td><td>${String(v).replace(/</g, '&lt;')}</td></tr>`).join('') +
    `</table><p style="color:#6F6052">Sent from journeyiceland.is</p>`;
  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from, to: [to], reply_to: data.email,
        subject: `New request — ${data.name || 'website'}${data.tour ? ' · ' + data.tour : ''}`,
        html,
      }),
    });
    if (!res.ok) {
      console.error('[lead] resend responded non-ok:', res.status, await res.text().catch(() => ''));
    }
  } catch (e) {
    console.error('[lead] email notify failed:', e);
  }
}

export async function POST(req: Request) {
  const data: Lead | null = await req.json().catch(() => null);
  if (!data || !data.name || !data.email) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  // Store the lead (best-effort). A database outage must NEVER block the
  // notification email — that is the part the guide actually relies on.
  let stored = false;
  const db = supabaseAdmin();
  if (db) {
    try {
      const { error } = await db.from('leads').insert({
        tour: data.tour || null, date: data.date || null, people: data.people || null,
        name: data.name, email: data.email, phone: data.phone || null,
        message: data.msg || null, lang: data.lang || null, source: data.source || 'website',
      });
      if (error) console.error('[lead] insert error:', error.message);
      else stored = true;
    } catch (e) {
      console.error('[lead] insert threw (DB unreachable / paused?):', e);
    }
  } else {
    console.warn('[lead] Supabase not configured; lead not stored:', data);
  }

  await notify(data);
  return NextResponse.json({ ok: true, stored });
}
