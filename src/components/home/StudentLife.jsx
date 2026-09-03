import { Link } from 'react-router-dom'
import { helplines } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'
import Blob from '@/components/ui/Blob'

const strands = [
  { label: 'Campus festivities', image: '/images/student-life/festivities.jpg' },
  { label: 'Sports & fitness activities', image: '/images/student-life/sports.jpg' },
  { label: 'Community service projects', image: '/images/student-life/community.jpg' },
]

export default function StudentLife() {
  return (
    <section className="section relative isolate overflow-hidden">
      <Blob tone="gold" className="-z-10 -right-32 top-0" size="h-96 w-96" duration={22} />
      <div className="container">
        <SectionHeading
          from="left"
          eyebrow="Student life"
          title={
            <>
              A vibrant, <span className="text-muted">inclusive community</span>
            </>
          }
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

        <Reveal delay={0.1} className="mt-8">
          <div className="grid gap-8 rounded-2xl bg-brand-100 p-8 md:grid-cols-[1.4fr_1fr] md:items-center md:p-12">
            <div>
              <p className="eyebrow text-gold-700">Safeguarding student welfare</p>
              <h3 className="mt-4 text-2xl text-brand-900 md:text-3xl">
                A proactive Anti-Ragging Committee, and a helpline that answers around the clock
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-muted">
                At Amaltas Institute of Medical Sciences we prioritise student safety and well-being. Our
                Anti-Ragging Committee ensures a secure campus, with a dedicated toll-free helpline and
                additional support lines.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button to="/antiragging-measures" variant="gold">
                  Anti-ragging measures
                </Button>
                <Button to="/contact" variant="outline">
                  Contact us
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-brand-900/10 bg-white/60 p-7">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">Toll free</p>
              <a
                href={`tel:${helplines.tollFree.replace(/-/g, '')}`}
                className="mt-3 block font-display text-3xl leading-none text-brand-900 transition-colors hover:text-gold-700"
              >
                {helplines.tollFree}
              </a>
              <ul className="mt-5 space-y-2 text-sm text-brand-800">
                {helplines.numbers.map((number) => (
                  <li key={number}>
                    <a href={`tel:${number.replace(/-/g, '')}`} className="transition-colors hover:text-gold-700">
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
