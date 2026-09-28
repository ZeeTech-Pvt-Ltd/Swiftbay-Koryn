import SectionHead from '@/components/SectionHead'
import PaymentIcon from '@/components/PaymentIcon'
import { PAYMENTS } from '@/data/content'

export default function Network() {
  return (
    <section className="network section">
      <div className="container">
        <SectionHead
          label="04. Network"
          title="Deposit And Withdraw Your Way"
          lead="Fund your Swiftbay Koryn account with the payment method you already use. Most deposits arrive instantly."
        />
        <ul className="network__payments">
          {PAYMENTS.map((payment) => (
            <li
              className="network__pay"
              key={payment}
              aria-label={payment}
              title={payment}
            >
              <PaymentIcon name={payment} />
            </li>
          ))}
        </ul>
        <ul className="network__stats">
          <li>
            <span className="network__stat-val">140+</span>
            <span className="network__stat-label">Countries served</span>
          </li>
          <li>
            <span className="network__stat-val">20+</span>
            <span className="network__stat-label">Support languages</span>
          </li>
          <li>
            <span className="network__stat-val">24/7</span>
            <span className="network__stat-label">Human support</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
