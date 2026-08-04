import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Img from '@/components/ui/Img'
import { scaleIn } from '@/lib/motion'

const quickLinks = [
  { label: 'Fees', to: '/fees' },
  { label: 'Faculty list', href: '/documents/Teaching-Faculty-list.pdf' },
  { label: 'Anti-ragging measures', to: '/antiragging-measures' },
  { label: 'About the Society', to: '/about-the-society' },
]

export default function Intro() {
  return (
    <section className="section">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal as="p" className="eyebrow">
            Welcome to AIMS
          </Reveal>
          <Reveal as="h2" delay={0.05} className="mt-5 text-3xl leading-[1.14] md:text-[2.7rem]">
            Medical education built around a working hospital
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
          <div className="grid grid-cols-2 gap-4">
            <Img
              src="/images/campus/labs.jpg"
              alt="Anatomy laboratory at AIMS"
              ratio="aspect-[3/4]"
              wrapperClassName="rounded-2xl"
            />
            <div className="mt-10 space-y-4">
              <Img
                src="/images/campus/lecture-hall.jpg"
                alt="Lecture hall at AIMS"
                ratio="aspect-square"
                wrapperClassName="rounded-2xl"
              />
              <Img
                src="/images/campus/library.jpg"
                alt="Library at AIMS"
                ratio="aspect-[4/3]"
                wrapperClassName="rounded-2xl"
              />
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-brand-800 p-6 text-white">
            <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">Our mission</p>
            <p className="mt-3 text-[15px] leading-relaxed text-white/80">
              Amaltas Hospital aims at serving the society by providing the best possible medical treatment
              delivered most efficiently in the shortest possible time.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
