import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, Phone, Mail, FileText } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { site } from '@/data/site'
import { EASE } from '@/lib/motion'
import { useScrollState } from '@/hooks/useScrollState'
import Button from '@/components/ui/Button'
import MobileNav from './MobileNav'

function MegaPanel({ items, onNavigate }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.24, ease: EASE }}
      className="absolute left-0 top-full z-50 pt-3"
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
                  className="group flex items-center justify-between gap-4 rounded-xl px-4 py-2.5 text-sm text-brand-900 transition-colors duration-200 hover:bg-brand-50"
                >
                  <span>{item.label}</span>
                  <FileText className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-gold-600" aria-hidden="true" />
                </a>
              ) : (
                <Link
                  to={item.to}
                  onClick={onNavigate}
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
  const { scrolled, hidden } = useScrollState()
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpenMenu(null)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-800 focus:px-5 focus:py-2.5 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>

      <motion.header
        animate={{ y: hidden && !openMenu ? '-100%' : '0%' }}
        transition={{ duration: 0.35, ease: EASE }}
        className="fixed inset-x-0 top-0 z-50"
      >
        {/* Utility strip — collapses away as soon as the reader scrolls */}
        <div
          className={`hidden overflow-hidden bg-brand-950 text-white/70 transition-all duration-400 ease-smooth lg:block ${
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
            </div>
          </div>
        </div>

        <div
          className={`border-b transition-all duration-400 ease-smooth ${
            scrolled
              ? 'border-line bg-surface/92 backdrop-blur-md shadow-card'
              : 'border-transparent bg-surface'
          }`}
        >
          <div className="container flex h-[var(--header-h)] items-center justify-between gap-6">
            <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} — home`}>
              <img
                src="/images/aims-emblem.png"
                alt=""
                className="h-11 w-11 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <span className="leading-tight">
                <span className="block font-display text-lg font-semibold text-brand-900">Amaltas</span>
                <span className="block text-2xs uppercase tracking-eyebrow text-muted">
                  Institute of Medical Sciences
                </span>
              </span>
            </Link>

            <nav aria-label="Primary" className="hidden xl:block">
              <ul className="flex items-center gap-7">
                {navigation.map((entry) =>
                  entry.children ? (
                    <li
                      key={entry.label}
                      className="relative"
                      onMouseEnter={() => setOpenMenu(entry.label)}
                      onMouseLeave={() => setOpenMenu(null)}
                    >
                      <button
                        type="button"
                        className="nav-link text-brand-900 hover:text-brand-600"
                        aria-expanded={openMenu === entry.label}
                        aria-haspopup="true"
                        onClick={() => setOpenMenu(openMenu === entry.label ? null : entry.label)}
                      >
                        {entry.label}
                        <ChevronDown
                          className={`h-3.5 w-3.5 transition-transform duration-300 ${
                            openMenu === entry.label ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence>
                        {openMenu === entry.label && (
                          <MegaPanel items={entry.children} onNavigate={() => setOpenMenu(null)} />
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={entry.label}>
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
            </nav>

            <div className="flex items-center gap-3">
              <Button to="/admission" variant="gold" className="hidden px-5 py-2.5 text-xs sm:inline-flex">
                Apply now
              </Button>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-brand-900 transition-colors duration-300 hover:border-brand-800 hover:bg-brand-800 hover:text-white xl:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
