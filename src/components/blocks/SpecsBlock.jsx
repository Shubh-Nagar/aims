import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/motion'

/**
 * Key/value disclosure rows. Regulatory pages are long lists of "field:
 * value" — a definition list keeps them scannable, and each row can carry a
 * link where the value is a document or an external register.
 */
export default function SpecsBlock({ items = [] }) {
  return (
    <motion.dl
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger(0.03)}
      className="mt-6 overflow-hidden rounded-2xl bg-surface ring-1 ring-line"
    >
      {items.map((item, i) => (
        <motion.div
          key={item.label}
          variants={fadeUp}
          className={`grid gap-1 px-5 py-4 transition-colors duration-300 hover:bg-gold-100/40 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6 sm:px-7 ${
            i ? 'border-t border-line' : ''
          } ${i % 2 ? 'bg-paper/50' : ''}`}
        >
          <dt className="text-sm font-medium text-brand-900">{item.label}</dt>
          <dd className="text-sm text-muted">
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 text-brand-700 underline decoration-gold-400 underline-offset-4 transition-colors hover:text-gold-700"
              >
                {item.value}
                <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
              </a>
            ) : (
              item.value
            )}
          </dd>
        </motion.div>
      ))}
    </motion.dl>
  )
}
