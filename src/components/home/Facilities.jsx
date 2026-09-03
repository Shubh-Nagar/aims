import { useState } from 'react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

const CATEGORIES = [
  {
    key: 'residential',
    label: 'Residential',
    items: [
      { label: "Girls' hostels", image: '/images/facilities/hostel-girls.jpg' },
      { label: "Boys' hostels", image: '/images/facilities/hostel-boys.jpg' },
      { label: 'A hostel room', image: '/images/facilities/hostel-room.jpg' },
    ],
  },
  {
    key: 'academic',
    label: 'Academic',
    items: [
      { label: 'Teaching laboratories', image: '/images/campus/labs.jpg' },
      { label: 'Library', image: '/images/campus/library.jpg' },
      { label: 'Computer laboratory', image: '/images/facilities/computer-lab.jpg' },
      { label: 'Seminar hall', image: '/images/facilities/seminar-hall.jpg' },
      { label: 'Reading room', image: '/images/facilities/reading-room.jpg' },
    ],
  },
  {
    key: 'wellness',
    label: 'Wellness',
    items: [
      { label: 'Gymnasium', image: '/images/facilities/gym.jpg' },
      { label: 'Sports grounds', image: '/images/student-life/sports.jpg' },
    ],
  },
]

export default function Facilities() {
  const [active, setActive] = useState(CATEGORIES[0].key)
  const category = CATEGORIES.find((c) => c.key === active)

  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          from="right"
          eyebrow="Facilities"
          title={
            <>
              Life on <span className="text-muted">a 27.378-acre campus</span>
            </>
          }
          lede="A modern residential campus designed to support learning, rest and everything between."
        />

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActive(cat.key)}
              aria-current={cat.key === active}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                cat.key === active
                  ? 'bg-brand-700 text-white'
                  : 'bg-brand-50 text-brand-700 hover:bg-brand-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {category.items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <Img
                  src={item.image}
                  alt={item.label}
                  ratio="aspect-[4/3]"
                  className="transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/15 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-sm font-medium text-white">
                  <span className="h-px w-4 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-8" />
                  {item.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
