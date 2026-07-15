import Link from 'next/link';
import { SITE, IMG, waLink } from '@/lib/site';

type T = (k: string) => string;

export default function Footer({ lang, t }: { lang: string; t: T }) {
  const L = (h: string) => `/${lang}${h}`;
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Link className="brand" href={`/${lang}`} aria-label="Journey Iceland — home">
            <img src={IMG.logo} alt="Journey Iceland" style={{ height: 54, width: 'auto', maxWidth: '100%' }} />
          </Link>
          <p className="footer-about" style={{ marginTop: 10, fontStyle: 'italic', opacity: 0.92 }}>{SITE.slogan}</p>
          <p className="footer-about" style={{ marginTop: 8 }}>{t('footer.tagline')}</p>
          <p className="footer-about" style={{ marginTop: 8, opacity: 0.82, fontSize: '.82rem' }}>{SITE.address} · kt. {SITE.kennitala}</p>
          <div className="footer-social">
            <a href={SITE.facebook} aria-label="Facebook"><svg><use href="#i-facebook" /></svg></a>
            <a href={SITE.instagram} aria-label="Instagram"><svg><use href="#i-instagram" /></svg></a>
            <a href={SITE.google} aria-label="Google reviews"><svg><use href="#i-google" /></svg></a>
          </div>
        </div>
        <div className="footer-col">
          <h5>{t('footer.explore')}</h5>
          <ul>
            <li><Link href={L('#tours')}>{t('nav.tours')}</Link></li>
            <li><Link href={L('#why')}>{t('nav.why')}</Link></li>
            <li><Link href={L('#about')}>{t('nav.about')}</Link></li>
            <li><Link href={L('#gallery')}>{t('nav.gallery')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t('footer.tours')}</h5>
          <ul>
            <li><Link href={`/${lang}/golden-circle`}>{t('tour.gc.name')}</Link></li>
            <li><Link href={`/${lang}/south-coast`}>{t('tour.sc.name')}</Link></li>
            <li><Link href={`/${lang}/jokulsarlon`}>{t('tour.jk.name')}</Link></li>
            <li><Link href={L('#aurora')}>{t('aurora.eyebrow')}</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h5>{t('footer.contact')}</h5>
          <ul>
            <li><a href={waLink(t('wa.generic'))} target="_blank" rel="noopener">WhatsApp</a></li>
            <li><a href={SITE.phoneHref}>{SITE.phoneDisplay}</a></li>
            <li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>{t('footer.rights')}</span>
        <span style={{ maxWidth: '48ch' }}>{t('footer.disclaimer')}</span>
        <span className="legal-links"><Link href={`/${lang}/privacy`}>{t('footer.privacy')}</Link><Link href={`/${lang}/terms`}>{t('footer.terms')}</Link></span>
        <span className="footer-credit" style={{ opacity: 0.7, fontSize: '.8rem' }}>
          Built &amp; managed by{' '}
          <a href="https://reykjawwwik.is" target="_blank" rel="noopener" style={{ fontWeight: 600 }}>reykjawwwik.is</a>
        </span>
      </div>
      <div className="wrap footer-license">
        <img
          src={IMG.license}
          alt="Ferðamálastofa — Authorized Day Tour Provider, license 2026-078"
          title="Ferðamálastofa — Authorized Day Tour Provider (2026-078)"
          style={{ height: 72, width: 'auto' }}
        />
      </div>
    </footer>
  );
}
