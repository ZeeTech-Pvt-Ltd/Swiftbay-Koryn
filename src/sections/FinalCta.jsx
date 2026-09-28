import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'

export default function FinalCta() {
  return (
    <section className="section section--deep">
      <div className="container">
        <Reveal>
          <div className="final-cta__card">
            <span className="section-label">Ready When You Are</span>
            <h2 className="final-cta__title">Start Trading With Swiftbay Koryn Today</h2>
            <p className="final-cta__lead">
              Open your free account, fund it from $250 and put the AI engine to work across
              120+ crypto and stock markets.
            </p>
            <div className="final-cta__actions">
              <a className="btn btn--accent btn--lg" href="/sign-up">
                Create your free account
              </a>
              <Link className="link-arrow" href="/how-it-works">
                See how it works
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
            <p className="final-cta__note">
              Trading involves substantial risk of loss and isn’t suitable for every investor.
              AI signals are decision support tools, not financial advice.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
