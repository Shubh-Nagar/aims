import { Link, Navigate, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { leadership } from '@/data/leadership'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

export default function LeadershipPage({ slug: fixedSlug }) {
  const params = useParams()
  const slug = fixedSlug ?? params.slug
  const person = leadership.find((entry) => entry.slug === slug)
  if (!person) return <Navigate to="/404" replace />

  const others = leadership.filter((entry) => entry.slug !== slug)

  return (
    <>
      <Seo
        title={`${person.role} | Amaltas Institute of Medical Sciences`}
        description={`${person.name}, ${person.role} of Amaltas Institute of Medical Sciences, Dewas.`}
        path={`/${slug}`}
      />
      <PageHero title={person.role} breadcrumb="About Us" />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal>
            <Img src={person.image} alt={person.name} ratio="aspect-[4/5]" wrapperClassName="rounded-2xl" />
            <h2 className="mt-6 text-2xl">{person.name}</h2>
            <p className="mt-1 text-2xs font-semibold uppercase tracking-eyebrow text-gold-600">
              {person.role}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            {person.message ? (
              person.message.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="prose-aims mt-5 text-base first:mt-0">
                  {paragraph}
                </p>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gold-400 bg-gold-100/50 p-7">
                <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                  Message migration pending
                </p>
                <p className="prose-aims mt-3">
                  Add the message verbatim from the current site to the{' '}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-brand-800">message</code> array
                  for <strong>{slug}</strong> in{' '}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-brand-800">
                    src/data/leadership.js
                  </code>
                  .
                </p>
                {person.pendingSource && (
                  <a
                    href={person.pendingSource}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
                  >
                    Open the current page
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}

            <div className="mt-14">
              <h3 className="text-2xs font-semibold uppercase tracking-eyebrow text-muted">
                Other office bearers
              </h3>
              <ul className="mt-5 grid gap-px overflow-hidden rounded-2xl bg-line sm:grid-cols-2">
                {others.map((entry) => (
                  <li key={entry.slug}>
                    <Link
                      to={`/${entry.slug}`}
                      className="group flex flex-col gap-1 bg-surface px-5 py-4 transition-colors duration-300 hover:bg-brand-50"
                    >
                      <span className="text-2xs uppercase tracking-eyebrow text-muted">{entry.role}</span>
                      <span className="text-sm font-medium text-brand-900 transition-colors group-hover:text-brand-600">
                        {entry.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
