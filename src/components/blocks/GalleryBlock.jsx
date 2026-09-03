import { motion } from 'framer-motion'
import { stagger, zoomIn } from '@/lib/motion'
import Img from '@/components/ui/Img'

/** Image grid. Each tile lifts and zooms its artwork on hover. */
export default function GalleryBlock({ items = [], columns = 3, ratio = 'aspect-[3/4]' }) {
  const cols = columns === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3'

  return (
    <motion.ul
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={stagger(0.08)}
      className={`mt-6 grid gap-4 ${cols}`}
    >
      {items.map((item) => (
        <motion.li key={item.src} variants={zoomIn}>
          <a
            href={item.href ?? item.src}
            target="_blank"
            rel="noreferrer noopener"
            className="card card-media group block overflow-hidden"
          >
            <Img src={item.src} alt={item.alt} ratio={ratio} />
            {item.caption && (
              <span className="block px-5 py-4 text-sm text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                {item.caption}
              </span>
            )}
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}
