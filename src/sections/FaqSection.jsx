import Link from 'next/link'
import SectionHead from '@/components/SectionHead'
import Reveal from '@/components/Reveal'
import FaqList from '@/components/FaqList'
import Icon from '@/components/Icon'
import { faqItems } from '@/data/faq'

export default function FaqSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          label="06. Questions"
          title="Frequently Asked Questions"
          lead="The essentials about Swiftbay Koryn: accounts, deposits, security and signals."
        />
        <div className="faq__wrap">
          <Reveal>
            <FaqList items={faqItems.slice(0, 6)} />
          </Reveal>
          <div className="faq__more">
            <Link className="link-arrow" href="/faq">
              View all FAQs
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
