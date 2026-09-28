import CountUp from '@/components/CountUp'
import Reveal from '@/components/Reveal'
import { statsBand } from '@/data/features'

export default function StatsBand() {
  return (
    <section className="statsband">
      <div className="container">
        <div className="statsband__grid">
          {statsBand.map((stat) => (
            <div className="statsband__item" key={stat.label}>
              <span className="statsband__value">
                <CountUp
                  value={stat.value}
                  decimals={stat.decimals || 0}
                  suffix={stat.suffix || ''}
                />
              </span>
              <span className="statsband__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
