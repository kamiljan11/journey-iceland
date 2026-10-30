# ADR-0001 — Bókun booking calendar widget for online bookings

Data: 2026-10-30 | Status: przyjete (pilot: Golden Circle; 2026-10-30: + South Coast, Jökulsárlón — kalendarz; zorza — od 2026-10-30 własna podstrona z kalendarzem, przycisk-modal usunięty; patrz „Zmiana 2026-10-30 (wieczór)” niżej)

**Kontekst:** Strona przyjmowała tylko zapytania (formularz -> /api/lead, potwierdzenie osobiste, płatność myPOS). Produkty, ceny i dostępność żyją w Bókun (vendor 143543, kanał „journeyiceland.is").

**Decyzja:** Oficjalny widget „Booking Calendar" Bókun (iframe + BokunWidgetsLoader przez `next/script`). Wycieczka dostaje `bokunProductId` w `lib/tours.ts` (dane, nie kod); wtedy sekcja `#avail` pokazuje kalendarz zamiast formularza. Stałe kanału w `lib/bokun.ts`.

**Rozważone alternatywy:** własny kalendarz z REST API (availabilities) + formularz — brak płatności, więcej kodu; pełny checkout przez REST (`RESERVE_FOR_EXTERNAL_PAYMENT`) — 10–16 h, trzymanie kluczy HMAC na serwerze. Widget = najmniej kodu, Bókun jest źródłem prawdy cen.

**Konsekwencje:** Kolejna wycieczka = dopisanie ID w `META` + aktualizacja tekstów, które dziś wymieniają wprost Golden Circle (`lib/legal.ts`, `footer.disclaimer`, `faq.3.a`). Wygląd kalendarza konfiguruje się w panelu Bókun, nie w CSS strony. Teksty prawne/FAQ wymieniają Bókun jako wyjątek od „tylko zapytania".

**Dane handlowe:** Cena, czas i limit osób GC (95 000 ISK / 6 h / max 6) przepisane z Bókun na decyzję Kamila (2026-10-30: „Bókun ma prawidłową cenę i detale”).

**Koszt cykliczny:** brak kosztu hostingu po naszej stronie; prowizje/opłaty wg planu Bókun właściciela konta (Journey Iceland, vendor 143543).

**Wyjście:** usunięcie `bokunProductId` z `META` przywraca formularz zapytania (rollback = revert PR).

**Pułapki:** Jedna strona = jeden booking channel (loader rzuca `alert` przy dwóch UUID). Ceny/limity osób w słowniku muszą zgadzać się z Bókun — źródłem prawdy jest Bókun.

**Rozszerzenie 2026-10-30:** South Coast i Jökulsárlón — ten sam kalendarz w sekcji Availability. (Stan przed zmianą wieczorną:) Zorza nie miała własnej podstrony, więc na stronie głównej był przycisk Bókun (`.bokunButton`), który otwiera kalendarz w oknie modalnym; przycisk WhatsApp zostaje obok jako druga droga. Pominięte (dane w Bókun niekompletne): transfer KEF, Small Group South Coast; Blue Lagoon nie ma produktu w Bókun.

**Zmiana 2026-10-30 (wieczór):** modal z przycisku na stronie głównej był dla klienta niejasny (Kamil). Zorza dostała własną podstronę `/[lang]/northern-lights` na wspólnym szablonie `TourPage` z kalendarzem w sekcji Availability; przycisk `.bokunButton` i `components/BokunButton.tsx` usunięte, sekcja zorzy na stronie głównej linkuje do podstrony. Wycieczka bez stałej trasy nie ma sekcji mapy (`mapH2` puste); pola `groupFact`, `langFact`, `incl`, `bring`, `hlH2`, `rtH2`, `galH2` w `TourText` nadpisują wspólne teksty dziennych wycieczek.
