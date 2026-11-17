import { motion, useReducedMotion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Vitals from '@/components/ui/Vitals'
import { EASE } from '@/lib/motion'

/**
 * The closing call to action, shown above the footer on every page.
 *
 * Two AIMS students stand on the banner's bottom edge and break out of its
 * top — the section is deliberately not overflow-hidden so their heads can
 * rise into the space above. Her notebook reads "Go… in to Future", which is
 * exactly what the headline is asking.
 */
export default function EnrollBanner() {
  const reduced = useReducedMotion()

  return (
    <section className="relative isolate mt-10 bg-gold-500 md:mt-24">
      {/* A soft pale bloom behind the pair lifts the white coats off the gold. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -right-24 top-1/2 hidden h-[140%] w-[46rem] -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(253,252,232,.7),transparent)] md:block" />
      </div>

      <div className="container relative py-14 md:py-20">
        <div className="md:max-w-[56%] lg:max-w-[58%]">
          <Reveal>
            <p className="text-2xs font-semibold uppercase tracking-eyebrow text-brand-900/70">Enroll</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-[1.12] text-brand-900 md:text-[2.6rem]">
              Are you ready to take the next step toward your future career?
            </h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-brand-900/75">
              Admissions are open for 2026-27. The next white coat on this campus could be yours.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-3">
            <Button to="/admission" variant="primary">
              Admission enquiry
            </Button>
            <Button
              href="https://amaltasmedicalcollege.in/schedule-a-tour/"
              variant="outline"
              className="border-brand-900/30 text-brand-900"
            >
              Schedule a visit
            </Button>
          </Reveal>
        </div>
      </div>

      {/* The pair — md+ only; on phones the copy needs the full width. */}
      <motion.div
        aria-hidden="true"
        initial={reduced ? false : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 1, ease: EASE }}
        className="pointer-events-none absolute bottom-0 right-[2%] hidden h-[128%] md:block lg:right-[6%] xl:right-[10%]"
      >
        <img
          src="/images/students/future-duo.webp"
          alt=""
          loading="lazy"
          width="762"
          height="900"
          className="h-full w-auto [filter:drop-shadow(0_18px_30px_rgba(7,29,16,.28))] [mask-image:linear-gradient(to_right,transparent_0%,#000_8%)]"
        />
        <motion.span
          initial={reduced ? false : { opacity: 0, scale: 0.8, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
          className="absolute left-[-14%] top-[30%] flex items-center gap-1.5 rounded-full bg-brand-900 px-4 py-2 text-xs font-semibold text-white shadow-lg"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold-300" aria-hidden="true" />
          Class of tomorrow
        </motion.span>
      </motion.div>

      <Vitals tone="pine" className="h-8 opacity-30" duration={2.4} />
    </section>
  )
}
