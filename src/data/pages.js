/**
 * Generic content pages.
 *
 * `sections` holds copy migrated from the current site.
 * `pendingSource` marks a page whose body copy still has to be lifted from
 * the live site — the page renders a clear migration notice with a link
 * rather than placeholder prose, so nothing invented ever ships.
 */
export const contentPages = {
  'details-of-institution': {
    title: 'Details of Institution',
    breadcrumb: 'About Us',
    lede: 'A 27.378-acre campus in village Bangar on the Dewas-Ujjain Highway, eight kilometres from Dewas.',
    image: '/images/details-of-institution.jpg',
    sections: [
      {
        heading: 'Location',
        body: [
          'Amaltas Institute of Medical Sciences is located in village Bangar on Dewas-Ujjain Highway in pollution free environment surrounded by lush green fields spread over 27.378 acres of land. The campus is 08 km from Dewas.',
          'The institution aims at providing undergraduate course for Bachelor of Medicine and Bachelor of Surgery (M.B.B.S) with all academic facilities as per Medical Council of India.',
        ],
      },
    ],
  },

  'quality-policy': {
    title: 'Quality Policy',
    breadcrumb: 'About Us',
    pendingSource: 'https://amaltasmedicalcollege.in/quality-policy/',
  },

  'academic-and-hospital-facilities': {
    title: 'Academic and Hospital Facilities',
    breadcrumb: 'Infrastructure',
    pendingSource: 'https://amaltasmedicalcollege.in/academic-and-hospital-facilities/',
  },
  'built-up-area': {
    title: 'Built Up Area',
    breadcrumb: 'Infrastructure',
    pendingSource: 'https://amaltasmedicalcollege.in/built-up-area/',
  },
  'college-layout': {
    title: 'College Layout',
    breadcrumb: 'Infrastructure',
    pendingSource: 'https://amaltasmedicalcollege.in/college-layout/',
  },
  'library-photography': {
    title: 'Library & Photography',
    breadcrumb: 'Infrastructure',
    pendingSource: 'https://amaltasmedicalcollege.in/library-photography/',
  },
  'residential-facilities': {
    title: 'Residential Facilities',
    breadcrumb: 'Infrastructure',
    pendingSource: 'https://amaltasmedicalcollege.in/residential-facilities/',
  },

  students: {
    title: 'Students',
    breadcrumb: 'Institutional',
    pendingSource: 'https://amaltasmedicalcollege.in/students/',
  },
  'teaching-schedule': {
    title: 'Teaching Schedule',
    breadcrumb: 'Institutional',
    pendingSource: 'https://amaltasmedicalcollege.in/teaching-schedule/',
  },
  fees: {
    title: 'Fees',
    breadcrumb: 'Institutional',
    lede: 'Fee structure for undergraduate, postgraduate, nursing and paramedical programmes.',
    pendingSource: 'https://amaltasmedicalcollege.in/fees/',
  },

  committees: {
    title: 'Committees',
    breadcrumb: 'Quick Links',
    pendingSource: 'https://amaltasmedicalcollege.in/committees/',
  },
  'citizen-charter': {
    title: 'Citizen Charter',
    breadcrumb: 'Important Links',
    pendingSource: 'https://amaltasmedicalcollege.in/citizen-charter/',
  },
  'bmw-west-annual-report': {
    title: 'BMW West Annual Report',
    breadcrumb: 'Important Links',
    pendingSource: 'https://amaltasmedicalcollege.in/bmw-west-annual-report/',
  },
  'college-information-pro-forma-status': {
    title: 'College Information Pro forma Status',
    breadcrumb: 'Important Links',
    pendingSource: 'https://amaltasmedicalcollege.in/college-information-pro-forma-status/',
  },
  'ugmsr-pgmsr-information': {
    title: 'Information as per UGMSR 2023 & PGMSR Amendment 2026',
    breadcrumb: 'Important Links',
    pendingSource:
      'https://amaltasmedicalcollege.in/information-as-per-ugmsr-2023-pgmsr-amendment-2026/',
  },
  'affiliations-permissions': {
    title: 'Affiliations & Permissions',
    breadcrumb: 'Important Links',
    pendingSource: 'https://amaltasmedicalcollege.in/affiliations-permissions/',
  },
  posters: {
    title: 'Posters',
    breadcrumb: 'Quick Links',
    pendingSource: 'https://amaltasmedicalcollege.in/posters/',
  },
  'erp-login': {
    title: 'ERP Staff & Students Log in',
    breadcrumb: 'Important Links',
    lede: 'Access the ERP portal for staff and student management — academic records, attendance and updates in one place.',
    sections: [
      {
        heading: 'About the portal',
        body: [
          'Log in to manage academic records, track attendance and access important updates all in one place. Stay connected and informed with ease.',
        ],
      },
    ],
    cta: { label: 'Go to ERP login', href: 'https://amaltasmedicalcollege.in/erp-staff-students-log-in/' },
  },
}
