import Link from 'next/link';
import { makeT } from '@/lib/dictionary';
import { SITE, waLink } from '@/lib/site';
import { getTour, TOUR_CARDS } from '@/lib/tours';
import RouteMap from '@/components/RouteMap';
import BokunCalendar from '@/components/BokunCalendar';

const BRING_ICONS = ['#i-snow', '#i-boot', '#i-camera', '#i-waves'];
const BRING_KEYS = [1, 2, 3, 4];
const SUBNAV: [string, string][] = [
  ['#ov', 'tp.sn.overview'], ['#route', 'tp.sn.route'], ['#map', 'tp.sn.map'],
  ['#gallery', 'tp.sn.gallery'], ['#reviews', 'tp.sn.reviews'], ['#faq', 'tp.sn.faq'], ['#avail', 'tp.sn.avail'],
];
const REVIEWERS: Record<number, { av: string; flag: string }> = {
  1: { av: 'S', flag: '🇺🇸' }, 2: { av: 'T', flag: '🇵🇱' }, 3: { av: 'E', flag: '🇬🇧' },
  4: { av: 'B', flag: '🇩🇪' }, 5: { av: 'D', flag: '🇨🇦' }, 6: { av: 'P', flag: '🇬🇧' },
};
const DEFAULT_REVIEWS = [1, 3, 4];

