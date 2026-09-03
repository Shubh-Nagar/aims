import { motion } from 'framer-motion'
import { FileText } from 'lucide-react'
import { stagger, fadeUp } from '@/lib/motion'

/** Downloadable PDFs, staggered in as a card grid. */
export default function DocumentsBlock({ items = [] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger(0.05)}
      className="mt-6 grid gap-3 sm:grid-cols-2"
    >
      {items.map((doc) => (
        <motion.li key={doc.label} variants={fadeUp}>
          <a
            href={doc.href}
            target="_blank"
            rel="noreferrer noopener"
            className="card group flex items-center gap-3 p-4"
          >
            <FileText
              className="h-5 w-5 shrink-0 text-brand-400 transition-colors duration-300 group-hover:text-gold-500"
              aria-hidden="true"
            />
            <span className="text-sm leading-snug text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
              {doc.label}
            </span>
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}
