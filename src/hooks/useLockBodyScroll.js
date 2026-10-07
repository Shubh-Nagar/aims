import { useEffect } from 'react'

// Locks the root element rather than <body>: index.css gives <html> its own
// `overflow-y: scroll`, which makes <html> the scroll container, so hiding
// overflow on <body> alone leaves the page scrolling behind an open drawer.
export function useLockBodyScroll(locked) {
  useEffect(() => {
    if (!locked) return
    const root = document.documentElement
    const previous = { overflowY: root.style.overflowY, scrollbarGutter: root.style.scrollbarGutter }
    // Keep the gutter reserved so hiding the scrollbar doesn't shift the page.
    root.style.scrollbarGutter = 'stable'
    root.style.overflowY = 'hidden'
    return () => {
      root.style.overflowY = previous.overflowY
      root.style.scrollbarGutter = previous.scrollbarGutter
    }
  }, [locked])
}
