import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FileText, X } from 'lucide-react'
import { accreditations } from '@/data/site'
import { EASE } from '@/lib/motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Vitals from '@/components/ui/Vitals'
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll'

const photos = Array.from({ length: 13 }, (_, i) => i + 1)
  .filter((n) => n !== 7)
  .map((n) => ({
    src: `/images/awards/award-${n}.jpg`,
    alt: `Amaltas Institute of Medical Sciences award photograph ${n}`,
  }))

export default function AwardsAchievements() {
  const [active, setActive] = useState(null)
  useLockBodyScroll(Boolean(active))

  return (
    <>
      <Seo
        title="Awards & Achievements | Amaltas Institute of Medical Sciences"
        description="Certificates, accreditations and awards earned by Amaltas Institute of Medical Sciences."
        path="/awards-achievements"
      />
      <PageHero
        title="Awards & Achievements"
        lede="Certificates, accreditations and recognitions earned by Amaltas Institute of Medical Sciences."
        breadcrumb="Events"
      />

      <section className="section-tight">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Certificates</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">Published in full</h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {accreditations.map((item, i) => (
              <Reveal as="li" key={item.label} delay={i * 0.06}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="card group flex h-full flex-col justify-between gap-8 p-6"
                >
                  <FileText
                    className="h-6 w-6 text-brand-400 transition-colors duration-300 group-hover:text-gold-500"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-base leading-snug transition-colors duration-300 group-hover:text-brand-600">
                      {item.label}
                    </h3>
                    <p className="mt-2 text-2xs uppercase tracking-eyebrow text-muted">{item.href.split('.').pop()}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Vitals className="h-8 opacity-60" duration={2.2} />

      <section className="section">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Awards</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">Moments of recognition</h2>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
