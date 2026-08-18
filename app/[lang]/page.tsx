import Link from 'next/link';
import { isLang, makeT } from '@/lib/dictionary';
import { SITE, IMG, waLink, RESTAURANTS } from '@/lib/site';
import { getGoogleReviews } from '@/lib/reviews';
import AreaMap from '@/components/AreaMap';
import ReviewCard from '@/components/ReviewCard';

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = isLang(params.lang) ? params.lang : 'en';
  const t = makeT(lang);
  const L = (h: string) => `/${lang}${h}`;
  const google = await getGoogleReviews();

  return (
    <main>
      {/* HERO */}
      <section className="hero" id="top" data-screen-label="Hero">
        <div className="ph ph-wash has-photo">
          <img className="ph-img loaded" alt="Iceland in the golden hour" src={IMG.hero} />
        </div>
        <div className="hero-scrim"></div>
        <div className="hero-content">
          <span className="eyebrow hero-eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="h-display">{t('hero.h1')}</h1>
          <p className="hero-sub">{t('hero.sub')}</p>
          <p className="hero-langline">{t('hero.langline')}</p>
          <div className="hero-cta">
            <Link className="btn btn-primary btn-lg" href={L('#contact')}><span>{t('cta.check')}</span><svg><use href="#i-arrow-right" /></svg></Link>
            <a className="btn btn-outline btn-lg" href={waLink(t('wa.generic'))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{t('cta.wa')}</span></a>
          </div>
        </div>
        <a className="scroll-cue" href={L('#tours')}><span>{t('hero.scroll')}</span><svg><use href="#i-arrow-down" /></svg></a>
      </section>

      {/* TRUST BAR */}
      <section className="trust">
        <div className="wrap trust-inner">
          <div className="trust-item"><span className="stars">★★★★★</span><span><b>5.0</b> · <span>{t('trust.rating')}</span></span></div>
          <span className="trust-sep"></span>
          <div className="trust-item"><svg><use href="#i-shield" /></svg><span>{t('trust.insured')}</span></div>
          <span className="trust-sep"></span>
          <div className="trust-item"><svg><use href="#i-users" /></svg><span>{t('trust.private')}</span></div>
          <span className="trust-sep"></span>
          <div className="trust-item"><svg><use href="#i-bed" /></svg><span>{t('trust.pickup')}</span></div>
        </div>
      </section>

      {/* TOURS */}
      <section className="sec" id="tours" data-screen-label="Tours">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('tours.eyebrow')}</span>
            <h2>{t('tours.h2')}</h2>
            <p className="lead">{t('tours.lead')}</p>
          </div>

          <h3 className="subhead reveal">{t('tours.toursLabel')}</h3>
          <div className="grid-tours">
            {/* Golden Circle */}
            <article className="tour-card reveal">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Golden Circle, Iceland" src={IMG.gc} /></div>
              <div className="tour-card-scrim"></div>
              <div className="tour-card-body">
                <h3>{t('tour.gc.name')}</h3>
                <div className="tour-meta">
                  <span><svg><use href="#i-clock" /></svg><span>{t('tour.gc.dur')}</span></span>
                  <span><svg><use href="#i-users" /></svg><span>{t('tp.qf.priv')}</span></span>
                </div>
                <div className="tour-price"><span className="from">{t('tour.tbc')}</span><span className="amt">{t('tour.gc.price')}</span></div>
                <div className="tour-price"><span className="alt">{t('tour.gc.alt')}</span></div>
                <Link className="btn btn-primary btn-sm" href={`/${lang}/golden-circle`}><span>{t('tour.see')}</span><svg><use href="#i-arrow-right" /></svg></Link>
              </div>
              <Link className="tour-card-link" href={`/${lang}/golden-circle`} aria-label="See Golden Circle tour"></Link>
            </article>

            {/* South Coast */}
            <article className="tour-card reveal d1">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="South Coast" src={IMG.sc} /></div>
              <div className="tour-card-scrim"></div>
              <div className="tour-card-body">
                <h3>{t('tour.sc.name')}</h3>
                <div className="tour-meta">
                  <span><svg><use href="#i-clock" /></svg><span>{t('tour.sc.dur')}</span></span>
                  <span><svg><use href="#i-users" /></svg><span>{t('tp.qf.priv')}</span></span>
                </div>
                <div className="tour-price"><span className="from">{t('tour.tbc')}</span><span className="amt">{t('tour.sc.price')}</span></div>
                <div className="tour-price"><span className="alt">{t('tour.sc.alt')}</span></div>
                <Link className="btn btn-primary btn-sm" href={`/${lang}/south-coast`}><span>{t('tour.see')}</span><svg><use href="#i-arrow-right" /></svg></Link>
              </div>
              <Link className="tour-card-link" href={`/${lang}/south-coast`} aria-label="South Coast"></Link>
            </article>

            {/* Jökulsárlón */}
            <article className="tour-card reveal d2">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Jökulsárlón Glacier Lagoon" src={IMG.jk} /></div>
              <div className="tour-card-scrim"></div>
              <div className="tour-card-body">
                <h3>{t('tour.jk.name')}</h3>
                <div className="tour-meta">
                  <span><svg><use href="#i-clock" /></svg><span>{t('tour.jk.dur')}</span></span>
                  <span><svg><use href="#i-users" /></svg><span>{t('tp.qf.priv')}</span></span>
                </div>
                <div className="tour-price"><span className="from">{t('tour.tbc')}</span><span className="amt">{t('tour.jk.price')}</span></div>
                <div className="tour-price"><span className="alt">{t('tour.jk.alt')}</span></div>
                <Link className="btn btn-primary btn-sm" href={`/${lang}/jokulsarlon`}><span>{t('tour.see')}</span><svg><use href="#i-arrow-right" /></svg></Link>
              </div>
              <Link className="tour-card-link" href={`/${lang}/jokulsarlon`} aria-label="Jökulsárlón"></Link>
            </article>
          </div>

          <h3 className="subhead reveal">{t('tours.transfersLabel')}</h3>
          <div className="grid-transfers">
            <article className="transfer-card reveal">
              <div className="transfer-ic"><svg><use href="#i-van" /></svg></div>
              <div>
                <h4>{t('transfer.kef.name')}</h4>
                <div className="transfer-meta"><span>{t('transfer.kef.meta')}</span><b>{t('transfer.kef.price')}</b></div>
              </div>
              <Link className="btn btn-outline btn-sm" href={L('#contact')}>{t('transfer.check')}</Link>
            </article>
            <article className="transfer-card reveal d1">
              <div className="transfer-ic"><svg><use href="#i-waves" /></svg></div>
              <div>
                <h4>{t('transfer.bl.name')}</h4>
                <div className="transfer-meta"><span>{t('transfer.bl.meta')}</span><b>{t('transfer.bl.price')}</b></div>
              </div>
              <Link className="btn btn-outline btn-sm" href={L('#contact')}>{t('transfer.check')}</Link>
            </article>
          </div>

          <div className="tours-cta reveal">
            <div>
              <h3>{t('tours.cta.h3')}</h3>
              <p>{t('tours.cta.p')}</p>
            </div>
            <a className="btn btn-wa btn-lg" href={waLink(t('wa.custom'))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{t('cta.wa')}</span></a>
          </div>
        </div>
      </section>

      {/* AURORA TEASER */}
      <section className="aurora-band" id="aurora" data-screen-label="Northern Lights">
        <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Northern lights over Iceland" src={IMG.aurora} /></div>
        <div className="aurora-scrim"></div>
        <div className="wrap aurora-content">
          <span className="aurora-tag"><svg width="14" height="14"><use href="#i-leaf" /></svg><span>{t('aurora.tag')}</span></span>
          <div className="reveal">
            <span className="eyebrow">{t('aurora.eyebrow')}</span>
            <h2>{t('aurora.h2')}</h2>
            <p>{t('aurora.p')}</p>
            <div className="aurora-cta">
              <a className="btn btn-primary btn-lg" href={waLink(t('wa.aurora'))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{t('aurora.cta1')}</span></a>
              <Link className="btn btn-outline btn-lg" href={L('#contact')}><span>{t('cta.check')}</span><svg><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ECLIPSE TEASER — ukryte 2026-08-18 (wydarzenie 12.08.2026 minelo, nieaktualne).
          Tresc zostaje w dictionary.ts (klucze eclipse i wa.eclipse) — odkomentowac by przywrocic. */}
      {/*
      <section className="aurora-band" id="eclipse" data-screen-label="Eclipse">
        <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Snæfellsnes peninsula, Iceland" src="/img/g10.webp" /></div>
        <div className="aurora-scrim"></div>
        <div className="wrap aurora-content">
          <span className="aurora-tag"><svg width="14" height="14"><use href="#i-leaf" /></svg><span>{t('eclipse.tag')}</span></span>
          <div className="reveal">
            <span className="eyebrow">{t('eclipse.eyebrow')}</span>
            <h2>{t('eclipse.h2')}</h2>
            <p>{t('eclipse.p')}</p>
            <div className="aurora-cta">
              <a className="btn btn-primary btn-lg" href={waLink(t('wa.eclipse'))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{t('eclipse.cta1')}</span></a>
              <Link className="btn btn-outline btn-lg" href={L('#contact')}><span>{t('cta.check')}</span><svg><use href="#i-arrow-right" /></svg></Link>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* WHY ME */}
      <section className="sec" id="why" data-screen-label="Why me">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('why.eyebrow')}</span>
            <h2>{t('why.h2')}</h2>
            <p className="lead">{t('why.lead')}</p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal"><div className="why-ic"><svg><use href="#i-users" /></svg></div><h3>{t('why.1.t')}</h3><p>{t('why.1.d')}</p></div>
            <div className="why-card reveal d1"><div className="why-ic"><svg><use href="#i-heart" /></svg></div><h3>{t('why.2.t')}</h3><p>{t('why.2.d')}</p></div>
            <div className="why-card reveal d2"><div className="why-ic"><svg><use href="#i-route" /></svg></div><h3>{t('why.3.t')}</h3><p>{t('why.3.d')}</p></div>
            <div className="why-card reveal d3"><div className="why-ic"><svg><use href="#i-camera" /></svg></div><h3>{t('why.4.t')}</h3><p>{t('why.4.d')}</p></div>
          </div>
          <div className="compare">
            <div className="compare-col compare-mine reveal">
              <h4><span>{t('compare.mine.title')}</span><span className="tag">{t('compare.mine.tag')}</span></h4>
              <ul>
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n}><svg><use href="#i-check" /></svg><span>{t(`compare.mine.${n}`)}</span></li>
                ))}
              </ul>
            </div>
            <div className="compare-col compare-bus reveal d1">
              <h4><span>{t('compare.bus.title')}</span><span className="tag">{t('compare.bus.tag')}</span></h4>
              <ul>
                {[1, 2, 3, 4, 5].map((n) => (
                  <li key={n}><svg><use href="#i-x-circle" /></svg><span>{t(`compare.bus.${n}`)}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="sec bg-cream2" id="about" data-screen-label="About">
        <div className="wrap about-grid">
          <div className="about-media reveal">
            <div className="about-photo">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Sylwiusz & Kate, your local hosts" src={IMG.about} /></div>
            </div>
            <div className="about-badge">
              <div className="num">{t('about.badge.num')}</div>
              <p>{t('about.badge.t')}</p>
            </div>
          </div>
          <div className="about-body reveal d1">
            <span className="eyebrow">{t('about.eyebrow')}</span>
            <h2>{t('about.h2')}</h2>
            <p className="lead">{t('about.lead')}</p>
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p className="signature">{t('about.sign')}</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="sec" id="experience" data-screen-label="Experience">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('exp.eyebrow')}</span>
            <h2>{t('exp.h2')}</h2>
            <p className="lead">{t('exp.lead')}</p>
          </div>
          <div className="exp-grid">
            <article className="exp-card reveal">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Home-cooked welcome set" src="/img/exp-welcome.webp" /></div>
              <div className="exp-body"><div className="why-ic"><svg><use href="#i-gift" /></svg></div><h3>{t('exp.1.t')}</h3><p>{t('exp.1.d')}</p></div>
            </article>
            <article className="exp-card reveal d1">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Lunchbox for the road" src="/img/exp-lunchbox.webp" /></div>
              <div className="exp-body"><div className="why-ic"><svg><use href="#i-cup" /></svg></div><h3>{t('exp.2.t')}</h3><p>{t('exp.2.d')}</p></div>
            </article>
            <article className="exp-card reveal d2">
              <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="Restaurant interior" src="/img/exp-restaurant.webp" /></div>
              <div className="exp-body"><div className="why-ic"><svg><use href="#i-camera" /></svg></div><h3>{t('exp.3.t')}</h3><p>{t('exp.3.d')}</p></div>
            </article>
          </div>
          <p className="exp-foot reveal">{t('exp.foot')}</p>
          <div className="reveal" style={{ textAlign: 'center', marginTop: '8px', fontSize: '.92rem', color: 'var(--muted)' }}>
            <span style={{ fontWeight: 600, color: 'var(--espresso)' }}>{t('exp.rest.h')}:</span>{' '}
            {RESTAURANTS.map((r, i) => (
              <span key={r.name}>
                {i > 0 ? ' · ' : ''}
                <a href={r.url} target="_blank" rel="noopener" style={{ color: 'var(--terracotta)', fontWeight: 600 }}>{r.name}</a>{' '}
                <span style={{ opacity: 0.75 }}>({r.off})</span>
              </span>
            ))}
            <span style={{ display: 'block', fontSize: '.8rem', opacity: 0.7, marginTop: '4px' }}>{t('exp.rest.note')}</span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="sec bg-dark" id="gallery" data-screen-label="Gallery">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('gallery.eyebrow')}</span>
            <h2>{t('gallery.h2')}</h2>
            <p className="lead" style={{ color: '#bdae9d' }}>{t('gallery.lead')}</p>
          </div>
          <div className="gallery">
            {IMG.gallery.map((src, i) => (
              <div className="g-item" key={i}>
                <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="" src={src} /></div>
                <span className="g-zoom"><svg><use href="#i-search-plus" /></svg></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec" id="reviews" data-screen-label="Reviews">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('reviews.eyebrow')}</span>
            <h2>{t('reviews.h2')}</h2>
            <p className="lead">{t('reviews.lead')}</p>
          </div>
          <div className="reviews-grid">
            {google?.reviews?.length ? (
              google.reviews.map((r, i) => (
                <ReviewCard
                  key={i}
                  author={r.author}
                  rating={r.rating}
                  text={r.text}
                  relativeTime={r.relativeTime}
                  delay={['', 'd1', 'd2'][i % 3]}
                  moreLabel={t('reviews.more')}
                  lessLabel={t('reviews.less')}
                />
              ))
            ) : (
              [
                { n: 1, av: 'S', flag: '🇺🇸', d: '' },
                { n: 2, av: 'T', flag: '🇵🇱', d: 'd1' },
                { n: 3, av: 'E', flag: '🇬🇧', d: 'd2' },
                { n: 4, av: 'B', flag: '🇩🇪', d: '' },
                { n: 5, av: 'D', flag: '🇨🇦', d: 'd1' },
                { n: 6, av: 'P', flag: '🇬🇧', d: 'd2' },
              ].map((r) => (
                <figure className={`review reveal ${r.d}`.trim()} key={r.n}>
                  <div className="stars">★★★★★</div>
                  <blockquote>{t(`rev.${r.n}.q`)}</blockquote>
                  <figcaption className="review-by">
                    <span className="review-av">{r.av}</span>
                    <span><b>{t(`rev.${r.n}.name`)}</b><span>{t(`rev.${r.n}.loc`)}</span></span>
                    <span className="flag">{r.flag}</span>
                  </figcaption>
                </figure>
              ))
            )}
          </div>
          {google?.mapsUri && (
            <p className="reveal" style={{ textAlign: 'center', marginTop: '18px', fontSize: '.9rem' }}>
              <a href={google.mapsUri} target="_blank" rel="noopener" style={{ color: 'var(--muted)' }}>
                {google.rating?.toFixed(1)} ★ · {t('reviews.google')} ({google.total})
              </a>
            </p>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-cream2" id="faq" data-screen-label="FAQ">
        <div className="wrap">
          <div className="sec-head reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{t('faq.eyebrow')}</span>
            <h2>{t('faq.h2')}</h2>
          </div>
          <div className="faq">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
              <div className="faq-item reveal" key={n}>
                <button className="faq-q"><span>{t(`faq.${n}.q`)}</span><span className="q-ic"><svg><use href="#i-plus" /></svg></span></button>
                <div className="faq-a"><div className="faq-a-inner">{t(`faq.${n}.a`)}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact" data-screen-label="Contact">
        <div className="wrap">
          <div className="sec-head reveal">
            <span className="eyebrow">{t('contact.eyebrow')}</span>
            <h2>{t('contact.h2')}</h2>
            <p className="lead">{t('contact.lead')}</p>
          </div>
          <div className="contact-grid">
            <div className="form-card reveal">
              <form className="ji-form" noValidate>
                <div className="form-fields">
                  <div className="field">
                    <label htmlFor="f-tour">{t('form.tour')}</label>
                    <select id="f-tour" name="tour" required defaultValue="">
                      <option value="" disabled>{t('form.tour.opt')}</option>
                      <option value="gc">{t('opt.gc')}</option>
                      <option value="sc">{t('opt.sc')}</option>
                      <option value="jk">{t('opt.jk')}</option>
                      <option value="kef">{t('opt.kef')}</option>
                      <option value="bl">{t('opt.bl')}</option>
                      <option value="aurora">{t('opt.aurora')}</option>
                      <option value="custom">{t('opt.custom')}</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="field"><label htmlFor="f-date">{t('form.date')}</label><input id="f-date" name="date" type="date" /></div>
                    <div className="field">
                      <label>{t('form.people')}</label>
                      <div className="seg">
                        <input type="radio" id="p1" name="people" value="1-4" defaultChecked /><label htmlFor="p1">{t('form.p.1')}</label>
                        <input type="radio" id="p2" name="people" value="5-8" /><label htmlFor="p2">{t('form.p.2')}</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field"><label htmlFor="f-name">{t('form.name')}</label><input id="f-name" name="name" type="text" required /></div>
                    <div className="field"><label htmlFor="f-email">{t('form.email')}</label><input id="f-email" name="email" type="email" required /></div>
                  </div>
                  <div className="field"><label htmlFor="f-phone"><span>{t('form.phone')}</span> <span className="opt">{t('form.phone.opt')}</span></label><input id="f-phone" name="phone" type="tel" /></div>
                  <div className="field"><label htmlFor="f-msg"><span>{t('form.msg')}</span> <span className="opt">{t('form.msg.opt')}</span></label><textarea id="f-msg" name="msg" placeholder={t('form.msg.ph')}></textarea></div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit"><span>{t('form.send')}</span><svg><use href="#i-send" /></svg></button>
                  <div className="form-legal"><svg><use href="#i-shield" /></svg><span>{t('form.legal')}</span></div>
                </div>
                <div className="form-sent">
                  <div className="check"><svg><use href="#i-check" /></svg></div>
                  <h3>{t('form.sent.title')}</h3>
                  <p className="lead" style={{ margin: '10px auto 0' }}>{t('form.sent.body')}</p>
                </div>
              </form>
            </div>
            <div className="contact-side reveal d1">
              <a className="contact-method cm-wa" href={waLink(t('wa.generic'))} target="_blank" rel="noopener">
                <div className="ic"><svg><use href="#i-whatsapp" /></svg></div>
                <div><small>{t('cm.wa.l')}</small><b>{SITE.phoneDisplay}</b></div>
              </a>
              <a className="contact-method cm-phone" href={SITE.phoneHref}>
                <div className="ic"><svg><use href="#i-phone" /></svg></div>
                <div><small>{t('cm.phone.l')}</small><b>{SITE.phoneDisplay}</b></div>
              </a>
              <a className="contact-method cm-mail" href={`mailto:${SITE.email}`}>
                <div className="ic"><svg><use href="#i-mail" /></svg></div>
                <div><small>{t('cm.mail.l')}</small><b>{SITE.email}</b></div>
              </a>
              <div className="contact-method cm-phone">
                <div className="ic"><svg><use href="#i-pin" /></svg></div>
                <div><small>{t('cm.hours.l')}</small><b>{t('cm.hours.v')}</b></div>
              </div>
              <div className="contact-map" style={{ overflow: 'hidden', minHeight: 320 }}>
                <AreaMap label={t('map.label')} />
              </div>
              <p style={{ marginTop: 10, fontSize: '.84rem', opacity: 0.82, lineHeight: 1.5 }}>{t('cm.pickup.area')}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
