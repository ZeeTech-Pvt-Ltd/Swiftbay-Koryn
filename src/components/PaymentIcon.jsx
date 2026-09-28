import Image from 'next/image'
import mastercardIcon from '@/assets/payments/mastercard.png'
import visaIcon from '@/assets/payments/visa.png'
import paypalIcon from '@/assets/payments/paypal.png'
import Icon from './Icon'

const LOGOS = {
  Mastercard: mastercardIcon,
  VISA: visaIcon,
  PayPal: paypalIcon,
}

/** Original brand icons (from Google's favicon service) in the Network section. */

export default function PaymentIcon({ name }) {
  if (name === 'Bank Transfer') {
    return <Icon name="bank" size={24} className="network__bank-icon" />
  }

  const logo = LOGOS[name]
  if (!logo) return null

  return (
    <span className="network__logo-frame">
      <Image src={logo} alt={`${name} logo`} fill sizes="100px" className="network__logo-img" />
    </span>
  )
}
