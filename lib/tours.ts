import { makeT } from './dictionary';
import { BOKUN_PRODUCT } from './bokun';

export type Stop = { time: string; t: string; d: string };
export type QA = { q: string; a: string };
export type GalleryItem = { src?: string; label?: string };
export type BringItem = { icon: string; t: string; d: string };

export type TourText = {
  bcCur: string; eyebrow: string; h1: string; sub: string; qfDur: string;
  highlights: string[]; ovH2: string; overview: string[];
  stops: Stop[]; mapH2?: string; mapLabel?: string;
  ftH2: string; ftP: string; faqEyebrow: string; faq: QA[]; availH2: string;
  // Optional per-tour overrides of the shared day-tour copy (tp.* keys); the evening Northern Lights tour needs its own.
  groupFact?: string; langFact?: string; hlH2?: string; rtH2?: string; galH2?: string; revH2?: string;
  incl?: { yes: string[]; no: string[] }; bring?: BringItem[];
};

type TourMeta = {
  priceKey: string; nameKey: string; waKey: string; preselect: string;
  heroImg: string; ftImg?: string; ftLabel?: string; route?: { lat: number; lng: number; label: string }[]; gallery: GalleryItem[];
  // Bókun experience id: when set, the availability section shows the Bókun booking calendar instead of the enquiry form.
  bokunProductId?: number;
  // Which shared guest reviews (rev.N) to show; defaults to 1, 3, 4 (day-tour reviews).
  reviews?: number[];
};

export const META: Record<string, TourMeta> = {
  'golden-circle': {
    priceKey: 'tour.gc.price', nameKey: 'tour.gc.name', waKey: 'wa.gc', preselect: 'gc',
    bokunProductId: BOKUN_PRODUCT.goldenCircle,
    heroImg: '/img/gc-hero.webp', ftImg: '/img/exp-lunchbox.webp',
    route: [{ lat: 64.1466, lng: -21.9426, label: 'Reykjavík' }, { lat: 64.2559, lng: -21.1295, label: 'Þingvellir' }, { lat: 64.3104, lng: -20.3024, label: 'Geysir & Strokkur' }, { lat: 64.3271, lng: -20.1199, label: 'Gullfoss' }, { lat: 64.0411, lng: -20.8857, label: 'Kerið' }, { lat: 64.1466, lng: -21.9426, label: 'Reykjavík' }],
    gallery: [{ src: '/img/tour-gc.webp' }, { src: '/img/gc-strokkur.webp' }, { src: '/img/g9.webp' }, { src: '/img/g5.webp' }, { src: '/img/g6.webp' }, { src: '/img/g3.webp' }],
  },
  'south-coast': {
    priceKey: 'tour.sc.price', nameKey: 'tour.sc.name', waKey: 'wa.generic', preselect: 'sc',
    bokunProductId: BOKUN_PRODUCT.southCoast,
    heroImg: '/img/tour-sc.webp', ftImg: '/img/exp-lunchbox.webp',
    route: [{ lat: 64.1466, lng: -21.9426, label: 'Reykjavík' }, { lat: 63.6156, lng: -19.9886, label: 'Seljalandsfoss' }, { lat: 63.5320, lng: -19.5113, label: 'Skógafoss' }, { lat: 63.5316, lng: -19.3690, label: 'Sólheimajökull' }, { lat: 63.4061, lng: -19.0448, label: 'Reynisfjara' }, { lat: 63.4186, lng: -19.0060, label: 'Vík í Mýrdal' }],
    gallery: [{ src: '/img/tour-sc.webp' }, { src: '/img/g6.webp' }, { src: '/img/g5.webp' }, { src: '/img/g1.webp' }, { src: '/img/g3.webp' }, { src: '/img/g7.webp' }],
  },
  'jokulsarlon': {
    priceKey: 'tour.jk.price', nameKey: 'tour.jk.name', waKey: 'wa.generic', preselect: 'jk',
    bokunProductId: BOKUN_PRODUCT.jokulsarlon,
    heroImg: '/img/tour-jk.webp', ftImg: '/img/exp-lunchbox.webp',
    route: [{ lat: 64.1466, lng: -21.9426, label: 'Reykjavík' }, { lat: 63.6156, lng: -19.9886, label: 'Seljalandsfoss' }, { lat: 63.5320, lng: -19.5113, label: 'Skógafoss' }, { lat: 63.4186, lng: -19.0060, label: 'Vík í Mýrdal' }, { lat: 64.0784, lng: -16.2306, label: 'Jökulsárlón' }, { lat: 64.0438, lng: -16.1790, label: 'Diamond Beach' }],
    gallery: [{ src: '/img/tour-jk.webp' }, { src: '/img/g6.webp' }, { src: '/img/g5.webp' }, { src: '/img/g1.webp' }, { src: '/img/g7.webp' }, { src: '/img/tour-sc.webp' }],
  },
  // No fixed route: the night's direction follows the aurora and cloud forecast, so there is no map.
  'northern-lights': {
    priceKey: 'tour.nl.price', nameKey: 'tour.nl.name', waKey: 'wa.aurora', preselect: 'aurora',
    bokunProductId: BOKUN_PRODUCT.northernLights,
    // rev.1 is about a waterfall day; these are about weather honesty, photo stops and a night-time pick-up.
    reviews: [3, 6, 5],
    heroImg: '/img/nl-hero.webp', ftImg: '/img/nl-thermos.webp',
    // nl-own*: the client's own photos from the Bókun product (1283216); nl-g* and nl-hero/thermos: Pexels (free licence).
    gallery: [{ src: '/img/nl-own3.webp' }, { src: '/img/nl-g1.webp' }, { src: '/img/nl-own1.webp' }, { src: '/img/nl-g2.webp' }, { src: '/img/nl-own2.webp' }, { src: '/img/nl-g3.webp' }],
  },
};

export const TOUR_CARDS = [
  { slug: 'golden-circle', nameKey: 'tour.gc.name', priceKey: 'tour.gc.price', img: '/img/tour-gc.webp' },
  { slug: 'south-coast', nameKey: 'tour.sc.name', priceKey: 'tour.sc.price', img: '/img/tour-sc.webp' },
  { slug: 'jokulsarlon', nameKey: 'tour.jk.name', priceKey: 'tour.jk.price', img: '/img/tour-jk.webp' },
  { slug: 'northern-lights', nameKey: 'tour.nl.name', priceKey: 'tour.nl.price', img: '/img/tour-nl.webp' },
];

