import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadTs } from './load-ts.mjs';

const { BOKUN_CHANNEL_UUID, BOKUN_LOADER_SRC, BOKUN_PRODUCT, bokunCalendarSrc } = await loadTs('../lib/bokun.ts');

test('calendar URL points at the journeyiceland.is channel and the given experience', () => {
  assert.equal(
    bokunCalendarSrc(1256721),
    `https://widgets.bokun.io/online-sales/${BOKUN_CHANNEL_UUID}/experience-calendar/1256721`,
  );
});

test('loader uses the same booking channel as the widgets (one channel per page)', () => {
  assert.ok(BOKUN_LOADER_SRC.endsWith(`bookingChannelUUID=${BOKUN_CHANNEL_UUID}`));
});

test('product ids are distinct positive integers', () => {
  const ids = Object.values(BOKUN_PRODUCT);
  assert.ok(ids.every((id) => Number.isInteger(id) && id > 0));
  assert.equal(new Set(ids).size, ids.length);
});
