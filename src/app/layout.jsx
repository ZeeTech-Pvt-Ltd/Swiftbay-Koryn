import { Sora, Inter, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { JsonLd, orgSchema, webSiteSchema } from '@/lib/seo'
import { SITE } from '@/data/content'
import '@/styles/global.css'

const sora = Sora({ subsets: ['latin'], variable: '--font-sora', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono-var',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Swiftbay Koryn | AI Powered Crypto And Stock Trading',
    template: '%s',
  },
  description:
    'Trade crypto and stocks with AI signals and bank grade security on Swiftbay Koryn. Free to join. Sign up today from $250.',
  keywords: [
    'swiftbay koryn',
    'ai trading',
    'crypto trading',
    'stock trading',
    'trading signals',
    'multi asset trading',
  ],
  applicationName: SITE.name,
  category: 'Trading Platform',
  creator: 'Minahil Tayyab',
  publisher: 'Minahil Tayyab',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE.name,
    title: 'Swiftbay Koryn | AI Powered Crypto And Stock Trading',
    description:
      'Trade crypto and stocks with AI signals and bank grade security on Swiftbay Koryn. Free to join. Sign up today from $250.',
    url: SITE.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swiftbay Koryn | AI Powered Crypto And Stock Trading',
    description:
      'Trade crypto and stocks with AI signals and bank grade security on Swiftbay Koryn. Sign up today.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0b0714',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${jetBrainsMono.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <JsonLd data={orgSchema()} />
        <JsonLd data={webSiteSchema()} />
      </body>
    </html>
  )
}
