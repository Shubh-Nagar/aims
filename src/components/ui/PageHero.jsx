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

/* Focal points. On desktop the banner is a ~3.5:1 strip, so a centred crop
   of a 16:9 photograph slices heads off anyone standing in it. Each entry is
   a CSS object-position chosen by eye for that photograph, keyed on the file
   so it applies on every page that reuses it (event pages included).
   Anything unlisted sits a little above centre — most of these photographs
   are of people, whose faces live in the upper half of the frame. */
const FOCUS = {
  '/images/students/cohort.webp': '50% 22%',
  '/images/students/residents.webp': '50% 22%',
  '/images/students/lecture-hall.webp': '50% 40%',
  '/images/students/classroom.webp': '50% 30%',
  '/images/students/class-group.webp': '50% 42%',
  '/images/courses/clinical-rounds.jpg': '50% 22%',
  '/images/courses/anatomy-lab.jpg': '50% 18%',
  '/images/courses/hospital-training.jpg': '50% 28%',
  '/images/courses/simulation.jpg': '50% 12%',
  '/images/courses/lecture.jpg': '50% 45%',
  '/images/campus/walkway.jpg': '50% 62%',
  '/images/campus/hero.jpg': '50% 55%',
  '/images/campus/aerial.jpg': '50% 45%',
  '/images/campus/hospital.jpg': '50% 40%',
  '/images/gallery/gallery-11.jpg': '50% 28%',
  '/images/news/convocation.jpg': '50% 12%',
  '/images/gallery/convocation/convocation-02.webp': '50% 72%',
  // Event photographs (used as banners on /events/:slug)
  '/images/news/republic-day.jpg': '50% 60%',
  '/images/news/ai-healthcare.jpg': '50% 60%',
  '/images/news/ncmsap-2025.jpg': '50% 50%',
  '/images/news/amr-awareness-week.jpg': '50% 70%',
  '/images/news/white-coat.jpg': '50% 75%',
  '/images/news/cpr-jagrukta-week.jpg': '50% 80%',
  '/images/news/cpr-week.jpg': '50% 80%',
  '/images/news/captains-of-industry.jpg': '50% 20%',
  '/images/news/world-environment-day.jpg': '50% 55%',
  '/images/news/cancer-opd-tobacco-day.jpg': '50% 50%',
  '/images/news/ecg-workshop.jpg': '50% 25%',
  '/images/news/sialoendoscope.jpg': '50% 15%',
  '/images/news/republic-day-76th.jpg': '50% 85%',
  '/images/news/diwali-special-school.jpg': '50% 70%',
  '/images/news/cancer-awareness-lecture.jpg': '50% 10%',
  '/images/awards/award-9.jpg': '50% 28%',
  '/images/press/WhatsApp-Image-2026-08-06-at-9.30.35-AM.jpeg': '50% 70%',
  '/images/student-life/sports.jpg': '50% 48%',
  '/images/student-life/community.jpg': '50% 35%',
}
const DEFAULT_FOCUS = '50% 35%'

// Pages with no breadcrumb (Contact) or an unmapped one still get a photograph.
const FALLBACK = { image: '/images/campus/hero.jpg', accent: 'gold' }

/* The accent is the colour of the light leaking into the empty corner of the
   photograph — it stays family-wide on purpose, so a section still reads as a
   section even though every page inside it has its own picture. Warm accents
   read inviting (events, admissions), cool ones read clinical
   (infrastructure, facilities). */
const ACCENTS = {
  pine: 'rgba(31,160,79,.20)',
  teal: 'rgba(111,192,141,.18)',
  gold: 'rgba(249,230,45,.24)',
  amber: 'rgba(251,238,108,.26)',
}

export default function PageHero({
  title,
  lede,
  breadcrumb,
  image,
  imagePosition,
  accent,
  tone = 'image',
  vitals = false,
}) {
  const light = tone === 'light'
  const section = SECTIONS[breadcrumb] ?? FALLBACK
  const src = image ?? section.image
  const focus = imagePosition ?? FOCUS[src] ?? DEFAULT_FOCUS
  const glow = ACCENTS[accent ?? section.accent] ?? ACCENTS.gold

  return (
    <header
      className={`relative overflow-hidden pb-16 pt-[calc(var(--header-h)+var(--topbar-h)+3.5rem)] md:pb-24 lg:min-h-[520px] ${
        light ? 'bg-brand-100 text-brand-900' : 'bg-brand-950 text-white'
      }`}
    >
      {!light && (
        /* Starts below the fixed site header, so no part of the photograph
           is hidden behind it and the focal points in FOCUS hold. */
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-[calc(var(--header-h)+var(--topbar-h))]"
          aria-hidden="true"
        >
          {/* This is the page's LCP element, so it is never lazy. The brand-950
              ground underneath means a missing file degrades to deep pine
              rather than to white-on-white. */}
          <img
            src={src}
            alt=""
            fetchpriority="high"
            style={{ objectPosition: focus }}
            className="h-full w-full object-cover [filter:saturate(1.15)_contrast(1.05)]"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top_right,rgba(7,29,16,.95)_0%,rgba(7,29,16,.78)_30%,rgba(7,29,16,.42)_58%,rgba(7,29,16,.12)_84%)]" />
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
              <Link to="/" className={`-my-2 inline-block py-2 transition-colors ${light ? 'hover:text-gold-700' : 'hover:text-gold-300'}`}>
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
            light ? '' : 'text-white [text-shadow:0_2px_34px_rgba(7,29,16,.55)]'
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