/* Golden Circle FAQ — client-supplied questions, answered in Sylwek's voice. */
const GC_FAQ: Record<string, QA[]> = {
  en: [
    { q: 'Is the water at Geysir really hot?', a: 'Very — Strokkur fires boiling water 15–20 metres into the air every few minutes, and the whole area steams and bubbles. Stay behind the ropes and you feel the heat with none of the risk.' },
    { q: 'Will we see Icelandic horses or sheep along the way?', a: "Usually, yes — the route runs through farmland and the Icelandic horses (and sheep in summer) are often right by the road. If you'd like, we pull over for photos; the horses are famously friendly." },
    { q: 'Is there an entry fee for the sights?', a: 'The main stops — Þingvellir, Geysir and Gullfoss — are free; you only pay a small parking fee at Þingvellir, and Kerið crater has a tiny entrance fee. Everything else in the day is included in your price.' },
    { q: 'Is the Golden Circle really worth it?', a: "Honestly, yes — it's the classic for a reason, and doing it privately means no crowds and no rushing. I'll always tell you straight if conditions aren't great that day, but on a good one it's hard to beat." },
  ],
  pl: [
    { q: 'Czy woda w Geysir jest naprawdę gorąca?', a: 'Bardzo — Strokkur co kilka minut wyrzuca wrzącą wodę na 15–20 metrów, a cały teren paruje i bulgocze. Zostań za linami, a poczujesz żar bez żadnego ryzyka.' },
    { q: 'Czy zobaczymy po drodze islandzkie konie lub owce?', a: 'Zwykle tak — trasa biegnie przez tereny rolnicze i islandzkie konie (a latem owce) często stoją tuż przy drodze. Jak chcesz, zatrzymamy się na zdjęcia; konie słyną z przyjaznego usposobienia.' },
    { q: 'Czy wstęp do atrakcji jest płatny?', a: 'Główne przystanki — Þingvellir, Geysir i Gullfoss — są bezpłatne; płaci się tylko niewielką opłatę za parking przy Þingvellir, a krater Kerið ma symboliczny bilet wstępu. Reszta w ciągu dnia jest wliczona w cenę.' },
    { q: 'Czy złoty krąg naprawdę warto zwiedzić?', a: 'Szczerze — tak. To klasyk nie bez powodu, a prywatnie znaczy bez tłumów i bez pośpiechu. Zawsze powiem Ci wprost, jeśli danego dnia warunki są słabe, ale w dobry dzień trudno o coś lepszego.' },
  ],
  de: [
    { q: 'Ist das Wasser am Geysir wirklich heiß?', a: 'Sehr — Strokkur schießt alle paar Minuten kochendes Wasser 15–20 Meter in die Luft, und das ganze Gebiet dampft und brodelt. Bleib hinter den Seilen, dann spürst du die Hitze ganz ohne Risiko.' },
    { q: 'Sehen wir unterwegs isländische Pferde oder Schafe?', a: 'Meistens ja — die Route führt durch Weideland, und die Islandpferde (im Sommer auch Schafe) stehen oft direkt an der Straße. Wenn du magst, halten wir für Fotos an; die Pferde sind bekannt freundlich.' },
    { q: 'Kostet der Eintritt zu den Sehenswürdigkeiten?', a: 'Die Hauptstopps — Þingvellir, Geysir und Gullfoss — sind kostenlos; nur in Þingvellir zahlt man eine kleine Parkgebühr, und der Kratersee Kerið hat einen geringen Eintritt. Alles andere am Tag ist im Preis enthalten.' },
    { q: 'Lohnt sich der Golden Circle wirklich?', a: 'Ehrlich gesagt: ja. Er ist nicht ohne Grund der Klassiker, und privat heißt ohne Menschenmassen und ohne Hetze. Ich sage dir immer offen, wenn die Bedingungen an dem Tag schlecht sind — aber an einem guten Tag ist er kaum zu schlagen.' },
  ],
  es: [
    { q: '¿El agua de Geysir está realmente caliente?', a: 'Muchísimo — Strokkur lanza agua hirviendo a 15–20 metros cada pocos minutos, y toda la zona humea y burbujea. Quédate detrás de las cuerdas y sientes el calor sin ningún riesgo.' },
    { q: '¿Veremos caballos islandeses u ovejas por el camino?', a: 'Normalmente sí — la ruta cruza zonas de granjas y los caballos islandeses (y ovejas en verano) suelen estar junto a la carretera. Si quieres, paramos para hacer fotos; los caballos son famosos por ser amistosos.' },
    { q: '¿Hay que pagar entrada en los lugares?', a: 'Las paradas principales — Þingvellir, Geysir y Gullfoss — son gratuitas; solo se paga una pequeña tarifa de aparcamiento en Þingvellir, y el cráter Kerið tiene una entrada simbólica. Todo lo demás del día está incluido en tu precio.' },
    { q: '¿Merece la pena el Círculo Dorado?', a: 'Con sinceridad, sí — es el clásico por algo, y hacerlo en privado significa sin multitudes y sin prisas. Siempre te diré claramente si las condiciones no son buenas ese día, pero en uno bueno es difícil de superar.' },
  ],
};

/* ===== Golden Circle text comes from the main dictionary (tp.*) ===== */
function gcText(lang: string): TourText {
  const t = makeT(lang);
  return {
    bcCur: t('tp.bc.cur'), eyebrow: t('tp.eyebrow'), h1: t('tp.h1'), sub: t('tp.sub'), qfDur: t('tp.qf.dur'),
    highlights: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => t(`tp.hl.${n}`)),
    ovH2: t('tp.ov.h2'), overview: [t('tp.ov.p1'), t('tp.ov.p2'), t('tp.ov.p3')],
    stops: [1, 2, 3, 4, 5, 6].map((n) => ({ time: t(`tp.rt.${n}.time`), t: t(`tp.rt.${n}.t`), d: t(`tp.rt.${n}.d`) })),
    mapH2: t('tp.map.h2'), mapLabel: t('tp.map.label'),
    ftH2: t('tp.ft.h2'), ftP: t('tp.ft.p'),
    faqEyebrow: t('tp.faq.eyebrow'), faq: GC_FAQ[lang] || GC_FAQ.en,
    availH2: t('tp.avail.h2'),
  };
}

