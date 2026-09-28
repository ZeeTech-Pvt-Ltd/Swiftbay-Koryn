import LegalPage from '@/components/LegalPage'
import { pageMeta } from '@/lib/seo'
import { legalDocs } from '@/data/legal'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn | Cookie Policy And Tracking Technologies',
  description:
    'How Swiftbay Koryn uses cookies and similar technologies across the platform, and how to manage them. Manage your cookies today.',
  path: '/cookie-policy',
  keywords: ['swiftbay koryn cookies', 'swiftbay koryn cookie policy'],
})

export default function CookiesPage() {
  return <LegalPage doc={legalDocs.cookies} />
}
