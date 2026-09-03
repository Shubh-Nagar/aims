import Reveal from '@/components/ui/Reveal'
import { stagger, fadeUp } from '@/lib/motion'
import { motion } from 'framer-motion'

/** Body copy: paragraphs, and an optional bulleted list that staggers in. */
export default function ProseBlock({ body = [], list, columns = 1 }) {
  return (
    <>
      {body.map((paragraph, i) => (
        <Reveal as="p" key={paragraph.slice(0, 48)} delay={i * 0.05} className="prose-aims mt-5 text-base">
          {paragraph}
        </Reveal>
      ))}

      {list?.length > 0 && (
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          variants={stagger(0.05)}
          className={`mt-6 grid gap-2.5 ${columns === 2 ? 'sm:grid-cols-2' : ''}`}
        >
          {list.map((item) => (
            <motion.li key={item} variants={fadeUp} className="flex gap-3 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-500" aria-hidden="true" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
    </>
  )
}
