import SectionHead from '@/components/SectionHead'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import { advantages } from '@/data/features'

export default function Advantages() {
  return (
    <section className="section section--surface">
      <div className="container">
        <SectionHead
          label="02. Platform"
          title="Everything You Need To Trade With Confidence"
          lead="Swiftbay Koryn makes market work simpler, whether it’s your first trade or your thousandth."
        />
        <div className="adv__grid">
          {advantages.map((advantage, index) => (
            <Reveal key={advantage.title} delay={(index % 3) * 90}>
              <article className="adv-card">
                <span className="adv-card__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="adv-card__icon">
                  <Icon name={advantage.icon} size={24} />
                </span>
                <h3 className="adv-card__title">{advantage.title}</h3>
                <p className="adv-card__text">{advantage.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
