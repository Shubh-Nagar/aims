import { applySteps } from '@/data/site'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import SectionBg from '@/components/ui/SectionBg'

/**
 * The steps genuinely are a sequence, so the numbering carries real
 * information rather than decoration.
 */
export default function HowToApply() {
  return (
    <section className="section relative isolate overflow-hidden bg-surface">
      {/* Deliberate break in the rhythm: the warm spotlight lands on the one
          section that asks the reader to act. */}
      <SectionBg variant="spotlight" />
      <div className="container">
        <SectionHeading
          from="left"
          eyebrow="How to apply"
          title={
            <>
              Three steps <span className="text-muted">from enquiry to enrolment</span>
            </>
          }
          action={{ label: 'View all requirements', to: '/admission' }}
        />

        <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-line md:grid-cols-3">
          {applySteps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 0.09} className="group bg-surface p-8 transition-colors duration-500 hover:bg-brand-50/70">
              <span className="font-display text-5xl text-line transition-colors duration-500 group-hover:text-gold-400">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-5 text-xl">{step.title}</h3>
              <p className="prose-aims mt-3">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
