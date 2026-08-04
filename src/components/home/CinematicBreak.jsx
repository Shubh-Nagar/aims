import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

/**
 * A full-bleed photograph between Intro and Stats, with a slow scroll-linked
 * parallax scoped to this element (unlike Hero, which tracks page scroll).
 */
export default function CinematicBreak() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative isolate flex h-[62vh] min-h-[420px] items-center overflow-hidden">
      <motion.div
        style={reduced ? undefined : { y: imageY }}
        className="absolute inset-0 -z-10 scale-110 bg-brand-900"
      >
        <img
          src="/images/campus/aerial.jpg"
          alt="Aerial view of the 27.378-acre AIMS campus"
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </motion.div>
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-brand-950/90 via-brand-950/30 to-brand-950/50" />
      <div className="absolute inset-0 -z-[5] grain opacity-50" aria-hidden="true" />

      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl font-display text-2xl leading-snug text-white md:text-4xl"
        >
          27.378 acres in village Bangar on the Dewas-Ujjain Highway, eight kilometres from Dewas —
          and a working hospital of our own.
        </motion.p>
      </div>
    </section>
  )
}
