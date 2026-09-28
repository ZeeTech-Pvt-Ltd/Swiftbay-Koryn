import Link from 'next/link'
import RegistrationForm from '@/components/RegistrationForm'
import Icon from '@/components/Icon'

export default function Hero() {
  return (
    <section className="hero">
      <span className="hero__ghost" aria-hidden="true">
        Swiftbay
      </span>
      <div className="container hero__grid">
        <div className="hero__main">
          <h1 className="hero__title">
            Swiftbay Koryn: Trade Crypto And Stocks With AI Clarity
          </h1>
          <p className="hero__subtitle">
            One account for Bitcoin, Ethereum and the world’s leading stocks. A market
            intelligence engine scans 120+ markets around the clock, turns dense data into
            clear signals, and helps you act with confidence, whatever your experience level.
          </p>
          <div className="hero__actions">
            <a className="btn btn--accent" href="#join">
              Open an account
            </a>
            <Link className="link-arrow" href="/markets">
              Explore the markets
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
          <ul className="hero__stats">
            <li>
              <span className="hero__stat-val">24/7</span>
              <span className="hero__stat-label">AI monitoring</span>
            </li>
            <li>
              <span className="hero__stat-val">120+</span>
              <span className="hero__stat-label">Crypto &amp; stocks</span>
            </li>
            <li>
              <span className="hero__stat-val">&lt;0.5s</span>
              <span className="hero__stat-label">Signal latency</span>
            </li>
          </ul>
          <p className="hero__trust">
            <strong>4.8/5</strong> rated by 96,000+ traders in 140+ countries
          </p>
        </div>
        <div className="hero__side" id="join">
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
