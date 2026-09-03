import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { stats } from '@/data/site'
import { viewportReplay } from '@/lib/motion'
import Counter from '@/components/ui/Counter'
import DotWave from '@/components/ui/DotWave'

/**
 * A full-bleed photograph between Intro and Stats, with a slow scroll-linked
 * parallax scoped to this element (unlike Hero, which tracks page scroll).
 */
export default function CinematicBreak() {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="relative isolate flex min-h-[480px] items-end overflow-hidden pb-16 pt-20 md:pb-20">
      <motion.div
        style={reduced ? undefined : { y: imageY }}
        className="absolute inset-0 -z-10 scale-110 bg-brand-900"
      >
        <img
          src="/images/medical.png"
          alt="Aerial view of the 27.378-acre AIMS campus"
          loading="lazy"
          className="h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      </motion.div>
      {/* The scrim has to carry white text over a bright, busy photograph —
          it is weighted to the bottom, where the numbers sit. */}
      <div className="absolute inset-0 -z-[5] bg-gradient-to-t from-brand-950/95 via-brand-950/60 to-brand-950/30" />
      {/* The page's boldest beat: the pulse field reads clearly against the
          photo. It fades out downward so the numbers keep a clean band. */}
      <div className="absolute inset-x-0 top-0 -z-[5] h-2/3 text-gold-300/70 [mask-image:linear-gradient(to_bottom,#000,transparent)]">
        <DotWave className="h-full w-full" duration={34} amplitude={30} />
      </div>
      <div className="absolute inset-0 -z-[5] grain opacity-50" aria-hidden="true" />

      <div className="container relative flex justify-center">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 text-center sm:grid-cols-4 sm:divide-x sm:divide-dashed sm:divide-white/20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportReplay}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="sm:px-8 sm:first:pl-0 sm:last:pr-0"
            >
              <dt className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">
                {stat.label}
              </dt>
              <dd className="mt-3 font-display text-[2.6rem] leading-none text-white md:text-[3.2rem]">
                <Counter value={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix} replay />
              </dd>
              <p className="mt-3 text-sm text-white/85">{stat.note}</p>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  )
}
