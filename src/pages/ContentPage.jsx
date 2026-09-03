import { useParams, Navigate } from 'react-router-dom'
import { ExternalLink, FileText } from 'lucide-react'
import { contentPages } from '@/data/pages'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import Img from '@/components/ui/Img'
import Blob from '@/components/ui/Blob'
import SectionNav from '@/components/ui/SectionNav'
import { BlockRenderer, blockNavItems } from '@/components/blocks'

/**
 * Renders any page whose content lives in src/data/pages.js.
 *
 * Two content shapes are supported:
 *  - `blocks` — the richer vocabulary (stats, meters, tables, cards, floors,
 *    quotes). Gets a sticky scroll-spy rail and ambient motion.
 *  - `sections` — the original heading/body/list/documents shape, kept so
 *    already-migrated pages render unchanged.
 *
 * Pages still awaiting migrated copy show an explicit notice rather than
 * filler text, so nothing invented is ever published.
 */
export default function ContentPage({ slug: fixedSlug }) {
  const params = useParams()
  const slug = fixedSlug ?? params.slug
  const page = contentPages[slug]

  if (!page) return <Navigate to="/404" replace />

  const navItems = page.blocks ? blockNavItems(page.blocks) : []
  const hasRail = navItems.length > 1 || Boolean(page.image)

  return (
    <>
      <Seo
        title={`${page.title} | Amaltas Institute of Medical Sciences`}
        description={page.lede ?? `${page.title} — Amaltas Institute of Medical Sciences, Dewas.`}
        path={`/${slug}`}
      />
      <PageHero title={page.title} lede={page.lede} breadcrumb={page.breadcrumb} vitals={Boolean(page.blocks)} />

      <section className="section relative overflow-hidden">
        {page.blocks && (
          <>
            <Blob tone="mixed" className="-left-40 top-32" size="h-[30rem] w-[30rem]" duration={24} />
            <Blob tone="gold" className="-right-48 top-[60%]" size="h-[26rem] w-[26rem]" duration={30} delay={3} />
          </>
        )}

        <div
          className={`container relative grid gap-12 ${
            hasRail
              ? page.image
                ? 'lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-16'
                : 'lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16'
              : ''
          }`}
        >
          <div className={page.blocks ? 'min-w-0' : 'max-w-3xl'}>
            {page.blocks && <BlockRenderer blocks={page.blocks} />}

            {page.sections?.map((section, i) => (
              <Reveal key={section.heading} delay={i * 0.06} className={i ? 'mt-12' : ''}>
                <h2 className="text-2xl md:text-[1.75rem]">{section.heading}</h2>
                <div className="mt-2 h-px w-14 bg-gold-500" aria-hidden="true" />
                {section.body?.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="prose-aims mt-5 text-base">
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-sm text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.documents && (
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {section.documents.map((doc) => (
                      <li key={doc.label}>
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="card group flex items-center gap-3 p-4"
                        >
                          <FileText
                            className="h-5 w-5 shrink-0 text-brand-400 transition-colors duration-300 group-hover:text-gold-500"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-snug text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                            {doc.label}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {page.pendingSource && (
              <Reveal className={page.sections || page.blocks ? 'mt-14' : ''}>
                <div className="rounded-2xl border border-dashed border-gold-400 bg-gold-100/50 p-7">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                    Content migration pending
                  </p>
                  <p className="prose-aims mt-3">
                    The body copy for this page has not been migrated yet. Lift the text verbatim from the
                    current site and add it to{' '}
                    <code className="rounded bg-white px-1.5 py-0.5 text-xs text-brand-800">
                      src/data/pages.js
                    </code>{' '}
                    under the <strong>{slug}</strong> key.
                  </p>
                  <a
                    href={page.pendingSource}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
                  >
                    Open the current page
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </Reveal>
            )}

            {page.cta && (
              <Reveal className="mt-10">
                <Button href={page.cta.href} variant="primary">
                  {page.cta.label}
                </Button>
              </Reveal>
            )}
          </div>

          {hasRail && (
            <aside className="hidden lg:block">
              {navItems.length > 1 && <SectionNav items={navItems} />}
              {page.image && (
                <Reveal delay={0.1} className={navItems.length > 1 ? 'mt-10' : ''}>
                  <Img
                    src={page.image}
                    alt={page.title}
                    ratio="aspect-[3/4]"
                    wrapperClassName="rounded-2xl"
                  />
                </Reveal>
              )}
            </aside>
          )}
        </div>
      </section>
    </>
  )
}
