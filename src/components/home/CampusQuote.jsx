import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { campusQuote } from '@/data/site'
import { EASE, viewportReplay } from '@/lib/motion'
import Vitals from '@/components/ui/Vitals'

/**
 * Full-bleed photographic band carrying the institution's own voice.
 *
 * This is the beat the old stats section used to occupy. Moving the numbers
 * onto their own pine panel (see <Stats>) freed the photograph to do what a
 * big photograph is actually good at — hold one line of text and let the
 * reader breathe between two dense sections. It sits six screens below the
 * hero so the page's two dark, photographic bands never read as a repeat.
 *
 * The quote is an excerpt, so the attribution is a link through to the page
 * carrying the message in full rather than a dead byline.
 */
export default function CampusQuote() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section
      ref={ref}
      className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-brand-950 py-24 md:py-32"
    >
      <motion.div
        style={reduced ? undefined : { y: imageY }}
        className="absolute inset-0 -z-10 scale-110"
        aria-hidden="true"
      >
        <img
          src={campusQuote.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover [filter:saturate(1.18)_contrast(1.06)_brightness(1.08)]"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </motion.div>
      {/* Deliberately light. This is the page's only night frame and its lit
          windows are the whole point of using it, so the vignette is tuned to
          let them read and the heading leans on its text-shadow instead.
          Centred copy wants a vignette, not the hero's directional wedge. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(85%_75%_at_50%_50%,rgba(5,27,13,.40),rgba(5,27,13,.80))]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 grain opacity-40" />

      <div className="container relative">
        <motion.blockquote
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportReplay}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto max-w-4xl text-center"
        >
          <span
            className="pointer-events-none block select-none font-display text-[7rem] leading-[0.5] text-gold-500/25"
            aria-hidden="true"
          >
            &ldquo;
          </span>
          <p className="mt-8 font-display text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.35] text-white [text-shadow:0_2px_36px_rgba(5,27,13,.6)]">
            {campusQuote.quote}
          </p>
          <footer className="mt-9">
            <Link
              to={campusQuote.href}
              className="group inline-flex flex-wrap items-center justify-center gap-x-2 text-2xs font-semibold uppercase tracking-eyebrow text-gold-300 transition-colors duration-300 hover:text-gold-200"
            >
              {campusQuote.name}
              <span className="font-normal text-white/45">/ {campusQuote.role}</span>
              <ArrowUpRight
                className="h-3.5 w-3.5 transition-transform duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </footer>
        </motion.blockquote>
        <Vitals tone="gold" className="mx-auto mt-14 h-7 max-w-xl opacity-55" duration={2.4} repeat />
      </div>
    </section>
  )
}
