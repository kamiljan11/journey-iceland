import type { Metadata } from 'next';
import { langFromParams } from '@/lib/dictionary';
import { getTour } from '@/lib/tours';
import TourPage from '@/components/TourPage';

const SLUG = 'south-coast';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await langFromParams(params);
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

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await langFromParams(params);
  return <TourPage lang={lang} slug={SLUG} />;
}
