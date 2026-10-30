/* Availability-request ("lead") validation — pure functions, no I/O, unit-tested in tests/lead.test.mjs. */

export type Lead = {
  tour: string | null; date: string | null; people: string | null;
  name: string; email: string; phone: string | null;
  msg: string | null; lang: string | null; source: string;
};

export type LeadParse =
  | { ok: true; lead: Lead }
  | { ok: false; error: 'invalid' | 'spam' };

// Hidden form field that people never see; bots that fill every input fill it too.
export const HONEYPOT_FIELD = 'company';
export const MAX_BODY_BYTES = 10_000;

export const LEAD_TOURS = ['gc', 'sc', 'jk', 'kef', 'bl', 'aurora', 'custom'];
const LANGS = ['en', 'pl', 'de', 'es'];
export const LEAD_LIMITS = { name: 100, email: 254, phone: 40, msg: 2000, people: 20, source: 40 };
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;
const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;

function text(v: unknown): string {
  return typeof v === 'string' ? v.trim() : '';
}

function optional(v: unknown, max: number): string | null | undefined {
  const s = text(v);
  if (!s) return null;
  return s.length <= max ? s : undefined; // undefined = too long
}

export function parseLead(raw: unknown): LeadParse {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { ok: false, error: 'invalid' };
  const r = raw as Record<string, unknown>;
  if (text(r[HONEYPOT_FIELD])) return { ok: false, error: 'spam' };

  const name = text(r.name);
  const email = text(r.email);
  if (!name || name.length > LEAD_LIMITS.name) return { ok: false, error: 'invalid' };
  if (email.length > LEAD_LIMITS.email || !EMAIL_RE.test(email)) return { ok: false, error: 'invalid' };

  const phone = optional(r.phone, LEAD_LIMITS.phone);
  const msg = optional(r.msg, LEAD_LIMITS.msg);
  const people = optional(r.people, LEAD_LIMITS.people);
  const source = optional(r.source, LEAD_LIMITS.source);
  if (phone === undefined || msg === undefined || people === undefined || source === undefined) {
    return { ok: false, error: 'invalid' };
  }

  const tourRaw = text(r.tour);
  if (tourRaw && !LEAD_TOURS.includes(tourRaw)) return { ok: false, error: 'invalid' };
  const dateRaw = text(r.date);
  if (dateRaw && !DATE_RE.test(dateRaw)) return { ok: false, error: 'invalid' };
  const langRaw = text(r.lang);

  return {
    ok: true,
    lead: {
      tour: tourRaw || null, date: dateRaw || null, people,
      name, email, phone, msg,
      lang: LANGS.includes(langRaw) ? langRaw : null,
      source: source ?? 'website',
    },
  };
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
