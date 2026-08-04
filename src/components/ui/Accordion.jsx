import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { EASE } from '@/lib/motion'

export default function Accordion({ items, defaultOpen = 0, renderBody }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl bg-surface ring-1 ring-line">
      {items.map((item, index) => {
        const expanded = open === index
        return (
          <div key={item.id ?? item.name}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(expanded ? -1 : index)}
                aria-expanded={expanded}
                aria-controls={`panel-${item.id ?? index}`}
                className="group flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors duration-300 hover:bg-brand-50/60 md:px-7"
              >
                <span className="flex flex-col gap-1">
                  <span className="font-display text-lg text-brand-900">{item.name}</span>
                  {item.summary && <span className="text-sm text-muted">{item.summary}</span>}
                </span>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-400 ease-smooth ${
                    expanded
                      ? 'rotate-45 border-gold-500 bg-gold-500 text-brand-900'
                      : 'border-line text-brand-700 group-hover:border-gold-400 group-hover:text-gold-600'
                  }`}
                >
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  id={`panel-${item.id ?? index}`}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.42, ease: EASE }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-7 md:px-7">{renderBody(item)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
