import { tickerItems } from '@/data/markets'

const formatPrice = (price) => {
  if (price >= 1000) return `$${price.toLocaleString('en-US', { maximumFractionDigits: 0 })}`
  if (price >= 1) return `$${price.toFixed(2)}`
  return `$${price.toFixed(4)}`
}

/** Scrolling strip of indicative market prices below the hero. */

export default function LiveTicker() {
  const items = [...tickerItems, ...tickerItems]

  return (
    <section className="ticker" aria-label="Live market prices">
      <div className="container ticker__wrap">
        <span className="ticker__label">
          <span className="pulse-dot" aria-hidden="true" />
          Live markets
        </span>
        <div className="ticker__viewport">
          <ul className="ticker__track">
            {items.map((market, index) => {
              const up = market.changePct >= 0
              return (
                <li className="ticker__item" key={`${market.symbol}-${index}`}>
                  <span className="ticker__symbol">{market.symbol}/USD</span>
                  <span className="ticker__price">{formatPrice(market.price)}</span>
                  <span className={`ticker__chg ${up ? 'is-up' : 'is-down'}`}>
                    {up ? '▲' : '▼'} {Math.abs(market.changePct).toFixed(2)}%
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
