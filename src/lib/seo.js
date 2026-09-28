import { SITE } from '@/data/content'

/**
 * Per-route metadata built around the primary keyword "Swiftbay Koryn".
 * metadataBase is set in the root layout, so relative paths resolve
 * against https://swiftbaykoryn.com.
 */
export function pageMeta({ title, description, path, noIndex = false, keywords = [] }) {
  const canonical = path === '/' ? '/' : path.replace(/\/+$/, '')

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

/** Renders a JSON-LD script tag (server components only). */
export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    email: SITE.email,
    description:
      'Swiftbay Koryn is an AI powered multi asset trading platform for crypto and stocks, with live market signals, 24/7 monitoring and bank grade security.',
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description:
      'Swiftbay Koryn is an AI powered trading platform for cryptocurrencies and stocks.',
  }
}

export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

export function itemListSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: `${SITE.url}${item.path}`,
    })),
  }
}

export function articleSchema(guide, path) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.seoTitle,
    description: guide.seoDescription,
    datePublished: guide.date,
    dateModified: guide.date,
    author: { '@type': 'Organization', name: SITE.name },
    publisher: { '@type': 'Organization', name: SITE.name },
    mainEntityOfPage: `${SITE.url}${path}`,
  }
}
