import { motion, useReducedMotion } from 'framer-motion'

/**
 * Ambient gradient blob. Purely decorative — a slow, organic drift behind
 * content that keeps long data-heavy pages feeling alive rather than static.
 * Sits behind everything (-z-10 on the wrapper) and never intercepts pointers.
 */
const TONES = {
  brand: 'from-brand-400/25 to-brand-600/10',
  gold: 'from-gold-400/25 to-gold-600/10',
  mixed: 'from-gold-300/20 to-brand-500/15',
}

export default function Blob({
  tone = 'brand',
  className = '',
  size = 'h-[28rem] w-[28rem]',
  duration = 18,
  delay = 0,
}) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl ${TONES[tone] ?? TONES.brand} ${size} ${className}`}
      animate={
        reduced
          ? undefined
          : {
              x: [0, 28, -18, 0],
              y: [0, -22, 16, 0],
              scale: [1, 1.08, 0.95, 1],
            }
      }
      transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
