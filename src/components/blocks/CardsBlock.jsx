import { motion } from 'framer-motion'
import { iconFor } from '@/lib/icons'
import { stagger, fadeUp } from '@/lib/motion'

/**
 * Icon cards, each carrying a short list. Used where a table would flatten
 * a set of genuinely distinct things (the OPD specialties, for instance).
 */
export default function CardsBlock({ items = [], columns = 3 }) {
  const cols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger(0.07)}
      className={`mt-6 grid gap-4 ${cols}`}
    >
      {items.map((item) => {
        const Icon = iconFor(item.icon)
        return (
          <motion.li key={item.title} variants={fadeUp} className="card group flex flex-col p-6">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-all duration-500 ease-smooth group-hover:bg-gold-500 group-hover:text-brand-900">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-4 font-display text-lg text-brand-900">{item.title}</h3>
            {item.body && <p className="prose-aims mt-2 text-sm">{item.body}</p>}
            {item.list?.length > 0 && (
              <ul className="mt-3.5 space-y-2">
                {item.list.map((entry) => (
                  <li key={entry} className="flex gap-2.5 text-sm text-muted">
                    <span
                      className="mt-[0.4rem] h-1 w-1 shrink-0 rounded-full bg-gold-500"
                      aria-hidden="true"
                    />
                    {entry}
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        )
      })}
    </motion.ul>
  )
}
