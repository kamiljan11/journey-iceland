import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { loadTs } from './load-ts.mjs';

const { parseLead, escapeHtml, calendarDate, HONEYPOT_FIELD, LEAD_LIMITS, LEAD_TOURS, MAX_BODY_BYTES } = await loadTs('../lib/lead.ts');
const { createRateLimiter, clientIp } = await loadTs('../lib/rate-limit.ts');
const { handleLead } = await loadTs('../lib/lead-handler.ts', { './lead': '../lib/lead.ts', './rate-limit': '../lib/rate-limit.ts' });

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
  for (const patch of [{ name: '' }, { name: '   ' }, { email: '' }, { email: 'no-at-sign' }, { email: 'a b@c.is' }, { email: '<x>@y.is' }, { name: 42 }]) {
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

test('email accepts whatever the browser type="email" check accepts', () => {
  assert.equal(parseLead({ ...valid, email: 'a@b' }).ok, true);
});

test('odd optional choices are dropped, not rejected: the lead itself still counts', () => {
  const r = parseLead({ ...valid, tour: 'drop table', date: '2026-02-31', lang: 'xx' });
  assert.equal(r.ok, true);
  assert.deepEqual([r.lead.tour, r.lead.date, r.lead.lang], [null, null, null]);
});

test('calendarDate accepts only real YYYY-MM-DD dates', () => {
  assert.equal(calendarDate('2028-02-29'), '2028-02-29');
  for (const d of ['2026-02-31', '2026-13-01', '01/12/2026', '+012026-01-01', '']) assert.equal(calendarDate(d), null, d);
});

test('control characters are stripped; messages keep line breaks', () => {
  const r = parseLead({ ...valid, name: 'Eve\r\nBcc: x@y.is', msg: 'line 1\nline 2\u0000' });
  assert.equal(r.lead.name, 'Eve  Bcc: x@y.is');
  assert.equal(r.lead.msg, 'line 1\nline 2');
});

test('a filled honeypot is reported as spam, before any other check', () => {
  assert.deepEqual(parseLead({ ...valid, [HONEYPOT_FIELD]: 'ACME' }), { ok: false, error: 'spam' });
  assert.ok(!/company|organi[sz]ation|website|url|email|name|phone/i.test(HONEYPOT_FIELD), 'stay outside autofill names');
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
    assert.match(src, /className="form-error" role="alert" hidden/, `${file}: error message for undelivered requests`);
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

// --- request flow (lib/lead-handler.ts) with fake Supabase / Resend ---

function harness({ allow = () => true, allowGlobal = () => true, store = 'stored', emailed = true } = {}) {
  const calls = { store: 0, notify: 0 };
  const lines = [];
  const deps = {
    allow,
    allowGlobal,
    store: async () => { calls.store += 1; if (store instanceof Error) throw store; return store; },
    notify: async () => { calls.notify += 1; return emailed; },
    newId: () => 'lead-1',
    log: { warn: (m) => lines.push(m), error: (m) => lines.push(m) },
  };
  return { deps, calls, lines };
}

const req = (body, headers = {}) => new Request('http://x/api/lead', {
  method: 'POST',
  headers: { 'content-type': 'application/json', 'x-forwarded-for': '1.2.3.4', ...headers },
  body: typeof body === 'string' ? body : JSON.stringify(body),
});

test('handler: valid lead is stored and emailed; reply does not reveal storage', async () => {
  const h = harness();
  const r = await handleLead(req(valid), h.deps);
  assert.deepEqual(r, { status: 200, body: { ok: true } });
  assert.deepEqual(h.calls, { store: 1, notify: 1 });
});

test('handler: database failure still sends the email (and logs it)', async () => {
  const h = harness({ store: 'failed' });
  const r = await handleLead(req(valid), h.deps);
  assert.equal(r.status, 200);
  assert.equal(h.calls.notify, 1);
  assert.ok(h.lines.some((l) => l.includes('emailed but not stored')));
});

test('handler: neither stored nor emailed -> 503 so the form can point the guest elsewhere', async () => {
  const h = harness({ store: 'failed', emailed: false });
  const r = await handleLead(req(valid), h.deps);
  assert.deepEqual(r, { status: 503, body: { ok: false, error: 'not_delivered' } });
  assert.ok(h.lines.some((l) => l.includes('LOST')));
});

test('handler: stored but not emailed -> 503 too (the guide would never see a stored-only lead)', async () => {
  const h = harness({ store: 'stored', emailed: false });
  const r = await handleLead(req(valid), h.deps);
  assert.deepEqual(r, { status: 503, body: { ok: false, error: 'not_delivered' } });
  assert.ok(h.lines.some((l) => l.includes('NOT EMAILED (stored in leads)')));
});

test('handler: non-JSON content type is refused (no cross-site text/plain form posts)', async () => {
  const h = harness();
  const r = await handleLead(req(valid, { 'content-type': 'text/plain' }), h.deps);
  assert.equal(r.status, 415);
  assert.equal(h.calls.store + h.calls.notify, 0);
});

test('handler: instance-wide cap applies even when the per-IP limit passes', async () => {
  const h = harness({ allowGlobal: () => false });
  assert.equal((await handleLead(req(valid), h.deps)).status, 429);
  assert.ok(h.lines.some((l) => l.includes('rate_limited_global')));
});

test('handler: honeypot answers like a success but stores and sends nothing', async () => {
  const h = harness();
  const r = await handleLead(req({ ...valid, [HONEYPOT_FIELD]: 'x' }), h.deps);
  assert.deepEqual(r, { status: 200, body: { ok: true } });
  assert.deepEqual(h.calls, { store: 0, notify: 0 });
  assert.ok(h.lines.some((l) => l.includes('honeypot')));
});

test('handler: rejections are 400 / 413 / 429 and are logged', async () => {
  let h = harness();
  assert.equal((await handleLead(req('not json'), h.deps)).status, 400);
  assert.equal((await handleLead(req({ name: 'x' }), h.deps)).status, 400);
  assert.equal((await handleLead(req({ ...valid, msg: 'a'.repeat(MAX_BODY_BYTES) }), h.deps)).status, 413);
  h = harness({ allow: () => false });
  assert.equal((await handleLead(req(valid), h.deps)).status, 429);
  assert.ok(h.lines.some((l) => l.includes('rate_limited')));
});

test('handler: body cap holds without Content-Length (streamed body)', async () => {
  const h = harness();
  const big = new TextEncoder().encode(JSON.stringify({ ...valid, msg: 'a'.repeat(MAX_BODY_BYTES) }));
  const stream = new ReadableStream({ start(c) { c.enqueue(big.slice(0, 6000)); c.enqueue(big.slice(6000)); c.close(); } });
  const r = await handleLead(new Request('http://x/api/lead', { method: 'POST', body: stream, duplex: 'half', headers: { 'content-type': 'application/json', 'x-forwarded-for': '1.2.3.4' } }), h.deps);
  assert.equal(r.status, 413);
});

test('handler: no client address -> rate limit skipped instead of one shared bucket', async () => {
  const h = harness({ allow: () => false });
  const r = await handleLead(req(valid, { 'x-forwarded-for': '' }), h.deps);
  assert.equal(r.status, 200);
});

test('handler: logs never contain guest data', async () => {
  const h = harness({ store: 'failed', emailed: false });
  await handleLead(req(valid), h.deps);
  await handleLead(req({ ...valid, [HONEYPOT_FIELD]: 'x' }), h.deps);
  const all = h.lines.join('\n');
  for (const v of [valid.name, valid.email, valid.phone, valid.msg]) assert.ok(!all.includes(v), v);
});

// --- delivery (lib/lead-delivery.ts) and browser client (lib/lead-client.ts) ---

const { createStore, createNotify } = await loadTs('../lib/lead-delivery.ts', { './lead': '../lib/lead.ts' });
const { sendLead, timeoutSignal } = await loadTs('../lib/lead-client.ts');
const lead = parseLead(valid).lead;
const quietLog = () => { const lines = []; return { lines, log: { warn: (m) => lines.push(m), error: (m) => lines.push(m) } }; };

function fakeDb(result) {
  const seen = {};
  return {
    seen,
    db: { from: (table) => ({ insert: (row) => { seen.table = table; seen.row = row; return { abortSignal: (s) => { seen.signal = s; return Promise.resolve(result); } }; } }) },
  };
}

test('store: inserts the lead under the request id with a timeout signal', async () => {
  const f = fakeDb({ error: null });
  const { log } = quietLog();
  assert.equal(await createStore(() => f.db, log)(lead, 'id-1'), 'stored');
  assert.equal(f.seen.table, 'leads');
  assert.equal(f.seen.row.id, 'id-1');
  assert.equal(f.seen.row.message, lead.msg);
  assert.ok(f.seen.signal instanceof AbortSignal);
});

test('store: no database -> skipped; error with empty code (timeout) -> failed with a readable log', async () => {
  const q = quietLog();
  assert.equal(await createStore(() => null, q.log)(lead, 'id-1'), 'skipped');
  assert.equal(await createStore(() => fakeDb({ error: { code: '' } }).db, q.log)(lead, 'id-2'), 'failed');
  assert.ok(q.lines.some((l) => l.includes('[lead id-2]') && l.includes('timeout')));
  const throwing = { from: () => { throw new TypeError('boom'); } };
  assert.equal(await createStore(() => throwing, q.log)(lead, 'id-3'), 'failed');
  assert.ok(q.lines.some((l) => l === '[lead id-3] insert threw: TypeError'));
});

test('notify: sends escaped HTML with a timeout and reports provider failures', async () => {
  let call;
  const ok = async (url, init) => { call = { url, init }; return new Response('{}', { status: 200 }); };
  const env = { key: 'k', to: 'guide@x.is' };
  const q = quietLog();
  const evil = { ...lead, msg: '<script>x</script>' };
  assert.equal(await createNotify(env, ok, q.log)(evil, 'id-1'), true);
  const body = JSON.parse(call.init.body);
  assert.deepEqual(body.to, ['guide@x.is']);
  assert.ok(body.html.includes('&lt;script&gt;') && !body.html.includes('<script>'));
  assert.ok(body.html.includes('ref id-1'));
  assert.ok(call.init.signal instanceof AbortSignal);

  assert.equal(await createNotify(env, async () => new Response('', { status: 503 }), q.log)(lead, 'id-2'), false);
  assert.equal(await createNotify(env, async () => { throw new DOMException('t', 'TimeoutError'); }, q.log)(lead, 'id-3'), false);
  assert.equal(await createNotify({}, ok, q.log)(lead, 'id-4'), false);
  assert.ok(q.lines.includes('[lead id-2] resend responded 503'));
  assert.ok(q.lines.includes('[lead id-3] email notify failed: TimeoutError'));
  assert.ok(!q.lines.join('\n').includes(lead.email));
});

test('sendLead (form): true only on a 2xx reply; errors and offline -> false; keepalive set', async () => {
  let init;
  assert.equal(await sendLead({ a: '1' }, async (_u, i) => { init = i; return new Response('{}', { status: 200 }); }), true);
  assert.equal(init.keepalive, true);
  assert.ok(init.signal instanceof AbortSignal, 'client-side timeout');
  assert.equal(JSON.parse(init.body).a, '1');
  for (const status of [400, 413, 429, 503]) {
    assert.equal(await sendLead({}, async () => new Response('{}', { status })), false, String(status));
  }
  assert.equal(await sendLead({}, async () => { throw new TypeError('Failed to fetch'); }), false);
});

test('timeoutSignal works without AbortSignal.timeout (Safari < 16)', async () => {
  const original = AbortSignal.timeout;
  try {
    AbortSignal.timeout = undefined;
    const signal = timeoutSignal(5);
    assert.equal(signal.aborted, false);
    await new Promise((r) => setTimeout(r, 20));
    assert.equal(signal.aborted, true);
    assert.equal(await sendLead({}, async () => new Response('{}', { status: 200 })), true, 'form still sends');
  } finally {
    AbortSignal.timeout = original;
  }
});

test('handler: application/json with charset is accepted; missing content type is refused', async () => {
  const h = harness();
  assert.equal((await handleLead(req(valid, { 'content-type': 'application/json; charset=utf-8' }), h.deps)).status, 200);
  const noType = new Request('http://x/api/lead', { method: 'POST', headers: { 'x-forwarded-for': '1.2.3.4' }, body: new Blob([JSON.stringify(valid)]) });
  assert.equal((await handleLead(noType, h.deps)).status, 415);
});
