import { useEffect, useState } from 'react'
import { Expand } from 'lucide-react'
import { imgIn } from '@/lib/motion'
import { gallerySections } from '@/data/gallery'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Lightbox from '@/components/ui/Lightbox'

const total = gallerySections.reduce((n, s) => n + s.photos.length, 0)

/**
 * Bento grid for one section. The first photograph leads at double size;
 * portrait frames take a double-height cell so they are never cropped to a
 * sliver. Thumbs fill the grid; the lightbox loads the full-size file.
 */
function SectionGrid({ section, onOpen }) {
  return (
    <ul className="grid auto-rows-[150px] grid-cols-2 gap-3 [grid-auto-flow:dense] sm:auto-rows-[180px] md:grid-cols-4 lg:auto-rows-[210px]">
      {section.photos.map((photo, i) => {
        const portrait = photo.h > photo.w
        const span =
          i === 0
            ? 'col-span-2 row-span-2'
            : portrait
              ? 'row-span-2'
              : ''
        return (
          <Reveal as="li" key={photo.src} delay={(i % 4) * 0.05} variants={imgIn} className={span}>
            <button
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Open photo: ${photo.alt}`}
              className="group relative block h-full w-full overflow-hidden rounded-2xl bg-brand-100 text-left"
            >
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                width={photo.w}
                height={photo.h}
                className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
              />
              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-sm leading-snug text-white opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="line-clamp-2">{photo.alt}</span>
                <Expand className="h-4 w-4 shrink-0 text-gold-300" aria-hidden="true" />
              </span>
            </button>
          </Reveal>
        )
      })}
    </ul>
  )
}

export default function Gallery() {
  // { section, index } of the open photo, or null.
  const [open, setOpen] = useState(null)
  const [current, setCurrent] = useState(gallerySections[0].id)

  // Highlight the chip for whichever section is in the reading zone.
  useEffect(() => {
    const nodes = gallerySections.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setCurrent(hit.target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])

  // Keep the active chip visible in the jump bar, which scrolls sideways once
  // there are more sections than fit. Only the bar moves — never the page.
  useEffect(() => {
    const chip = document.querySelector(`nav[aria-label="Gallery sections"] a[href="#${current}"]`)
    const bar = chip?.closest('ul')
    if (!chip || !bar) return
    const left = chip.offsetLeft - (bar.clientWidth - chip.offsetWidth) / 2
    bar.scrollTo({ left, behavior: 'smooth' })
  }, [current])

  const openSection = open ? gallerySections.find((s) => s.id === open.section) : null

  return (
    <>
      <Seo
        title="Gallery | Amaltas Institute of Medical Sciences"
        description="Photographs from convocation, the White Coat Ceremony, cultural programmes, festivals, sports and campus life at Amaltas Institute of Medical Sciences, Dewas."
        path="/gallery"
      />
      <PageHero
        title="Gallery"
        lede={`Convocation, ceremonies, culture, sport and campus life: ${total} photographs from life at AIMS.`}
        breadcrumb="Events"
        image="/images/gallery/convocation/convocation-02.webp"
      />

      {/* Section jump bar — sticks under the site header and scrolls
          sideways on narrow screens. */}
      <nav
        aria-label="Gallery sections"
        className="sticky top-[var(--header-h)] z-30 border-b border-line bg-paper/90 backdrop-blur-md"
      >
        <div className="container">
          <ul className="-mx-1 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {gallerySections.map((s) => {
              const active = current === s.id
              return (
                <li key={s.id} className="shrink-0">
                  <a
                    href={`#${s.id}`}
                    aria-current={active ? 'true' : undefined}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      active
                        ? 'border-brand-700 bg-brand-700 text-white'
                        : 'border-line bg-surface text-brand-900 hover:border-brand-300 hover:bg-brand-50'
                    }`}
                  >
                    {s.title}
                    <span
                      className={`rounded-full px-1.5 text-2xs font-semibold ${
                        active ? 'bg-gold-500 text-brand-900' : 'bg-brand-50 text-brand-700'
                      }`}
                    >
                      {s.photos.length}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <div className="container py-14 md:py-20">
        <div className="space-y-20 md:space-y-28">
          {gallerySections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              aria-labelledby={`${section.id}-title`}
              className="scroll-mt-[calc(var(--header-h)+5rem)]"
            >
              <Reveal className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="eyebrow">{section.photos.length} photographs</p>
                  <h2 id={`${section.id}-title`} className="mt-4 text-3xl md:text-[2.4rem]">
                    {section.title}
                  </h2>
                  <p className="prose-aims mt-3">{section.blurb}</p>
                </div>
              </Reveal>
              <SectionGrid section={section} onOpen={(index) => setOpen({ section: section.id, index })} />
            </section>
          ))}
        </div>
      </div>

      <Lightbox
        items={openSection ? openSection.photos : []}
        index={open ? open.index : null}
        onClose={() => setOpen(null)}
        onIndex={(next) =>
          setOpen((o) => (o ? { ...o, index: typeof next === 'function' ? next(o.index) : next } : o))
        }
      />
    </>
  )
}
