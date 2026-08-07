import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, Mail, FileText } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { site } from '@/data/site'
import { EASE } from '@/lib/motion'
import { useScrollState } from '@/hooks/useScrollState'
import Button from '@/components/ui/Button'
import MobileNav from './MobileNav'

function MegaPanel({ items, onClose, left }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.24, ease: EASE } }}
      className="absolute top-full z-50 pt-3"
      style={{ left }}
    >
      <div className="min-w-[290px] overflow-hidden rounded-2xl bg-surface p-2 shadow-lift ring-1 ring-line">
        <ul>
          {items.map((item, i) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.22, delay: 0.03 * i, ease: EASE }}
            >
              {item.file ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={onClose}
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm text-brand-900 transition-colors duration-200 hover:bg-brand-50"
                >
                  <span>{item.label}</span>
                  <FileText className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-gold-600" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm text-brand-900 transition-colors duration-200 hover:bg-brand-50"
                >
                  <span>{item.label}</span>
                  <span className="h-px w-0 bg-gold-500 transition-all duration-300 ease-smooth group-hover:w-5" />
                </Link>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Header() {
  const { scrolled } = useScrollState()
  const [openMenu, setOpenMenu] = useState(null)
  const [panelLeft, setPanelLeft] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const navRef = useRef(null)
  const triggerRefs = useRef({})

  const closeMenu = () => setOpenMenu(null)
  // Only one mega panel is ever rendered (single AnimatePresence below,
  // keyed by label with mode="wait"), so switching triggers can never
  // leave two panels mounted at once — the previous one fully exits
  // before the next one enters.
  const openMenuNow = (label) => {
    const el = triggerRefs.current[label]
    if (el) setPanelLeft(el.offsetLeft)
    setOpenMenu(label)
  }

  useEffect(() => {
    closeMenu()
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && closeMenu()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Standard dropdown pattern: clicking anywhere outside the nav closes
  // whatever is open.
  useEffect(() => {
    if (openMenu === null) return
    const onPointerDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeMenu()
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [openMenu])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-700 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <header className="fixed inset-x-0 top-0 z-50">
        {/* Utility strip — collapses away as soon as the reader scrolls */}
        <div
          className={`hidden overflow-hidden bg-brand-700 text-white/70 transition-all duration-400 ease-smooth lg:block ${
            scrolled ? 'max-h-0 opacity-0' : 'max-h-12 opacity-100'
          }`}
        >
          <div className="container flex h-10 items-center justify-between text-xs">
            <p className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden="true" />
              Admissions open for the 2025-26 session
            </p>
            <div className="flex items-center gap-6">
              <a href={site.phoneHref} className="flex items-center gap-2 transition-colors hover:text-gold-300">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-300">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {site.email}
              </a>
              <Link to="/information-under-msr-clause-b-1-11" className="flex items-center gap-2 transition-colors hover:text-gold-300">
                <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                Information Under MSR Clause B.1.11
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`border-b transition-all duration-400 ease-smooth ${
            scrolled
              ? 'border-line bg-surface shadow-card'
              : 'border-transparent bg-surface'
          }`}
        >
          <div className="container flex h-[var(--header-h)] items-center justify-between gap-6">
            <Link to="/" className="flex items-center" aria-label={`${site.name} — home`}>
              <img
                src="/images/aims-logo.png"
                alt={site.name}
                className="h-10 w-auto sm:h-11"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </Link>

            {/* onMouseLeave lives on <nav> rather than each trigger: the panel
                is a sibling of the trigger row, not nested inside it, but it's
                still a DOM descendant of <nav> — so moving the pointer down
                into the panel never actually leaves <nav>, and closing only
                needs to react to the pointer leaving the whole nav region. */}
            <nav aria-label="Primary" className="relative hidden xl:block" ref={navRef} onMouseLeave={closeMenu}>
              <ul className="flex items-center gap-7">
                {navigation.map((entry) =>
                  entry.children ? (
                    <li
                      key={entry.label}
                      ref={(el) => {
                        triggerRefs.current[entry.label] = el
                      }}
                      onMouseEnter={() => openMenuNow(entry.label)}
                    >
                      <button
                        type="button"
                        className="nav-link text-brand-900 hover:text-brand-600"
                        aria-expanded={openMenu === entry.label}
                        aria-haspopup="true"
                        onClick={() => (openMenu === entry.label ? closeMenu() : openMenuNow(entry.label))}
                      >
                        {entry.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            openMenu === entry.label ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </li>
                  ) : (
                    <li key={entry.label} onMouseEnter={closeMenu}>
                      <NavLink
                        to={entry.to}
                        className="nav-link text-brand-900 hover:text-brand-600"
                        data-active={location.pathname === entry.to}
                      >
                        {entry.label}
                      </NavLink>
                    </li>
                  ),
                )}
              </ul>

              {/* A single shared panel (rather than one per nav item), rendered with a
                  plain conditional instead of AnimatePresence: unmounting through
                  AnimatePresence's exit lifecycle depends on Framer Motion's own
                  effect scheduling, which can get starved when a large, unrelated
                  re-render happens in the same commit — e.g. the page-level
                  AnimatePresence in Layout.jsx swapping route content on navigation.
                  That left this panel visibly stuck open after clicking an item that
                  navigates. A plain conditional unmounts synchronously with React's
                  render, so it can't get stuck regardless of what else re-renders. */}
              {(() => {
                const activeEntry = navigation.find((entry) => entry.children && entry.label === openMenu)
                return activeEntry && <MegaPanel key={activeEntry.label} items={activeEntry.children} onClose={closeMenu} left={panelLeft} />
              })()}
            </nav>

            <div className="flex items-center gap-3">
              <Button to="/admission" variant="gold" className="hidden px-5 py-2.5 text-xs sm:inline-flex">
                Apply now
              </Button>
              <button
                type="button"
                onClick={() => {
                  closeMenu()
                  setMobileOpen(true)
                }}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand-900 transition-colors duration-300 hover:border-brand-700 hover:bg-brand-700 hover:text-white xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
