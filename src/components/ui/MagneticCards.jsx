import { useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

// Travel at the card's edge, in px. Past ~8 it stops reading as weight and
// starts reading as a glitch.
const STRENGTH = 6

/**
 * Magnetic hover for every `.card` on the page.
 *
 * Wired once through event delegation rather than as a wrapper component:
 * `.card` is a shared class used in dozens of places across blocks, home
 * sections and pages, so a wrapper would have meant touching all of them for
 * an effect that is purely presentational.
 *
 * It only writes two custom properties; `.card:hover` in index.css decides
 * what to do with them, which keeps the transform in one place. Pointer
 * events and a `(hover: none)` guard mean touch devices are untouched.
 */
export default function MagneticCards() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return
    if (window.matchMedia('(hover: none)').matches) return

    let current = null

    const clear = (el) => {
      el.style.removeProperty('--card-mx')
      el.style.removeProperty('--card-my')
    }

    const onMove = (event) => {
      const card = event.target instanceof Element ? event.target.closest('.card') : null

      // Leaving a card has to reset it, or it keeps the last offset it saw.
      if (card !== current) {
        if (current) clear(current)
        current = card
      }
      if (!card) return

      const rect = card.getBoundingClientRect()
      if (!rect.width || !rect.height) return
      const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
      const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
      card.style.setProperty('--card-mx', `${(dx * STRENGTH).toFixed(2)}px`)
      card.style.setProperty('--card-my', `${(dy * STRENGTH).toFixed(2)}px`)
    }

    const onLeaveWindow = () => {
      if (current) clear(current)
      current = null
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeaveWindow)
    // A route change can unmount the card mid-hover, so drop the reference.
    window.addEventListener('blur', onLeaveWindow)

    return () => {
      document.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', onLeaveWindow)
      window.removeEventListener('blur', onLeaveWindow)
      if (current) clear(current)
    }
  }, [reduced])

  return null
}
