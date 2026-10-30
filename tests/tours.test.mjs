import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { loadTs } from './load-ts.mjs';

const { META, TOUR_CARDS, getTour } = await loadTs('../lib/tours.ts', {
  './dictionary': '../lib/dictionary.ts',
  './bokun': '../lib/bokun.ts',
});
const { BOKUN_PRODUCT } = await loadTs('../lib/bokun.ts');
const LANGS = ['en', 'pl', 'de', 'es'];
const root = new URL('../', import.meta.url);
const sprite = readFileSync(new URL('lib/sprite.ts', root), 'utf8');
const sitemap = readFileSync(new URL('app/sitemap.ts', root), 'utf8');

test('every tour has text in all languages, a page, a sitemap entry and existing images', () => {
  for (const slug of Object.keys(META)) {
    assert.ok(existsSync(new URL(`app/[lang]/${slug}/page.tsx`, root)), `missing page for ${slug}`);
    assert.ok(sitemap.includes(`'/${slug}'`), `missing sitemap entry for ${slug}`);
    for (const lang of LANGS) {
      const x = getTour(slug, lang);
      assert.ok(x.h1 && x.sub && x.highlights.length && x.stops.length && x.faq.length, `${slug}/${lang} text incomplete`);
      for (const src of [x.heroImg, x.ftImg, ...x.gallery.map((g) => g.src)].filter(Boolean)) {
        assert.ok(existsSync(new URL(`public${src}`, root)), `missing image ${src}`);
      }
    }
  }
});

test('tour cards link only to tours that have a page', () => {
  for (const c of TOUR_CARDS) {
    assert.ok(META[c.slug], `card ${c.slug} has no META`);
    assert.ok(existsSync(new URL(`public${c.img}`, root)), `missing card image ${c.img}`);
  }
});

test('Northern Lights page: Bókun calendar, no route map, own copy instead of day-tour defaults', () => {
  for (const lang of LANGS) {
    const x = getTour('northern-lights', lang);
    assert.equal(x.bokunProductId, BOKUN_PRODUCT.northernLights);
    assert.equal(x.route, undefined);
    assert.equal(x.mapH2, undefined);
    assert.ok(x.groupFact.includes('2–6'), `${lang} group size must match Bókun (2–6)`);
    assert.equal(x.langFact, 'EN · PL');
    assert.equal(x.bring.length, 4);
    assert.ok(x.revH2, `${lang} needs a generic reviews heading (shared reviews are about day tours)`);
    assert.ok(x.incl.yes.length > 0 && x.incl.no.length > 0);
    for (const b of x.bring) assert.match(sprite, new RegExp(`id=\\\\?"${b.icon.slice(1)}\\\\?"`), `icon ${b.icon} not in sprite`);
  }
});

test('day tours keep their route map', () => {
  for (const slug of ['golden-circle', 'south-coast', 'jokulsarlon']) {
    const x = getTour(slug, 'en');
    assert.ok(x.route.length > 1 && x.mapH2, `${slug} lost its map`);
  }
});
