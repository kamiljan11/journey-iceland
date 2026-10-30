'use client';

import Script from 'next/script';
import { BOKUN_LOADER_SRC, bokunCalendarSrc } from '@/lib/bokun';

// Bókun booking calendar. The loader script scans the page for `.bokunWidget`
// elements and mounts the booking iframe into them.
export default function BokunCalendar({ productId }: { productId: number }) {
  return (
    <>
      <div className="bokunWidget" data-src={bokunCalendarSrc(productId)} />
      <Script
        src={BOKUN_LOADER_SRC}
        strategy="afterInteractive"
        onError={() => console.error('[bokun] widget loader failed to load', { productId })}
      />
      <noscript>Please enable JavaScript in your browser to book</noscript>
    </>
  );
}
