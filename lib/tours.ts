import { makeT } from './dictionary';

export type Stop = { time: string; t: string; d: string };
export type QA = { q: string; a: string };
export type GalleryItem = { src?: string; label?: string };

export type TourText = {
  bcCur: string; eyebrow: string; h1: string; sub: string; qfDur: string;
  highlights: string[]; ovH2: string; overview: string[];
  stops: Stop[]; mapH2: string; mapLabel: string;
  ftH2: string; ftP: string; faqEyebrow: string; faq: QA[]; availH2: string;
};

type TourMeta = {
  priceKey: string; nameKey: string; waKey: string; preselect: string;
  heroImg: string; ftImg?: string; ftLabel?: string; gallery: GalleryItem[];
};

export const META: Record<string, TourMeta> = {
  'golden-circle': {
    priceKey: 'tour.gc.price', nameKey: 'tour.gc.name', waKey: 'wa.gc', preselect: 'gc',
    heroImg: '/img/gc-hero.webp', ftImg: '/img/exp-lunchbox.webp',
    gallery: [{ src: '/img/tour-gc.webp' }, { src: '/img/gc-strokkur.webp' }, { src: '/img/g9.webp' }, { src: '/img/g5.webp' }, { src: '/img/g6.webp' }, { src: '/img/g3.webp' }],
  },
  'south-coast': {
    priceKey: 'tour.sc.price', nameKey: 'tour.sc.name', waKey: 'wa.generic', preselect: 'sc',
    heroImg: '/img/tour-sc.webp', ftImg: '/img/exp-lunchbox.webp',
    gallery: [{ src: '/img/tour-sc.webp' }, { src: '/img/g6.webp' }, { src: '/img/g5.webp' }, { src: '/img/g1.webp' }, { src: '/img/g3.webp' }, { src: '/img/g7.webp' }],
  },
  'jokulsarlon': {
    priceKey: 'tour.jk.price', nameKey: 'tour.jk.name', waKey: 'wa.generic', preselect: 'jk',
    heroImg: '/img/tour-jk.webp', ftImg: '/img/exp-lunchbox.webp',
    gallery: [{ src: '/img/tour-jk.webp' }, { src: '/img/g6.webp' }, { src: '/img/g5.webp' }, { src: '/img/g1.webp' }, { src: '/img/g7.webp' }, { src: '/img/tour-sc.webp' }],
  },
};

export const TOUR_CARDS = [
  { slug: 'golden-circle', nameKey: 'tour.gc.name', priceKey: 'tour.gc.price', img: '/img/tour-gc.webp' },
  { slug: 'south-coast', nameKey: 'tour.sc.name', priceKey: 'tour.sc.price', img: '/img/tour-sc.webp' },
  { slug: 'jokulsarlon', nameKey: 'tour.jk.name', priceKey: 'tour.jk.price', img: '/img/tour-jk.webp' },
];

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
    faqEyebrow: t('tp.faq.eyebrow'), faq: [1, 2, 3, 4].map((n) => ({ q: t(`tp.faq.${n}.q`), a: t(`tp.faq.${n}.a`) })),
    availH2: t('tp.avail.h2'),
  };
}

/* ===== South Coast & Jökulsárlón text ===== */
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
        { time: 'around 8:00', t: 'Hotel pick-up', d: "I collect you door-to-door in the Reykjavík area; Kate's lunch box and hot drinks are waiting in the car." },
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
        { q: 'How long is the South Coast tour?', a: "Usually 8–10 hours door to door, depending on how long you linger. It's your day — no coach timetable." },
        { q: 'Can we do it in winter?', a: 'Yes — the waterfalls are stunning framed in ice and snow, and the shorter days even bring a chance of aurora on the way home. I adapt the route to conditions and daylight.' },
        { q: 'Is Reynisfjara safe?', a: "It's beautiful, but the 'sneaker waves' there are genuinely dangerous. I'll show you where it's safe to stand and keep a close eye on the sea — your safety comes first." },
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
        { time: 'ok. 8:00', t: 'Odbiór z hotelu', d: 'Odbieram Cię pod drzwi w rejonie Reykjavíku; lunchbox Kasi i ciepłe napoje czekają w aucie.' },
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
        { q: 'Ile trwa wycieczka na Południowe wybrzeże?', a: 'Zwykle 8–10 godzin od drzwi do drzwi, zależnie od tego, jak długo chcesz się zatrzymywać. To Twój dzień — bez rozkładu autokaru.' },
        { q: 'Czy da się zimą?', a: 'Tak — wodospady w lodzie i śniegu są przepiękne, a krótsze dni dają nawet szansę na zorzę w drodze powrotnej. Dopasowuję trasę do warunków i światła.' },
        { q: 'Czy Reynisfjara jest bezpieczna?', a: 'Jest piękna, ale tzw. fale-zabójcy są tam naprawdę groźne. Pokażę, gdzie można bezpiecznie stać, i pilnuję morza — bezpieczeństwo przede wszystkim.' },
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
        { time: 'gegen 8:00', t: 'Hotelabholung', d: 'Ich hole dich im Raum Reykjavík bis vor die Tür ab; Kates Lunchbox und heiße Getränke warten im Auto.' },
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
        { q: 'Wie lange dauert die Südküsten-Tour?', a: 'Meist 8–10 Stunden von Tür zu Tür, je nachdem, wie lange du verweilst. Es ist dein Tag — kein Busfahrplan.' },
        { q: 'Geht das auch im Winter?', a: 'Ja — die Wasserfälle in Eis und Schnee sind wunderschön, und die kurzen Tage bieten sogar die Chance auf Nordlichter auf der Heimfahrt. Ich passe die Route an Bedingungen und Licht an.' },
        { q: 'Ist Reynisfjara sicher?', a: 'Er ist schön, aber die sogenannten Kammwellen sind dort wirklich gefährlich. Ich zeige dir, wo du sicher stehst, und behalte das Meer im Auge — Sicherheit zuerst.' },
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
        { time: 'sobre las 8:00', t: 'Recogida en el hotel', d: 'Te recojo puerta a puerta en la zona de Reikiavik; la lunchbox de Kate y bebidas calientes esperan en el coche.' },
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
        { q: '¿Cuánto dura el tour de la Costa Sur?', a: 'Normalmente 8–10 horas puerta a puerta, según cuánto te demores. Es tu día — sin horario de autocar.' },
        { q: '¿Se puede en invierno?', a: 'Sí — las cascadas entre hielo y nieve son preciosas, y los días cortos hasta dan opción a auroras en la vuelta. Ajusto la ruta a las condiciones y la luz.' },
        { q: '¿Es segura Reynisfjara?', a: 'Es preciosa, pero las llamadas olas asesinas son realmente peligrosas. Te muestro dónde es seguro estar y vigilo el mar — la seguridad primero.' },
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
        { time: 'around 7:30', t: 'Hotel pick-up', d: "An early start for the long drive; Kate's lunch box and hot drinks are waiting in the car." },
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
        { time: 'ok. 7:30', t: 'Odbiór z hotelu', d: 'Wczesny start na długą trasę; lunchbox Kasi i ciepłe napoje czekają w aucie.' },
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
        { time: 'gegen 7:30', t: 'Hotelabholung', d: 'Ein früher Start für die lange Fahrt; Kates Lunchbox und heiße Getränke warten im Auto.' },
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
        { time: 'sobre las 7:30', t: 'Recogida en el hotel', d: 'Salida temprana para el largo trayecto; la lunchbox de Kate y bebidas calientes esperan en el coche.' },
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
