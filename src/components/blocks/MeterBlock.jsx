import Reveal from '@/components/ui/Reveal'
import BarMeter from '@/components/ui/BarMeter'

/**
 * A set of figures shown as proportional bars. Used where the *relative*
 * scale is the story (built-up area, beds per department) and a plain table
 * would hide it.
 */
export default function MeterBlock({ items = [], suffix = '', decimals = 0, tone = 'brand', total }) {
  const max = Math.max(...items.map((item) => item.value), 0)

  return (
    <Reveal className="mt-6 rounded-2xl bg-surface p-6 shadow-card ring-1 ring-line md:p-8">
      <div className="divide-y divide-line">
        {items.map((item, i) => (
          <BarMeter
            key={item.label}
            label={item.label}
            value={item.value}
            max={max}
            suffix={item.suffix ?? suffix}
            decimals={item.decimals ?? decimals}
            note={item.note}
            index={i}
            tone={tone}
          />
        ))}
      </div>
      {total && (
        <div className="mt-5 flex items-baseline justify-between border-t border-line pt-5">
          <span className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
            {total.label}
          </span>
          <span className="font-display text-2xl text-brand-900 tabular-nums">{total.value}</span>
        </div>
      )}
    </Reveal>
  )
}
