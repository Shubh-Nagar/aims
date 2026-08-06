import { Navigate, useParams } from 'react-router-dom'
import { ExternalLink, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
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
            {person.qualifications && (
              <p className="mt-1 text-sm text-muted">{person.qualifications}</p>
            )}

            {person.contact && (
              <ul className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                {person.contact.phone && (
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a href={person.contact.phoneHref} className="text-brand-800 transition-colors hover:text-gold-700">
                      {person.contact.phone}
                    </a>
                  </li>
                )}
                {person.contact.mobile && (
                  <li className="flex items-start gap-3">
                    <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a href={person.contact.mobileHref} className="text-brand-800 transition-colors hover:text-gold-700">
                      {person.contact.mobile}
                    </a>
                  </li>
                )}
                {person.contact.email && (
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a
                      href={`mailto:${person.contact.email}`}
                      className="break-all text-brand-800 transition-colors hover:text-gold-700"
                    >
                      {person.contact.email}
                    </a>
                  </li>
                )}
                {person.contact.address && (
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <span className="text-muted">{person.contact.address}</span>
                  </li>
                )}
              </ul>
            )}
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
          </Reveal>
        </div>
      </section>
    </>
  )
}
