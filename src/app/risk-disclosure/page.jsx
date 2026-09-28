import LegalPage from '@/components/LegalPage'
import { pageMeta } from '@/lib/seo'
import { legalDocs } from '@/data/legal'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn | Risk Disclosure And Trading Risks',
  description:
    'The trading risks to understand before using Swiftbay Koryn: market volatility, limits of AI tools, liquidity and technology risks. Read before you trade.',
  path: '/risk-disclosure',
})

export default function RiskPage() {
  return <LegalPage doc={legalDocs.risk} />
}
