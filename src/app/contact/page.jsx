import Icon from '@/components/Icon'
import RegistrationForm from '@/components/RegistrationForm'
import { pageMeta } from '@/lib/seo'
import { SITE } from '@/data/content'

export const metadata = pageMeta({
  title: 'Contact Swiftbay Koryn | Support And Assistance',
  description:
    'Get in touch with the Swiftbay Koryn team. Questions about the platform, your account or partnerships? We are available 24/7. Contact us today.',
  path: '/contact',
})

const CONTACT_CARDS = [
  {
    icon: 'mail',
    title: 'Email us',
    text: 'support@swiftbaykoryn.com',
    href: `mailto:${SITE.email}`,
  },
  {
    icon: 'headset',
    title: 'Support hours',
    text: '24 hours a day, 7 days a week, in 20+ languages',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Swiftbay Koryn: Contact</p>
          <h1 className="page-hero__title">Contact Swiftbay Koryn</h1>
          <p className="page-hero__lead">
            Questions about the platform, your account or partnerships? The team is available
            around the clock and happy to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact__grid">
          <div className="contact__cards">
            {CONTACT_CARDS.map((card) => (
              <div className="contact__card" key={card.title}>
                <span className="contact__card-icon">
                  <Icon name={card.icon} size={20} />
                </span>
                <div>
                  <h2>{card.title}</h2>
                  {card.href ? (
                    <p>
                      <a href={card.href}>{card.text}</a>
                    </p>
                  ) : (
                    <p>{card.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <RegistrationForm />
        </div>
      </section>
    </>
  )
}
