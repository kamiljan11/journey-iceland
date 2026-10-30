# ADR-0003 — /api/lead: validation, honeypot, rate limit and honest delivery status

Data: 2026-10-30 | Status: przyjete

**Kontekst:** `/api/lead` przyjmuje zapytania z formularzy (strona główna + strony wycieczek bez kalendarza Bókun), zapisuje je w Supabase kluczem service-role i wysyła powiadomienie przez Resend. Przed zmianą: sprawdzane tylko `name` i `email`, brak limitu rozmiaru i częstotliwości, pełny lead (PII) w logu przy braku Supabase, `fetch` do Resend i insert bez timeoutu, HTML maila escapował tylko `<`. Formularz pokazywał sukces bez względu na odpowiedź serwera. Resend nie był wymieniony w polityce prywatności.

**Decyzja:**
- Walidacja w czystej funkcji `parseLead` (`lib/lead.ts`): wymagane `name` + `email` (tak samo łagodnie jak `type="email"` w przeglądarce), limity długości (`LEAD_LIMITS` = `maxLength` w formularzach), znaki sterujące usuwane (CR/LF nie trafią do tematu maila). Pola wyboru (`tour`, `date`, `lang`) spoza listy / nieistniejąca data -> `null`, nie odrzucenie: zapytanie z dziwną datą to dalej zapytanie.
- Przepływ żądania w `lib/lead-handler.ts` z wstrzykniętymi zależnościami (testy bez sieci). Body czytane strumieniowo, > 10 kB -> 413 (także bez `Content-Length`).
- Honeypot: ukryte pole `ji_hp_check` (nazwa spoza słowników autofill — `company`/`website` przeglądarka potrafi wypełnić sama). Wypełnione -> `200 {ok:true}` jak sukces, nic nie zapisujemy ani nie wysyłamy, log `[lead] honeypot hit`. Sukces nie zdradza, czy lead zapisano.
- Rate limit: 10 żądań / IP / 10 min, licznik w pamięci (`lib/rate-limit.ts`), IP z `x-forwarded-for` (pierwszy adres; ustawia go Vercel) lub `x-real-ip`. Bez adresu limit jest pomijany (inaczej jeden wspólny kubeł zablokowałby wszystkich).
- Timeouty: insert 5 s (`abortSignal`), Resend 8 s. Zapis i mail niezależne: awaria bazy nie blokuje maila.
- Nie zapisano i nie wysłano -> `503 not_delivered`. Formularz waliduje pola przed wysłaniem (`checkValidity`) i przy każdej odpowiedzi nie-OK / błędzie sieci wraca do wypełnionego formularza z komunikatem „napisz na WhatsApp / zadzwoń" (`form.err`, 4 języki).
- Logi: tylko losowe `lead id`, powód odrzucenia, klasa błędu / status HTTP / kod Supabase. Mail do przewodnika ma w stopce `ref <lead id>`.

**Triage „gość mówi, że wysłał, a nic nie przyszło":** logi funkcji w Vercel (projekt journey-iceland -> Logs, filtr `[lead`). `LOST` = ani zapis, ani mail (gość zobaczył komunikat z WhatsApp). `emailed but not stored` = sprawdź Supabase (pauza projektu?). `RESEND_API_KEY not set` / `resend responded 4xx` = konfiguracja maila. `rejected: rate_limited` / `honeypot hit` w dużej liczbie = fala spamu albo fałszywe trafienia — wtedy wrócić do tego ADR. Lead w tabeli `leads` znajdziesz po czasie; `ref` z maila = `lead id` z logu.

**Rozważone alternatywy:** `zod` — nowa zależność dla płaskiego schematu 9 pól; czysta funkcja wystarcza i jest testowana. Upstash/Redis lub Vercel KV dla globalnego limitu — nowa infrastruktura i koszt; przy obecnym ruchu nieuzasadnione. Captcha (Turnstile/hCaptcha) — tarcie dla gości i zewnętrzny skrypt; wrócić, jeśli spam przejdzie przez honeypot. Czekanie na odpowiedź przed pokazaniem sukcesu — uczciwsze, ale do ~13 s czekania w najgorszym razie; wybrano optymistyczny sukces z cofnięciem.

**Konsekwencje:** Na Vercelu każda instancja funkcji ma własną pamięć, więc limit działa per instancja (zimny start go zeruje) — spowalnia pojedynczego natrętnego klienta, nie jest globalną ochroną. Środowisko bez Supabase i bez `RESEND_API_KEY` (np. lokalnie) odpowiada 503 — zgodnie z prawdą: zapytanie nigdzie nie trafia. Nowa opcja wycieczki w formularzu: dopisać do `LEAD_TOURS` (test `tests/lead.test.mjs` to wychwyci; inaczej `tour` zapisze się jako `null`).

**Koszt cykliczny:** brak.

**Wyjście:** revert PR przywraca poprzednie zachowanie; schemat tabeli `leads` bez zmian.

**Pułapki:** Jeśli strona stanie za innym proxy niż Vercel, `x-forwarded-for` może podać klient — limit da się wtedy obejść zmianą nagłówka (honeypot i walidacja działają dalej). Transfer danych do Resend (USA) obejmuje ogólny zapis o SCC w pkt 6 polityki prywatności — do potwierdzenia z DPA Resend przez właściciela.
