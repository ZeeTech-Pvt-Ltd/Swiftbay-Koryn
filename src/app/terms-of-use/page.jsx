import LegalPage from '@/components/LegalPage'
import { pageMeta } from '@/lib/seo'
import { legalDocs } from '@/data/legal'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn | Terms Of Use And Platform Rules',
  description:
    'The terms of use for the Swiftbay Koryn platform: accounts, deposits, withdrawals, acceptable use and liability. Questions? Contact support.',
  path: '/terms-of-use',
  keywords: ['swiftbay koryn terms', 'swiftbay koryn terms of use'],
})

export default function TermsPage() {
  return <LegalPage doc={legalDocs.terms} />
}
