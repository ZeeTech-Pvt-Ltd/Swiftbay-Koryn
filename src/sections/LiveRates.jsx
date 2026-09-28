import SectionHead from '@/components/SectionHead'
import Reveal from '@/components/Reveal'
import MarketTable from '@/components/MarketTable'

export default function LiveRates() {
  return (
    <section className="section" id="markets">
      <div className="container">
        <SectionHead
          label="01. Markets"
          title="Live Rates Across Crypto And Stocks"
          lead="Real-time indicative pricing for the most traded digital and listed assets, refreshed every few seconds. Pick a tab and follow the trend."
        />
        <Reveal>
          <MarketTable />
        </Reveal>
      </div>
    </section>
  )
}
