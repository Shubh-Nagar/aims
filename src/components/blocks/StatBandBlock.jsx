import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Blob from '@/components/ui/Blob'

/**
 * Headline figures. The first thing a reader should absorb on a data-heavy
 * page — the numbers arrive on their own, counting up as the band appears.
 */
export default function StatBandBlock({ stats = [] }) {
  return (
    <div className="relative -mx-5 mt-8 overflow-hidden rounded-3xl bg-brand-100 px-5 py-10 md:mx-0 md:px-10">
      <Blob tone="gold" className="-right-20 -top-24" size="h-72 w-72" duration={22} />
      <Blob tone="brand" className="-bottom-28 -left-16" size="h-64 w-64" duration={26} delay={2} />
      <div className="pointer-events-none absolute inset-0 grain opacity-50" aria-hidden="true" />
      <dl className="relative grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-dashed lg:divide-brand-900/15">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="lg:pl-8 lg:first:pl-0">
            <dt className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">{stat.label}</dt>
            <dd className="mt-3 font-display text-[2.75rem] leading-none text-brand-900">
              <Counter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix ?? ''} />
            </dd>
            {stat.note && <p className="mt-2.5 text-sm text-muted">{stat.note}</p>}
          </Reveal>
        ))}
      </dl>
    </div>
  )
}
