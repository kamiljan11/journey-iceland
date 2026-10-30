# ADR-0001 — Bókun booking calendar widget for online bookings

Data: 2026-10-30 | Status: przyjete (pilot: Golden Circle)

**Kontekst:** Strona przyjmowała tylko zapytania (formularz -> /api/lead, potwierdzenie osobiste, płatność myPOS). Produkty, ceny i dostępność żyją w Bókun (vendor 143543, kanał „journeyiceland.is").

**Decyzja:** Oficjalny widget „Booking Calendar" Bókun (iframe + BokunWidgetsLoader przez `next/script`). Wycieczka dostaje `bokunProductId` w `lib/tours.ts` (dane, nie kod); wtedy sekcja `#avail` pokazuje kalendarz zamiast formularza. Stałe kanału w `lib/bokun.ts`.

**Rozważone alternatywy:** własny kalendarz z REST API (availabilities) + formularz — brak płatności, więcej kodu; pełny checkout przez REST (`RESERVE_FOR_EXTERNAL_PAYMENT`) — 10–16 h, trzymanie kluczy HMAC na serwerze. Widget = najmniej kodu, Bókun jest źródłem prawdy cen.

**Konsekwencje:** Kolejna wycieczka = dopisanie ID w `META`. Wygląd kalendarza konfiguruje się w panelu Bókun, nie w CSS strony. Teksty prawne/FAQ wymieniają Bókun jako wyjątek od „tylko zapytania".

**Pułapki:** Jedna strona = jeden booking channel (loader rzuca `alert` przy dwóch UUID). Ceny/limity osób w słowniku muszą zgadzać się z Bókun — źródłem prawdy jest Bókun.
