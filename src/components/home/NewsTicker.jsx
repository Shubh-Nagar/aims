import { Link } from 'react-router-dom'
import { news } from '@/data/news'

/**
 * Latest-news strip. Duplicated once so the marquee loops seamlessly;
 * pauses on hover and freezes entirely under prefers-reduced-motion.
 */
export default function NewsTicker() {
  const items = news.slice(0, 8)
  return (
    <div className="sticky top-[var(--header-h)] z-40 border-y border-line bg-surface">
      <div className="flex items-center">
        <div className="hidden shrink-0 items-center gap-2 bg-brand-700 px-6 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow text-white sm:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold-400" aria-hidden="true" />
          Latest news
        </div>
        <div className="group relative flex-1 overflow-hidden py-3.5">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...items, ...items].map((item, i) => (
              <Link
                key={`${item.slug}-${i}`}
                to="/news-press-release"
                className="flex shrink-0 items-center gap-3 text-sm text-muted transition-colors hover:text-brand-700"
              >
                <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden="true" />
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
