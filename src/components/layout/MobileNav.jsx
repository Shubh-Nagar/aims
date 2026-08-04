import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, X, Phone, Mail } from 'lucide-react'
import { navigation } from '@/data/navigation'
import { site } from '@/data/site'
import { EASE } from '@/lib/motion'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import Button from '@/components/ui/Button'

export default function MobileNav({ open, onClose }) {
  const [expanded, setExpanded] = useState(null)
  useLockBodyScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-brand-950/60 backdrop-blur-sm xl:hidden"
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.42, ease: EASE }}
            className="fixed right-0 top-0 z-[70] flex h-[100dvh] w-full max-w-sm flex-col bg-surface xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <span className="font-display text-lg text-brand-900">Menu</span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close menu"
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-brand-900 transition-colors hover:bg-brand-800 hover:text-white"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-2 py-3">
              <ul className="space-y-0.5">
                {navigation.map((entry, index) => (
                  <motion.li
                    key={entry.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 + index * 0.04, ease: EASE }}
                  >
                    {entry.children ? (
                      <>
                        <button
                          type="button"
                          onClick={() => setExpanded(expanded === entry.label ? null : entry.label)}
                          aria-expanded={expanded === entry.label}
                          className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                        >
                          {entry.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform duration-300 ${
                              expanded === entry.label ? 'rotate-180 text-gold-600' : 'text-muted'
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {expanded === entry.label && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.32, ease: EASE }}
                              className="overflow-hidden border-l-2 border-gold-300 pl-3 ml-4"
                            >
                              {entry.children.map((child) => (
                                <li key={child.label}>
                                  {child.file ? (
                                    <a
                                      href={child.href}
                                      target="_blank"
                                      rel="noreferrer noopener"
                                      className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:text-brand-700"
                                    >
                                      {child.label}
                                    </a>
                                  ) : (
                                    <Link
                                      to={child.to}
                                      onClick={onClose}
                                      className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:text-brand-700"
                                    >
                                      {child.label}
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={entry.to}
                        onClick={onClose}
                        className="block rounded-xl px-4 py-3 text-[15px] font-medium text-brand-900 transition-colors hover:bg-brand-50"
                      >
                        {entry.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="space-y-3 border-t border-line px-5 py-5">
              <Button to="/admission" variant="gold" className="w-full" onClick={onClose}>
                Apply now
              </Button>
              <div className="flex flex-col gap-2 text-sm text-muted">
                <a href={site.phoneHref} className="flex items-center gap-2 hover:text-brand-700">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-brand-700">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  {site.email}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
