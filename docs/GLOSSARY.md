# Glossary

Terms used in the code, data and docs of journeyiceland.is.

| Term | Meaning | Where in code |
|---|---|---|
| Tour page | Product page of one tour on the shared template | `components/TourPage.tsx`, data in `lib/tours.ts` (`META`, `CONTENT`), route `app/[lang]/<slug>/page.tsx` |
| Slug | URL id of a tour: `golden-circle`, `south-coast`, `jokulsarlon`, `northern-lights` | `META` keys in `lib/tours.ts` |
| Northern Lights / aurora / NL | One tour, three names: slug `northern-lights`, home-page keys `aurora.*` and `wa.aurora`, form option `aurora`, card keys `tour.nl.*`, images `public/img/nl-*` and `tour-nl.webp` | `lib/tours.ts`, `lib/dictionary.ts` |
| Bókun | Booking system and source of truth for price, duration, group size and start times | `lib/bokun.ts`, docs/RUNBOOK.md › Bókun |
| Booking channel | Bókun sales channel "journeyiceland.is"; one channel per page (`BOKUN_CHANNEL_UUID`) | `lib/bokun.ts` |
| Product id | Bókun experience id of a tour (e.g. 1283216 = Northern Lights) | `BOKUN_PRODUCT` in `lib/bokun.ts`, `bokunProductId` in `META` |
| Booking calendar | Bókun widget in the Availability section of a tour page; falls back to a WhatsApp message if it does not load | `components/BokunCalendar.tsx` |
| Day-tour defaults | Shared texts (`tp.*` keys) for included / what to bring / headings; a tour overrides them with optional `TourText` fields (`incl`, `bring`, `groupFact`, `langFact`, `hlH2`, `rtH2`, `galH2`, `revH2`) | `lib/tours.ts`, `components/TourPage.tsx` |
| Kate / Kasia | Sylwek's wife; her lunch box and hot chocolate are part of the tours (EN/DE/ES "Kate", PL "Kasia") | `lib/dictionary.ts`, `lib/tours.ts` |
