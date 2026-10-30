'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import { BOKUN_LOADER_SRC, bokunCalendarSrc } from '@/lib/bokun';

type Props = {
  productId: number;
  // Localized copy + WhatsApp link shown when JS is off or the Bókun loader fails (adblock, network, Bókun outage).
  noJsText: string;
  failText: string;
  waHref: string;
  waLabel: string;
};

// Bókun booking calendar. The loader script scans the page for `.bokunWidget`
// elements and mounts the booking iframe into them.
// If the loader loads but no iframe appears within this time, show the WhatsApp fallback.
const MOUNT_TIMEOUT_MS = 15000;

export default function BokunCalendar({ productId, noJsText, failText, waHref, waLabel }: Props) {
  const [failed, setFailed] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const watchMount = () => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      if (boxRef.current && !boxRef.current.querySelector('iframe')) {
        console.error('[bokun] calendar iframe did not mount', { productId, timeoutMs: MOUNT_TIMEOUT_MS });
        setFailed(true);
      }
    }, MOUNT_TIMEOUT_MS);
  };

  if (failed) {
    return (
      <div className="bokun-fallback" role="alert">
        <p className="lead">{failText}</p>
        <a className="btn btn-primary btn-lg" href={waHref} target="_blank" rel="noopener"><span>{waLabel}</span></a>
      </div>
    );
  }

  return (
    <>
      <div ref={boxRef} className="bokunWidget" data-src={bokunCalendarSrc(productId)} />
      <Script
        src={BOKUN_LOADER_SRC}
        strategy="afterInteractive"
        onReady={watchMount}
        onError={() => {
          console.error('[bokun] widget loader failed to load', { productId, src: BOKUN_LOADER_SRC });
          setFailed(true);
        }}
      />
      <noscript>
        <p className="lead">{noJsText}</p>
        <a href={waHref}>{waLabel}</a>
      </noscript>
    </>
  );
}
