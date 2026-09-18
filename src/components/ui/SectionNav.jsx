import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE } from '@/lib/motion'

/**
 * Sticky progress rail for long content pages. It watches the rendered block
 * headings and keeps the reader oriented without them having to ask — the
 * page volunteers where they are and what is still ahead.
 *
 * The gold line fills as the reader descends, so the rail answers "how much
 * of this is behind me" as well as "which heading am I in" — a link list only
 * ever answered the second. Hidden below lg, where the page is a single
 * narrow column anyway.
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

  const activeIndex = Math.max(
    0,
    items.findIndex((item) => item.id === active),
  )
  const fill = ((activeIndex + 1) / items.length) * 100

  return (
    <nav aria-label="On this page" className="sticky top-[calc(var(--header-h)+2.5rem)]">
      <p className="eyebrow mb-5">On this page</p>
      <div className="relative pl-4">
        <div className="absolute inset-y-0 left-0 w-px bg-line" aria-hidden="true" />
        <motion.div
          aria-hidden="true"
          className="absolute left-0 top-0 w-[2px] rounded-full bg-gold-500"
          initial={false}
          animate={{ height: `${fill}%` }}
          transition={{ duration: 0.45, ease: EASE }}
        />
        <ul className="space-y-1">
          {items.map((item) => {
            const current = active === item.id
            return (
              <li key={item.id} className="relative">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[7px] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-gold-500 transition-transform duration-300 ease-smooth ${
                    current ? 'scale-100' : 'scale-0'
                  }`}
                />
                <a
                  href={`#${item.id}`}
                  aria-current={current ? 'true' : undefined}
                  className={`block py-2 text-sm transition-colors duration-300 ${
                    current ? 'font-medium text-brand-900' : 'text-muted hover:text-brand-700'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
