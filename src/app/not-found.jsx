import Link from 'next/link'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Page Not Found | Swiftbay Koryn',
  description: 'The page you are looking for could not be found on Swiftbay Koryn.',
  path: '/404',
  noIndex: true,
})

export default function NotFound() {
  return (
    <section className="result">
      <div className="container">
        <div className="result__card">
          <p className="eyebrow">Error 404</p>
          <h1 className="result__title">This Page Drifted Off Course</h1>
          <p className="result__text">
            The page you are looking for does not exist or has been moved. Head back to the
            Swiftbay Koryn home page and pick up where you left off.
          </p>
          <div className="result__actions">
            <Link className="btn btn--accent" href="/">
              Back to home
            </Link>
            <Link className="btn btn--ghost" href="/contact">
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
