/* Availability-request ("lead") validation — pure functions, no I/O, unit-tested in tests/lead.test.mjs. */

export type Lead = {
  tour: string | null; date: string | null; people: string | null;
  name: string; email: string; phone: string | null;
  msg: string | null; lang: string | null; source: string;
};

export type LeadParse =
  | { ok: true; lead: Lead }
  | { ok: false; error: 'invalid' | 'spam' };

// Hidden form field that people never see; bots that fill every input fill it too. The name is deliberately
// outside browser autofill vocabularies (company, organization, website, url...) so real guests never trip it.
export const HONEYPOT_FIELD = 'ji_hp_check';
export const MAX_BODY_BYTES = 10_000;

export const LEAD_TOURS = ['gc', 'sc', 'jk', 'kef', 'bl', 'aurora', 'custom'];
const LANGS = ['en', 'pl', 'de', 'es'];
export const LEAD_LIMITS = { name: 100, email: 254, phone: 40, msg: 2000, people: 20, source: 40 };
// Same leniency as the browser's type="email" check, so a value the form accepts is never rejected here.
const EMAIL_RE = /^[^\s@<>]+@[^\s@<>]+$/;
const DATE_RE = /^(\d{4})-(\d{2})-(\d{2})$/;
// Control characters (CR/LF would reach the email subject). Messages keep their line breaks.
const CONTROL = new RegExp('[\\u0000-\\u001f\\u007f]', 'g');
const CONTROL_EXCEPT_NEWLINE = new RegExp('[\\u0000-\\u0009\\u000b-\\u001f\\u007f]', 'g');

function text(v: unknown, multiline = false): string {
  if (typeof v !== 'string') return '';
  return v.replace(multiline ? CONTROL_EXCEPT_NEWLINE : CONTROL, multiline ? '' : ' ').trim();
}

/** A real calendar date in YYYY-MM-DD (rejects 2026-02-31), else null. */
export function calendarDate(s: string): string | null {
  const m = DATE_RE.exec(s);
  if (!m) return null;
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const dt = new Date(Date.UTC(y, mo - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === mo - 1 && dt.getUTCDate() === d ? s : null;
}

function optional(v: unknown, max: number, multiline = false): string | null | undefined {
  const s = text(v, multiline);
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
  const msg = optional(r.msg, LEAD_LIMITS.msg, true);
  const people = optional(r.people, LEAD_LIMITS.people);
  const source = optional(r.source, LEAD_LIMITS.source);
  if (phone === undefined || msg === undefined || people === undefined || source === undefined) {
    return { ok: false, error: 'invalid' };
  }

  // Optional choice fields are normalised, not rejected: a lead with an odd date is still a lead.
  const tourRaw = text(r.tour);
  const langRaw = text(r.lang);

  return {
    ok: true,
    lead: {
      tour: LEAD_TOURS.includes(tourRaw) ? tourRaw : null,
      date: calendarDate(text(r.date)),
      people,
      name, email, phone, msg,
      lang: LANGS.includes(langRaw) ? langRaw : null,
      source: source ?? 'website',
    },
  };
}

export function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
