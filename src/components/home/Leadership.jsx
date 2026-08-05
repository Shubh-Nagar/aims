import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { leadership, leadershipIntro } from '@/data/leadership'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { EASE } from '@/lib/motion'

export default function Leadership() {
  const [active, setActive] = useState(0)
  const person = leadership[active]

  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Insights from our leadership"
          title={
            <>
              The people <span className="text-muted">steering the institute</span>
            </>
          }
          lede={leadershipIntro}
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-12">
          <Reveal>
            <AnimatePresence mode="wait">
              <motion.div
                key={person.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="card overflow-hidden"
              >
                <div className="card-media">
                  <Img src={person.image} alt={person.name} ratio="aspect-[4/5]" />
                </div>
                <div className="p-6">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-600">
                    {person.role}
                  </p>
                  <h3 className="mt-2 text-xl">{person.name}</h3>
                  {person.pendingSource ? (
                    <a
                      href={person.pendingSource}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700"
                    >
                      Read message
                      <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
                    </a>
                  ) : (
                    <Link
                      to={`/${person.slug}`}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-700"
                    >
                      Read message
                      <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
                    </Link>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {leadership.map((item, i) => (
                <li key={item.slug}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={i === active}
                    className={`group flex w-full items-center gap-4 rounded-2xl p-3 text-left transition-colors duration-300 ${
                      i === active ? 'bg-brand-50 ring-1 ring-brand-200' : 'hover:bg-brand-50/60'
                    }`}
                  >
                    <span className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Img src={item.image} alt="" ratio="aspect-square" />
                    </span>
                    <span>
                      <span
                        className={`block text-sm font-semibold transition-colors duration-300 ${
                          i === active ? 'text-brand-900' : 'text-brand-800'
                        }`}
                      >
                        {item.name}
                      </span>
                      <span className="mt-0.5 block text-xs uppercase tracking-eyebrow text-muted">
                        {item.role}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
