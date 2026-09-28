'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import Icon from './Icon'
import { NAV_LINKS } from '@/data/content'

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to))

  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo" onClick={() => setOpen(false)} aria-label="Swiftbay Koryn home">
          <Logo />
          <span className="logo__text">
            Swiftbay<span className="logo__accent"> Koryn</span>
          </span>
        </Link>

        <nav className="nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`nav__link${isActive(link.to) ? ' is-active' : ''}`}
              aria-current={isActive(link.to) ? 'page' : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="header__actions">
          <Link className="btn btn--accent btn--sm" href="/sign-up">
            Sign Up
          </Link>
        </div>

        <button
          type="button"
          className="header__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? 'close' : 'menu'} size={20} />
        </button>
      </div>

      <div className={`mobile-menu${open ? ' is-open' : ''}`} hidden={!open}>
        {NAV_LINKS.map((link) => (
          <Link
            key={link.to}
            href={link.to}
            className={isActive(link.to) ? 'is-active' : ''}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link className="btn btn--accent" href="/sign-up" onClick={() => setOpen(false)}>
          Sign Up
        </Link>
      </div>
    </header>
  )
}
