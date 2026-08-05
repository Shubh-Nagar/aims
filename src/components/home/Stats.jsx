import { stats } from '@/data/site'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Vitals from '@/components/ui/Vitals'

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-100 text-brand-900">
      <div className="pointer-events-none absolute inset-0 grain opacity-60" aria-hidden="true" />
      <Vitals tone="gold" className="h-8 opacity-50" duration={2.2} />
      <div className="container relative pb-16 pt-6 md:pb-20">
        <Reveal className="mb-10 flex items-center justify-between gap-6">
          <span className="h-px flex-1 bg-brand-900/10" aria-hidden="true" />
          <p className="shrink-0 text-right font-display text-sm italic text-muted">
            Twenty-seven acres, one working hospital.
          </p>
        </Reveal>
        <dl className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-dashed lg:divide-brand-900/15">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="lg:pl-8 lg:first:pl-0">
              <dt className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                {stat.label}
              </dt>
              <dd className="mt-3 font-display text-[3.2rem] leading-none text-brand-900">
                <Counter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} />
              </dd>
              <p className="mt-3 text-sm text-muted">{stat.note}</p>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
