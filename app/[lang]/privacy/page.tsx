import type { Metadata } from 'next';
import { LANGS, isLang } from '@/lib/dictionary';
import { getLegal } from '@/lib/legal';
import LegalDocView from '@/components/LegalDoc';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? params.lang : 'en';
  const doc = getLegal(lang).privacy;
  return { title: `${doc.title} — Journey Iceland`, alternates: { canonical: `/${lang}/privacy` } };
}

export default function PrivacyPage({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : 'en';
  return <LegalDocView doc={getLegal(lang).privacy} lang={lang} backLabel="Journey Iceland" />;
}
