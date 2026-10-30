import type { Metadata } from 'next';
import { LANGS, langFromParams } from '@/lib/dictionary';
import { getLegal } from '@/lib/legal';
import LegalDocView from '@/components/LegalDoc';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await langFromParams(params);
  const doc = getLegal(lang).terms;
  return { title: `${doc.title} — Journey Iceland`, alternates: { canonical: `/${lang}/terms` } };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await langFromParams(params);
  return <LegalDocView doc={getLegal(lang).terms} lang={lang} backLabel="Journey Iceland" />;
}
