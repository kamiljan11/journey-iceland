'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Client-side interactions, ported 1:1 from the Claude Design `app.js`
 * (minus language toggle — handled by locale routes). Re-runs on route change.
 */
export default function Enhancements() {
  const pathname = usePathname();

  useEffect(() => {
    const ac = new AbortController();
    const sig = { signal: ac.signal };
    const observers: IntersectionObserver[] = [];

    // 1. real photos: fade in, fall back to gradient on error
    document.querySelectorAll<HTMLImageElement>('img.ph-img[data-src]').forEach((img) => {
      const src = img.getAttribute('data-src');
      if (!src || img.src) return;
      img.onload = () => {
        img.classList.add('loaded');
        img.closest('.ph')?.classList.add('has-photo');
      };
      img.onerror = () => img.remove();
      img.src = src;
    });

    // 3. sticky nav
    const nav = document.querySelector('.nav');
    if (nav) {
      const hasHero = !!document.querySelector('.hero');
      if (!hasHero) {
        // Pages without a dark hero (legal pages): keep the nav solid so it's legible.
        nav.classList.add('scrolled');
      } else {
        const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true, signal: ac.signal });
      }
    }

    // 3b. PL offer banner: measure height, offset nav
    const offer = document.querySelector<HTMLElement>('.pl-offer');
    if (offer) {
      const sync = () => {
        const isPl = document.body.getAttribute('data-lang') === 'pl';
        document.documentElement.style.setProperty('--offer-h', (isPl ? offer.offsetHeight : 0) + 'px');
      };
      sync();
      window.addEventListener('resize', sync, sig);
    }

    // 4. mobile drawer
    const drawer = document.querySelector('.drawer');
    const burger = document.querySelector('.burger');
    if (drawer && burger) {
      const open = () => { drawer.classList.add('open'); document.body.style.overflow = 'hidden'; };
      const close = () => { drawer.classList.remove('open'); document.body.style.overflow = ''; };
      burger.addEventListener('click', open, sig);
      drawer.querySelector('.drawer-scrim')?.addEventListener('click', close, sig);
      drawer.querySelector('.drawer-close')?.addEventListener('click', close, sig);
      drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', close, sig));
      document.addEventListener('keydown', (e) => { if ((e as KeyboardEvent).key === 'Escape') close(); }, sig);
    }

    // 5. scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
      reveals.forEach((e) => io.observe(e));
      observers.push(io);
    } else {
      reveals.forEach((e) => e.classList.add('in'));
    }

    // 6/7. scroll spy for nav-links and tour sub-nav (href contains #section)
    const spy = (sel: string, opts: IntersectionObserverInit) => {
      const links = [...document.querySelectorAll<HTMLAnchorElement>(sel)];
      if (!links.length) return;
      const map = new Map<Element, HTMLAnchorElement>();
      links.forEach((l) => {
        const id = (l.getAttribute('href') || '').split('#')[1];
        const s = id && document.getElementById(id);
        if (s) map.set(s, l);
      });
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            links.forEach((l) => l.classList.remove('active'));
            map.get(en.target)?.classList.add('active');
          }
        });
      }, opts);
      map.forEach((_l, s) => io.observe(s));
      observers.push(io);
    };
    spy('.nav-links a[href*="#"]', { rootMargin: '-45% 0px -50% 0px' });
    spy('.subnav a[href*="#"]', { rootMargin: '-30% 0px -60% 0px' });

    // 8. FAQ accordion
    document.querySelectorAll('.faq-item').forEach((item) => {
      const q = item.querySelector('.faq-q');
      const a = item.querySelector<HTMLElement>('.faq-a');
      if (!q || !a) return;
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        item.parentElement?.querySelectorAll('.faq-item.open').forEach((o) => {
          if (o !== item) { o.classList.remove('open'); (o.querySelector('.faq-a') as HTMLElement).style.maxHeight = ''; }
        });
        if (isOpen) { item.classList.remove('open'); a.style.maxHeight = ''; }
        else { item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      }, sig);
    });
    const recompute = () => document.querySelectorAll<HTMLElement>('.faq-item.open .faq-a').forEach((a) => { a.style.maxHeight = a.scrollHeight + 'px'; });
    window.addEventListener('resize', recompute, sig);

    // 9. lightbox
    const lb = document.querySelector('.lightbox');
    if (lb) {
      const stage = lb.querySelector('.lb-stage')!;
      const items = [...document.querySelectorAll('.g-item')];
      let idx = 0;
      const buildClone = (item: Element) => {
        stage.innerHTML = '';
        const ph = item.querySelector('.ph')!.cloneNode(true) as HTMLElement;
        ph.style.position = ''; ph.classList.add('lb-ph');
        stage.appendChild(ph);
      };
      const show = (i: number) => { idx = (i + items.length) % items.length; buildClone(items[idx]); lb.classList.add('open'); document.body.style.overflow = 'hidden'; };
      const close = () => { lb.classList.remove('open'); document.body.style.overflow = ''; };
      items.forEach((it, i) => it.addEventListener('click', () => show(i), sig));
      lb.querySelector('.lb-close')?.addEventListener('click', close, sig);
      lb.querySelector('.lb-prev')?.addEventListener('click', (e) => { e.stopPropagation(); show(idx - 1); }, sig);
      lb.querySelector('.lb-next')?.addEventListener('click', (e) => { e.stopPropagation(); show(idx + 1); }, sig);
      lb.addEventListener('click', (e) => { if (e.target === lb) close(); }, sig);
      document.addEventListener('keydown', (e) => {
        const k = (e as KeyboardEvent).key;
        if (!lb.classList.contains('open')) return;
        if (k === 'Escape') close();
        if (k === 'ArrowLeft') show(idx - 1);
        if (k === 'ArrowRight') show(idx + 1);
      }, sig);
    }

    // 10. availability form → POST /api/lead (Supabase), then show success.
    document.querySelectorAll<HTMLFormElement>('form.ji-form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const payload: Record<string, string> = {
          lang: document.documentElement.lang || 'en',
          source: form.dataset.preselect || 'website',
        };
        fd.forEach((v, k) => { payload[k] = String(v); });
        // optimistic UX: show success immediately; send in the background
        form.querySelector('.form-fields')?.classList.add('hide');
        form.querySelector('.form-sent')?.classList.add('show');
        fetch('/api/lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        }).catch(() => { /* ignore — request still reaches host via WhatsApp/phone */ });
      }, sig);
      const sel = form.querySelector<HTMLSelectElement>('select[name="tour"]');
      if (sel) {
        const want = new URLSearchParams(location.search).get('tour') || form.dataset.preselect;
        if (want && [...sel.options].some((o) => o.value === want)) sel.value = want;
      }
    });

    return () => { ac.abort(); observers.forEach((o) => o.disconnect()); };
  }, [pathname]);

  return null;
}
