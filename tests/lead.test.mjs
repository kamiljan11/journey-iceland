import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadTs } from './load-ts.mjs';

const { parseLead, escapeHtml, HONEYPOT_FIELD, LEAD_LIMITS, LEAD_TOURS } = await loadTs('../lib/lead.ts');
const { createRateLimiter, clientIp } = await loadTs('../lib/rate-limit.ts');

const valid = {
  tour: 'gc', date: '2026-12-01', people: '1-4', name: 'Anna Kowalska',
  email: 'anna@example.com', phone: '+48 600 000 000', msg: 'Hi!', lang: 'pl', source: 'gc', [HONEYPOT_FIELD]: '',
};

test('a normal form submission is accepted and trimmed', () => {
  const r = parseLead({ ...valid, name: '  Anna Kowalska  ' });
  assert.equal(r.ok, true);
  assert.equal(r.lead.name, 'Anna Kowalska');
  assert.equal(r.lead.tour, 'gc');
  assert.equal(r.lead.lang, 'pl');
});

test('only name and email are required; empty optionals become null', () => {
  const r = parseLead({ name: 'Bo', email: 'bo@x.is' });
  assert.equal(r.ok, true);
  assert.deepEqual(
    [r.lead.tour, r.lead.date, r.lead.people, r.lead.phone, r.lead.msg, r.lead.lang, r.lead.source],
    [null, null, null, null, null, null, 'website'],
  );
});

test('non-object bodies are invalid', () => {
  for (const raw of [null, undefined, 'x', 42, [], [valid]]) assert.deepEqual(parseLead(raw), { ok: false, error: 'invalid' });
});

test('missing or malformed name/email is invalid', () => {
  for (const patch of [{ name: '' }, { name: '   ' }, { email: '' }, { email: 'no-at-sign' }, { email: 'a@b' }, { email: 'a b@c.is' }, { email: '<x>@y.is' }, { name: 42 }]) {
    assert.equal(parseLead({ ...valid, ...patch }).ok, false, JSON.stringify(patch));
  }
});

test('fields over the length limit are rejected', () => {
  for (const [field, max] of Object.entries(LEAD_LIMITS)) {
    const value = field === 'email' ? 'a'.repeat(max) + '@x.is' : 'a'.repeat(max + 1);
    assert.equal(parseLead({ ...valid, [field]: value }).ok, false, field);
  }
  assert.equal(parseLead({ ...valid, msg: 'a'.repeat(LEAD_LIMITS.msg) }).ok, true, 'exactly at the limit is fine');
});

test('unknown tour and malformed date are rejected; unknown lang is dropped', () => {
  assert.equal(parseLead({ ...valid, tour: 'drop table' }).ok, false);
  assert.equal(parseLead({ ...valid, date: '01/12/2026' }).ok, false);
  const r = parseLead({ ...valid, lang: 'xx' });
  assert.equal(r.ok, true);
  assert.equal(r.lead.lang, null);
});

test('a filled honeypot is reported as spam, before any other check', () => {
  assert.deepEqual(parseLead({ ...valid, [HONEYPOT_FIELD]: 'ACME' }), { ok: false, error: 'spam' });
  assert.deepEqual(parseLead({ [HONEYPOT_FIELD]: 'ACME' }), { ok: false, error: 'spam' });
});

test('escapeHtml neutralises markup in email content', () => {
  assert.equal(escapeHtml(`<a href="x" onclick='y'>&</a>`), '&lt;a href=&quot;x&quot; onclick=&#39;y&#39;&gt;&amp;&lt;/a&gt;');
});

test('forms offer only tours the API accepts, carry the honeypot and the same length limits', () => {
  for (const file of ['../components/TourPage.tsx', '../app/[lang]/page.tsx']) {
    const src = readFileSync(new URL(file, import.meta.url), 'utf8');
    const options = [...src.matchAll(/<option value="([^"]+)"/g)].map((m) => m[1]);
    assert.ok(options.length > 0, file);
    for (const o of options) assert.ok(LEAD_TOURS.includes(o), `${file}: option ${o}`);
    assert.match(src, new RegExp(`name="${HONEYPOT_FIELD}"`), `${file}: honeypot`);
    for (const [field, max] of Object.entries({ name: LEAD_LIMITS.name, email: LEAD_LIMITS.email, phone: LEAD_LIMITS.phone, msg: LEAD_LIMITS.msg })) {
      assert.match(src, new RegExp(`name="${field}"[^>]*maxLength=\\{${max}\\}`), `${file}: ${field} maxLength`);
    }
  }
});

test('rate limiter allows max requests per window, per key, then resets', () => {
  const allow = createRateLimiter(2, 1000);
  assert.equal(allow('a', 0), true);
  assert.equal(allow('a', 10), true);
  assert.equal(allow('a', 20), false);
  assert.equal(allow('b', 20), true, 'other IPs are unaffected');
  assert.equal(allow('a', 1000), true, 'new window');
});

test('rate limiter memory stays bounded', () => {
  const allow = createRateLimiter(1, 1000, 3);
  for (const k of ['a', 'b', 'c', 'd', 'e']) assert.equal(allow(k, 0), true);
});

test('clientIp takes the first x-forwarded-for hop, then x-real-ip', () => {
  assert.equal(clientIp(new Headers({ 'x-forwarded-for': '1.2.3.4, 10.0.0.1' })), '1.2.3.4');
  assert.equal(clientIp(new Headers({ 'x-real-ip': '5.6.7.8' })), '5.6.7.8');
  assert.equal(clientIp(new Headers()), 'unknown');
});
