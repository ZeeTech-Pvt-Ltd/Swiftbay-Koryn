import { siVisa, siMastercard, siPaypal, siTether } from 'simple-icons'
import Icon from './Icon'

/** Skrill "S" mark (brand not in simple-icons), 24px grid. */
const SKRILL_S = 'M6.3 5.7 C10 5.7 15.3 4.3 16.7 8 C17.5 10.5 15.2 12.3 12.7 12.9 C9.5 13.6 7.7 14.9 7.5 16.5 C7.3 18.8 10.8 19.9 14.1 19.7 C16.4 19.6 17.7 18.8 17.9 17.6'

/** Neteller "N" mark (brand not in simple-icons), 24px grid. */
const NETELLER_N = 'M5.5 5.5h4.5l6.5 9.3V5.5h2V18.5H14L7.5 9.2v9.3h-2z'

const BRANDS = {
  VISA: { path: siVisa.path, color: `#${siVisa.hex}` },
  Mastercard: { path: siMastercard.path, color: `#${siMastercard.hex}` },
  PayPal: { path: siPaypal.path, color: `#${siPaypal.hex}` },
  USDT: { path: siTether.path, color: `#${siTether.hex}` },
  Skrill: { path: SKRILL_S, color: '#862165' },
  Neteller: { path: NETELLER_N, color: '#8DC640' },
}

/** Payment method marks shown in the Network section. */

export default function PaymentIcon({ name, size = 26 }) {
  if (name === 'USDC') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="11" fill="#2775CA" />
        <path
          d="M12 6.5v11M9.4 8.8c0-1.1 1.4-1.8 2.6-1.8s2.6.7 2.6 1.8-1.1 1.6-2.6 2c-1.5.4-2.6 1-2.6 2s1.4 1.8 2.6 1.8 2.6-.7 2.6-1.8"
          stroke="#fff"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }

  if (name === 'Bank Transfer') {
    return <Icon name="bank" size={size - 6} className="network__bank-icon" />
  }

  const brand = BRANDS[name]
  if (!brand) return null

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={brand.path} fill={brand.color} />
    </svg>
  )
}
