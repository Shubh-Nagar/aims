import { helplines, site } from '@/data/site'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'
import { Phone, ShieldCheck, ExternalLink } from 'lucide-react'

export default function Antiragging() {
  return (
    <>
      <Seo
        title="Antiragging Measures | Amaltas Institute of Medical Sciences"
        description="Anti-ragging measures, committee and 24-hour helplines at Amaltas Institute of Medical Sciences, Dewas."
        path="/antiragging-measures"
      />
      <PageHero
        title="Antiragging Measures"
        lede="A proactive Anti-Ragging Committee, a toll-free helpline and support lines that answer around the clock."
        breadcrumb="Antiragging"
      />

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl md:text-[1.75rem]">Safeguarding student welfare</h2>
              <div className="mt-2 h-px w-14 bg-gold-500" aria-hidden="true" />
              <p className="prose-aims mt-5 text-base">
                At Amaltas Institute of Medical Sciences, we prioritise student safety and well-being. Our
                proactive Anti-Ragging Committee ensures a secure campus, with a dedicated toll-free helpline
                and additional support lines. We are here to assist and protect our students around the clock.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-10 rounded-2xl border border-dashed border-gold-400 bg-gold-100/50 p-7">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                Committee details pending migration
              </p>
              <p className="prose-aims mt-3">
                Add the committee composition, undertaking forms and UGC regulation references from the
                current page.
              </p>
              <a
                href="https://amaltasmedicalcollege.in/antiragging-measures/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
              >
                Open the current page
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="sticky top-28 rounded-2xl bg-brand-800 p-8 text-white">
              <ShieldCheck className="h-7 w-7 text-gold-400" aria-hidden="true" />
              <p className="mt-5 text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">
                Toll-free helpline
              </p>
              <a
                href={`tel:${helplines.tollFree.replace(/-/g, '')}`}
                className="mt-3 block font-display text-3xl transition-colors hover:text-gold-300"
              >
                {helplines.tollFree}
              </a>
              <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                {helplines.numbers.map((number) => (
                  <li key={number}>
                    <a
                      href={`tel:${number.replace(/-/g, '')}`}
                      className="flex items-center gap-3 text-sm text-white/75 transition-colors hover:text-gold-300"
                    >
                      <Phone className="h-4 w-4 text-gold-500" aria-hidden="true" />
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button to="/contact" variant="light" className="w-full">
                  Contact the college
                </Button>
              </div>
              <p className="mt-5 text-xs leading-relaxed text-white/50">{site.address}</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