/* ===== South Coast, Jökulsárlón & Northern Lights text ===== */
const CONTENT: Record<string, Record<string, TourText>> = {
  'south-coast': {
    en: {
      bcCur: 'South Coast', eyebrow: 'Private day tour · from Reykjavík', h1: 'South Coast — private tour from Reykjavík.',
      sub: "Thundering waterfalls, a black-sand beach of basalt columns and a glacier tongue — Iceland's most loved coast, at your own pace.",
      qfDur: '8–10 hours',
      highlights: ['Seljalandsfoss — walk behind the falling water', 'Skógafoss — a 60 m wall of water and rainbows', 'The Sólheimajökull glacier tongue', 'Reynisfjara black beach & basalt columns', 'The seaside village of Vík', 'Door-to-door hotel pick-up', "Kate's home-cooked lunch box", 'Your photos taken along the way'],
      ovH2: "Iceland's most beloved coast.",
      overview: ["The south coast is the most stunning and most-visited stretch of Iceland — and for good reason. In a single day it serves up two of the country's mightiest waterfalls, a glacier you can walk up to, and a black-sand beach straight out of a dream.", "With me it's just your group. We leave when you're ready, linger where it's beautiful, and I read the day's weather and light so you're at each place when it looks its best."],
      stops: [
        { time: 'your chosen time', t: 'Hotel pick-up', d: "I collect you door-to-door in the Reykjavík area at a time that suits you; Kate's lunch box and hot drinks are waiting in the car." },
        { time: 'stop 1', t: 'Seljalandsfoss', d: 'A unique waterfall where you can walk along a path all the way behind the cascading water.' },
        { time: 'stop 2', t: 'Skógafoss', d: 'A massive, 60-metre-tall waterfall known for its deafening roar and the rainbows in its heavy mist.' },
        { time: 'stop 3', t: 'Sólheimajökull glacier', d: 'A glacier tongue reaching down from the Mýrdalsjökull ice cap — a close, dramatic look at Icelandic ice.' },
        { time: 'stop 4', t: 'Reynisfjara', d: 'World-famous black volcanic sand beach with magnificent basalt columns and the Reynisdrangar sea stacks just offshore.' },
        { time: 'stop 5', t: 'Vík í Mýrdal', d: 'A charming coastal village nestled beneath the cliffs — our turnaround point, then a relaxed drive home full of photos.' },
      ],
      mapH2: 'Roughly 190 km each way, all on good roads.', mapLabel: 'map — South Coast route from Reykjavík',
      ftH2: 'A picnic with the waves.', ftP: "On the south coast I love finding a quiet spot away from the crowds for Kate's lunch box — warm food, the sound of the surf and a black-sand horizon all to yourselves.",
      faqEyebrow: 'South Coast FAQ',
      faq: [
        { q: 'Can you really walk behind Seljalandsfoss?', a: "Yes — a path runs right behind the curtain of water, and it's as fun as it sounds. You'll catch a bit of spray, so a waterproof helps and I'll keep your camera dry. In hard frost the path can ice over and be closed for safety; if so, the view from the front is still gorgeous." },
        { q: 'Will we have somewhere to eat along the way?', a: "You won't go hungry — Kate's home-cooked lunch box and hot drinks travel with us, and I love picking a scenic spot to stop and eat. There are also cafés in Vík if you'd like a warm sit-down or something extra." },
        { q: 'Is the black beach really as dangerous as they say?', a: "Reynisfjara is breathtaking, but the 'sneaker waves' are genuinely dangerous — they rush in fast and far, much further than you'd expect. I'll show you exactly where it's safe to stand and watch the sea the whole time. Treated with respect, it's perfectly fine." },
        { q: 'What should I bring?', a: "Layers, a waterproof jacket and sturdy shoes that handle a little mud and spray — Icelandic weather changes fast. Bring your camera and leave the rest to me; there's a full packing list further up the page." },
      ],
      availH2: 'Check dates for the South Coast.',
    },
    pl: {
      bcCur: 'Południowe wybrzeże', eyebrow: 'Prywatna wycieczka jednodniowa · z Reykjavíku', h1: 'Południowe wybrzeże — prywatna wycieczka z Reykjavíku.',
      sub: 'Huczące wodospady, czarna plaża z bazaltowymi kolumnami i jęzor lodowca — najbardziej kochane wybrzeże Islandii, w Twoim tempie.',
      qfDur: '8–10 godzin',
      highlights: ['Seljalandsfoss — przejdź ścieżką za ścianą wody', 'Skógafoss — 60-metrowa ściana wody i tęcze', 'Jęzor lodowca Sólheimajökull', 'Czarna plaża Reynisfjara i kolumny bazaltowe', 'Nadmorska wioska Vík', 'Odbiór i odwóz pod hotel', 'Domowy lunchbox Kasi', 'Twoje zdjęcia robione po drodze'],
      ovH2: 'Najbardziej kochane wybrzeże Islandii.',
      overview: ['Południowe wybrzeże to najpiękniejszy i najczęściej odwiedzany odcinek Islandii — i nie bez powodu. W jeden dzień podaje dwa z najpotężniejszych wodospadów kraju, lodowiec, pod który można podejść, i czarną plażę jak ze snu.', 'Ze mną jedzie tylko Twoja grupa. Ruszamy, gdy jesteś gotowy, zostajemy tam, gdzie pięknie, a ja śledzę pogodę i światło, byś był w każdym miejscu, gdy wygląda najlepiej.'],
      stops: [
        { time: 'o wybranej porze', t: 'Odbiór z hotelu', d: 'Odbieram Cię pod drzwi w rejonie Reykjavíku o dogodnej dla Ciebie porze; lunchbox Kasi i ciepłe napoje czekają w aucie.' },
        { time: 'przystanek 1', t: 'Seljalandsfoss', d: 'Wyjątkowy wodospad, za którego kurtynę wody można przejść ścieżką.' },
        { time: 'przystanek 2', t: 'Skógafoss', d: 'Potężny, 60-metrowy wodospad znany z huku i tęcz w gęstej mgle wodnej.' },
        { time: 'przystanek 3', t: 'Lodowiec Sólheimajökull', d: 'Jęzor lodowca schodzący z czapy Mýrdalsjökull — islandzki lód z bliska.' },
        { time: 'przystanek 4', t: 'Reynisfjara', d: 'Słynna na świecie czarna plaża z bazaltowymi kolumnami i iglicami Reynisdrangar tuż przy brzegu.' },
        { time: 'przystanek 5', t: 'Vík í Mýrdal', d: 'Urokliwa nadmorska wioska u stóp klifów — nasz punkt zwrotny, a potem spokojny powrót pełen zdjęć.' },
      ],
      mapH2: 'Około 190 km w jedną stronę, dobrymi drogami.', mapLabel: 'mapa — trasa Południowego Wybrzeża z Reykjavíku',
      ftH2: 'Piknik przy szumie fal.', ftP: 'Na południowym wybrzeżu uwielbiam znaleźć ciche miejsce z dala od tłumów na lunchbox Kasi — ciepłe jedzenie, szum oceanu i czarno-piaskowy horyzont tylko dla Was.',
      faqEyebrow: 'FAQ Południowe wybrzeże',
      faq: [
        { q: 'Czy naprawdę można przejść za wodospadem Seljalandsfoss?', a: 'Tak — ścieżka prowadzi tuż za kurtyną wody i jest dokładnie tak fajnie, jak brzmi. Trochę zmoczy, więc przyda się kurtka przeciwdeszczowa, a ja przypilnuję Twojego aparatu. Przy dużym mrozie ścieżka potrafi zamarznąć i bywa zamknięta dla bezpieczeństwa; wtedy widok z przodu i tak jest przepiękny.' },
        { q: 'Czy będziemy mieli po drodze gdzie coś zjeść?', a: 'Nie będziesz głodny — domowy lunchbox Kasi i ciepłe napoje jadą z nami, a ja uwielbiam wybrać widokowe miejsce na postój i jedzenie. W Vík są też kawiarnie, jeśli wolisz usiąść w cieple albo dobrać coś ekstra.' },
        { q: 'Czy czarna plaża jest tak niebezpieczna, jak mówią?', a: 'Reynisfjara zapiera dech, ale tzw. fale-zabójcy są naprawdę groźne — wpadają szybko i daleko, dużo dalej, niż myślisz. Pokażę Ci dokładnie, gdzie można bezpiecznie stać, i przez cały czas obserwuję morze. Z szacunkiem do żywiołu jest zupełnie bezpiecznie.' },
        { q: 'Co zabrać ze sobą?', a: 'Ubrania na cebulkę, kurtkę przeciwdeszczową i solidne buty, którym niestraszne błoto i bryzgi — islandzka pogoda zmienia się błyskawicznie. Weź aparat, resztę zostaw mnie; pełna lista „co zabrać" jest wyżej na stronie.' },
      ],
      availH2: 'Sprawdź terminy dla Południowego wybrzeża.',
    },
    de: {
      bcCur: 'Südküste', eyebrow: 'Private Tagestour · ab Reykjavík', h1: 'Südküste — private Tour ab Reykjavík.',
      sub: 'Donnernde Wasserfälle, ein schwarzer Strand mit Basaltsäulen und eine Gletscherzunge — Islands beliebteste Küste, in deinem Tempo.',
      qfDur: '8–10 Stunden',
      highlights: ['Seljalandsfoss — hinter den Wasserfall laufen', 'Skógafoss — 60 m Wasser und Regenbögen', 'Gletscherzunge Sólheimajökull', 'Schwarzer Strand Reynisfjara & Basaltsäulen', 'Das Küstendorf Vík', 'Abholung & Rückbringung zum Hotel', 'Kates hausgemachte Lunchbox', 'Deine Fotos unterwegs'],
      ovH2: 'Islands beliebteste Küste.',
      overview: ['Die Südküste ist der schönste und meistbesuchte Abschnitt Islands — zu Recht. An einem Tag bekommst du zwei der mächtigsten Wasserfälle des Landes, einen Gletscher zum Anfassen und einen Strand wie aus einem Traum.', 'Bei mir fährt nur deine Gruppe. Wir starten, wenn du bereit bist, verweilen, wo es schön ist, und ich beobachte Wetter und Licht, damit du an jedem Ort bist, wenn er am besten aussieht.'],
      stops: [
        { time: 'zur Wunschzeit', t: 'Hotelabholung', d: 'Ich hole dich im Raum Reykjavík zu einer dir passenden Zeit bis vor die Tür ab; Kates Lunchbox und heiße Getränke warten im Auto.' },
        { time: 'Stopp 1', t: 'Seljalandsfoss', d: 'Ein besonderer Wasserfall, hinter dessen fallendes Wasser ein Pfad führt.' },
        { time: 'Stopp 2', t: 'Skógafoss', d: 'Ein gewaltiger 60-Meter-Wasserfall, bekannt für sein Donnern und die Regenbögen in der Gischt.' },
        { time: 'Stopp 3', t: 'Gletscher Sólheimajökull', d: 'Eine Gletscherzunge der Mýrdalsjökull-Eiskappe — isländisches Eis aus der Nähe.' },
        { time: 'Stopp 4', t: 'Reynisfjara', d: 'Weltberühmter schwarzer Strand mit prächtigen Basaltsäulen und den Reynisdrangar-Felsnadeln vor der Küste.' },
        { time: 'Stopp 5', t: 'Vík í Mýrdal', d: 'Ein charmantes Küstendorf unter den Klippen — unser Wendepunkt, dann eine entspannte Heimfahrt voller Fotos.' },
      ],
      mapH2: 'Rund 190 km pro Strecke, alles auf guten Straßen.', mapLabel: 'Karte — Südküsten-Route ab Reykjavík',
      ftH2: 'Ein Picknick am Meer.', ftP: 'An der Südküste suche ich gern einen ruhigen Ort abseits der Menge für Kates Lunchbox — warmes Essen, das Rauschen der Brandung und ein Horizont aus schwarzem Sand nur für euch.',
      faqEyebrow: 'Südküsten-FAQ',
      faq: [
        { q: 'Kann man wirklich hinter den Seljalandsfoss laufen?', a: 'Ja — ein Pfad führt direkt hinter den Wasservorhang, und es macht genauso viel Spaß, wie es klingt. Etwas Gischt bekommst du ab, eine Regenjacke hilft, und ich halte deine Kamera trocken. Bei strengem Frost kann der Pfad vereisen und aus Sicherheitsgründen gesperrt sein; dann ist der Blick von vorn trotzdem traumhaft.' },
        { q: 'Gibt es unterwegs etwas zu essen?', a: 'Hunger leidest du nicht — Kates hausgemachte Lunchbox und heiße Getränke sind dabei, und ich suche gern einen schönen Platz für eine Pause. In Vík gibt es außerdem Cafés, falls du dich aufwärmen oder etwas dazunehmen möchtest.' },
        { q: 'Ist der schwarze Strand wirklich so gefährlich, wie man sagt?', a: 'Reynisfjara ist atemberaubend, aber die Kammwellen sind wirklich gefährlich — sie kommen schnell und weit, viel weiter, als man denkt. Ich zeige dir genau, wo du sicher stehst, und behalte das Meer die ganze Zeit im Auge. Mit Respekt behandelt ist alles völlig sicher.' },
        { q: 'Was soll ich mitnehmen?', a: 'Zwiebellook, eine Regenjacke und festes Schuhwerk, das etwas Schlamm und Gischt verträgt — das isländische Wetter wechselt schnell. Nimm deine Kamera mit, den Rest überlass mir; eine komplette Packliste steht weiter oben auf der Seite.' },
      ],
      availH2: 'Termine für die Südküste prüfen.',
    },
    es: {
      bcCur: 'Costa Sur', eyebrow: 'Tour privado de un día · desde Reikiavik', h1: 'Costa Sur — tour privado desde Reikiavik.',
      sub: 'Cascadas atronadoras, una playa negra de columnas de basalto y una lengua glaciar — la costa más querida de Islandia, a tu ritmo.',
      qfDur: '8–10 horas',
      highlights: ['Seljalandsfoss — camina por detrás de la cascada', 'Skógafoss — 60 m de agua y arcoíris', 'Lengua glaciar Sólheimajökull', 'Playa negra de Reynisfjara y columnas de basalto', 'El pueblo costero de Vík', 'Recogida y regreso al hotel', 'La lunchbox casera de Kate', 'Tus fotos por el camino'],
      ovH2: 'La costa más querida de Islandia.',
      overview: ['La costa sur es el tramo más espectacular y visitado de Islandia, y con razón. En un solo día ofrece dos de las cascadas más imponentes del país, un glaciar al que puedes acercarte y una playa negra de ensueño.', 'Conmigo viaja solo tu grupo. Salimos cuando estás listo, nos demoramos donde es bonito, y yo observo el tiempo y la luz para que estés en cada lugar cuando mejor se ve.'],
      stops: [
        { time: 'a la hora que elijas', t: 'Recogida en el hotel', d: 'Te recojo puerta a puerta en la zona de Reikiavik a la hora que mejor te venga; la lunchbox de Kate y bebidas calientes esperan en el coche.' },
        { time: 'parada 1', t: 'Seljalandsfoss', d: 'Una cascada única por detrás de la cual se puede caminar por un sendero.' },
        { time: 'parada 2', t: 'Skógafoss', d: 'Una enorme cascada de 60 metros, famosa por su estruendo y los arcoíris en su rocío.' },
        { time: 'parada 3', t: 'Glaciar Sólheimajökull', d: 'Una lengua glaciar que baja del casquete Mýrdalsjökull — el hielo islandés de cerca.' },
        { time: 'parada 4', t: 'Reynisfjara', d: 'Playa negra mundialmente famosa con magníficas columnas de basalto y los farallones Reynisdrangar frente a la costa.' },
        { time: 'parada 5', t: 'Vík í Mýrdal', d: 'Un encantador pueblo costero al pie de los acantilados — nuestro punto de retorno, y luego una vuelta tranquila llena de fotos.' },
      ],
      mapH2: 'Unos 190 km por trayecto, todo por buenas carreteras.', mapLabel: 'mapa — ruta de la Costa Sur desde Reikiavik',
      ftH2: 'Un picnic junto al mar.', ftP: 'En la costa sur me encanta buscar un sitio tranquilo lejos de la multitud para la lunchbox de Kate — comida caliente, el sonido del oleaje y un horizonte de arena negra solo para vosotros.',
      faqEyebrow: 'FAQ Costa Sur',
      faq: [
        { q: '¿De verdad se puede caminar por detrás de Seljalandsfoss?', a: 'Sí — un sendero pasa justo por detrás de la cortina de agua, y es tan divertido como suena. Te salpicará un poco, así que un chubasquero ayuda, y yo mantengo tu cámara seca. Con heladas fuertes el sendero puede congelarse y cerrarse por seguridad; si pasa, la vista de frente sigue siendo preciosa.' },
        { q: '¿Tendremos dónde comer por el camino?', a: 'No pasarás hambre — la lunchbox casera de Kate y bebidas calientes viajan con nosotros, y me encanta elegir un sitio con vistas para parar a comer. También hay cafeterías en Vík si prefieres sentarte al calor o tomar algo más.' },
        { q: '¿Es la playa negra tan peligrosa como dicen?', a: 'Reynisfjara quita el aliento, pero las olas asesinas son realmente peligrosas — entran rápido y lejos, mucho más de lo que esperas. Te muestro exactamente dónde es seguro estar y vigilo el mar todo el tiempo. Tratada con respeto, es totalmente segura.' },
        { q: '¿Qué debo llevar?', a: 'Capas de ropa, un chubasquero y calzado resistente que aguante algo de barro y salpicaduras — el tiempo islandés cambia rápido. Trae tu cámara y deja el resto en mis manos; hay una lista completa de qué llevar más arriba en la página.' },
      ],
      availH2: 'Consulta fechas para la Costa Sur.',
    },
  },
  'jokulsarlon': {
    en: {
      bcCur: 'Jökulsárlón', eyebrow: 'Private day tour · from Reykjavík', h1: 'Jökulsárlón Glacier Lagoon — private tour from Reykjavík.',
      sub: "Iceland's grandest glacial lagoon, where icebergs drift to the sea and wash up like diamonds on a black beach — a big, unforgettable day.",
      qfDur: '12–14 hours',
      highlights: ['Seljalandsfoss & Skógafoss waterfalls', 'The black-sand coast & the village of Vík', "Jökulsárlón — Iceland's deepest glacial lagoon", 'Floating icebergs from the Vatnajökull glacier', 'Diamond Beach — ice on black sand', 'Door-to-door hotel pick-up', "Kate's home-cooked lunch box", 'Your photos taken along the way'],
      ovH2: "Iceland's grandest glacial lagoon.",
      overview: ["On the edge of Vatnajökull — Europe's largest glacier — Jökulsárlón is Iceland's largest and deepest glacial lake. Huge icebergs break off the glacier and drift slowly across the lagoon before floating out to sea. Just across the road, Diamond Beach scatters pieces of ice over black sand that shine like diamonds in the light.", "It's about 380 km from Reykjavík, so it's a long but unforgettable day. With me it's just your group, with stops at the south coast's best sights along the way — and a lunch box so you never go hungry."],
      stops: [
        { time: 'early start, time agreed', t: 'Hotel pick-up', d: "We agree an early pick-up for the long drive; Kate's lunch box and hot drinks are waiting in the car." },
        { time: 'stop 1', t: 'Seljalandsfoss', d: 'A unique waterfall you can walk all the way behind.' },
        { time: 'stop 2', t: 'Skógafoss', d: 'A massive 60-metre wall of water, thundering and full of rainbows.' },
        { time: 'stop 3', t: 'Vík í Mýrdal', d: 'A charming coastal village beneath the cliffs — a good place to pause for supplies.' },
        { time: 'stop 4', t: 'Jökulsárlón glacier lagoon', d: 'Huge icebergs drift across the deep lagoon toward the sea — Iceland at its most surreal.' },
        { time: 'stop 5', t: 'Diamond Beach', d: 'Ice washed up on black sand, sparkling in the light. (Ice on the beach is weather-dependent and not guaranteed.)' },
      ],
      mapH2: 'About 380 km each way — a long, scenic drive.', mapLabel: 'map — Jökulsárlón route from Reykjavík',
      ftH2: 'Hot chocolate by the icebergs.', ftP: "At the lagoon I love pouring hot chocolate from Kate's thermos while the icebergs drift past — a warm pause in one of the most surreal places in Iceland.",
      faqEyebrow: 'Jökulsárlón FAQ',
      faq: [
        { q: 'How long is the day?', a: "Usually 12–14 hours door to door — it's about a 5-hour drive each way, so we start early and return in the evening, full of photos." },
        { q: 'Will we see ice on Diamond Beach?', a: "Often, but not always — the ice on the beach depends on weather and currents, so sightings aren't guaranteed. The lagoon itself is spectacular year-round." },
        { q: 'Is it worth the long drive?', a: 'Most guests say it’s the highlight of their trip. With a private car, a lunch box and stops along the way, the journey is part of the experience.' },
      ],
      availH2: 'Check dates for Jökulsárlón.',
    },
    pl: {
      bcCur: 'Jökulsárlón', eyebrow: 'Prywatna wycieczka jednodniowa · z Reykjavíku', h1: 'Laguna lodowcowa Jökulsárlón — prywatna wycieczka z Reykjavíku.',
      sub: 'Najwspanialsza laguna lodowcowa Islandii, gdzie góry lodowe dryfują do morza i są wyrzucane jak diamenty na czarną plażę — wielki, niezapomniany dzień.',
      qfDur: '12–14 godzin',
      highlights: ['Wodospady Seljalandsfoss i Skógafoss', 'Czarne wybrzeże i wioska Vík', 'Jökulsárlón — najgłębsza laguna lodowcowa Islandii', 'Dryfujące góry lodowe z lodowca Vatnajökull', 'Diamond Beach — lód na czarnym piasku', 'Odbiór i odwóz pod hotel', 'Domowy lunchbox Kasi', 'Twoje zdjęcia po drodze'],
      ovH2: 'Najwspanialsza laguna lodowcowa Islandii.',
      overview: ['Na skraju Vatnajökull — największego lodowca Europy — Jökulsárlón to największe i najgłębsze jezioro lodowcowe Islandii. Ogromne góry lodowe odrywają się od lodowca i powoli dryfują przez lagunę, by wypłynąć w morze. Tuż po drugiej stronie drogi Diamond Beach rozsypuje kawałki lodu po czarnym piasku, które lśnią w słońcu jak diamenty.', 'Z Reykjavíku to ok. 380 km, więc to długi, ale niezapomniany dzień. Ze mną jedzie tylko Twoja grupa, z przystankami przy najlepszych miejscach południowego wybrzeża po drodze — i lunchbox, byś nigdy nie był głodny.'],
      stops: [
        { time: 'wczesny start, pora ustalana', t: 'Odbiór z hotelu', d: 'Ustalamy wczesny odbiór pod długą trasę; lunchbox Kasi i ciepłe napoje czekają w aucie.' },
        { time: 'przystanek 1', t: 'Seljalandsfoss', d: 'Wyjątkowy wodospad, za którego kurtynę wody można przejść.' },
        { time: 'przystanek 2', t: 'Skógafoss', d: 'Potężna, 60-metrowa ściana wody — huk i tęcze.' },
        { time: 'przystanek 3', t: 'Vík í Mýrdal', d: 'Urokliwa nadmorska wioska u stóp klifów — dobre miejsce na krótki postój.' },
        { time: 'przystanek 4', t: 'Laguna Jökulsárlón', d: 'Ogromne góry lodowe dryfują przez głęboką lagunę ku morzu — Islandia w najbardziej surrealistycznym wydaniu.' },
        { time: 'przystanek 5', t: 'Diamond Beach', d: 'Lód wyrzucony na czarny piasek, lśniący w słońcu. (Lód na plaży zależy od pogody i nie jest gwarantowany.)' },
      ],
      mapH2: 'Około 380 km w jedną stronę — długa, malownicza droga.', mapLabel: 'mapa — trasa do Jökulsárlón z Reykjavíku',
      ftH2: 'Gorąca czekolada przy górach lodowych.', ftP: 'Przy lagunie uwielbiam nalać gorącej czekolady z termosu Kasi, gdy obok dryfują góry lodowe — ciepła chwila w jednym z najbardziej surrealistycznych miejsc Islandii.',
      faqEyebrow: 'FAQ Jökulsárlón',
      faq: [
        { q: 'Ile trwa ten dzień?', a: 'Zwykle 12–14 godzin od drzwi do drzwi — to ok. 5 godzin jazdy w jedną stronę, więc startujemy wcześnie i wracamy wieczorem, pełni zdjęć.' },
        { q: 'Czy zobaczymy lód na Diamond Beach?', a: 'Często, ale nie zawsze — lód na plaży zależy od pogody i prądów, więc nie jest gwarantowany. Sama laguna jest spektakularna przez cały rok.' },
        { q: 'Czy warto jechać tak daleko?', a: 'Większość gości mówi, że to najlepszy punkt całej wyprawy. A z prywatnym autem, lunchboxem i przystankami po drodze sama podróż jest częścią przeżycia.' },
      ],
      availH2: 'Sprawdź terminy dla Jökulsárlón.',
    },
    de: {
      bcCur: 'Jökulsárlón', eyebrow: 'Private Tagestour · ab Reykjavík', h1: 'Gletscherlagune Jökulsárlón — private Tour ab Reykjavík.',
      sub: 'Islands großartigste Gletscherlagune, wo Eisberge zum Meer treiben und wie Diamanten an einem schwarzen Strand anlanden — ein großer, unvergesslicher Tag.',
      qfDur: '12–14 Stunden',
      highlights: ['Wasserfälle Seljalandsfoss & Skógafoss', 'Die schwarze Küste & das Dorf Vík', 'Jökulsárlón — Islands tiefste Gletscherlagune', 'Treibende Eisberge vom Vatnajökull-Gletscher', 'Diamond Beach — Eis auf schwarzem Sand', 'Abholung & Rückbringung zum Hotel', 'Kates hausgemachte Lunchbox', 'Deine Fotos unterwegs'],
      ovH2: 'Islands großartigste Gletscherlagune.',
      overview: ['Am Rand des Vatnajökull — Europas größtem Gletscher — ist Jökulsárlón Islands größter und tiefster Gletschersee. Riesige Eisberge brechen vom Gletscher ab und treiben langsam durch die Lagune, bevor sie aufs Meer hinausziehen. Direkt gegenüber verstreut der Diamond Beach Eisstücke über schwarzen Sand, die im Licht wie Diamanten funkeln.', 'Von Reykjavík sind es rund 380 km, also ein langer, aber unvergesslicher Tag. Bei mir fährt nur deine Gruppe, mit Stopps an den schönsten Orten der Südküste unterwegs — und einer Lunchbox, damit du nie hungrig wirst.'],
      stops: [
        { time: 'früh, Zeit abgestimmt', t: 'Hotelabholung', d: 'Wir stimmen eine frühe Abholung für die lange Fahrt ab; Kates Lunchbox und heiße Getränke warten im Auto.' },
        { time: 'Stopp 1', t: 'Seljalandsfoss', d: 'Ein besonderer Wasserfall, hinter den ein Pfad führt.' },
        { time: 'Stopp 2', t: 'Skógafoss', d: 'Eine gewaltige 60-Meter-Wand aus Wasser — donnernd und voller Regenbögen.' },
        { time: 'Stopp 3', t: 'Vík í Mýrdal', d: 'Ein charmantes Küstendorf unter den Klippen — ein guter Ort für eine kurze Pause.' },
        { time: 'Stopp 4', t: 'Gletscherlagune Jökulsárlón', d: 'Riesige Eisberge treiben durch die tiefe Lagune zum Meer — Island von seiner surrealsten Seite.' },
        { time: 'Stopp 5', t: 'Diamond Beach', d: 'Eis am schwarzen Sand, das im Licht funkelt. (Eis am Strand ist wetterabhängig und nicht garantiert.)' },
      ],
      mapH2: 'Rund 380 km pro Strecke — eine lange, malerische Fahrt.', mapLabel: 'Karte — Jökulsárlón-Route ab Reykjavík',
      ftH2: 'Heiße Schokolade bei den Eisbergen.', ftP: 'An der Lagune gieße ich gern heiße Schokolade aus Kates Thermoskanne, während die Eisberge vorbeitreiben — eine warme Pause an einem der surrealsten Orte Islands.',
      faqEyebrow: 'Jökulsárlón-FAQ',
      faq: [
        { q: 'Wie lang ist der Tag?', a: 'Meist 12–14 Stunden von Tür zu Tür — etwa 5 Stunden Fahrt pro Strecke, also starten wir früh und kehren abends zurück, voller Fotos.' },
        { q: 'Sehen wir Eis am Diamond Beach?', a: 'Oft, aber nicht immer — das Eis am Strand hängt von Wetter und Strömung ab und ist nicht garantiert. Die Lagune selbst ist ganzjährig spektakulär.' },
        { q: 'Lohnt sich die lange Fahrt?', a: 'Die meisten Gäste sagen, es sei der Höhepunkt ihrer Reise. Mit privatem Auto, Lunchbox und Stopps unterwegs ist die Fahrt Teil des Erlebnisses.' },
      ],
      availH2: 'Termine für Jökulsárlón prüfen.',
    },
    es: {
      bcCur: 'Jökulsárlón', eyebrow: 'Tour privado de un día · desde Reikiavik', h1: 'Laguna glaciar Jökulsárlón — tour privado desde Reikiavik.',
      sub: 'La laguna glaciar más grandiosa de Islandia, donde los icebergs derivan hacia el mar y aparecen como diamantes en una playa negra — un día grande e inolvidable.',
      qfDur: '12–14 horas',
      highlights: ['Cascadas Seljalandsfoss y Skógafoss', 'La costa negra y el pueblo de Vík', 'Jökulsárlón — la laguna glaciar más profunda de Islandia', 'Icebergs a la deriva del glaciar Vatnajökull', 'Diamond Beach — hielo sobre arena negra', 'Recogida y regreso al hotel', 'La lunchbox casera de Kate', 'Tus fotos por el camino'],
      ovH2: 'La laguna glaciar más grandiosa de Islandia.',
      overview: ['Al borde del Vatnajökull — el glaciar más grande de Europa — Jökulsárlón es el lago glaciar más grande y profundo de Islandia. Enormes icebergs se desprenden del glaciar y derivan lentamente por la laguna antes de salir al mar. Justo al otro lado de la carretera, Diamond Beach esparce trozos de hielo sobre arena negra que brillan como diamantes.', 'Está a unos 380 km de Reikiavik, así que es un día largo pero inolvidable. Conmigo viaja solo tu grupo, con paradas en los mejores lugares de la costa sur por el camino — y una lunchbox para que nunca pases hambre.'],
      stops: [
        { time: 'temprano, hora acordada', t: 'Recogida en el hotel', d: 'Acordamos una recogida temprana para el largo trayecto; la lunchbox de Kate y bebidas calientes esperan en el coche.' },
        { time: 'parada 1', t: 'Seljalandsfoss', d: 'Una cascada única por detrás de la cual se puede caminar.' },
        { time: 'parada 2', t: 'Skógafoss', d: 'Una enorme pared de agua de 60 metros — atronadora y llena de arcoíris.' },
        { time: 'parada 3', t: 'Vík í Mýrdal', d: 'Un encantador pueblo costero bajo los acantilados — buen sitio para una pausa.' },
        { time: 'parada 4', t: 'Laguna glaciar Jökulsárlón', d: 'Enormes icebergs derivan por la profunda laguna hacia el mar — Islandia en su versión más surrealista.' },
        { time: 'parada 5', t: 'Diamond Beach', d: 'Hielo sobre la arena negra, brillando con la luz. (El hielo en la playa depende del tiempo y no está garantizado.)' },
      ],
      mapH2: 'Unos 380 km por trayecto — un viaje largo y panorámico.', mapLabel: 'mapa — ruta a Jökulsárlón desde Reikiavik',
      ftH2: 'Chocolate caliente junto a los icebergs.', ftP: 'En la laguna me encanta servir chocolate caliente del termo de Kate mientras pasan los icebergs — una pausa cálida en uno de los lugares más surrealistas de Islandia.',
      faqEyebrow: 'FAQ Jökulsárlón',
      faq: [
        { q: '¿Cuánto dura el día?', a: 'Normalmente 12–14 horas puerta a puerta — unas 5 horas de viaje por trayecto, así que salimos temprano y volvemos por la tarde, llenos de fotos.' },
        { q: '¿Veremos hielo en Diamond Beach?', a: 'A menudo, pero no siempre — el hielo en la playa depende del tiempo y las corrientes, así que no está garantizado. La laguna en sí es espectacular todo el año.' },
        { q: '¿Merece la pena el largo viaje?', a: 'La mayoría de los huéspedes dice que es lo mejor de su viaje. Con coche privado, lunchbox y paradas por el camino, el trayecto es parte de la experiencia.' },
      ],
      availH2: 'Consulta fechas para Jökulsárlón.',
    },
  },
  'northern-lights': {
    en: {
      bcCur: 'Northern Lights', eyebrow: 'Private evening tour · from Reykjavík', h1: 'Northern Lights — private aurora hunt from Reykjavík.',
      sub: 'I watch the forecast, drive you away from the city glow and keep you warm while we wait — just your group under the Icelandic night sky.',
      qfDur: 'about 4 hours', groupFact: 'Private · 2–6', langFact: 'EN · PL', hlH2: 'What the night looks like.',
      highlights: ['Hotel pick-up in the Reykjavík area, start at 21:00', 'Just your group — 2 to 6 people', 'I follow the aurora and cloud forecasts for you', 'Away from the city glow to the clearest sky I can find', "Kate's thermos of hot chocolate", 'Time to watch and take photos at your own pace', 'A warm car to come back to between sightings', 'Back at your hotel after about 4 hours'],
      ovH2: 'Chasing the light, not a timetable.',
      overview: ['The northern lights need three things at once: darkness, a clear sky and some solar activity. From September the nights in Iceland are dark again — the rest is about reading the forecast and being in the right place when the sky opens up.', "With me it's just your group. I check the aurora and cloud forecasts before we set off, then drive away from Reykjavík's lights to wherever the sky looks clearest that night. We wait together, warm in the car with Kate's hot chocolate, and step out when the aurora starts to dance."],
      rtH2: 'How the night goes.',
      stops: [
        { time: 'from 21:00', t: 'Hotel pick-up', d: 'I collect you door-to-door in the Reykjavík area — your exact pick-up time comes with the booking confirmation. Dress warm; the rest is in the car.' },
        { time: 'on the way', t: 'Reading the sky', d: 'I check the latest aurora and cloud forecasts and choose the direction with the best chance of a clear sky that night.' },
        { time: 'out of town', t: 'Away from the city glow', d: 'We leave the lights of Reykjavík behind for a dark spot in the countryside, where even a faint aurora is easy to see.' },
        { time: 'under the sky', t: 'Watching & waiting', d: "The aurora comes and goes, so we take our time. Between sightings you warm up in the car with Kate's thermos of hot chocolate." },
        { time: 'about 4 h later', t: 'Back to your hotel', d: 'A relaxed drive back to your door — hopefully with a camera full of green sky.' },
      ],
      incl: {
        yes: ['Private car with fuel & all road costs', 'Hotel pick-up & drop-off (Reykjavík area)', 'Local English / Polish-speaking guide', 'Aurora & cloud forecast tracking', 'Parking & national park fees', "Kate's thermos of hot chocolate"],
        no: ['A guaranteed sighting — no one can promise the aurora', 'Dinner or other meals', 'Gratuities (never expected)'],
      },
      bring: [
        { icon: '#i-flame', t: 'Warm layers', d: 'Nights get cold fast when you stand still. A thermal base layer, a warm mid-layer and a windproof jacket.' },
        { icon: '#i-snow', t: 'Hat & gloves', d: 'The two things everyone wishes they had brought. A scarf or buff helps too.' },
        { icon: '#i-boot', t: 'Warm, sturdy boots', d: 'We may stand on frozen or uneven ground. Waterproof boots and thick socks are ideal.' },
        { icon: '#i-camera', t: 'A camera', d: 'Most recent phones have a night mode that catches the aurora well. Bring a charged spare battery — the cold drains it fast.' },
      ],
      ftH2: 'Hot chocolate under the aurora.', ftP: "Kate fills a thermos with hot chocolate for every aurora night. Waiting for the sky to light up is part of the experience — and it's much nicer with a warm cup in your hands.",
      galH2: 'Under the Icelandic aurora.', revH2: 'What guests say.',
      faqEyebrow: 'Northern Lights FAQ',
      faq: [
        { q: "Can you guarantee we'll see the Northern Lights?", a: "No one honestly can — the aurora depends on darkness, clear skies and solar activity. What I can promise is that I track the forecast, drive you away from city light to the best chance, and keep you warm while we wait. If the sky simply won't cooperate, I'll tell you straight." },
        { q: 'When is the season?', a: 'The aurora needs real darkness, so I run this tour from September to March. In the bright summer nights it simply cannot be seen.' },
        { q: 'Which night should I book?', a: "Message me before you book and I'll tell you honestly how the aurora and cloud forecasts look for your dates. Forecasts are most reliable a day or two ahead." },
        { q: 'How cold will it be?', a: "Colder than you'd think — standing still at night, even a mild day feels freezing. Dress in layers with a hat and gloves; the car stays warm and there's hot chocolate between sightings." },
        { q: 'Can I photograph the aurora with my phone?', a: "Usually yes — most recent phones have a night mode that does a good job. Hold the phone steady or rest it on something, and I'll gladly share the tips I know." },
      ],
      availH2: 'Pick your aurora night.',
    },
    pl: {
      bcCur: 'Zorza polarna', eyebrow: 'Prywatna wycieczka wieczorna · z Reykjavíku', h1: 'Zorza polarna — prywatne polowanie na zorzę z Reykjavíku.',
      sub: 'Śledzę prognozę, wywożę Cię poza łunę miasta i dbam, żeby było Ci ciepło podczas czekania — tylko Twoja grupa pod islandzkim nocnym niebem.',
      qfDur: 'ok. 4 godziny', groupFact: 'Prywatnie · 2–6', langFact: 'EN · PL', hlH2: 'Jak wygląda ta noc.',
      highlights: ['Odbiór z hotelu w rejonie Reykjavíku, start o 21:00', 'Tylko Twoja grupa — od 2 do 6 osób', 'Śledzę za Ciebie prognozę zorzy i zachmurzenia', 'Z dala od łuny miasta, pod najczystsze niebo, jakie znajdę', 'Termos gorącej czekolady od Kasi', 'Czas na oglądanie i zdjęcia w Twoim tempie', 'Ciepłe auto, do którego wracasz między pokazami', 'Powrót pod hotel po ok. 4 godzinach'],
      ovH2: 'Gonimy światło, nie rozkład jazdy.',
      overview: ['Zorza potrzebuje trzech rzeczy naraz: ciemności, czystego nieba i odrobiny aktywności słońca. Od września noce na Islandii znów są ciemne — reszta to czytanie prognozy i bycie we właściwym miejscu, gdy niebo się otworzy.', 'Ze mną jedzie tylko Twoja grupa. Przed wyjazdem sprawdzam prognozę zorzy i zachmurzenia, a potem wywożę Was z dala od świateł Reykjavíku tam, gdzie tej nocy niebo wygląda najczyściej. Czekamy razem, w ciepłym aucie z czekoladą od Kasi, i wychodzimy, gdy zorza zaczyna tańczyć.'],
      rtH2: 'Jak mija ta noc.',
      stops: [
        { time: 'od 21:00', t: 'Odbiór z hotelu', d: 'Odbieram Cię pod drzwi w rejonie Reykjavíku — dokładną godzinę odbioru dostaniesz w potwierdzeniu rezerwacji. Ubierz się ciepło, resztę mam w aucie.' },
        { time: 'w drodze', t: 'Czytanie nieba', d: 'Sprawdzam najnowszą prognozę zorzy i zachmurzenia i wybieram kierunek z największą szansą na czyste niebo tej nocy.' },
        { time: 'za miastem', t: 'Z dala od łuny miasta', d: 'Zostawiamy światła Reykjavíku za sobą i jedziemy w ciemne miejsce za miastem, gdzie nawet słaba zorza jest dobrze widoczna.' },
        { time: 'pod niebem', t: 'Oglądanie i czekanie', d: 'Zorza przychodzi i odchodzi, więc się nie spieszymy. Między pokazami rozgrzewasz się w aucie przy termosie gorącej czekolady od Kasi.' },
        { time: 'ok. 4 h później', t: 'Powrót pod hotel', d: 'Spokojny powrót pod drzwi — miejmy nadzieję z aparatem pełnym zielonego nieba.' },
      ],
      incl: {
        yes: ['Prywatne auto z paliwem i opłatami drogowymi', 'Odbiór i odwóz do hotelu (rejon Reykjavíku)', 'Lokalny przewodnik EN / PL', 'Śledzenie prognozy zorzy i zachmurzenia', 'Opłaty za parking i parki narodowe', 'Termos gorącej czekolady od Kasi'],
        no: ['Gwarancja zorzy — nikt nie może jej obiecać', 'Kolacja i inne posiłki', 'Napiwki (nigdy nieoczekiwane)'],
      },
      bring: [
        { icon: '#i-flame', t: 'Ciepłe warstwy', d: 'Gdy stoisz w miejscu, noc szybko robi się zimna. Bielizna termiczna, ciepła warstwa środkowa i kurtka przeciwwiatrowa.' },
        { icon: '#i-snow', t: 'Czapka i rękawiczki', d: 'Dwie rzeczy, których wszyscy żałują, że nie wzięli. Szalik albo komin też się przyda.' },
        { icon: '#i-boot', t: 'Ciepłe, solidne buty', d: 'Możemy stać na zamarzniętym lub nierównym terenie. Najlepsze będą wodoodporne buty i grube skarpety.' },
        { icon: '#i-camera', t: 'Aparat', d: 'Większość nowych telefonów ma tryb nocny, który dobrze łapie zorzę. Weź naładowaną zapasową baterię — mróz szybko ją wyczerpuje.' },
      ],
      ftH2: 'Gorąca czekolada pod zorzą.', ftP: 'Na każdą noc z zorzą Kasia napełnia termos gorącą czekoladą. Czekanie, aż niebo się rozświetli, to część przeżycia — a z ciepłym kubkiem w dłoniach jest o wiele przyjemniej.',
      galH2: 'Pod islandzką zorzą.', revH2: 'Co mówią goście.',
      faqEyebrow: 'FAQ — zorza polarna',
      faq: [
        { q: 'Czy gwarantujesz, że zobaczymy zorzę?', a: 'Uczciwie — nikt nie może. Zorza zależy od ciemności, czystego nieba i aktywności słońca. Mogę za to obiecać, że śledzę prognozę, wywożę Cię poza światła miasta tam, gdzie szanse są największe, i dbam o ciepło podczas czekania. A jeśli niebo nie da rady, powiem wprost.' },
        { q: 'Kiedy jest sezon?', a: 'Zorza potrzebuje prawdziwej ciemności, dlatego tę wycieczkę prowadzę od września do marca. W jasne letnie noce po prostu jej nie widać.' },
        { q: 'Którą noc zarezerwować?', a: 'Napisz do mnie przed rezerwacją, a powiem Ci szczerze, jak wygląda prognoza zorzy i zachmurzenia na Twoje terminy. Prognozy są najbardziej wiarygodne na dzień–dwa do przodu.' },
        { q: 'Jak zimno będzie?', a: 'Zimniej, niż myślisz — gdy stoisz nocą w miejscu, nawet łagodny dzień wydaje się mroźny. Ubierz się na cebulkę, weź czapkę i rękawiczki; w aucie jest ciepło, a między pokazami czeka gorąca czekolada.' },
        { q: 'Czy zrobię zdjęcie zorzy telefonem?', a: 'Zwykle tak — większość nowych telefonów ma tryb nocny, który świetnie sobie radzi. Trzymaj telefon nieruchomo albo oprzyj go o coś, a ja chętnie podzielę się sprawdzonymi trikami.' },
      ],
      availH2: 'Wybierz swoją noc z zorzą.',
    },
    de: {
      bcCur: 'Nordlichter', eyebrow: 'Private Abendtour · ab Reykjavík', h1: 'Nordlichter — private Polarlichtjagd ab Reykjavík.',
      sub: 'Ich beobachte die Vorhersage, fahre dich weg vom Stadtlicht und halte dich warm, während wir warten — nur deine Gruppe unter dem isländischen Nachthimmel.',
      qfDur: 'ca. 4 Stunden', groupFact: 'Privat · 2–6', langFact: 'EN · PL', hlH2: 'So sieht die Nacht aus.',
      highlights: ['Abholung am Hotel im Raum Reykjavík, Start um 21:00 Uhr', 'Nur deine Gruppe — 2 bis 6 Personen', 'Ich verfolge für dich die Polarlicht- und Wolkenvorhersage', 'Weg vom Stadtlicht, unter den klarsten Himmel, den ich finde', 'Kates Thermoskanne mit heißer Schokolade', 'Zeit zum Schauen und Fotografieren in deinem Tempo', 'Ein warmes Auto zwischen den Sichtungen', 'Nach etwa 4 Stunden zurück am Hotel'],
      ovH2: 'Wir jagen das Licht, keinen Fahrplan.',
      overview: ['Nordlichter brauchen drei Dinge zugleich: Dunkelheit, einen klaren Himmel und etwas Sonnenaktivität. Ab September sind die Nächte in Island wieder dunkel — der Rest heißt, die Vorhersage zu lesen und am richtigen Ort zu sein, wenn der Himmel aufreißt.', 'Bei mir ist nur deine Gruppe dabei. Vor der Abfahrt prüfe ich die Polarlicht- und Wolkenvorhersage und fahre dann weg von den Lichtern Reykjavíks, dorthin, wo der Himmel in dieser Nacht am klarsten aussieht. Wir warten gemeinsam im warmen Auto mit Kates heißer Schokolade und steigen aus, sobald das Nordlicht zu tanzen beginnt.'],
      rtH2: 'So verläuft die Nacht.',
      stops: [
        { time: 'ab 21:00 Uhr', t: 'Abholung am Hotel', d: 'Ich hole dich direkt an der Tür im Raum Reykjavík ab — die genaue Abholzeit steht in der Buchungsbestätigung. Zieh dich warm an; den Rest habe ich im Auto.' },
        { time: 'unterwegs', t: 'Den Himmel lesen', d: 'Ich prüfe die neueste Polarlicht- und Wolkenvorhersage und wähle die Richtung mit der besten Chance auf klaren Himmel in dieser Nacht.' },
        { time: 'außerhalb der Stadt', t: 'Weg vom Stadtlicht', d: 'Wir lassen die Lichter Reykjavíks hinter uns und fahren an einen dunklen Ort auf dem Land, wo selbst schwaches Nordlicht gut zu sehen ist.' },
        { time: 'unter dem Himmel', t: 'Schauen & warten', d: 'Das Nordlicht kommt und geht, also lassen wir uns Zeit. Zwischendurch wärmst du dich im Auto mit Kates heißer Schokolade auf.' },
        { time: 'ca. 4 Std. später', t: 'Zurück zum Hotel', d: 'Eine entspannte Fahrt zurück bis vor die Tür — hoffentlich mit einer Kamera voller grünem Himmel.' },
      ],
      incl: {
        yes: ['Privates Auto inkl. Benzin & aller Straßenkosten', 'Abholung & Rückfahrt zum Hotel (Raum Reykjavík)', 'Lokaler Guide auf Englisch / Polnisch', 'Polarlicht- & Wolkenvorhersage', 'Park- & Nationalparkgebühren', 'Kates Thermoskanne mit heißer Schokolade'],
        no: ['Eine Sichtungsgarantie — niemand kann Nordlichter versprechen', 'Abendessen oder andere Mahlzeiten', 'Trinkgeld (nie erwartet)'],
      },
      bring: [
        { icon: '#i-flame', t: 'Warme Schichten', d: 'Wer still steht, friert nachts schnell. Thermo-Unterwäsche, eine warme Zwischenschicht und eine winddichte Jacke.' },
        { icon: '#i-snow', t: 'Mütze & Handschuhe', d: 'Die zwei Dinge, die alle gern dabeigehabt hätten. Ein Schal oder Buff hilft auch.' },
        { icon: '#i-boot', t: 'Warme, feste Schuhe', d: 'Wir stehen eventuell auf gefrorenem oder unebenem Boden. Wasserdichte Stiefel und dicke Socken sind ideal.' },
        { icon: '#i-camera', t: 'Eine Kamera', d: 'Die meisten neueren Handys haben einen Nachtmodus, der Nordlichter gut einfängt. Nimm einen geladenen Ersatzakku mit — Kälte leert ihn schnell.' },
      ],
      ftH2: 'Heiße Schokolade unter dem Nordlicht.', ftP: 'Für jede Nordlichtnacht füllt Kate eine Thermoskanne mit heißer Schokolade. Das Warten, bis der Himmel aufleuchtet, gehört zum Erlebnis — und mit einem warmen Becher in der Hand ist es viel schöner.',
      galH2: 'Unter dem isländischen Nordlicht.', revH2: 'Was Gäste sagen.',
      faqEyebrow: 'Nordlichter — FAQ',
      faq: [
        { q: 'Kannst du garantieren, dass wir Nordlichter sehen?', a: 'Ehrlich gesagt kann das niemand — Nordlichter hängen von Dunkelheit, klarem Himmel und Sonnenaktivität ab. Versprechen kann ich, dass ich die Vorhersage verfolge, dich weg vom Stadtlicht zur besten Chance fahre und dich beim Warten warm halte. Spielt der Himmel einfach nicht mit, sage ich es dir offen.' },
        { q: 'Wann ist Saison?', a: 'Nordlichter brauchen echte Dunkelheit, deshalb biete ich diese Tour von September bis März an. In den hellen Sommernächten sind sie schlicht nicht zu sehen.' },
        { q: 'Welche Nacht soll ich buchen?', a: 'Schreib mir vor der Buchung, und ich sage dir ehrlich, wie die Polarlicht- und Wolkenvorhersage für deine Daten aussieht. Am zuverlässigsten sind Vorhersagen ein bis zwei Tage im Voraus.' },
        { q: 'Wie kalt wird es?', a: 'Kälter, als du denkst — nachts im Stehen fühlt sich selbst ein milder Tag eisig an. Zieh Schichten an, dazu Mütze und Handschuhe; das Auto bleibt warm und zwischendurch gibt es heiße Schokolade.' },
        { q: 'Kann ich Nordlichter mit dem Handy fotografieren?', a: 'Meistens ja — die meisten neueren Handys haben einen guten Nachtmodus. Halte das Handy ruhig oder lege es irgendwo auf, und ich teile gern meine Tipps.' },
      ],
      availH2: 'Wähle deine Nordlichtnacht.',
    },
    es: {
      bcCur: 'Auroras boreales', eyebrow: 'Tour nocturno privado · desde Reikiavik', h1: 'Auroras boreales — caza privada de auroras desde Reikiavik.',
      sub: 'Vigilo la previsión, te alejo del resplandor de la ciudad y te mantengo calentito mientras esperamos — solo tu grupo bajo el cielo nocturno de Islandia.',
      qfDur: 'unas 4 horas', groupFact: 'Privado · 2–6', langFact: 'EN · PL', hlH2: 'Así es la noche.',
      highlights: ['Recogida en tu hotel en la zona de Reikiavik, salida a las 21:00', 'Solo tu grupo — de 2 a 6 personas', 'Sigo por ti la previsión de auroras y de nubes', 'Lejos del resplandor de la ciudad, bajo el cielo más despejado que encuentre', 'El termo de chocolate caliente de Kate', 'Tiempo para mirar y hacer fotos a tu ritmo', 'Un coche calentito al que volver entre avistamientos', 'De vuelta en tu hotel tras unas 4 horas'],
      ovH2: 'Perseguimos la luz, no un horario.',
      overview: ['La aurora necesita tres cosas a la vez: oscuridad, cielo despejado y algo de actividad solar. Desde septiembre las noches en Islandia vuelven a ser oscuras — el resto consiste en leer la previsión y estar en el lugar adecuado cuando el cielo se abre.', 'Conmigo va solo tu grupo. Antes de salir reviso la previsión de auroras y de nubes, y luego nos alejamos de las luces de Reikiavik hacia donde el cielo se vea más despejado esa noche. Esperamos juntos, calentitos en el coche con el chocolate de Kate, y salimos cuando la aurora empieza a bailar.'],
      rtH2: 'Así transcurre la noche.',
      stops: [
        { time: 'desde las 21:00', t: 'Recogida en el hotel', d: 'Te recojo en la puerta en la zona de Reikiavik — la hora exacta de recogida llega con la confirmación de la reserva. Abrígate bien; el resto lo llevo en el coche.' },
        { time: 'en camino', t: 'Leer el cielo', d: 'Reviso la última previsión de auroras y de nubes y elijo la dirección con más posibilidades de cielo despejado esa noche.' },
        { time: 'fuera de la ciudad', t: 'Lejos del resplandor urbano', d: 'Dejamos atrás las luces de Reikiavik y vamos a un lugar oscuro en el campo, donde incluso una aurora débil se ve bien.' },
        { time: 'bajo el cielo', t: 'Mirar y esperar', d: 'La aurora va y viene, así que nos tomamos nuestro tiempo. Entre avistamientos te calientas en el coche con el termo de chocolate caliente de Kate.' },
        { time: 'unas 4 h después', t: 'Vuelta al hotel', d: 'Un regreso tranquilo hasta tu puerta — con suerte, con la cámara llena de cielo verde.' },
      ],
      incl: {
        yes: ['Coche privado con combustible y todos los gastos de carretera', 'Recogida y regreso al hotel (zona de Reikiavik)', 'Guía local en inglés / polaco', 'Seguimiento de la previsión de auroras y nubes', 'Aparcamiento y tasas de parques nacionales', 'El termo de chocolate caliente de Kate'],
        no: ['Un avistamiento garantizado — nadie puede prometer la aurora', 'Cena u otras comidas', 'Propinas (nunca esperadas)'],
      },
      bring: [
        { icon: '#i-flame', t: 'Capas de abrigo', d: 'De noche, quieto, se enfría uno rápido. Ropa térmica, una capa intermedia de abrigo y una chaqueta cortavientos.' },
        { icon: '#i-snow', t: 'Gorro y guantes', d: 'Las dos cosas que todo el mundo desearía haber traído. Una bufanda o braga de cuello también ayuda.' },
        { icon: '#i-boot', t: 'Calzado cálido y resistente', d: 'Puede que pisemos suelo helado o irregular. Botas impermeables y calcetines gruesos son ideales.' },
        { icon: '#i-camera', t: 'Una cámara', d: 'La mayoría de los móviles recientes tiene un modo noche que capta bien la aurora. Trae una batería de repuesto cargada — el frío la agota rápido.' },
      ],
      ftH2: 'Chocolate caliente bajo la aurora.', ftP: 'Para cada noche de auroras, Kate llena un termo de chocolate caliente. Esperar a que el cielo se ilumine forma parte de la experiencia — y con una taza caliente en las manos es mucho más agradable.',
      galH2: 'Bajo la aurora islandesa.', revH2: 'Lo que dicen nuestros huéspedes.',
      faqEyebrow: 'FAQ auroras boreales',
      faq: [
        { q: '¿Puedes garantizar que veremos la aurora boreal?', a: 'Sinceramente, nadie puede — la aurora depende de la oscuridad, el cielo despejado y la actividad solar. Lo que sí prometo es seguir la previsión, llevarte lejos de las luces de la ciudad a la mejor oportunidad y mantenerte calentito mientras esperamos. Si el cielo no colabora, te lo diré claramente.' },
        { q: '¿Cuándo es la temporada?', a: 'La aurora necesita oscuridad de verdad, así que hago este tour de septiembre a marzo. En las noches claras del verano simplemente no se ve.' },
        { q: '¿Qué noche debería reservar?', a: 'Escríbeme antes de reservar y te diré con sinceridad cómo pinta la previsión de auroras y nubes para tus fechas. Las previsiones son más fiables con uno o dos días de antelación.' },
        { q: '¿Cuánto frío hará?', a: 'Más del que crees — de noche y sin moverte, incluso un día suave se siente helado. Vístete por capas con gorro y guantes; el coche se mantiene caliente y hay chocolate caliente entre avistamientos.' },
        { q: '¿Puedo fotografiar la aurora con el móvil?', a: 'Normalmente sí — la mayoría de los móviles recientes tiene un buen modo noche. Mantén el móvil quieto o apóyalo en algo, y con gusto te paso los trucos que conozco.' },
      ],
      availH2: 'Elige tu noche de auroras.',
    },
  },
};

export function getTour(slug: string, lang: string): TourText & TourMeta {
  const meta = META[slug] || META['golden-circle'];
  let text: TourText;
  if (slug === 'golden-circle') {
    text = gcText(lang);
  } else {
    const byLang = CONTENT[slug];
    text = (byLang && (byLang[lang] || byLang.en)) as TourText;
  }
  return { ...text, ...meta };
}
