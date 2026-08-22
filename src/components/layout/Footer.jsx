import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react'
import { site, helplines } from '@/data/site'
import { footerColumns } from '@/data/navigation'
import Reveal from '@/components/ui/Reveal'
import Vitals from '@/components/ui/Vitals'

function FooterLink({ link }) {
  const classes =
    'group inline-flex items-center gap-2 text-sm text-brand-800 transition-colors duration-200 hover:text-gold-700'
  const inner = (
    <>
      <span className="h-px w-0 bg-gold-500 transition-all duration-300 ease-smooth group-hover:w-3" />
      <span>{link.label}</span>
    </>
  )
  return link.file ? (
    <a href={link.href} target="_blank" rel="noreferrer noopener" className={classes}>
      {inner}
    </a>
  ) : (
    <Link to={link.to} className={classes}>
      {inner}
    </Link>
  )
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-100 text-brand-900">
      <div className="pointer-events-none absolute inset-0 grain opacity-40" aria-hidden="true" />
      <Vitals tone="pine" className="h-8 opacity-50" duration={2.6} />

      <div className="container relative pb-10 pt-12 md:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_repeat(3,minmax(0,1fr))]">
          <Reveal className="max-w-sm">
            <div className="mb-6 inline-block rounded-xl bg-white px-4 py-3">
              <img
                src="/images/aims-logo.png"
                alt={site.name}
                className="h-11 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
            {/* <p className="font-display text-2xl leading-tight text-brand-900">
              Amaltas Institute of Medical Sciences
            </p> */}
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Supported by the {site.parent}, a 27.378-acre campus at {site.locality}.
            </p>

            <address className="mt-6 space-y-3 not-italic text-sm text-brand-800">
              <a href={site.mapsLink} target="_blank" rel="noreferrer noopener" className="flex gap-3 transition-colors hover:text-gold-700">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <span>{site.address}</span>
              </a>
              <a href={site.phoneHref} className="flex gap-3 transition-colors hover:text-gold-700">
                <Phone className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <span>{site.phone}</span>
              </a>
              <a href={`mailto:${site.email}`} className="flex gap-3 transition-colors hover:text-gold-700">
                <Mail className="h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                <span>{site.email}</span>
              </a>
            </address>

            {/* <div className="mt-7 rounded-2xl border border-brand-900/10 bg-white/60 p-4">
              <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                Anti-ragging helpline
              </p>
              <a href={`tel:${helplines.tollFree.replace(/-/g, '')}`} className="mt-2 block font-display text-xl text-brand-900 transition-colors hover:text-gold-700">
                {helplines.tollFree}
              </a>
              <p className="mt-1 text-xs text-muted">{helplines.numbers.join(' · ')}</p>
            </div> */}
          </Reveal>

          {footerColumns.map((column, i) => (
            <Reveal key={column.title} delay={0.06 * (i + 1)}>
              <h2 className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-2xl ring-1 ring-brand-900/10">
          <iframe
            src={site.mapsEmbed}
            title="Amaltas Medical College and Hospital campus on Google Maps"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-64 w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
          />
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-brand-900/10 pt-7 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {site.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-xs uppercase tracking-eyebrow text-brand-700 transition-colors hover:text-gold-700"
              >
                {social.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted">
              &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group grid h-10 w-10 place-items-center rounded-full border border-brand-900/20 text-brand-900 transition-colors duration-300 hover:border-gold-500 hover:bg-gold-500 hover:text-brand-900"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
