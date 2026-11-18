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
 * Submissions are POSTed to FormSubmit (formsubmit.co), which emails them to
 * the admissions inbox in `site.email`. The first submission makes FormSubmit
 * send an activation link to that inbox; nothing is delivered until someone
 * clicks it. `_honey` is FormSubmit's spam trap — real visitors never see it.
 */
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${site.email}`

const MESSAGE_MAX = 500
const EMPTY = { name: '', phone: '', email: '', course: '', message: '' }

// Letters (any script, so Hindi names pass), spaces, dot, apostrophe, hyphen.
const NAME_RE = /^[\p{L}\p{M}][\p{L}\p{M} .'-]*$/u
// Indian mobile: 10 digits, first digit 6-9.
const PHONE_RE = /^[6-9]\d{9}$/
// Pragmatic email check: local@domain.tld, no spaces, TLD of 2+ letters.
const EMAIL_RE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[A-Za-z]{2,}$/

/** Keeps only digits and strips a pasted +91 / 0 prefix, capped at 10. */
function normalisePhone(raw) {
  let digits = raw.replace(/\D/g, '')
  if (digits.length > 10 && digits.startsWith('91')) digits = digits.slice(2)
  if (digits.length > 10 && digits.startsWith('0')) digits = digits.slice(1)
  return digits.slice(0, 10)
}

function validate(name, value) {
  const v = value.trim()
  switch (name) {
    case 'name':
      if (!v) return 'Please enter your full name.'
      if (v.length < 2) return 'Name must be at least 2 characters.'
      if (v.length > 60) return 'Name must be 60 characters or fewer.'
      if (!NAME_RE.test(v)) return 'Name can only contain letters, spaces, dots, apostrophes and hyphens.'
      return ''
    case 'phone':
      if (!v) return 'Please enter your mobile number.'
      if (v.length !== 10) return 'Mobile number must be exactly 10 digits.'
      if (!PHONE_RE.test(v)) return 'Enter a valid Indian mobile number starting with 6, 7, 8 or 9.'
      return ''
    case 'email':
      if (!v) return 'Please enter your email address.'
      if (v.length > 100) return 'Email must be 100 characters or fewer.'
      if (!EMAIL_RE.test(v)) return 'Enter a valid email address, e.g. name@example.com.'
      return ''
    case 'course':
      return v ? '' : 'Please choose a course.'
    case 'message':
      return v.length > MESSAGE_MAX ? `Message must be ${MESSAGE_MAX} characters or fewer.` : ''
    default:
      return ''
  }
}

function FieldError({ id, message }) {
  if (!message) return null
  return (
    <p id={id} className="mt-1.5 text-xs font-medium text-red-700">
      {message}
    </p>
  )
}

export default function EnquiryForm({ idPrefix = 'enquiry', compact = false, animated = false, className = '' }) {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const reduced = useReducedMotion()
  const id = (name) => `${idPrefix}-${name}`
  const stagger = animated && !reduced
  const fields = compact ? ['name', 'phone', 'email', 'course'] : ['name', 'phone', 'email', 'course', 'message']

  const handleChange = (event) => {
    const { name } = event.target
    let { value } = event.target
    if (name === 'phone') value = normalisePhone(value)
    if (name === 'name') value = value.replace(/\s{2,}/g, ' ').slice(0, 60)
    if (name === 'email') value = value.replace(/\s/g, '').slice(0, 100)
    if (name === 'message') value = value.slice(0, MESSAGE_MAX)
    setValues((v) => ({ ...v, [name]: value }))
    // Once a field has been visited, re-check live so the error clears as soon as it is fixed.
    if (touched[name]) setErrors((e) => ({ ...e, [name]: validate(name, value) }))
  }

  const handleBlur = (event) => {
    const { name, value } = event.target
    setTouched((t) => ({ ...t, [name]: true }))
    setErrors((e) => ({ ...e, [name]: validate(name, value) }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const nextErrors = Object.fromEntries(fields.map((f) => [f, validate(f, values[f])]))
    setErrors(nextErrors)
    setTouched(Object.fromEntries(fields.map((f) => [f, true])))
    const firstInvalid = fields.find((f) => nextErrors[f])
    if (firstInvalid) {
      form.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const clean = Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()]))
    setStatus('sending')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name: clean.name,
          Phone: `+91 ${clean.phone}`,
          Email: clean.email.toLowerCase(),
          Course: clean.course,
          Message: compact ? '' : clean.message,
          _subject: `Admission enquiry: ${clean.course} — ${clean.name}`,
          _replyto: clean.email.toLowerCase(),
          _template: 'table',
          _honey: new FormData(form).get('_honey') || '',
        }),
      })
      const result = await response.json().catch(() => ({}))
      if (!response.ok || String(result.success) === 'false') throw new Error(result.message || 'Request failed')
      setValues(EMPTY)
      setErrors({})
      setTouched({})
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const errorOf = (name) => (touched[name] && errors[name]) || ''
  // Shared props for each field: value, handlers, error styling and ARIA wiring.
  const bind = (name, extraClass = '') => {
    const err = errorOf(name)
    return {
      id: id(name),
      name,
      value: values[name],
      onChange: handleChange,
      onBlur: handleBlur,
      'aria-invalid': err ? 'true' : undefined,
      'aria-describedby': err ? id(`${name}-error`) : undefined,
      className: `${field} ${extraClass} ${err ? '!border-red-500 bg-red-50/40 focus:!border-red-600' : ''}`,
    }
  }

  if (status === 'sent') {
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
          <p className="font-medium text-brand-900">Thank you, your enquiry has been sent</p>
          <p className="prose-aims mt-1">
            Our admissions team will contact you shortly. For anything urgent, call{' '}
            <a href={site.phoneHref} className="font-medium text-brand-800 hover:text-gold-600">
              {site.phone}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-4 text-sm font-medium text-brand-700 underline-offset-4 hover:text-gold-600 hover:underline"
          >
            Send another enquiry
          </button>
        </div>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 sm:space-y-5 ${className}`}>
      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <Row i={0} animate={stagger} className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        <div>
          <label htmlFor={id('name')} className={label}>
            Full name
          </label>
          <input {...bind('name')} type="text" autoComplete="name" maxLength={60} placeholder="Your name" />
          <FieldError id={id('name-error')} message={errorOf('name')} />
        </div>
        <div>
          <label htmlFor={id('phone')} className={label}>
            Phone
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted">+91</span>
            <input
              {...bind('phone', 'pl-12')}
              type="tel"
              inputMode="numeric"
              autoComplete="tel-national"
              maxLength={14}
              placeholder="10-digit mobile"
            />
          </div>
          <FieldError id={id('phone-error')} message={errorOf('phone')} />
        </div>
      </Row>
      <Row i={1} animate={stagger}>
        <label htmlFor={id('email')} className={label}>
          Email
        </label>
        <input {...bind('email')} type="email" inputMode="email" autoComplete="email" maxLength={100} placeholder="you@example.com" />
        <FieldError id={id('email-error')} message={errorOf('email')} />
      </Row>
      <Row i={2} animate={stagger}>
        <label htmlFor={id('course')} className={label}>
          Select course
        </label>
        <select {...bind('course')}>
          <option value="" disabled>
            Choose a course
          </option>
          {COURSE_OPTIONS.map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
        <FieldError id={id('course-error')} message={errorOf('course')} />
      </Row>
      {!compact && (
        <Row i={3} animate={stagger}>
          <label htmlFor={id('message')} className={label}>
            Message <span className="font-normal text-muted">(optional)</span>
          </label>
          <textarea {...bind('message')} rows={4} maxLength={MESSAGE_MAX} placeholder="Anything you would like us to know" />
          <div className="flex items-start justify-between gap-3">
            <FieldError id={id('message-error')} message={errorOf('message')} />
            <span
              className={`ml-auto mt-1.5 text-xs ${values.message.length >= MESSAGE_MAX ? 'text-red-700' : 'text-muted'}`}
            >
              {values.message.length}/{MESSAGE_MAX}
            </span>
          </div>
        </Row>
      )}
      <Row i={4} animate={stagger}>
        {status === 'error' && (
          <p role="alert" className="mb-3 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800">
            Sorry, your enquiry could not be sent. Please try again, or call{' '}
            <a href={site.phoneHref} className="font-medium underline underline-offset-2">
              {site.phone}
            </a>{' '}
            or email{' '}
            <a href={`mailto:${site.email}`} className="font-medium underline underline-offset-2">
              {site.email}
            </a>
            .
          </p>
        )}
        <Button
          as="button"
          type="submit"
          variant="gold"
          className="w-full disabled:cursor-wait disabled:opacity-70"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </Button>
      </Row>
    </form>
  )
}
