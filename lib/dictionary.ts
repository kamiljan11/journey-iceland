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
  "nav.tours":"Tours","nav.why":"Why us","nav.about":"About","nav.gallery":"Gallery","nav.reviews":"Reviews","nav.faq":"FAQ","nav.contact":"Contact",
  "cta.check":"Check availability","cta.wa":"Message me on WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Ask about it",
  "wa.generic":"Hi! I'm writing from your website journeyiceland.is. I'd like to ask about a private tour or transfer: ","wa.custom":"Hi! I'm writing from journeyiceland.is about a custom route. My question: ","wa.aurora":"Hi! I'm writing from journeyiceland.is about the Northern Lights tour. My question: ","wa.gc":"Hi! I'm writing from journeyiceland.is about the Golden Circle tour. My question: ",
  "brand.tag":"Private tours · Iceland",
  "menu":"Menu",

  "hero.eyebrow":"Private driver & guide · since 2016",
  "hero.h1":"Discover Iceland the Old-fashioned way.",
  "hero.sub":"Iceland, the way a local shows it. Private tours & airport transfers with a local driver who treats you like family — hidden places, your pace, honest advice.",
  "hero.langline":"English · Polski · Deutsch · Español",
  "hero.scroll":"Scroll",

  "trust.rating":"Google rated","trust.insured":"Experienced & insured driver","trust.private":"Private groups only","trust.langs":"English · Polski · Deutsch · Español","trust.pickup":"Free hotel pick-up",

  "tours.eyebrow":"Tours & transfers","tours.h2":"Where would you like to go?","tours.lead":"Small private groups, hotel pick-up, and a route we shape around you. Tour prices are per group — not per person.",
  "tours.toursLabel":"Day tours","tours.transfersLabel":"Airport & spa transfers",
  "tour.see":"See tour","tour.tbc":"","tour.perGroup":"per group",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 hrs","tour.gc.price":"from 85,000 ISK","tour.gc.alt":"≈ $610 / €570 · per group",
  "tour.sc.name":"South Coast","tour.sc.dur":"8–10 hrs","tour.sc.price":"from 110,000 ISK","tour.sc.alt":"≈ $790 / €730 · per group",
  "tour.jk.name":"Jökulsárlón Glacier Lagoon","tour.jk.dur":"12–14 hrs","tour.jk.price":"from 179,000 ISK","tour.jk.alt":"≈ $1,280 / €1,190 · per group",

  "transfer.kef.name":"Keflavík Airport ⇄ Reykjavík","transfer.kef.meta":"≈ 50 min · up to 4 guests","transfer.kef.price":"from 22,000 ISK",
  "transfer.bl.name":"Blue Lagoon transfer","transfer.bl.meta":"Airport or city · ticket not included","transfer.bl.price":"from 22,000 ISK",
  "transfer.check":"Check availability",

  "tours.cta.h3":"We drive everywhere — custom route on request.","tours.cta.p":"Volcanoes, hot springs, a wedding photo run, a multi-day loop. Tell me the idea and I'll build the day around it.",

  "aurora.tag":"This autumn · pre-booking now","aurora.eyebrow":"Northern Lights","aurora.h2":"Chasing the Northern Lights — this autumn.","aurora.p":"From September the skies go dark again. I watch the forecast for you, drive away from the city glow, and Kate sends a thermos of hot chocolate. Seats are limited — ask to pre-book now. From 50,000 ISK per group (1–4) · 2–3 h.","aurora.cta1":"Ask about it",
  "eclipse.tag":"12 August 2026 · limited spots","eclipse.eyebrow":"Total Solar Eclipse","eclipse.h2":"The total solar eclipse — 12 August 2026.","eclipse.p":"On 12 August 2026 Iceland sits right in the path of a total solar eclipse, and the Snæfellsnes peninsula is one of the best places to watch the sky go dark. I can take you there — a private tour of the peninsula with a spot to watch the eclipse, or just the transfer. Hotels are already filling up, so ask early. Tell me what you have in mind and I'll plan it around you.","eclipse.cta1":"Ask about the eclipse","wa.eclipse":"Hi! I'm interested in the total solar eclipse on 12 August 2026 (Snæfellsnes). Could you tell me more?",

  "why.eyebrow":"Why travel with us","why.h2":"We're not just guides — we're a family.","why.lead":"We live here — we raise our kids, work and spend our free time here, and we show you the Iceland we love.",
  "why.1.t":"Not a mass agency","why.1.d":"We never rush you or tick sights off a list. There's room to slow down and truly feel the atmosphere of Iceland.",
  "why.2.t":"Hospitality in our blood","why.2.d":"We love people. We care about the good atmosphere, the small gestures, and making sure you feel relaxed and looked after.",
  "why.3.t":"We travel the way we'd want to","why.3.d":"We stop where the view takes your breath away — and sometimes take the longer road, because it turns out to be the most beautiful.",
  "why.4.t":"Memories, not a checklist","why.4.d":"You'll go home with more than photos — with emotions, stories and the feeling that you met the real Iceland.",
  "compare.mine.title":"Private with me","compare.mine.tag":"You","compare.bus.title":"Big bus tour","compare.bus.tag":"Them",
  "compare.mine.1":"Your group only — up to 4 in comfort","compare.mine.2":"Leave when you're ready, stop on a whim","compare.mine.3":"Hidden spots the buses can't reach","compare.mine.4":"Home-cooked snacks from Kate","compare.mine.5":"One guide who knows your name",
  "compare.bus.1":"40+ strangers on a fixed schedule","compare.bus.2":"15 minutes per photo stop, then go","compare.bus.3":"Only the crowded headline sights","compare.bus.4":"A petrol-station sandwich","compare.bus.5":"A microphone and a headcount",

  "about.eyebrow":"About","about.h2":"Hi, I'm John.","about.lead":"Our Iceland story began years ago. Like many, we started from scratch and, step by step, built a life here — until this island became home. It's where our twin daughters were born and where our greatest adventure truly began.","about.p1":"For as long as I can remember I've explored Iceland — discovering hidden roads, chasing breathtaking viewpoints and finding the stories that make each place unique. My passion goes far beyond the famous landmarks; I'm always looking for the quiet corners most people drive straight past.","about.p2":"As a family we keep that adventure alive. With our daughters beside us we hike, take the scenic route and often set off with no strict plan — stopping by a waterfall for a picnic, gathering wild herbs and watching the weather change by the minute. My wife is a Head Chef who loves welcoming people; every year we still make homemade syrups and tinctures, just as our grandmothers did.","about.p3":"We don't see our guests as tourists — we welcome them as friends, and invite you to discover Iceland the way we do: with curiosity, authenticity and heart. Discover Iceland the old-fashioned way.","about.sign":"— Kate & John","about.badge.num":"600+","about.badge.t":"happy guests since 2016",

  "exp.eyebrow":"The experience","exp.h2":"More than a drive — an experience.","exp.lead":"The little things that turn a transfer into a story you'll tell back home.",
  "exp.1.t":"Home-cooked welcome set","exp.1.d":"Kate is a chef. Every tour starts with a warm welcome box — skyr, fresh fruit, something baked that morning.",
  "exp.2.t":"Homemade lunch boxes","exp.2.d":"Freshly made by Kate, our Head Chef, and included in every tour — quality ingredients and the hospitality we'd give guests in our own home. Just tell us about any allergies or dietary needs when you book and we'll happily accommodate you.",
  "exp.3.t":"Restaurant perks","exp.3.d":"Our guests enjoy standing discounts (10–20%) at hand-picked Reykjavík restaurants — and I'll take your photos along the way, free of charge.",
  "exp.rest.h":"Discounts at our partner restaurants","exp.rest.note":"lunch / dinner",
  "exp.foot":"\u201cI'll tell you honestly if it's not worth going today.\u201d",

  "gallery.eyebrow":"Gallery","gallery.h2":"Moments from the road.","gallery.lead":"Golden light, quiet roads, warm food, and the odd green sky. Swipe through.",

  "reviews.eyebrow":"Reviews","reviews.h2":"They came as guests, left as friends.","reviews.lead":"A few words from recent travellers. More on Google.",
  "rev.1.q":"Syl found us a waterfall with not one other person there. Best day of our whole Iceland trip — and we never felt rushed.","rev.1.name":"Sarah & Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Profesjonalnie, ciepło i po polsku. Czuliśmy się zaopiekowani od lotniska po ostatni przystanek.","rev.2.name":"Tomasz K.","rev.2.loc":"Warszawa, PL",
  "rev.3.q":"Honest about the weather, flexible with the plan, and Kate's snacks were unreal. Booked him twice in one week.","rev.3.name":"Emma L.","rev.3.loc":"London, UK",
  "rev.4.q":"Sehr persönlich und entspannt. Syl kennt Orte, die in keinem Reiseführer stehen. Absolute Empfehlung!","rev.4.name":"Familie Berger","rev.4.loc":"München, DE",
  "rev.5.q":"Our flight was delayed at midnight and he was still there, smiling, with the heater on. That's the whole company in one moment.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"We stopped wherever we wanted for photos. Try doing that on a 50-seat bus. Worth every króna.","rev.6.name":"Priya & Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Good to know","faq.h2":"Questions, answered.",
  "faq.1.q":"Is it safe to drive Iceland's roads with you?","faq.1.a":"Yes. I'm an experienced, fully insured local driver in a well-maintained 4×4. I read the weather and road service daily and will happily change a plan rather than take a risk. Your safety always comes before any itinerary.",
  "faq.2.q":"Can you guarantee we'll see the Northern Lights?","faq.2.a":"No one honestly can — the aurora depends on darkness, clear skies and solar activity. What I can promise is that I track the forecast, drive you away from city light to the best chance, and keep you warm while we wait. If the sky simply won't cooperate, I'll tell you straight.",
  "faq.3.q":"How does payment work if I can't book online?","faq.3.a":"By design. You send an availability request, we confirm the details together personally, and then I send a secure payment link or take card on the day. No deposit is taken just to ask about a date.",
  "faq.4.q":"Which languages do you speak?","faq.4.a":"I guide in English, Polish, German and Spanish. Just tell me which you're most comfortable in and that's the language for the day.",
  "faq.5.q":"Is the tour really private?","faq.5.a":"Always. It's only ever your group in the car — never shared with strangers. The pace, the stops and the music are yours.",
  "faq.6.q":"Do you pick up from my hotel?","faq.6.a":"Yes — free hotel, apartment or campsite pick-up across the Reykjavík area, and from Keflavík Airport for transfers. I'll confirm the exact time when we talk.",
  "faq.7.q":"What if the weather turns bad on the day?","faq.7.a":"We adapt. I'll re-route to sheltered, still-beautiful stops, move the day if it's truly unsafe, or reschedule with no fuss. You'll never be pushed out into a storm for the sake of a timetable.",
  "faq.8.q":"Can I pay by card while travelling in Iceland?","faq.8.a":"Yes — card works almost everywhere in Iceland, from fuel stations to small cafés, so you'll rarely need cash. For the tour itself I'll send a secure payment link or take card on the day.",
  "faq.9.q":"What weather can we expect in Iceland?","faq.9.a":"Honestly — a bit of everything. Iceland's weather can change within minutes, so a sunny morning may turn to rain and back again. I watch the forecast closely, dress in layers, and shape the day around the conditions so you still get the best of it.",

  "contact.eyebrow":"Check availability","contact.h2":"Let's plan your day in Iceland.","contact.lead":"Send a quick request and I'll reply personally — usually within a few hours — to confirm the details with you.",
  "form.tour":"Which tour or transfer?","form.tour.opt":"Choose one…","form.date":"Preferred date","form.people":"How many of you?","form.name":"Your name","form.email":"Email","form.phone":"Phone / WhatsApp","form.phone.opt":"(optional)","form.msg":"Anything else?","form.msg.opt":"(optional)","form.msg.ph":"Flight times, ideas, must-see places…",
  "form.send":"Send request","form.legal":"This is an availability request, not a booking — I'll confirm details with you personally.",
  "form.sent.title":"Thank you — request sent!","form.sent.body":"I'll get back to you personally, usually within a few hours, to confirm the details.",
  "form.p.1":"1–4 people","form.p.2":"5–8 people",
  "opt.gc":"Golden Circle — private tour","opt.sc":"South Coast — private tour","opt.jk":"Jökulsárlón Glacier Lagoon","opt.kef":"Keflavík airport transfer","opt.bl":"Blue Lagoon transfer","opt.aurora":"Northern Lights (autumn)","opt.custom":"Custom / not sure yet",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 785 0558","cm.phone.l":"Call / text","cm.phone.v":"+354 785 0558","cm.mail.l":"Email","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Based in","cm.hours.v":"Reykjavík · 7 days a week","map.label":"map — Reykjavík pick-up area","cm.pickup.area":"Pick-up across Greater Reykjavík — Reykjavík · Kópavogur · Hafnarfjörður · Mosfellsbær. Other areas? Just ask.",

  "pl.offer":"",

  "footer.tagline":"Private tours and airport transfers across Iceland — a local driver who treats you like family.","footer.explore":"Explore","footer.tours":"Tours","footer.contact":"Contact","footer.disclaimer":"Journey Iceland is a private driver & guide service. Availability requests are confirmed personally; this site does not take online bookings or payments.","footer.privacy":"Privacy","footer.terms":"Terms","footer.rights":"© 2026 Journey Iceland. Made with warmth in Reykjavík.",

  /* ---------------- TOUR PAGE: Golden Circle ---------------- */
  "tp.bc.tours":"Tours","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Private day tour · from Reykjavík",
  "tp.h1":"Golden Circle — private tour from Reykjavík.","tp.sub":"Iceland's three icons — a thundering waterfall, an erupting geyser and a continental rift — at your own pace, with no crowds and no clock.",
  "tp.qf.dur":"6–8 hours","tp.qf.price":"from 85,000 ISK","tp.qf.priv":"Private · max 4","tp.qf.pickup":"Hotel pick-up","tp.qf.lang":"EN · PL · DE · ES",
  "tp.sn.overview":"Overview","tp.sn.route":"Route","tp.sn.map":"Map","tp.sn.gallery":"Gallery","tp.sn.reviews":"Reviews","tp.sn.faq":"FAQ","tp.sn.avail":"Availability",

  "tp.hl.eyebrow":"In short","tp.hl.h2":"What the day looks like.",
  "tp.hl.1":"Þingvellir — walk between two continents","tp.hl.2":"Strokkur geyser erupting every few minutes","tp.hl.3":"Gullfoss, the golden two-tier waterfall","tp.hl.4":"A quiet stop the buses drive straight past","tp.hl.5":"Kerið volcanic crater (seasonal)","tp.hl.6":"Door-to-door hotel pick-up & drop-off","tp.hl.7":"Kate's home-cooked welcome box","tp.hl.8":"Your photos taken along the way",

  "tp.ov.eyebrow":"Why this tour","tp.ov.h2":"The classic — done quietly.","tp.ov.p1":"The Golden Circle is the route everyone drives, and there's a reason: in a single loop you get a tectonic rift valley, Iceland's most reliable geyser and one of its grandest waterfalls. The difference is how you do it.","tp.ov.p2":"With a big bus you get fifteen minutes and a headcount. With me, it's just your group. We leave when you're ready, linger where it's beautiful, and slip in a stop or two the coaches never see — a turf church, a quiet crater, a farm that makes ice cream from its own cows.","tp.ov.p3":"I watch the day's weather and light and shape the order of stops around it, so you're at the prettiest places when they look their best.",

  "tp.rt.eyebrow":"The route","tp.rt.h2":"Stop by stop.",
  "tp.rt.1.t":"Hotel pick-up","tp.rt.1.time":"your chosen time","tp.rt.1.d":"I collect you door-to-door in the Reykjavík area, at a time we agree to suit your plans. Kate's lunch box and hot drinks are waiting in the car.",
  "tp.rt.2.t":"Þingvellir National Park","tp.rt.2.time":"stop 1","tp.rt.2.d":"Walk through the rift where the North American and Eurasian plates pull apart — and where Iceland founded the world's oldest parliament.",
  "tp.rt.3.t":"Geysir & Strokkur","tp.rt.3.time":"stop 2","tp.rt.3.d":"Strokkur fires a column of boiling water 20–30 m into the air every few minutes. We wait for the perfect shot — no rush.",
  "tp.rt.4.t":"Gullfoss waterfall","tp.rt.4.time":"stop 3","tp.rt.4.d":"The 'golden falls' tumble in two great steps into a canyon. On a sunny day the spray throws rainbows across the gorge.",
  "tp.rt.5.t":"A hidden stop","tp.rt.5.time":"stop 4","tp.rt.5.d":"My favourite part: somewhere off the headline route — a crater, a turf church, or a farm café — chosen for the day and the light.",
  "tp.rt.6.t":"Back to your hotel","tp.rt.6.time":"flexible","tp.rt.6.d":"We head back when you've had your fill — there's no fixed return time, the day flexes around you. Want to add dinner or a hot-spring soak? Just say and we'll fit it in.",

  "tp.map.eyebrow":"The loop","tp.map.h2":"Roughly 230 km, all on good roads.","tp.map.label":"map — Golden Circle route from Reykjavík",

  "tp.incl.eyebrow":"The details","tp.incl.h2":"What's included.",
  "tp.incl.yes.t":"Included","tp.incl.no.t":"Not included",
  "tp.incl.yes.1":"Private 4×4 with fuel & all road costs","tp.incl.yes.2":"Hotel pick-up & drop-off","tp.incl.yes.3":"Local English / Polish / German / Spanish guide","tp.incl.yes.4":"Kate's home-cooked lunch box","tp.incl.yes.5":"Photos of you along the way","tp.incl.yes.6":"Flexible pace & a hidden stop",
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
  "tp.faq.4.q":"What does 'from 85,000 ISK' mean?","tp.faq.4.a":"That's a per-group starting price, not per person — so it's the same whether one or four of you travel. The final quote depends on season, pick-up point and any extras.",

  "tp.also.eyebrow":"You may also like","tp.also.h2":"Other ways to see Iceland.",
  "tp.avail.eyebrow":"Check availability","tp.avail.h2":"Check dates for the Golden Circle.","tp.avail.lead":"Send a quick request with your dates and I'll reply personally to confirm everything.",
},

