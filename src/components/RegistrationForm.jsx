'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import 'intl-tel-input/styles'
import Icon from './Icon'
import { FORM_ENDPOINT, OFFER_NAME } from '@/data/content'

const STATUS = { idle: 'idle', loading: 'loading', error: 'error' }

const initialFields = { firstName: '', lastName: '', email: '', consent: true }

// Resolve the visitor's country from their IP, trying CORS-open services
// in order. ipapi.co Cloudflare-blocks localhost, so ipwho.is leads the
// chain and keeps the switch working in dev too.
async function resolveCountry() {
  const sources = [
    () =>
      fetch('https://ipwho.is/')
        .then((r) => r.json())
        .then((d) => (d.success ? d.country_code : null)),
    () =>
      fetch('https://ipapi.co/json/')
        .then((r) => r.json())
        .then((d) => d.country_code || null),
  ]
  for (const source of sources) {
    try {
      const cc = await source()
      if (cc) return cc.toLowerCase()
    } catch {
      // blocked / offline - try the next source
    }
  }
  return null
}

/**
 * Lead-capture form (hero + sign-up pages), same behaviour as the
 * previous sites (Gem Wealthholm / Binnacrest / Rendaven):
 * - required first/last name, email, valid international phone, consent
 * - honeypot "website" field: bots that fill it get silently dropped
 * - phone field shows flag + dial code + placeholder immediately (light
 *   chunk); libphonenumber utils load on first focus or after 4s idle
 * - POSTs JSON {firstName, lastName, email, phone, offerName} with the
 *   phone in full international format
 */
