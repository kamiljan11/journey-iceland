# Journey Iceland — journeyiceland.is

Strona prywatnych wycieczek i transferów po Islandii (Sylwek i Kasia, Journey Iceland ehf.): podstrony wycieczek z rezerwacją online w Bókun, formularz zapytań, 4 języki (EN/PL/DE/ES).

## Stack
- Frontend: Next.js 15 (App Router, SSG stron `/[lang]/...`) + React 19 + TypeScript
- Backend/API: `app/api/lead/route.ts` — formularz zapytań: zapis do Supabase (service role, `lib/supabase.ts`) + powiadomienie e-mail przez Resend
- Rezerwacje: widgety Bókun (kalendarz w sekcji Availability), źródło prawdy dla cen i terminów — `lib/bokun.ts`, docs/RUNBOOK.md › Bókun
- Opinie: Google Places (`lib/reviews.ts`)
- Baza: Supabase (tabela leadów)
- Hosting/deploy: Vercel, gałąź `main` = produkcja, PR = preview

Gdzie co jest: dane i teksty wycieczek `lib/tours.ts`, słownik UI `lib/dictionary.ts`, szablon strony wycieczki `components/TourPage.tsx`, teksty prawne `lib/legal.ts`. Pojęcia: docs/GLOSSARY.md. Decyzje: docs/adr/. Operacje i awarie: docs/RUNBOOK.md.

## Wymagania
- Node 20+
- npm

## Setup
```bash
npm install
cp .env.example .env   # uzupelnij wartosci (sekrety: Infisical "MAS Group")
```

## Komendy
| Komenda | Co robi |
|---|---|
| `npm run dev` | serwer deweloperski |
| `npm run build` | build produkcyjny |
| `npm start` | serwer produkcyjny (po build) |
| `npx tsc --noEmit` | sprawdzenie typów |
| `npm test` | testy (`node --test tests/*.test.mjs`) |

## Zmienne srodowiskowe
Wartości: Vercel (projekt `journey-iceland`) / Infisical; w repo tylko nazwy (`.env.example`).

| Nazwa | Wymagana? | Opis |
|---|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | tak (formularz) | URL projektu Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | tak (formularz) | klucz serwerowy do zapisu leadów — tylko po stronie serwera |
| `RESEND_API_KEY` | tak (formularz) | mail o leadzie do przewodnika; bez niego formularz odpowiada błędem i odsyła gościa na WhatsApp (ADR-0003) |
| `LEAD_NOTIFY_EMAIL` | nie | adres, na który idą powiadomienia o leadach |
| `LEAD_FROM_EMAIL` | nie | nadawca powiadomień (domyślnie onboarding@resend.dev) |
| `GOOGLE_PLACES_KEY` | nie | opinie Google na stronie; bez klucza nie są pobierane (`lib/reviews.ts` zwraca null) |

## Struktura
```
app/            # trasy Next.js (app/[lang]/<strona>, app/api/lead)
components/     # komponenty (TourPage = szablon strony wycieczki)
lib/            # dane i logika: tours, dictionary, bokun, legal, supabase, reviews
public/img/     # zdjęcia (webp)
tests/          # testy node:test
e2e/            # testy Playwright (jeszcze nieuruchamiane w CI)
docs/adr/       # decyzje architektoniczne
docs/RUNBOOK.md # operacje: deploy, rollback, awarie
```

## Deploy i wersjonowanie
- Flow: feature branch -> PR -> zielone CI + review -> merge do main -> deploy
- Wersje: SemVer, tag `vX.Y.Z` tworzy GitHub Release (auto-notes)
- Zmiany: `CHANGELOG.md` (Keep a Changelog) — aktualizuj sekcje [Unreleased] w kazdym PR

## Wlasciciel
MAS Group / Kamil Jan — mountainallservice@gmail.com
