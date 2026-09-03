import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import DotWave from '@/components/ui/DotWave'

/**
 * Decorative backdrop for one section "beat".
 *
 * Every variant is pure CSS — gradients and masked patterns, no images — so a
 * beat downloads nothing and cannot shift layout: the whole thing is an
 * aria-hidden, pointer-events-none layer pinned to the section box. Only
 * opacity and transform animate, so it stays off the main thread.
 *
 * The homepage alternates treated and untreated sections on purpose. Keep the
 * dense variants ('rise', 'spotlight') away from long body copy and use the
 * quiet ones ('dots', 'calm') where people actually read — every tint here is
 * light enough to leave `muted` body text above the AA threshold on white.
 *
 * The parent section needs `relative isolate overflow-hidden`.
 */
const LAYERS = {
  /* Quiet — the pulse field, held to the outside of the section by an inverse
     vignette so it frames prose instead of sitting under it. */
  wave: (
    <>
      <div className="absolute inset-0 mask-edges text-brand-300">
        <DotWave className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/70 via-transparent to-transparent" />
    </>
  ),

  /* Growth — soft shapes flowing upward out of the bottom edge. For
     image-led sections with little body copy. */
  rise: (
    <>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-50 via-transparent to-transparent" />
      <div className="absolute -bottom-24 -left-[10%] h-[36rem] w-[46%] -rotate-12 rounded-[45%] bg-gradient-to-t from-brand-200/45 to-transparent blur-3xl" />
      <div className="absolute -bottom-32 -right-[8%] h-[32rem] w-[42%] rotate-12 rounded-[45%] bg-gradient-to-t from-gold-200/40 to-transparent blur-3xl" />
    </>
  ),

  /* Trust — one broad, still wash and a hairline rule. Deliberately the
     calmest beat on the page. */
  calm: (
    <>
      <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_40%,rgba(223,244,231,.7),transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
    </>
  ),

  /* Pattern interrupt — a warm overhead spotlight on a faint grid, to
     re-capture attention just before a call to action. */
  spotlight: (
    <>
      <div className="absolute inset-0 field-grid mask-top text-brand-200/45" />
      <div className="absolute inset-x-0 -top-40 mx-auto h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(233,168,37,.2),transparent_65%)] blur-2xl" />
    </>
  ),

  /* Soft close — two off-canvas colour pools settling into the page ground. */
  mesh: (
    <>
      <div className="absolute -left-24 top-0 h-[26rem] w-[26rem] rounded-full bg-brand-200/30 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-[24rem] w-[24rem] rounded-full bg-gold-200/30 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-50/70" />
    </>
  ),
}

export default function SectionBg({ variant = 'wave', parallax = false, className = '' }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])

  const layers = LAYERS[variant] ?? LAYERS.wave
  const base = `pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`

  // Same contract as <Reveal>: no motion at all when the reader has asked
  // for none — the backdrop is still fully drawn, just static.
  if (reduced) {
    return (
      <div aria-hidden="true" className={base}>
        {layers}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className={base}
      style={parallax ? { y } : undefined}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
    >
      {layers}
    </motion.div>
  )
}
