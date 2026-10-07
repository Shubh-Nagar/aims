import { useState } from 'react'
import { imgIn } from '@/lib/motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Lightbox from '@/components/ui/Lightbox'

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
          <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {photos.map((photo, i) => (
              <Reveal as="li" key={photo.src} delay={(i % 3) * 0.06} variants={imgIn}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
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

      <Lightbox items={photos} index={active} onClose={() => setActive(null)} onIndex={setActive} />
    </>
  )
}
