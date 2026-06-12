import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/site';
import { LANGS } from '@/lib/dictionary';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${SITE.domain}`;
  const routes = ['', '/golden-circle', '/privacy', '/terms'];
  const out: MetadataRoute.Sitemap = [];
  for (const l of LANGS) {
    for (const r of routes) {
      out.push({
        url: `${base}/${l}${r}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: r === '' ? 1 : 0.8,
      });
    }
  }
  return out;
}
