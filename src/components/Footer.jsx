import Link from 'next/link'
import Logo from './Logo'
import Icon from './Icon'
import { SITE, FOOTER_LINKS, RISK_NOTICE } from '@/data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link href="/" className="logo" aria-label="Swiftbay Koryn home">
              <Logo size={32} />
              <span className="logo__text">
                Swiftbay<span className="logo__accent"> Koryn</span>
              </span>
            </Link>
            <p className="footer__blurb">
              AI powered trading for crypto and stocks. Live signals, fast execution and
              bank grade security in one platform.
            </p>
            <ul className="footer__contact">
              <li>
                <Icon name="mail" size={15} />
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </li>
            </ul>
          </div>

          <nav className="footer__col" aria-label="Platform links">
            <h3>Platform</h3>
            <ul>
              {FOOTER_LINKS.platform.map((link) => (
                <li key={link.to}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Company links">
            <h3>Company</h3>
            <ul>
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.to}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer__col" aria-label="Legal links">
            <h3>Legal</h3>
            <ul>
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.to}>
                  <Link href={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer__risk">
          <strong>Risk warning:</strong> {RISK_NOTICE}
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Swiftbay Koryn. All rights reserved.</span>
          <span>Swiftbay Koryn: multi asset AI trading platform.</span>
        </div>
      </div>
    </footer>
  )
}
