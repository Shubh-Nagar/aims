import { site, helplines } from '@/data/site'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Button from '@/components/ui/Button'

const details = [
  { icon: MapPin, label: 'Campus', value: site.address, href: site.mapsLink, note: site.locality },
  { icon: Phone, label: 'Telephone', value: site.phone, href: site.phoneHref },
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Clock, label: 'Office hours', value: 'Monday to Saturday, 9:00 am - 5:00 pm' },
]

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | Amaltas Institute of Medical Sciences"
        description="Reach Amaltas Institute of Medical Sciences, Dewas — campus address, phone, email and anti-ragging helplines."
        path="/contact"
      />
      <PageHero
        title="Contact Us"
        lede="The campus sits on the Dewas-Ujjain Highway, eight kilometres from Dewas. Here is every way to reach us."
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <ul className="space-y-px overflow-hidden rounded-2xl bg-line">
              {details.map((detail, i) => (
                <Reveal as="li" key={detail.label} delay={i * 0.06}>
                  <div className="flex gap-5 bg-surface p-6 transition-colors duration-300 hover:bg-brand-50/70">
                    <detail.icon className="mt-1 h-5 w-5 shrink-0 text-gold-600" aria-hidden="true" />
                    <div>
                      <p className="text-2xs font-semibold uppercase tracking-eyebrow text-muted">
                        {detail.label}
                      </p>
                      {detail.href ? (
                        <a
                          href={detail.href}
                          target={detail.href.startsWith('http') ? '_blank' : undefined}
                          rel="noreferrer noopener"
                          className="mt-2 block text-[15px] font-medium text-brand-900 transition-colors hover:text-gold-600"
                        >
                          {detail.value}
                        </a>
                      ) : (
                        <p className="mt-2 text-[15px] font-medium text-brand-900">{detail.value}</p>
                      )}
                      {detail.note && <p className="mt-1 text-sm text-muted">{detail.note}</p>}
                    </div>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.25} className="mt-6 rounded-2xl bg-brand-800 p-7 text-white">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-300">
                Anti-ragging helpline
              </p>
              <a
                href={`tel:${helplines.tollFree.replace(/-/g, '')}`}
                className="mt-3 block font-display text-3xl transition-colors hover:text-gold-300"
              >
                {helplines.tollFree}
              </a>
              <p className="mt-3 text-sm text-white/65">{helplines.numbers.join(' · ')}</p>
              <div className="mt-6">
                <Button to="/antiragging-measures" variant="light">
                  Anti-ragging measures
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <iframe
                src={site.mapsEmbed}
                title="Amaltas Medical College and Hospital campus location"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[560px] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
