import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { helplines, site } from '@/data/site'
import { EASE } from '@/lib/motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Img from '@/components/ui/Img'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import { Phone, ShieldCheck, FileText, X } from 'lucide-react'

const posters = Array.from({ length: 5 }, (_, i) => ({
  src: `/images/antiragging/poster-${i + 1}.jpg`,
  alt: `Anti-ragging awareness poster ${i + 1}`,
}))

export default function Antiragging() {
  const [active, setActive] = useState(null)
  useLockBodyScroll(Boolean(active))

  return (
    <>
      <Seo
        title="Antiragging Measures | Amaltas Institute of Medical Sciences"
        description="Anti-ragging measures, committee and 24-hour helplines at Amaltas Institute of Medical Sciences, Dewas."
        path="/antiragging-measures"
      />
      <PageHero
        title="Antiragging Measures"
        lede="A proactive Anti-Ragging Committee, a toll-free helpline and support lines that answer around the clock."
        breadcrumb="Antiragging"
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl md:text-[1.75rem]">Safeguarding student welfare</h2>
              <div className="mt-2 h-px w-14 bg-gold-500" aria-hidden="true" />
              <p className="prose-aims mt-5 text-base">
                At Amaltas Institute of Medical Sciences, we prioritise student safety and well-being. Our
                proactive Anti-Ragging Committee ensures a secure campus, with a dedicated toll-free helpline
                and additional support lines. We are here to assist and protect our students around the clock.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10">
              <a
                href="/documents/antiragging/Amended-Institutional-Anti-Ragging-Committee.pdf"
                target="_blank"
                rel="noreferrer noopener"
                className="card group flex items-center gap-3 p-5"
              >
                <FileText
                  className="h-5 w-5 shrink-0 text-brand-400 transition-colors duration-300 group-hover:text-gold-500"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium leading-snug text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                  Institutional Anti-Ragging Committee
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-2xl bg-brand-100 p-8">
              <ShieldCheck className="h-7 w-7 text-gold-700" aria-hidden="true" />
              <p className="mt-5 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                Toll-free helpline
              </p>
              <a
                href={`tel:${helplines.tollFree.replace(/-/g, '')}`}
                className="mt-3 block font-display text-3xl text-brand-900 transition-colors hover:text-gold-700"
              >
                {helplines.tollFree}
              </a>
              <ul className="mt-6 space-y-3 border-t border-brand-900/10 pt-6">
                {helplines.numbers.map((number) => (
                  <li key={number}>
                    <a
                      href={`tel:${number.replace(/-/g, '')}`}
                      className="flex items-center gap-3 text-sm text-brand-800 transition-colors hover:text-gold-700"
                    >
                      <Phone className="h-4 w-4 text-gold-600" aria-hidden="true" />
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button to="/contact" variant="outline" className="w-full">
                  Contact the college
                </Button>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-muted">{site.address}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Posters</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">Awareness on campus</h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posters.map((poster, i) => (
              <Reveal as="li" key={poster.src} delay={(i % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => setActive(poster)}
                  className="card group block w-full overflow-hidden text-left"
                  aria-label={`Open ${poster.alt}`}
                >
                  <div className="card-media">
                    <Img src={poster.src} alt={poster.alt} ratio="aspect-[4/3]" />
                  </div>
                </button>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-brand-950/90 p-6 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Img src={active.src} alt={active.alt} ratio="aspect-[16/10]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