export default function RegistrationForm({ idPrefix = 'reg' }) {
  const router = useRouter()
  const [fields, setFields] = useState(initialFields)
  const [status, setStatus] = useState(STATUS.idle)
  const [phoneError, setPhoneError] = useState('')
  const honeypotRef = useRef(null)
  const phoneInputRef = useRef(null)
  const itiRef = useRef(null)
  const moduleRef = useRef(null) // intl-tel-input factory (has attachUtils)
  const utilsPromiseRef = useRef(null)
  const utilsRequestedRef = useRef(false)

  // Loads libphonenumber and attaches it to the widget. Called on first
  // focus or after 4s idle - the field already renders its flag, dial
  // code and placeholder without it.
  const requestUtils = () => {
    if (utilsRequestedRef.current || !moduleRef.current) return
    utilsRequestedRef.current = true
    utilsPromiseRef.current = moduleRef.current
      .attachUtils(() => import('intl-tel-input/utils'))
      .catch(() => null)
  }

  useEffect(() => {
    const phoneEl = phoneInputRef.current
    if (!phoneEl) return undefined
    let cancelled = false
    let iti = null
    const timers = []

    import('intl-tel-input').then(({ default: intlTelInput }) => {
      if (cancelled) return
      moduleRef.current = intlTelInput
      iti = intlTelInput(phoneEl, {
        initialCountry: 'gb', // visible default; switched to the visitor's country below
        separateDialCode: true,
        placeholderNumberPolicy: 'AGGRESSIVE', // country-specific example placeholder
        placeholderNumberType: 'MOBILE',
      })
      itiRef.current = iti
      // Order the country selector as: flag → dial code → dropdown arrow.
      const container = phoneEl.closest('.iti')
      const arrow = container?.querySelector('.iti__arrow')
      const selectedCountry = container?.querySelector('.iti__selected-country')
      if (arrow && selectedCountry) selectedCountry.appendChild(arrow)

      // Load the validation utils on first focus or after 4s idle.
      phoneEl.addEventListener('focus', requestUtils, { once: true })
      timers.push(window.setTimeout(requestUtils, 4000))

      // Default to the UK, then switch to the visitor's country from
      // their IP once it resolves (never clobber a number already typed).
      // Delayed 2s so the lookup doesn't compete with critical resources.
      timers.push(
        window.setTimeout(() => {
          resolveCountry().then((cc) => {
            if (cancelled || !cc || cc === 'gb' || phoneEl.value) return
            itiRef.current?.setSelectedCountry(cc)
          })
        }, 2000),
      )
    })

    return () => {
      cancelled = true
      phoneEl.removeEventListener('focus', requestUtils)
      timers.forEach((timer) => window.clearTimeout(timer))
      iti?.destroy()
      itiRef.current = null
    }
  }, [])

  const setField = (name) => (event) => {
    setFields((prev) => ({
      ...prev,
      [name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPhoneError('')
    setStatus(STATUS.idle)

    // Honeypot condition: silently drop submissions from bots.
    if (honeypotRef.current?.value) return

    if (!fields.firstName.trim() || !fields.lastName.trim()) {
      setPhoneError('Please enter your first and last name.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.trim())) {
      setPhoneError('Please enter a valid email address.')
      return
    }
    if (!fields.consent) {
      setPhoneError('Please accept the Privacy Policy and Terms & Conditions to continue.')
      return
    }

    // Phone condition: must be a valid number for the selected country.
    const iti = itiRef.current
    const rawValue = phoneInputRef.current?.value.trim() || ''

    // isValidNumber() throws until the utils are attached, so probe
    // defensively: null = utils still loading.
    const tryValid = () => {
      try {
        return iti.isValidNumber()
      } catch {
        return null
      }
    }

    let valid = iti ? tryValid() : true
    if (valid === null) {
      // Utils still loading - trigger now and wait briefly so we can
      // validate instead of passing a garbage number through.
      requestUtils()
      for (let i = 0; i < 30 && valid === null; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100))
        valid = tryValid()
      }
    }

    let phone = null
    try {
      phone = iti?.getNumber() || null // throws until utils are attached
    } catch {
      phone = null
    }
    phone = phone || rawValue
    if (!phone) {
      setPhoneError('Please enter a valid phone number')
      return
    }
    if (valid === false) {
      setPhoneError('Please enter a valid phone number')
      return
    }

    setStatus(STATUS.loading)
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.firstName.trim(),
          lastName: fields.lastName.trim(),
          email: fields.email.trim(),
          phone,
          offerName: OFFER_NAME,
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      router.push('/thank-you')
    } catch {
      // Endpoint rate-limits to 3 attempts / 5 min per IP.
      setStatus(STATUS.error)
    }
  }

  return (
    <div className="form-card">
      <h2 className="form-card__title">Start Trading In Minutes</h2>
      <p className="form-card__sub">Open your free Swiftbay Koryn account, no commitment required.</p>

      <form className="form" onSubmit={handleSubmit} noValidate>
        {/* Honeypot - hidden from real users, bots fill it and get dropped */}
        <input
          ref={honeypotRef}
          className="hp-field"
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="form__row">
          <div className="form__field">
            <label htmlFor={`${idPrefix}-first`}>First name *</label>
            <input
              id={`${idPrefix}-first`}
              type="text"
              name="first_name"
              placeholder="John"
              autoComplete="given-name"
              value={fields.firstName}
              onChange={setField('firstName')}
              required
            />
          </div>
          <div className="form__field">
            <label htmlFor={`${idPrefix}-last`}>Last name *</label>
            <input
              id={`${idPrefix}-last`}
              type="text"
              name="last_name"
              placeholder="Doe"
              autoComplete="family-name"
              value={fields.lastName}
              onChange={setField('lastName')}
              required
            />
          </div>
        </div>

        <div className="form__field">
          <label htmlFor={`${idPrefix}-email`}>Email address *</label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            placeholder="you@example.com"
            autoComplete="email"
            value={fields.email}
            onChange={setField('email')}
            required
          />
        </div>

        <div className="form__field">
          <label htmlFor={`${idPrefix}-phone`}>Phone number *</label>
          <div className="form__phone">
            <input
              ref={phoneInputRef}
              id={`${idPrefix}-phone`}
              type="tel"
              name="phone"
              placeholder="7911 123456"
              autoComplete="tel"
              aria-label="Phone number"
              required
            />
          </div>
          {phoneError ? (
            <span className="form__error" role="alert">
              {phoneError}
            </span>
          ) : null}
        </div>

        <label className="form__consent">
          <input
            type="checkbox"
            name="consent"
            checked={fields.consent}
            onChange={setField('consent')}
            required
          />
          <span>
            I have read and agree to the <Link href="/privacy-policy">Privacy Policy</Link> and{' '}
            <Link href="/terms-of-use">Terms &amp; Conditions</Link>. *
          </span>
        </label>

        {status === STATUS.error ? (
          <div className="form__error" role="alert">
            Something went wrong. Please try again shortly.
          </div>
        ) : null}

        <button className="btn btn--accent btn--block" type="submit" disabled={status === STATUS.loading}>
          {status === STATUS.loading ? 'Submitting…' : 'Open an account'}
        </button>
        <p className="form__trust">
          <Icon name="lock" size={13} />
          Your data is protected with 256 bit SSL encryption
        </p>
      </form>
    </div>
  )
}
