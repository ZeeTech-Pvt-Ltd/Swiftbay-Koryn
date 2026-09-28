import { SITE } from '@/data/content'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/thank-you',
    },
    sitemap: `${SITE.url}/sitemap.xml`,
  }
}
