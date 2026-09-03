import { accreditations } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import SectionBg from '@/components/ui/SectionBg'
import { FileText } from 'lucide-react'

export default function Accreditation() {
  return (
    <section className="section relative isolate overflow-hidden bg-surface">
      {/* Last beat before the footer — the colour pools settle rather than
          drift, so the page lands instead of trailing off. */}
      <SectionBg variant="mesh" parallax />
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
      </div>
    </section>
  )
}
