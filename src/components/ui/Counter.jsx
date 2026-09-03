import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts up when it enters the viewport — once by default, or every time it
 * re-enters when `replay` is set (it restarts from zero on re-entry, so the
 * value is left alone on the way out and never resets mid-view).
 */
export default function Counter({ value, decimals = 0, suffix = '', duration = 1600, replay = false }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: !replay, margin: '-60px' })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    let frame
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(value * eased)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration, reduced])

  // Grouped digits — six-figure areas like 107,590.78 are unreadable without.
  const formatted = display.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {suffix}
    </span>
  )
}
