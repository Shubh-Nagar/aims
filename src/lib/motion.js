// Shared Framer Motion variants. Every entrance in the site uses one of
// these so the whole page speaks in a single motion vocabulary.
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
}

// A deeper zoom used for photo-card grids (leadership, etc.) — noticeably
// more pronounced than scaleIn so a staggered grid reads as "blooming in".
export const zoomIn = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.85, ease: EASE } },
}

export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
})

// Word-by-word headline reveal used in the hero.
export const wordUp = {
  hidden: { opacity: 0, y: '0.6em' },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
}

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
  exit: { opacity: 0, y: -6, transition: { duration: 0.25, ease: 'easeIn' } },
}

export const viewportOnce = { once: true, margin: '-80px 0px -80px 0px' }
