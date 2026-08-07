// Mirrors the information architecture of the current site.
// `file: true` marks a link that should point at a PDF in /public/documents.
export const navigation = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    children: [
      { label: 'About the Society', to: '/about-the-society' },
      { label: 'Details of Institution', to: '/details-of-institution' },
      { label: "Chairman's Message", to: '/chairmans-message' },
      { label: 'Dean', to: '/dean' },
      { label: 'Medical Superintendent', to: '/medical-superintendent' },
      { label: 'Registrar', to: '/registrar' },
      { label: 'Vice-Chancellor', to: '/vice-chancellor' },
      { label: 'Teaching Faculty', href: '/documents/Teaching-Faculty-list.pdf', file: true },
      { label: 'Quality Policy', to: '/quality-policy' },
    ],
  },
  {
    label: 'Institutional',
    children: [
      { label: 'Admission', to: '/admission' },
      { label: 'Courses', to: '/courses' },
      { label: 'Fees', to: '/fees' },
      { label: 'Students', to: '/students' },
      { label: 'Teaching Schedule', to: '/teaching-schedule' },
      { label: 'Publications', to: '/publications' },
      { label: 'Student Feedback Form', href: '/documents/student_feedback_form.pdf', file: true },
      { label: 'Faculty Feedback Form', href: '/documents/faculty_feedback_form.pdf', file: true },
      { label: 'Bed Distribution', to: '/bed-distribution' },
      { label: 'Committees', to: '/committees' },
    ],
  },
  {
    label: 'Infrastructure',
    children: [
      { label: 'Academic & Hospital Facilities', to: '/academic-and-hospital-facilities' },
      { label: 'Clinical Departments', to: '/clinical-departments' },
      { label: 'Pre-Clinical Departments', to: '/pre-clinical-departments' },
      { label: 'Built Up Area', to: '/built-up-area' },
      { label: 'College Layout', to: '/college-layout' },
      { label: 'Library & Photography', to: '/library-photography' },
      { label: 'Residential Facilities', to: '/residential-facilities' },
    ],
  },
  {
    label: 'Antiragging',
    children: [{ label: 'Antiragging Measures', to: '/antiragging-measures' }],
  },
  {
    label: 'Events',
    children: [
      { label: 'Activities / Events', to: '/events' },
      { label: 'CME, Conference & Academic Activities', to: '/cme-conference-academic-activities' },
      { label: 'Awards & Achievements', to: '/awards-achievements' },
      { label: 'News - Press Release', to: '/news-press-release' },
    ],
  },
  { label: 'Contact Us', to: '/contact' },
]

export const footerColumns = [
  {
    title: 'Important Links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Citizen Charter', to: '/citizen-charter' },
      { label: 'BMW West Annual Report', to: '/bmw-west-annual-report' },
      { label: 'ERP Staff & Students Log in', to: '/erp-login' },
      { label: 'College Information Pro forma Status', to: '/college-information-pro-forma-status' },
      { label: 'Information as per UGMSR 2023 & PGMSR Amendment 2026', to: '/ugmsr-pgmsr-information' },
      { label: 'Affiliations & Permissions', to: '/affiliations-permissions' },
    ],
  },
  {
    title: 'Institutional',
    links: [
      { label: 'Courses', to: '/courses' },
      { label: 'Students', to: '/students' },
      { label: 'Teaching Schedule', to: '/teaching-schedule' },
      { label: 'Student Feedback Form', href: '/documents/student_feedback_form.pdf', file: true },
      { label: 'Faculty Feedback Form', href: '/documents/faculty_feedback_form.pdf', file: true },
      { label: 'Bed Distribution', to: '/bed-distribution' },
      { label: 'Contact Us', to: '/contact' },
    ],
  },
  {
    title: 'Quick Links',
    links: [
      { label: 'Antiragging Measures', to: '/antiragging-measures' },
      { label: 'Committees', to: '/committees' },
      { label: 'Activities / Events', to: '/events' },
      { label: 'Photo Gallery', to: '/photogallery' },
      { label: 'Posters', to: '/posters' },
      { label: 'News - Press Release', to: '/news-press-release' },
      { label: 'Awards & Achievements', to: '/awards-achievements' },
    ],
  },
]
