import { Link } from 'react-router-dom'
import {
  Activity,
  Baby,
  Brain,
  Droplet,
  FlaskConical,
  HeartPulse,
  Scissors,
  Sparkles,
  Stethoscope,
  Syringe,
  Users,
} from 'lucide-react'
import { clinicalDepartments } from '@/data/departments'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

// Purely decorative pairing — the department names and summaries are the
// verbatim data from src/data/departments.js.
const ICONS = {
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

export default function ClinicalDepartments() {
  return (
    <>
      <Seo
        title="Clinical Departments | Amaltas Institute of Medical Sciences"
        description="Clinical departments and hospital services at AIMS Dewas — anaesthesiology, medicine, paediatrics, psychiatry, dermatology, physiotherapy, diagnostics, blood bank and public health schemes."
        path="/clinical-departments"
      />
      <PageHero
        title="Clinical Departments"
        lede="Eleven clinical services delivered through Amaltas Hospital, where students train alongside practising clinicians. Select a department for its full details."
        breadcrumb="Infrastructure"
      />

      <section className="section">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {clinicalDepartments.map((department, i) => {
              const Icon = ICONS[department.id] ?? Stethoscope
              const tint = TINTS[i % TINTS.length]
              return (
                <Reveal as="li" key={department.id} delay={(i % 6) * 0.05}>
                  <Link
                    to={`/clinical-departments/${department.id}`}
                    className={`group relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-smooth hover:-translate-y-1 ${tint.bg}`}
                  >
                    <Icon
                      className={`absolute -bottom-3 -right-3 h-24 w-24 transition-transform duration-500 ease-smooth group-hover:scale-110 ${tint.ghost}`}
                      aria-hidden="true"
                    />
                    <span className={`relative grid h-11 w-11 place-items-center rounded-xl bg-white/70 ${tint.icon}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="relative mt-5 text-base font-semibold leading-snug text-brand-900">
                      {department.name}
                    </h3>
                    <p className="relative mt-2 text-sm leading-relaxed text-muted">{department.summary}</p>
                  </Link>
                </Reveal>
              )
            })}
          </ul>
        </div>
      </section>
    </>
  )
}
