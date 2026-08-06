import { Link, Navigate, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  Beaker,
  BookOpen,
  Bone,
  Droplet,
  FlaskConical,
  Landmark,
  Microscope,
  PawPrint,
  Presentation,
  Snowflake,
  Stethoscope,
  Waves,
} from 'lucide-react'
import { preClinicalDepartments } from '@/data/departments'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Vitals from '@/components/ui/Vitals'

// Purely decorative — matched by keyword against the (known, verbatim)
// block titles from src/data/departments.js.
const ICON_RULES = [
  [/demonstration/i, Presentation],
  [/dissection/i, Bone],
  [/cadaver/i, Snowflake],
  [/histology/i, Microscope],
  [/museum/i, Landmark],
  [/haematology/i, Droplet],
  [/amphibian/i, Waves],
  [/mammalian/i, PawPrint],
  [/clinical laboratory/i, Stethoscope],
  [/practical laboratory/i, Beaker],
  [/library/i, BookOpen],
  [/research/i, FlaskConical],
]

function iconFor(title = '') {
  return ICON_RULES.find(([pattern]) => pattern.test(title))?.[1] ?? FlaskConical
}

const TINTS = [
  { bg: 'bg-brand-50', icon: 'text-brand-600' },
  { bg: 'bg-gold-100', icon: 'text-gold-700' },
  { bg: 'bg-brand-100', icon: 'text-brand-700' },
]

function FacilityCard({ block, index }) {
  const Icon = iconFor(block.title)
  const tint = TINTS[index % TINTS.length]

  return (
    <Reveal delay={(index % 6) * 0.05} className="card h-full p-6 md:p-7">
      <span className={`grid h-11 w-11 place-items-center rounded-xl ${tint.bg} ${tint.icon}`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      {block.title && <h3 className="mt-5 text-lg font-semibold text-brand-900">{block.title}</h3>}

      {block.type === 'text' ? (
        <p className="prose-aims mt-3">{block.body}</p>
      ) : (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </Reveal>
  )
}

export default function PreClinicalDepartmentDetail() {
  const { slug } = useParams()
  const department = preClinicalDepartments.find((entry) => entry.id === slug)
  if (!department) return <Navigate to="/404" replace />

  return (
    <>
      <Seo
        title={`${department.name} | Amaltas Institute of Medical Sciences`}
        description={department.summary}
        path={`/pre-clinical-departments/${slug}`}
      />
      <PageHero title={department.name} lede={department.summary} breadcrumb="Pre-Clinical Departments" />

      <section className="section-tight">
        <div className="container">
          <Reveal>
            <Link
              to="/pre-clinical-departments"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5" aria-hidden="true" />
              All pre-clinical departments
            </Link>
          </Reveal>

          {department.stats && (
            <dl className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-dashed lg:divide-line">
              {department.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.06} className="lg:pl-8 lg:first:pl-0">
                  <dd className="font-display text-4xl leading-none text-brand-900 md:text-[2.75rem]">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-3 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                    {stat.label}
                  </dt>
                </Reveal>
              ))}
            </dl>
          )}
        </div>
      </section>

      <Vitals className="h-8 opacity-60" duration={2.2} />

      <section className="section pt-10">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2">
            {department.blocks.map((block, i) => (
              <FacilityCard key={block.title ?? i} block={block} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
