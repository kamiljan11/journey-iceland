import type { Metadata } from 'next';
import { isLang } from '@/lib/dictionary';
import { getTour } from '@/lib/tours';
import TourPage from '@/components/TourPage';

const SLUG = 'jokulsarlon';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? params.lang : 'en';
  const x = getTour(SLUG, lang);
  return {
    title: `${x.h1} | Journey Iceland`,
    description: x.sub,
    alternates: {
      canonical: `/${lang}/${SLUG}`,
      languages: { en: `/en/${SLUG}`, pl: `/pl/${SLUG}`, de: `/de/${SLUG}`, es: `/es/${SLUG}` },
    },
  };
}

export default function Page({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : 'en';
  return <TourPage lang={lang} slug={SLUG} />;
}
