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

export function NewsCard({ item, delay = 0, reveal = true }) {
  const href = `/events/${item.slug}`
  const card = (
    <article className="card group flex h-full flex-col overflow-hidden">
      <Link to={href} className="card-media">
        <Img src={item.image} alt={item.title} ratio="aspect-[16/10]" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-2xs uppercase tracking-eyebrow text-gold-600">
          <span>{item.category}</span>
          <span className="h-px w-4 bg-line" aria-hidden="true" />
          <time dateTime={item.date} className="text-muted">
            {formatDate(item.date)}
          </time>
        </div>
        <h3 className="mt-4 text-lg leading-snug transition-colors duration-300 group-hover:text-brand-600">
          <Link to={href}>{item.title}</Link>
        </h3>
        <p className="prose-aims mt-3 flex-1">{item.excerpt}</p>
        <Link to={href} className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-700">
          Read more
          <span className="h-px w-5 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-10" />
        </Link>
      </div>
    </article>
  )

  // Listing pages (News.jsx) mount their whole grid above the fold on every
  // filter change, where scroll-triggered whileInView can miss its initial
  // in-view check and leave cards stuck invisible — so those pages render
  // plain <li>s and let the grid's own mount transition handle the entrance.
  if (!reveal) return <li>{card}</li>

  return (
    <Reveal as="li" delay={delay}>
      {card}
    </Reveal>
  )
}

export default function NewsGrid() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Events & activities"
          title={
            <>
              What has been <span className="text-muted">happening on campus</span>
            </>
          }
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
