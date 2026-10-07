import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Restores the scroll position on every route change. */
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    // 'instant' explicitly: 'auto' defers to the `scroll-behavior: smooth`
    // set on <html>, which would visibly scroll every new page up from
    // wherever the last one was left.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
