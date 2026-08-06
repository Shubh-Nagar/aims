import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import { publications, publicationDepartments } from '@/data/publications'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import DataTable from '@/components/ui/DataTable'

const latestYear = Math.max(...publications.map((p) => p.year))

const STATS = [
  { value: publications.length, suffix: '', label: 'Published works' },
  { value: publicationDepartments.length, suffix: '', label: 'Departments represented' },
  { value: latestYear, suffix: '', label: 'Most recent intake year' },
]

const field =
  'w-full rounded-xl border border-line bg-surface pl-10 pr-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-muted/70 focus:border-brand-500'

export default function Publications() {
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('All')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return publications.filter((p) => {
      const matchesDept = department === 'All' || p.department === department
      const matchesQuery =
        !q || p.title.toLowerCase().includes(q) || p.name.toLowerCase().includes(q) || p.journal.toLowerCase().includes(q)
      return matchesDept && matchesQuery
    })
  }, [query, department])

  return (
    <>
      <Seo
        title="Publications | Amaltas Institute of Medical Sciences"
        description="Faculty research publications from Amaltas Institute of Medical Sciences, indexed by department, journal and year."
        path="/publications"
      />
      <PageHero
        title="Publications"
        lede="Research and case studies published by AIMS faculty across departments — search by title, author or journal, or filter by department."
        breadcrumb="Institutional"
      />

      <section className="section-tight">
        <div className="container">
          <dl className="grid gap-x-8 gap-y-8 sm:grid-cols-3 lg:divide-x lg:divide-dashed lg:divide-line">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06} className="lg:pl-8 lg:first:pl-0">
                <dd className="font-display text-4xl leading-none text-brand-900 md:text-[2.75rem]">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </dd>
                <dt className="mt-3 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">{stat.label}</dt>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="section pt-6">
        <div className="container">
          <Reveal className="relative max-w-md">
            <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by title, author or journal"
              aria-label="Search publications"
              className={field}
            />
          </Reveal>

          <Reveal delay={0.05} className="mt-6 flex flex-wrap gap-2">
            {['All', ...publicationDepartments].map((dept) => (
              <button
                key={dept}
                type="button"
                onClick={() => setDepartment(dept)}
                aria-pressed={department === dept}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ease-smooth ${
                  department === dept
                    ? 'border-brand-700 bg-brand-700 text-white'
                    : 'border-line bg-surface text-brand-900 hover:border-gold-400 hover:bg-gold-100'
                }`}
              >
                {dept}
              </button>
            ))}
          </Reveal>

          <p className="mt-6 text-xs text-muted">
            Showing {filtered.length} of {publications.length} publications
          </p>

          <Reveal delay={0.08} className="mt-4">
            {filtered.length > 0 ? (
              <DataTable
                caption="Faculty publications"
                head={['#', 'Department', 'Title', 'Journal detail', 'Author(s)', 'Year']}
                rows={filtered.map((p) => [p.no, p.department, p.title, p.journal, p.name, p.year])}
              />
            ) : (
              <p className="rounded-2xl bg-surface p-10 text-center text-sm text-muted ring-1 ring-line">
                No publications match that search. Try a different title, author or department.
              </p>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
