// Institutional facts. All values taken from amaltasmedicalcollege.in.
export const site = {
  name: 'Amaltas Institute of Medical Sciences',
  shortName: 'AIMS',
  parent: 'Amaltas Educational Welfare Society',
  tagline: 'A Sprawling Medical Campus',
  heroKicker: '27.378 acres of medical education excellence',
  address: 'Amaltas Medical College and Hospital Campus, Dewas, Madhya Pradesh - 455001',
  locality: 'Village Bangar, Dewas-Ujjain Highway — 8 km from Dewas',
  phone: '07272-426505',
  phoneHref: 'tel:+917272426505',
  email: 'medical@amaltasgroup.co.in',
  mapsLink: 'https://maps.app.goo.gl/eAeYWQHuBTNvmDiK9',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9818015611695!2d75.96934018885497!3d23.02444040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396374403e555555%3A0xbb515b17db0c3f77!2sAmaltas%20Hospital%20Dewas%20%7C%20Hospital%20in%20Dewas!5e0!3m2!1sen!2sin!4v1720865798738!5m2!1sen!2sin',
  socials: [
    { label: 'Facebook', href: 'https://www.facebook.com/' },
    { label: 'Twitter', href: 'https://twitter.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
}

// Anti-ragging helplines, as published on the current site.
export const helplines = {
  tollFree: '1800-180-5522',
  numbers: ['9752440111', '9752443111', '07272-426500'],
}

export const stats = [
  { value: 302, suffix: '', label: 'Seats', note: 'Across UG and PG intake' },
  { value: 100, suffix: '%', label: 'Placement percentile', note: 'Reported by the institute' },
  { value: 537, suffix: '', label: 'Teachers', note: 'Teaching faculty on roll' },
  { value: 27.378, suffix: ' acres', label: 'Campus', note: 'Village Bangar, Dewas', decimals: 3 },
]

// Copy for the full-bleed quote band on the homepage. The line is lifted
// verbatim from the Founder Chairman's published message in
// src/data/leadership.js, and `href` points at the page carrying that message
// in full — so the band reads as an excerpt with a route back to its source
// rather than a decontextualised line. Never put words here that the named
// person did not actually publish.
export const campusQuote = {
  quote:
    'Amaltas means Cassia fistula — the golden shower tree. It blooms fully, without hesitation, transforming its surroundings.',
  name: 'Shri Suresh Singh Bhadoria',
  role: 'Founder Chairman',
  href: '/founder-chairman',
  image: '/images/campus/night.jpg',
}

export const accreditations = [
  { label: 'Certificate of CMHO', href: '/documents/CMHO.jpeg' },
  { label: 'Certification of ISO', href: '/documents/ISO.jpeg' },
  { label: 'Certificate of NABH Accreditation', href: '/documents/NABH.jpeg' },
  { label: 'Certificate of NABL Accreditation', href: '/documents/NABL.jpeg' },
  { label: 'Awards & Achievements', href: '/documents/Awards-and-Achievement.pdf' },
]

// Scrolling admissions strip, migrated from the marquee on the current site's
// homepage. `href` items open the published PDF; the first is plain text there.
export const admissionNotices = [
  { label: 'Admission Open for 2026-27' },
  {
    label: 'Fees of Super Speciality Courses & Stipend',
    href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/AIMS.DN_.2026.464-dated-18.08.2026.pdf',
  },
  {
    label: 'Documents Checklist (for UG Counselling 2026-27)',
    href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/Documents-Checklist.pdf',
  },
]

export const applySteps = [
  {
    title: 'You enquire',
    body: 'Fill out the enquiry form and we guide you through the rest. We simplify the admission process and assist with financial aid if you are eligible.',
  },
  {
    title: 'We connect',
    body: 'After you submit your application, an admissions representative contacts you and helps you complete the process.',
  },
  {
    title: 'You get ready',
    body: 'Once your application is complete and you have spoken to an admissions representative, you are ready to create your schedule.',
  },
]
