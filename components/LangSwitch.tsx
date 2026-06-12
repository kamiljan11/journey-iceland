'use client';
import { usePathname, useRouter } from 'next/navigation';

const LOCALES: [string, string][] = [
  ['en', 'EN'],
  ['de', 'DE'],
  ['pl', 'PL'],
  ['es', 'ES'],
];

export default function LangSwitch({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  function go(code: string) {
    const parts = (pathname || `/${lang}`).split('/');
    parts[1] = code; // swap locale segment
    router.push(parts.join('/') || `/${code}`);
  }

  return (
    <div className="lang" role="group" aria-label="Language">
      {LOCALES.map(([code, label]) => (
        <button
          key={code}
          type="button"
          className={code === lang ? 'active' : ''}
          onClick={() => go(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
