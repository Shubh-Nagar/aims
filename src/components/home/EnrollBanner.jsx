import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Vitals from '@/components/ui/Vitals'

/** The closing call to action, shown above the footer on every page. */
export default function EnrollBanner() {
  return (
    <section className="relative overflow-hidden bg-gold-500">
      <div className="container relative py-14 md:py-20">
        <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-center">
          <Reveal>
            <p className="text-2xs font-semibold uppercase tracking-eyebrow text-brand-900/70">Enroll</p>
            <h2 className="mt-4 max-w-xl text-3xl leading-[1.12] text-brand-900 md:text-[2.6rem]">
              Are you ready to take the next step toward your future career?
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3 md:justify-end">
            <Button to="/admission" variant="primary">
              Admission enquiry
            </Button>
            <Button
              href="https://amaltasmedicalcollege.in/schedule-a-tour/"
              variant="outline"
              className="border-brand-900/30 text-brand-900"
            >
              Schedule a visit
            </Button>
          </Reveal>
        </div>
      </div>
      <Vitals tone="pine" className="h-8 opacity-30" duration={2.4} />
    </section>
  )
}
