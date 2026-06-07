import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const data = await req.json().catch(() => null);
  if (!data || !data.name || !data.email) {
    return NextResponse.json({ ok: false, error: 'invalid' }, { status: 400 });
  }

  const db = supabaseAdmin();
  if (!db) {
    // Not configured yet — accept the request so the UX works, log it server-side.
    console.warn('[lead] Supabase not configured; lead not stored:', data);
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await db.from('leads').insert({
    tour: data.tour || null,
    date: data.date || null,
    people: data.people || null,
    name: data.name,
    email: data.email,
    phone: data.phone || null,
    message: data.msg || null,
    lang: data.lang || null,
    source: data.source || 'website',
  });

  if (error) {
    console.error('[lead] insert error:', error.message);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
  return NextResponse.json({ ok: true, stored: true });
}
