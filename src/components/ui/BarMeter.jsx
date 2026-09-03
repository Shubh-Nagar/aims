import { motion, useReducedMotion } from 'framer-motion'
import { viewportOnce, EASE } from '@/lib/motion'
import Counter from './Counter'

/**
 * A proportional bar that fills as it scrolls into view, with its figure
 * counting up alongside. Turns a column of numbers into a shape the reader
 * understands before they have read a single digit.
 */
export default function BarMeter({
  label,
  value,
  max,
  suffix = '',
  decimals = 0,
  note,
  index = 0,
  tone = 'brand',
}) {
  const reduced = useReducedMotion()
  const pct = max > 0 ? Math.max((value / max) * 100, 1.5) : 0
  const fill =
    tone === 'gold'
      ? 'bg-gradient-to-r from-gold-500 to-gold-300'
      : 'bg-gradient-to-r from-brand-700 to-brand-400'

  return (
    <div className="group py-3.5">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-brand-900">{label}</span>
        <span className="shrink-0 font-display text-lg text-brand-800 tabular-nums">
          <Counter value={value} decimals={decimals} suffix={suffix} />
        </span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-brand-100">
        <motion.div
          className={`h-full rounded-full ${fill}`}
          initial={reduced ? { width: `${pct}%` } : { width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={viewportOnce}
          transition={{ duration: reduced ? 0 : 1.1, delay: reduced ? 0 : index * 0.08, ease: EASE }}
        />
      </div>
      {note && <p className="mt-1.5 text-xs text-muted">{note}</p>}
    </div>
  )
}
