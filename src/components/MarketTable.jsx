'use client'

import { useEffect, useRef, useState } from 'react'
import { cryptoMarkets, stockMarkets } from '@/data/markets'

/** Mini sparkline for the trend column. */

function Sparkline({ data, up }) {
  const width = 96
  const height = 30
  const min = Math.min(...data)
  const max = Math.max(...data)
  const range = max - min || 1

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * width
      const y = height - 3 - ((value - min) / range) * (height - 6)
      return `${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <polyline
        points={points}
        fill="none"
        stroke={up ? 'var(--green)' : 'var(--red)'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/**
 * Tabbed crypto / stock table with simulated live price ticks.
 * Used by the home LiveRates section and the Markets page.
 */

const initialPrices = () => {
  const map = {}
  for (const market of [...cryptoMarkets, ...stockMarkets]) {
    map[market.symbol] = market.price
  }
  return map
}

export default function MarketTable({ defaultTab = 'crypto', showNote = true }) {
  const [tab, setTab] = useState(defaultTab)
  const [prices, setPrices] = useState(initialPrices)
  const [ticks, setTicks] = useState({})
  const pricesRef = useRef(prices)

  useEffect(() => {
    let tickTimer = null
    const interval = setInterval(() => {
      // Random walk of ±0.15% per tick for a live feel, plus a
      // short green/red flash on the price based on direction.
      const prev = pricesRef.current
      const next = {}
      const direction = {}
      for (const [symbol, price] of Object.entries(prev)) {
        const drifted = price * (1 + (Math.random() - 0.5) * 0.003)
        next[symbol] = drifted
        direction[symbol] = drifted > price ? 'up' : 'down'
      }
      pricesRef.current = next
      setPrices(next)
      setTicks(direction)
      clearTimeout(tickTimer)
      tickTimer = setTimeout(() => setTicks({}), 600)
    }, 3000)
    return () => {
      clearInterval(interval)
      clearTimeout(tickTimer)
    }
  }, [])

  const rows = tab === 'crypto' ? cryptoMarkets : stockMarkets

  const formatPrice = (price) => {
    if (price >= 1000) {
      return price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
    }
    if (price >= 1) {
      return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    }
    return price.toLocaleString('en-US', { minimumFractionDigits: 4, maximumFractionDigits: 4 })
  }

  return (
    <div className="mkt">
      <div className="mkt__tabs" role="tablist" aria-label="Asset class">
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'crypto'}
          className={`mkt__tab${tab === 'crypto' ? ' is-active' : ''}`}
          onClick={() => setTab('crypto')}
        >
          Crypto
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'stocks'}
          className={`mkt__tab${tab === 'stocks' ? ' is-active' : ''}`}
          onClick={() => setTab('stocks')}
        >
          Stocks
        </button>
      </div>
      <div className="mkt__table-wrap">
        <table className="mkt__table">
          <thead>
            <tr>
              <th scope="col">Asset</th>
              <th scope="col">Price</th>
              <th scope="col">24h change</th>
              <th scope="col">Trend</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((market) => {
              const price = prices[market.symbol]
              const up = market.changePct >= 0
              const tickClass = ticks[market.symbol]
                ? `is-tick-${ticks[market.symbol]}`
                : ''
              return (
                <tr key={market.symbol}>
                  <td>
                    <div className="mkt__asset">
                      <span
                        className="mkt__badge"
                        style={{ background: market.color }}
                        aria-hidden="true"
                      >
                        {market.symbol.slice(0, 3)}
                      </span>
                      <div>
                        <span className="mkt__name">{market.name}</span>
                        <span className="mkt__sym">{market.symbol}/USD</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className={`mkt__price ${tickClass}`}>${formatPrice(price)}</span>
                  </td>
                  <td>
                    <span className={`mkt__chg ${up ? 'is-up' : 'is-down'}`}>
                      {up ? '▲' : '▼'} {Math.abs(market.changePct).toFixed(2)}%
                    </span>
                  </td>
                  <td>
                    <Sparkline data={market.spark} up={up} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {showNote ? (
        <p className="mkt__note">
          Prices are indicative demo data for illustration and may differ from live exchange quotes.
        </p>
      ) : null}
    </div>
  )
}
