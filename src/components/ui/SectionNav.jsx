import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

/**
 * Sticky scroll-spy rail for long content pages. It watches the rendered
 * block headings and keeps the reader oriented without them having to ask —
 * the page volunteers where they are and what is still ahead.
 * Hidden below lg, where the page is a single narrow column anyway.
 */
export default function SectionNav({ items }) {
  const [active, setActive] = useState(items[0]?.id)

  useEffect(() => {
    if (!items.length) return
    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the entry nearest the top of the reading area.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [items])

  if (items.length < 2) return null

  return (
    <nav aria-label="On this page" className="sticky top-[calc(var(--header-h)+2.5rem)]">
      <p className="eyebrow mb-5">On this page</p>
      <ul className="space-y-1 border-l border-line">
        {items.map((item) => {
          const current = active === item.id
          return (
            <li key={item.id} className="relative">
              {current && (
                <motion.span
                  layoutId="section-nav-marker"
                  className="absolute -left-px top-0 h-full w-[2px] bg-gold-500"
                  aria-hidden="true"
                />
              )}
              <a
                href={`#${item.id}`}
                aria-current={current ? 'true' : undefined}
                className={`block py-2 pl-4 text-sm transition-colors duration-300 ${
                  current
                    ? 'font-medium text-brand-900'
                    : 'text-muted hover:text-brand-700'
                }`}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
