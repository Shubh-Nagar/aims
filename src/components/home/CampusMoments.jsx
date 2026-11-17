import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from '@/components/ui/SectionHeading'
import SectionBg from '@/components/ui/SectionBg'
import Reveal from '@/components/ui/Reveal'
import { EASE, imgIn } from '@/lib/motion'

/**
 * "Life at AIMS" — four captioned photographs of students: lecture hall,
 * classroom, campus and clinic. On lg+ they sit as an accordion of panels: hovering,
 * focusing or tapping one widens it and reveals its caption. Below lg they
 * stack as plain captioned cards.
 */
const moments = [
  {
    image: '/images/students/lecture-hall.webp',
    alt: 'A faculty member teaching a full lecture hall of AIMS students in white coats',
    tag: 'Lecture halls',
    title: 'Taught by people who practise',
    body: 'Experienced faculty across every department, teaching the whole batch in tiered lecture halls.',
    position: 'object-[70%_50%]',
  },
  {
    image: '/images/students/classroom.webp',
    alt: 'MBBS students taking notes at their desks during a class',
    tag: 'Classrooms',
    title: 'Notes that turn into knowledge',
    body: 'Modern classrooms, cutting-edge labs and quiet study spaces, designed to support you through medical school.',
    position: 'object-[30%_50%]',
  },
  {
    image: '/images/students/residents.webp',
    alt: 'Three young doctors with stethoscopes standing in the green AIMS campus',
    tag: 'Campus',
    title: 'Room to learn, live and grow',
    body: 'A green, residential campus where your classes, your clinical training and your life all happen in one place.',
    position: 'object-[50%_40%]',
  },
  {
    image: '/images/students/cohort.webp',
    alt: 'Five AIMS students in white coats with stethoscopes and notebooks outside a campus building',
    tag: 'Clinical',
    title: 'From classmates to colleagues',
    body: 'Clinical training at Amaltas Hospital, where you learn on the wards alongside the people you started with.',
    position: 'object-[50%_35%]',
  },
]

function Panel({ item, active, onActivate }) {
  return (
    <motion.li
      layout
      transition={{ layout: { duration: 0.7, ease: EASE } }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      tabIndex={0}
      aria-expanded={active}
      aria-label={`${item.tag}: ${item.title}`}
      className={`group relative cursor-pointer overflow-hidden rounded-3xl bg-brand-950 outline-none ring-gold-400 ring-offset-4 focus-visible:ring-2 ${
        active ? 'flex-[3.4]' : 'flex-[1]'
      }`}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover ${item.position} transition-transform duration-[1.2s] ease-smooth ${
          active ? 'scale-100' : 'scale-110 grayscale-[35%]'
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 transition-opacity duration-700 ${
          active
            ? 'bg-gradient-to-t from-brand-950/90 via-brand-950/25 to-transparent'
            : 'bg-brand-950/55'
        }`}
      />

      {/* Collapsed: the tag runs vertically up the panel. */}
      <span
        aria-hidden="true"
        className={`absolute bottom-6 left-1/2 origin-center -translate-x-1/2 whitespace-nowrap text-2xs font-semibold uppercase tracking-eyebrow text-white transition-opacity duration-300 [writing-mode:vertical-rl] rotate-180 ${
          active ? 'opacity-0' : 'opacity-90 delay-300'
        }`}
      >
        {item.tag}
      </span>

      <AnimatePresence>
        {active && (
          <motion.div
            key="caption"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.25, ease: EASE } }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            className="absolute inset-x-0 bottom-0 p-8"
          >
            <div className="max-w-md">
              <p className="eyebrow text-gold-300">{item.tag}</p>
              <h3 className="mt-3 text-2xl leading-tight text-white xl:text-3xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{item.body}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function CampusMoments() {
  const [active, setActive] = useState(0)

  return (
    <section className="section relative isolate overflow-hidden">
      <SectionBg variant="wave" />
      <div className="container">
        <SectionHeading
          from="right"
          eyebrow="Life at AIMS"
          title={
            <>
              From the lecture hall <span className="text-muted">to the ward</span>
            </>
          }
          lede="A day at AIMS moves between classroom, campus and hospital. Here is what that looks like."
        />

        {/* Accordion — lg and up */}
        <Reveal variants={imgIn} className="mt-14 hidden lg:block">
          <ul className="flex h-[34rem] gap-3">
            {moments.map((item, i) => (
              <Panel
                key={item.image}
                item={item}
                active={active === i}
                onActivate={() => setActive(i)}
              />
            ))}
          </ul>
        </Reveal>

        {/* Stacked cards — below lg */}
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:hidden">
          {moments.map((item, i) => (
            <Reveal as="li" key={item.image} delay={i * 0.06} variants={imgIn}>
              <figure className="relative overflow-hidden rounded-3xl bg-brand-950">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className={`aspect-[4/5] w-full object-cover ${item.position}`}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-950/20 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow text-gold-300">{item.tag}</p>
                  <h3 className="mt-3 text-xl leading-tight text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{item.body}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
