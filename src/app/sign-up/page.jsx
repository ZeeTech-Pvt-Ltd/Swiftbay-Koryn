import RegistrationForm from '@/components/RegistrationForm'
import { pageMeta } from '@/lib/seo'

export const metadata = pageMeta({
  title: 'Sign Up For Swiftbay Koryn | Open Your Trading Account',
  description:
    'Open your Swiftbay Koryn account in minutes. AI powered market signals, 120+ crypto and stock markets and 24/7 support. Free to join, trade from $250.',
  path: '/sign-up',
})

export default function SignUpPage() {
  return (
    <section className="auth">
      <div className="container">
        <div className="auth__head">
          <h1>Join Swiftbay Koryn</h1>
          <p>One account for crypto and stocks, with AI signals watching the markets 24/7.</p>
        </div>
        <div className="auth__card">
          <RegistrationForm />
        </div>
      </div>
    </section>
  )
}
