import { motion, useReducedMotion } from 'framer-motion'
import { viewportOnce, EASE } from '@/lib/motion'

/**
 * The signature element of the site: a single-stroke vitals trace, drawn
 * left-to-right when it scrolls into view. It replaces the usual decorative
 * divider and is the one place the design raises its voice.
 */
const TRACE =
  'M0 40 H120 L134 40 L142 22 L152 58 L162 34 L172 40 H300 L312 40 L320 30 L330 50 L340 40 H520 L534 40 L542 18 L552 62 L562 34 L572 40 H760 L772 40 L780 30 L790 50 L800 40 H1000'

export default function Vitals({ className = '', tone = 'gold', duration = 2.4, repeat = false }) {
  const reduced = useReducedMotion()
  const stroke = tone === 'gold' ? '#E9A825' : tone === 'light' ? 'rgba(255,255,255,.55)' : '#17806F'

  return (
    <svg
      viewBox="0 0 1000 80"
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="none"
      className={`h-10 w-full ${className}`}
    >
      <path d={TRACE} fill="none" stroke={stroke} strokeOpacity="0.18" strokeWidth="1.5" />
      <motion.path
        d={TRACE}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduced ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewportOnce}
        transition={{
          duration: reduced ? 0 : duration,
          ease: EASE,
          repeat: repeat ? Infinity : 0,
          repeatType: 'loop',
          repeatDelay: 1.2,
        }}
      />
    </svg>
  )
}
