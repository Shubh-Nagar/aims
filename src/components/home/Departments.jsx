import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  Baby,
  Beaker,
  Bone,
  Brain,
  ChevronLeft,
  ChevronRight,
  Droplet,
  FlaskConical,
  HeartPulse,
  Scissors,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react'
import { clinicalDepartments, preClinicalDepartments } from '@/data/departments'
import { EASE } from '@/lib/motion'
import SectionHeading from '@/components/ui/SectionHeading'

const ICONS = {
  anatomy: Bone,
  physiology: Beaker,
  biochemistry: FlaskConical,
  'central-sterilization': Sparkles,
  'surgery-allied': Scissors,
  anesthesiology: Syringe,
  'general-medicine': Stethoscope,
  psychiatry: Brain,
  paediatrics: Baby,
  'skin-vd': Droplet,
  physiotherapy: Activity,
  diagnostics: FlaskConical,
  'blood-bank': HeartPulse,
  schemes: Users,
}

const TINTS = [
  { bg: 'bg-brand-50', icon: 'text-brand-600', ghost: 'text-brand-600/10' },
  { bg: 'bg-gold-100', icon: 'text-gold-700', ghost: 'text-gold-600/15' },
  { bg: 'bg-brand-100', icon: 'text-brand-700', ghost: 'text-brand-700/10' },
]

const PER_PAGE = 4

const departments = [
  ...preClinicalDepartments.map((d) => ({ ...d, href: `/pre-clinical-departments/${d.id}` })),
  ...clinicalDepartments.map((d) => ({ ...d, href: `/clinical-departments/${d.id}` })),
]

const pages = Array.from({ length: Math.ceil(departments.length / PER_PAGE) }, (_, i) =>
  departments.slice(i * PER_PAGE, i * PER_PAGE + PER_PAGE),
)

const slide = {
  enter: (direction) => ({ x: direction > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -60 : 60, opacity: 0 }),
}

function DepartmentCard({ department, i }) {
  const Icon = ICONS[department.id] ?? Stethoscope
  const tint = TINTS[i % TINTS.length]
  return (
    <Link
      to={department.href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 ${tint.bg}`}
    >
      <Icon
        className={`absolute -bottom-3 -right-3 h-24 w-24 transition-transform duration-500 ease-smooth group-hover:scale-110 ${tint.ghost}`}
        aria-hidden="true"
      />
      <span className={`relative grid h-11 w-11 place-items-center rounded-xl bg-white/70 ${tint.icon}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="relative mt-5 text-base font-semibold leading-snug text-brand-900">{department.name}</h3>
      <p className="relative mt-2 text-sm leading-relaxed text-muted">{department.summary}</p>
      <span className="relative mt-4 inline-flex -translate-y-1 items-center gap-2 text-sm font-medium text-brand-700 opacity-0 transition-all duration-300 ease-smooth group-hover:translate-y-0 group-hover:opacity-100">
        Read more
        <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
      </span>
    </Link>
  )
}

export default function Departments() {
  const [[page, direction], setPage] = useState([0, 0])

  const goTo = (target) =>
    setPage(([current]) => [(target + pages.length) % pages.length, target > current ? 1 : -1])
  const step = (delta) =>
    setPage(([current]) => [(current + delta + pages.length) % pages.length, delta > 0 ? 1 : -1])

  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Departments"
          title="Explore our academic and clinical departments"
          lede="Pre-clinical foundations through to full clinical services — fourteen departments training students alongside practising clinicians at Amaltas Hospital."
          action={{ label: 'All departments', to: '/clinical-departments' }}
        />

        <div className="relative mt-14">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" custom={direction} initial={false}>
              <motion.ul
                key={page}
                custom={direction}
                variants={slide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: EASE }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              >
                {pages[page].map((department, i) => (
                  <li key={department.id}>
                    <DepartmentCard department={department} i={i} />
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {pages.length > 1 && (
            <div className="mt-10 flex items-center justify-center gap-6">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous departments"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-brand-900 transition-colors duration-300 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>

              <div className="flex items-center gap-2">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`Show departments page ${i + 1}`}
                    aria-current={i === page}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === page ? 'w-6 bg-brand-700' : 'w-1.5 bg-line hover:bg-gold-400'
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next departments"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-brand-900 transition-colors duration-300 hover:border-brand-700 hover:bg-brand-700 hover:text-white"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
