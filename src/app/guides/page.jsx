import Link from 'next/link'
import Reveal from '@/components/Reveal'
import { pageMeta, JsonLd, itemListSchema } from '@/lib/seo'
import { guides } from '@/data/guides'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn Guides | Reviews And How To Articles',
  description:
    'Practical Swiftbay Koryn guides on getting started, the AI engine, deposits, stock trading and security. Start reading today.',
  path: '/guides',
  keywords: ['swiftbay koryn guides', 'trading guides', 'crypto guide', 'stock trading guide'],
})

export default function GuidesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: Guides</p>
          <h1 className="page-hero__title">Guides And Resources</h1>
          <p className="page-hero__lead">
            Plain language guides to help you get the most out of Swiftbay Koryn, from your
            first deposit to securing your account.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guides__grid">
            {guides.map((guide, index) => (
              <Reveal key={guide.slug} delay={(index % 3) * 90}>
                <Link className="guide-card" href={`/guides/${guide.slug}`}>
                  <span className="guide-card__chip">{guide.category}</span>
                  <h2 className="guide-card__title">{guide.title}</h2>
                  <p className="guide-card__text">{guide.excerpt}</p>
                  <span className="guide-card__meta">
                    <span>{guide.minutes} min read</span>
                    <span>{new Date(guide.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <JsonLd
        data={itemListSchema(
          guides.map((guide) => ({ name: guide.title, path: `/guides/${guide.slug}` }))
        )}
      />
    </>
  )
}
