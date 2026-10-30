# ADR-0002 — Upgrade do Next.js 15.5 + React 19 (łatki CVE)

Data: 2026-10-30 | Status: przyjete

**Kontekst:** `npm audit` na main: next 14.2.35 = critical (GHSA-2464-fhr4-w9xw RCE w Image Optimization/SVG, GHSA-2xp9-vwfh-vxw4, GHSA-p293-qw3h-jr36 + high DoS/SSRF), zakres podatny 9.5.0–15.5.27; CI czerwone od 2026-08-18. Linia 14.x nie dostaje poprawki.

**Decyzja:** next 15.5.28 (najniższe wydanie poza zakresem podatnym), react/react-dom 19.2.9 (App Router w Next 15 wymaga React 19), typy 19.3.0; sharp/source-map-js przez `npm audit fix`. Parametry tras w Next 15 są Promise → jeden helper `langFromParams()` w `lib/dictionary.ts` używany przez wszystkie strony `app/[lang]`.

**Rozwazone alternatywy:** Next 16.x — większy skok (kolejne zmiany API), niepotrzebny do zamknięcia CVE; zostanie na 14 + wyłączenie optymalizacji obrazów — nie zamyka pozostałych advisory i trzyma CI na czerwono.

**Konsekwencje:** CI audit zielony; zachowanie stron bez zmian (sprawdzone: wszystkie trasy 200, Bókun, recenzje Google, język PL). Fetch w Next 15 domyślnie nie jest cache'owany — jedyny cache'owany fetch (`lib/reviews.ts`) ma jawne `revalidate`.

**Pulapki dla przyszlego siebie:** nowe strony w `app/[lang]` muszą `await params` (użyj `langFromParams`); `useRef` w React 19 wymaga wartości początkowej. Skok do Next 16 = osobny ADR/PR.
