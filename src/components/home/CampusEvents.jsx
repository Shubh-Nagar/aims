import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { news } from '@/data/news'
import { formatDate } from './NewsGrid'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { EASE } from '@/lib/motion'

const AUTO_ADVANCE_MS = 6000

// Pinned to the five Activities/Events entries that already have a real
// photograph (see public/images/IMAGE-GUIDE.md) — a plain category filter
// would pull in a couple of slugs still waiting on a photo.
const FEATURED_SLUGS = [
  'workshop-on-advanced-medical-techniques',
  'graduation-ceremony',
  'orientation-at-aims',
  'womens-day-celebration-2k26',
  'white-coat-ceremony-2025',
]

const events = FEATURED_SLUGS.map((slug) => news.find((item) => item.slug === slug)).filter(Boolean)

export default function CampusEvents() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduced = useReducedMotion()
  const current = events[active]

  useEffect(() => {
    if (paused || reduced || events.length < 2) return undefined
    const id = setInterval(() => {
      setActive((i) => (i + 1) % events.length)
    }, AUTO_ADVANCE_MS)
    return () => clearInterval(id)
  }, [paused, reduced])

  const selectEvent = (i) => {
    setActive(i)
  }

  return (
    <section className="section relative overflow-hidden bg-brand-100 text-brand-900">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />
      <div className="container relative">
        <SectionHeading
          from="left"
          eyebrow="Current events & activities"
          title={
            <>
              Event <span className="text-muted">Amaltas</span>
            </>
          }
          lede="A running record of what's happening on campus — festivals, ceremonies, drives and everything in between."
        />

        <div
          className="mt-14 grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <ol className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-2 lg:overflow-visible">
            {events.map((item, i) => (
              <li key={item.slug} className="shrink-0">
                <button
                  type="button"
                  onClick={() => selectEvent(i)}
                  aria-current={i === active}
                  className={`group relative flex items-center gap-3 overflow-hidden rounded-full px-4 py-2.5 text-left transition-colors duration-300 lg:w-64 lg:rounded-xl ${
                    i === active ? 'bg-brand-900/8' : 'hover:bg-brand-900/5'
                  }`}
                >
                  {i === active && !paused && !reduced && (
                    <motion.span
                      key={`${item.slug}-${active}`}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gold-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: AUTO_ADVANCE_MS / 1000, ease: 'linear' }}
                    />
                  )}
                  <span
                    className={`font-display text-lg tabular-nums transition-colors duration-300 ${
                      i === active ? 'text-gold-700' : 'text-brand-900/35'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`hidden text-sm leading-snug transition-colors duration-300 lg:block ${
                      i === active ? 'text-brand-900' : 'text-muted group-hover:text-brand-800'
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
                className="grid gap-8 rounded-2xl border border-brand-900/10 bg-white/70 p-6 md:grid-cols-[1.1fr_1fr] md:p-8"
              >
                <div className="overflow-hidden rounded-xl">
                  <Img src={current.image} alt={current.title} ratio="aspect-[4/3]" />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                    {current.category}
                  </p>
                  <h3 className="mt-4 font-display text-2xl leading-snug text-brand-900">{current.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{current.excerpt}</p>
                  <div className="mt-6 flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-muted">
                    <time dateTime={current.date}>{formatDate(current.date)}</time>
                    <span className="h-px w-4 bg-brand-900/20" aria-hidden="true" />
                    <span>Amaltas campus, Dewas</span>
                  </div>
                  <Link
                    to="/news-press-release"
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold-700"
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
