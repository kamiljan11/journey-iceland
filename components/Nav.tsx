import Link from 'next/link';
import LangSwitch from './LangSwitch';
import { SITE, IMG, waLink } from '@/lib/site';

type T = (k: string) => string;

export default function Nav({ lang, t }: { lang: string; t: T }) {
  const L = (hash: string) => `/${lang}${hash}`;
  const links: [string, string][] = [
    ['#tours', 'nav.tours'],
    ['#why', 'nav.why'],
    ['#about', 'nav.about'],
    ['#gallery', 'nav.gallery'],
    ['#reviews', 'nav.reviews'],
    ['#faq', 'nav.faq'],
    ['#contact', 'nav.contact'],
  ];

  return (
    <>
      <header className="nav" id="nav">
        <div className="nav-inner">
          <Link className="brand" href={`/${lang}`} aria-label="Journey Iceland — home">
            <img className="brand-badge" src={IMG.badge} alt="" width={40} height={40} />
            <span className="brand-name">Journey Iceland</span>
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {links.map(([h, k]) => (
              <Link key={k} href={L(h)}>{t(k)}</Link>
            ))}
          </nav>
          <div className="nav-right">
            <div className="nav-contact-icons">
              <a className="icon-btn" href={SITE.phoneHref} aria-label="Call"><svg><use href="#i-phone" /></svg></a>
              <a className="icon-btn" href={waLink(t('wa.generic'))} target="_blank" rel="noopener" aria-label="WhatsApp"><svg><use href="#i-whatsapp" /></svg></a>
              <a className="icon-btn" href={`mailto:${SITE.email}`} aria-label="Email"><svg><use href="#i-mail" /></svg></a>
            </div>
            <LangSwitch lang={lang} />
            <Link className="btn btn-primary btn-sm nav-cta" href={L('#contact')}>{t('cta.check')}</Link>
            <button className="burger" aria-label="Open menu"><svg><use href="#i-menu" /></svg></button>
          </div>
        </div>
      </header>

      <div className="drawer" id="drawer">
        <div className="drawer-scrim"></div>
        <div className="drawer-panel">
          <div className="drawer-top">
            <Link className="brand" href={`/${lang}`}>
              <img className="brand-badge" src={IMG.badge} alt="" width={40} height={40} />
              <span className="brand-name">Journey Iceland</span>
            </Link>
            <button className="icon-btn drawer-close" aria-label="Close menu"><svg><use href="#i-x" /></svg></button>
          </div>
          <nav className="drawer-links">
            {links.map(([h, k]) => (
              <Link key={k} href={L(h)}>{t(k)}</Link>
            ))}
          </nav>
          <div className="drawer-foot">
            <div className="drawer-contact">
              <a href={waLink(t('wa.generic'))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{SITE.phoneDisplay}</span></a>
              <a href={SITE.phoneHref}><svg><use href="#i-phone" /></svg><span>{SITE.phoneDisplay}</span></a>
              <a href={`mailto:${SITE.email}`}><svg><use href="#i-mail" /></svg><span>{SITE.email}</span></a>
            </div>
            <Link className="btn btn-primary btn-block" href={L('#contact')}>{t('cta.check')}</Link>
          </div>
        </div>
      </div>
    </>
  );
}
