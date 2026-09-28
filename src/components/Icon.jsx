/** Inline SVG icon set (stroke style, inherits currentColor). */

const PATHS = {
  'arrow-right': (
    <>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5L19.5 7" />,
  'chevron-down': <path d="M6 9l6 6 6-6" />,
  'chevron-left': <path d="M15 6l-6 6 6 6" />,
  'chevron-right': <path d="M9 6l6 6-6 6" />,
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7.5l9 6 9-6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="15" r="4.5" />
      <path d="M11.5 11.5L20 3" />
      <path d="M16.5 6.5l3 3" />
    </>
  ),
  snow: (
    <>
      <path d="M12 3v18" />
      <path d="M3.8 7.5l16.4 9" />
      <path d="M20.2 7.5l-16.4 9" />
    </>
  ),
  badge: (
    <>
      <path d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z" />
      <path d="M9.3 12l2 2 3.5-3.8" />
    </>
  ),
  bank: (
    <>
      <path d="M3 9.5L12 4l9 5.5" />
      <path d="M4.5 9.5V18" />
      <path d="M9 9.5V18" />
      <path d="M13.5 9.5V18" />
      <path d="M18 9.5V18" />
      <path d="M3 18h18" />
      <path d="M3.5 21h17" />
    </>
  ),
  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="10.5" y="10.5" width="3" height="3" rx="0.5" />
      <path d="M12 3v2" />
      <path d="M12 19v2" />
      <path d="M3 12h2" />
      <path d="M19 12h2" />
      <path d="M6.2 6.2l1.4 1.4" />
      <path d="M16.4 16.4l1.4 1.4" />
      <path d="M17.8 6.2l-1.4 1.4" />
      <path d="M7.6 16.4l-1.4 1.4" />
    </>
  ),
  chart: (
    <>
      <path d="M5 20v-6" />
      <path d="M11 20V8" />
      <path d="M17 20v-10" />
      <path d="M3 20h18" />
    </>
  ),
  signal: (
    <>
      <path d="M5 12.5a7.5 7.5 0 0 1 14 0" />
      <path d="M8 15.5a4 4 0 0 1 8 0" />
      <path d="M12 19h.01" />
    </>
  ),
  shield: <path d="M12 3l7 3v5.5c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V6l7-3z" />,
  bolt: <path d="M13.2 2.8L5.5 13.5h5.4l-1.1 7.7 7.7-10.7h-5.4l1.1-7.7z" />,
  headset: (
    <>
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
}

export default function Icon({ name, size = 20, className = '' }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name] || null}
    </svg>
  )
}