/* =========================== POLSKI =========================== */
pl:{
  "doc.title":"Journey Iceland — prywatne wycieczki i transfery z lokalnym kierowcą",
  "nav.tours":"Wycieczki","nav.why":"Dlaczego my","nav.about":"O nas","nav.gallery":"Galeria","nav.reviews":"Opinie","nav.faq":"FAQ","nav.contact":"Kontakt",
  "cta.check":"Sprawdź dostępność","cta.wa":"Napisz na WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Zapytaj o termin",
  "wa.generic":"Cześć! Piszę z Waszej strony journeyiceland.is. Chciał(a)bym zapytać o prywatną wycieczkę lub transfer: ","wa.custom":"Cześć! Piszę z journeyiceland.is w sprawie trasy na życzenie. Moje pytanie: ","wa.aurora":"Cześć! Piszę z journeyiceland.is w sprawie wycieczki na zorzę. Moje pytanie: ","wa.gc":"Cześć! Piszę z journeyiceland.is w sprawie wycieczki Golden Circle. Moje pytanie: ",
  "brand.tag":"Prywatne wycieczki · Islandia",
  "menu":"Menu",

  "hero.eyebrow":"Prywatny kierowca i przewodnik · od 2016","hero.h1":"Discover Iceland the Old-fashioned way.","hero.sub":"Islandia, jakiej nie pokaże autobus. Prywatne wycieczki i transfery z lokalnym kierowcą, który zadba o Ciebie jak o rodzinę — ukryte miejsca, Twoje tempo, szczerość.","hero.langline":"English · Polski · Deutsch · Español","hero.scroll":"Przewiń",

  "trust.rating":"Ocena Google","trust.insured":"Doświadczony, ubezpieczony kierowca","trust.private":"Tylko prywatne grupy","trust.langs":"English · Polski · Deutsch · Español","trust.pickup":"Bezpłatny odbiór z hotelu",

  "tours.eyebrow":"Wycieczki i transfery","tours.h2":"Dokąd chcesz pojechać?","tours.lead":"Małe prywatne grupy, odbiór z hotelu i trasa ułożona pod Ciebie. Ceny wycieczek są za grupę — nie od osoby.",
  "tours.toursLabel":"Wycieczki jednodniowe","tours.transfersLabel":"Transfery z lotniska i do term",
  "tour.see":"Zobacz wycieczkę","tour.tbc":"","tour.perGroup":"za grupę",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 godz.","tour.gc.price":"od 85 000 ISK","tour.gc.alt":"≈ 2 600 zł · za grupę",
  "tour.sc.name":"Południowe wybrzeże","tour.sc.dur":"8–10 godz.","tour.sc.price":"od 110 000 ISK","tour.sc.alt":"≈ 3 300 zł · za grupę",
  "tour.jk.name":"Laguna lodowcowa Jökulsárlón","tour.jk.dur":"12–14 godz.","tour.jk.price":"od 179 000 ISK","tour.jk.alt":"≈ 5 400 zł · za grupę",

  "transfer.kef.name":"Lotnisko Keflavík ⇄ Reykjavík","transfer.kef.meta":"≈ 50 min · do 4 osób","transfer.kef.price":"od 22 000 ISK",
  "transfer.bl.name":"Transfer do Blue Lagoon","transfer.bl.meta":"Z lotniska lub miasta · bilet nieuwzględniony","transfer.bl.price":"od 22 000 ISK",
  "transfer.check":"Sprawdź dostępność",

  "tours.cta.h3":"Dowiozę wszędzie — trasa na życzenie.","tours.cta.p":"Wulkany, gorące źródła, sesja ślubna, kilkudniowa pętla. Powiedz, co chodzi Ci po głowie, a ułożę pod to cały dzień.",

  "aurora.tag":"Tej jesieni · zapisy już teraz","aurora.eyebrow":"Zorza polarna","aurora.h2":"Pogoń za zorzą — już tej jesieni.","aurora.p":"Od września niebo znów robi się ciemne. Śledzę dla Ciebie prognozę, wywożę poza łunę miasta, a Kasia dorzuca termos gorącej czekolady. Miejsc jest mało — zapytaj o wcześniejszą rezerwację. Od 50 000 ISK za grupę (1–4) · 2–3 h.","aurora.cta1":"Zapytaj o termin",
  "eclipse.tag":"12 sierpnia 2026 · ograniczona liczba miejsc","eclipse.eyebrow":"Całkowite zaćmienie Słońca","eclipse.h2":"Całkowite zaćmienie Słońca — 12 sierpnia 2026.","eclipse.p":"12 sierpnia 2026 Islandia znajdzie się dokładnie na ścieżce całkowitego zaćmienia Słońca, a półwysep Snæfellsnes to jedno z najlepszych miejsc, by zobaczyć, jak niebo robi się ciemne. Mogę Cię tam zabrać — prywatna wycieczka po półwyspie z miejscem do obserwacji zaćmienia albo sam transfer. Hotele już się zapełniają, więc pytaj wcześniej. Napisz, co masz w głowie, a ułożę to pod Ciebie.","eclipse.cta1":"Zapytaj o zaćmienie","wa.eclipse":"Cześć! Interesuje mnie całkowite zaćmienie Słońca 12 sierpnia 2026 (Snæfellsnes). Możesz powiedzieć coś więcej?",

  "why.eyebrow":"Dlaczego z nami","why.h2":"Nie jesteśmy tylko przewodnikami — jesteśmy rodziną.","why.lead":"Mieszkamy tutaj od lat. To tu wychowujemy dzieci, pracujemy i spędzamy wolny czas. Pokazujemy Islandię, którą sami kochamy.",
  "why.1.t":"Nie masowe biuro podróży","why.1.d":"Nie poganiamy i nie odhaczamy atrakcji z listy. Dajemy przestrzeń, by zwolnić i naprawdę poczuć atmosferę Islandii.",
  "why.2.t":"Gościnność mamy we krwi","why.2.d":"Uwielbiamy ludzi. Dbamy o dobrą atmosferę, drobne gesty i to, by goście czuli się swobodnie i zaopiekowani.",
  "why.3.t":"Podróżujemy tak, jak sami chcielibyśmy","why.3.d":"Zatrzymujemy się tam, gdzie widok zapiera dech. Czasem wybieramy dłuższą drogę, bo to właśnie ona okazuje się najpiękniejsza.",
  "why.4.t":"Wspomnienia, nie lista atrakcji","why.4.d":"Zostają z Wami nie tylko zdjęcia, ale emocje, historie i poczucie, że poznaliście prawdziwą Islandię.",
  "compare.mine.title":"Prywatnie ze mną","compare.mine.tag":"Ty","compare.bus.title":"Duży autokar","compare.bus.tag":"Oni",
  "compare.mine.1":"Tylko Twoja grupa — do 4 osób w komforcie","compare.mine.2":"Wyjazd, gdy jesteś gotowy, postój pod wpływem chwili","compare.mine.3":"Ukryte miejsca, do których autokar nie dojedzie","compare.mine.4":"Domowy poczęstunek od Kasi","compare.mine.5":"Jeden przewodnik, który zna Twoje imię",
  "compare.bus.1":"40+ obcych osób i sztywny harmonogram","compare.bus.2":"15 minut na zdjęcie i jedziemy dalej","compare.bus.3":"Tylko zatłoczone, najbardziej znane punkty","compare.bus.4":"Kanapka ze stacji benzynowej","compare.bus.5":"Mikrofon i liczenie głów",

  "about.eyebrow":"O nas","about.h2":"Cześć, jestem Sylwiusz Jan.","about.lead":"Nasza islandzka historia zaczęła się lata temu. Jak wielu, zaczynaliśmy od zera i krok po kroku budowaliśmy tu życie — aż ta wyspa stała się naszym domem. To tu urodziły się nasze bliźniaczki i tu naprawdę zaczęła się nasza największa przygoda.","about.p1":"Odkąd pamiętam, zwiedzam Islandię — szukając ukrytych dróg, zapierających dech widoków i historii, które sprawiają, że każde miejsce jest wyjątkowe. Moja pasja sięga daleko poza znane atrakcje; zawsze szukam cichych zakątków, które większość po prostu mija.","about.p2":"Jako rodzina wciąż przeżywamy tę przygodę. Z córkami u boku wędrujemy, wybieramy malowniczą trasę i często ruszamy bez sztywnego planu — zatrzymując się na piknik przy wodospadzie, zbierając dzikie zioła i patrząc, jak pogoda zmienia się z minuty na minutę. Moja żona jest szefową kuchni i uwielbia gościć ludzi; co roku robimy domowe syropy i nalewki, tak jak kiedyś nasze babcie.","about.p3":"Naszych gości nie traktujemy jak turystów — witamy ich jak przyjaciół i zapraszamy, byś odkrył Islandię tak jak my: z ciekawością, autentycznością i sercem. Odkryj Islandię w starym, dobrym stylu.","about.sign":"— Kasia i Sylwiusz Jan","about.badge.num":"600+","about.badge.t":"zadowolonych gości od 2016",

  "exp.eyebrow":"Przeżycie","exp.h2":"Więcej niż przejazd — przeżycie.","exp.lead":"Drobiazgi, które zamieniają transfer w historię opowiadaną po powrocie.",
  "exp.1.t":"Domowy zestaw powitalny","exp.1.d":"Kasia jest szefową kuchni. Każda wycieczka zaczyna się od ciepłego pudełka — skyr, świeże owoce, coś upieczonego tego ranka.",
  "exp.2.t":"Domowe lunchboxy","exp.2.d":"Świeżo przygotowane przez Kasię, naszą szefową kuchni, i wliczone w każdą wycieczkę — dobre składniki i gościnność jak u nas w domu. Wystarczy, że przy rezerwacji dasz znać o alergiach lub diecie, a my się dostosujemy.",
  "exp.3.t":"Zniżki w restauracjach","exp.3.d":"Nasi goście mają stałe zniżki (10–20%) w starannie wybranych restauracjach w Reykjavíku — a po drodze zrobię Ci zdjęcia, zupełnie za darmo.",
  "exp.rest.h":"Zniżki w restauracjach partnerskich","exp.rest.note":"lunch / kolacja",
  "exp.foot":"\u201ePowiem szczerze, jeśli dziś nie warto jechać.\u201d",

  "gallery.eyebrow":"Galeria","gallery.h2":"Chwile z trasy.","gallery.lead":"Złote światło, ciche drogi, ciepłe jedzenie i czasem zielone niebo. Przesuwaj.",

  "reviews.eyebrow":"Opinie","reviews.h2":"Przyjechali jako goście, wyjechali jak znajomi.","reviews.lead":"Kilka słów od ostatnich podróżnych. Więcej w Google.",
  "rev.1.q":"Sylwiusz znalazł nam wodospad, przy którym nie było nikogo innego. Najlepszy dzień całej wyprawy — i nigdzie się nie spieszyliśmy.","rev.1.name":"Sarah i Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Profesjonalnie, ciepło i po polsku. Czuliśmy się zaopiekowani od lotniska po ostatni przystanek.","rev.2.name":"Tomasz K.","rev.2.loc":"Warszawa, PL",
  "rev.3.q":"Szczerze o pogodzie, elastycznie z planem, a przekąski Kasi były nierealne. Zarezerwowaliśmy go dwa razy w tydzień.","rev.3.name":"Emma L.","rev.3.loc":"Londyn, UK",
  "rev.4.q":"Bardzo osobiście i na luzie. Sylwiusz zna miejsca, których nie ma w żadnym przewodniku. Gorąco polecam!","rev.4.name":"Rodzina Berger","rev.4.loc":"Monachium, DE",
  "rev.5.q":"Nasz lot spóźnił się do północy, a on dalej tam był, uśmiechnięty, z włączonym ogrzewaniem. Cała firma w jednym momencie.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"Stawaliśmy na zdjęcia, gdzie tylko chcieliśmy. Spróbuj tak w 50-osobowym autokarze. Warte każdej korony.","rev.6.name":"Priya i Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Warto wiedzieć","faq.h2":"Odpowiadam na pytania.",
  "faq.1.q":"Czy jazda islandzkimi drogami z Tobą jest bezpieczna?","faq.1.a":"Tak. Jestem doświadczonym, w pełni ubezpieczonym lokalnym kierowcą, jeżdżę zadbanym autem 4×4. Codziennie sprawdzam pogodę i stan dróg i chętnie zmienię plan, zamiast ryzykować. Twoje bezpieczeństwo zawsze jest ważniejsze niż plan dnia.",
  "faq.2.q":"Czy gwarantujesz, że zobaczymy zorzę?","faq.2.a":"Uczciwie — nikt nie może. Zorza zależy od ciemności, czystego nieba i aktywności słońca. Mogę za to obiecać, że śledzę prognozę, wywożę Cię poza światła miasta tam, gdzie szanse są największe, i dbam o ciepło podczas czekania. A jeśli niebo nie da rady, powiem wprost.",
  "faq.3.q":"Jak działa płatność, skoro nie ma rezerwacji online?","faq.3.a":"Tak to działa celowo. Wysyłasz zapytanie o termin, ustalamy szczegóły osobiście, a potem wysyłam bezpieczny link do płatności albo przyjmuję kartę na miejscu. Samo zapytanie o termin nie wiąże się z żadną zaliczką.",
  "faq.4.q":"Jakimi językami mówisz?","faq.4.a":"Oprowadzam po polsku, angielsku, niemiecku i hiszpańsku. Powiedz tylko, w którym czujesz się najlepiej, i taki będzie język całego dnia.",
  "faq.5.q":"Czy wycieczka jest naprawdę prywatna?","faq.5.a":"Zawsze. W aucie jest wyłącznie Twoja grupa — nigdy z obcymi. Tempo, przystanki i muzyka należą do Ciebie.",
  "faq.6.q":"Czy odbierasz z hotelu?","faq.6.a":"Tak — bezpłatny odbiór z hotelu, mieszkania lub kempingu w rejonie Reykjavíku, a przy transferach także z lotniska Keflavík. Dokładną godzinę ustalimy w rozmowie.",
  "faq.7.q":"Co, jeśli w dniu wyjazdu pogoda się popsuje?","faq.7.a":"Dostosowujemy się. Zmienię trasę na osłonięte, wciąż piękne miejsca, przesunę dzień, jeśli naprawdę jest niebezpiecznie, albo umówimy nowy termin bez problemu. Nigdy nie wypchnę Cię w burzę dla samego harmonogramu.",
  "faq.8.q":"Czy będąc na Islandii mogę płacić kartą?","faq.8.a":"Tak — na Islandii kartą zapłacisz niemal wszędzie, od stacji paliw po małe kawiarnie, więc gotówka prawie nie jest potrzebna. Za samą wycieczkę wyślę bezpieczny link do płatności albo przyjmę kartę na miejscu.",
  "faq.9.q":"Jakiej pogody możemy się spodziewać na Islandii?","faq.9.a":"Szczerze — wszystkiego po trochu. Islandzka pogoda potrafi zmienić się w kilka minut, więc słoneczny poranek może przejść w deszcz i z powrotem. Śledzę prognozę na bieżąco, ubieram się na warstwy i układam dzień pod warunki, żebyś i tak wyniósł z niego jak najwięcej.",

  "contact.eyebrow":"Sprawdź dostępność","contact.h2":"Zaplanujmy Twój dzień na Islandii.","contact.lead":"Wyślij krótkie zapytanie, a odpiszę osobiście — zwykle w ciągu kilku godzin — żeby ustalić szczegóły.",
  "form.tour":"Która wycieczka lub transfer?","form.tour.opt":"Wybierz…","form.date":"Preferowana data","form.people":"Ile Was jest?","form.name":"Imię","form.email":"E-mail","form.phone":"Telefon / WhatsApp","form.phone.opt":"(opcjonalnie)","form.msg":"Coś jeszcze?","form.msg.opt":"(opcjonalnie)","form.msg.ph":"Godziny lotów, pomysły, miejsca obowiązkowe…",
  "form.send":"Wyślij zapytanie","form.legal":"To zapytanie o dostępność, nie rezerwacja — szczegóły potwierdzę z Tobą osobiście.",
  "form.sent.title":"Dziękuję — zapytanie wysłane!","form.sent.body":"Odezwę się osobiście, zwykle w ciągu kilku godzin, żeby potwierdzić szczegóły.",
  "form.p.1":"1–4 osoby","form.p.2":"5–8 osób",
  "opt.gc":"Golden Circle — wycieczka prywatna","opt.sc":"Południowe wybrzeże — prywatnie","opt.jk":"Laguna lodowcowa Jökulsárlón","opt.kef":"Transfer z lotniska Keflavík","opt.bl":"Transfer do Blue Lagoon","opt.aurora":"Zorza polarna (jesień)","opt.custom":"Inne / jeszcze nie wiem",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 785 0558","cm.phone.l":"Telefon / SMS","cm.phone.v":"+354 785 0558","cm.mail.l":"E-mail","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Baza","cm.hours.v":"Reykjavík · 7 dni w tygodniu","map.label":"mapa — rejon odbioru Reykjavík","cm.pickup.area":"Odbiór w całej aglomeracji Reykjavíku — Reykjavík · Kópavogur · Hafnarfjörður · Mosfellsbær. Inne miejsce? Zapytaj.",

  "pl.offer":"🇵🇱 Dla polskich podróżnych — zapytaj o specjalną cenę i powitanie po polsku.",

  "footer.tagline":"Prywatne wycieczki i transfery z lotniska po całej Islandii — lokalny kierowca, który zadba o Ciebie jak o rodzinę.","footer.explore":"Odkryj","footer.tours":"Wycieczki","footer.contact":"Kontakt","footer.disclaimer":"Journey Iceland to usługa prywatnego kierowcy i przewodnika. Zapytania o termin potwierdzam osobiście; strona nie przyjmuje rezerwacji ani płatności online.","footer.privacy":"Prywatność","footer.terms":"Regulamin","footer.rights":"© 2026 Journey Iceland. Tworzone z ciepłem w Reykjavíku.",

  "tp.bc.tours":"Wycieczki","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Prywatna wycieczka jednodniowa · z Reykjavíku","tp.h1":"Golden Circle — prywatna wycieczka z Reykjavíku.","tp.sub":"Trzy ikony Islandii — huczący wodospad, wybuchający gejzer i ryft kontynentalny — w Twoim tempie, bez tłumów i bez zegarka.",
  "tp.qf.dur":"6–8 godzin","tp.qf.price":"od 85 000 ISK","tp.qf.priv":"Prywatnie · maks. 4","tp.qf.pickup":"Odbiór z hotelu","tp.qf.lang":"EN · PL · DE · ES",
  "tp.sn.overview":"Opis","tp.sn.route":"Trasa","tp.sn.map":"Mapa","tp.sn.gallery":"Galeria","tp.sn.reviews":"Opinie","tp.sn.faq":"FAQ","tp.sn.avail":"Dostępność",

  "tp.hl.eyebrow":"W skrócie","tp.hl.h2":"Jak wygląda ten dzień.",
  "tp.hl.1":"Þingvellir — spacer między dwoma kontynentami","tp.hl.2":"Gejzer Strokkur wybuchający co kilka minut","tp.hl.3":"Gullfoss — złoty, dwustopniowy wodospad","tp.hl.4":"Cichy przystanek, który autobusy mijają","tp.hl.5":"Krater wulkaniczny Kerið (sezonowo)","tp.hl.6":"Odbiór i odwóz pod same drzwi hotelu","tp.hl.7":"Domowe pudełko powitalne od Kasi","tp.hl.8":"Twoje zdjęcia robione po drodze",

  "tp.ov.eyebrow":"Dlaczego ta wycieczka","tp.ov.h2":"Klasyka — w spokoju.","tp.ov.p1":"Golden Circle to trasa, którą jeżdżą wszyscy, i nie bez powodu: w jednej pętli masz dolinę ryftową, najbardziej niezawodny gejzer Islandii i jeden z jej najwspanialszych wodospadów. Różnica jest w tym, jak to przeżyjesz.","tp.ov.p2":"W dużym autobusie masz piętnaście minut i liczenie głów. Ze mną — tylko Twoja grupa. Ruszamy, gdy jesteś gotowy, zostajemy tam, gdzie pięknie, i wpadamy w jedno czy dwa miejsca, których autokary nigdy nie widzą — kościółek z darni, cichy krater, gospodarstwo robiące lody z mleka własnych krów.","tp.ov.p3":"Śledzę pogodę i światło danego dnia i układam kolejność przystanków tak, byś był w najładniejszych miejscach, gdy wyglądają najlepiej.",

  "tp.rt.eyebrow":"Trasa","tp.rt.h2":"Przystanek po przystanku.",
  "tp.rt.1.t":"Odbiór z hotelu","tp.rt.1.time":"o wybranej porze","tp.rt.1.d":"Odbieram Cię pod same drzwi w rejonie Reykjavíku, o porze, którą ustalimy pod Ciebie. Lunchbox Kasi i ciepłe napoje czekają w aucie.",
  "tp.rt.2.t":"Park Narodowy Þingvellir","tp.rt.2.time":"przystanek 1","tp.rt.2.d":"Przejdź przez ryft, gdzie płyta północnoamerykańska i euroazjatycka rozsuwają się — i gdzie Islandia założyła najstarszy parlament świata.",
  "tp.rt.3.t":"Geysir i Strokkur","tp.rt.3.time":"przystanek 2","tp.rt.3.d":"Strokkur co kilka minut wyrzuca słup wrzącej wody na 20–30 m. Czekamy na idealny kadr — bez pośpiechu.",
  "tp.rt.4.t":"Wodospad Gullfoss","tp.rt.4.time":"przystanek 3","tp.rt.4.d":"„Złote wodospady” spadają dwoma wielkimi stopniami do kanionu. W słoneczny dzień mgła rysuje tęcze nad wąwozem.",
  "tp.rt.5.t":"Ukryty przystanek","tp.rt.5.time":"przystanek 4","tp.rt.5.d":"Moja ulubiona część: coś poza główną trasą — krater, kościółek z darni albo kawiarnia w gospodarstwie — wybrane pod dzień i światło.",
  "tp.rt.6.t":"Powrót do hotelu","tp.rt.6.time":"elastycznie","tp.rt.6.d":"Wracamy, gdy nasycisz się widokami — bez sztywnej godziny powrotu, dzień układa się pod Ciebie. Chcesz dorzucić kolację albo kąpiel w gorącym źródle? Powiedz, a znajdziemy na to czas.",

  "tp.map.eyebrow":"Pętla","tp.map.h2":"Około 230 km, w całości dobrymi drogami.","tp.map.label":"mapa — trasa Golden Circle z Reykjavíku",

  "tp.incl.eyebrow":"Szczegóły","tp.incl.h2":"Co jest w cenie.",
  "tp.incl.yes.t":"W cenie","tp.incl.no.t":"Poza ceną",
  "tp.incl.yes.1":"Prywatne 4×4 z paliwem i opłatami drogowymi","tp.incl.yes.2":"Odbiór i odwóz do hotelu","tp.incl.yes.3":"Lokalny przewodnik EN / PL / DE / ES","tp.incl.yes.4":"Domowy lunchbox Kasi","tp.incl.yes.5":"Zdjęcia po drodze","tp.incl.yes.6":"Elastyczne tempo i ukryty przystanek",
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
  "tp.faq.4.q":"Co znaczy „od 85 000 ISK”?","tp.faq.4.a":"To cena wyjściowa za grupę, nie od osoby — więc jest taka sama, czy jedzie jedna osoba, czy cztery. Ostateczna wycena zależy od sezonu, miejsca odbioru i dodatków.",

  "tp.also.eyebrow":"Może Cię zainteresować","tp.also.h2":"Inne sposoby na Islandię.",
  "tp.avail.eyebrow":"Sprawdź dostępność","tp.avail.h2":"Sprawdź terminy dla Golden Circle.","tp.avail.lead":"Wyślij krótkie zapytanie z terminami, a odpiszę osobiście, żeby wszystko potwierdzić.",
},

