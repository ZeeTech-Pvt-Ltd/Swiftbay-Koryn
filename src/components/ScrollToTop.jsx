'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/** Resets scroll to the top on every route change so pages
    always open at their hero section. */

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
