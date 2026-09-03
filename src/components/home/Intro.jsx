import { useRef, useState } from 'react'
import { ArrowUpRight, Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Blob from '@/components/ui/Blob'
import SectionBg from '@/components/ui/SectionBg'
import { scaleIn } from '@/lib/motion'

const quickLinks = [
  { label: 'Fees', to: '/fees' },
  { label: 'Faculty list', href: '/documents/Teaching-Faculty-list.pdf' },
  { label: 'Anti-ragging measures', to: '/antiragging-measures' },
  { label: 'About the Society', to: '/about-the-society' },
]

export default function Intro() {
  const videoRef = useRef(null)
  const reduced = useReducedMotion()
  const [playing, setPlaying] = useState(!reduced)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  const toggleSound = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    setMuted(v.muted)
  }

  return (
    <section className="section relative isolate overflow-hidden">
      {/* Quiet beat: the pulse field ripples in the gutters and is masked
          out behind the copy. */}
      <SectionBg variant="wave" />
      <Blob tone="brand" className="-z-10 -bottom-32 -left-24" size="h-80 w-80" duration={20} />
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal as="p" className="eyebrow">
            Welcome to AIMS
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-5 text-3xl leading-[1.14] md:text-[2.7rem]">
            Medical education <span className="text-muted">built around a working hospital</span>
          </Reveal>
          <Reveal as="p" delay={0.1} className="prose-aims mt-6">
            <strong>Amaltas Institute of Medical Sciences, supported by the Amaltas Educational Welfare Society,</strong>{' '}
            aims at providing the undergraduate course for Bachelor of Medicine and Bachelor of Surgery
            (M.B.B.S) with all academic facilities as per Medical Council of India.
          </Reveal>
          <Reveal as="p" delay={0.15} className="prose-aims mt-4">
            The institute equips you to excel in your medical career through a comprehensive, hands-on
            educational experience. Our 27.378-acre campus, modern facilities and distinguished faculty
            provide an environment for learning, networking and practical training.
          </Reveal>

          <Reveal delay={0.2} className="mt-8">
            <Button to="/details-of-institution">About AIMS</Button>
          </Reveal>

          <Reveal delay={0.25} className="mt-10">
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
              {quickLinks.map((link) => {
                const content = (
                  <>
                    <span className="text-sm font-medium text-brand-900">{link.label}</span>
                    <ArrowUpRight
                      className="h-4 w-4 text-muted transition-all duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-600"
                      aria-hidden="true"
                    />
                  </>
                )
                const cls =
                  'group flex items-center justify-between gap-4 bg-surface px-5 py-4 transition-colors duration-300 hover:bg-brand-50'
                return (
                  <li key={link.label}>
                    {link.href ? (
                      <a href={link.href} target="_blank" rel="noreferrer noopener" className={cls}>
                        {content}
                      </a>
                    ) : (
                      <Link to={link.to} className={cls}>
                        {content}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal variants={scaleIn} className="relative">
          <div className="group relative overflow-hidden rounded-2xl bg-brand-50">
            <video
              ref={videoRef}
              src="/images/intro.mp4"
              poster="/images/campus/labs.jpg"
              autoPlay={!reduced}
              muted
              loop
              playsInline
              preload="metadata"
              className="aspect-[4/5] w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/50 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? 'Pause video' : 'Play video'}
                className="grid h-10 w-10 place-items-center rounded-full bg-brand-950/70 text-white backdrop-blur-sm transition-colors duration-300 hover:bg-brand-950/90"
              >
                {playing ? (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleSound}
                className="flex items-center gap-2 rounded-full bg-brand-950/70 px-4 py-2.5 text-2xs font-semibold uppercase tracking-eyebrow text-white backdrop-blur-sm transition-colors duration-300 hover:bg-brand-950/90"
              >
                {muted ? (
                  <VolumeX className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Volume2 className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {muted ? 'Click to enable sound' : 'Sound on'}
              </button>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-brand-100 p-6">
            <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">Our mission</p>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-800">
              Amaltas Hospital aims at serving the society by providing the best possible medical treatment
              delivered most efficiently in the shortest possible time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
