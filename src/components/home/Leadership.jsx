import { Link } from 'react-router-dom'
import { leadership, leadershipIntro } from '@/data/leadership'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { zoomIn } from '@/lib/motion'

// Centres a ragged final row (e.g. 5 cards = a full row of 3 then a
// centred row of 2) the same way the reference layout does.
function rowStartClass(i, total) {
  const remainder = total % 3
  if (remainder === 0) return ''
  const rowStart = total - remainder
  if (i < rowStart) return ''
  if (remainder === 1) return 'lg:col-start-3'
  return i - rowStart === 0 ? 'lg:col-start-2' : 'lg:col-start-4'
}

export default function Leadership() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          from="right"
          eyebrow="Insights from our leadership"
          title={
            <>
              The people <span className="text-muted">steering the institute</span>
            </>
          }
          lede={leadershipIntro}
        />

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {leadership.map((person, i) => (
            <Reveal
              as="li"
              key={person.slug}
              variants={zoomIn}
              delay={i * 0.08}
              className={`lg:col-span-2 ${rowStartClass(i, leadership.length)}`}
            >
              <Link
                to={`/${person.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-white shadow-sm transition-all duration-500 ease-smooth hover:-translate-y-2 hover:border-brand-200 hover:shadow-lift"
              >
                <Img
                  src={person.image}
                  alt={person.name}
                  ratio="aspect-[3/4]"
                  wrapperClassName="shrink-0"
                  className="object-top transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-600">
                    {person.role}
                  </p>
                  <h3 className="mt-2 text-lg">{person.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{person.blurb}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
