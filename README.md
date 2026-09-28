# Swiftbay Koryn — Trading Platform Website

Marketing website for **Swiftbay Koryn**, an AI-powered multi-asset trading platform
(crypto + stocks), built with **Next.js 16 (App Router)**.

Live site: https://swiftbaykoryn.com

## Stack

- Next.js 16.3 (App Router, Turbopack), React 19 — plain JavaScript, no TypeScript
- Hand-rolled CSS design system (no Tailwind) — "Midnight Violet" theme: violet-black
  surfaces, violet→fuchsia gradient accents, Sora + Inter + JetBrains Mono via `next/font`
- Fully static output — every route is prerendered at build time

## Structure

```
src/
  app/                    # App Router routes (each page owns its metadata + JSON-LD)
    page.jsx              # Home: Hero → Ticker → Stats → LiveRates → Quote →
                          # Testimonials → Advantages → Network → Legitimacy → FAQ → CTA
    markets/ about/ how-it-works/ guides/[slug]/ faq/ contact/
    sign-up/ login/ thank-you/
    terms-of-use/ privacy-policy/ risk-disclosure/ cookie-policy/
    sitemap.js  robots.js  not-found.jsx
    icon.svg  opengraph-image.jsx   # generated share image (next/og)
  components/             # Header, Footer, Logo, forms, MarketTable, Reveal, CountUp…
  sections/               # Home page sections (one file each)
  data/                   # All content: markets, features, faq, testimonials, guides, legal
  lib/seo.js              # pageMeta() helper, JSON-LD builders (Org, WebSite, FAQ, Article)
  styles/global.css       # The entire design system (tokens → components → responsive)
```

## Conventions

- SEO keyword **"Swiftbay Koryn"** appears in every page title, description and H1.
  Per-page metadata comes from `lib/seo.js` → `pageMeta()`; canonical URLs use
  `metadataBase` set once in the root layout.
- Client components are marked `'use client'`; everything else stays server-rendered.
- All copy/content lives in `src/data/` — sections and pages never hardcode text.
- `thank-you` and `not-found` are `noindex` via metadata + `robots.js`.
- Market prices are **indicative demo data** with a simulated client-side tick
  (see `MarketTable.jsx`); swap in a real feed there and in the forms when wiring a backend.

## Commands

```bash
npm run dev      # dev server (default port 3000)
npm run build    # production build (verifies all routes compile + prerender)
npm run start    # serve the production build
npm run lint     # eslint (next/core-web-vitals + react-hooks)
```

## Deployment

`npm run build && npm run start` — works on Vercel as-is (no env vars required).
