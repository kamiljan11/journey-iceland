import { NextResponse, type NextRequest } from 'next/server';

const LOCALES = ['en', 'pl', 'de', 'es'];
const DEFAULT = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (pathname.startsWith('/api')) return NextResponse.next();

  const hasLocale = LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = `/${DEFAULT}${pathname === '/' ? '' : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // skip next internals, static files, and anything with a dot (assets)
  matcher: ['/((?!_next|api|img|fonts|favicon.ico|.*\\..*).*)'],
};
