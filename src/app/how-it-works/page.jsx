import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import SectionHead from '@/components/SectionHead'
import { pageMeta } from '@/lib/seo'
import { steps } from '@/data/features'

export const metadata = pageMeta({
  title: 'How Swiftbay Koryn Works | From Sign Up To First Trade',
  description:
    'How Swiftbay Koryn works in four steps: create your account, fund from $250, follow AI signals and withdraw on demand. Start today.',
  path: '/how-it-works',
  keywords: ['swiftbay koryn', 'how swiftbay koryn works', 'ai trading signals', 'open trading account'],
})

export default function HowItWorksPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: How It Works</p>
          <h1 className="page-hero__title">How Swiftbay Koryn Works</h1>
          <p className="page-hero__lead">
            Four steps between you and a smarter way to trade crypto and stocks. No experience
            required.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="steps">
            {steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 90}>
                <article className="step">
                  <span className="step__num">{String(index + 1).padStart(2, '0')}</span>
                  <h2 className="step__title">{step.title}</h2>
                  <p className="step__text">{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container content-grid">
          <div className="content-grid__text">
            <span className="section-label">What You Get</span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Everything Included With Every Account
            </h2>
            <p>
              There are no premium tiers to unlock the basics. Every Swiftbay Koryn account
              includes the AI signal feed, both asset classes, the guides library and 24/7
              support from the moment you sign up.
            </p>
            <p>
              Start with the amount you are comfortable with. The minimum first deposit is
              $250, and you can scale up only when you’re ready.
            </p>
          </div>
          <Reveal>
            <div className="content-panel">
              <h3>Included with your account</h3>
              <ul className="content-panel__list">
                <li>
                  <Icon name="check" size={16} />
                  <span>Real time AI trading signals with entry zones</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>120+ crypto and stock markets in one dashboard</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Zero commission stock trading</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Guided onboarding and full guide library</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>24/7 human support by email and live chat</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            label="Good To Know"
            title="Three Things Before You Start"
            lead="A quick reality check so your first weeks on the platform start on solid ground."
          />
          <div className="adv__grid">
            <article className="adv-card">
              <span className="adv-card__icon">
                <Icon name="shield" size={22} />
              </span>
              <h3 className="adv-card__title">Risk Comes First</h3>
              <p className="adv-card__text">
                Trading can lose money, and AI signals are decision support, not guarantees.
                Read the risk disclosure and only trade capital you can afford to lose.
              </p>
            </article>
            <article className="adv-card">
              <span className="adv-card__icon">
                <Icon name="chart" size={22} />
              </span>
              <h3 className="adv-card__title">Start Small, Learn Fast</h3>
              <p className="adv-card__text">
                Most successful traders begin with small positions, follow signals on one or
                two familiar assets, and scale up as their confidence grows.
              </p>
            </article>
            <article className="adv-card">
              <span className="adv-card__icon">
                <Icon name="key" size={22} />
              </span>
              <h3 className="adv-card__title">Secure Your Account</h3>
              <p className="adv-card__text">
                Use a unique password, turn on two factor authentication with an authenticator
                app, and never share your verification codes with anyone, including us.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="final-cta__card">
            <span className="section-label">Ready To Begin</span>
            <h2 className="final-cta__title">Your First Trade Is Minutes Away</h2>
            <p className="final-cta__lead">
              Sign up free, deposit from $250, and let the Swiftbay Koryn engine start scanning
              the markets for you.
            </p>
            <div className="final-cta__actions">
              <Link className="btn btn--accent btn--lg" href="/sign-up">
                Open your account
              </Link>
              <Link className="link-arrow" href="/faq">
                Read the FAQs
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
            <p className="final-cta__note">
              Trading involves substantial risk of loss and is not suitable for every investor.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
