import { createContext, useContext } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, viewportOnce, viewportReplay } from '@/lib/motion'

/**
 * When true, reveals inside this subtree play every time they enter the
 * viewport instead of only the first time — so scrolling back up replays
 * them. Set it for a whole page with <ReplayReveals>, or per element with
 * the `replay` prop.
 */
const ReplayContext = createContext(false)

export function ReplayReveals({ children }) {
  return <ReplayContext.Provider value={true}>{children}</ReplayContext.Provider>
}

/**
 * Scroll-triggered entrance. Collapses to a plain wrapper when the reader
 * has asked for reduced motion.
 *
 * Pass `onMount` for content that must always end up visible regardless of
 * where it lands in the viewport (e.g. primary copy right below a page
 * header) — it swaps the IntersectionObserver-driven `whileInView` for a
 * plain `animate`, so the entrance always fires once on mount instead of
 * depending on the observer computing "in view" before the reader scrolls
 * or navigates away, which can silently leave content stuck at opacity: 0.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  variants = fadeUp,
  replay,
  onMount = false,
  className = '',
  children,
  ...rest
}) {
  const reduced = useReducedMotion()
  const inherited = useContext(ReplayContext)
  const shouldReplay = replay ?? inherited
  const MotionTag = motion[as] ?? motion.div

  if (reduced) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    )
  }

  const trigger = onMount
    ? { animate: 'show' }
    : { whileInView: 'show', viewport: shouldReplay ? viewportReplay : viewportOnce }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      variants={variants}
      transition={{ delay }}
      {...trigger}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
