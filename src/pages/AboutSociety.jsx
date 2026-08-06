import { useState } from 'react'
import { Play } from 'lucide-react'
import { society } from '@/data/society'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Counter from '@/components/ui/Counter'
import DataTable from '@/components/ui/DataTable'
import Img from '@/components/ui/Img'
import Button from '@/components/ui/Button'
import Vitals from '@/components/ui/Vitals'

/** Click-to-play YouTube facade — avoids loading the iframe until asked for. */
function VideoEmbed({ youtubeId, title }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-2xl bg-brand-900 ring-1 ring-line aspect-video">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          loading="lazy"
          allow="accelerated-2x-playback; autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full"
          aria-label={`Play video: ${title}`}
        >
          <img
            src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/20 to-brand-950/40" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="grid h-16 w-16 place-items-center rounded-full bg-gold-500 text-brand-900 shadow-lift transition-transform duration-300 ease-smooth group-hover:scale-110">
              <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true" />
            </span>
          </span>
          <span className="absolute bottom-5 left-6 text-2xs font-semibold uppercase tracking-eyebrow text-white/80">
            {title}
          </span>
        </button>
      )}
    </div>
  )
}

export default function AboutSociety() {
  return (
    <>
      <Seo
        title="About the Society | Amaltas Institute of Medical Sciences"
        description={society.kicker}
        path="/about-the-society"
      />
      <PageHero title={society.title} lede={society.kicker} breadcrumb={society.breadcrumb} />

      {/* Intro + registration facts */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Registered 18 December 2013</p>
            <h2 className="mt-5 text-3xl leading-snug md:text-[2.2rem]">{society.registration.name}</h2>
            <dl className="mt-8 space-y-5 border-l-2 border-gold-400 pl-5">
              <div>
                <dt className="text-2xs font-semibold uppercase tracking-eyebrow text-muted">
                  Registration incorporation
                </dt>
                <dd className="mt-1 text-sm font-medium text-brand-900">{society.registration.number}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="prose-aims text-base">{society.intro}</p>
            <p className="prose-aims mt-4">{society.registration.note}</p>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
              {society.stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <dd className="font-display text-4xl text-brand-900 md:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-2 text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                    {stat.label}
                  </dt>
                </Reveal>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Collage */}
      <section className="pb-4">
        <div className="container">
          <Reveal>
            <Img
              src={society.collage}
              alt="Amaltas Educational Welfare Society — collage of institutions and activities"
              ratio="aspect-[16/9]"
              wrapperClassName="rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Photo strip */}
      <section className="pb-4 pt-8">
        <div className="container">
          <ul className="grid grid-cols-3 gap-4">
            {society.gallery.map((src, i) => (
              <Reveal as="li" key={src} delay={i * 0.06}>
                <Img
                  src={src}
                  alt="Amaltas Educational Welfare Society activities"
                  ratio="aspect-[2/3]"
                  wrapperClassName="rounded-2xl"
                />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Executive committee */}
      <section className="section">
        <div className="container">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Governance</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">{society.committee.heading}</h2>
            <p className="prose-aims mt-4">{society.committee.lede}</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10">
            <DataTable
              caption={society.committee.caption}
              head={society.committee.head}
              rows={society.committee.rows}
            />
          </Reveal>
        </div>
      </section>

      <Vitals className="h-8 opacity-60" duration={2.2} />

      {/* Aims of society */}
      <section className="section-tight bg-surface">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow">Purpose</p>
            <h2 className="mt-5 text-3xl md:text-[2.4rem]">{society.aims.heading}</h2>
            <p className="prose-aims mt-5">{society.aims.body}</p>
            {society.aims.cta && (
              <div className="mt-8">
                <Button to={society.aims.cta.to} href={society.aims.cta.href} variant="outline">
                  {society.aims.cta.label}
                </Button>
              </div>
            )}
          </Reveal>
          <Reveal delay={0.08}>
            <Img
              src={society.aims.image}
              alt="Aims of Amaltas Educational Welfare Society"
              ratio="aspect-[4/3]"
              wrapperClassName="rounded-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* Campus video */}
      <section className="section">
        <div className="container">
          <Reveal className="mb-10 max-w-2xl">
            <p className="eyebrow">{society.video.heading}</p>
            <h2 className="mt-4 text-3xl md:text-[2.4rem]">See the campus in motion</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <VideoEmbed youtubeId={society.video.youtubeId} title="Amaltas campus tour" />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-tight">
        <div className="container">
          <Reveal className="relative flex flex-col items-center gap-6 overflow-hidden rounded-3xl bg-brand-100 px-8 py-14 text-center text-brand-900 md:px-16">
            <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />
            <p className="eyebrow relative justify-center">Join the mission</p>
            <h2 className="relative max-w-xl text-3xl md:text-[2.4rem]">
              Learn more about studying and working with Amaltas
            </h2>
            <div className="relative flex flex-wrap justify-center gap-4">
              <Button to="/admission" variant="primary">
                Apply for admission
              </Button>
              <Button to="/contact" variant="outline">
                Contact us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
