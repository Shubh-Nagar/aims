import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { clinicalDepartments } from '@/data/departments'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
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

export default function ClinicalDepartmentDetail() {
  const { slug } = useParams()
  const department = clinicalDepartments.find((entry) => entry.id === slug)
  if (!department) return <Navigate to="/404" replace />

  return (
    <>
      <Seo
        title={`${department.name} | Amaltas Institute of Medical Sciences`}
        description={department.summary}
        path={`/clinical-departments/${slug}`}
      />
      <PageHero title={department.name} lede={department.summary} breadcrumb="Clinical Departments" />

      <section className="section">
        <div className="container max-w-3xl">
          <Reveal>
            <Link
              to="/clinical-departments"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5" aria-hidden="true" />
              All departments
            </Link>

            <div className="mt-10 space-y-7">
              {department.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
