import { Link } from 'react-router-dom'
import { Beaker, Bone, FlaskConical, Presentation } from 'lucide-react'
import { lectureTheatres, preClinicalDepartments } from '@/data/departments'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

// Purely decorative pairing — the department names and summaries are the
// verbatim data from src/data/departments.js.
const ICONS = {
  anatomy: Bone,
  physiology: Beaker,
  biochemistry: FlaskConical,
}

const TINTS = [
  { bg: 'bg-brand-50', icon: 'text-brand-600', ghost: 'text-brand-600/10' },
  { bg: 'bg-gold-100', icon: 'text-gold-700', ghost: 'text-gold-600/15' },
  { bg: 'bg-brand-100', icon: 'text-brand-700', ghost: 'text-brand-700/10' },
]

export default function PreClinicalDepartments() {
  return (
    <>
      <Seo
        title="Pre-Clinical Departments | Amaltas Institute of Medical Sciences"
        description="Pre-clinical departments at AIMS Dewas — Anatomy, Physiology and Biochemistry, with dissection hall, histology, haematology and research laboratory facilities."
        path="/pre-clinical-departments"
      />
      <PageHero
        title="Pre-Clinical Departments"
        lede="Anatomy, Physiology and Biochemistry — the foundation years, taught across dedicated laboratories, museums and demonstration rooms. Select a department for its full facility details."
        breadcrumb="Infrastructure"
      />

      <section className="section-tight">
        <div className="container">
          <Reveal className="flex flex-col gap-6 rounded-2xl bg-surface p-7 ring-1 ring-line sm:flex-row sm:items-center">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <Presentation className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-base font-semibold text-brand-900">{lectureTheatres.name}</h2>
              {lectureTheatres.blocks.map((block, i) =>
                block.type === 'text' ? (
                  <p key={i} className="prose-aims mt-1.5 text-sm">
                    {block.body}
                  </p>
                ) : (
                  <p key={i} className="mt-1.5 text-sm text-muted">
                    {block.items.join(' · ')}
                  </p>
                ),
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section pt-4">
        <div className="container">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preClinicalDepartments.map((department, i) => {
              const Icon = ICONS[department.id] ?? FlaskConical
              const tint = TINTS[i % TINTS.length]
              return (
                <Reveal as="li" key={department.id} delay={(i % 6) * 0.05}>
                  <Link
                    to={`/pre-clinical-departments/${department.id}`}
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
