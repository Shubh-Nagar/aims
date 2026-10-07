import { applySteps, site } from '@/data/site'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import EnquiryForm from '@/components/ui/EnquiryForm'

export default function Admission() {
  return (
    <>
      <Seo
        title="Admission | Amaltas Institute of Medical Sciences"
        description="Admission enquiry for MBBS, PG, nursing and paramedical courses at Amaltas Institute of Medical Sciences, Dewas."
        path="/admission"
      />
      <PageHero
        title="Admission"
        lede="Fill out the enquiry form and we guide you through the rest. We simplify the admission process and assist with financial aid if you are eligible."
        breadcrumb="Institutional"
        image="/images/campus/walkway.jpg"
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal as="p" className="eyebrow">
              The process
            </Reveal>
            <Reveal as="h2" delay={0.05} className="mt-5 text-3xl md:text-[2.4rem]">
              Three steps from enquiry to enrolment
            </Reveal>
            <ol className="mt-10 space-y-8">
              {applySteps.map((step, i) => (
                <Reveal as="li" key={step.title} delay={0.06 * i} className="flex gap-5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brand-700 font-display text-sm text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="prose-aims mt-2">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.2} className="mt-10 rounded-2xl bg-brand-50 p-6">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-brand-700">
                Admissions office
              </p>
              <p className="mt-3 text-sm text-muted">{site.address}</p>
              <p className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                <a href={site.phoneHref} className="font-medium text-brand-800 hover:text-gold-600">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="font-medium text-brand-800 hover:text-gold-600">
                  {site.email}
                </a>
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="card p-7 md:p-9">
              <h2 className="text-2xl">Admission enquiry form</h2>
              <p className="prose-aims mt-2">
                Tell us which course you are interested in and an admissions representative will contact you.
              </p>

              <EnquiryForm idPrefix="admission" className="mt-8" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
