import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { EASE } from '@/lib/motion'
import { pressPhotos } from '@/data/press'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

export default function NewsPressRelease() {
  const [active, setActive] = useState(null)
  useLockBodyScroll(Boolean(active))

  return (
    <>
      <Seo
        title="News - Press Release | Amaltas Institute of Medical Sciences"
        description="Press and media coverage of Amaltas Institute of Medical Sciences."
        path="/news-press-release"
      />
      <PageHero title="News - Press Release" breadcrumb="Events" />

      <section className="section">
        <div className="container">
          {/* Masonry layout: images keep their natural aspect ratio instead
              of being force-cropped, since these are documents/clippings of
              mixed shapes and cropping can cut off the readable content. */}
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {pressPhotos.map((photo, i) => (
              <Reveal
                key={photo.src}
                delay={(i % 6) * 0.05}
                className="mb-4 break-inside-avoid"
              >
                <button
                  type="button"
                  onClick={() => setActive(photo)}
                  className="card group block w-full overflow-hidden text-left"
                  aria-label={`Open ${photo.alt}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full transition-transform duration-500 ease-smooth group-hover:scale-[1.03]"
                  />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] grid place-items-center bg-brand-950/90 p-6 backdrop-blur"
            onClick={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-brand-900"
              aria-label="Close"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="max-h-[85vh] max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={active.src}
                alt={active.alt}
                className="block max-h-[85vh] w-auto max-w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
