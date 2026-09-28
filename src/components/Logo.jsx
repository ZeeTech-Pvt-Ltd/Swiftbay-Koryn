/** Swiftbay Koryn monogram — gradient "S" stroke on a dark violet tile. */

export default function Logo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" aria-hidden="true">
      <defs>
        <linearGradient id="sk-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#e879f9" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="10"
        fill="#150f26"
        stroke="rgba(167, 139, 250, 0.3)"
      />
      <path
        d="M9.5 8.5 C15 8.5 23 6.5 25 12 C26.2 15.8 22.8 18.4 19 19.4 C14.2 20.4 11.6 22.4 11.2 24.8 C10.9 28.2 16.2 29.8 21.2 29.6 C24.6 29.4 26.6 28.2 26.8 26.4"
        fill="none"
        stroke="url(#sk-grad)"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
