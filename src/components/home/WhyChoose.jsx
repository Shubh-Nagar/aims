import { Fragment } from 'react'
import {
  Stethoscope,
  Trees,
  Users,
  BadgeCheck,
  GraduationCap,
  Microscope,
  ShieldCheck,
  HeartHandshake,
} from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'

/**
 * Eight reasons arranged as spokes around the college crest. The dotted
 * connectors are decorative and only drawn on lg+, where the two columns
 * actually sit either side of the hub.
 */
const reasons = [
  {
    icon: Stethoscope,
    title: 'A Teaching Hospital On Campus',
    note: 'Clinical Training Where Patients Are Treated',
  },
  {
    icon: Users,
    title: 'Experienced Teaching Faculty',
    note: '537 Teachers Across The Departments',
  },
  {
    icon: BadgeCheck,
    title: 'Accredited And Verifiable',
    note: 'NABH, NABL And ISO 9001 Certified',
  },
  {
    icon: HeartHandshake,
    title: 'Rural And Community Outreach',
    note: 'Medicine Practised Where It Is Needed',
  },
  {
    icon: Trees,
    title: 'A 27.378-Acre Residential Campus',
    note: 'Room To Learn, Live And Grow',
  },
  {
    icon: GraduationCap,
    title: 'UG, PG And Paramedical Pathways',
    note: '302 Seats Across The Programmes',
  },
  {
    icon: Microscope,
    title: 'Modern Laboratories And Library',
    note: 'Anatomy, Physiology And Biochemistry',
  },
  {
    icon: ShieldCheck,
    title: 'Round-The-Clock Student Safety',
    note: 'An Anti-Ragging Helpline That Answers',
  },
]

const leftColumn = reasons.slice(0, 4)
const rightColumn = reasons.slice(4)

const rowStart = ['row-start-1', 'row-start-2', 'row-start-3', 'row-start-4']

function Feature({ item }) {
  const Icon = item.icon
  return (
    <div className="card group flex h-full items-start gap-4 p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 ease-smooth group-hover:bg-gold-100 group-hover:text-gold-700">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-base leading-snug transition-colors duration-300 group-hover:text-brand-600">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.note}</p>
      </div>
    </div>
  )
}

const Dot = ({ className }) => (
  <span className={`absolute h-1.5 w-1.5 rounded-full bg-brand-300 ${className}`} />
)

/** side: which column the card sits in · elbow: 'down' | 'up' | null */
function Connector({ side, elbow }) {
  const isLeft = side === 'left'
  return (
    <div className="relative" aria-hidden="true">
      <span
        className={`absolute top-1/2 border-t border-dashed border-brand-200 ${
          elbow ? (isLeft ? 'left-0 right-[42%]' : 'left-[42%] right-0') : 'left-0 right-0'
        }`}
      />
      <Dot className={`top-1/2 -translate-y-1/2 ${isLeft ? 'left-0' : 'right-0'}`} />

      {elbow ? (
        <>
          <span
            className={`absolute h-12 border-l border-dashed border-brand-200 ${
              isLeft ? 'left-[58%]' : 'right-[58%]'
            } ${elbow === 'down' ? 'top-1/2' : 'bottom-1/2'}`}
          />
          <Dot
            className={`${isLeft ? 'left-[58%]' : 'right-[58%]'} -translate-x-1/2 ${
              elbow === 'down' ? 'top-[calc(50%+3rem)] -translate-y-1/2' : 'bottom-[calc(50%+3rem)] translate-y-1/2'
            }`}
          />
        </>
      ) : (
        <Dot className={`top-1/2 -translate-y-1/2 ${isLeft ? 'right-0' : 'left-0'}`} />
      )}
    </div>
  )
}

function Crest({ className = '', size = 'h-24' }) {
  return (
    <div
      className={`relative grid place-items-center rounded-full bg-surface shadow-lift ring-1 ring-line ${className}`}
    >
      <span className="absolute inset-3 rounded-full border border-dashed border-brand-100" />
      <img
        src="/images/aims-emblem.png"
        alt="Amaltas Institute of Medical Sciences crest"
        className={`${size} aspect-square w-auto object-contain`}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling?.classList.remove('hidden')
        }}
      />
      <span className="hidden px-6 text-center">
        <span className="block font-display text-3xl font-semibold text-brand-900">AIMS</span>
        <span className="mt-1 block text-2xs uppercase tracking-eyebrow text-muted">Dewas</span>
      </span>
    </div>
  )
}

export default function WhyChoose() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Why choose us"
          title={
            <>
              Why <span className="text-muted">Amaltas Institute of Medical Sciences</span>
            </>
          }
          lede="A campus built for your rise — academically, clinically and personally."
        />

        {/* Hub and spokes — lg and up */}
        <div className="mt-16 hidden grid-cols-[minmax(0,1.3fr)_minmax(2rem,0.5fr)_auto_minmax(2rem,0.5fr)_minmax(0,1.3fr)] gap-y-6 lg:grid">
          {leftColumn.map((item, i) => {
            const outer = i === 0 || i === 3
            return (
              <Fragment key={item.title}>
                <Reveal delay={i * 0.06} className={`col-start-1 ${rowStart[i]}`}>
                  <Feature item={item} />
                </Reveal>
                <div className={`col-start-2 ${rowStart[i]}`}>
                  <Connector side="left" elbow={outer ? (i === 0 ? 'down' : 'up') : null} />
                </div>
              </Fragment>
            )
          })}

          {rightColumn.map((item, i) => {
            const outer = i === 0 || i === 3
            return (
              <Fragment key={item.title}>
                <div className={`col-start-4 ${rowStart[i]}`}>
                  <Connector side="right" elbow={outer ? (i === 0 ? 'down' : 'up') : null} />
                </div>
                <Reveal delay={i * 0.06} className={`col-start-5 ${rowStart[i]}`}>
                  <Feature item={item} />
                </Reveal>
              </Fragment>
            )
          })}

          <Reveal className="col-start-3 row-start-1 row-span-4 self-center px-4">
            <Crest className="h-40 w-40 xl:h-48 xl:w-48" size="h-20 xl:h-24" />
          </Reveal>
        </div>

        {/* Stacked — below lg */}
        <div className="mt-12 lg:hidden">
          <Reveal className="flex justify-center">
            <Crest className="h-36 w-36" size="h-16" />
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {reasons.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 0.05}>
                <Feature item={item} />
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
