'use client';
import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';

export type RoutePoint = { lat: number; lng: number; label: string };

const ACCENT = '#c2693f';

function pinHtml(text: string) {
  return `<span style="display:flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:${ACCENT};color:#fff;font:700 13px/1 system-ui,sans-serif;border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,.45)">${text}</span>`;
}

export default function RouteMap({ points }: { points: RoutePoint[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || points.length < 2) return;
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

      const latlngs = points.map((p) => [p.lat, p.lng] as [number, number]);
      points.forEach((p, i) => {
        const label = i === 0 ? 'A' : i === points.length - 1 ? 'B' : String(i);
        const icon = L.divIcon({ className: '', html: pinHtml(label), iconSize: [28, 28], iconAnchor: [14, 14] });
        L.marker([p.lat, p.lng], { icon }).addTo(map!).bindPopup(p.label);
      });

      map.fitBounds(latlngs, { padding: [44, 44] });
      setTimeout(() => map && map.invalidateSize(), 200);

      // Straight dashed line as an instant fallback.
      let line = L.polyline(latlngs, { color: ACCENT, weight: 3, opacity: 0.55, dashArray: '5 9' }).addTo(map);

      // Upgrade to a real road-following route when OSRM is reachable.
      try {
        const coordStr = points.map((p) => `${p.lng},${p.lat}`).join(';');
        const res = await fetch(`https://router.project-osrm.org/route/v1/driving/${coordStr}?overview=full&geometries=geojson`);
        const data = await res.json();
        const geo = data?.routes?.[0]?.geometry?.coordinates;
        if (!cancelled && map && Array.isArray(geo)) {
          const coords = geo.map((c: number[]) => [c[1], c[0]] as [number, number]);
          map.removeLayer(line);
          line = L.polyline(coords, { color: ACCENT, weight: 4, opacity: 0.9 }).addTo(map);
        }
      } catch {
        /* keep the straight-line fallback */
      }
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [points]);

  return <div ref={ref} style={{ width: '100%', height: '100%' }} aria-label="Route map" role="img" />;
}
