import { useState } from 'react'
import { applySteps, site } from '@/data/site'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { Check } from 'lucide-react'

const COURSE_OPTIONS = [
  'M.B.B.S.',
  'B.Sc. Nursing',
  'M.Sc. Nursing',
  'Paramedical Courses',
  'P.G. Courses',
  'B.H.M.S.',
  'B.Pharm',
  'D.Pharm',
]

const field =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-muted/70 focus:border-brand-500'

export default function Admission() {
  const [sent, setSent] = useState(false)

  // No backend is wired up yet — point `action` at the college's form
  // handler (or an API route) when the endpoint is available.
  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
  }

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
              <p className="mt-3 text-sm">
                <a href={site.phoneHref} className="font-medium text-brand-800 hover:text-gold-600">
                  {site.phone}
                </a>
                {' · '}
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

              {sent ? (
                <div className="mt-8 flex items-start gap-4 rounded-xl bg-brand-50 p-6">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-medium text-brand-900">Enquiry ready to send</p>
                    <p className="prose-aims mt-1">
                      Connect this form to the college mail handler or ERP endpoint to deliver it. Until then,
                      reach the admissions office on {site.phone}.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate={false}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-xs font-medium text-brand-900">
                        Full name
                      </label>
                      <input id="name" name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-xs font-medium text-brand-900">
                        Phone
                      </label>
                      <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="10-digit mobile number" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-xs font-medium text-brand-900">
                      Email
                    </label>
                    <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
                  </div>
                  <div>
                    <label htmlFor="course" className="mb-2 block text-xs font-medium text-brand-900">
                      Select course
                    </label>
                    <select id="course" name="course" required className={field} defaultValue="">
                      <option value="" disabled>
                        Choose a course
                      </option>
                      {COURSE_OPTIONS.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="mb-2 block text-xs font-medium text-brand-900">
                      Message <span className="font-normal text-muted">(optional)</span>
                    </label>
                    <textarea id="message" name="message" rows={4} className={field} placeholder="Anything you would like us to know" />
                  </div>
                  <Button as="button" type="submit" variant="gold" className="w-full">
                    Send enquiry
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
