import Link from 'next/link'
import { notFound } from 'next/navigation'
import { pageMeta, JsonLd, articleSchema, breadcrumbSchema } from '@/lib/seo'
import { guides, getGuide } from '@/data/guides'

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) {
    return pageMeta({
      title: 'Guide Not Found - Swiftbay Koryn',
      description: 'This Swiftbay Koryn guide could not be found.',
      path: `/guides/${slug}`,
      noIndex: true,
    })
  }

  return pageMeta({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}`,
    keywords: [
      'swiftbay koryn',
      'swiftbay koryn guides',
      guide.category.toLowerCase(),
      guide.title.toLowerCase(),
    ],
  })
}

export default async function GuidePage({ params }) {
  const { slug } = await params
  const guide = getGuide(slug)

  if (!guide) notFound()

  const related = guides.filter((item) => item.slug !== guide.slug).slice(0, 3)

  return (
    <>
      <article className="guide">
        <div className="container guide__article">
          <header className="guide__head">
            <div className="guide__chips">
              <span className="guide-card__chip">{guide.category}</span>
            </div>
            <h1>{guide.title}</h1>
            <p className="guide__meta">
              <span>{guide.minutes} min read</span>
              <span>
                Updated{' '}
                {new Date(guide.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </span>
            </p>
          </header>

          <div className="guide__body">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <aside className="guide__cta">
            <h2>Put It Into Practice With Swiftbay Koryn</h2>
            <p>
              Open your free account, fund it from $250 and start using the platform covered
              in this guide.
            </p>
            <div className="guide__cta-actions">
              <Link className="btn btn--accent" href="/sign-up">
                Create your account
              </Link>
              <Link className="btn btn--ghost" href="/guides">
                All guides
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="section section--surface">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
            Continue Reading
          </h2>
          <div className="guides__grid">
            {related.map((item) => (
              <Link className="guide-card" href={`/guides/${item.slug}`} key={item.slug}>
                <span className="guide-card__chip">{item.category}</span>
                <h3 className="guide-card__title">{item.title}</h3>
                <p className="guide-card__text">{item.excerpt}</p>
                <span className="guide-card__meta">
                  <span>{item.minutes} min read</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <JsonLd data={articleSchema(guide, `/guides/${guide.slug}`)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
          { name: guide.title, path: `/guides/${guide.slug}` },
        ])}
      />
    </>
  )
}
