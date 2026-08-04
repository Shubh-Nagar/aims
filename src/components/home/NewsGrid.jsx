import { Link } from 'react-router-dom'
import { news } from '@/data/news'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function NewsCard({ item, delay = 0 }) {
  return (
    <Reveal as="li" delay={delay}>
      <article className="card group flex h-full flex-col overflow-hidden">
        <div className="card-media">
          <Img src={item.image} alt={item.title} ratio="aspect-[16/10]" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-gold-600">
            <span>{item.category}</span>
            <span className="h-px w-4 bg-line" aria-hidden="true" />
            <time dateTime={item.date} className="text-muted">
              {formatDate(item.date)}
            </time>
          </div>
          <h3 className="mt-4 text-lg leading-snug transition-colors duration-300 group-hover:text-brand-600">
            <Link to="/news-press-release">{item.title}</Link>
          </h3>
          <p className="prose-aims mt-3 flex-1">{item.excerpt}</p>
          <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
            Read more
            <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
          </span>
        </div>
      </article>
    </Reveal>
  )
}

export default function NewsGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Events & activities"
          title="What has been happening on campus"
          lede="Developments, achievements and announcements from Amaltas Institute of Medical Sciences — medical breakthroughs, research, events and student success stories."
          action={{ label: 'View all', to: '/news-press-release' }}
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {news.slice(0, 3).map((item, i) => (
            <NewsCard key={item.slug} item={item} delay={i * 0.08} />
          ))}
        </ul>
      </div>
    </section>
  )
}
