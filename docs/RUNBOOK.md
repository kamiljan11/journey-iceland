# RUNBOOK — operacje i awarie

<!-- Uzupelnij pola [..] przy wdrozeniu projektu. Ten plik czyta czlowiek o 3 w nocy — zero prozy, same komendy. -->

## Podstawy
- Produkcja: [URL]
- Hosting: [gdzie stoi + link do panelu]
- Repo: github.com/mountainallservice/[repo]
- Sekrety: Infisical "MAS Group" (localhost:8222) — NIE w repo

## Deploy
- Standard: merge do main -> [auto-deploy przez ... / komenda]
- Reczny: `npm run build` -> [gdzie wrzucic dist]

## Rollback (cel: <5 min)
```bash
git revert <sha-zlego-commita> && git push   # -> redeploy automatyczny
# albo: przywroc poprzedni release/tag w panelu hostingu
```

## Monitoring
- Bledy runtime: Sentry [link do projektu] — alerty ida na mountainallservice@gmail.com
- Healthcheck: [URL/status] — sprawdz najpierw to
- CI: zakladka Actions w repo (Quality Gate musi byc zielony)

## Typowe awarie
| Objaw | Pierwszy krok |
|---|---|
| Strona nie wstaje po deploy | rollback (wyzej), potem debug na branchu |
| Blad 500 na akcji X | Sentry -> stack trace -> `systematic-debugging` |
| Wygasly sekret/API key | Infisical -> zrotuj -> redeploy |
| Domena/DNS | panel ISNIC / rejestratora |

## Bókun — rezerwacje online (Golden Circle, South Coast, Jökulsárlón, zorza)
- Panel: https://journey-iceland.bokun.io (vendor 143543), kanał „journeyiceland.is”. Bókun = źródło prawdy dla ceny, czasu trwania i wielkości grupy; ID produktów w `lib/bokun.ts` (`BOKUN_PRODUCT`).
- Gdzie: kalendarz w sekcji „Availability” stron wycieczek (`bokunProductId` w `lib/tours.ts`), przycisk „Book online” w sekcji zorzy na stronie głównej (`components/BokunButton.tsx`).
- Zmiana ceny/limitu w Bókun → popraw teksty strony we wszystkich 4 językach (`lib/dictionary.ts`): `tour.gc|sc|jk.price` + `.alt` (przeliczenie €/$/zł), `tour.gc.dur`, `tp.qf.price`, `tp.qf.dur` (GC), `tp.qf.priv` (maks. osób), `compare.mine.1`, `aurora.p` (cena/grupa/czas zorzy), `transfer.kef.price`; SC/JK czas trwania: `qfDur` w `lib/tours.ts`. `npm test` pilnuje, że klucze są we wszystkich językach.
- Włączenie kolejnego produktu: ID do `BOKUN_PRODUCT` + `bokunProductId` w `META` albo `<BokunButton>`; dopisz nazwę w `footer.disclaimer`, `faq.3.a` i `lib/legal.ts` (ADR-0001).
- Kalendarz/przycisk się nie ładuje: konsola `[bokun] widget loader failed to load` albo `[bokun] calendar iframe did not mount` (15 s); klient widzi komunikat z WhatsApp (kalendarz) albo zostaje sam przycisk WhatsApp (zorza). Sprawdź status Bókun i blokery reklam; szybki rollback = usuń `bokunProductId` (wraca formularz) / `<BokunButton>`.
- Nie podpięte (decyzja 2026-10-30): transfer KEF 1258742 (w Bókun start 00:00, opis z szablonu, brak pytania o lot), Small Group South Coast 1278903 (dane do poprawy), Blue Lagoon (brak produktu).

## Kontakty
- Wlasciciel: Kamil Jan, mountainallservice@gmail.com
- Klient: [imie, kontakt, SLA jesli jest]
