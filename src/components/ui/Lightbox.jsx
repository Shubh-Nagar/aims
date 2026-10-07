import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

/**
 * Full-screen image viewer shared by the photo gallery and the poster grid.
 * `index` is the open item (null when closed). The image is shown at its own
 * aspect ratio — never cropped — since posters carry text right to the edge.
 * Escape closes; arrow keys and the side buttons step through the set.
 */
export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index !== undefined
  const item = open ? items[index] : null
  const closeRef = useRef(null)
  const handlers = useRef({ onClose, onIndex })
  handlers.current = { onClose, onIndex }
  useLockBodyScroll(open)

  useEffect(() => {
    if (!open) return
    const opener = document.activeElement
    closeRef.current?.focus()
    const step = (delta) =>
      handlers.current.onIndex((current) => (current + delta + items.length) % items.length)
    const onKey = (e) => {
      if (e.key === 'Escape') handlers.current.onClose()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (opener instanceof HTMLElement) opener.focus()
    }
  }, [open, items.length])

  const step = (delta) => onIndex((current) => (current + delta + items.length) % items.length)
  const control =
    'grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-brand-950/40 text-white transition-colors hover:bg-white hover:text-brand-900'

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[80] flex flex-col items-center justify-center gap-4 bg-brand-950/90 p-4 backdrop-blur sm:p-6"
          onClick={onClose}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className={`absolute right-4 top-4 sm:right-6 sm:top-6 ${control}`}
            aria-label="Close"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <motion.img
            key={item.src}
            src={item.src}
            alt={item.alt}
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          {items.length > 1 && (
            <div className="flex items-center gap-4 text-sm text-white/80" onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={() => step(-1)} className={control} aria-label="Previous image">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <p className="min-w-[4.5rem] text-center tabular-nums" aria-live="polite">
                {index + 1} / {items.length}
              </p>
              <button type="button" onClick={() => step(1)} className={control} aria-label="Next image">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          )}

          <p className="max-w-2xl text-center text-sm text-white/70" onClick={(e) => e.stopPropagation()}>
            {item.alt}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
