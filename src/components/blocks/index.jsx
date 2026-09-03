import Reveal from '@/components/ui/Reveal'
import ProseBlock from './ProseBlock'
import StatBandBlock from './StatBandBlock'
import TableBlock from './TableBlock'
import MeterBlock from './MeterBlock'
import CardsBlock from './CardsBlock'
import FloorsBlock from './FloorsBlock'
import QuoteBlock from './QuoteBlock'
import ChipsBlock from './ChipsBlock'
import DocumentsBlock from './DocumentsBlock'
import SpecsBlock from './SpecsBlock'
import GalleryBlock from './GalleryBlock'

/**
 * Block vocabulary for content pages. A page in `src/data/pages.js` declares
 * an ordered `blocks` array; each entry names a type here and carries only
 * data. Presentation stays in components, content stays in data — adding a
 * page never means writing a component.
 */
const REGISTRY = {
  prose: ProseBlock,
  stats: StatBandBlock,
  table: TableBlock,
  meters: MeterBlock,
  cards: CardsBlock,
  floors: FloorsBlock,
  quote: QuoteBlock,
  chips: ChipsBlock,
  documents: DocumentsBlock,
  specs: SpecsBlock,
  gallery: GalleryBlock,
}

export const slugify = (value) =>
  String(value)
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/** Anchor targets for the sticky scroll-spy rail. */
export const blockNavItems = (blocks = []) =>
  blocks
    .filter((block) => block.heading)
    .map((block) => ({ id: block.id ?? slugify(block.heading), label: block.navLabel ?? block.heading }))

export function BlockRenderer({ blocks = [] }) {
  return blocks.map((block, i) => {
    const Component = REGISTRY[block.type]
    if (!Component) {
      if (import.meta.env.DEV) console.warn(`Unknown content block type: "${block.type}"`)
      return null
    }

    const { type, heading, id, navLabel, eyebrow, ...props } = block
    const anchor = id ?? (heading ? slugify(heading) : undefined)

    return (
      <section key={anchor ?? `${type}-${i}`} id={anchor} className={i ? 'mt-16 md:mt-20' : ''}>
        {heading && (
          <Reveal>
            {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
            <h2 className="text-2xl md:text-[1.75rem]">{heading}</h2>
            <div className="mt-2 h-px w-14 bg-gold-500" aria-hidden="true" />
          </Reveal>
        )}
        <Component {...props} />
      </section>
    )
  })
}
