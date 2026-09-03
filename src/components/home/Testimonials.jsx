import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/testimonials'
import { EASE } from '@/lib/motion'
import SectionHeading from '@/components/ui/SectionHeading'
import Img from '@/components/ui/Img'
import SectionBg from '@/components/ui/SectionBg'

const AUTOPLAY_MS = 2200
const N = testimonials.length

// Slot each card can occupy, keyed by its offset from the active card
// (0 = centre/highlighted, ±1 = top row, ±2 = bottom row, ±3 = off-stage
// waiting to enter/exit). `left` is a percentage of the track — it moves
// the card horizontally; `x`/`y` are self-relative (-50%, ±40%) and just
// centre the card on that point and nudge it up or down for the stacked
// look. Framer Motion tweens every field whenever the offset changes, so
// the whole thing reads as one continuous conveyor rather than a swap.
const SLOTS = {
  '-3': { left: '-12%', y: 'calc(-50% + 42%)', scale: 0.6, opacity: 0, zIndex: 0 },
  '-2': { left: '14%', y: 'calc(-50% + 42%)', scale: 0.72, opacity: 0.85, zIndex: 10 },
  '-1': { left: '14%', y: 'calc(-50% - 42%)', scale: 0.8, opacity: 1, zIndex: 20 },
  0: { left: '50%', y: '-50%', scale: 1, opacity: 1, zIndex: 30 },
  1: { left: '86%', y: 'calc(-50% - 42%)', scale: 0.8, opacity: 1, zIndex: 20 },
  2: { left: '86%', y: 'calc(-50% + 42%)', scale: 0.72, opacity: 0.85, zIndex: 10 },
  3: { left: '112%', y: 'calc(-50% + 42%)', scale: 0.6, opacity: 0, zIndex: 0 },
}

function shortestOffset(index, active) {
  let raw = (index - active) % N
  if (raw > N / 2) raw -= N
  if (raw < -N / 2) raw += N
  return raw
}

function TestimonialCard({ item, offset, onSelect }) {
  const clamped = Math.max(-3, Math.min(3, offset))
  const slot = SLOTS[clamped]
  const active = offset === 0
  const visible = Math.abs(offset) <= 2

  return (
    <motion.div
      className="absolute top-1/2 w-[250px] sm:w-[280px]"
      animate={{ left: slot.left, y: slot.y, scale: slot.scale, opacity: slot.opacity }}
      initial={false}
      transition={{ duration: 0.65, ease: EASE }}
      style={{ x: '-50%', zIndex: slot.zIndex, pointerEvents: visible ? 'auto' : 'none' }}
    >
      <button
        type="button"
        onClick={() => onSelect(item.originalIndex)}
        disabled={active}
        aria-current={active}
        className={`block w-full rounded-2xl bg-surface p-5 text-left ring-1 transition-shadow duration-300 ${
          active ? 'cursor-default shadow-lift ring-brand-700' : 'cursor-pointer ring-line hover:ring-gold-400'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <Img
              src={item.image}
              alt={item.name}
              ratio="aspect-square"
              wrapperClassName={`shrink-0 rounded-full ${active ? 'w-12' : 'w-9'}`}
            />
            <div>
              <p className={`font-semibold text-brand-900 ${active ? 'text-sm' : 'text-xs'}`}>{item.name}</p>
              <p className="text-2xs text-muted">{item.role}</p>
            </div>
          </div>
          <Quote className={`shrink-0 text-gold-400 ${active ? 'h-6 w-6' : 'h-4 w-4'}`} aria-hidden="true" />
        </div>
        <p className={`prose-aims mt-4 line-clamp-3 ${active ? 'text-sm' : 'text-xs'}`}>{item.quote}</p>
      </button>
    </motion.div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const timerRef = useRef(null)

  const stop = () => timerRef.current && clearInterval(timerRef.current)
  const start = () => {
    if (reduced) return
    stop()
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % N), AUTOPLAY_MS)
  }

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced])

  const select = (i) => {
    setActive(i)
    start()
  }

  return (
    <section className="section relative isolate overflow-hidden bg-surface">
      {/* Trust reads as steadiness: one still wash, no drift, behind the
          card conveyor that is already moving. */}
      <SectionBg variant="calm" />
      <div className="container">
        <SectionHeading
          from="zoom"
          eyebrow="Testimonials"
          title="Hear it from our students"
          lede="Real experiences from students who have trained and studied at Amaltas Institute of Medical Sciences."
        />

        <div
          className="relative mt-14 h-[360px] sm:h-[400px]"
          onMouseEnter={stop}
          onMouseLeave={start}
        >
          {testimonials.map((item, i) => (
            <TestimonialCard
              key={item.id}
              item={{ ...item, originalIndex: i }}
              offset={shortestOffset(i, active)}
              onSelect={select}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show testimonial from ${item.name}`}
              aria-current={i === active}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? 'w-6 bg-brand-700' : 'w-1.5 bg-line hover:bg-gold-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
