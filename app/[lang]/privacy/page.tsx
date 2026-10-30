import type { Metadata } from 'next';
import { LANGS, langFromParams } from '@/lib/dictionary';
import { getLegal } from '@/lib/legal';
import LegalDocView from '@/components/LegalDoc';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await langFromParams(params);
  const doc = getLegal(lang).privacy;
  return { title: `${doc.title} — Journey Iceland`, alternates: { canonical: `/${lang}/privacy` } };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await langFromParams(params);
  return <LegalDocView doc={getLegal(lang).privacy} lang={lang} backLabel="Journey Iceland" />;
}
