import { programmeHighlights } from '@/data/courses'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Img from '@/components/ui/Img'

export default function Programs() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Graduate and postgraduate programmes"
          title="Four routes into clinical practice"
          lede="630+ places across undergraduate, postgraduate and paramedical fields, each combining high-quality education with practical training at Amaltas Hospital."
          action={{ label: 'See all courses', to: '/courses' }}
        />

        <Reveal delay={0.12} className="mt-12">
          <figure className="group relative overflow-hidden rounded-2xl">
            <Img
              src="/images/campus/hospital.jpg"
              alt="Amaltas Hospital, the teaching hospital on the AIMS campus"
              ratio="aspect-[16/9] md:aspect-[21/9]"
              className="transition-transform duration-[900ms] ease-smooth group-hover:scale-[1.04]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/40 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-end p-6 md:p-10">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">
                Clinical training
              </p>
              <p className="mt-3 font-display text-xl leading-snug text-white md:text-2xl">
                Every programme is taught alongside a working hospital on the same campus
              </p>
            </figcaption>
          </figure>
        </Reveal>

        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {programmeHighlights.map((programme, i) => (
            <Reveal as="li" key={programme.code} delay={i * 0.07}>
              <article className="card group flex h-full flex-col p-7 md:p-9">
                <div className="flex items-start justify-between gap-6">
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-2xs font-semibold uppercase tracking-eyebrow text-brand-700 transition-colors duration-300 group-hover:bg-gold-100 group-hover:text-gold-700">
                    {programme.code}
                  </span>
                  <span className="font-display text-sm text-muted">{programme.seats}</span>
                </div>
                <h3 className="mt-6 text-2xl transition-colors duration-300 group-hover:text-brand-600">
                  {programme.title}
                </h3>
                <p className="prose-aims mt-4 flex-1">{programme.body}</p>
                <div className="mt-7">
                  <Button to="/courses" variant="outline" className="px-5 py-2.5 text-xs">
                    See details
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
