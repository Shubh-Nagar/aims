import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { EASE } from '@/lib/motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

// Captions describe what each frame actually shows, so the alt text is
// useful to a screen reader rather than a numbered placeholder.
const captions = [
  'Aerial view of the Amaltas campus and the surrounding farmland',
  'The central reading room, with seating for 250',
  'Students at work in the physiology laboratory',
  'A practical session in the biochemistry laboratory',
  'Microscope benches laid out for a practical class',
  'The campus gymnasium',
  'The computer laboratory',
  'The seminar and conference hall',
  'A hostel room',
  'MBBS students on campus',
  'Graduands at the Aarohan convocation',
  'A cultural performance during the campus festival',
]

const photos = captions.map((alt, i) => ({
  src: `/images/gallery/gallery-${i + 1}.jpg`,
  alt,
}))

export default function Gallery() {
  const [active, setActive] = useState(null)
  useLockBodyScroll(Boolean(active))

  return (
    <>
      <Seo
        title="Photo Gallery | Amaltas Institute of Medical Sciences"
        description="Photographs from across the Amaltas Institute of Medical Sciences campus in Dewas."
        path="/photogallery"
      />
      <PageHero
        title="Photo Gallery"
        lede="Inside Amaltas Institute of Medical Sciences."
        breadcrumb="Quick Links"
        image="/images/campus/aerial.jpg"
      />

      <section className="section">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo, i) => (
              <Reveal as="li" key={photo.src} delay={(i % 3) * 0.06}>
                <button
                  type="button"
                  onClick={() => setActive(photo)}
                  className="card group block w-full overflow-hidden text-left"
                  aria-label={`Open ${photo.alt}`}
                >
                  <div className="card-media">
                    <Img src={photo.src} alt={photo.alt} ratio="aspect-[4/3]" />
                  </div>
                </button>
              </Reveal>
            ))}
          </ul>
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
              className="w-full max-w-4xl overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Img src={active.src} alt={active.alt} ratio="aspect-[16/10]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
