import { useEffect, useState } from 'react'

/**
 * Tracks scroll position and direction so the header can condense on
 * scroll and hide when the reader is moving down the page.
 */
export function useScrollState(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    let last = window.scrollY
    let frame = 0

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(() => {
        const y = window.scrollY
        setScrolled(y > threshold)
        setHidden(y > 220 && y > last)
        last = y
        frame = 0
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [threshold])

  return { scrolled, hidden }
}
