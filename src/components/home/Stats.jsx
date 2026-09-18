import { motion, useReducedMotion } from 'framer-motion'
import { stats } from '@/data/site'
import { EASE, viewportReplay } from '@/lib/motion'
import Counter from '@/components/ui/Counter'
import DotWave from '@/components/ui/DotWave'

/**
 * The headline figures — the page's boldest beat.
 *
 * Deliberately *not* photo-backed. The hero already spends a full screen on
 * scrimmed footage; repeating that move one screen later made both bands
 * weaker and the page read monotone. This is an instrument panel instead:
 * deep pine, one pine glow rising off the floor, the pulse field at full
 * height now that no photograph competes with it, and the numbers themselves
 * as the brightest thing on the page.
 */

/* A shallow gauge sweep that draws itself as the counter climbs, so the
   number and its arc arrive together. Sized in the viewBox rather than a
   circle around the number, because "27.378 acres" will never fit in a ring. */
const ARC = 'M8 48 A 150 150 0 0 1 192 48'

function StatArc() {
  const reduced = useReducedMotion()

  return (
    <svg
      viewBox="0 0 200 54"
      className="h-[54px] w-[200px] text-gold-400 transition-colors duration-500 group-hover:text-gold-300"
      aria-hidden="true"
    >
      <path d={ARC} fill="none" stroke="currentColor" strokeOpacity=".16" strokeWidth="1.5" />
      <motion.path
        d={ARC}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={reduced ? undefined : { pathLength: 0 }}
        whileInView={reduced ? undefined : { pathLength: 1 }}
        viewport={viewportReplay}
        transition={{ duration: 1.5, ease: EASE }}
      />
    </svg>
  )
}

export default function Stats() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-950 py-20 md:py-28">
      {/* Pine light rising off the floor — depth without a photograph. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(130%_95%_at_50%_125%,rgba(16,126,59,.5),transparent_66%)]"
      />
      {/* The pulse field, held clear of the numbers by the inverse vignette. */}
      <div aria-hidden="true" className="absolute inset-0 mask-edges text-gold-300/25">
        <DotWave className="h-full w-full" duration={34} amplitude={30} />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"
      />
      <div aria-hidden="true" className="absolute inset-0 grain opacity-30" />

      <div className="container relative flex justify-center">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-14 text-center sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-dashed sm:divide-white/15">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReplay}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group flex flex-col items-center sm:px-6 sm:first:pl-0 sm:last:pr-0 lg:px-8"
            >
              <StatArc />
              <dt className="-mt-3 text-2xs font-semibold uppercase tracking-eyebrow text-white/55 transition-colors duration-500 group-hover:text-gold-300">
                {stat.label}
              </dt>
              <dd className="mt-3 font-display text-[clamp(2.6rem,6vw,4.25rem)] leading-none tracking-[-.03em] text-gold-300 [text-shadow:0_0_44px_rgba(233,168,37,.3)]">
                <Counter value={stat.value} decimals={stat.decimals ?? 0} replay />
                {/* Rendered here rather than through Counter's `suffix`, so a
                    long unit like " acres" can sit at a fraction of the
                    numeral's size instead of dwarfing the grid column. */}
                {stat.suffix && (
                  <span className="ml-1 align-baseline text-[.34em] font-sans font-medium uppercase tracking-eyebrow text-gold-300/70">
                    {stat.suffix.trim()}
                  </span>
                )}
              </dd>
              <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-white/60 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:text-white/85">
                {stat.note}
              </p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
