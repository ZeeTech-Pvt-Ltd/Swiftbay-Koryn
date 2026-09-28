import Link from 'next/link'
import SectionHead from '@/components/SectionHead'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import { legitimacyPoints, securityLayers } from '@/data/features'

export default function Legitimacy() {
  return (
    <section className="section section--deep">
      <div className="container legitimacy__grid">
        <div className="legitimacy__main">
          <SectionHead
            align="left"
            label="05. Security"
            title="Built To A Banking Standard"
            lead="Your capital and your data deserve institutional grade protection. Every layer of Swiftbay Koryn is built around that principle."
          />
          <ul className="legitimacy__list">
            {legitimacyPoints.map((point) => (
              <li key={point}>
                <Icon name="check" size={17} />
                {point}
              </li>
            ))}
          </ul>
          <Link className="btn btn--ghost" href="/risk-disclosure">
            Read the risk disclosure
          </Link>
        </div>
        <Reveal>
          <div className="legitimacy__panel">
            {securityLayers.map((layer) => (
              <div className="legitimacy__row" key={layer.title}>
                <span className="legitimacy__row-icon">
                  <Icon name={layer.icon} size={20} />
                </span>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
