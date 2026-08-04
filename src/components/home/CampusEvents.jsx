import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { news } from '@/data/news'
import { formatDate } from './NewsGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { EASE } from '@/lib/motion'

const events = news.filter((item) => item.category === 'Activities / Events').slice(0, 5)

export default function CampusEvents() {
  const [active, setActive] = useState(0)
  const current = events[active]

  return (
    <section className="section surface-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grain opacity-60" aria-hidden="true" />
      <div className="container relative">
        <SectionHeading
          light
          eyebrow="Current events & activities"
          title={
            <>
              Event <span className="text-white/50">Amaltas</span>
            </>
          }
          lede="A running record of what's happening on campus — festivals, ceremonies, drives and everything in between."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <ol className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-2 lg:overflow-visible">
            {events.map((item, i) => (
              <li key={item.slug} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-current={i === active}
                  className={`group flex items-center gap-3 rounded-full px-4 py-2.5 text-left transition-colors duration-300 lg:w-64 lg:rounded-xl ${
                    i === active ? 'bg-white/10' : 'hover:bg-white/[0.05]'
                  }`}
                >
                  <span
                    className={`font-display text-lg tabular-nums transition-colors duration-300 ${
                      i === active ? 'text-gold-300' : 'text-white/35'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`hidden text-sm leading-snug transition-colors duration-300 lg:block ${
                      i === active ? 'text-white' : 'text-white/55 group-hover:text-white/80'
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ol>

          <Reveal className="min-h-[420px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: EASE }}
                className="grid gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-[1.1fr_1fr] md:p-8"
              >
                <div className="overflow-hidden rounded-xl">
                  <Img src={current.image} alt={current.title} ratio="aspect-[4/3]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">
                    {current.category}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-white">{current.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-white/65">{current.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-white/45">
                    <time dateTime={current.date}>{formatDate(current.date)}</time>
                    <span className="h-px w-4 bg-white/20" aria-hidden="true" />
                    <span>Amaltas campus, Dewas</span>
                  </div>
                  <Link
                    to="/news-press-release"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-300"
                  >
                    Read more
                    <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
