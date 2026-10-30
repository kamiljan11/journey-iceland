import { randomUUID } from 'node:crypto';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { createNotify, createStore } from '@/lib/lead-delivery';
import { handleLead } from '@/lib/lead-handler';
import { createRateLimiter } from '@/lib/rate-limit';

export const runtime = 'nodejs';

// 10 requests per IP per 10 minutes — a real guest sends one or two; leaves room for a shared hotel Wi-Fi.
const allow = createRateLimiter(10, 10 * 60 * 1000);
const store = createStore(supabaseAdmin, console);

export async function POST(req: Request) {
  const notify = createNotify(
    { key: process.env.RESEND_API_KEY, to: process.env.LEAD_NOTIFY_EMAIL, from: process.env.LEAD_FROM_EMAIL },
    fetch, console,
  );
  const { status, body } = await handleLead(req, { allow, store, notify, newId: randomUUID, log: console });
  return NextResponse.json(body, { status });
}
