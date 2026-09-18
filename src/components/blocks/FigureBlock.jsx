import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { imgIn } from '@/lib/motion'

/**
 * A photograph with an optional caption, for breaking up a long content page.
 *
 * Interior pages were a uniform vertical ribbon of prose; dropping one of
 * these every few blocks gives the eye somewhere to land. `bleed` lets the
 * frame break slightly past the text column so it reads as a full-width
 * plate rather than another element in the measure.
 */
export default function FigureBlock({
  src,
  alt,
  caption,
  credit,
  ratio = 'aspect-[16/9]',
  bleed = false,
}) {
  return (
    <Reveal variants={imgIn} className={bleed ? '-mx-5 mt-8 md:-mx-10' : 'mt-8'}>
      <figure>
        <Img
          src={src}
          alt={alt ?? caption ?? ''}
          ratio={ratio}
          wrapperClassName={bleed ? 'rounded-2xl md:rounded-3xl' : 'rounded-2xl'}
        />
        {(caption || credit) && (
          <figcaption className={`mt-4 flex gap-3 text-sm text-muted ${bleed ? 'px-5 md:px-10' : ''}`}>
            <span className="mt-2 h-px w-6 shrink-0 bg-gold-500" aria-hidden="true" />
            <span>
              {caption}
              {credit && <span className="block text-2xs uppercase tracking-eyebrow text-muted/70">{credit}</span>}
            </span>
          </figcaption>
        )}
      </figure>
    </Reveal>
  )
}
