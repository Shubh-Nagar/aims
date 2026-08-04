import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/lib/motion'

/**
 * Scroll-triggered entrance. Collapses to a plain wrapper when the reader
 * has asked for reduced motion.
 */
export default function Reveal({
  as = 'div',
  delay = 0,
  variants = fadeUp,
  className = '',
  children,
  ...rest
}) {
  const reduced = useReducedMotion()
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
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
