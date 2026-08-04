import { Link } from 'react-router-dom'
import { helplines } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'

const strands = [
  { label: 'Campus festivities', image: '/images/student-life/festivities.jpg' },
  { label: 'Sports & fitness activities', image: '/images/student-life/sports.jpg' },
  { label: 'Community service projects', image: '/images/student-life/community.jpg' },
]

// Residential and study facilities, shown as a photographic strip.
const facilities = [
  { label: "Girls' hostels", image: '/images/facilities/hostel-girls.jpg' },
  { label: "Boys' hostels", image: '/images/facilities/hostel-boys.jpg' },
  { label: 'Gymnasium', image: '/images/facilities/gym.jpg' },
  { label: 'Reading room', image: '/images/facilities/reading-room.jpg' },
]

export default function StudentLife() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Student life"
          title="Our students create a vibrant and inclusive community"
          action={{ label: 'More information', to: '/events' }}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {strands.map((strand, i) => (
            <Reveal as="li" key={strand.label} delay={i * 0.08}>
              <Link to="/events" className="card group block overflow-hidden">
                <div className="card-media">
                  <Img src={strand.image} alt={strand.label} ratio="aspect-[5/4]" />
                </div>
                <div className="flex items-center justify-between gap-4 p-6">
                  <h3 className="text-lg transition-colors duration-300 group-hover:text-brand-600">
                    {strand.label}
                  </h3>
                  <span className="h-px w-6 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility, i) => (
            <Reveal as="li" key={facility.label} delay={i * 0.06}>
              <figure className="group relative overflow-hidden rounded-2xl">
                <Img
                  src={facility.image}
                  alt={facility.label}
                  ratio="aspect-[4/3]"
                  className="transition-transform duration-700 ease-smooth group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-brand-950/20 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-4 text-sm font-medium text-white">
                  <span className="h-px w-4 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-8" />
                  {facility.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-8">
          <div className="grid gap-8 rounded-2xl bg-brand-800 p-8 text-white md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
            <div>
              <p className="eyebrow text-gold-300">Safeguarding student welfare</p>
              <h3 className="mt-4 text-2xl md:text-3xl">
                A proactive Anti-Ragging Committee, and a helpline that answers around the clock
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-white/70">
                At Amaltas Institute of Medical Sciences we prioritise student safety and well-being. Our
                Anti-Ragging Committee ensures a secure campus, with a dedicated toll-free helpline and
                additional support lines.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/antiragging-measures" variant="gold">
                  Anti-ragging measures
                </Button>
                <Button to="/contact" variant="light">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-7">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">Toll free</p>
              <a
                href={`tel:${helplines.tollFree.replace(/-/g, '')}`}
                className="mt-3 block font-display text-3xl leading-none transition-colors hover:text-gold-300"
              >
                {helplines.tollFree}
              </a>
              <ul className="mt-5 space-y-2 text-sm text-white/65">
                {helplines.numbers.map((number) => (
                  <li key={number}>
                    <a href={`tel:${number.replace(/-/g, '')}`} className="transition-colors hover:text-gold-300">
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
