'use client'

import { useEffect, useState } from 'react'
import SectionHead from '@/components/SectionHead'
import Reveal from '@/components/Reveal'
import Icon from '@/components/Icon'
import { testimonials } from '@/data/testimonials'

/**
 * Testimonials slider: 3 cards per view on desktop, 2 on tablet,
 * 1 on mobile. Auto-advances every 5s and pauses on hover.
 */

export default function Testimonials() {
  const [perView, setPerView] = useState(3)
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const maxIndex = Math.max(0, testimonials.length - perView)
  const current = Math.min(index, maxIndex)

  // Responsive cards-per-view, matching the CSS breakpoints.
  useEffect(() => {
    const small = window.matchMedia('(max-width: 639px)')
    const medium = window.matchMedia('(min-width: 640px) and (max-width: 1079px)')
    const update = () => setPerView(small.matches ? 1 : medium.matches ? 2 : 3)
    small.addEventListener('change', update)
    medium.addEventListener('change', update)
    requestAnimationFrame(update)
    return () => {
      small.removeEventListener('change', update)
      medium.removeEventListener('change', update)
    }
  }, [])

  // Autoplay - disabled for reduced-motion users and while hovered.
  useEffect(() => {
    if (paused || maxIndex <= 0) return undefined
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined

    const id = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(id)
  }, [paused, maxIndex])

  const prev = () => setIndex((value) => Math.max(0, value - 1))
  const next = () => setIndex((value) => Math.min(maxIndex, value + 1))

  return (
    <section className="section">
      <div className="container">
        <SectionHead
          label="03. Traders"
          title="Trusted By Traders In 140+ Countries"
          lead="From new investors to experienced traders, here’s what Swiftbay Koryn users say about the platform."
        />
        <Reveal>
          <div
            className="testi-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="testi-slider__viewport">
              <div
                className="testi-slider__track"
                style={{ transform: `translateX(-${current * (100 / perView)}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div className="testi-slider__item" key={testimonial.name}>
                    <article className="testi-card">
                      <div className="testi-card__stars" aria-label="Rated 5 out of 5 stars">
                        ★★★★★
                      </div>
                      <p className="testi-card__text">“{testimonial.text}”</p>
                      <footer className="testi-card__foot">
                        <span className="testi-card__avatar" aria-hidden="true">
                          {testimonial.initials}
                        </span>
                        <div>
                          <span className="testi-card__name">{testimonial.name}</span>
                          <span className="testi-card__loc">{testimonial.location}</span>
                        </div>
                      </footer>
                    </article>
                  </div>
                ))}
              </div>
            </div>

            <div className="testi-slider__controls">
              <button
                type="button"
                className="testi-slider__arrow"
                onClick={prev}
                disabled={current === 0}
                aria-label="Previous testimonials"
              >
                <Icon name="chevron-left" size={18} />
              </button>
              <div className="testi-slider__dots" role="tablist" aria-label="Testimonial pages">
                {Array.from({ length: maxIndex + 1 }, (_, dot) => (
                  <button
                    type="button"
                    key={dot}
                    className={`testi-slider__dot${dot === current ? ' is-active' : ''}`}
                    onClick={() => setIndex(dot)}
                    aria-label={`Go to testimonials ${dot + 1}`}
                    aria-current={dot === current ? 'true' : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                className="testi-slider__arrow"
                onClick={next}
                disabled={current === maxIndex}
                aria-label="Next testimonials"
              >
                <Icon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
