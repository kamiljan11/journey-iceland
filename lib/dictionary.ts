/* ============================================================
   Journey Iceland — i18n + image config
   Languages: en (default), pl, de.  Live retranslation.
   ============================================================ */

/* ---- real, hot-linked golden-hour photography (Unsplash) ----
   Confirmed working IDs. Anything without a real shot yet falls
   back to a labelled golden-hour gradient placeholder. */
const U = (id: string) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=80&w=2000&auto=format&fit=crop`;
export const PHOTOS = {
  seljalandsfoss : U('1723134090745-f6402a0c014d'), // aerial waterfall, golden hour
  field          : U('1672285312648-420f875c7af8'), // person in field, golden hour
  aurora         : U('1491466424936-e304919aada7'), // northern lights, Iceland canyon
};

/* ============================================================ */
export const I18N: Record<string, Record<string,string>> = {
/* =========================== ENGLISH =========================== */
en:{
  "doc.title":"Journey Iceland — Private tours & airport transfers with a local",
  "nav.tours":"Tours","nav.why":"Why me","nav.about":"About","nav.gallery":"Gallery","nav.reviews":"Reviews","nav.faq":"FAQ","nav.contact":"Contact",
  "cta.check":"Check availability","cta.wa":"Message me on WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Ask about it",
  "brand.tag":"Private tours · Iceland",
  "menu":"Menu",

  "hero.eyebrow":"Private driver & guide · since 2014",
  "hero.h1":"Iceland, the way a local shows it.",
  "hero.sub":"Private tours & airport transfers with a local driver who treats you like family — hidden places, your pace, honest advice.",
  "hero.langline":"English · Polski · Deutsch",
  "hero.scroll":"Scroll",

  "trust.rating":"Google rated","trust.insured":"Experienced & insured driver","trust.private":"Private groups only","trust.langs":"English · Polski · Deutsch","trust.pickup":"Free hotel pick-up",

  "tours.eyebrow":"Tours & transfers","tours.h2":"Where would you like to go?","tours.lead":"Small private groups, hotel pick-up, and a route we shape around you. Tour prices are per group — not per person.",
  "tours.toursLabel":"Day tours","tours.transfersLabel":"Airport & spa transfers",
  "tour.see":"See tour","tour.tbc":"price TBC","tour.perGroup":"per group",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 hrs","tour.gc.price":"from 89,000 ISK","tour.gc.alt":"≈ $640 / €590 · per group",
  "tour.sc.name":"South Coast","tour.sc.dur":"10–11 hrs","tour.sc.price":"from 129,000 ISK","tour.sc.alt":"≈ $930 / €855 · per group",
  "tour.jk.name":"Jökulsárlón Glacier Lagoon","tour.jk.dur":"12–14 hrs","tour.jk.price":"from 189,000 ISK","tour.jk.alt":"≈ $1,360 / €1,250 · per group",

  "transfer.kef.name":"Keflavík Airport ⇄ Reykjavík","transfer.kef.meta":"≈ 50 min · up to 4 guests","transfer.kef.price":"from 22,000 ISK",
  "transfer.bl.name":"Blue Lagoon transfer","transfer.bl.meta":"Airport or city · wait & return option","transfer.bl.price":"from 28,000 ISK",
  "transfer.check":"Check availability",

  "tours.cta.h3":"We drive everywhere — custom route on request.","tours.cta.p":"Volcanoes, hot springs, a wedding photo run, a multi-day loop. Tell me the idea and I'll build the day around it.",

  "aurora.tag":"This autumn · pre-booking now","aurora.eyebrow":"Northern Lights","aurora.h2":"Chasing the Northern Lights — this autumn.","aurora.p":"From September the skies go dark again. I watch the forecast for you, drive away from the city glow, and Kate sends a thermos of hot chocolate. Seats are limited — ask to pre-book now.","aurora.cta1":"Ask about it",

  "why.eyebrow":"Why travel with me","why.h2":"You're not a number on a bus.","why.lead":"One driver, one small group, one day shaped entirely around you.",
  "why.1.t":"Private & personal","why.1.d":"Only your group in the car. We start when you like, stop where you like, and never wait on forty strangers.",
  "why.2.t":"Local & honest","why.2.d":"I live here. I'll take you to the quiet spots — and tell you honestly if it's not worth going today.",
  "why.3.t":"Safety first","why.3.d":"Experienced, fully insured, and sensible about the weather. If a road is bad, we change the plan, not your safety.",
  "why.4.t":"Your language","why.4.d":"I guide in English, Polish and German — so nothing important gets lost on the road.",
  "compare.mine.title":"Private with me","compare.mine.tag":"You","compare.bus.title":"Big bus tour","compare.bus.tag":"Them",
  "compare.mine.1":"Your group only — up to 4 in comfort","compare.mine.2":"Leave when you're ready, stop on a whim","compare.mine.3":"Hidden spots the buses can't reach","compare.mine.4":"Home-cooked snacks from Kate","compare.mine.5":"One guide who knows your name",
  "compare.bus.1":"40+ strangers on a fixed schedule","compare.bus.2":"15 minutes per photo stop, then go","compare.bus.3":"Only the crowded headline sights","compare.bus.4":"A petrol-station sandwich","compare.bus.5":"A microphone and a headcount",

  "about.eyebrow":"About","about.h2":"Hi, I'm John.","about.lead":"A Pole who fell for Iceland years ago — and never left.","about.p1":"I came for a season and stayed for the light. After years of driving these roads I know where the buses don't go: the waterfall with no car park, the hot spring locals keep to themselves, the spot where the sunset lands just right.","about.p2":"My wife Kate is a chef, so you'll never leave hungry. We treat every guest the way we'd want to be treated abroad — like family. That's the whole idea behind Journey Iceland.","about.sign":"— John & Kate","about.badge.num":"600+","about.badge.t":"happy guests since 2014",

  "exp.eyebrow":"The experience","exp.h2":"More than a drive — an experience.","exp.lead":"The little things that turn a transfer into a story you'll tell back home.",
  "exp.1.t":"Home-cooked welcome set","exp.1.d":"Kate is a chef. Every tour starts with a warm welcome box — skyr, fresh fruit, something baked that morning.",
  "exp.2.t":"Roadside grill & tastings","exp.2.d":"On longer days we stop to grill Icelandic hot dogs and taste local treats with a view no restaurant can sell you.",
  "exp.3.t":"Restaurant perk","exp.3.d":"Guests get a standing discount at Reykjavík Kitchen — and I'll take your photos along the way, free of charge.",
  "exp.foot":"\u201cI'll tell you honestly if it's not worth going today.\u201d",

  "gallery.eyebrow":"Gallery","gallery.h2":"Moments from the road.","gallery.lead":"Golden light, quiet roads, warm food, and the odd green sky. Swipe through.",

  "reviews.eyebrow":"Reviews","reviews.h2":"They came as guests, left as friends.","reviews.lead":"A few words from recent travellers. More on Google.",
  "rev.1.q":"John found us a waterfall with not one other person there. Best day of our whole Iceland trip — and we never felt rushed.","rev.1.name":"Sarah & Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Profesjonalnie, ciepło i po polsku. Czuliśmy się zaopiekowani od lotniska po ostatni przystanek.","rev.2.name":"Tomasz K.","rev.2.loc":"Warszawa, PL",
  "rev.3.q":"Honest about the weather, flexible with the plan, and Kate's snacks were unreal. Booked him twice in one week.","rev.3.name":"Emma L.","rev.3.loc":"London, UK",
  "rev.4.q":"Sehr persönlich und entspannt. John kennt Orte, die in keinem Reiseführer stehen. Absolute Empfehlung!","rev.4.name":"Familie Berger","rev.4.loc":"München, DE",
  "rev.5.q":"Our flight was delayed at midnight and he was still there, smiling, with the heater on. That's the whole company in one moment.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"We stopped wherever we wanted for photos. Try doing that on a 50-seat bus. Worth every króna.","rev.6.name":"Priya & Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Good to know","faq.h2":"Questions, answered.",
  "faq.1.q":"Is it safe to drive Iceland's roads with you?","faq.1.a":"Yes. I'm an experienced, fully insured local driver in a well-maintained 4×4. I read the weather and road service daily and will happily change a plan rather than take a risk. Your safety always comes before any itinerary.",
  "faq.2.q":"Can you guarantee we'll see the Northern Lights?","faq.2.a":"No one honestly can — the aurora depends on darkness, clear skies and solar activity. What I can promise is that I track the forecast, drive you away from city light to the best chance, and keep you warm while we wait. If the sky simply won't cooperate, I'll tell you straight.",
  "faq.3.q":"How does payment work if I can't book online?","faq.3.a":"By design. You send an availability request, we confirm the details together personally, and then I send a secure payment link or take card on the day. No deposit is taken just to ask about a date.",
  "faq.4.q":"Which languages do you speak?","faq.4.a":"I guide in English, Polish and German. Just tell me which you're most comfortable in and that's the language for the day.",
  "faq.5.q":"Is the tour really private?","faq.5.a":"Always. It's only ever your group in the car — never shared with strangers. The pace, the stops and the music are yours.",
  "faq.6.q":"Do you pick up from my hotel?","faq.6.a":"Yes — free hotel, apartment or campsite pick-up across the Reykjavík area, and from Keflavík Airport for transfers. I'll confirm the exact time when we talk.",
  "faq.7.q":"What if the weather turns bad on the day?","faq.7.a":"We adapt. I'll re-route to sheltered, still-beautiful stops, move the day if it's truly unsafe, or reschedule with no fuss. You'll never be pushed out into a storm for the sake of a timetable.",

  "contact.eyebrow":"Check availability","contact.h2":"Let's plan your day in Iceland.","contact.lead":"Send a quick request and I'll reply personally — usually within a few hours — to confirm the details with you.",
  "form.tour":"Which tour or transfer?","form.tour.opt":"Choose one…","form.date":"Preferred date","form.people":"How many of you?","form.name":"Your name","form.email":"Email","form.phone":"Phone / WhatsApp","form.phone.opt":"(optional)","form.msg":"Anything else?","form.msg.opt":"(optional)","form.msg.ph":"Flight times, ideas, must-see places…",
  "form.send":"Send request","form.legal":"This is an availability request, not a booking — I'll confirm details with you personally.",
  "form.sent.title":"Thank you — request sent!","form.sent.body":"I'll get back to you personally, usually within a few hours, to confirm the details.",
  "form.p.1":"1–4 people","form.p.2":"5–8 people",
  "opt.gc":"Golden Circle — private tour","opt.sc":"South Coast — private tour","opt.jk":"Jökulsárlón Glacier Lagoon","opt.kef":"Keflavík airport transfer","opt.bl":"Blue Lagoon transfer","opt.aurora":"Northern Lights (autumn)","opt.custom":"Custom / not sure yet",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 555 0148","cm.phone.l":"Call / text","cm.phone.v":"+354 555 0148","cm.mail.l":"Email","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Based in","cm.hours.v":"Reykjavík · 7 days a week","map.label":"map — Reykjavík pick-up area",

  "pl.offer":"",

  "footer.tagline":"Private tours and airport transfers across Iceland — a local driver who treats you like family.","footer.explore":"Explore","footer.tours":"Tours","footer.contact":"Contact","footer.disclaimer":"Journey Iceland is a private driver & guide service. Availability requests are confirmed personally; this site does not take online bookings or payments.","footer.privacy":"Privacy","footer.terms":"Terms","footer.rights":"© 2026 Journey Iceland. Made with warmth in Reykjavík.",

  /* ---------------- TOUR PAGE: Golden Circle ---------------- */
  "tp.bc.tours":"Tours","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Private day tour · from Reykjavík",
  "tp.h1":"Golden Circle — private tour from Reykjavík.","tp.sub":"Iceland's three icons — a thundering waterfall, an erupting geyser and a continental rift — at your own pace, with no crowds and no clock.",
  "tp.qf.dur":"6–8 hours","tp.qf.price":"from 89,000 ISK","tp.qf.priv":"Private · max 4","tp.qf.pickup":"Hotel pick-up","tp.qf.lang":"EN · PL · DE",
  "tp.sn.overview":"Overview","tp.sn.route":"Route","tp.sn.map":"Map","tp.sn.gallery":"Gallery","tp.sn.reviews":"Reviews","tp.sn.faq":"FAQ","tp.sn.avail":"Availability",

  "tp.hl.eyebrow":"In short","tp.hl.h2":"What the day looks like.",
  "tp.hl.1":"Þingvellir — walk between two continents","tp.hl.2":"Strokkur geyser erupting every few minutes","tp.hl.3":"Gullfoss, the golden two-tier waterfall","tp.hl.4":"A quiet stop the buses drive straight past","tp.hl.5":"Kerið volcanic crater (seasonal)","tp.hl.6":"Door-to-door hotel pick-up & drop-off","tp.hl.7":"Kate's home-cooked welcome box","tp.hl.8":"Your photos taken along the way",

  "tp.ov.eyebrow":"Why this tour","tp.ov.h2":"The classic — done quietly.","tp.ov.p1":"The Golden Circle is the route everyone drives, and there's a reason: in a single loop you get a tectonic rift valley, Iceland's most reliable geyser and one of its grandest waterfalls. The difference is how you do it.","tp.ov.p2":"With a big bus you get fifteen minutes and a headcount. With me, it's just your group. We leave when you're ready, linger where it's beautiful, and slip in a stop or two the coaches never see — a turf church, a quiet crater, a farm that makes ice cream from its own cows.","tp.ov.p3":"I watch the day's weather and light and shape the order of stops around it, so you're at the prettiest places when they look their best.",

  "tp.rt.eyebrow":"The route","tp.rt.h2":"Stop by stop.",
  "tp.rt.1.t":"Hotel pick-up","tp.rt.1.time":"around 8:30","tp.rt.1.d":"I collect you door-to-door in the Reykjavík area. Kate's welcome box and hot drinks are waiting in the car.",
  "tp.rt.2.t":"Þingvellir National Park","tp.rt.2.time":"stop 1","tp.rt.2.d":"Walk through the rift where the North American and Eurasian plates pull apart — and where Iceland founded the world's oldest parliament.",
  "tp.rt.3.t":"Geysir & Strokkur","tp.rt.3.time":"stop 2","tp.rt.3.d":"Strokkur fires a column of boiling water 20–30 m into the air every few minutes. We wait for the perfect shot — no rush.",
  "tp.rt.4.t":"Gullfoss waterfall","tp.rt.4.time":"stop 3","tp.rt.4.d":"The 'golden falls' tumble in two great steps into a canyon. On a sunny day the spray throws rainbows across the gorge.",
  "tp.rt.5.t":"A hidden stop","tp.rt.5.time":"stop 4","tp.rt.5.d":"My favourite part: somewhere off the headline route — a crater, a turf church, or a farm café — chosen for the day and the light.",
  "tp.rt.6.t":"Back to your hotel","tp.rt.6.time":"around 16:00","tp.rt.6.d":"Home by late afternoon, full of photos. Want to add dinner or a hot-spring soak? Just say and we'll fit it in.",

  "tp.map.eyebrow":"The loop","tp.map.h2":"Roughly 230 km, all on good roads.","tp.map.label":"map — Golden Circle route from Reykjavík",

  "tp.incl.eyebrow":"The details","tp.incl.h2":"What's included.",
  "tp.incl.yes.t":"Included","tp.incl.no.t":"Not included",
  "tp.incl.yes.1":"Private 4×4 with fuel & all road costs","tp.incl.yes.2":"Hotel pick-up & drop-off","tp.incl.yes.3":"Local English / Polish / German guide","tp.incl.yes.4":"Kate's home-cooked welcome box","tp.incl.yes.5":"Photos of you along the way","tp.incl.yes.6":"Flexible pace & a hidden stop",
  "tp.incl.no.1":"Lunch at the farm café (optional)","tp.incl.no.2":"Entry to any optional spa / pool","tp.incl.no.3":"Gratuities (never expected)",

  "tp.bring.eyebrow":"Come prepared","tp.bring.h2":"What to bring.",
  "tp.bring.1.t":"Layers","tp.bring.1.d":"Iceland's weather changes hourly. A warm mid-layer and a windproof jacket cover almost any day.",
  "tp.bring.2.t":"Sturdy shoes","tp.bring.2.d":"Paths can be wet or icy. Waterproof walking shoes or boots are ideal.",
  "tp.bring.3.t":"A camera","tp.bring.3.d":"Phone or camera — and I'll happily take the couple shots you never get on a bus.",
  "tp.bring.4.t":"Swimwear (optional)","tp.bring.4.d":"If you fancy a hot-spring stop on the way back, bring a swimsuit and towel.",

  "tp.ft.eyebrow":"The family touch","tp.ft.h2":"A grill stop with a view.","tp.ft.p":"On the Golden Circle I love pulling over where the road goes quiet to fire up the little grill — Icelandic hot dogs, hot chocolate from Kate's thermos, and a horizon all to yourselves. It's the moment most guests remember best.",

  "tp.gal.eyebrow":"Gallery","tp.gal.h2":"From this route.",
  "tp.rev.eyebrow":"Reviews","tp.rev.h2":"What guests say about this tour.",
  "tp.faq.eyebrow":"Golden Circle FAQ","tp.faq.h2":"Questions about this tour.",
  "tp.faq.1.q":"How long is the Golden Circle tour?","tp.faq.1.a":"Usually 6–8 hours door to door, depending on how long you want to linger and whether we add a hidden stop or a hot-spring soak. It's your day — we're never watching a coach timetable.",
  "tp.faq.2.q":"How many people can come?","tp.faq.2.a":"Up to 4 guests travel in comfort in the car. Have a group of 5–8? Message me and I'll arrange the right vehicle.",
  "tp.faq.3.q":"Can we do the Golden Circle in winter?","tp.faq.3.a":"Yes — it's beautiful under snow, and the shorter days even give a chance of aurora on the drive home. I adjust the route and timing to the conditions and daylight.",
  "tp.faq.4.q":"What does 'from 89,000 ISK' mean?","tp.faq.4.a":"That's a per-group starting price, not per person — so it's the same whether one or four of you travel. The final quote depends on season, pick-up point and any extras. (Prices to be confirmed.)",

  "tp.also.eyebrow":"You may also like","tp.also.h2":"Other ways to see Iceland.",
  "tp.avail.eyebrow":"Check availability","tp.avail.h2":"Check dates for the Golden Circle.","tp.avail.lead":"Send a quick request with your dates and I'll reply personally to confirm everything.",
},

/* =========================== POLSKI =========================== */
pl:{
  "doc.title":"Journey Iceland — prywatne wycieczki i transfery z lokalnym kierowcą",
  "nav.tours":"Wycieczki","nav.why":"Dlaczego ja","nav.about":"O mnie","nav.gallery":"Galeria","nav.reviews":"Opinie","nav.faq":"FAQ","nav.contact":"Kontakt",
  "cta.check":"Sprawdź dostępność","cta.wa":"Napisz na WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Zapytaj o termin",
  "brand.tag":"Prywatne wycieczki · Islandia",
  "menu":"Menu",

  "hero.eyebrow":"Prywatny kierowca i przewodnik · od 2014","hero.h1":"Islandia, jakiej nie pokaże autobus.","hero.sub":"Prywatne wycieczki i transfery z lokalnym kierowcą, który zadba o Ciebie jak o rodzinę — ukryte miejsca, Twoje tempo, szczerość.","hero.langline":"English · Polski · Deutsch","hero.scroll":"Przewiń",

  "trust.rating":"Ocena Google","trust.insured":"Doświadczony, ubezpieczony kierowca","trust.private":"Tylko prywatne grupy","trust.langs":"English · Polski · Deutsch","trust.pickup":"Bezpłatny odbiór z hotelu",

  "tours.eyebrow":"Wycieczki i transfery","tours.h2":"Dokąd chcesz pojechać?","tours.lead":"Małe prywatne grupy, odbiór z hotelu i trasa ułożona pod Ciebie. Ceny wycieczek są za grupę — nie od osoby.",
  "tours.toursLabel":"Wycieczki jednodniowe","tours.transfersLabel":"Transfery z lotniska i do term",
  "tour.see":"Zobacz wycieczkę","tour.tbc":"cena do potwierdzenia","tour.perGroup":"za grupę",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 godz.","tour.gc.price":"od 89 000 ISK","tour.gc.alt":"≈ 2 600 zł · za grupę",
  "tour.sc.name":"Południowe wybrzeże","tour.sc.dur":"10–11 godz.","tour.sc.price":"od 129 000 ISK","tour.sc.alt":"≈ 3 800 zł · za grupę",
  "tour.jk.name":"Laguna lodowcowa Jökulsárlón","tour.jk.dur":"12–14 godz.","tour.jk.price":"od 189 000 ISK","tour.jk.alt":"≈ 5 600 zł · za grupę",

  "transfer.kef.name":"Lotnisko Keflavík ⇄ Reykjavík","transfer.kef.meta":"≈ 50 min · do 4 osób","transfer.kef.price":"od 22 000 ISK",
  "transfer.bl.name":"Transfer do Blue Lagoon","transfer.bl.meta":"Z lotniska lub miasta · opcja z powrotem","transfer.bl.price":"od 28 000 ISK",
  "transfer.check":"Sprawdź dostępność",

  "tours.cta.h3":"Dowiozę wszędzie — trasa na życzenie.","tours.cta.p":"Wulkany, gorące źródła, sesja ślubna, kilkudniowa pętla. Powiedz, co chodzi Ci po głowie, a ułożę pod to cały dzień.",

  "aurora.tag":"Tej jesieni · zapisy już teraz","aurora.eyebrow":"Zorza polarna","aurora.h2":"Pogoń za zorzą — już tej jesieni.","aurora.p":"Od września niebo znów robi się ciemne. Śledzę dla Ciebie prognozę, wywożę poza łunę miasta, a Kasia dorzuca termos gorącej czekolady. Miejsc jest mało — zapytaj o wcześniejszą rezerwację.","aurora.cta1":"Zapytaj o termin",

  "why.eyebrow":"Dlaczego ze mną","why.h2":"Nie jesteś numerem w autobusie.","why.lead":"Jeden kierowca, jedna mała grupa, jeden dzień ułożony w całości pod Ciebie.",
  "why.1.t":"Prywatnie i osobiście","why.1.d":"W aucie tylko Twoja grupa. Ruszamy, kiedy chcesz, stajemy, gdzie chcesz, i nie czekamy na czterdziestu obcych ludzi.",
  "why.2.t":"Lokalnie i szczerze","why.2.d":"Tu mieszkam. Zawiozę Cię w ciche miejsca — i powiem szczerze, jeśli dziś nie warto jechać.",
  "why.3.t":"Bezpieczeństwo przede wszystkim","why.3.d":"Doświadczony, w pełni ubezpieczony i rozsądny wobec pogody. Jeśli droga jest zła, zmieniamy plan, nie Twoje bezpieczeństwo.",
  "why.4.t":"Twój język","why.4.d":"Oprowadzam po polsku, angielsku i niemiecku — nic ważnego nie zgubi się po drodze.",
  "compare.mine.title":"Prywatnie ze mną","compare.mine.tag":"Ty","compare.bus.title":"Duży autokar","compare.bus.tag":"Oni",
  "compare.mine.1":"Tylko Twoja grupa — do 4 osób w komforcie","compare.mine.2":"Wyjazd, gdy jesteś gotowy, postój pod wpływem chwili","compare.mine.3":"Ukryte miejsca, do których autokar nie dojedzie","compare.mine.4":"Domowy poczęstunek od Kasi","compare.mine.5":"Jeden przewodnik, który zna Twoje imię",
  "compare.bus.1":"40+ obcych osób i sztywny harmonogram","compare.bus.2":"15 minut na zdjęcie i jedziemy dalej","compare.bus.3":"Tylko zatłoczone, najbardziej znane punkty","compare.bus.4":"Kanapka ze stacji benzynowej","compare.bus.5":"Mikrofon i liczenie głów",

  "about.eyebrow":"O mnie","about.h2":"Cześć, jestem John.","about.lead":"Polak, który lata temu zakochał się w Islandii — i już został.","about.p1":"Przyjechałem na jeden sezon, a zostałem dla światła. Po latach na tych drogach wiem, gdzie nie jeżdżą autobusy: wodospad bez parkingu, gorące źródło, które miejscowi zostawiają dla siebie, miejsce, gdzie zachód słońca pada dokładnie tak, jak trzeba.","about.p2":"Moja żona Kasia jest szefową kuchni, więc nigdy nie wyjedziesz głodny. Każdego gościa traktujemy tak, jak sami chcielibyśmy być traktowani za granicą — jak rodzinę. O to właśnie chodzi w Journey Iceland.","about.sign":"— John i Kasia","about.badge.num":"600+","about.badge.t":"zadowolonych gości od 2014",

  "exp.eyebrow":"Przeżycie","exp.h2":"Więcej niż przejazd — przeżycie.","exp.lead":"Drobiazgi, które zamieniają transfer w historię opowiadaną po powrocie.",
  "exp.1.t":"Domowy zestaw powitalny","exp.1.d":"Kasia jest szefową kuchni. Każda wycieczka zaczyna się od ciepłego pudełka — skyr, świeże owoce, coś upieczonego tego ranka.",
  "exp.2.t":"Grill i lokalne smaki w terenie","exp.2.d":"Na dłuższych trasach stajemy, by upiec islandzkie hot dogi i spróbować lokalnych przysmaków z widokiem, którego nie sprzeda żadna restauracja.",
  "exp.3.t":"Zniżka w restauracji","exp.3.d":"Goście mają stałą zniżkę w Reykjavík Kitchen — a po drodze zrobię Ci zdjęcia, zupełnie za darmo.",
  "exp.foot":"\u201ePowiem szczerze, jeśli dziś nie warto jechać.\u201d",

  "gallery.eyebrow":"Galeria","gallery.h2":"Chwile z trasy.","gallery.lead":"Złote światło, ciche drogi, ciepłe jedzenie i czasem zielone niebo. Przesuwaj.",

  "reviews.eyebrow":"Opinie","reviews.h2":"Przyjechali jako goście, wyjechali jak znajomi.","reviews.lead":"Kilka słów od ostatnich podróżnych. Więcej w Google.",
  "rev.1.q":"John znalazł nam wodospad, przy którym nie było nikogo innego. Najlepszy dzień całej wyprawy — i nigdzie się nie spieszyliśmy.","rev.1.name":"Sarah i Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Profesjonalnie, ciepło i po polsku. Czuliśmy się zaopiekowani od lotniska po ostatni przystanek.","rev.2.name":"Tomasz K.","rev.2.loc":"Warszawa, PL",
  "rev.3.q":"Szczerze o pogodzie, elastycznie z planem, a przekąski Kasi były nierealne. Zarezerwowaliśmy go dwa razy w tydzień.","rev.3.name":"Emma L.","rev.3.loc":"Londyn, UK",
  "rev.4.q":"Bardzo osobiście i na luzie. John zna miejsca, których nie ma w żadnym przewodniku. Gorąco polecam!","rev.4.name":"Rodzina Berger","rev.4.loc":"Monachium, DE",
  "rev.5.q":"Nasz lot spóźnił się do północy, a on dalej tam był, uśmiechnięty, z włączonym ogrzewaniem. Cała firma w jednym momencie.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"Stawaliśmy na zdjęcia, gdzie tylko chcieliśmy. Spróbuj tak w 50-osobowym autokarze. Warte każdej korony.","rev.6.name":"Priya i Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Warto wiedzieć","faq.h2":"Odpowiadam na pytania.",
  "faq.1.q":"Czy jazda islandzkimi drogami z Tobą jest bezpieczna?","faq.1.a":"Tak. Jestem doświadczonym, w pełni ubezpieczonym lokalnym kierowcą, jeżdżę zadbanym autem 4×4. Codziennie sprawdzam pogodę i stan dróg i chętnie zmienię plan, zamiast ryzykować. Twoje bezpieczeństwo zawsze jest ważniejsze niż plan dnia.",
  "faq.2.q":"Czy gwarantujesz, że zobaczymy zorzę?","faq.2.a":"Uczciwie — nikt nie może. Zorza zależy od ciemności, czystego nieba i aktywności słońca. Mogę za to obiecać, że śledzę prognozę, wywożę Cię poza światła miasta tam, gdzie szanse są największe, i dbam o ciepło podczas czekania. A jeśli niebo nie da rady, powiem wprost.",
  "faq.3.q":"Jak działa płatność, skoro nie ma rezerwacji online?","faq.3.a":"Tak to działa celowo. Wysyłasz zapytanie o termin, ustalamy szczegóły osobiście, a potem wysyłam bezpieczny link do płatności albo przyjmuję kartę na miejscu. Samo zapytanie o termin nie wiąże się z żadną zaliczką.",
  "faq.4.q":"Jakimi językami mówisz?","faq.4.a":"Oprowadzam po polsku, angielsku i niemiecku. Powiedz tylko, w którym czujesz się najlepiej, i taki będzie język całego dnia.",
  "faq.5.q":"Czy wycieczka jest naprawdę prywatna?","faq.5.a":"Zawsze. W aucie jest wyłącznie Twoja grupa — nigdy z obcymi. Tempo, przystanki i muzyka należą do Ciebie.",
  "faq.6.q":"Czy odbierasz z hotelu?","faq.6.a":"Tak — bezpłatny odbiór z hotelu, mieszkania lub kempingu w rejonie Reykjavíku, a przy transferach także z lotniska Keflavík. Dokładną godzinę ustalimy w rozmowie.",
  "faq.7.q":"Co, jeśli w dniu wyjazdu pogoda się popsuje?","faq.7.a":"Dostosowujemy się. Zmienię trasę na osłonięte, wciąż piękne miejsca, przesunę dzień, jeśli naprawdę jest niebezpiecznie, albo umówimy nowy termin bez problemu. Nigdy nie wypchnę Cię w burzę dla samego harmonogramu.",

  "contact.eyebrow":"Sprawdź dostępność","contact.h2":"Zaplanujmy Twój dzień na Islandii.","contact.lead":"Wyślij krótkie zapytanie, a odpiszę osobiście — zwykle w ciągu kilku godzin — żeby ustalić szczegóły.",
  "form.tour":"Która wycieczka lub transfer?","form.tour.opt":"Wybierz…","form.date":"Preferowana data","form.people":"Ile Was jest?","form.name":"Imię","form.email":"E-mail","form.phone":"Telefon / WhatsApp","form.phone.opt":"(opcjonalnie)","form.msg":"Coś jeszcze?","form.msg.opt":"(opcjonalnie)","form.msg.ph":"Godziny lotów, pomysły, miejsca obowiązkowe…",
  "form.send":"Wyślij zapytanie","form.legal":"To zapytanie o dostępność, nie rezerwacja — szczegóły potwierdzę z Tobą osobiście.",
  "form.sent.title":"Dziękuję — zapytanie wysłane!","form.sent.body":"Odezwę się osobiście, zwykle w ciągu kilku godzin, żeby potwierdzić szczegóły.",
  "form.p.1":"1–4 osoby","form.p.2":"5–8 osób",
  "opt.gc":"Golden Circle — wycieczka prywatna","opt.sc":"Południowe wybrzeże — prywatnie","opt.jk":"Laguna lodowcowa Jökulsárlón","opt.kef":"Transfer z lotniska Keflavík","opt.bl":"Transfer do Blue Lagoon","opt.aurora":"Zorza polarna (jesień)","opt.custom":"Inne / jeszcze nie wiem",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 555 0148","cm.phone.l":"Telefon / SMS","cm.phone.v":"+354 555 0148","cm.mail.l":"E-mail","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Baza","cm.hours.v":"Reykjavík · 7 dni w tygodniu","map.label":"mapa — rejon odbioru Reykjavík",

  "pl.offer":"🇵🇱 Dla polskich podróżnych — zapytaj o specjalną cenę i powitanie po polsku.",

  "footer.tagline":"Prywatne wycieczki i transfery z lotniska po całej Islandii — lokalny kierowca, który zadba o Ciebie jak o rodzinę.","footer.explore":"Odkryj","footer.tours":"Wycieczki","footer.contact":"Kontakt","footer.disclaimer":"Journey Iceland to usługa prywatnego kierowcy i przewodnika. Zapytania o termin potwierdzam osobiście; strona nie przyjmuje rezerwacji ani płatności online.","footer.privacy":"Prywatność","footer.terms":"Regulamin","footer.rights":"© 2026 Journey Iceland. Tworzone z ciepłem w Reykjavíku.",

  "tp.bc.tours":"Wycieczki","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Prywatna wycieczka jednodniowa · z Reykjavíku","tp.h1":"Golden Circle — prywatna wycieczka z Reykjavíku.","tp.sub":"Trzy ikony Islandii — huczący wodospad, wybuchający gejzer i ryft kontynentalny — w Twoim tempie, bez tłumów i bez zegarka.",
  "tp.qf.dur":"6–8 godzin","tp.qf.price":"od 89 000 ISK","tp.qf.priv":"Prywatnie · maks. 4","tp.qf.pickup":"Odbiór z hotelu","tp.qf.lang":"EN · PL · DE",
  "tp.sn.overview":"Opis","tp.sn.route":"Trasa","tp.sn.map":"Mapa","tp.sn.gallery":"Galeria","tp.sn.reviews":"Opinie","tp.sn.faq":"FAQ","tp.sn.avail":"Dostępność",

  "tp.hl.eyebrow":"W skrócie","tp.hl.h2":"Jak wygląda ten dzień.",
  "tp.hl.1":"Þingvellir — spacer między dwoma kontynentami","tp.hl.2":"Gejzer Strokkur wybuchający co kilka minut","tp.hl.3":"Gullfoss — złoty, dwustopniowy wodospad","tp.hl.4":"Cichy przystanek, który autobusy mijają","tp.hl.5":"Krater wulkaniczny Kerið (sezonowo)","tp.hl.6":"Odbiór i odwóz pod same drzwi hotelu","tp.hl.7":"Domowe pudełko powitalne od Kasi","tp.hl.8":"Twoje zdjęcia robione po drodze",

  "tp.ov.eyebrow":"Dlaczego ta wycieczka","tp.ov.h2":"Klasyka — w spokoju.","tp.ov.p1":"Golden Circle to trasa, którą jeżdżą wszyscy, i nie bez powodu: w jednej pętli masz dolinę ryftową, najbardziej niezawodny gejzer Islandii i jeden z jej najwspanialszych wodospadów. Różnica jest w tym, jak to przeżyjesz.","tp.ov.p2":"W dużym autobusie masz piętnaście minut i liczenie głów. Ze mną — tylko Twoja grupa. Ruszamy, gdy jesteś gotowy, zostajemy tam, gdzie pięknie, i wpadamy w jedno czy dwa miejsca, których autokary nigdy nie widzą — kościółek z darni, cichy krater, gospodarstwo robiące lody z mleka własnych krów.","tp.ov.p3":"Śledzę pogodę i światło danego dnia i układam kolejność przystanków tak, byś był w najładniejszych miejscach, gdy wyglądają najlepiej.",

  "tp.rt.eyebrow":"Trasa","tp.rt.h2":"Przystanek po przystanku.",
  "tp.rt.1.t":"Odbiór z hotelu","tp.rt.1.time":"ok. 8:30","tp.rt.1.d":"Odbieram Cię pod same drzwi w rejonie Reykjavíku. Pudełko powitalne Kasi i ciepłe napoje czekają w aucie.",
  "tp.rt.2.t":"Park Narodowy Þingvellir","tp.rt.2.time":"przystanek 1","tp.rt.2.d":"Przejdź przez ryft, gdzie płyta północnoamerykańska i euroazjatycka rozsuwają się — i gdzie Islandia założyła najstarszy parlament świata.",
  "tp.rt.3.t":"Geysir i Strokkur","tp.rt.3.time":"przystanek 2","tp.rt.3.d":"Strokkur co kilka minut wyrzuca słup wrzącej wody na 20–30 m. Czekamy na idealny kadr — bez pośpiechu.",
  "tp.rt.4.t":"Wodospad Gullfoss","tp.rt.4.time":"przystanek 3","tp.rt.4.d":"„Złote wodospady” spadają dwoma wielkimi stopniami do kanionu. W słoneczny dzień mgła rysuje tęcze nad wąwozem.",
  "tp.rt.5.t":"Ukryty przystanek","tp.rt.5.time":"przystanek 4","tp.rt.5.d":"Moja ulubiona część: coś poza główną trasą — krater, kościółek z darni albo kawiarnia w gospodarstwie — wybrane pod dzień i światło.",
  "tp.rt.6.t":"Powrót do hotelu","tp.rt.6.time":"ok. 16:00","tp.rt.6.d":"W domu późnym popołudniem, z głową pełną zdjęć. Chcesz dorzucić kolację albo kąpiel w gorącym źródle? Powiedz, a znajdziemy na to czas.",

  "tp.map.eyebrow":"Pętla","tp.map.h2":"Około 230 km, w całości dobrymi drogami.","tp.map.label":"mapa — trasa Golden Circle z Reykjavíku",

  "tp.incl.eyebrow":"Szczegóły","tp.incl.h2":"Co jest w cenie.",
  "tp.incl.yes.t":"W cenie","tp.incl.no.t":"Poza ceną",
  "tp.incl.yes.1":"Prywatne 4×4 z paliwem i opłatami drogowymi","tp.incl.yes.2":"Odbiór i odwóz do hotelu","tp.incl.yes.3":"Lokalny przewodnik EN / PL / DE","tp.incl.yes.4":"Domowe pudełko powitalne Kasi","tp.incl.yes.5":"Zdjęcia po drodze","tp.incl.yes.6":"Elastyczne tempo i ukryty przystanek",
  "tp.incl.no.1":"Lunch w kawiarni w gospodarstwie (opcjonalnie)","tp.incl.no.2":"Wstęp do opcjonalnych term / basenu","tp.incl.no.3":"Napiwki (nigdy nieoczekiwane)",

  "tp.bring.eyebrow":"Przygotuj się","tp.bring.h2":"Co zabrać.",
  "tp.bring.1.t":"Warstwy","tp.bring.1.d":"Islandzka pogoda zmienia się co godzinę. Ciepła warstwa środkowa i kurtka przeciwwiatrowa wystarczą na prawie każdy dzień.",
  "tp.bring.2.t":"Solidne buty","tp.bring.2.d":"Ścieżki bywają mokre lub oblodzone. Najlepsze będą wodoodporne buty trekkingowe.",
  "tp.bring.3.t":"Aparat","tp.bring.3.d":"Telefon albo aparat — a ja chętnie zrobię Wam zdjęcia w parze, których nigdy nie ma się z autokaru.",
  "tp.bring.4.t":"Strój kąpielowy (opcjonalnie)","tp.bring.4.d":"Jeśli masz ochotę na postój w gorącym źródle w drodze powrotnej, zabierz kostium i ręcznik.",

  "tp.ft.eyebrow":"Rodzinny akcent","tp.ft.h2":"Postój z grillem i widokiem.","tp.ft.p":"Na Golden Circle uwielbiam zjechać tam, gdzie droga cichnie, i odpalić mały grill — islandzkie hot dogi, gorąca czekolada z termosu Kasi i horyzont tylko dla Was. To moment, który goście pamiętają najlepiej.",

  "tp.gal.eyebrow":"Galeria","tp.gal.h2":"Z tej trasy.",
  "tp.rev.eyebrow":"Opinie","tp.rev.h2":"Co goście mówią o tej wycieczce.",
  "tp.faq.eyebrow":"FAQ Golden Circle","tp.faq.h2":"Pytania o tę wycieczkę.",
  "tp.faq.1.q":"Ile trwa wycieczka Golden Circle?","tp.faq.1.a":"Zwykle 6–8 godzin od drzwi do drzwi, zależnie od tego, jak długo chcesz się zatrzymywać i czy dorzucimy ukryty przystanek albo kąpiel w gorącym źródle. To Twój dzień — nie patrzymy na rozkład autokaru.",
  "tp.faq.2.q":"Ile osób może jechać?","tp.faq.2.a":"W komforcie podróżuje do 4 gości. Macie grupę 5–8 osób? Napisz, a zorganizuję odpowiedni pojazd.",
  "tp.faq.3.q":"Czy Golden Circle da się zrobić zimą?","tp.faq.3.a":"Tak — pod śniegiem jest przepięknie, a krótsze dni dają nawet szansę na zorzę w drodze powrotnej. Dopasowuję trasę i godziny do warunków i długości dnia.",
  "tp.faq.4.q":"Co znaczy „od 89 000 ISK”?","tp.faq.4.a":"To cena wyjściowa za grupę, nie od osoby — więc jest taka sama, czy jedzie jedna osoba, czy cztery. Ostateczna wycena zależy od sezonu, miejsca odbioru i dodatków. (Ceny do potwierdzenia.)",

  "tp.also.eyebrow":"Może Cię zainteresować","tp.also.h2":"Inne sposoby na Islandię.",
  "tp.avail.eyebrow":"Sprawdź dostępność","tp.avail.h2":"Sprawdź terminy dla Golden Circle.","tp.avail.lead":"Wyślij krótkie zapytanie z terminami, a odpiszę osobiście, żeby wszystko potwierdzić.",
},

/* =========================== DEUTSCH =========================== */
de:{
  "doc.title":"Journey Iceland — private Touren & Flughafentransfers mit einem Einheimischen",
  "nav.tours":"Touren","nav.why":"Warum ich","nav.about":"Über mich","nav.gallery":"Galerie","nav.reviews":"Bewertungen","nav.faq":"FAQ","nav.contact":"Kontakt",
  "cta.check":"Verfügbarkeit prüfen","cta.wa":"Schreib mir auf WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Frag nach",
  "brand.tag":"Private Touren · Island",
  "menu":"Menü",

  "hero.eyebrow":"Privater Fahrer & Guide · seit 2014","hero.h1":"Island, wie ein Einheimischer es zeigt.","hero.sub":"Private Touren und Flughafentransfers mit einem einheimischen Fahrer, der dich wie Familie behandelt — versteckte Orte, dein Tempo, ehrlicher Rat.","hero.langline":"English · Polski · Deutsch","hero.scroll":"Scrollen",

  "trust.rating":"Google-Bewertung","trust.insured":"Erfahrener, versicherter Fahrer","trust.private":"Nur private Gruppen","trust.langs":"English · Polski · Deutsch","trust.pickup":"Kostenlose Hotelabholung",

  "tours.eyebrow":"Touren & Transfers","tours.h2":"Wohin möchtest du?","tours.lead":"Kleine private Gruppen, Hotelabholung und eine Route, die wir um dich herum gestalten. Tourpreise gelten pro Gruppe — nicht pro Person.",
  "tours.toursLabel":"Tagestouren","tours.transfersLabel":"Flughafen- & Spa-Transfers",
  "tour.see":"Tour ansehen","tour.tbc":"Preis vorbehaltlich","tour.perGroup":"pro Gruppe",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 Std.","tour.gc.price":"ab 89.000 ISK","tour.gc.alt":"≈ 590 € / 640 $ · pro Gruppe",
  "tour.sc.name":"Südküste","tour.sc.dur":"10–11 Std.","tour.sc.price":"ab 129.000 ISK","tour.sc.alt":"≈ 855 € / 930 $ · pro Gruppe",
  "tour.jk.name":"Gletscherlagune Jökulsárlón","tour.jk.dur":"12–14 Std.","tour.jk.price":"ab 189.000 ISK","tour.jk.alt":"≈ 1.250 € / 1.360 $ · pro Gruppe",

  "transfer.kef.name":"Flughafen Keflavík ⇄ Reykjavík","transfer.kef.meta":"≈ 50 Min · bis zu 4 Gäste","transfer.kef.price":"ab 22.000 ISK",
  "transfer.bl.name":"Blue-Lagoon-Transfer","transfer.bl.meta":"Flughafen oder Stadt · mit Rückfahrt-Option","transfer.bl.price":"ab 28.000 ISK",
  "transfer.check":"Verfügbarkeit prüfen",

  "tours.cta.h3":"Ich fahre überallhin — Wunschroute auf Anfrage.","tours.cta.p":"Vulkane, heiße Quellen, ein Hochzeitsshooting, eine mehrtägige Runde. Sag mir die Idee und ich baue den Tag darum herum.",

  "aurora.tag":"Diesen Herbst · jetzt vormerken","aurora.eyebrow":"Nordlichter","aurora.h2":"Den Nordlichtern hinterher — diesen Herbst.","aurora.p":"Ab September wird der Himmel wieder dunkel. Ich beobachte für dich die Vorhersage, fahre weg vom Stadtlicht, und Kate gibt eine Thermoskanne heiße Schokolade dazu. Die Plätze sind begrenzt — frag jetzt nach einer Vormerkung.","aurora.cta1":"Frag nach",

  "why.eyebrow":"Warum mit mir","why.h2":"Du bist keine Nummer im Bus.","why.lead":"Ein Fahrer, eine kleine Gruppe, ein Tag, ganz um dich herum gestaltet.",
  "why.1.t":"Privat & persönlich","why.1.d":"Nur deine Gruppe im Auto. Wir starten, wann du willst, halten, wo du willst, und warten nie auf vierzig Fremde.",
  "why.2.t":"Lokal & ehrlich","why.2.d":"Ich lebe hier. Ich bringe dich zu den ruhigen Orten — und sage dir ehrlich, wenn es sich heute nicht lohnt.",
  "why.3.t":"Sicherheit zuerst","why.3.d":"Erfahren, voll versichert und vernünftig beim Wetter. Ist eine Straße schlecht, ändern wir den Plan, nicht deine Sicherheit.",
  "why.4.t":"Deine Sprache","why.4.d":"Ich führe auf Deutsch, Englisch und Polnisch — so geht unterwegs nichts Wichtiges verloren.",
  "compare.mine.title":"Privat mit mir","compare.mine.tag":"Du","compare.bus.title":"Großer Reisebus","compare.bus.tag":"Die",
  "compare.mine.1":"Nur deine Gruppe — bis zu 4 bequem","compare.mine.2":"Losfahren, wenn du bereit bist, spontan halten","compare.mine.3":"Versteckte Orte, die Busse nicht erreichen","compare.mine.4":"Hausgemachte Snacks von Kate","compare.mine.5":"Ein Guide, der deinen Namen kennt",
  "compare.bus.1":"40+ Fremde nach festem Fahrplan","compare.bus.2":"15 Minuten pro Fotostopp, dann weiter","compare.bus.3":"Nur die überfüllten Hauptsehenswürdigkeiten","compare.bus.4":"Ein Sandwich von der Tankstelle","compare.bus.5":"Ein Mikrofon und das Durchzählen",

  "about.eyebrow":"Über mich","about.h2":"Hallo, ich bin John.","about.lead":"Ein Pole, der sich vor Jahren in Island verliebt hat — und nie wieder ging.","about.p1":"Ich kam für eine Saison und blieb wegen des Lichts. Nach Jahren auf diesen Straßen weiß ich, wo die Busse nicht hinfahren: der Wasserfall ohne Parkplatz, die heiße Quelle, die Einheimische für sich behalten, der Ort, an dem der Sonnenuntergang genau richtig fällt.","about.p2":"Meine Frau Kate ist Köchin, du gehst also nie hungrig nach Hause. Wir behandeln jeden Gast so, wie wir selbst im Ausland behandelt werden möchten — wie Familie. Genau darum geht es bei Journey Iceland.","about.sign":"— John & Kate","about.badge.num":"600+","about.badge.t":"zufriedene Gäste seit 2014",

  "exp.eyebrow":"Das Erlebnis","exp.h2":"Mehr als eine Fahrt — ein Erlebnis.","exp.lead":"Die kleinen Dinge, die aus einem Transfer eine Geschichte machen, die du zu Hause erzählst.",
  "exp.1.t":"Hausgemachtes Willkommens-Set","exp.1.d":"Kate ist Köchin. Jede Tour beginnt mit einer warmen Willkommensbox — Skyr, frisches Obst, etwas am Morgen Gebackenes.",
  "exp.2.t":"Grill & Kostproben unterwegs","exp.2.d":"An langen Tagen halten wir, um isländische Hot Dogs zu grillen und lokale Spezialitäten zu probieren — mit einer Aussicht, die kein Restaurant verkaufen kann.",
  "exp.3.t":"Restaurant-Bonus","exp.3.d":"Gäste bekommen einen festen Rabatt in der Reykjavík Kitchen — und unterwegs mache ich deine Fotos, kostenlos.",
  "exp.foot":"\u201eIch sage dir ehrlich, wenn es sich heute nicht lohnt.\u201c",

  "gallery.eyebrow":"Galerie","gallery.h2":"Momente von unterwegs.","gallery.lead":"Goldenes Licht, stille Straßen, warmes Essen und ab und zu ein grüner Himmel. Wischen.",

  "reviews.eyebrow":"Bewertungen","reviews.h2":"Sie kamen als Gäste und gingen als Freunde.","reviews.lead":"Ein paar Worte von Reisenden der letzten Zeit. Mehr auf Google.",
  "rev.1.q":"John fand uns einen Wasserfall, an dem kein einziger anderer Mensch war. Bester Tag unserer ganzen Islandreise — und nie gehetzt.","rev.1.name":"Sarah & Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Professionell, herzlich und auf Polnisch. Vom Flughafen bis zum letzten Stopp fühlten wir uns umsorgt.","rev.2.name":"Tomasz K.","rev.2.loc":"Warschau, PL",
  "rev.3.q":"Ehrlich beim Wetter, flexibel beim Plan, und Kates Snacks waren unglaublich. Wir haben ihn zweimal in einer Woche gebucht.","rev.3.name":"Emma L.","rev.3.loc":"London, UK",
  "rev.4.q":"Sehr persönlich und entspannt. John kennt Orte, die in keinem Reiseführer stehen. Absolute Empfehlung!","rev.4.name":"Familie Berger","rev.4.loc":"München, DE",
  "rev.5.q":"Unser Flug verspätete sich bis Mitternacht, und er war immer noch da, lächelnd, mit eingeschalteter Heizung. Das ist die ganze Firma in einem Moment.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"Wir hielten zum Fotografieren, wo wir wollten. Versuch das mal in einem 50-Sitzer-Bus. Jede Krone wert.","rev.6.name":"Priya & Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Gut zu wissen","faq.h2":"Fragen, beantwortet.",
  "faq.1.q":"Ist es sicher, mit dir über Islands Straßen zu fahren?","faq.1.a":"Ja. Ich bin ein erfahrener, voll versicherter einheimischer Fahrer in einem gepflegten 4×4. Ich prüfe täglich Wetter und Straßenzustand und ändere lieber einen Plan, als ein Risiko einzugehen. Deine Sicherheit geht immer vor jeden Reiseplan.",
  "faq.2.q":"Kannst du garantieren, dass wir die Nordlichter sehen?","faq.2.a":"Ehrlich gesagt kann das niemand — die Aurora hängt von Dunkelheit, klarem Himmel und Sonnenaktivität ab. Versprechen kann ich, dass ich die Vorhersage verfolge, dich weg vom Stadtlicht zur besten Chance fahre und dich beim Warten warmhalte. Spielt der Himmel nicht mit, sage ich es dir geradeheraus.",
  "faq.3.q":"Wie funktioniert die Zahlung, wenn ich nicht online buchen kann?","faq.3.a":"Das ist Absicht. Du sendest eine Verfügbarkeitsanfrage, wir klären die Details persönlich, und dann schicke ich dir einen sicheren Zahlungslink oder nehme die Karte am Tag selbst. Für eine reine Terminanfrage wird keine Anzahlung fällig.",
  "faq.4.q":"Welche Sprachen sprichst du?","faq.4.a":"Ich führe auf Deutsch, Englisch und Polnisch. Sag mir einfach, in welcher du dich am wohlsten fühlst, und das ist die Sprache des Tages.",
  "faq.5.q":"Ist die Tour wirklich privat?","faq.5.a":"Immer. Es ist nur deine Gruppe im Auto — nie mit Fremden geteilt. Tempo, Stopps und Musik gehören dir.",
  "faq.6.q":"Holst du mich am Hotel ab?","faq.6.a":"Ja — kostenlose Abholung an Hotel, Apartment oder Campingplatz im Raum Reykjavík und bei Transfers auch am Flughafen Keflavík. Die genaue Zeit bestätige ich im Gespräch.",
  "faq.7.q":"Was, wenn das Wetter am Tag schlecht wird?","faq.7.a":"Wir passen uns an. Ich leite zu geschützten, trotzdem schönen Stopps um, verschiebe den Tag, wenn es wirklich unsicher ist, oder vereinbare unkompliziert einen neuen Termin. Für einen Zeitplan schicke ich dich nie in einen Sturm hinaus.",

  "contact.eyebrow":"Verfügbarkeit prüfen","contact.h2":"Planen wir deinen Tag in Island.","contact.lead":"Sende eine kurze Anfrage und ich antworte persönlich — meist innerhalb weniger Stunden — um die Details mit dir abzustimmen.",
  "form.tour":"Welche Tour oder welcher Transfer?","form.tour.opt":"Auswählen…","form.date":"Wunschdatum","form.people":"Wie viele seid ihr?","form.name":"Dein Name","form.email":"E-Mail","form.phone":"Telefon / WhatsApp","form.phone.opt":"(optional)","form.msg":"Sonst noch etwas?","form.msg.opt":"(optional)","form.msg.ph":"Flugzeiten, Ideen, Lieblingsorte…",
  "form.send":"Anfrage senden","form.legal":"Dies ist eine Verfügbarkeitsanfrage, keine Buchung — ich bestätige die Details persönlich mit dir.",
  "form.sent.title":"Danke — Anfrage gesendet!","form.sent.body":"Ich melde mich persönlich, meist innerhalb weniger Stunden, um die Details zu bestätigen.",
  "form.p.1":"1–4 Personen","form.p.2":"5–8 Personen",
  "opt.gc":"Golden Circle — private Tour","opt.sc":"Südküste — private Tour","opt.jk":"Gletscherlagune Jökulsárlón","opt.kef":"Flughafentransfer Keflavík","opt.bl":"Blue-Lagoon-Transfer","opt.aurora":"Nordlichter (Herbst)","opt.custom":"Individuell / noch unklar",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 555 0148","cm.phone.l":"Anruf / SMS","cm.phone.v":"+354 555 0148","cm.mail.l":"E-Mail","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Standort","cm.hours.v":"Reykjavík · 7 Tage die Woche","map.label":"Karte — Abholbereich Reykjavík",

  "pl.offer":"",

  "footer.tagline":"Private Touren und Flughafentransfers in ganz Island — ein einheimischer Fahrer, der dich wie Familie behandelt.","footer.explore":"Entdecken","footer.tours":"Touren","footer.contact":"Kontakt","footer.disclaimer":"Journey Iceland ist ein privater Fahr- & Guide-Service. Verfügbarkeitsanfragen werden persönlich bestätigt; diese Seite nimmt keine Online-Buchungen oder Zahlungen an.","footer.privacy":"Datenschutz","footer.terms":"AGB","footer.rights":"© 2026 Journey Iceland. Mit Wärme in Reykjavík gemacht.",

  "tp.bc.tours":"Touren","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Private Tagestour · ab Reykjavík","tp.h1":"Golden Circle — private Tour ab Reykjavík.","tp.sub":"Islands drei Ikonen — ein donnernder Wasserfall, ein ausbrechender Geysir und ein Kontinentalgraben — in deinem Tempo, ohne Menschenmassen und ohne Uhr.",
  "tp.qf.dur":"6–8 Stunden","tp.qf.price":"ab 89.000 ISK","tp.qf.priv":"Privat · max. 4","tp.qf.pickup":"Hotelabholung","tp.qf.lang":"EN · PL · DE",
  "tp.sn.overview":"Überblick","tp.sn.route":"Route","tp.sn.map":"Karte","tp.sn.gallery":"Galerie","tp.sn.reviews":"Bewertungen","tp.sn.faq":"FAQ","tp.sn.avail":"Verfügbarkeit",

  "tp.hl.eyebrow":"Kurz gesagt","tp.hl.h2":"So sieht der Tag aus.",
  "tp.hl.1":"Þingvellir — zwischen zwei Kontinenten spazieren","tp.hl.2":"Geysir Strokkur, der alle paar Minuten ausbricht","tp.hl.3":"Gullfoss, der goldene zweistufige Wasserfall","tp.hl.4":"Ein ruhiger Stopp, an dem Busse vorbeifahren","tp.hl.5":"Vulkankrater Kerið (saisonal)","tp.hl.6":"Abholung & Rückbringung bis vor die Hoteltür","tp.hl.7":"Kates hausgemachte Willkommensbox","tp.hl.8":"Deine Fotos, unterwegs aufgenommen",

  "tp.ov.eyebrow":"Warum diese Tour","tp.ov.h2":"Der Klassiker — in Ruhe.","tp.ov.p1":"Der Golden Circle ist die Route, die alle fahren, und das aus gutem Grund: In einer Runde bekommst du ein tektonisches Grabental, Islands zuverlässigsten Geysir und einen seiner großartigsten Wasserfälle. Der Unterschied liegt darin, wie du es erlebst.","tp.ov.p2":"Im großen Bus bekommst du fünfzehn Minuten und das Durchzählen. Bei mir ist es nur deine Gruppe. Wir fahren los, wenn du bereit bist, verweilen, wo es schön ist, und schieben ein, zwei Stopps ein, die die Busse nie sehen — eine Torfkirche, einen stillen Krater, einen Hof, der Eis aus der Milch eigener Kühe macht.","tp.ov.p3":"Ich beobachte Wetter und Licht des Tages und ordne die Stopps so an, dass du an den schönsten Orten bist, wenn sie am besten aussehen.",

  "tp.rt.eyebrow":"Die Route","tp.rt.h2":"Stopp für Stopp.",
  "tp.rt.1.t":"Hotelabholung","tp.rt.1.time":"gegen 8:30","tp.rt.1.d":"Ich hole dich im Raum Reykjavík bis vor die Tür ab. Kates Willkommensbox und heiße Getränke warten im Auto.",
  "tp.rt.2.t":"Nationalpark Þingvellir","tp.rt.2.time":"Stopp 1","tp.rt.2.d":"Geh durch den Graben, wo die nordamerikanische und die eurasische Platte auseinanderdriften — und wo Island das älteste Parlament der Welt gründete.",
  "tp.rt.3.t":"Geysir & Strokkur","tp.rt.3.time":"Stopp 2","tp.rt.3.d":"Strokkur schießt alle paar Minuten eine Säule kochenden Wassers 20–30 m hoch. Wir warten auf die perfekte Aufnahme — ohne Eile.",
  "tp.rt.4.t":"Wasserfall Gullfoss","tp.rt.4.time":"Stopp 3","tp.rt.4.d":"Die „goldenen Fälle“ stürzen in zwei großen Stufen in eine Schlucht. An sonnigen Tagen wirft die Gischt Regenbögen über die Klamm.",
  "tp.rt.5.t":"Ein versteckter Stopp","tp.rt.5.time":"Stopp 4","tp.rt.5.d":"Mein Lieblingsteil: irgendwo abseits der Hauptroute — ein Krater, eine Torfkirche oder ein Hofcafé — gewählt nach Tag und Licht.",
  "tp.rt.6.t":"Zurück zum Hotel","tp.rt.6.time":"gegen 16:00","tp.rt.6.d":"Am späten Nachmittag zu Hause, voller Fotos. Noch Abendessen oder ein Bad in der heißen Quelle? Sag Bescheid, wir bauen es ein.",

  "tp.map.eyebrow":"Die Runde","tp.map.h2":"Rund 230 km, alles auf guten Straßen.","tp.map.label":"Karte — Golden-Circle-Route ab Reykjavík",

  "tp.incl.eyebrow":"Die Details","tp.incl.h2":"Was enthalten ist.",
  "tp.incl.yes.t":"Enthalten","tp.incl.no.t":"Nicht enthalten",
  "tp.incl.yes.1":"Privates 4×4 mit Sprit & allen Straßenkosten","tp.incl.yes.2":"Abholung & Rückbringung zum Hotel","tp.incl.yes.3":"Lokaler Guide EN / PL / DE","tp.incl.yes.4":"Kates hausgemachte Willkommensbox","tp.incl.yes.5":"Fotos von dir unterwegs","tp.incl.yes.6":"Flexibles Tempo & ein versteckter Stopp",
  "tp.incl.no.1":"Mittagessen im Hofcafé (optional)","tp.incl.no.2":"Eintritt in optionales Spa / Bad","tp.incl.no.3":"Trinkgeld (nie erwartet)",

  "tp.bring.eyebrow":"Gut vorbereitet","tp.bring.h2":"Was du mitbringen solltest.",
  "tp.bring.1.t":"Schichten","tp.bring.1.d":"Islands Wetter wechselt stündlich. Eine warme Zwischenschicht und eine winddichte Jacke decken fast jeden Tag ab.",
  "tp.bring.2.t":"Festes Schuhwerk","tp.bring.2.d":"Wege können nass oder vereist sein. Wasserdichte Wanderschuhe oder Stiefel sind ideal.",
  "tp.bring.3.t":"Eine Kamera","tp.bring.3.d":"Handy oder Kamera — und ich mache gern die Pärchenfotos, die du im Bus nie bekommst.",
  "tp.bring.4.t":"Badesachen (optional)","tp.bring.4.d":"Lust auf einen Stopp an einer heißen Quelle auf dem Rückweg? Dann bring Badesachen und Handtuch mit.",

  "tp.ft.eyebrow":"Die familiäre Note","tp.ft.h2":"Ein Grillstopp mit Aussicht.","tp.ft.p":"Auf dem Golden Circle halte ich gern dort, wo die Straße still wird, und heize den kleinen Grill an — isländische Hot Dogs, heiße Schokolade aus Kates Thermoskanne und ein Horizont nur für euch. Das ist der Moment, an den sich die meisten Gäste am liebsten erinnern.",

  "tp.gal.eyebrow":"Galerie","tp.gal.h2":"Von dieser Route.",
  "tp.rev.eyebrow":"Bewertungen","tp.rev.h2":"Was Gäste über diese Tour sagen.",
  "tp.faq.eyebrow":"Golden-Circle-FAQ","tp.faq.h2":"Fragen zu dieser Tour.",
  "tp.faq.1.q":"Wie lange dauert die Golden-Circle-Tour?","tp.faq.1.a":"Meist 6–8 Stunden von Tür zu Tür, je nachdem, wie lange du verweilen möchtest und ob wir einen versteckten Stopp oder ein Bad in einer heißen Quelle einbauen. Es ist dein Tag — wir schauen nie auf einen Busfahrplan.",
  "tp.faq.2.q":"Wie viele Personen können mit?","tp.faq.2.a":"Bis zu 4 Gäste reisen bequem im Auto. Ihr seid 5–8? Schreib mir und ich organisiere das passende Fahrzeug.",
  "tp.faq.3.q":"Kann man den Golden Circle im Winter machen?","tp.faq.3.a":"Ja — unter Schnee ist er wunderschön, und die kürzeren Tage bieten sogar die Chance auf Nordlichter auf der Heimfahrt. Ich passe Route und Zeiten an Bedingungen und Tageslicht an.",
  "tp.faq.4.q":"Was bedeutet „ab 89.000 ISK“?","tp.faq.4.a":"Das ist ein Startpreis pro Gruppe, nicht pro Person — also gleich, ob einer oder vier mitfahren. Der Endpreis hängt von Saison, Abholort und Extras ab. (Preise vorbehaltlich.)",

  "tp.also.eyebrow":"Das könnte dir gefallen","tp.also.h2":"Weitere Wege, Island zu sehen.",
  "tp.avail.eyebrow":"Verfügbarkeit prüfen","tp.avail.h2":"Termine für den Golden Circle prüfen.","tp.avail.lead":"Sende eine kurze Anfrage mit deinen Daten und ich antworte persönlich, um alles zu bestätigen.",
},
};

export type Lang = 'en' | 'pl' | 'de';
export const LANGS: Lang[] = ['en', 'pl', 'de'];
export function isLang(x: string): x is Lang { return (LANGS as string[]).includes(x); }
export function getDict(lang: string) { return I18N[lang] || I18N.en; }
export function makeT(lang: string) {
  const d = getDict(lang);
  return (k: string) => (d[k] ?? I18N.en[k] ?? k);
}

