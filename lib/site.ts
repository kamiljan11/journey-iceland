// Central contact constants.
export const SITE = {
  brand: 'Journey Iceland',
  domain: 'journeyiceland.is',
  email: 'hello@journeyiceland.is',
  phoneDisplay: '+354 785 0558',
  phoneHref: 'tel:+3547850558',
  wa: '3547850558',
  waHref: 'https://wa.me/3547850558',
  facebook: '#', // TODO: exact Facebook page URL ("Journey Iceland")
  instagram: 'https://instagram.com/journeyiceland1',
  google: '#', // TODO: Google Business profile URL ("Journey Iceland")
  company: 'Journey Iceland',
  kennitala: '170687-4349',
  address: 'Urðarholt 5, 270 Mosfellsbær, Iceland',
  slogan: 'Discover Iceland the Old-fashioned way',
};

// Build a WhatsApp link with an optional pre-filled (localized) message.
export function waLink(text?: string) {
  const base = `https://wa.me/${SITE.wa}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

// Optimised golden-hour photography (WebP). Gradient placeholders remain only
// where we still need real shots (food/grill/restaurant, true Golden Circle).
export const IMG = {
  hero: '/img/hero.webp',
  gc: '/img/tour-gc.webp',
  sc: '/img/tour-sc.webp',
  jk: '/img/tour-jk.webp',
  about: '/img/about.webp',
  aurora: '/img/aurora.webp',
  gcHero: '/img/gc-hero.webp',
  logo: '/img/logo.webp',
  badge: '/img/badge.webp',
  gallery: [
    '/img/tour-gc.webp', '/img/tour-sc.webp', '/img/tour-jk.webp',
    '/img/g1.webp', '/img/g2.webp', '/img/g3.webp', '/img/g4.webp',
    '/img/g5.webp', '/img/g6.webp', '/img/g7.webp', '/img/g8.webp',
    '/img/g-people.webp', '/img/g9.webp', '/img/g10.webp',
  ],
};

// Partner restaurants with guest discounts (two figures = lunch / dinner).
export const RESTAURANTS = [
  { name: 'Reykjavík Kitchen', url: 'https://reykjavikkitchen.is/', off: '20% / 10%' },
  { name: 'Old Iceland', url: 'https://www.oldiceland.is/', off: '15% / 10%' },
  { name: 'Biang', url: 'https://www.instagram.com/biang.reykjavik', off: '10%' },
  { name: 'Turf House', url: 'https://turf-house.is/', off: '10%' },
];
