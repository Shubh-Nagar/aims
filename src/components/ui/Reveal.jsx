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
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  variants = fadeUp,
  replay,
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

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={shouldReplay ? viewportReplay : viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
