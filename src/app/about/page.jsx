import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import SectionHead from '@/components/SectionHead'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'About Swiftbay Koryn | Multi Asset AI Trading Platform',
  description:
    'Learn about Swiftbay Koryn: the AI market engine, the multi asset platform for crypto and stocks, and the security first approach. Sign up free today.',
  path: '/about',
})

const VALUES = [
  {
    icon: 'cpu',
    title: 'Intelligence First',
    text: 'We believe better decisions come from better information, processed fast and presented clearly.',
  },
  {
    icon: 'shield',
    title: 'Trust By Design',
    text: 'Security and transparency are not features we add later. They are the foundation the platform is built on.',
  },
  {
    icon: 'headset',
    title: 'Humans, Always Available',
    text: 'Automation powers the platform, but real people answer your questions around the clock.',
  },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: About</p>
          <h1 className="page-hero__title">About Swiftbay Koryn</h1>
          <p className="page-hero__lead">
            The story, the engine and the principles behind a trading platform built for the way
            modern markets actually move.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="content-grid__text">
            <span className="section-label">Our Story</span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Built Because Information Was Moving Faster Than People Could
            </h2>
            <p>
              Swiftbay Koryn started with a simple observation: by the time most traders
              noticed a market move, the edge was gone. Charts were dense, feeds were noisy,
              and crypto and stocks lived in separate worlds.
            </p>
            <p>
              So we built one platform where an AI engine watches 120+ crypto and stock markets
              around the clock, scanning price action, volatility and momentum, and turns
              that flood of data into signals you can act on in seconds.
            </p>
            <p>
              Today, Swiftbay Koryn serves traders in 140+ countries, with everything from a
              first $250 deposit to institutional grade security handled in one place.
            </p>
          </div>
          <Reveal>
            <div className="content-panel">
              <h3>Swiftbay Koryn In Numbers</h3>
              <ul className="content-panel__list">
                <li>
                  <Icon name="check" size={16} />
                  <span>
                    <strong>96,000+</strong> active traders on the platform
                  </span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>
                    <strong>$2.8B+</strong> in monthly trading volume
                  </span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>
                    <strong>120+</strong> crypto and stock markets covered
                  </span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>
                    <strong>99.9%</strong> platform uptime since launch
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <SectionHead
            label="What We Stand For"
            title="Principles That Never Change"
          />
          <div className="adv__grid">
            {VALUES.map((value, index) => (
              <Reveal key={value.title} delay={(index % 2) * 90}>
                <article className="adv-card">
                  <span className="adv-card__icon">
                    <Icon name={value.icon} size={22} />
                  </span>
                  <h3 className="adv-card__title">{value.title}</h3>
                  <p className="adv-card__text">{value.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <div className="content-grid__text">
            <span className="section-label">The Mission</span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Give Every Trader An Unfair Information Advantage
            </h2>
            <p>
              Institutional desks have had armies of analysts and machines for decades. Our
              mission is to bring that same class of market intelligence to individual traders,
              packaged so clearly that a beginner can use it on day one.
            </p>
            <p>
              We measure success one way: whether the platform helps you see the market more
              clearly than you did yesterday. Everything else, the signals, the guides, the
              support, exists to serve that goal.
            </p>
          </div>
          <Reveal>
            <div className="content-panel">
              <h3>Platform Highlights</h3>
              <ul className="content-panel__list">
                <li>
                  <Icon name="check" size={16} />
                  <span>AI signal feed with entry zones and confidence scores</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Crypto and US stocks in a single account</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Zero commission stock trading, transparent crypto spreads</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Withdrawals processed within 24 hours</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>24/7 human support in 20+ languages</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="final-cta__card">
            <span className="section-label">Join The Platform</span>
            <h2 className="final-cta__title">See The Market The Way Swiftbay Koryn Sees It</h2>
            <p className="final-cta__lead">
              Create your account in minutes and let the engine do the scanning for you.
            </p>
            <div className="final-cta__actions">
              <Link className="btn btn--accent btn--lg" href="/sign-up">
                Create your free account
              </Link>
              <Link className="link-arrow" href="/how-it-works">
                How It Works
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
            <p className="final-cta__note">
              Trading involves substantial risk of loss. Never trade with money you cannot
              afford to lose.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
