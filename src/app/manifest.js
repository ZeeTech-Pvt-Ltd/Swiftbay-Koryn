import { SITE } from '@/data/content'

export default function manifest() {
  return {
    name: SITE.name,
    short_name: 'Swiftbay',
    description: 'AI powered trading for crypto and stocks.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0b0714',
    theme_color: '#0b0714',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
  }
}
