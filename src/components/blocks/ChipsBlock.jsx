import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { stagger, scaleIn } from '@/lib/motion'

/** Short facts as pills — reads faster than a bulleted list for flat sets. */
export default function ChipsBlock({ items = [] }) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger(0.04)}
      className="mt-6 flex flex-wrap gap-2.5"
    >
      {items.map((item) => (
        <motion.li
          key={item}
          variants={scaleIn}
          className="group inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm text-brand-900 shadow-card ring-1 ring-line transition-all duration-400 ease-smooth hover:-translate-y-0.5 hover:ring-gold-300"
        >
          <Check
            className="h-3.5 w-3.5 shrink-0 text-brand-400 transition-colors duration-300 group-hover:text-gold-500"
            aria-hidden="true"
          />
          {item}
        </motion.li>
      ))}
    </motion.ul>
  )
}
