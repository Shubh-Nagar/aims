// Information Under MSR Clause B.1.11 — mandatory disclosure table.
//
// `status` is either a plain string, or an array of entries where each
// entry is a plain string (no local document exists yet) or a
// { label, href } pair pointing at a real Amaltas page/document. Rows with
// nothing on this site yet are marked 'Not yet published' rather than
// invented.
export const msrDisclosures = [
  {
    no: 1,
    details:
      'Details of Dean / Principal and Medical Superintendent including their name, qualification complete address with Telephone and STD code, Fax and E-mail etc.',
    status: [
      { label: 'Dean', href: '/dean' },
      { label: 'Medical Superintendent', href: '/medical-superintendent' },
    ],
  },
  {
    no: 2,
    details:
      'Teaching staff, Resident doctors, Non-teaching staff, Technical staff, Nursing staff—a) Department & designation wise with joining date (b) Unit wise faculty & resident list.',
    status: [
      { label: 'Teaching Faculty List', href: '/documents/Teaching-Faculty-list.pdf' },
      'Nursing Staff — Not yet published',
      'Paramedical & Other Staff — Not yet published',
    ],
  },
  {
    no: 3,
    details: 'Details of the Affiliated University and its Vice-Chancellor and Registrars.',
    status: [
      { label: 'Vice-Chancellor', href: '/vice-chancellor' },
      { label: 'Registrar', href: '/registrar' },
    ],
  },
  {
    no: 4,
    details: 'Citizen Charter',
    status: 'Not yet published',
  },
  {
    no: 5,
    details: 'List of Students admitted merit-wise category-wise (UG & PG) for the current and previous year.',
    status: [
      { label: 'MBBS 2024-25', href: '/documents/MBBS%20Batch%202024-25%20Student%20List.pdf' },
      { label: 'MBBS 2025-26', href: '/documents/MBBS%20Batch-%202025-2026%20List.pdf' },
      { label: 'PG MDMS 2024-2025', href: '/documents/PG%20MDMS%20Batch-%202024-2025%20List.pdf' },
      { label: 'PG MDMS 2025-2026', href: '/documents/PG%20MDMS%20Batch-%202025-2026%20List.pdf' },
      'Earlier years — Not yet published',
    ],
  },
  {
    no: 6,
    details: 'Result of all the Examinations of last one year.',
    status: [
      { label: 'Prof 2025', href: '/documents/Prof%202025.pdf' },
      { label: 'Second Prof 2023-24 Batch', href: '/documents/second%20prof%2023%2024%20batch.pdf' },
    ],
  },
  {
    no: 7,
    details:
      'Details of members of the Anti Ragging Committee with contact details including Landline Phone, Mobile, Email etc… National Medical Commission (Prevention and Prohibition of Ragging in Medical Colleges and Institutions) Regulations, 2021',
    status: [
      { label: 'Antiragging Measures', href: '/antiragging-measures' },
      {
        label: 'Institutional Anti-Ragging Committee (PDF)',
        href: '/documents/committees/Institutional-Anti-Ragging-Committee.pdf',
      },
    ],
  },
  {
    no: 8,
    details:
      'Details of members of the Gender Harassment Committee with contact details including landline phone, mobile, email etc…',
    status: [
      {
        label: 'Gender Harassment Prevention Committee (PDF)',
        href: '/documents/committees/Gender-Harassment-Prevention-Committee.pdf',
      },
    ],
  },
  {
    no: 9,
    details: 'Toll Free Number to report Ragging.',
    status: '1800-180-5522',
  },
  {
    no: 10,
    details:
      'Details of the sanctioned intake capacity of various courses UG as well as PGs by the MCI. (with the scan copies of permission letter)',
    status: [
      { label: 'Letter of Permission — UG', href: '/documents/LOP%20UG.pdf' },
      { label: 'Letter of Permission — PG', href: '/documents/LOP%20PG%20merged.pdf' },
    ],
  },
  {
    no: 11,
    details: 'Any Research Publication during the last one year.',
    status: [{ label: 'Publications', href: '/publications' }],
  },
  {
    no: 12,
    details: 'Details of any CME Programmes, conferences and/or any academic activities conducted by the institution.',
    status: [{ label: 'CME, Conference & Academic Activities', href: '/cme-conference-academic-activities' }],
  },
  {
    no: 13,
    details: 'Details of any Awards and Achievements received by the Students or Faculty.',
    status: [{ label: 'Awards & Achievements', href: '/awards-achievements' }],
  },
  {
    no: 14,
    details: 'Detailed status of recognition of all the courses (with the scan copies of permission letter)',
    status: [
      { label: 'Letter of Permission — UG', href: '/documents/LOP%20UG.pdf' },
      { label: 'Letter of Permission — PG', href: '/documents/LOP%20PG%20merged.pdf' },
    ],
  },
  {
    no: 15,
    details: 'Details of fees for MBBS and MD, MS Courses',
    status: [{ label: 'Fee Structure', href: '/documents/Amaltas%20Fees.pdf' }],
  },
  {
    no: 16,
    details: 'Details of Clinical Material in the Hospital.',
    status: [
      { label: 'IPD', href: '/documents/IPD.pdf' },
      { label: 'OT Major', href: '/documents/OT%20major.pdf' },
      { label: 'OT Minor', href: '/documents/OT%20minor.pdf' },
      { label: 'Radiology', href: '/documents/Radiology%20data.pdf' },
      { label: 'Laboratory', href: '/documents/lab.pdf' },
      { label: 'Delivery', href: '/documents/Delivery%20data.pdf' },
    ],
  },
  {
    no: 17,
    details: 'Unit /Dept .wise Beds distribution.',
    status: [{ label: 'Bed Distribution', href: '/bed-distribution' }],
  },
  {
    no: 18,
    details: 'License and Certificates with permissions.',
    status: [
      { label: 'Certificate of CMHO', href: '/documents/CMHO.jpeg' },
      { label: 'Certification of ISO', href: '/documents/ISO.jpeg' },
      { label: 'Certificate of NABH Accreditation', href: '/documents/NABH.jpeg' },
      { label: 'Certificate of NABL Accreditation', href: '/documents/NABL.jpeg' },
    ],
  },
  {
    no: 19,
    details: 'Details of members of the Waste Management Committee with contact details including phone, mobile, email etc.',
    status: 'Not yet published',
  },
]
