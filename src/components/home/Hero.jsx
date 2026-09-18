import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react'
import { site } from '@/data/site'
import { EASE, stagger, wordUp } from '@/lib/motion'
import Button from '@/components/ui/Button'
import Vitals from '@/components/ui/Vitals'

const HEADLINE = ['A', 'sprawling', 'medical', 'campus']

const SOCIAL_ICONS = {
  Facebook,
  Twitter,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Instagram,
}

export default function Hero() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, 90])
  const scrimOpacity = useTransform(scrollY, [0, 500], [0.9, 1])

  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-brand-950 pb-16 pt-[calc(var(--header-h)+5rem)]">
      {/* Campus tour video plays behind the headline. The gradient sits underneath as the
          fallback, so a missing/blocked file degrades to pine rather than to nothing.
          Reduced-motion visitors get the static aerial instead of an autoplaying video. */}
      <motion.div
        style={reduced ? undefined : { y: imageY }}
        className="absolute inset-0 -z-20 scale-105 overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-brand-800"
      >
        {reduced ? (
          <img
            src="/images/campus/hero.jpg"
            alt=""
            fetchpriority="high"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        ) : (
          <motion.video
            src="/videos/campus-tour.mp4"
            /* First paint is a real frame of the campus rather than a
               gradient, which matters while a heavy file is still arriving —
               and it is the fallback outright when the file is absent, so
               there is deliberately no onError hiding this element. */
            poster="/images/campus/hero.jpg"
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            preload="auto"
            aria-hidden="true"
            /* Graded in CSS: the footage is under-saturated for a campus this
               green, and a little contrast stops it reading as phone video. */
            className="h-full w-full object-cover [filter:saturate(1.2)_contrast(1.08)_brightness(.88)]"
            /* A slow drift, so the hero breathes even across the stillest
               stretch of the loop. Only reached when motion is allowed. */
            animate={{ scale: [1.06, 1.14, 1.06] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}
      </motion.div>

      {/* Legibility scrim, weighted into the bottom-left corner where the
          headline sits — so the top-right two thirds of the footage stay at
          full strength. A full-bleed wash dark enough to carry the headline is
          dark enough to turn the whole campus to mud. */}
      <motion.div
        aria-hidden="true"
        style={reduced ? undefined : { opacity: scrimOpacity }}
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top_right,rgba(5,27,13,.95)_0%,rgba(5,27,13,.82)_28%,rgba(5,27,13,.52)_54%,rgba(5,27,13,.16)_78%,rgba(5,27,13,0)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-[45%] bg-gradient-to-t from-brand-950/85 via-brand-950/25 to-transparent"
      />
      {/* Amaltas light leak — a warm flare in the corner the copy never
          reaches. Screen blend lifts the footage instead of tinting it. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(52%_44%_at_82%_14%,rgba(233,168,37,.26),transparent_68%)] mix-blend-screen"
      />
      {/* Vignette — pulls the eye inward and hides the footage's soft edges. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_100%_at_50%_50%,transparent_42%,rgba(5,27,13,.55)_100%)]"
      />
      <div className="absolute inset-0 -z-10 grain opacity-40" aria-hidden="true" />

      <div className="container relative flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="eyebrow text-gold-300"
          >
            {site.parent}
          </motion.p>

          <motion.h1
            variants={stagger(0.09, 0.15)}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7vw,5.4rem)] font-semibold leading-[0.98] text-white [text-shadow:0_2px_40px_rgba(5,27,13,.6)]"
          >
            {HEADLINE.map((word, i) => (
              <span key={word} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
                <motion.span variants={wordUp} className="inline-block">
                  {i === HEADLINE.length - 1 ? (
                    <em className="not-italic bg-gold-sweep bg-clip-text text-transparent">{word}</em>
                  ) : (
                    word
                  )}
                </motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/85"
          >
            Modern classrooms, cutting-edge labs and quiet study spaces across {site.heroKicker}, eight
            kilometres from Dewas — designed to support your learning through medical school and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.68, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button to="/admission" variant="gold">
              Start your application
            </Button>
            <Button to="/courses" variant="light">
              Explore courses
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-14 flex items-center gap-6"
          >
            <Link
              to="/details-of-institution"
              className="group flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-white/55 transition-colors hover:text-gold-300"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-gold-400">
                <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
              </span>
              Campus overview
            </Link>
            <div className="hidden flex-1 sm:block">
              <Vitals tone="light" className="h-8 opacity-60" duration={2.8} repeat />
            </div>
          </motion.div>
        </div>

        {/* Social rail + admissions card. Hidden below lg — there isn't room
            beside the headline once it wraps to three lines. */}
        <motion.aside
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
          className="hidden w-72 shrink-0 flex-col items-end gap-6 lg:flex"
        >
          <ul className="flex items-center gap-2">
            {site.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label]
              if (!Icon) return null
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/[0.04] text-white/70 transition-colors duration-300 hover:border-gold-400 hover:text-gold-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              )
            })}
          </ul>

          <Link
            to="/admission"
            className="group flex w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm transition-colors duration-300 hover:border-gold-400/50 hover:bg-white/[0.09]"
          >
            <span className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <img
                src="/images/student-life/festivities.jpg"
                alt=""
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </span>
            <span className="flex-1">
              <span className="block text-sm font-semibold text-white">Admissions Open 2026</span>
              <span className="mt-0.5 block text-xs leading-snug text-white/60">
                Apply for MBBS, MD/MS and paramedical programmes
              </span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 shrink-0 text-white/50 transition-all duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
              aria-hidden="true"
            />
          </Link>
        </motion.aside>
      </div>
    </section>
  )
}
