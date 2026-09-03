import Reveal from '@/components/ui/Reveal'
import Vitals from '@/components/ui/Vitals'
import { scaleIn } from '@/lib/motion'

/** A pull quote for statements that carry the institution's voice. */
export default function QuoteBlock({ quote, attribution }) {
  return (
    <Reveal variants={scaleIn} className="relative mt-8 overflow-hidden rounded-3xl bg-brand-100 p-8 md:p-12">
      <div className="pointer-events-none absolute inset-0 grain opacity-50" aria-hidden="true" />
      <span
        className="pointer-events-none absolute -right-4 -top-10 select-none font-display text-[12rem] leading-none text-gold-500/15"
        aria-hidden="true"
      >
        &rdquo;
      </span>
      <blockquote className="relative">
        <p className="font-display text-xl leading-[1.5] text-brand-900 md:text-[1.75rem]">{quote}</p>
        {attribution && (
          <footer className="mt-5 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
            {attribution}
          </footer>
        )}
      </blockquote>
      <Vitals tone="gold" className="mt-8 h-6 opacity-60" duration={2.2} />
    </Reveal>
  )
}