/* =========================== DEUTSCH =========================== */
de:{
  "doc.title":"Journey Iceland — private Touren & Flughafentransfers mit einem Einheimischen",
  "nav.tours":"Touren","nav.why":"Warum wir","nav.about":"Über uns","nav.gallery":"Galerie","nav.reviews":"Bewertungen","nav.faq":"FAQ","nav.contact":"Kontakt",
  "cta.check":"Verfügbarkeit prüfen","cta.wa":"Schreib mir auf WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Frag nach",
  "wa.generic":"Hallo! Ich schreibe über Ihre Website journeyiceland.is. Ich möchte gern nach einer privaten Tour oder einem Transfer fragen: ","wa.custom":"Hallo! Ich schreibe über journeyiceland.is wegen einer Wunschroute. Meine Frage: ","wa.aurora":"Hallo! Ich schreibe über journeyiceland.is wegen der Nordlicht-Tour. Meine Frage: ","wa.gc":"Hallo! Ich schreibe über journeyiceland.is wegen der Golden-Circle-Tour. Meine Frage: ",
  "brand.tag":"Private Touren · Island",
  "menu":"Menü",

  "hero.eyebrow":"Privater Fahrer & Guide · seit 2016","hero.h1":"Discover Iceland the Old-fashioned way.","hero.sub":"Island, wie ein Einheimischer es zeigt. Private Touren und Flughafentransfers mit einem einheimischen Fahrer, der dich wie Familie behandelt — versteckte Orte, dein Tempo, ehrlicher Rat.","hero.langline":"English · Polski · Deutsch · Español","hero.scroll":"Scrollen",

  "trust.rating":"Google-Bewertung","trust.insured":"Erfahrener, versicherter Fahrer","trust.private":"Nur private Gruppen","trust.langs":"English · Polski · Deutsch · Español","trust.pickup":"Kostenlose Hotelabholung",

  "tours.eyebrow":"Touren & Transfers","tours.h2":"Wohin möchtest du?","tours.lead":"Kleine private Gruppen, Hotelabholung und eine Route, die wir um dich herum gestalten. Tourpreise gelten pro Gruppe — nicht pro Person.",
  "tours.toursLabel":"Tagestouren","tours.transfersLabel":"Flughafen- & Spa-Transfers",
  "tour.see":"Tour ansehen","tour.tbc":"","tour.perGroup":"pro Gruppe",

  "tour.gc.name":"Golden Circle","tour.gc.dur":"6–8 Std.","tour.gc.price":"ab 85.000 ISK","tour.gc.alt":"≈ 570 € / 610 $ · pro Gruppe",
  "tour.sc.name":"Südküste","tour.sc.dur":"8–10 Std.","tour.sc.price":"ab 110.000 ISK","tour.sc.alt":"≈ 730 € / 790 $ · pro Gruppe",
  "tour.jk.name":"Gletscherlagune Jökulsárlón","tour.jk.dur":"12–14 Std.","tour.jk.price":"ab 179.000 ISK","tour.jk.alt":"≈ 1.190 € / 1.280 $ · pro Gruppe",

  "transfer.kef.name":"Flughafen Keflavík ⇄ Reykjavík","transfer.kef.meta":"≈ 50 Min · bis zu 4 Gäste","transfer.kef.price":"ab 22.000 ISK",
  "transfer.bl.name":"Blue-Lagoon-Transfer","transfer.bl.meta":"Flughafen oder Stadt · Ticket nicht inkl.","transfer.bl.price":"ab 22.000 ISK",
  "transfer.check":"Verfügbarkeit prüfen",

  "tours.cta.h3":"Ich fahre überallhin — Wunschroute auf Anfrage.","tours.cta.p":"Vulkane, heiße Quellen, ein Hochzeitsshooting, eine mehrtägige Runde. Sag mir die Idee und ich baue den Tag darum herum.",

  "aurora.tag":"Diesen Herbst · jetzt vormerken","aurora.eyebrow":"Nordlichter","aurora.h2":"Den Nordlichtern hinterher — diesen Herbst.","aurora.p":"Ab September wird der Himmel wieder dunkel. Ich beobachte für dich die Vorhersage, fahre weg vom Stadtlicht, und Kate gibt eine Thermoskanne heiße Schokolade dazu. Die Plätze sind begrenzt — frag jetzt nach einer Vormerkung. Ab 50.000 ISK pro Gruppe (1–4) · 2–3 Std.","aurora.cta1":"Frag nach",
  "eclipse.tag":"12. August 2026 · begrenzte Plätze","eclipse.eyebrow":"Totale Sonnenfinsternis","eclipse.h2":"Die totale Sonnenfinsternis — 12. August 2026.","eclipse.p":"Am 12. August 2026 liegt Island genau im Pfad einer totalen Sonnenfinsternis, und die Halbinsel Snæfellsnes gehört zu den besten Orten, um zuzusehen, wie der Himmel dunkel wird. Ich bringe dich hin — eine private Tour über die Halbinsel mit einem Platz zur Beobachtung der Finsternis oder nur der Transfer. Die Hotels füllen sich bereits, frag also früh. Sag mir, was dir vorschwebt, und ich plane es um dich herum.","eclipse.cta1":"Nach der Finsternis fragen","wa.eclipse":"Hallo! Ich interessiere mich für die totale Sonnenfinsternis am 12. August 2026 (Snæfellsnes). Kannst du mir mehr sagen?",

  "why.eyebrow":"Warum mit uns","why.h2":"Wir sind nicht nur Guides — wir sind eine Familie.","why.lead":"Wir leben hier — ziehen unsere Kinder groß, arbeiten und verbringen unsere Freizeit hier. Wir zeigen dir das Island, das wir lieben.",
  "why.1.t":"Kein Massenanbieter","why.1.d":"Wir hetzen dich nicht und haken keine Sehenswürdigkeiten ab. Es bleibt Zeit, langsamer zu machen und Island wirklich zu spüren.",
  "why.2.t":"Gastfreundschaft im Blut","why.2.d":"Wir lieben Menschen. Uns sind die gute Atmosphäre und die kleinen Gesten wichtig — und dass du dich entspannt und umsorgt fühlst.",
  "why.3.t":"Wir reisen, wie wir es selbst wollen","why.3.d":"Wir halten, wo die Aussicht den Atem raubt — und nehmen manchmal den längeren Weg, weil er der schönste ist.",
  "why.4.t":"Erinnerungen statt Programm","why.4.d":"Du fährst mit mehr als Fotos nach Hause — mit Emotionen, Geschichten und dem Gefühl, das echte Island erlebt zu haben.",
  "compare.mine.title":"Privat mit mir","compare.mine.tag":"Du","compare.bus.title":"Großer Reisebus","compare.bus.tag":"Die",
  "compare.mine.1":"Nur deine Gruppe — bis zu 4 bequem","compare.mine.2":"Losfahren, wenn du bereit bist, spontan halten","compare.mine.3":"Versteckte Orte, die Busse nicht erreichen","compare.mine.4":"Hausgemachte Snacks von Kate","compare.mine.5":"Ein Guide, der deinen Namen kennt",
  "compare.bus.1":"40+ Fremde nach festem Fahrplan","compare.bus.2":"15 Minuten pro Fotostopp, dann weiter","compare.bus.3":"Nur die überfüllten Hauptsehenswürdigkeiten","compare.bus.4":"Ein Sandwich von der Tankstelle","compare.bus.5":"Ein Mikrofon und das Durchzählen",

  "about.eyebrow":"Über uns","about.h2":"Hallo, ich bin John.","about.lead":"Unsere Island-Geschichte begann vor vielen Jahren. Wie viele fingen wir bei null an und bauten uns Schritt für Schritt ein Leben auf — bis diese Insel zu unserem Zuhause wurde. Hier kamen unsere Zwillingstöchter zur Welt, und hier begann unser größtes Abenteuer.","about.p1":"Solange ich denken kann, erkunde ich Island — versteckte Straßen, atemberaubende Aussichtspunkte und die Geschichten, die jeden Ort einzigartig machen. Meine Leidenschaft reicht weit über die berühmten Sehenswürdigkeiten hinaus; ich suche immer die stillen Ecken, an denen die meisten vorbeifahren.","about.p2":"Als Familie halten wir dieses Abenteuer lebendig. Mit unseren Töchtern wandern wir, nehmen die schöne Route und brechen oft ohne festen Plan auf — ein Picknick am Wasserfall, wilde Kräuter sammeln, dem Wetter zusehen, das sich im Minutentakt ändert. Meine Frau ist Head Chef und liebt es, Menschen zu empfangen; jedes Jahr machen wir hausgemachte Sirupe und Tinkturen, wie einst unsere Großmütter.","about.p3":"Wir sehen unsere Gäste nicht als Touristen — wir empfangen sie als Freunde und laden dich ein, Island so zu entdecken wie wir: mit Neugier, Authentizität und Herz. Entdecke Island auf die altmodische Art.","about.sign":"— Kate & John","about.badge.num":"600+","about.badge.t":"zufriedene Gäste seit 2016",

  "exp.eyebrow":"Das Erlebnis","exp.h2":"Mehr als eine Fahrt — ein Erlebnis.","exp.lead":"Die kleinen Dinge, die aus einem Transfer eine Geschichte machen, die du zu Hause erzählst.",
  "exp.1.t":"Hausgemachtes Willkommens-Set","exp.1.d":"Kate ist Köchin. Jede Tour beginnt mit einer warmen Willkommensbox — Skyr, frisches Obst, etwas am Morgen Gebackenes.",
  "exp.2.t":"Hausgemachte Lunchboxen","exp.2.d":"Frisch zubereitet von Kate, unserer Head Chef, und in jeder Tour inklusive — gute Zutaten und die Gastfreundschaft, die wir Gästen zu Hause geben. Sag uns bei der Buchung einfach Bescheid über Allergien oder Ernährungswünsche, wir richten uns danach.",
  "exp.3.t":"Restaurant-Rabatte","exp.3.d":"Unsere Gäste erhalten feste Rabatte (10–20%) in handverlesenen Restaurants in Reykjavík — und unterwegs mache ich deine Fotos, kostenlos.",
  "exp.rest.h":"Rabatte in unseren Partnerrestaurants","exp.rest.note":"Mittag / Abend",
  "exp.foot":"\u201eIch sage dir ehrlich, wenn es sich heute nicht lohnt.\u201c",

  "gallery.eyebrow":"Galerie","gallery.h2":"Momente von unterwegs.","gallery.lead":"Goldenes Licht, stille Straßen, warmes Essen und ab und zu ein grüner Himmel. Wischen.",

  "reviews.eyebrow":"Bewertungen","reviews.h2":"Sie kamen als Gäste und gingen als Freunde.","reviews.lead":"Ein paar Worte von Reisenden der letzten Zeit. Mehr auf Google.",
  "rev.1.q":"Syl fand uns einen Wasserfall, an dem kein einziger anderer Mensch war. Bester Tag unserer ganzen Islandreise — und nie gehetzt.","rev.1.name":"Sarah & Mike","rev.1.loc":"Austin, USA",
  "rev.2.q":"Professionell, herzlich und auf Polnisch. Vom Flughafen bis zum letzten Stopp fühlten wir uns umsorgt.","rev.2.name":"Tomasz K.","rev.2.loc":"Warschau, PL",
  "rev.3.q":"Ehrlich beim Wetter, flexibel beim Plan, und Kates Snacks waren unglaublich. Wir haben ihn zweimal in einer Woche gebucht.","rev.3.name":"Emma L.","rev.3.loc":"London, UK",
  "rev.4.q":"Sehr persönlich und entspannt. Syl kennt Orte, die in keinem Reiseführer stehen. Absolute Empfehlung!","rev.4.name":"Familie Berger","rev.4.loc":"München, DE",
  "rev.5.q":"Unser Flug verspätete sich bis Mitternacht, und er war immer noch da, lächelnd, mit eingeschalteter Heizung. Das ist die ganze Firma in einem Moment.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"Wir hielten zum Fotografieren, wo wir wollten. Versuch das mal in einem 50-Sitzer-Bus. Jede Krone wert.","rev.6.name":"Priya & Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Gut zu wissen","faq.h2":"Fragen, beantwortet.",
  "faq.1.q":"Ist es sicher, mit dir über Islands Straßen zu fahren?","faq.1.a":"Ja. Ich bin ein erfahrener, voll versicherter einheimischer Fahrer in einem gepflegten 4×4. Ich prüfe täglich Wetter und Straßenzustand und ändere lieber einen Plan, als ein Risiko einzugehen. Deine Sicherheit geht immer vor jeden Reiseplan.",
  "faq.2.q":"Kannst du garantieren, dass wir die Nordlichter sehen?","faq.2.a":"Ehrlich gesagt kann das niemand — die Aurora hängt von Dunkelheit, klarem Himmel und Sonnenaktivität ab. Versprechen kann ich, dass ich die Vorhersage verfolge, dich weg vom Stadtlicht zur besten Chance fahre und dich beim Warten warmhalte. Spielt der Himmel nicht mit, sage ich es dir geradeheraus.",
  "faq.3.q":"Wie funktioniert die Zahlung, wenn ich nicht online buchen kann?","faq.3.a":"Das ist Absicht. Du sendest eine Verfügbarkeitsanfrage, wir klären die Details persönlich, und dann schicke ich dir einen sicheren Zahlungslink oder nehme die Karte am Tag selbst. Für eine reine Terminanfrage wird keine Anzahlung fällig.",
  "faq.4.q":"Welche Sprachen sprichst du?","faq.4.a":"Ich führe auf Deutsch, Englisch, Polnisch und Spanisch. Sag mir einfach, in welcher du dich am wohlsten fühlst, und das ist die Sprache des Tages.",
  "faq.5.q":"Ist die Tour wirklich privat?","faq.5.a":"Immer. Es ist nur deine Gruppe im Auto — nie mit Fremden geteilt. Tempo, Stopps und Musik gehören dir.",
  "faq.6.q":"Holst du mich am Hotel ab?","faq.6.a":"Ja — kostenlose Abholung an Hotel, Apartment oder Campingplatz im Raum Reykjavík und bei Transfers auch am Flughafen Keflavík. Die genaue Zeit bestätige ich im Gespräch.",
  "faq.7.q":"Was, wenn das Wetter am Tag schlecht wird?","faq.7.a":"Wir passen uns an. Ich leite zu geschützten, trotzdem schönen Stopps um, verschiebe den Tag, wenn es wirklich unsicher ist, oder vereinbare unkompliziert einen neuen Termin. Für einen Zeitplan schicke ich dich nie in einen Sturm hinaus.",
  "faq.8.q":"Kann ich in Island mit Karte zahlen?","faq.8.a":"Ja — in Island zahlst du fast überall mit Karte, von der Tankstelle bis zum kleinen Café, Bargeld brauchst du kaum. Für die Tour selbst schicke ich einen sicheren Zahlungslink oder nehme die Karte am Tag.",
  "faq.9.q":"Mit welchem Wetter können wir in Island rechnen?","faq.9.a":"Ehrlich — mit allem ein bisschen. Islands Wetter kann sich in Minuten ändern, ein sonniger Morgen wird zu Regen und zurück. Ich verfolge die Vorhersage genau, kleide mich in Schichten und richte den Tag nach den Bedingungen aus, damit du trotzdem das Beste erlebst.",

  "contact.eyebrow":"Verfügbarkeit prüfen","contact.h2":"Planen wir deinen Tag in Island.","contact.lead":"Sende eine kurze Anfrage und ich antworte persönlich — meist innerhalb weniger Stunden — um die Details mit dir abzustimmen.",
  "form.tour":"Welche Tour oder welcher Transfer?","form.tour.opt":"Auswählen…","form.date":"Wunschdatum","form.people":"Wie viele seid ihr?","form.name":"Dein Name","form.email":"E-Mail","form.phone":"Telefon / WhatsApp","form.phone.opt":"(optional)","form.msg":"Sonst noch etwas?","form.msg.opt":"(optional)","form.msg.ph":"Flugzeiten, Ideen, Lieblingsorte…",
  "form.send":"Anfrage senden","form.legal":"Dies ist eine Verfügbarkeitsanfrage, keine Buchung — ich bestätige die Details persönlich mit dir.",
  "form.sent.title":"Danke — Anfrage gesendet!","form.sent.body":"Ich melde mich persönlich, meist innerhalb weniger Stunden, um die Details zu bestätigen.",
  "form.p.1":"1–4 Personen","form.p.2":"5–8 Personen",
  "opt.gc":"Golden Circle — private Tour","opt.sc":"Südküste — private Tour","opt.jk":"Gletscherlagune Jökulsárlón","opt.kef":"Flughafentransfer Keflavík","opt.bl":"Blue-Lagoon-Transfer","opt.aurora":"Nordlichter (Herbst)","opt.custom":"Individuell / noch unklar",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 785 0558","cm.phone.l":"Anruf / SMS","cm.phone.v":"+354 785 0558","cm.mail.l":"E-Mail","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Standort","cm.hours.v":"Reykjavík · 7 Tage die Woche","map.label":"Karte — Abholbereich Reykjavík","cm.pickup.area":"Abholung im Großraum Reykjavík — Reykjavík · Kópavogur · Hafnarfjörður · Mosfellsbær. Andere Orte? Frag einfach.",

  "pl.offer":"",

  "footer.tagline":"Private Touren und Flughafentransfers in ganz Island — ein einheimischer Fahrer, der dich wie Familie behandelt.","footer.explore":"Entdecken","footer.tours":"Touren","footer.contact":"Kontakt","footer.disclaimer":"Journey Iceland ist ein privater Fahr- & Guide-Service. Verfügbarkeitsanfragen werden persönlich bestätigt; diese Seite nimmt keine Online-Buchungen oder Zahlungen an.","footer.privacy":"Datenschutz","footer.terms":"AGB","footer.rights":"© 2026 Journey Iceland. Mit Wärme in Reykjavík gemacht.",

  "tp.bc.tours":"Touren","tp.bc.cur":"Golden Circle",
  "tp.eyebrow":"Private Tagestour · ab Reykjavík","tp.h1":"Golden Circle — private Tour ab Reykjavík.","tp.sub":"Islands drei Ikonen — ein donnernder Wasserfall, ein ausbrechender Geysir und ein Kontinentalgraben — in deinem Tempo, ohne Menschenmassen und ohne Uhr.",
  "tp.qf.dur":"6–8 Stunden","tp.qf.price":"ab 85.000 ISK","tp.qf.priv":"Privat · max. 4","tp.qf.pickup":"Hotelabholung","tp.qf.lang":"EN · PL · DE · ES",
  "tp.sn.overview":"Überblick","tp.sn.route":"Route","tp.sn.map":"Karte","tp.sn.gallery":"Galerie","tp.sn.reviews":"Bewertungen","tp.sn.faq":"FAQ","tp.sn.avail":"Verfügbarkeit",

  "tp.hl.eyebrow":"Kurz gesagt","tp.hl.h2":"So sieht der Tag aus.",
  "tp.hl.1":"Þingvellir — zwischen zwei Kontinenten spazieren","tp.hl.2":"Geysir Strokkur, der alle paar Minuten ausbricht","tp.hl.3":"Gullfoss, der goldene zweistufige Wasserfall","tp.hl.4":"Ein ruhiger Stopp, an dem Busse vorbeifahren","tp.hl.5":"Vulkankrater Kerið (saisonal)","tp.hl.6":"Abholung & Rückbringung bis vor die Hoteltür","tp.hl.7":"Kates hausgemachte Willkommensbox","tp.hl.8":"Deine Fotos, unterwegs aufgenommen",

  "tp.ov.eyebrow":"Warum diese Tour","tp.ov.h2":"Der Klassiker — in Ruhe.","tp.ov.p1":"Der Golden Circle ist die Route, die alle fahren, und das aus gutem Grund: In einer Runde bekommst du ein tektonisches Grabental, Islands zuverlässigsten Geysir und einen seiner großartigsten Wasserfälle. Der Unterschied liegt darin, wie du es erlebst.","tp.ov.p2":"Im großen Bus bekommst du fünfzehn Minuten und das Durchzählen. Bei mir ist es nur deine Gruppe. Wir fahren los, wenn du bereit bist, verweilen, wo es schön ist, und schieben ein, zwei Stopps ein, die die Busse nie sehen — eine Torfkirche, einen stillen Krater, einen Hof, der Eis aus der Milch eigener Kühe macht.","tp.ov.p3":"Ich beobachte Wetter und Licht des Tages und ordne die Stopps so an, dass du an den schönsten Orten bist, wenn sie am besten aussehen.",

  "tp.rt.eyebrow":"Die Route","tp.rt.h2":"Stopp für Stopp.",
  "tp.rt.1.t":"Hotelabholung","tp.rt.1.time":"zur Wunschzeit","tp.rt.1.d":"Ich hole dich im Raum Reykjavík bis vor die Tür ab, zu einer Zeit, die wir nach deinen Plänen abstimmen. Kates Lunchbox und heiße Getränke warten im Auto.",
  "tp.rt.2.t":"Nationalpark Þingvellir","tp.rt.2.time":"Stopp 1","tp.rt.2.d":"Geh durch den Graben, wo die nordamerikanische und die eurasische Platte auseinanderdriften — und wo Island das älteste Parlament der Welt gründete.",
  "tp.rt.3.t":"Geysir & Strokkur","tp.rt.3.time":"Stopp 2","tp.rt.3.d":"Strokkur schießt alle paar Minuten eine Säule kochenden Wassers 20–30 m hoch. Wir warten auf die perfekte Aufnahme — ohne Eile.",
  "tp.rt.4.t":"Wasserfall Gullfoss","tp.rt.4.time":"Stopp 3","tp.rt.4.d":"Die „goldenen Fälle“ stürzen in zwei großen Stufen in eine Schlucht. An sonnigen Tagen wirft die Gischt Regenbögen über die Klamm.",
  "tp.rt.5.t":"Ein versteckter Stopp","tp.rt.5.time":"Stopp 4","tp.rt.5.d":"Mein Lieblingsteil: irgendwo abseits der Hauptroute — ein Krater, eine Torfkirche oder ein Hofcafé — gewählt nach Tag und Licht.",
  "tp.rt.6.t":"Zurück zum Hotel","tp.rt.6.time":"flexibel","tp.rt.6.d":"Wir fahren zurück, wenn du genug gesehen hast — keine feste Rückkehrzeit, der Tag richtet sich nach dir. Noch Abendessen oder ein Bad in der heißen Quelle? Sag Bescheid, wir bauen es ein.",

  "tp.map.eyebrow":"Die Runde","tp.map.h2":"Rund 230 km, alles auf guten Straßen.","tp.map.label":"Karte — Golden-Circle-Route ab Reykjavík",

  "tp.incl.eyebrow":"Die Details","tp.incl.h2":"Was enthalten ist.",
  "tp.incl.yes.t":"Enthalten","tp.incl.no.t":"Nicht enthalten",
  "tp.incl.yes.1":"Privates 4×4 mit Sprit & allen Straßenkosten","tp.incl.yes.2":"Abholung & Rückbringung zum Hotel","tp.incl.yes.3":"Lokaler Guide EN / PL / DE / ES","tp.incl.yes.4":"Kates hausgemachte Lunchbox","tp.incl.yes.5":"Fotos von dir unterwegs","tp.incl.yes.6":"Flexibles Tempo & ein versteckter Stopp",
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
  "tp.faq.4.q":"Was bedeutet „ab 85.000 ISK“?","tp.faq.4.a":"Das ist ein Startpreis pro Gruppe, nicht pro Person — also gleich, ob einer oder vier mitfahren. Der Endpreis hängt von Saison, Abholort und Extras ab.",

  "tp.also.eyebrow":"Das könnte dir gefallen","tp.also.h2":"Weitere Wege, Island zu sehen.",
  "tp.avail.eyebrow":"Verfügbarkeit prüfen","tp.avail.h2":"Termine für den Golden Circle prüfen.","tp.avail.lead":"Sende eine kurze Anfrage mit deinen Daten und ich antworte persönlich, um alles zu bestätigen.",
},

