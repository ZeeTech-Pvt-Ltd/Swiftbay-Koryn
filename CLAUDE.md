@AGENTS.md

# Swiftbay Koryn — Project Notes

Marketing/trading website for swiftbaykoryn.com, one of a family of similar trading
platform sites the user builds (Gem Wealthholm, Binnacrest AI, Rendaven — see
`C:\Users\samee\Desktop\` for reference projects).

## Stack

- **Next.js 16.3 App Router, React 19, plain JavaScript** (previous sibling projects are
  Vite SPAs — this one is Next.js, so SEO is server-side: metadata API, sitemap, JSON-LD).
- **No Tailwind.** The design system is hand-rolled CSS in [global.css](src/styles/global.css)
  — a "Midnight Violet" dark theme (violet-black `#0b0714`, violet `#a78bfa` / fuchsia
  `#e879f9` gradient, Sora/Inter/JetBrains Mono). All colors are `:root` tokens — a full
  theme swap means editing the token block plus the gradient stops in
  [Logo.jsx](src/components/Logo.jsx), [icon.svg](src/app/icon.svg) and
  [opengraph-image.jsx](src/app/opengraph-image.jsx). Previous projects (GW = light lime
  editorial, Binnacrest = navy + gold) each got their own distinct theme; new sibling
  sites should too.
- Site structure mirrors the previous projects: hero with registration form, live ticker,
  stats band, live rates table, quote, testimonials, payments network, security/legitimacy,
  FAQ, final CTA + About / How It Works / Markets / Guides / Contact / legal pages /
  sign-up / login / thank-you.

## Conventions

- All copy lives in [src/data/](src/data/), one concern per file. Sections/pages never
  hardcode text.
- Per-page SEO via [lib/seo.js](src/lib/seo.js) `pageMeta()`; keyword "Swiftbay Koryn"
  must stay in every title/description/H1. `thank-you` is noindex.
- Market prices are **demo data with a simulated client tick** (`MarketTable.jsx`) —
  labelled as indicative. Forms simulate submission; swap in real APIs when needed.
- Next 16 notes: `@AGENTS.md` warns APIs differ from older Next — verify against
  `node_modules/next/dist/docs/` when unsure. ESLint enforces the new
  `react-hooks/set-state-in-effect` rule (no sync setState in effect bodies).

## QA

- `npm run build` is the first check — all routes are static.
- Port 3000 is often taken by another project's server on this machine; use
  `npx next start -p 3005` for local verification.
- Layout QA pattern (CDP, no deps): `C:/tmp/sk-cdp-check.mjs <url>` checks horizontal
  overflow, H1, header/footer, burger/nav switching at 1440px and 390px.
- The user cares about polish: contrast, overflow, mobile breakpoints (their previous
  projects had extensive screenshot/Lighthouse QA scripts in `C:/tmp`).
