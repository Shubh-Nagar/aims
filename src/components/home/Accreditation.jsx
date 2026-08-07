import { accreditations } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import { FileText } from 'lucide-react'

// The bodies whose marks the institute carries. Logos are trademarks of the
// respective councils and are shown here as statements of recognition.
const regulators = [
  { label: 'National Medical Commission', src: '/images/recognition/nmc.png' },
  { label: 'NABH accredited', src: '/images/recognition/nabh.png' },
  { label: 'NABL accredited', src: '/images/recognition/nabl.png' },
  { label: 'Indian Nursing Council', src: '/images/recognition/inc.png' },
  { label: 'M.P. Private University Regulatory Commission', src: '/images/recognition/mppurc.png' },
  { label: 'University Grants Commission', src: '/images/recognition/ugc.png' },
]

export default function Accreditation() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Awards & accreditation"
          title={
            <>
              Recognised standards, <span className="text-muted">verifiable on paper</span>
            </>
          }
          lede="At AIMS we celebrate excellence and recognise outstanding contributions from our students and faculty. Every certificate below is published in full."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

        <Reveal delay={0.1} className="mt-14">
          <p className="text-2xs font-semibold uppercase tracking-eyebrow text-muted">
            Recognised by
          </p>
          <div className="group relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-16 py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...regulators, ...regulators].map((body, i) => (
                <img
                  key={`${body.label}-${i}`}
                  src={body.src}
                  alt={body.label}
                  title={body.label}
                  loading="lazy"
                  className="h-14 w-auto max-w-none shrink-0 opacity-70 grayscale transition duration-500 ease-smooth hover:opacity-100 hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
