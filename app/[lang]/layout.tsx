import type { Metadata } from 'next';
import '../globals.css';
import { LANGS, isLang, makeT } from '@/lib/dictionary';
import { SITE } from '@/lib/site';
import Sprite from '@/components/Sprite';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import Enhancements from '@/components/Enhancements';

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = isLang(params.lang) ? params.lang : 'en';
  const t = makeT(lang);
  const base = `https://${SITE.domain}`;
  return {
    metadataBase: new URL(base),
    title: t('doc.title'),
    description: t('hero.sub'),
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', pl: '/pl', de: '/de' },
    },
    openGraph: {
      title: t('doc.title'),
      description: t('hero.sub'),
      url: `${base}/${lang}`,
      siteName: 'Journey Iceland',
      images: [{ url: '/img/hero.webp', width: 1200, height: 630 }],
      locale: lang,
      type: 'website',
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = isLang(params.lang) ? params.lang : 'en';
  const t = makeT(lang);

  return (
    <html lang={lang}>
      <body data-lang={lang}>
        <Sprite />

        {/* Polish-only offer banner (CSS shows it only when data-lang="pl") */}
        <div className="pl-offer">{t('pl.offer')}</div>

        <Nav lang={lang} t={t} />

        {children}

        <Footer lang={lang} t={t} />

        {/* floating WhatsApp */}
        <a className="wa-float" href={SITE.waHref} target="_blank" rel="noopener" aria-label="WhatsApp">
          <span className="wa-pulse"></span>
          <svg><use href="#i-whatsapp" /></svg>
          <span className="wa-label">{t('cta.wa.short')}</span>
        </a>

        {/* lightbox */}
        <div className="lightbox">
          <button className="lb-close" aria-label="Close"><svg><use href="#i-x" /></svg></button>
          <button className="lb-nav lb-prev" aria-label="Previous"><svg><use href="#i-chevron-left" /></svg></button>
          <div className="lb-stage"></div>
          <button className="lb-nav lb-next" aria-label="Next"><svg><use href="#i-chevron-right" /></svg></button>
        </div>

        <Enhancements />
      </body>
    </html>
  );
}