/* =========================== ESPAÑOL =========================== */
es:{
  "doc.title":"Journey Iceland — tours privados y traslados al aeropuerto con un local",
  "nav.tours":"Tours","nav.why":"Por qué nosotros","nav.about":"Nosotros","nav.gallery":"Galería","nav.reviews":"Opiniones","nav.faq":"FAQ","nav.contact":"Contacto",
  "cta.check":"Comprobar disponibilidad","cta.wa":"Escríbeme por WhatsApp","cta.wa.short":"WhatsApp","cta.ask":"Pregúntame",
  "wa.generic":"¡Hola! Escribo desde tu web journeyiceland.is. Me gustaría preguntar por un tour privado o un traslado: ","wa.custom":"¡Hola! Escribo desde journeyiceland.is sobre una ruta personalizada. Mi pregunta: ","wa.aurora":"¡Hola! Escribo desde journeyiceland.is sobre el tour de auroras boreales. Mi pregunta: ","wa.gc":"¡Hola! Escribo desde journeyiceland.is sobre el tour del Círculo Dorado. Mi pregunta: ",
  "brand.tag":"Tours privados · Islandia",
  "menu":"Menú",

  "hero.eyebrow":"Conductor y guía privado · desde 2016",
  "hero.h1":"Discover Iceland the Old-fashioned way.",
  "hero.sub":"Islandia, como te la enseña un local. Tours privados y traslados al aeropuerto con un conductor local que te trata como a la familia: lugares escondidos, tu ritmo, consejos sinceros.",
  "hero.langline":"English · Polski · Deutsch · Español",
  "hero.scroll":"Desplázate",

  "trust.rating":"Valorado en Google","trust.insured":"Conductor experimentado y asegurado","trust.private":"Solo grupos privados","trust.langs":"English · Polski · Deutsch · Español","trust.pickup":"Recogida gratis en el hotel",

  "tours.eyebrow":"Tours y traslados","tours.h2":"¿A dónde te gustaría ir?","tours.lead":"Grupos privados pequeños, recogida en el hotel y una ruta a tu medida. Los precios de los tours son por grupo, no por persona.",
  "tours.toursLabel":"Tours de un día","tours.transfersLabel":"Traslados al aeropuerto y al spa",
  "tour.see":"Ver tour","tour.tbc":"","tour.perGroup":"por grupo",

  "tour.gc.name":"Círculo Dorado","tour.gc.dur":"6–8 h","tour.gc.price":"desde 85.000 ISK","tour.gc.alt":"≈ 570 € / 610 $ · por grupo",
  "tour.sc.name":"Costa Sur","tour.sc.dur":"8–10 h","tour.sc.price":"desde 110.000 ISK","tour.sc.alt":"≈ 730 € / 790 $ · por grupo",
  "tour.jk.name":"Laguna glaciar Jökulsárlón","tour.jk.dur":"12–14 h","tour.jk.price":"desde 179.000 ISK","tour.jk.alt":"≈ 1.190 € / 1.280 $ · por grupo",

  "transfer.kef.name":"Aeropuerto de Keflavík ⇄ Reikiavik","transfer.kef.meta":"≈ 50 min · hasta 4 pasajeros","transfer.kef.price":"desde 22.000 ISK",
  "transfer.bl.name":"Traslado a Blue Lagoon","transfer.bl.meta":"Aeropuerto o ciudad · entrada no incluida","transfer.bl.price":"desde 22.000 ISK",
  "transfer.check":"Comprobar disponibilidad",

  "tours.cta.h3":"Vamos a todas partes — ruta personalizada bajo petición.","tours.cta.p":"Volcanes, fuentes termales, una sesión de fotos de boda, una vuelta de varios días. Cuéntame la idea y construyo el día a su alrededor.",

  "aurora.tag":"Este otoño · reservas abiertas","aurora.eyebrow":"Auroras boreales","aurora.h2":"Tras las auroras boreales — este otoño.","aurora.p":"Desde septiembre los cielos vuelven a oscurecerse. Vigilo la previsión por ti, te alejo del resplandor de la ciudad y Kate prepara un termo de chocolate caliente. Las plazas son limitadas — pregunta para reservar con antelación. Desde 50.000 ISK por grupo (1–4) · 2–3 h.","aurora.cta1":"Pregúntame",
  "eclipse.tag":"12 de agosto de 2026 · plazas limitadas","eclipse.eyebrow":"Eclipse solar total","eclipse.h2":"El eclipse solar total — 12 de agosto de 2026.","eclipse.p":"El 12 de agosto de 2026 Islandia queda justo en la trayectoria de un eclipse solar total, y la península de Snæfellsnes es uno de los mejores lugares para ver cómo el cielo se oscurece. Puedo llevarte allí — un tour privado por la península con un sitio para observar el eclipse, o solo el traslado. Los hoteles ya se están llenando, así que pregunta pronto. Dime qué tienes en mente y lo planifico a tu medida.","eclipse.cta1":"Pregunta por el eclipse","wa.eclipse":"¡Hola! Me interesa el eclipse solar total del 12 de agosto de 2026 (Snæfellsnes). ¿Me cuentas más?",

  "why.eyebrow":"Por qué viajar con nosotros","why.h2":"No somos solo guías — somos una familia.","why.lead":"Vivimos aquí — criamos a nuestras hijas, trabajamos y pasamos nuestro tiempo libre aquí, y te enseñamos la Islandia que amamos.",
  "why.1.t":"No una agencia masiva","why.1.d":"Nunca te metemos prisa ni vamos tachando lugares de una lista. Hay espacio para ir despacio y sentir de verdad la atmósfera de Islandia.",
  "why.2.t":"Hospitalidad en la sangre","why.2.d":"Nos encanta la gente. Cuidamos el buen ambiente, los pequeños detalles y que te sientas a gusto y bien atendido.",
  "why.3.t":"Viajamos como nos gustaría a nosotros","why.3.d":"Paramos donde la vista te corta la respiración — y a veces tomamos el camino más largo, porque resulta ser el más bonito.",
  "why.4.t":"Recuerdos, no una lista","why.4.d":"Volverás a casa con algo más que fotos: con emociones, historias y la sensación de haber conocido la Islandia auténtica.",
  "compare.mine.title":"Privado conmigo","compare.mine.tag":"Tú","compare.bus.title":"Autobús grande","compare.bus.tag":"Ellos",
  "compare.mine.1":"Solo tu grupo — hasta 4 con comodidad","compare.mine.2":"Sales cuando estás listo, paras por capricho","compare.mine.3":"Rincones escondidos a los que el autobús no llega","compare.mine.4":"Aperitivos caseros de Kate","compare.mine.5":"Un guía que sabe tu nombre",
  "compare.bus.1":"Más de 40 desconocidos con horario fijo","compare.bus.2":"15 minutos por parada de fotos y a seguir","compare.bus.3":"Solo los lugares famosos y abarrotados","compare.bus.4":"Un sándwich de gasolinera","compare.bus.5":"Un micrófono y un recuento de cabezas",

  "about.eyebrow":"Nosotros","about.h2":"Hola, soy John.","about.lead":"Nuestra historia islandesa empezó hace años. Como muchos, empezamos de cero y, paso a paso, construimos una vida aquí — hasta que esta isla se convirtió en nuestro hogar. Aquí nacieron nuestras hijas gemelas y aquí empezó de verdad nuestra mayor aventura.","about.p1":"Desde que tengo memoria exploro Islandia — descubriendo caminos escondidos, persiguiendo miradores impresionantes y encontrando las historias que hacen único cada lugar. Mi pasión va mucho más allá de los sitios famosos; siempre busco los rincones tranquilos por los que la mayoría pasa de largo.","about.p2":"Como familia mantenemos viva esa aventura. Con nuestras hijas al lado caminamos, tomamos la ruta panorámica y a menudo salimos sin un plan estricto — parando junto a una cascada para un picnic, recogiendo hierbas silvestres y viendo cómo el tiempo cambia minuto a minuto. Mi mujer es Head Chef y le encanta recibir a la gente; cada año seguimos haciendo siropes y tinturas caseras, como hacían nuestras abuelas.","about.p3":"No vemos a nuestros huéspedes como turistas — los recibimos como amigos y te invitamos a descubrir Islandia como lo hacemos nosotros: con curiosidad, autenticidad y corazón. Descubre Islandia a la antigua usanza.","about.sign":"— Kate y John","about.badge.num":"600+","about.badge.t":"huéspedes felices desde 2016",

  "exp.eyebrow":"La experiencia","exp.h2":"Más que un trayecto — una experiencia.","exp.lead":"Los pequeños detalles que convierten un traslado en una historia que contarás al volver a casa.",
  "exp.1.t":"Set de bienvenida casero","exp.1.d":"Kate es chef. Cada tour empieza con una caja de bienvenida calentita — skyr, fruta fresca y algo horneado esa mañana.",
  "exp.2.t":"Lunchboxes caseras","exp.2.d":"Recién preparadas por Kate, nuestra Head Chef, e incluidas en cada tour — buenos ingredientes y la hospitalidad que daríamos en nuestra propia casa. Solo dinos al reservar si tienes alergias o necesidades dietéticas y nos adaptaremos.",
  "exp.3.t":"Ventajas en restaurantes","exp.3.d":"Nuestros huéspedes disfrutan de descuentos fijos (10–20%) en restaurantes seleccionados de Reikiavik — y por el camino te hago fotos, sin coste.",
  "exp.foot":"«Te diré con sinceridad si hoy no vale la pena ir.»",
  "exp.rest.h":"Descuentos en nuestros restaurantes asociados","exp.rest.note":"comida / cena",

  "gallery.eyebrow":"Galería","gallery.h2":"Momentos de la carretera.","gallery.lead":"Luz dorada, carreteras tranquilas, comida caliente y algún cielo verde. Desliza.",

  "reviews.eyebrow":"Opiniones","reviews.h2":"Llegaron como huéspedes, se fueron como amigos.","reviews.lead":"Unas palabras de viajeros recientes. Más en Google.",
  "rev.1.q":"Syl nos encontró una cascada sin nadie más alrededor. El mejor día de todo nuestro viaje por Islandia — y nunca nos sentimos apurados.","rev.1.name":"Sarah & Mike","rev.1.loc":"Austin, EE. UU.",
  "rev.2.q":"Profesional, cercano y en polaco. Nos sentimos cuidados desde el aeropuerto hasta la última parada.","rev.2.name":"Tomasz K.","rev.2.loc":"Varsovia, PL",
  "rev.3.q":"Sincero con el tiempo, flexible con el plan, y los aperitivos de Kate eran increíbles. Lo reservamos dos veces en una semana.","rev.3.name":"Emma L.","rev.3.loc":"Londres, UK",
  "rev.4.q":"Muy cercano y relajado. Syl conoce lugares que no salen en ninguna guía. ¡Totalmente recomendable!","rev.4.name":"Familia Berger","rev.4.loc":"Múnich, DE",
  "rev.5.q":"Nuestro vuelo se retrasó hasta medianoche y él seguía allí, sonriendo, con la calefacción puesta. Esa es toda la empresa en un solo momento.","rev.5.name":"Dana R.","rev.5.loc":"Toronto, CA",
  "rev.6.q":"Parábamos donde queríamos para hacer fotos. Prueba a hacer eso en un autobús de 50 plazas. Vale cada corona.","rev.6.name":"Priya & Sam","rev.6.loc":"Manchester, UK",

  "faq.eyebrow":"Bueno saberlo","faq.h2":"Preguntas, respondidas.",
  "faq.1.q":"¿Es seguro recorrer las carreteras de Islandia contigo?","faq.1.a":"Sí. Soy un conductor local experimentado y totalmente asegurado, con un 4×4 bien mantenido. Consulto a diario el tiempo y el estado de las carreteras, y cambio el plan encantado antes que arriesgar. Tu seguridad va siempre por delante de cualquier itinerario.",
  "faq.2.q":"¿Puedes garantizar que veremos las auroras boreales?","faq.2.a":"Sinceramente, nadie puede — la aurora depende de la oscuridad, el cielo despejado y la actividad solar. Lo que sí prometo es seguir la previsión, alejarte de las luces de la ciudad hacia la mejor opción y mantenerte caliente mientras esperamos. Si el cielo no acompaña, te lo diré claramente.",
  "faq.3.q":"¿Cómo funciona el pago si no puedo reservar online?","faq.3.a":"Es a propósito. Envías una solicitud de disponibilidad, confirmamos los detalles juntos en persona, y luego te envío un enlace de pago seguro o cobro con tarjeta el mismo día. No se cobra ningún depósito solo por preguntar por una fecha.",
  "faq.4.q":"¿Qué idiomas hablas?","faq.4.a":"Guío en inglés, polaco, alemán y español. Solo dime en cuál te sientes más cómodo y ese será el idioma del día.",
  "faq.5.q":"¿El tour es realmente privado?","faq.5.a":"Siempre. En el coche va únicamente tu grupo — nunca se comparte con desconocidos. El ritmo, las paradas y la música son tuyos.",
  "faq.6.q":"¿Recoges en mi hotel?","faq.6.a":"Sí — recogida gratuita en hotel, apartamento o camping en la zona de Reikiavik, y en el aeropuerto de Keflavík para los traslados. Confirmo la hora exacta cuando hablemos.",
  "faq.7.q":"¿Y si el día se estropea el tiempo?","faq.7.a":"Nos adaptamos. Reorganizo la ruta hacia paradas resguardadas e igual de bonitas, muevo el día si es realmente inseguro, o lo reprogramo sin problema. Nunca te empujaré a una tormenta por cumplir un horario.",
  "faq.8.q":"¿Puedo pagar con tarjeta mientras viajo por Islandia?","faq.8.a":"Sí — la tarjeta funciona casi en todas partes en Islandia, desde gasolineras hasta pequeñas cafeterías, así que apenas necesitarás efectivo. Para el tour en sí te envío un enlace de pago seguro o cobro con tarjeta el mismo día.",
  "faq.9.q":"¿Qué tiempo podemos esperar en Islandia?","faq.9.a":"Sinceramente — un poco de todo. El tiempo en Islandia puede cambiar en minutos, así que una mañana soleada puede pasar a lluvia y volver. Sigo la previsión de cerca, me visto por capas y adapto el día a las condiciones para que aun así aproveches lo mejor.",

  "contact.eyebrow":"Comprobar disponibilidad","contact.h2":"Planifiquemos tu día en Islandia.","contact.lead":"Envía una solicitud rápida y te responderé personalmente — normalmente en unas horas — para confirmar los detalles contigo.",
  "form.tour":"¿Qué tour o traslado?","form.tour.opt":"Elige una opción…","form.date":"Fecha preferida","form.people":"¿Cuántos sois?","form.name":"Tu nombre","form.email":"Correo","form.phone":"Teléfono / WhatsApp","form.phone.opt":"(opcional)","form.msg":"¿Algo más?","form.msg.opt":"(opcional)","form.msg.ph":"Horarios de vuelo, ideas, lugares imprescindibles…",
  "form.send":"Enviar solicitud","form.legal":"Esto es una solicitud de disponibilidad, no una reserva — confirmaré los detalles contigo personalmente.",
  "form.sent.title":"¡Gracias — solicitud enviada!","form.sent.body":"Te responderé personalmente, normalmente en unas horas, para confirmar los detalles.",
  "form.p.1":"1–4 personas","form.p.2":"5–8 personas",
  "opt.gc":"Círculo Dorado — tour privado","opt.sc":"Costa Sur — tour privado","opt.jk":"Laguna glaciar Jökulsárlón","opt.kef":"Traslado aeropuerto Keflavík","opt.bl":"Traslado a Blue Lagoon","opt.aurora":"Auroras boreales (otoño)","opt.custom":"Personalizado / aún no lo sé",

  "cm.wa.l":"WhatsApp","cm.wa.v":"+354 785 0558","cm.phone.l":"Llamada / SMS","cm.phone.v":"+354 785 0558","cm.mail.l":"Correo","cm.mail.v":"hello@journeyiceland.is","cm.hours.l":"Base","cm.hours.v":"Reikiavik · 7 días a la semana","map.label":"mapa — zona de recogida en Reikiavik","cm.pickup.area":"Recogida en el área de Reikiavik — Reykjavík · Kópavogur · Hafnarfjörður · Mosfellsbær. ¿Otra zona? Pregunta.",

  "pl.offer":"",

  "footer.tagline":"Tours privados y traslados al aeropuerto por toda Islandia — un conductor local que te trata como a la familia.","footer.explore":"Explora","footer.tours":"Tours","footer.contact":"Contacto","footer.disclaimer":"Journey Iceland es un servicio privado de conductor y guía. Las solicitudes de disponibilidad se confirman personalmente; este sitio no acepta reservas ni pagos online.","footer.privacy":"Privacidad","footer.terms":"Términos","footer.rights":"© 2026 Journey Iceland. Hecho con cariño en Reikiavik.",

  /* ---------------- PÁGINA DE TOUR: Círculo Dorado ---------------- */
  "tp.bc.tours":"Tours","tp.bc.cur":"Círculo Dorado",
  "tp.eyebrow":"Tour privado de un día · desde Reikiavik",
  "tp.h1":"Círculo Dorado — tour privado desde Reikiavik.","tp.sub":"Los tres iconos de Islandia — una cascada atronadora, un géiser en erupción y una grieta continental — a tu ritmo, sin multitudes y sin reloj.",
  "tp.qf.dur":"6–8 horas","tp.qf.price":"desde 85.000 ISK","tp.qf.priv":"Privado · máx. 4","tp.qf.pickup":"Recogida en el hotel","tp.qf.lang":"EN · PL · DE · ES",
  "tp.sn.overview":"Resumen","tp.sn.route":"Ruta","tp.sn.map":"Mapa","tp.sn.gallery":"Galería","tp.sn.reviews":"Opiniones","tp.sn.faq":"FAQ","tp.sn.avail":"Disponibilidad",

  "tp.hl.eyebrow":"En resumen","tp.hl.h2":"Cómo es el día.",
  "tp.hl.1":"Þingvellir — camina entre dos continentes","tp.hl.2":"El géiser Strokkur en erupción cada pocos minutos","tp.hl.3":"Gullfoss, la cascada dorada de dos niveles","tp.hl.4":"Una parada tranquila por la que los autobuses pasan de largo","tp.hl.5":"Cráter volcánico Kerið (según temporada)","tp.hl.6":"Recogida y regreso puerta a puerta","tp.hl.7":"La caja de bienvenida casera de Kate","tp.hl.8":"Tus fotos tomadas por el camino",

  "tp.ov.eyebrow":"Por qué este tour","tp.ov.h2":"El clásico — con calma.","tp.ov.p1":"El Círculo Dorado es la ruta que todos hacen, y por algo es: en una sola vuelta tienes un valle de fractura tectónica, el géiser más fiable de Islandia y una de sus cascadas más imponentes. La diferencia está en cómo lo vives.","tp.ov.p2":"Con un autobús grande tienes quince minutos y un recuento de cabezas. Conmigo, es solo tu grupo. Salimos cuando estás listo, nos demoramos donde es bonito y colamos una parada o dos que los autocares nunca ven — una iglesia de turba, un cráter tranquilo, una granja que hace helado con la leche de sus vacas.","tp.ov.p3":"Observo el tiempo y la luz del día y ordeno las paradas en función de ello, para que estés en los lugares más bonitos cuando mejor se ven.",

  "tp.rt.eyebrow":"La ruta","tp.rt.h2":"Parada a parada.",
  "tp.rt.1.t":"Recogida en el hotel","tp.rt.1.time":"a la hora que elijas","tp.rt.1.d":"Te recojo puerta a puerta en la zona de Reikiavik, a una hora que acordamos según tus planes. La lunchbox de Kate y bebidas calientes esperan en el coche.",
  "tp.rt.2.t":"Parque Nacional Þingvellir","tp.rt.2.time":"parada 1","tp.rt.2.d":"Camina por la grieta donde las placas norteamericana y euroasiática se separan — y donde Islandia fundó el parlamento más antiguo del mundo.",
  "tp.rt.3.t":"Geysir y Strokkur","tp.rt.3.time":"parada 2","tp.rt.3.d":"Strokkur lanza una columna de agua hirviendo de 20–30 m al aire cada pocos minutos. Esperamos la foto perfecta — sin prisas.",
  "tp.rt.4.t":"Cascada Gullfoss","tp.rt.4.time":"parada 3","tp.rt.4.d":"Las «cascadas doradas» caen en dos grandes escalones hacia un cañón. En un día soleado la espuma dibuja arcoíris sobre la garganta.",
  "tp.rt.5.t":"Una parada escondida","tp.rt.5.time":"parada 4","tp.rt.5.d":"Mi parte favorita: algún lugar fuera de la ruta principal — un cráter, una iglesia de turba o un café rural — elegido según el día y la luz.",
  "tp.rt.6.t":"De vuelta a tu hotel","tp.rt.6.time":"flexible","tp.rt.6.d":"Volvemos cuando te hayas saciado de paisajes — sin hora fija de regreso, el día se adapta a ti. ¿Quieres añadir cena o un baño en una fuente termal? Dilo y lo encajamos.",

  "tp.map.eyebrow":"La vuelta","tp.map.h2":"Unos 230 km, todo por buenas carreteras.","tp.map.label":"mapa — ruta del Círculo Dorado desde Reikiavik",

  "tp.incl.eyebrow":"Los detalles","tp.incl.h2":"Qué incluye.",
  "tp.incl.yes.t":"Incluido","tp.incl.no.t":"No incluido",
  "tp.incl.yes.1":"4×4 privado con combustible y peajes","tp.incl.yes.2":"Recogida y regreso al hotel","tp.incl.yes.3":"Guía local en inglés / polaco / alemán / español","tp.incl.yes.4":"La lunchbox casera de Kate","tp.incl.yes.5":"Fotos tuyas por el camino","tp.incl.yes.6":"Ritmo flexible y una parada escondida",
  "tp.incl.no.1":"Almuerzo en el café rural (opcional)","tp.incl.no.2":"Entrada a spa / piscina opcional","tp.incl.no.3":"Propinas (nunca se esperan)",

  "tp.bring.eyebrow":"Ven preparado","tp.bring.h2":"Qué llevar.",
  "tp.bring.1.t":"Capas","tp.bring.1.d":"El tiempo en Islandia cambia cada hora. Una capa intermedia caliente y una chaqueta cortavientos cubren casi cualquier día.",
  "tp.bring.2.t":"Calzado resistente","tp.bring.2.d":"Los caminos pueden estar mojados o helados. Lo ideal son zapatos o botas de montaña impermeables.",
  "tp.bring.3.t":"Una cámara","tp.bring.3.d":"Móvil o cámara — y con gusto os hago las fotos en pareja que nunca consigues en un autobús.",
  "tp.bring.4.t":"Bañador (opcional)","tp.bring.4.d":"Si te apetece una parada en una fuente termal a la vuelta, lleva bañador y toalla.",

  "tp.ft.eyebrow":"El toque familiar","tp.ft.h2":"Una parada con parrilla y vistas.","tp.ft.p":"En el Círculo Dorado me encanta parar donde la carretera se queda en silencio para encender la pequeña parrilla — perritos islandeses, chocolate caliente del termo de Kate y un horizonte solo para vosotros. Es el momento que la mayoría de los huéspedes recuerda mejor.",

  "tp.gal.eyebrow":"Galería","tp.gal.h2":"De esta ruta.",
  "tp.rev.eyebrow":"Opiniones","tp.rev.h2":"Lo que dicen los huéspedes de este tour.",
  "tp.faq.eyebrow":"FAQ Círculo Dorado","tp.faq.h2":"Preguntas sobre este tour.",
  "tp.faq.1.q":"¿Cuánto dura el tour del Círculo Dorado?","tp.faq.1.a":"Normalmente 6–8 horas puerta a puerta, según cuánto quieras demorarte y si añadimos una parada escondida o un baño termal. Es tu día — nunca miramos el horario de un autocar.",
  "tp.faq.2.q":"¿Cuántas personas pueden ir?","tp.faq.2.a":"Hasta 4 huéspedes viajan con comodidad en el coche. ¿Sois un grupo de 5–8? Escríbeme y organizo el vehículo adecuado.",
  "tp.faq.3.q":"¿Se puede hacer el Círculo Dorado en invierno?","tp.faq.3.a":"Sí — es precioso bajo la nieve, y los días más cortos hasta dan opción a ver auroras en el viaje de vuelta. Ajusto la ruta y los horarios a las condiciones y a la luz.",
  "tp.faq.4.q":"¿Qué significa «desde 85.000 ISK»?","tp.faq.4.a":"Es un precio de salida por grupo, no por persona — así que es lo mismo si viaja uno o cuatro. El precio final depende de la temporada, el punto de recogida y los extras.",

  "tp.also.eyebrow":"También te puede gustar","tp.also.h2":"Otras formas de ver Islandia.",
  "tp.avail.eyebrow":"Comprobar disponibilidad","tp.avail.h2":"Consulta fechas para el Círculo Dorado.","tp.avail.lead":"Envía una solicitud rápida con tus fechas y te responderé personalmente para confirmarlo todo.",
},
};

export type Lang = 'en' | 'pl' | 'de' | 'es';
export const LANGS: Lang[] = ['en', 'pl', 'de', 'es'];
export function isLang(x: string): x is Lang { return (LANGS as string[]).includes(x); }
export function getDict(lang: string) { return I18N[lang] || I18N.en; }
export function makeT(lang: string) {
  const d = getDict(lang);
  return (k: string) => (d[k] ?? I18N.en[k] ?? k);
}

