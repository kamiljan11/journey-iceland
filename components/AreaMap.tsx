'use client';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

const ACCENT = '#c2693f';
const PIN = `<span style="display:block;width:26px;height:26px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${ACCENT};border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.45)"></span>`;

export default function AreaMap({
  center = [64.1466, -21.9426] as [number, number],
  radius = 16000,
  label = 'Reykjavík — pick-up area',
}: { center?: [number, number]; radius?: number; label?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    let cancelled = false;
    let map: import('leaflet').Map | undefined;

    (async () => {
      const L = (await import('leaflet')).default;
      if (cancelled || !ref.current) return;

      map = L.map(ref.current, { scrollWheelZoom: false });
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 19,
      }).addTo(map);

      const circle = L.circle(center, { radius, color: ACCENT, weight: 1.5, opacity: 0.7, fillColor: ACCENT, fillOpacity: 0.12 }).addTo(map);
      const icon = L.divIcon({ className: '', html: PIN, iconSize: [26, 26], iconAnchor: [13, 24] });
      L.marker(center, { icon }).addTo(map).bindPopup(label);

      map.fitBounds(circle.getBounds(), { padding: [18, 18] });
      setTimeout(() => map && map.invalidateSize(), 200);
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [center, radius, label]);

  return <div ref={ref} style={{ width: '100%', height: '100%', minHeight: 320 }} aria-label={label} role="img" />;
}