export default function TourPage({ lang, slug }: { lang: string; slug: string }) {
  const t = makeT(lang);
  const L = (h: string) => `/${lang}${h}`;
  const x = getTour(slug, lang);

  const quickFacts: [string, string][] = [
    ['#i-clock', x.qfDur],
    ['#i-wallet', t(x.priceKey)],
    ['#i-users', x.groupFact ?? t('tp.qf.priv')],
    ['#i-bed', t('tp.qf.pickup')],
    ['#i-globe', x.langFact ?? t('tp.qf.lang')],
  ];
  const others = TOUR_CARDS.filter((c) => c.slug !== slug);
  // Tours without a fixed route (Northern Lights) have no map section.
  const subnav = x.mapH2 ? SUBNAV : SUBNAV.filter(([h]) => h !== '#map');
  const inclYes = x.incl?.yes ?? [1, 2, 3, 4, 5, 6].map((n) => t(`tp.incl.yes.${n}`));
  const inclNo = x.incl?.no ?? [1, 2, 3].map((n) => t(`tp.incl.no.${n}`));
  const bring = x.bring ?? BRING_KEYS.map((n) => ({ icon: BRING_ICONS[n - 1], t: t(`tp.bring.${n}.t`), d: t(`tp.bring.${n}.d`) }));

  return (
    <main>
      {/* HERO */}
      <section className="hero tour-hero" id="top" data-screen-label="Hero">
        <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt={x.h1} src={x.heroImg} /></div>
        <div className="hero-scrim"></div>
        <div className="hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href={`/${lang}`}>Journey Iceland</Link>
            <svg><use href="#i-chevron-right" /></svg>
            <Link href={L('#tours')}>{t('tp.bc.tours')}</Link>
            <svg><use href="#i-chevron-right" /></svg>
            <span className="cur">{x.bcCur}</span>
          </nav>
          <span className="eyebrow hero-eyebrow">{x.eyebrow}</span>
          <h1 className="h-display">{x.h1}</h1>
          <p className="hero-sub">{x.sub}</p>
          <div className="quick-facts">
            {quickFacts.map(([ic, val], i) => (<span className="chip chip-light" key={i}><svg><use href={ic} /></svg>{val}</span>))}
          </div>
          <div className="hero-cta">
            <a className="btn btn-primary btn-lg" href="#avail"><span>{t('cta.check')}</span><svg><use href="#i-arrow-right" /></svg></a>
            <a className="btn btn-outline btn-lg" href={waLink(t(x.waKey))} target="_blank" rel="noopener"><svg><use href="#i-whatsapp" /></svg><span>{t('cta.wa.short')}</span></a>
          </div>
        </div>
      </section>

      {/* SUB-NAV */}
      <div className="subnav"><div className="subnav-inner">{subnav.map(([h, k]) => (<a href={h} key={k}>{t(k)}</a>))}</div></div>

      {/* HIGHLIGHTS */}
      <section className="sec" id="ov" data-screen-label="Overview">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.hl.eyebrow')}</span><h2>{x.hlH2 ?? t('tp.hl.h2')}</h2></div>
          <ul className="highlights reveal">{x.highlights.map((h, i) => (<li key={i}><svg><use href="#i-check" /></svg><span>{h}</span></li>))}</ul>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="sec bg-cream2">
        <div className="wrap narrow">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.ov.eyebrow')}</span><h2>{x.ovH2}</h2></div>
          <div className="tp-overview reveal">{x.overview.map((p, i) => (<p key={i} className={i === 0 ? 'lead' : ''} style={i === 0 ? undefined : { marginTop: '16px' }}>{p}</p>))}</div>
        </div>
      </section>

      {/* ROUTE */}
      <section className="sec" id="route" data-screen-label="Route">
        <div className="wrap narrow">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.rt.eyebrow')}</span><h2>{x.rtH2 ?? t('tp.rt.h2')}</h2></div>
          <div className="timeline">
            {x.stops.map((s, i) => (
              <div className="tl-item reveal" key={i}>
                <div className="tl-dot">{i + 1}</div>
                <div className="tl-body"><span className="tl-time">{s.time}</span><h4>{s.t}</h4><p>{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      {x.mapH2 && (
      <section className="sec bg-cream2" id="map" data-screen-label="Map">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.map.eyebrow')}</span><h2>{x.mapH2}</h2></div>
          <div className="contact-map reveal" style={{ aspectRatio: '21/9', minHeight: 280, overflow: 'hidden' }}>
            {x.route && x.route.length > 1 ? (
              <RouteMap points={x.route} />
            ) : (
              <>
                <div className="ph" data-label={x.mapLabel}></div>
                <span className="map-pin"><svg><use href="#i-pin-fill" /></svg></span>
              </>
            )}
          </div>
        </div>
      </section>
      )}

      {/* INCLUDED */}
      <section className="sec">
        <div className="wrap narrow">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.incl.eyebrow')}</span><h2>{t('tp.incl.h2')}</h2></div>
          <div className="incl-grid">
            <div className="incl-col incl-yes reveal">
              <h4><svg><use href="#i-check" /></svg>{t('tp.incl.yes.t')}</h4>
              <ul>{inclYes.map((item, i) => (<li key={i}><svg><use href="#i-check" /></svg><span>{item}</span></li>))}</ul>
            </div>
            <div className="incl-col incl-no reveal d1">
              <h4><svg><use href="#i-x-circle" /></svg>{t('tp.incl.no.t')}</h4>
              <ul>{inclNo.map((item, i) => (<li key={i}><svg><use href="#i-x-circle" /></svg><span>{item}</span></li>))}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRING */}
      <section className="sec bg-cream2">
        <div className="wrap narrow">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.bring.eyebrow')}</span><h2>{t('tp.bring.h2')}</h2></div>
          <div className="bring">
            {bring.map((b, i) => (
              <div className="bring-item reveal" key={i}>
                <div className="ic"><svg><use href={b.icon} /></svg></div>
                <div><h4>{b.t}</h4><p>{b.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAMILY TOUCH */}
      <section className="sec">
        <div className="wrap">
          <div className="family-touch reveal">
            {x.ftImg ? <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="" src={x.ftImg} /></div> : <div className="ph" data-label={x.ftLabel}></div>}
            <div className="family-touch-body">
              <span className="eyebrow">{t('tp.ft.eyebrow')}</span>
              <h2>{x.ftH2}</h2>
              <p className="lead" style={{ marginTop: '12px' }}>{x.ftP}</p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="sec bg-dark" id="gallery" data-screen-label="Gallery">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.gal.eyebrow')}</span><h2>{x.galH2 ?? t('tp.gal.h2')}</h2></div>
          <div className="gallery">
            {x.gallery.map((g, i) => (
              <div className="g-item" key={i}>
                {g.src ? <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="" src={g.src} /></div> : <div className="ph" data-label={g.label}></div>}
                <span className="g-zoom"><svg><use href="#i-search-plus" /></svg></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec" id="reviews" data-screen-label="Reviews">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.rev.eyebrow')}</span><h2>{x.revH2 ?? t('tp.rev.h2')}</h2></div>
          <div className="reviews-grid">
            {(x.reviews ?? DEFAULT_REVIEWS).map((n, i) => ({ n, ...REVIEWERS[n], d: ['', 'd1', 'd2'][i] ?? '' })).map((r) => (
              <figure className={`review reveal ${r.d}`.trim()} key={r.n}>
                <div className="stars">★★★★★</div>
                <blockquote>{t(`rev.${r.n}.q`)}</blockquote>
                <figcaption className="review-by">
                  <span className="review-av">{r.av}</span>
                  <span><b>{t(`rev.${r.n}.name`)}</b><span>{t(`rev.${r.n}.loc`)}</span></span>
                  <span className="flag">{r.flag}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec bg-cream2" id="faq" data-screen-label="FAQ">
        <div className="wrap narrow">
          <div className="sec-head reveal" style={{ margin: '0 auto', textAlign: 'center' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>{x.faqEyebrow}</span>
            <h2>{t('tp.faq.h2')}</h2>
          </div>
          <div className="faq">
            {x.faq.map((qa, i) => (
              <div className="faq-item reveal" key={i}>
                <button className="faq-q"><span>{qa.q}</span><span className="q-ic"><svg><use href="#i-plus" /></svg></span></button>
                <div className="faq-a"><div className="faq-a-inner">{qa.a}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALSO LIKE */}
      <section className="sec">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.also.eyebrow')}</span><h2>{t('tp.also.h2')}</h2></div>
          <div className="also-grid">
            {others.map((c, i) => (
              <article className={`tour-card reveal ${['', 'd1', 'd2'][i] ?? ''}`.trim()} key={c.slug}>
                <div className="ph ph-wash has-photo"><img className="ph-img loaded" alt="" src={c.img} /></div>
                <div className="tour-card-scrim"></div>
                <div className="tour-card-body">
                  <h3>{t(c.nameKey)}</h3>
                  <div className="tour-price"><span className="amt">{t(c.priceKey)}</span></div>
                  <Link className="btn btn-primary btn-sm" href={`/${lang}/${c.slug}`}><span>{t('tour.see')}</span><svg><use href="#i-arrow-right" /></svg></Link>
                </div>
                <Link className="tour-card-link" href={`/${lang}/${c.slug}`} aria-label={t(c.nameKey)}></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABILITY */}
      <section className="sec bg-cream2" id="avail" data-screen-label="Availability">
        <div className="wrap">
          <div className="sec-head reveal"><span className="eyebrow">{t('tp.avail.eyebrow')}</span><h2>{x.availH2}</h2><p className="lead">{t(x.bokunProductId ? 'tp.avail.lead.book' : 'tp.avail.lead')}</p></div>
          <div className="contact-grid">
            {x.bokunProductId ? (
              <div className="form-card bokun-card reveal">
                <BokunCalendar
                  productId={x.bokunProductId}
                  noJsText={t('tp.book.nojs')}
                  failText={t('tp.book.fail')}
                  waHref={waLink(t(x.waKey))}
                  waLabel={t('cta.wa')}
                />
              </div>
            ) : (
            <div className="form-card reveal">
              <form className="ji-form" data-preselect={x.preselect} noValidate>
                <div className="form-fields">
                  <div className="field">
                    <label htmlFor="g-tour">{t('form.tour')}</label>
                    <select id="g-tour" name="tour" required defaultValue={x.preselect}>
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
                    <div className="field"><label htmlFor="g-date">{t('form.date')}</label><input id="g-date" name="date" type="date" /></div>
                    <div className="field">
                      <label>{t('form.people')}</label>
                      <div className="seg">
                        <input type="radio" id="gp1" name="people" value="1-4" defaultChecked /><label htmlFor="gp1">{t('form.p.1')}</label>
                        <input type="radio" id="gp2" name="people" value="5-8" /><label htmlFor="gp2">{t('form.p.2')}</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="field"><label htmlFor="g-name">{t('form.name')}</label><input id="g-name" name="name" type="text" required maxLength={100} /></div>
                    <div className="field"><label htmlFor="g-email">{t('form.email')}</label><input id="g-email" name="email" type="email" required maxLength={254} /></div>
                  </div>
                  <div className="field"><label htmlFor="g-phone"><span>{t('form.phone')}</span> <span className="opt">{t('form.phone.opt')}</span></label><input id="g-phone" name="phone" type="tel" maxLength={40} /></div>
                  <div className="hp-field" aria-hidden="true"><label htmlFor="g-hp">Leave this field empty</label><input id="g-hp" name="ji_hp_check" type="text" tabIndex={-1} autoComplete="off" /></div>
                  <div className="field"><label htmlFor="g-msg"><span>{t('form.msg')}</span> <span className="opt">{t('form.msg.opt')}</span></label><textarea id="g-msg" name="msg" maxLength={2000} placeholder={t('form.msg.ph')}></textarea></div>
                  <button className="btn btn-primary btn-lg btn-block" type="submit"><span>{t('form.send')}</span><svg><use href="#i-send" /></svg></button>
                  <p className="form-error" role="alert" hidden>{t('form.err')} <a href={`tel:${t('cm.phone.v').replace(/\s/g, '')}`}>{t('cm.phone.v')}</a> · <a href={waLink(t(x.waKey))} target="_blank" rel="noopener">{t('cta.wa.short')}</a></p>
                  <div className="form-legal"><svg><use href="#i-shield" /></svg><span>{t('form.legal')}</span></div>
                </div>
                <div className="form-sent">
                  <div className="check"><svg><use href="#i-check" /></svg></div>
                  <h3>{t('form.sent.title')}</h3>
                  <p className="lead" style={{ margin: '10px auto 0' }}>{t('form.sent.body')}</p>
                </div>
              </form>
            </div>
            )}
            <div className="contact-side reveal d1">
              <a className="contact-method cm-wa" href={waLink(t(x.waKey))} target="_blank" rel="noopener">
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
