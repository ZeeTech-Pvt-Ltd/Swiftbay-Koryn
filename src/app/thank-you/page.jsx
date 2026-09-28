import Link from 'next/link'
import Icon from '@/components/Icon'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Thank You | Swiftbay Koryn',
  description: 'Your Swiftbay Koryn request has been received. Our team will be in touch shortly.',
  path: '/thank-you',
  noIndex: true,
})

export default function ThankYouPage() {
  return (
    <section className="result">
      <div className="container">
        <div className="result__card">
          <span className="result__icon">
            <Icon name="check" size={34} />
          </span>
          <h1 className="result__title">Thank You For Choosing Swiftbay Koryn</h1>
          <p className="result__text">
            Your request has been received. Our team will contact you shortly with the next
            steps to activate your account.
          </p>
          <div className="result__actions">
            <Link className="btn btn--accent" href="/">
              Back to home
            </Link>
            <Link className="btn btn--ghost" href="/guides">
              Read the guides
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
