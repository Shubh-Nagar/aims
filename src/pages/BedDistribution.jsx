import { FileDown } from 'lucide-react'
import {
  bedDistributionUpdated,
  broadSpeciality,
  broadSpecialityTotal,
  grandTotal,
  superSpeciality,
  superSpecialityTotal,
  superSpecialityUpdated,
} from '@/data/bedDistribution'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import Accordion from '@/components/ui/Accordion'
import Vitals from '@/components/ui/Vitals'

const STATS = [
  { value: grandTotal.beds, label: 'Total beds', note: `${grandTotal.units} units` },
  { value: broadSpecialityTotal.beds, label: 'Broad speciality beds', note: `${broadSpecialityTotal.units} units` },
  { value: superSpecialityTotal.beds, label: 'Super-speciality beds', note: `${superSpecialityTotal.units} units` },
]

function toAccordionItem(department) {
  return { ...department, id: department.department, name: department.department, summary: `${department.total} beds` }
}

function DepartmentBody({ department }) {
  return (
    <div>
      <ul className="grid gap-2 sm:grid-cols-2">
        {department.wards.map((ward, i) => (
          <li key={`${ward.name}-${i}`} className="flex items-center justify-between gap-4 text-sm text-muted">
            <span className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              {ward.name}
            </span>
            <span className="font-medium text-brand-900">{ward.beds} beds</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-4 text-2xs uppercase tracking-eyebrow text-muted">
        <span>
          Total: <span className="font-semibold text-brand-900">{department.total} beds</span>
        </span>
        <span>
          Units: <span className="font-semibold text-brand-900">{department.units}</span>
        </span>
      </div>
    </div>
  )
}

export default function BedDistribution() {
  const medicineAllied = broadSpeciality.filter((d) => d.group === 'Medicine allied')
  const surgeryAllied = broadSpeciality.filter((d) => d.group === 'Surgery allied')

  return (
    <>
      <Seo
        title="Bed Distribution | Amaltas Institute of Medical Sciences"
        description="Ward-wise bed distribution at Amaltas Hospital across broad speciality and super-speciality departments."
        path="/bed-distribution"
      />
      <PageHero
        title="Bed Distribution"
        lede={`Ward-wise bed capacity across broad speciality and super-speciality departments at Amaltas Hospital. Broad speciality figures updated ${bedDistributionUpdated}; super-speciality updated ${superSpecialityUpdated}.`}
        breadcrumb="Institutional"
      />

      <section className="section-tight">
        <div className="container">
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-3 lg:divide-x lg:divide-dashed lg:divide-line">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06} className="lg:pl-8 lg:first:pl-0">
                <dd className="font-display text-4xl leading-none text-brand-900 md:text-[2.75rem]">
                  <Counter value={stat.value} />
                </dd>
                <dt className="mt-3 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">{stat.label}</dt>
                <p className="mt-1 text-sm text-muted">{stat.note}</p>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={0.2} className="mt-8">
            <a
              href="/documents/BED-DISTRIBUTION.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-medium text-brand-900 transition-all duration-300 hover:border-gold-400 hover:bg-gold-100"
            >
              <FileDown className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-gold-600" aria-hidden="true" />
              View the original signed PDF
            </a>
          </Reveal>
        </div>
      </section>

      <Vitals className="h-8 opacity-60" duration={2.2} />

      <section className="section">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Broad speciality</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">Medicine allied</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <Accordion items={medicineAllied.map(toAccordionItem)} renderBody={(item) => <DepartmentBody department={item} />} />
          </Reveal>

          <Reveal className="mt-16 max-w-2xl">
            <h2 className="text-3xl md:text-[2.4rem]">Surgery allied</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <Accordion items={surgeryAllied.map(toAccordionItem)} renderBody={(item) => <DepartmentBody department={item} />} />
          </Reveal>
        </div>
      </section>

      <section className="section-tight bg-surface">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Advanced care</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">Super-speciality</h2>
          </Reveal>
          <Reveal delay={0.08} className="mt-8">
            <Accordion items={superSpeciality.map(toAccordionItem)} renderBody={(item) => <DepartmentBody department={item} />} />
          </Reveal>
        </div>
      </section>
    </>
  )
}
