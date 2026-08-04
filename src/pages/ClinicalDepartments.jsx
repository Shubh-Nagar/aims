import { clinicalDepartments } from '@/data/departments'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Accordion from '@/components/ui/Accordion'
import DataTable from '@/components/ui/DataTable'
import Reveal from '@/components/ui/Reveal'

function Block({ block }) {
  if (block.type === 'text') {
    return <p className="prose-aims">{block.body}</p>
  }
  if (block.type === 'list') {
    return (
      <div>
        {block.title && (
          <h4 className="mb-3 text-2xs font-semibold uppercase tracking-eyebrow text-brand-700">
            {block.title}
          </h4>
        )}
        <ul className="grid gap-2 sm:grid-cols-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    )
  }
  return <DataTable head={block.head} rows={block.rows} caption={block.title ?? 'Services'} />
}

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
        lede="Eleven clinical services delivered through Amaltas Hospital, where students train alongside practising clinicians."
        breadcrumb="Infrastructure"
        image="/images/campus/hospital.jpg"
      />

      <section className="section">
        <div className="container max-w-4xl">
          <Reveal>
            <Accordion
              items={clinicalDepartments}
              renderBody={(department) => (
                <div className="space-y-7">
                  {department.blocks.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </div>
              )}
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
