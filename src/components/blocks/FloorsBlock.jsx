import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { iconFor } from '@/lib/icons'
import { EASE, stagger, fadeUp } from '@/lib/motion'
import Reveal from '@/components/ui/Reveal'

/**
 * The college layout as a building, not a list. Floors stack as slabs the
 * reader can hover or select; the chosen floor's departments animate in
 * beside it. Selecting is optional — the page opens on the entrance floor,
 * so the information is already there before anyone clicks.
 */
export default function FloorsBlock({ floors = [], defaultIndex = 0 }) {
  const [active, setActive] = useState(defaultIndex)
  const floor = floors[active]

  return (
    <Reveal className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
      {/* Elevation */}
      <ul className="flex flex-col gap-2" role="tablist" aria-label="Floors">
        {floors.map((item, i) => {
          const current = i === active
          return (
            <li key={item.name}>
              <button
                type="button"
                role="tab"
                aria-selected={current}
                aria-controls="floor-panel"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={`relative w-full overflow-hidden rounded-xl border px-5 text-left transition-all duration-500 ease-smooth ${
                  current
                    ? 'border-gold-400 bg-brand-700 py-7 text-white shadow-lift'
                    : 'border-line bg-surface py-5 text-brand-900 hover:border-gold-300 hover:bg-brand-50'
                }`}
              >
                <span className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />
                <span className="relative flex items-baseline justify-between gap-4">
                  <span className="font-display text-lg">{item.name}</span>
                  <span
                    className={`text-2xs font-semibold uppercase tracking-eyebrow ${
                      current ? 'text-gold-300' : 'text-muted'
                    }`}
                  >
                    {item.rooms.length} spaces
                  </span>
                </span>
                {current && (
                  <motion.span
                    layoutId="floor-marker"
                    className="absolute bottom-0 left-0 h-[3px] w-full bg-gold-500"
                    aria-hidden="true"
                  />
                )}
              </button>
            </li>
          )
        })}
      </ul>

      {/* Detail panel */}
      <div
        id="floor-panel"
        role="tabpanel"
        className="relative overflow-hidden rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line md:p-8"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={floor?.name}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="eyebrow">{floor?.name}</p>
            {floor?.note && <p className="prose-aims mt-3 text-sm">{floor.note}</p>}
            <motion.ul
              initial="hidden"
              animate="show"
              variants={stagger(0.05)}
              className="mt-5 grid gap-2.5 sm:grid-cols-2"
            >
              {floor?.rooms.map((room) => {
                const Icon = iconFor(room.icon)
                return (
                  <motion.li
                    key={room.label}
                    variants={fadeUp}
                    className="group flex items-center gap-3 rounded-xl bg-paper px-4 py-3 transition-colors duration-300 hover:bg-brand-50"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-brand-400 transition-colors duration-300 group-hover:text-gold-600"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-snug text-brand-900">{room.label}</span>
                  </motion.li>
                )
              })}
            </motion.ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </Reveal>
  )
}
