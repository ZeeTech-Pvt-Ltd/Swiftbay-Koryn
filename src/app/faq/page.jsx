import Link from 'next/link'
import Reveal from '@/components/Reveal'
import FaqList from '@/components/FaqList'
import { pageMeta, JsonLd, faqSchema } from '@/lib/seo'
import { faqItems } from '@/data/faq'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn FAQs | Frequently Asked Questions',
  description:
    'Answers to common questions about Swiftbay Koryn: the AI engine, deposits, security, withdrawals and fees. Get started today.',
  path: '/faq',
  keywords: ['swiftbay koryn faq', 'trading faq', 'swiftbay koryn minimum deposit', 'swiftbay koryn withdrawals'],
})

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: FAQ</p>
          <h1 className="page-hero__title">Frequently Asked Questions</h1>
          <p className="page-hero__lead">
            Everything traders ask about Swiftbay Koryn: the engine, accounts, money movement
            and security, answered in plain language.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq__wrap">
            <Reveal>
              <FaqList items={faqItems} />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <div className="final-cta__card">
            <span className="section-label">Still Have Questions</span>
            <h2 className="final-cta__title">Talk To A Real Person, Any Time</h2>
            <p className="final-cta__lead">
              Our support team is available 24/7 in 20+ languages. We usually reply within the
              hour.
            </p>
            <div className="final-cta__actions">
              <Link className="btn btn--accent btn--lg" href="/contact">
                Contact support
              </Link>
              <Link className="link-arrow" href="/sign-up">
                Create your account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={faqSchema(faqItems)} />
    </>
  )
}
