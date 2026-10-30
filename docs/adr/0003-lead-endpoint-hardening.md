# ADR-0003 — /api/lead: validation, honeypot and in-memory rate limit

Data: 2026-10-30 | Status: przyjete

**Kontekst:** `/api/lead` przyjmuje zapytania z formularzy (strona główna + strony wycieczek), zapisuje je w Supabase kluczem service-role i wysyła powiadomienie przez Resend. Przed zmianą: sprawdzane tylko `name` i `email`, brak limitu rozmiaru i częstotliwości, pełny lead (PII) w logu przy braku Supabase, `fetch` do Resend bez timeoutu, HTML maila escapował tylko `<`. Resend nie był wymieniony w polityce prywatności.

**Decyzja:**
- Walidacja w czystej funkcji `parseLead` (`lib/lead.ts`): wymagane `name` + `email`, limity długości (`LEAD_LIMITS`), `tour` z listy `LEAD_TOURS`, `date` w formacie `YYYY-MM-DD`, nieznany `lang` -> `null`. Body > 10 kB -> 413.
- Honeypot: ukryte pole `company` w obu formularzach; wypełnione -> odpowiedź `200 {ok:true, stored:false}` (bot nie dostaje sygnału), nic nie zapisujemy ani nie wysyłamy.
- Rate limit: 5 żądań / IP / 10 min, licznik w pamięci procesu (`lib/rate-limit.ts`), IP z `x-forwarded-for` (pierwszy adres; ustawia go Vercel) lub `x-real-ip`.
- Logi: tylko losowe `lead id` + klasa błędu / status HTTP / kod błędu Supabase, bez danych gościa.
- Resend: `AbortSignal.timeout(8000)`, pełne escapowanie HTML (`& < > " '`). Resend dopisany do podmiotów przetwarzających (EN + PL).
- Formularze mają `maxLength` równe limitom serwera; test pilnuje zgodności (formularz pokazuje sukces optymistycznie, więc odrzucenie na serwerze = cicha utrata zapytania).

**Rozważone alternatywy:** `zod` — nowa zależność dla płaskiego schematu 9 pól, czysta funkcja wystarcza i jest testowana. Upstash/Redis lub Vercel KV dla globalnego limitu — nowa infrastruktura i koszt; przy obecnym ruchu nieuzasadnione. Captcha (Turnstile/hCaptcha) — tarcie dla gości i zewnętrzny skrypt; wrócić, jeśli spam przejdzie przez honeypot.

**Konsekwencje:** Na Vercelu każda instancja funkcji ma własną pamięć, więc limit działa per instancja (zimny start go zeruje) — spowalnia pojedynczego natrętnego klienta, nie jest globalną ochroną. Nowa opcja wycieczki w formularzu wymaga dopisania jej do `LEAD_TOURS` (test `tests/lead.test.mjs` to wychwyci).

**Koszt cykliczny:** brak.

**Wyjście:** revert PR przywraca poprzednie zachowanie; schemat tabeli `leads` bez zmian.

**Pułapki:** Jeśli kiedyś strona stanie za innym proxy niż Vercel, `x-forwarded-for` może podać klient — wtedy limit można obejść zmianą nagłówka (honeypot i walidacja działają dalej).
