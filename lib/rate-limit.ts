/* Fixed-window rate limiter kept in memory. On Vercel each serverless instance has its own memory,
   so this slows down a single abusive client but is not a global limit (see docs/adr/0003). */

export type RateLimiter = (key: string, now?: number) => boolean;

export function createRateLimiter(max: number, windowMs: number, maxKeys = 5000): RateLimiter {
  const hits = new Map<string, { start: number; count: number }>();
  return (key, now = Date.now()) => {
    const entry = hits.get(key);
    if (!entry || now - entry.start >= windowMs) {
      if (hits.size >= maxKeys) {
        for (const [k, v] of hits) if (now - v.start >= windowMs) hits.delete(k);
        if (hits.size >= maxKeys) hits.clear(); // memory bound wins over precision
      }
      hits.set(key, { start: now, count: 1 });
      return true;
    }
    entry.count += 1;
    return entry.count <= max;
  };
}

/** First address of x-forwarded-for (set by Vercel), else x-real-ip, else 'unknown'. */
export function clientIp(headers: Headers): string {
  const fwd = headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim() || 'unknown';
  return headers.get('x-real-ip')?.trim() || 'unknown';
}
