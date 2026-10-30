# RUNBOOK — operacje i awarie

<!-- Ten plik czyta czlowiek o 3 w nocy — zero prozy, same komendy. -->

## Podstawy
- Produkcja: https://journeyiceland.is
- Hosting: Vercel, projekt `journey-iceland` (panel: vercel.com -> journey-iceland); preview dla kazdego PR (bez env Supabase/Resend — formularz pokazuje tam komunikat WhatsApp, to normalne)
- Baza: Supabase, tabela `leads` (schemat `supabase/schema.sql`, RLS wlaczone, zapis tylko kluczem service-role z serwera)
- Mail o leadzie: Resend (`RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`, `LEAD_FROM_EMAIL` w Vercel, srodowisko Production) — bez niego formularz odpowiada bledem (ADR-0003)
- Repo: github.com/kamiljan11/journey-iceland
- Sekrety: Infisical "MAS Group" (localhost:8222) + zmienne w Vercel — NIE w repo

## Deploy
- Standard: merge do main -> auto-deploy Vercel (produkcja); PR -> preview URL w komentarzu Vercela
- Reczny: brak (tylko przez Vercel)

## Rollback (cel: <5 min)
```bash
git revert <sha-zlego-commita> && git push   # -> redeploy automatyczny
# albo: przywroc poprzedni release/tag w panelu hostingu
```

## Monitoring
- Bledy runtime: Vercel -> journey-iceland -> Logs (brak Sentry); leady: filtr `[lead`
- Healthcheck: https://journeyiceland.is/en (200) — sprawdz najpierw to
- Formularz po deployu (bez maila): `curl -s -H 'content-type: application/json' -d '{"name":"t","email":"t@x.is","ji_hp_check":"x"}' https://www.journeyiceland.is/api/lead` -> `{"ok":true}`; pelna sciezka z mailem = jedno prawdziwe zapytanie z formularza
- CI: zakladka Actions w repo (Quality Gate musi byc zielony)

## Typowe awarie
| Objaw | Pierwszy krok |
|---|---|
| Strona nie wstaje po deploy | rollback (wyzej), potem debug na branchu |
| Blad 500 na akcji X | Vercel -> Logs (stack trace) -> `systematic-debugging` |
| Gość wysłał formularz, nic nie przyszło | Vercel -> Logs, filtr `[lead`: `LOST` / `emailed but not stored` / `rejected:` / `honeypot hit` — znaczenie i kroki: ADR-0003 › Triage; `ref` z maila = `id` wiersza w `leads` |
| Wygasly sekret/API key | Infisical -> zrotuj -> redeploy |
| Domena/DNS | panel ISNIC / rejestratora |

## Bókun — rezerwacje online (Golden Circle, South Coast, Jökulsárlón, zorza)
- Panel: https://journey-iceland.bokun.io (vendor 143543), kanał „journeyiceland.is”. Bókun = źródło prawdy dla ceny, czasu trwania i wielkości grupy; ID produktów w `lib/bokun.ts` (`BOKUN_PRODUCT`).
- Gdzie: kalendarz w sekcji „Availability” stron wycieczek (`bokunProductId` w `lib/tours.ts`), także `/[lang]/northern-lights`; sekcja zorzy na stronie głównej linkuje do tej podstrony.
- Zmiana ceny/limitu w Bókun → popraw teksty strony we wszystkich 4 językach (`lib/dictionary.ts`): `tour.gc|sc|jk.price` + `.alt` (przeliczenie €/$/zł), `tour.gc.dur`, `tp.qf.price`, `tp.qf.dur` (GC), `tp.qf.priv` (maks. osób), `compare.mine.1`, `aurora.p` + `tour.nl.price` (cena/grupa/czas zorzy; teksty podstrony zorzy w `CONTENT['northern-lights']` w `lib/tours.ts`), `transfer.kef.price`; SC/JK czas trwania: `qfDur` w `lib/tours.ts`. `npm test` pilnuje, że klucze są we wszystkich językach.
- Włączenie kolejnego produktu: ID do `BOKUN_PRODUCT` + `bokunProductId` w `META` (+ `CONTENT` i strona w `app/[lang]/<slug>/page.tsx` + `app/sitemap.ts`); dopisz nazwę w `footer.disclaimer`, `faq.3.a` i `lib/legal.ts` (ADR-0001).
- Kalendarz/przycisk się nie ładuje: konsola `[bokun] widget loader failed to load` albo `[bokun] calendar iframe did not mount` (15 s); klient widzi komunikat z WhatsApp. Sprawdź status Bókun i blokery reklam; szybki rollback = usuń `bokunProductId` (wraca formularz).
- Nie podpięte (decyzja 2026-10-30): transfer KEF 1258742 (w Bókun start 00:00, opis z szablonu, brak pytania o lot), Small Group South Coast 1278903 (dane do poprawy), Blue Lagoon (brak produktu). Cena KEF na stronie i tak idzie za Bókun (23 000 ISK) — niepodpięty jest tylko widget.
- Dane z Bókun sprawdzone 2026-10-30 (MCP `get_product` + `get_pricing_and_availability`, 10.11.2026): GC 95 000 ISK 1–6 / 6 h; SC 120 000 ISK 1–6 / 09:00; JK 180 000 ISK 1–6 / 08:00; zorza 55 000 ISK 2–6 / 4 h / 21:00; KEF 23 000 ISK 1–4. Ceny na stronie są przepisane ręcznie — automatyczne pobieranie z Bókun przy buildzie to możliwy następny krok (wymaga klucza REST read-only).
- Kontrola po deployu (ręcznie, ~2 min; brak testu E2E z przeglądarką w CI): `/en/south-coast#avail`, `/en/jokulsarlon#avail` i `/en/northern-lights#avail` → w kalendarzu widać produkt i ceny; strona główna `#aurora` → „See tour” prowadzi do `/en/northern-lights`; konsola bez `[bokun]`. Awarię widać tylko w konsoli przeglądarki klienta (brak zdalnego alertu).
- Nazewnictwo (zorza = `northern-lights` = `aurora.*` = `tour.nl.*` = `nl-*`, pojęcia Bókun): docs/GLOSSARY.md.
- Zdjęcia zorzy: `public/img/nl-own*.webp` = zdjęcia klienta z produktu Bókun 1283216; `nl-hero`, `nl-thermos`, `tour-nl`, `nl-g*` = Pexels (licencja Pexels, bez wymogu atrybucji). Własne zdjęcia Sylwka mile widziane — podmiana pliku o tej samej nazwie.
- CSP: strona nie ma dziś Content-Security-Policy; jeśli zostanie dodana, musi dopuścić `widgets.bokun.io` i `static.bokun.io` (script-src, frame-src).

## Kontakty
- Wlasciciel: Kamil Jan, mountainallservice@gmail.com
- Klient: [imie, kontakt, SLA jesli jest]
