import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { EASE } from '@/lib/motion'
import Vitals from './Vitals'

/**
 * Shared banner for every interior page.
 *
 * `image` is expected to be passed per page, and chosen for that page's
 * subject: content pages carry it as `heroImage` in src/data/pages.js, the
 * one-off pages pass it at the call site, and an event detail page passes the
 * event's own photograph. Two pages in the same nav family should never share
 * one — a family-wide photograph makes six pages look like the same page.
 *
 * SECTIONS below is only the fallback for a page that passes nothing (or, on
 * an event, has no photograph of its own yet), keyed on `breadcrumb` so the
 * fallback is at least in the right register. `accent` follows the same
 * pattern. `tone="light"` drops back to the flat tint.
 *
 * The scrim is deliberately *directional*: it runs toward the top-right, so
 * it is heaviest exactly where the breadcrumb, heading and lede sit and lets
 * the far corner of the photograph through at full strength. A full-bleed
 * scrim dark enough to carry white text is dark enough to turn any
 * photograph to mud.
 */
const SECTIONS = {
  'About Us': { image: '/images/campus/walkway.jpg', accent: 'pine' },
  Institutional: { image: '/images/campus/night.jpg', accent: 'pine' },
  Infrastructure: { image: '/images/campus/hospital.jpg', accent: 'teal' },
  'Clinical Departments': { image: '/images/courses/clinical-rounds.jpg', accent: 'gold' },
  'Pre-Clinical Departments': { image: '/images/courses/anatomy-lab.jpg', accent: 'gold' },
  Antiragging: { image: '/images/antiragging/poster-1.jpg', accent: 'amber' },
  Events: { image: '/images/gallery/gallery-3.jpg', accent: 'amber' },
  'Important Links': { image: '/images/campus/library.jpg', accent: 'pine' },
  'Quick Links': { image: '/images/campus/lecture-hall.jpg', accent: 'teal' },
}

// Pages with no breadcrumb (Contact) or an unmapped one still get a photograph.
const FALLBACK = { image: '/images/campus/hero.jpg', accent: 'gold' }

/* The accent is the colour of the light leaking into the empty corner of the
   photograph — it stays family-wide on purpose, so a section still reads as a
   section even though every page inside it has its own picture. Warm accents
   read inviting (events, admissions), cool ones read clinical
   (infrastructure, facilities). */
const ACCENTS = {
  pine: 'rgba(38,197,100,.20)',
  teal: 'rgba(110,216,152,.18)',
  gold: 'rgba(233,168,37,.24)',
  amber: 'rgba(244,204,99,.26)',
}

export default function PageHero({
  title,
  lede,
  breadcrumb,
  image,
  accent,
  tone = 'image',
  vitals = false,
}) {
  const light = tone === 'light'
  const section = SECTIONS[breadcrumb] ?? FALLBACK
  const src = image ?? section.image
  const glow = ACCENTS[accent ?? section.accent] ?? ACCENTS.gold

  return (
    <header
      className={`relative overflow-hidden pt-[calc(var(--header-h)+4rem)] pb-16 md:pb-24 ${
        light ? 'bg-brand-100 text-brand-900' : 'bg-brand-950 text-white'
      }`}
    >
      {!light && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {/* This is the page's LCP element, so it is never lazy. The brand-950
              ground underneath means a missing file degrades to deep pine
              rather than to white-on-white. */}
          <img
            src={src}
            alt=""
            fetchpriority="high"
            className="h-full w-full object-cover [filter:saturate(1.15)_contrast(1.05)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(5,27,13,.95)_0%,rgba(5,27,13,.78)_30%,rgba(5,27,13,.42)_58%,rgba(5,27,13,.12)_84%)]" />
          {/* Light leak. Screen blend lifts the far corner of the photograph
              instead of laying a flat tint over it. */}
          <div
            className="absolute inset-0 mix-blend-screen"
            style={{ backgroundImage: `radial-gradient(46% 62% at 88% 12%, ${glow}, transparent 68%)` }}
          />
        </div>
      )}

      <div
        className={`pointer-events-none absolute inset-0 grain ${light ? 'opacity-40' : 'opacity-30'}`}
        aria-hidden="true"
      />

      {/* Institutional watermark, bleeding off the bottom-right corner. */}
      <img
        src="/images/aims-emblem.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className={`pointer-events-none absolute -bottom-16 -right-12 w-72 md:w-96 ${
          light ? 'opacity-[.06]' : 'opacity-[.07] [filter:brightness(0)_invert(1)]'
        }`}
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol
            className={`flex flex-wrap items-center gap-1 text-2xs uppercase tracking-eyebrow ${
              light ? 'text-brand-900/55' : 'text-white/60'
            }`}
          >
            <li>
              <Link to="/" className={`transition-colors ${light ? 'hover:text-gold-700' : 'hover:text-gold-300'}`}>
                Home
              </Link>
            </li>
            {breadcrumb && (
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                <span>{breadcrumb}</span>
              </li>
            )}
            <li className={`flex items-center gap-1 ${light ? 'text-gold-700' : 'text-gold-300'}`}>
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span aria-current="page">{title}</span>
            </li>
          </ol>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className={`max-w-4xl text-4xl leading-[1.08] md:text-6xl ${
            light ? '' : 'text-white [text-shadow:0_2px_34px_rgba(5,27,13,.55)]'
          }`}
        >
          {title}
        </motion.h1>

        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className={`mt-5 max-w-2xl text-[15px] leading-relaxed ${light ? 'text-muted' : 'text-white/75'}`}
          >
            {lede}
          </motion.p>
        )}
      </div>
      {vitals && <Vitals tone={light ? 'gold' : 'light'} className="mt-10 h-8 opacity-70" duration={2} />}
    </header>
  )
}
