import Link from 'next/link'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import MarketTable from '@/components/MarketTable'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn Markets | Live Crypto And Stock Prices',
  description:
    'Browse live Swiftbay Koryn markets: Bitcoin, Ethereum, Solana and more, plus Apple, NVIDIA and Tesla stocks. Start trading from $250 today.',
  path: '/markets',
  keywords: ['swiftbay koryn markets', 'crypto prices', 'stock prices', 'live market prices'],
})

export default function MarketsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: Markets</p>
          <h1 className="page-hero__title">Markets On Swiftbay Koryn</h1>
          <p className="page-hero__lead">
            120+ crypto and stock markets in one dashboard. Switch tabs to compare the digital
            and listed assets our engine watches around the clock.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <MarketTable />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container content-grid">
          <div className="content-grid__text">
            <span className="section-label">Why Two Asset Classes</span>
            <h2 className="section-title" style={{ marginBottom: '20px' }}>
              Crypto For Momentum, Stocks For Structure
            </h2>
            <p>
              Crypto markets run 24/7 and reward traders who can react quickly, which is where
              real-time AI signals make the biggest difference. Stocks offer established
              companies, regulated markets and zero commission trading.
            </p>
            <p>
              Holding both in one Swiftbay Koryn account lets you move capital between them
              instantly. No separate brokers, no separate wallets, no waiting.
            </p>
          </div>
          <Reveal>
            <div className="content-panel">
              <h3>What you can trade</h3>
              <ul className="content-panel__list">
                <li>
                  <Icon name="check" size={16} />
                  <span>Major cryptocurrencies: BTC, ETH, SOL, BNB, XRP and more</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Leading US stocks: Apple, NVIDIA, Microsoft, Tesla, Amazon</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Transparent spreads shown before every order</span>
                </li>
                <li>
                  <Icon name="check" size={16} />
                  <span>Zero commission on all stock trades</span>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <div className="final-cta__card">
            <span className="section-label">Spot Something You Like</span>
            <h2 className="final-cta__title">Trade It In One Account</h2>
            <p className="final-cta__lead">
              Join Swiftbay Koryn and trade every market on this page from a single dashboard,
              with AI signals watching each one around the clock.
            </p>
            <div className="final-cta__actions">
              <Link className="btn btn--accent btn--lg" href="/sign-up">
                Start trading
              </Link>
              <Link className="link-arrow" href="/guides">
                Read the guides
                <Icon name="arrow-right" size={16} />
              </Link>
            </div>
            <p className="final-cta__note">
              Prices shown are indicative demo data. Trading involves substantial risk of loss.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
