import Hero from '@/sections/Hero'
import LiveTicker from '@/sections/LiveTicker'
import StatsBand from '@/sections/StatsBand'
import LiveRates from '@/sections/LiveRates'
import Testimonials from '@/sections/Testimonials'
import Advantages from '@/sections/Advantages'
import Network from '@/sections/Network'
import Legitimacy from '@/sections/Legitimacy'
import FaqSection from '@/sections/FaqSection'
import FinalCta from '@/sections/FinalCta'
import { pageMeta, JsonLd, faqSchema } from '@/lib/seo'
import { faqItems } from '@/data/faq'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn | AI Powered Crypto And Stock Trading',
  description:
    'Trade crypto and stocks with AI signals and bank grade security on Swiftbay Koryn. Free to join. Sign up today from $250.',
  path: '/',
})

export default function Home() {
  return (
    <>
      <Hero />
      <LiveTicker />
      <StatsBand />
      <LiveRates />
      <Testimonials />
      <Advantages />
      <Network />
      <Legitimacy />
      <FaqSection />
      <FinalCta />
      <JsonLd data={faqSchema(faqItems.slice(0, 6))} />
    </>
  )
}
