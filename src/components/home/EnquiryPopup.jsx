import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { site } from '@/data/site'
import { EASE } from '@/lib/motion'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'
import EnquiryForm from '@/components/ui/EnquiryForm'

// Shown once per browser session, after the reader has scrolled about one
// and a half screens — far enough to have shown interest, not on arrival.
const STORAGE_KEY = 'aims-enquiry-popup-seen'
const TRIGGER_SCREENS = 1.5

const PERKS = [
  'MBBS, MD/MS, nursing and paramedical programmes',
  'Clinical training at the on-campus Amaltas Hospital',
  `A ${site.heroKicker.split(' ')[0]}-acre residential campus near Dewas`,
]

function alreadySeen() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function markSeen() {
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Storage blocked (private mode etc.) — the popup simply may show again.
  }
}

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const dialogRef = useRef(null)
  useLockBodyScroll(open)

  // Arm the scroll trigger.
  useEffect(() => {
    if (alreadySeen()) return
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * TRIGGER_SCREENS) return
      // Never stack on top of another dialog (e.g. the mobile menu).
      if (document.querySelector('[role="dialog"][aria-modal="true"]')) return
      window.removeEventListener('scroll', onScroll)
      markSeen()
      setOpen(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Dialog basics: focus moves in (to the panel, not an input, so phones don't
  // throw up a keyboard unasked), Escape closes, focus returns afterwards.
  useEffect(() => {
    if (!open) return
    const opener = document.activeElement
    dialogRef.current?.focus()
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="enquiry-popup"
          className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            onClick={close}
            className="absolute inset-0 bg-brand-950/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-popup-title"
            tabIndex={-1}
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 80, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 60, scale: 0.97 }}
            transition={reduced ? { duration: 0.2 } : { type: 'spring', stiffness: 260, damping: 26 }}
            className="relative grid max-h-[92dvh] w-full max-w-4xl overflow-hidden rounded-t-3xl bg-surface shadow-lift outline-none focus-visible:ring-0 focus-visible:ring-offset-0 sm:rounded-3xl md:grid-cols-[0.95fr_1.05fr]"
          >
            {/* Gold sweep drawing across the top edge as the panel lands */}
            <motion.span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 z-20 h-1 origin-left bg-gold-sweep"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
            />

            {/* Visual panel — hidden on phones, where the sheet is form-first */}
            <div className="relative hidden overflow-hidden bg-brand-950 text-white md:block">
              <motion.img
                src="/images/courses/anatomy-lab.jpg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.15 }}
                animate={{ scale: reduced ? 1.15 : 1 }}
                transition={{ duration: 6, ease: 'easeOut' }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(5,27,13,.95)_0%,rgba(5,27,13,.72)_45%,rgba(5,27,13,.35)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_10%,rgba(233,168,37,.28),transparent_70%)] mix-blend-screen" />
              <div className="absolute inset-0 grain opacity-30" aria-hidden="true" />

              <div className="relative flex h-full flex-col justify-end p-9">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3, ease: EASE }}
                  className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-300/40 bg-gold-500/15 px-3.5 py-1.5 text-2xs font-semibold uppercase tracking-eyebrow text-gold-300"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold-400" />
                  </span>
                  Admissions open 2026-27
                </motion.span>

                <motion.p
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
                  className="mt-5 font-display text-[2rem] leading-[1.1] text-white"
                >
                  Begin your journey in <span className="bg-gold-sweep bg-clip-text text-transparent">medicine</span>
                </motion.p>

                <ul className="mt-6 space-y-3">
                  {PERKS.map((perk, i) => (
                    <motion.li
                      key={perk}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.45, delay: 0.55 + i * 0.08, ease: EASE }}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500 text-brand-900">
                        <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                      </span>
                      {perk}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form panel */}
            <div className="relative overflow-y-auto p-6 pt-8 sm:p-9">
              <button
                type="button"
                onClick={close}
                aria-label="Close enquiry form"
                className="group absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-line text-brand-900 transition-colors duration-300 hover:border-brand-700 hover:bg-brand-700 hover:text-white sm:right-5 sm:top-5"
              >
                <X className="h-4 w-4 transition-transform duration-300 group-hover:rotate-90" aria-hidden="true" />
              </button>

              {/* Grab handle — signals a bottom sheet on phones */}
              <span className="mx-auto -mt-3 mb-4 block h-1 w-10 rounded-full bg-line sm:hidden" aria-hidden="true" />

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15, ease: EASE }}
                className="eyebrow"
              >
                Admission enquiry
              </motion.p>
              <motion.h2
                id="enquiry-popup-title"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
                className="mt-3 pr-12 text-2xl leading-tight md:text-[1.75rem]"
              >
                Talk to our admissions team
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="prose-aims mt-2"
              >
                Leave your details and an admissions representative will guide you through the process.
              </motion.p>

              <EnquiryForm idPrefix="popup" compact animated className="mt-6" />

              <button
                type="button"
                onClick={close}
                className="mx-auto mt-4 block text-xs font-medium text-muted underline-offset-4 transition-colors hover:text-brand-700 hover:underline"
              >
                Maybe later
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
