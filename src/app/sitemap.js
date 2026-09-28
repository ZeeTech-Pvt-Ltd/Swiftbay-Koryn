import { SITE } from '@/data/content'
import { guides } from '@/data/guides'

const STATIC_ROUTES = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/markets', priority: 0.9, changeFrequency: 'daily' },
  { path: '/how-it-works', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/guides', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/sign-up', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/risk-disclosure', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap() {
  const lastModified = new Date('2026-09-25')

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...guides.map((guide) => ({
      url: `${SITE.url}/guides/${guide.slug}`,
      lastModified: new Date(guide.date),
      changeFrequency: 'monthly',
      priority: 0.7,
    })),
  ]
}
