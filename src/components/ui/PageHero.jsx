import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { EASE } from '@/lib/motion'
import Vitals from './Vitals'

/**
 * Shared banner for every interior page. `image` is decorative — it sits
 * under a pine wash heavy enough to keep the heading at full contrast.
 */
export default function PageHero({ title, lede, breadcrumb, image = '/images/campus/night.jpg' }) {
  return (
    <header className="surface-photo-dark relative overflow-hidden pt-[calc(var(--header-h)+3rem)] pb-14 md:pb-20">
      {image && (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <img src={image} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-brand-900/60" />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 grain opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container relative">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-1 text-2xs uppercase tracking-eyebrow text-white/55">
            <li>
              <Link to="/" className="transition-colors hover:text-gold-300">
                Home
              </Link>
            </li>
            {breadcrumb && (
              <li className="flex items-center gap-1">
                <ChevronRight className="h-3 w-3" aria-hidden="true" />
                <span>{breadcrumb}</span>
              </li>
            )}
            <li className="flex items-center gap-1 text-gold-300">
              <ChevronRight className="h-3 w-3" aria-hidden="true" />
              <span aria-current="page">{title}</span>
            </li>
          </ol>
        </nav>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="max-w-4xl text-4xl leading-[1.08] md:text-6xl"
        >
          {title}
        </motion.h1>

        {lede && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
            className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70"
          >
            {lede}
          </motion.p>
        )}
      </div>
      <Vitals tone="light" className="mt-10 h-8 opacity-70" duration={2} />
    </header>
  )
}
