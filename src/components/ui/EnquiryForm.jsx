import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { site } from '@/data/site'
import { EASE } from '@/lib/motion'
import Button from '@/components/ui/Button'

export const COURSE_OPTIONS = [
  'M.B.B.S.',
  'B.Sc. Nursing',
  'M.Sc. Nursing',
  'Paramedical Courses',
  'P.G. Courses',
  'B.H.M.S.',
  'B.Pharm',
  'D.Pharm',
]

const field =
  'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink transition-colors duration-200 placeholder:text-muted/70 focus:border-brand-500'
const label = 'mb-2 block text-xs font-medium text-brand-900'

// Each field rises in on a short stagger when `animate` is set. Defined at
// module level so re-renders never remount the inputs (and lose typed text).
function Row({ i, animate, children, className = '' }) {
  if (!animate) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.25 + i * 0.06, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

/**
 * The admission enquiry form, shared by the Admission page and the homepage
 * popup. `idPrefix` keeps label/input ids unique if both ever render at once;
 * `compact` drops the optional message so the form fits a modal; `animated`
 * staggers the fields in (used by the popup).
 *
 * No backend is wired up yet, so the enquiry is handed to the visitor's mail
 * app, pre-addressed to admissions. Swap handleSubmit for a POST to the
 * college's form handler (or an API route) once that endpoint exists.
 */
export default function EnquiryForm({ idPrefix = 'enquiry', compact = false, animated = false, className = '' }) {
  const [sent, setSent] = useState(false)
  const reduced = useReducedMotion()
  const id = (name) => `${idPrefix}-${name}`
  const stagger = animated && !reduced

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const body = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `Course: ${data.get('course')}`,
      data.get('message') ? `\n${data.get('message')}` : '',
    ].join('\n')
    const subject = `Admission enquiry: ${data.get('course')}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <motion.div
        initial={reduced ? false : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className={`flex items-start gap-4 rounded-xl bg-brand-50 p-6 ${className}`}
        role="status"
      >
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-700 text-white">
          <Check className="h-4 w-4" aria-hidden="true" />
        </span>
        <div>
          <p className="font-medium text-brand-900">Your enquiry is ready to send</p>
          <p className="prose-aims mt-1">
            Your email app should have opened with the enquiry filled in — press send there to reach the
            admissions office. If nothing opened, call{' '}
            <a href={site.phoneHref} className="font-medium text-brand-800 hover:text-gold-600">
              {site.phone}
            </a>{' '}
            or write to{' '}
            <a href={`mailto:${site.email}`} className="font-medium text-brand-800 hover:text-gold-600">
              {site.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setSent(false)}
            className="mt-4 text-sm font-medium text-brand-700 underline-offset-4 hover:text-gold-600 hover:underline"
          >
            Edit enquiry
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 sm:space-y-5 ${className}`}>
      <Row i={0} animate={stagger} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor={id('name')} className={label}>
            Full name
          </label>
          <input id={id('name')} name="name" type="text" required autoComplete="name" className={field} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor={id('phone')} className={label}>
            Phone
          </label>
          <input id={id('phone')} name="phone" type="tel" required autoComplete="tel" className={field} placeholder="10-digit mobile number" />
        </div>
      </Row>
      <Row i={1} animate={stagger}>
        <label htmlFor={id('email')} className={label}>
          Email
        </label>
        <input id={id('email')} name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
      </Row>
      <Row i={2} animate={stagger}>
        <label htmlFor={id('course')} className={label}>
          Select course
        </label>
        <select id={id('course')} name="course" required className={field} defaultValue="">
          <option value="" disabled>
            Choose a course
          </option>
          {COURSE_OPTIONS.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </Row>
      {!compact && (
        <Row i={3} animate={stagger}>
          <label htmlFor={id('message')} className={label}>
            Message <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea id={id('message')} name="message" rows={4} className={field} placeholder="Anything you would like us to know" />
        </Row>
      )}
      <Row i={4} animate={stagger}>
        <Button as="button" type="submit" variant="gold" className="w-full">
          Send enquiry
        </Button>
      </Row>
    </form>
  )
}
