/** Site-wide constants shared by layout, header, footer and SEO. */

export const SITE = {
  name: 'Swiftbay Koryn',
  domain: 'swiftbaykoryn.com',
  url: 'https://swiftbaykoryn.com',
  email: 'support@swiftbaykoryn.com',
  tagline: 'AI powered trading for crypto and stocks',
}

export const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Markets', to: '/markets' },
  { label: 'About', to: '/about' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Guides', to: '/guides' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

export const FOOTER_LINKS = {
  platform: [
    { label: 'Markets', to: '/markets' },
    { label: 'How It Works', to: '/how-it-works' },
    { label: 'Guides', to: '/guides' },
    { label: 'FAQ', to: '/faq' },
    { label: 'Sign Up', to: '/sign-up' },
  ],
  company: [
    { label: 'About Us', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ],
  legal: [
    { label: 'Terms of Use', to: '/terms-of-use' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Risk Disclosure', to: '/risk-disclosure' },
    { label: 'Cookie Policy', to: '/cookie-policy' },
  ],
}

export const RISK_NOTICE =
  'Trading cryptocurrencies and stocks involves a real risk of loss and is not right for every investor. Prices can move sharply, and you may lose part or all of your invested capital. AI signals and market analysis from Swiftbay Koryn are decision support tools, not financial advice. Past performance does not guarantee future results. Never trade with money you cannot afford to lose, and seek independent financial advice if you are not sure whether trading is right for you.'

/** Affiliate lead-capture endpoint (shared network with Binnacrest AI). */
export const FORM_ENDPOINT = 'https://meridianc-au.com/homeMailAction.php'
export const OFFER_NAME = 'SwiftbayKoryn-Site'

export const PAYMENTS = ['Mastercard', 'VISA', 'PayPal', 'Bank Transfer']
