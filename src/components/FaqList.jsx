'use client'

import { useState } from 'react'
import Icon from './Icon'

/** Accessible accordion for FAQ items. */

export default function FaqList({ items }) {
  const [open, setOpen] = useState(0)

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index
        return (
          <div className={`acc${isOpen ? ' is-open' : ''}`} key={item.question}>
            <button
              type="button"
              className="acc__head"
              aria-expanded={isOpen}
              aria-controls={`acc-panel-${index}`}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.question}</span>
              <Icon name="chevron-down" size={18} />
            </button>
            <div className="acc__body" id={`acc-panel-${index}`} role="region">
              <div className="acc__inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
