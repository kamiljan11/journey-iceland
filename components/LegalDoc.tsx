import Link from 'next/link';
import type { LegalDoc } from '@/lib/legal';

export default function LegalDocView({ doc, lang, backLabel }: { doc: LegalDoc; lang: string; backLabel: string }) {
  return (
    <main>
      <section className="sec" style={{ paddingTop: 'calc(var(--nav-h) + 44px)' }}>
        <div className="wrap" style={{ maxWidth: '820px' }}>
          <Link href={`/${lang}`} style={{ color: 'var(--terracotta)', fontWeight: 600, fontSize: '.9rem' }}>← {backLabel}</Link>
          <h1 className="h-display" style={{ fontSize: 'clamp(2rem,4.4vw,3.1rem)', marginTop: '14px' }}>{doc.title}</h1>
          <p style={{ marginTop: '8px', color: 'var(--muted)', fontSize: '.9rem' }}>{doc.updated}</p>
          <p style={{ marginTop: '20px', lineHeight: 1.65 }}>{doc.intro}</p>

          {doc.sections.map((s, i) => (
            <div key={i} style={{ marginTop: '30px' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '1.28rem', lineHeight: 1.3 }}>{s.h}</h2>
              {s.p.map((para, j) => (
                <p
                  key={j}
                  style={{
                    marginTop: '9px',
                    lineHeight: 1.65,
                    paddingLeft: para.startsWith('•') ? '16px' : 0,
                    color: 'var(--espresso)',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
