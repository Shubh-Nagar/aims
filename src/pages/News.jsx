import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { news, categories } from '@/data/news'
import { EASE } from '@/lib/motion'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import { NewsCard } from '@/components/home/NewsGrid'

/**
 * Shared listing for Events, News and CME. `only` restricts the filter to a
 * single category so the three routes stay distinct without duplicating code.
 */
export default function News({ title, lede, breadcrumb, only, path }) {
  const [active, setActive] = useState(only ?? 'All')

  const visible = useMemo(() => {
    const base = only ? news.filter((item) => item.category === only) : news
    return active === 'All' ? base : base.filter((item) => item.category === active)
  }, [active, only])

  return (
    <>
      <Seo title={`${title} | Amaltas Institute of Medical Sciences`} description={lede} path={path} />
      <PageHero title={title} lede={lede} breadcrumb={breadcrumb} />

      <section className="section">
        <div className="container">
          {!only && (
            <div className="mb-12 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActive(category)}
                  aria-pressed={active === category}
                  className={`rounded-full border px-5 py-2.5 text-xs font-medium transition-all duration-300 ease-smooth ${
                    active === category
                      ? 'border-brand-700 bg-brand-700 text-white'
                      : 'border-line bg-surface text-brand-900 hover:border-gold-400 hover:bg-gold-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.ul
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((item, i) => (
                <NewsCard key={item.slug} item={item} delay={(i % 3) * 0.06} />
              ))}
            </motion.ul>
          </AnimatePresence>

          {visible.length === 0 && (
            <p className="rounded-2xl bg-surface p-10 text-center text-sm text-muted ring-1 ring-line">
              Nothing published in this category yet. Check back soon, or browse all activities.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
