'use client';

import { useState } from 'react';
import Script from 'next/script';
import { BOKUN_LOADER_SRC, bokunCalendarSrc } from '@/lib/bokun';

type Props = {
  productId: number;
  label: string;
  className: string;
};

// "Book online" button. The Bókun loader binds `.bokunButton` elements and opens the
// booking calendar from `data-src` in a modal. If the loader fails (adblock, network,
// Bókun outage) the button is removed — callers keep a WhatsApp/contact CTA next to it.
export default function BokunButton({ productId, label, className }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <>
      <button type="button" className={`bokunButton ${className}`} data-src={bokunCalendarSrc(productId)}>
        <span>{label}</span>
      </button>
      <Script
        src={BOKUN_LOADER_SRC}
        strategy="afterInteractive"
        onError={() => {
          console.error('[bokun] widget loader failed to load', { productId, src: BOKUN_LOADER_SRC });
          setFailed(true);
        }}
      />
    </>
  );
}
