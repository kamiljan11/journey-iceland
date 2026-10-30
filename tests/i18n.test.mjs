import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { loadTs } from './load-ts.mjs';

const { I18N, langFromParams } = await loadTs('../lib/dictionary.ts');
const LANGS = ['en', 'pl', 'de', 'es'];

test('every language has exactly the same keys as en', () => {
  const en = Object.keys(I18N.en).sort();
  for (const lang of LANGS) {
    assert.deepEqual(Object.keys(I18N[lang]).sort(), en, `key set differs in "${lang}"`);
  }
});

function sourceFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) return sourceFiles(p);
    return /\.tsx?$/.test(name) ? [p] : [];
  });
}

test('every literal t(\'key\') used in app/components/lib exists in the dictionary', () => {
  const root = new URL('..', import.meta.url).pathname;
  const missing = [];
  for (const dir of ['app', 'components', 'lib']) {
    for (const file of sourceFiles(join(root, dir))) {
      for (const [, key] of readFileSync(file, 'utf8').matchAll(/\bt\('([a-z0-9.]+)'\)/gi)) {
        if (!(key in I18N.en)) missing.push(`${file.slice(root.length)}: ${key}`);
      }
    }
  }
  assert.deepEqual(missing, []);
});

test('langFromParams resolves a known language and falls back to en', async () => {
  assert.equal(await langFromParams(Promise.resolve({ lang: 'pl' })), 'pl');
  assert.equal(await langFromParams(Promise.resolve({ lang: 'fr' })), 'en');
  assert.equal(await langFromParams(Promise.resolve({ lang: '' })), 'en');
});
