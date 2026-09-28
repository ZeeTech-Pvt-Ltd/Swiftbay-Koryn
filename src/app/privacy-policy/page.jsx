import LegalPage from '@/components/LegalPage'
import { pageMeta } from '@/lib/seo'
import { legalDocs } from '@/data/legal'

export const metadata = pageMeta({
  title: 'Swiftbay Koryn | Privacy Policy And Data Protection',
  description:
    'How Swiftbay Koryn collects, uses and protects your personal information, and the privacy rights you have. Contact support with questions.',
  path: '/privacy-policy',
  keywords: ['swiftbay koryn privacy', 'swiftbay koryn privacy policy', 'data protection'],
})

export default function PrivacyPage() {
  return <LegalPage doc={legalDocs.privacy} />
}
