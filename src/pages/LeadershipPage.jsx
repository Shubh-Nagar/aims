import { Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Phone, Smartphone } from 'lucide-react'
import { leadership } from '@/data/leadership'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'
import { fadeUp, stagger } from '@/lib/motion'

export default function LeadershipPage({ slug: fixedSlug }) {
  const params = useParams()
  const slug = fixedSlug ?? params.slug
  const person = leadership.find((entry) => entry.slug === slug)
  if (!person) return <Navigate to="/404" replace />

  return (
    <>
      <Seo
        title={`${person.role} | Amaltas Institute of Medical Sciences`}
        description={`${person.name}, ${person.role} of Amaltas Institute of Medical Sciences, Dewas.`}
        path={`/${slug}`}
      />
      <PageHero title={person.role} breadcrumb="About Us" image="/images/campus/night.jpg" />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <Reveal onMount variants={stagger(0.1)}>
            <motion.div variants={fadeUp}>
              <Img src={person.image} alt={person.name} ratio="aspect-[4/5]" wrapperClassName="rounded-2xl" />
            </motion.div>
            <motion.h2 variants={fadeUp} className="mt-6 text-2xl">
              {person.name}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-1 text-2xs font-semibold uppercase tracking-eyebrow text-gold-600"
            >
              {person.role}
            </motion.p>
            {person.qualifications && (
              <motion.p variants={fadeUp} className="mt-1 text-sm text-muted">
                {person.qualifications}
              </motion.p>
            )}

            {person.contact && (
              <motion.ul variants={stagger(0.06)} className="mt-6 space-y-3 border-t border-line pt-6 text-sm">
                {person.contact.phone && (
                  <motion.li variants={fadeUp} className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a href={person.contact.phoneHref} className="text-brand-800 transition-colors hover:text-gold-700">
                      {person.contact.phone}
                    </a>
                  </motion.li>
                )}
                {person.contact.mobile && (
                  <motion.li variants={fadeUp} className="flex items-start gap-3">
                    <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a href={person.contact.mobileHref} className="text-brand-800 transition-colors hover:text-gold-700">
                      {person.contact.mobile}
                    </a>
                  </motion.li>
                )}
                {person.contact.email && (
                  <motion.li variants={fadeUp} className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <a
                      href={`mailto:${person.contact.email}`}
                      className="break-all text-brand-800 transition-colors hover:text-gold-700"
                    >
                      {person.contact.email}
                    </a>
                  </motion.li>
                )}
                {person.contact.address && (
                  <motion.li variants={fadeUp} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-600" aria-hidden="true" />
                    <span className="text-muted">{person.contact.address}</span>
                  </motion.li>
                )}
              </motion.ul>
            )}
          </Reveal>

          <Reveal onMount delay={0.08} variants={stagger(0.12)}>
            {person.message ? (
              person.message.map((paragraph) => (
                <motion.p
                  key={paragraph.slice(0, 40)}
                  variants={fadeUp}
                  className="prose-aims mt-5 text-base first:mt-0"
                >
                  {paragraph}
                </motion.p>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gold-400 bg-gold-100/50 p-7">
                <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-700">
                  Message migration pending
                </p>
                <p className="prose-aims mt-3">
                  Add the message verbatim from the current site to the{' '}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-brand-800">message</code> array
                  for <strong>{slug}</strong> in{' '}
                  <code className="rounded bg-white px-1.5 py-0.5 text-xs text-brand-800">
                    src/data/leadership.js
                  </code>
                  .
                </p>
                {person.pendingSource && (
                  <a
                    href={person.pendingSource}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-brand-800 transition-colors hover:text-gold-700"
                  >
                    Open the current page
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  )
}
