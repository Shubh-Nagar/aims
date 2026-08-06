import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { news } from '@/data/news'
import { formatDate } from '@/components/home/NewsGrid'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

export default function EventDetail() {
  const { slug } = useParams()
  const item = news.find((entry) => entry.slug === slug)
  if (!item) return <Navigate to="/404" replace />

  const body = item.body ?? item.excerpt
  const paragraphs = body.split(/\n{2,}/).filter(Boolean)
  const gallery = item.gallery ?? [item.image]
  const [hero, ...rest] = gallery

  return (
    <>
      <Seo
        title={`${item.title} | Amaltas Institute of Medical Sciences`}
        description={item.excerpt}
        path={`/events/${slug}`}
      />
      <PageHero title={item.title} breadcrumb="Events" />

      <section className="section">
        <div className="container max-w-3xl">
          <Reveal>
            <Link
              to="/events"
              className="group inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:-translate-x-0.5" aria-hidden="true" />
              All events
            </Link>

            <div className="mt-6 flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-gold-600">
              <span>{item.category}</span>
              <span className="h-px w-4 bg-line" aria-hidden="true" />
              <time dateTime={item.date} className="text-muted">
                {formatDate(item.date)}
              </time>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="mt-8">
            <Img src={hero} alt={item.title} ratio="aspect-[3/2]" wrapperClassName="rounded-2xl" />
          </Reveal>

          <Reveal delay={0.1} className="mt-10 space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="prose-aims whitespace-pre-line text-base">
                {para}
              </p>
            ))}
          </Reveal>

          {rest.length > 0 && (
            <Reveal delay={0.14} className="mt-12">
              <h2 className="text-2xs font-semibold uppercase tracking-eyebrow text-muted">More from this event</h2>
              <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {rest.map((src, i) => (
                  <li key={src}>
                    <a href={src} target="_blank" rel="noreferrer noopener" className="block">
                      <Img
                        src={src}
                        alt={`${item.title} — photo ${i + 2}`}
                        ratio="aspect-square"
                        wrapperClassName="rounded-xl transition-opacity duration-300 hover:opacity-80"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
