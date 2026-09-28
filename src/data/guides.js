/**
 * Guide articles. Each entry maps to /guides/[slug].
 * Sections are rendered as h2 + paragraphs (and optional lists).
 */

export const guides = [
  {
    slug: 'getting-started-with-swiftbay-koryn',
    title: 'Getting Started With Swiftbay Koryn',
    seoTitle: 'Getting Started With Swiftbay Koryn | Step By Step Guide',
    seoDescription:
      'A step by step Swiftbay Koryn guide: create your account, verify your identity, fund your first deposit and place your first trade. Start today.',
    category: 'Beginner',
    minutes: 6,
    date: '2026-09-18',
    excerpt:
      'Everything you need to go from sign up to your first trade in one sitting, with each step explained in plain language.',
    sections: [
      {
        heading: 'Create Your Account',
        paragraphs: [
          'Getting started with Swiftbay Koryn takes only a few minutes. Click Sign Up, then enter your first name, last name, email address and phone number. Choose a strong password and confirm that you have read the Terms of Use and Risk Disclosure.',
          'Next, verify your email address by clicking the link we send you. After that, the platform guides you through digital identity verification, which is required by international KYC rules. Most checks finish automatically within minutes.',
        ],
      },
      {
        heading: 'Fund Your First Deposit',
        paragraphs: [
          'Once your account is verified, open the deposit section of your dashboard. The minimum first deposit is $250, and you can pay by card, bank transfer, Skrill, Neteller or directly in USDT or USDC.',
          'Card and crypto deposits usually arrive instantly. Bank transfers can take one to two business days depending on your bank. Your funds appear in your Swiftbay Koryn balance the moment they clear.',
        ],
      },
      {
        heading: 'Explore The Markets',
        paragraphs: [
          'Open the Markets page to browse 120+ crypto and stock markets. You can switch between the Crypto and Stocks tabs, check live prices and 24 hour changes, and follow the sparkline trend for any asset.',
          'New to the platform? Start with the assets you know. Many new traders begin with Bitcoin or Ethereum on the crypto side and familiar names like Apple or NVIDIA on the stock side.',
        ],
      },
      {
        heading: 'Place Your First Trade',
        paragraphs: [
          'Pick an asset, choose the amount you want to trade, and review the order before you confirm. Stock trades are commission free, and crypto trades use a clear spread that is shown before you confirm.',
          'You can also switch on AI signals from your dashboard. The Swiftbay Koryn engine monitors the markets around the clock and highlights potential entry and exit points you can choose to follow or ignore.',
        ],
        list: [
          'Always start with an amount you can afford to lose',
          'Review the risk disclosure before trading',
          'Watch the AI signals for a few days to learn the rhythm',
          'Keep two factor authentication enabled at all times',
        ],
      },
    ],
  },
  {
    slug: 'how-the-swiftbay-koryn-ai-engine-works',
    title: 'How The Swiftbay Koryn AI Engine Works',
    seoTitle: 'How The Swiftbay Koryn AI Engine Works | Inside The Platform',
    seoDescription:
      'How the Swiftbay Koryn AI engine analyses 120+ crypto and stock markets, what the signals mean, and how to use them responsibly. Try it today.',
    category: 'Platform',
    minutes: 7,
    date: '2026-09-12',
    excerpt:
      'A plain language look at how the platform turns market data into trading signals, and how to use those signals without over trusting them.',
    sections: [
      {
        heading: 'What The Engine Actually Does',
        paragraphs: [
          'The Swiftbay Koryn engine reads price data, volume, volatility and momentum from 120+ crypto and stock markets without stopping. Its models look for patterns worth your attention: unusual accumulation, breakout setups, momentum shifts and exhaustion points.',
          'When a pattern crosses a confidence threshold, the engine publishes a signal with a suggested direction, an entry zone and a risk note. Signals reach you in real time, usually in under half a second.',
        ],
      },
      {
        heading: 'Reading A Signal',
        paragraphs: [
          'Every signal card shows the asset, the direction (long or short), the entry zone, and a confidence score from 1 to 10. A higher score simply means the pattern matched historical examples more closely. It is not a guarantee.',
          'You can act on a signal yourself, or set the platform to only notify you. If you are new, watch signals for a few days first and see how the market reacts before you put real money behind them.',
        ],
      },
      {
        heading: 'What The Engine Is Not',
        paragraphs: [
          'No system can predict markets with certainty. The engine is a decision support tool. It saves you hours of scanning and helps you react faster, but every trade still carries risk and losing trades are a normal part of trading.',
          'That is why Swiftbay Koryn pairs every signal with risk guidance, and why we encourage position sizes you are comfortable with. Signals inform your decisions. They do not make them for you.',
        ],
        list: [
          'Signals come from historical patterns, not certainties',
          'Always set an exit plan before entering any trade',
          'Spread your money across assets instead of betting on one signal',
          'Never trade with money you cannot afford to lose',
        ],
      },
    ],
  },
  {
    slug: 'swiftbay-koryn-deposits-and-withdrawals',
    title: 'Swiftbay Koryn Deposits And Withdrawals Explained',
    seoTitle: 'Swiftbay Koryn Deposits And Withdrawals Explained',
    seoDescription:
      'How deposits and withdrawals work on Swiftbay Koryn: payment methods, processing times, minimums and how to withdraw safely. Get started today.',
    category: 'Account',
    minutes: 5,
    date: '2026-09-05',
    excerpt:
      'The complete reference for moving money in and out of your Swiftbay Koryn account, including processing times for every method.',
    sections: [
      {
        heading: 'Deposit Methods',
        paragraphs: [
          'Swiftbay Koryn supports debit and credit cards (Visa, Mastercard), bank transfer, Skrill, Neteller and crypto deposits in USDT and USDC. The minimum first deposit is $250 across all methods.',
          'Card and crypto deposits usually arrive instantly. Skrill and Neteller typically land within minutes, while bank transfers take one to two business days depending on your bank.',
        ],
      },
      {
        heading: 'How To Withdraw',
        paragraphs: [
          'To withdraw, open the withdrawal screen in your dashboard, enter the amount, choose your payout method and confirm with two factor authentication. For security, payouts go back to the method you deposited with where possible.',
          'Most withdrawal requests are processed within 24 hours. Bank payouts then depend on your bank, while crypto and ewallet payouts usually arrive within minutes of approval.',
        ],
      },
      {
        heading: 'Fees And Limits',
        paragraphs: [
          'Swiftbay Koryn does not charge withdrawal fees on standard payouts, and there are no inactivity fees. Some banks or card issuers may apply their own charges on their side, which we cannot control.',
          'Minimum withdrawal amounts depend on the method and are shown on the withdrawal screen before you confirm. Large withdrawals may take a little longer while our compliance team completes standard checks.',
        ],
        list: [
          'Verify your identity before your first withdrawal',
          'Keep two factor authentication enabled',
          'Withdraw to the same method you deposited with',
          'Contact support for any payout questions',
        ],
      },
    ],
  },
  {
    slug: 'swiftbay-koryn-platform-review',
    title: 'Swiftbay Koryn Platform Review: Crypto And Stocks',
    seoTitle: 'Swiftbay Koryn Review | AI Trading For Crypto And Stocks',
    seoDescription:
      'An honest Swiftbay Koryn review: what the platform offers for crypto and stock traders, its AI signals, security, fees, and who it suits. Read it now.',
    category: 'Review',
    minutes: 8,
    date: '2026-08-28',
    excerpt:
      'What Swiftbay Koryn does well, where it is limited, and whether the platform is the right fit for the way you trade.',
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Swiftbay Koryn is an AI powered platform that combines crypto and stock trading in one account. It suits beginners, through signals and guided onboarding, as well as experienced traders, through fast execution and a clean order flow.',
          'The headline feature is the market intelligence engine, which scans 120+ markets around the clock and produces trading signals with entry zones and confidence scores.',
        ],
      },
      {
        heading: 'What Stands Out',
        paragraphs: [
          'Having crypto and stocks in one account is genuinely convenient, and execution is fast even when markets get choppy. The fee structure is clear: zero commission on stocks and a visible spread on crypto.',
          'Security is above the industry average, with required two factor authentication, 98% cold storage and segregated client funds. Support is reachable around the clock and answered our test questions within the hour.',
        ],
      },
      {
        heading: 'What To Watch',
        paragraphs: [
          'The minimum first deposit of $250 may be a step up for complete beginners, and the AI signals should be treated as decision support rather than a money printer. Like every trading platform, Swiftbay Koryn cannot remove the market risk itself.',
          'Traders who want deep institutional analytics may find the charting lighter than dedicated professional terminals. It still covers everything most retail traders use daily.',
        ],
        list: [
          'Best for: traders who want crypto and stocks in one place',
          'Best for: beginners who will use signals as a learning aid',
          'Less ideal for: those seeking advanced institutional charting',
          'Remember: all trading carries risk of loss',
        ],
      },
    ],
  },
  {
    slug: 'trading-stocks-with-swiftbay-koryn',
    title: 'Trading Stocks With Swiftbay Koryn',
    seoTitle: 'Swiftbay Koryn Stock Trading | Zero Commission Guide',
    seoDescription:
      'How stock trading works on Swiftbay Koryn: available US stocks, zero commission structure, market hours and AI signals. Start trading today.',
    category: 'Stocks',
    minutes: 6,
    date: '2026-08-21',
    excerpt:
      'How the stock side of Swiftbay Koryn works, which names you can trade, when, and how AI signals apply to equities.',
    sections: [
      {
        heading: 'Which Stocks Can You Trade',
        paragraphs: [
          'Swiftbay Koryn offers the most liquid US listed stocks, including Apple, Microsoft, NVIDIA, Tesla, Amazon, Alphabet, Meta, JPMorgan, Visa and Netflix. The full list sits on the Markets page under the Stocks tab.',
          'Focusing on liquid names means tighter spreads and instant fills, which matters most when you are acting on fast signals.',
        ],
      },
      {
        heading: 'Commission Structure',
        paragraphs: [
          'Stock trades on Swiftbay Koryn are commission free. There are no monthly platform fees, no inactivity fees and no hidden charges. The price you see on the order screen is the price you trade at.',
          'The platform earns from the spread on crypto markets and from premium analytics add ons, which keeps the core stock experience free at every account level.',
        ],
      },
      {
        heading: 'Using AI Signals On Stocks',
        paragraphs: [
          'The engine applies the same momentum and volatility analysis to stocks that it applies to crypto, with signals delivered during and around US market hours. Signals on stocks tend to be shorter range, and the engine flags earnings weeks as higher risk periods.',
          'A practical approach many traders use: follow signals on one or two familiar stocks while you learn, then broaden your watchlist as your confidence grows.',
        ],
        list: [
          'US market hours apply to stock trading',
          'Earnings announcements can cause sharp moves',
          'Zero commission means your only cost is market risk',
          'Start with liquid names you already know',
        ],
      },
    ],
  },
  {
    slug: 'swiftbay-koryn-security-and-account-protection',
    title: 'Swiftbay Koryn Security And Account Protection',
    seoTitle: 'Swiftbay Koryn Security | How We Protect Your Funds',
    seoDescription:
      'How Swiftbay Koryn protects your funds: 256 bit SSL, two factor auth and cold storage. Learn to secure your login today.',
    category: 'Security',
    minutes: 5,
    date: '2026-08-14',
    excerpt:
      'The security layers protecting your Swiftbay Koryn account, plus the simple steps you can take to make your own login hard to crack.',
    sections: [
      {
        heading: 'Platform Side Protections',
        paragraphs: [
          'All traffic to Swiftbay Koryn is encrypted with 256 bit SSL. Logins and withdrawals require two factor authentication, and 98% of digital assets are held in offline cold storage with several signatures required, spread across secure vaults.',
          'Client funds sit in segregated accounts with tier 1 banking partners, and every account passes required KYC and AML verification in line with international standards.',
        ],
      },
      {
        heading: 'What You Can Do',
        paragraphs: [
          'Your own habits are the strongest security layer. Use a unique password that you do not reuse anywhere else, turn on two factor authentication with an authenticator app rather than SMS, and never share verification codes with anyone.',
          'Check the address bar before logging in. The only official domain is swiftbaykoryn.com. Be suspicious of anyone claiming to be support and asking for your password or codes. Real support will never ask for them.',
        ],
        list: [
          'Use a unique, long password',
          'Turn on an authenticator app for two factor auth',
          'Always type swiftbaykoryn.com directly into your browser',
          'Never share verification codes with anyone',
          'Report suspicious messages to support',
        ],
      },
    ],
  },
]

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug) || null
}
