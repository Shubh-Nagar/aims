/**
 * Generic content pages.
 *
 * Two shapes are supported by `ContentPage.jsx`:
 *  - `blocks` — the richer vocabulary defined in `src/components/blocks`.
 *    Each entry names a block `type` and carries data only, so presentation
 *    stays in components and content stays here.
 *  - `sections` — the original heading/body/list/documents shape.
 *
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
    lede: 'The standard the institution holds itself to, in teaching and in administration alike.',
    blocks: [
      {
        type: 'quote',
        quote:
          'Quality policy of Amaltas Institute of Medical Sciences is to achieve excellence in teaching and office working through continuous improvement in facilities, teaching methodology and monitoring.',
        attribution: 'Amaltas Institute of Medical Sciences',
      },
      {
        type: 'cards',
        heading: 'How the policy is applied',
        columns: 3,
        items: [
          {
            icon: 'student',
            title: 'Excellence in teaching',
            body: 'Curriculum delivery measured against national standards and reviewed by the Medical Education Unit.',
          },
          {
            icon: 'clipboard',
            title: 'Continuous improvement',
            body: 'Facilities, teaching methodology and office working are revised on a standing cycle rather than on request.',
          },
          {
            icon: 'shield',
            title: 'Monitoring',
            body: 'Institutional committees audit practice and report against the policy across academic and administrative functions.',
          },
        ],
      },
    ],
  },

  'academic-and-hospital-facilities': {
    title: 'Academic and Hospital Facilities',
    breadcrumb: 'Infrastructure',
    lede: 'A 300-bed functional teaching hospital — outpatient, inpatient and round-the-clock casualty services on one campus.',
    blocks: [
      {
        type: 'stats',
        stats: [
          { label: 'Inpatient beds', value: 300, note: 'Across ten clinical departments' },
          { label: 'Intensive care', value: 20, note: 'ICCU, MICU, SICU, PICU & NICU' },
          { label: 'Clinical departments', value: 10, note: 'Each with its own ward complement' },
          { label: 'Major theatres', value: 4, note: 'Surgery & ENT, Ophthalmology, OBG, Orthopaedics' },
        ],
      },
      {
        type: 'prose',
        heading: 'Overview',
        eyebrow: 'The hospital',
        body: [
          'Amaltas Institute of Medical Sciences, owned by Amaltas Educational Welfare Society, is a 300 bedded functional hospital having OPD/IPD and casualty services providing world class medical, health care and investigation facilities.',
        ],
      },
      {
        type: 'cards',
        heading: 'Out Patient Services',
        navLabel: 'Outpatient',
        eyebrow: 'OPD · 9:00 AM – 4:00 PM',
        items: [
          { icon: 'stethoscope', title: 'Medicine', list: ['ECG Room (Male/Female sections)'] },
          { icon: 'scissors', title: 'Surgery', list: ['Dressing room', 'Minor OT (Male/Female)'] },
          { icon: 'bone', title: 'Orthopaedics', list: ['Plaster Room', 'Plaster cutting Room (Male/Female)'] },
          {
            icon: 'eye',
            title: 'Ophthalmology',
            list: ['Refraction rooms', 'Dark room', 'Dressing rooms / Minor procedure room'],
          },
          { icon: 'ear', title: 'ENT', list: ['Audiometry (AC & sound proof)', 'Speech Therapy'] },
          {
            icon: 'baby',
            title: 'Paediatrics',
            list: ['Child Welfare clinic', 'Immunization clinic', 'Child rehabilitation clinic'],
          },
          {
            icon: 'heart',
            title: 'Obstetrics & Gynaecology',
            list: ['Antenatal clinic', 'Sterility clinic', 'Family welfare clinic', 'Cancer detection clinic'],
          },
        ],
      },
      {
        type: 'prose',
        body: [
          'Registration for the outpatient departments is handled at separate computerized counters, with spacious departments across all specialties.',
        ],
      },
      {
        type: 'meters',
        heading: 'Indoor Patient Services',
        navLabel: 'Inpatient',
        eyebrow: 'Beds by department',
        suffix: ' beds',
        total: { label: 'Total sanctioned beds', value: '300' },
        items: [
          { label: 'Surgery', value: 90, note: 'Male-I 30 · Male-II 30 · Female 30' },
          { label: 'Medicine', value: 72, note: 'Male 42 · Female 30' },
          { label: 'Obstetrics & Gynaecology', value: 40, note: 'Obstetrics 25 · Gynaecology 15' },
          { label: 'Orthopaedics', value: 30, note: 'Male 15 · Female 15' },
          { label: 'Paediatrics', value: 24 },
          { label: 'ENT', value: 10, note: 'Male 5 · Female 5' },
          { label: 'Ophthalmology', value: 10, note: 'Male 5 · Female 5' },
          { label: 'Skin & Venereal Disease', value: 8, note: 'Male 5 · Female 3' },
          { label: 'Tuberculosis & Chest', value: 8, note: 'Male 5 · Female 3' },
          { label: 'Psychiatry', value: 8, note: 'Male 5 · Female 3' },
        ],
      },
      {
        type: 'chips',
        heading: 'Ward facilities',
        items: [
          'Nursing station',
          'Examination / treatment room',
          'Pantry',
          'Store room',
          'Duty room',
          'Demonstration room (25 capacity)',
        ],
      },
      {
        type: 'prose',
        heading: 'Casualty Services',
        eyebrow: 'Emergency',
        body: [
          'An independent ward of casualty (emergency department) is available in the hospital. The casualty services are under the control of the C.M.O. The department is equipped with emergency medicines and resuscitation equipment.',
        ],
      },
      {
        type: 'table',
        caption: 'Casualty bed complement',
        head: ['Unit', 'Beds'],
        rows: [
          ['Male ward', '5'],
          ['Female ward (including OB/GYN)', '5'],
          ['Minor Operation Theatre', '1'],
        ],
      },
      {
        type: 'meters',
        heading: 'Intensive Care Unit',
        navLabel: 'Intensive care',
        eyebrow: '20 beds',
        tone: 'gold',
        suffix: ' beds',
        total: { label: 'Total ICU beds', value: '20' },
        items: [
          { label: 'Coronary Care Unit (ICCU)', value: 5 },
          { label: 'Medical ICU', value: 5 },
          { label: 'Surgical ICU', value: 5 },
          { label: 'PICU & NICU', value: 5 },
        ],
      },
      {
        type: 'chips',
        items: [
          'Multiparameter monitors',
          'Central oxygen, suction & air',
          'Ventilators',
          'Defibrillators',
          'Blood gas analysers',
          'ECG machines',
          'Pulse oximeters',
          'Mobile X-ray',
          'Ultrasound machines',
        ],
      },
      {
        type: 'cards',
        heading: 'Operation Theatre Complex',
        navLabel: 'Theatres',
        columns: 2,
        items: [
          {
            icon: 'activity',
            title: 'Major operation theatres',
            list: ['Surgery & ENT', 'Ophthalmology', 'Obstetrics & Gynaecology', 'Orthopaedics'],
          },
          {
            icon: 'syringe',
            title: 'Minor operation theatres',
            list: ['Surgery', 'Orthopaedics', 'Obstetrics & Gynaecology', 'Casualty'],
          },
        ],
      },
      {
        type: 'cards',
        heading: 'Additional Services',
        columns: 2,
        items: [
          {
            icon: 'scan',
            title: 'CT Scan',
            body: 'On-campus computed tomography for inpatient and outpatient investigation.',
          },
          { icon: 'dialysis', title: 'Dialysis', body: 'Dialysis facilities available within the hospital.' },
        ],
      },
    ],
  },

  'built-up-area': {
    title: 'Built Up Area',
    breadcrumb: 'Infrastructure',
    lede: 'Over one lakh square metres of constructed facility across hospital, college, hostels and residences.',
    blocks: [
      {
        type: 'stats',
        stats: [
          {
            label: 'Total built-up area',
            value: 107590.78,
            decimals: 2,
            suffix: ' m²',
            note: 'Across all campus buildings',
          },
          { label: 'Hospital building', value: 56269.3, decimals: 2, suffix: ' m²', note: '52% of the total' },
          {
            label: 'Medical college',
            value: 27267.36,
            decimals: 2,
            suffix: ' m²',
            note: 'Teaching and academic blocks',
          },
          { label: 'Hostels', value: 19435.13, decimals: 2, suffix: ' m²', note: 'Boys, girls and nurses' },
        ],
      },
      {
        type: 'meters',
        heading: 'Infrastructure Breakdown',
        navLabel: 'Breakdown',
        eyebrow: 'Area in square metres',
        decimals: 2,
        suffix: ' m²',
        total: { label: 'Total', value: '107,590.78 m²' },
        items: [
          { label: 'Hospital building', value: 56269.3 },
          { label: 'Medical college building', value: 27267.36 },
          { label: 'Boys hostel area', value: 8675.04 },
          { label: 'Girls hostel area', value: 8666.04 },
          { label: 'Residential area for faculty', value: 3650.59 },
          { label: 'Nurses hostel area', value: 2094.05 },
          { label: 'Medical Superintendent’s residential bungalow', value: 484.2 },
          { label: 'Dean’s residential bungalow', value: 484.2 },
        ],
      },
      {
        type: 'quote',
        quote:
          'The above are well equipped with state of the art facilities catering to efficient working of professionals and comfort of residents.',
      },
    ],
  },

  'college-layout': {
    title: 'College Layout',
    breadcrumb: 'Infrastructure',
    lede: 'Four levels of the college building — where every department, hall and laboratory sits.',
    blocks: [
      {
        type: 'floors',
        heading: 'The college building, floor by floor',
        navLabel: 'Floor plan',
        eyebrow: 'Select a floor',
        defaultIndex: 2,
        floors: [
          {
            name: '2nd Floor',
            note: 'Pharmacology and community medicine, with the examination hall and food zone.',
            rooms: [
              { icon: 'flask', label: 'Department of Pharmacology' },
              { icon: 'users', label: 'Department of Preventive and Social Medicine' },
              { icon: 'clipboard', label: 'Examination Hall' },
              { icon: 'utensils', label: 'Food Zone' },
            ],
          },
          {
            name: '1st Floor',
            note: 'The diagnostic and research sciences floor.',
            rooms: [
              { icon: 'microscope', label: 'Central Research Lab' },
              { icon: 'flask', label: 'Department of Microbiology' },
              { icon: 'microscope', label: 'Department of Pathology' },
              { icon: 'shield', label: 'Department of Forensic Medicine' },
            ],
          },
          {
            name: 'Ground Floor',
            note: 'The entrance level — administration, the central library and the college council hall.',
            rooms: [
              { icon: 'building', label: 'Administrative Block' },
              { icon: 'library', label: 'Central Library' },
              { icon: 'flask', label: 'Department of Biochemistry' },
              { icon: 'users', label: 'College Council Hall' },
              { icon: 'camera', label: 'Photography Section' },
              { icon: 'student', label: 'Medical Education Unit' },
              { icon: 'monitor', label: 'Lecture Theatre (1)' },
            ],
          },
          {
            name: 'Basement',
            note: 'Foundational sciences alongside the student common rooms and gymnasium.',
            rooms: [
              { icon: 'brain', label: 'Department of Anatomy' },
              { icon: 'heart', label: 'Department of Physiology' },
              { icon: 'users', label: 'Girls Common Room' },
              { icon: 'users', label: 'Boys Common Room' },
              { icon: 'dumbbell', label: 'Gymnasium' },
              { icon: 'layers', label: 'Store Room' },
              { icon: 'monitor', label: 'Lecture Hall (1)' },
            ],
          },
        ],
      },
    ],
  },

  'library-photography': {
    title: 'Library & Photography',
    breadcrumb: 'Infrastructure',
    lede: 'A 26,200 sq. ft. central library open from 8am to 10pm, and a modern central photography section.',
    blocks: [
      {
        type: 'stats',
        stats: [
          { label: 'Books', value: 5402, note: 'Across the stack room' },
          { label: 'Journals', value: 40, note: '28 Indian · 12 foreign' },
          { label: 'Internet nodes', value: 40, note: 'In the air-conditioned e-library' },
          { label: 'Total area', value: 26200, suffix: ' sq ft', note: 'Ground floor of the college' },
        ],
      },
      {
        type: 'prose',
        heading: 'Central Library',
        eyebrow: 'Ground floor',
        body: [
          'The library occupies the ground floor with a total area of 26,200 sq. ft., featuring distinct sections with adequate capacity for each.',
        ],
      },
      {
        type: 'table',
        caption: 'Library sections, area and seating capacity',
        head: ['Section', 'Area (sq. ft.)', 'Seating capacity'],
        rows: [
          ['Outer Reading Hall', '150', '150'],
          ['Inner Reading Hall', '150', '150'],
          ['Faculty / Staff Room', '1,220', '50'],
          ['Resident / PG Room', '1,000', '50'],
          ['E-Library cum Computer Lab', '2,000', '40'],
          ['Journal Section', '1,658', '30'],
          ['Audio-Visual Room', '365', '30'],
          ['Reception / Photocopy Section', '380', '—'],
          ['Chief Librarian Room', '305', '—'],
          ['Deputy Library Room', '275', '—'],
          ['Daftary Room', '185', '—'],
          ['Cataloguer Room', '185', '—'],
          ['Book Binding Room', '175', '—'],
        ],
      },
      {
        type: 'cards',
        heading: 'Working Hours',
        columns: 2,
        items: [
          { icon: 'book', title: 'Reading Room', body: '8:00 am – 10:00 pm' },
          { icon: 'layers', title: 'Stack Room', body: '8:00 am – 5:00 pm' },
        ],
      },
      {
        type: 'chips',
        heading: 'Facilities',
        items: [
          'Experienced and adequate staff',
          'E-Library cum computer lab',
          'Internet facility',
          'Updated journal section',
          'Stack room',
          'Audio visual section',
          'Lockers for students',
          'Photocopy and printing facility',
        ],
      },
      {
        type: 'cards',
        heading: 'E-Library and Journals',
        navLabel: 'E-Library',
        columns: 2,
        items: [
          {
            icon: 'monitor',
            title: 'E-Library',
            list: ['Fully air conditioned', '40 browsing centres', 'Internet facility'],
          },
          {
            icon: 'book',
            title: 'Journal Section',
            list: ['28 Indian journals', '12 foreign journals', '40 internet nodes'],
          },
        ],
      },
      {
        type: 'prose',
        heading: 'Central Photography Section',
        navLabel: 'Photography',
        eyebrow: 'Ground floor',
        body: [
          'A well equipped, updated and modern central photography section is established on the ground floor, with modern technology and experienced staff.',
        ],
      },
    ],
  },

  'residential-facilities': {
    title: 'Residential Facilities',
    breadcrumb: 'Infrastructure',
    lede: 'Hostels for students, residents and nurses inside the campus, alongside quarters for teaching and non-teaching staff.',
    blocks: [
      {
        type: 'stats',
        stats: [
          { label: 'Hostel residents', value: 424, note: 'Boys, girls, residents and nurses' },
          { label: 'Hostel rooms', value: 253, note: 'Two students per room' },
          { label: 'Room size', value: 24, suffix: ' m²', note: 'Against an 18 m² requirement' },
          { label: 'Staff quarters', value: 40, note: '20 teaching · 20 non-teaching' },
        ],
      },
      {
        type: 'table',
        heading: 'Residential Quarters',
        navLabel: 'Quarters',
        caption: 'Residential quarters for staff',
        head: ['Category', 'Required', 'Available'],
        rows: [
          ['Teaching staff @ 20% of 100', '20', 'Available'],
          ['Non-teaching staff @ 20% of 100', '20', 'Available'],
        ],
      },
      {
        type: 'cards',
        heading: 'Hostels within Campus',
        navLabel: 'Hostels',
        columns: 2,
        items: [
          {
            icon: 'home',
            title: 'Boys Hostel',
            body: '75% of 225 boys',
            list: ['170 students', '85 rooms', 'Room size 24 sq. m.'],
          },
          {
            icon: 'home',
            title: 'Girls Hostel',
            body: '75% of 225 girls',
            list: ['170 students', '85 rooms', 'Room size 24 sq. m.'],
          },
          {
            icon: 'stethoscope',
            title: 'Residents (JR + SR)',
            body: '100% accommodation',
            list: ['49 residents', '35 rooms', 'Room size 24 sq. m.'],
          },
          {
            icon: 'cross',
            title: 'Nurses Accommodation',
            body: '20% of 175',
            list: ['35 nurses', '48 rooms', 'Room size 24 sq. m.'],
          },
        ],
      },
      {
        type: 'chips',
        heading: 'Provided in every hostel',
        navLabel: 'Amenities',
        items: [
          'Furnished rooms',
          'Adequate toilet facility',
          'Food mess',
          'Good hostel campus hygiene',
          'Visitor room',
          'Air-conditioned study room',
          'Recreation room',
          'Games',
        ],
      },
      {
        type: 'table',
        caption: 'Hostel accommodation against requirement',
        head: ['Hostel', 'Students', 'Rooms', 'Room size'],
        rows: [
          ['Boys Hostel — 75% of 225 boys', '170', '85', '24 sq. m.'],
          ['Girls Hostel — 75% of 225 girls', '170', '85', '24 sq. m.'],
          ['Resident JR + SR — 100%', '49', '35', '24 sq. m.'],
          ['Nurses Accommodation — 20% of 175', '35', '48', '24 sq. m.'],
        ],
        note: 'Requirement is two students per room at 9 sq. m. per student (18 sq. m. per room); available rooms measure 24 sq. m.',
      },
    ],
  },

  students: {
    title: 'Students',
    breadcrumb: 'Institutional',
    lede: 'Nurturing talent from all backgrounds — enrolment records for every undergraduate and postgraduate batch.',
    blocks: [
      {
        type: 'prose',
        heading: 'Comprehensive enrolment records',
        eyebrow: '300+ students',
        body: [
          'Enrolment records are published in full for both undergraduate and postgraduate programmes, organised by year and by category.',
        ],
      },
      {
        type: 'documents',
        heading: 'Current batches',
        items: [
          { label: 'MBBS Batch 2025-2026 List', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/MBBS-Batch-2025-2026-List.pdf' },
          { label: 'PG MDMS Batch 2025-2026 List', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/PG-MDMS-Batch-2025-2026-List.pdf' },
          { label: 'PG MDMS Batch 2024-2025 List', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/PG-MDMS-Batch-2024-2025-List.pdf' },
          { label: 'List of UG Candidates, 2022-23', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/List-of-MBBS-Students-Year-2022-23.pdf' },
          { label: 'List of PG Candidates, 2022', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/PG-List-department-wise-Batch-2022.pdf' },
        ],
      },
      {
        type: 'documents',
        heading: 'Category-wise lists',
        navLabel: 'By category',
        items: [
          { label: 'General Category Student 2017-18', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/gen_1718.pdf' },
          { label: 'OBC Student 2017-18', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/obc_1718.pdf' },
          { label: 'SC Student 2017-18', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/sc_1718.pdf' },
          { label: 'ST Category Student 2017-18', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/st_1718.pdf' },
          { label: 'General Category Student 2016-17', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/gen_1617.pdf' },
          { label: 'OBC Category Student 2016-17', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/obc_1617.pdf' },
          { label: 'SC Category Student 2016-17', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/sc_1617.pdf' },
          { label: 'ST Category Student 2016-17', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/st_1617.pdf' },
        ],
      },
    ],
  },
  'teaching-schedule': {
    title: 'Teaching Schedule',
    breadcrumb: 'Institutional',
    lede: 'Competency-based timetables and academic schedules, published phase by phase.',
    blocks: [
      {
        type: 'documents',
        heading: 'Timetables',
        items: [
          { label: 'Competency Based Time Table for MBBS Phase — Batch 2023-24', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/09/Competency-Based-Time-Table-for-MBBS-Phase-Batch-2023-24.pdf' },
          { label: 'Competency Based Time Table Phase I, 2021', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/09/Competency-based-time-table-Phase-I-2021.pdf' },
          { label: 'Time Table 2nd Prof.', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/09/Online-Time-Table-2021.pdf' },
          { label: 'Academic Time Table 2020-21 Batch', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/09/Academic-Time-table-2020-2021.pdf' },
          { label: 'Foundation Course Time Schedule, Batch 2020-21', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/09/Foundation-Course-Time-Schedule-batch-2020-21.pdf' },
        ],
      },
    ],
  },
  fees: {
    title: 'Fees',
    breadcrumb: 'Institutional',
    lede: 'Fee structure for undergraduate, postgraduate and super speciality programmes.',
    blocks: [
      {
        type: 'documents',
        heading: 'Fee structure',
        items: [
          { label: 'Fees of MBBS & Post Graduate Courses (2025-26)', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2025/12/AIMS-Fee_2025-26.pdf' },
          { label: 'Fees of Super Speciality Courses & Stipend (18.08.2026)', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/08/AIMS.DN_.2026.464-dated-18.08.2026.pdf' },
        ],
      },
      {
        type: 'meters',
        heading: 'Postgraduate seats',
        navLabel: 'PG seats',
        eyebrow: '52 seats across 14 specialities',
        suffix: ' seats',
        total: { label: 'Total PG seats', value: '52' },
        items: [
          { label: 'MD Anaesthesiology', value: 6 },
          { label: 'MD Paediatrics', value: 6 },
          { label: 'MD Radio Diagnosis', value: 5 },
          { label: 'MD General Medicine', value: 5 },
          { label: 'MD Pathology', value: 4 },
          { label: 'MS OBGY', value: 4 },
          { label: 'MS Orthopaedics', value: 4 },
          { label: 'MS General Surgery', value: 3 },
          { label: 'MS Ophthalmology', value: 3 },
          { label: 'MS ENT', value: 3 },
          { label: 'MD Emergency Medicine', value: 3 },
          { label: 'MD Psychiatry', value: 2 },
          { label: 'MD Skin & VD', value: 2 },
          { label: 'MD Respiratory Medicine', value: 2 },
        ],
      },
    ],
  },

  committees: {
    title: 'Committees',
    breadcrumb: 'Institutional',
    lede: 'Statutory and institutional committees at Amaltas Institute of Medical Sciences, with member lists published in full.',
    sections: [
      {
        heading: 'Institutional Committees',
        body: [],
        documents: [
          { label: 'Institutional Anti-Ragging Committee', href: '/documents/committees/Institutional-Anti-Ragging-Committee.pdf' },
          { label: 'Scientific Research Committee', href: '/documents/committees/Scientific-Research-Committee.pdf' },
          { label: 'Food Committee', href: '/documents/committees/Food-Committee.pdf' },
          { label: 'Medical Education Unit', href: '/documents/committees/Medical-Education-Unit.pdf' },
          { label: 'Gender Harassment Prevention Committee', href: '/documents/committees/Gender-Harassment-Prevention-Committee.pdf' },
          { label: 'Details of Curriculum Committee (CC) Member', href: '/documents/committees/Curriculum-Committee-Members.pdf' },
          { label: 'Pharmacovigilance Committee', href: '/documents/committees/Pharmacovigilance-Committee.pdf' },
          { label: 'Discipline Committee', href: '/documents/committees/Discipline-Committee.pdf' },
          { label: 'Departmental Promotion Committee', href: '/documents/committees/Departmental-Promotion-Committee.pdf' },
          { label: 'Scientific Review Committee', href: '/documents/committees/Scientific-Review-Committee.pdf' },
        ],
      },
    ],
  },
  'citizen-charter': {
    title: 'Citizen Charter',
    breadcrumb: 'Important Links',
    lede: 'Our motto, mission, facilities, and the rights and responsibilities of every patient who walks through the door.',
    blocks: [
      {
        type: 'prose',
        body: [
          'This Charter explains our motto, mission, location, available facilities and the rights and responsibilities of the patients towards the hospital.',
        ],
      },
      {
        type: 'quote',
        quote: 'Committed to Excellence',
        attribution: 'Our motto',
      },
      {
        type: 'prose',
        heading: 'Our Mission',
        body: [
          'To serve the society by providing the best possible medical treatment, delivered most efficiently, in the shortest possible time, and at the minimum cost.',
        ],
      },
      {
        type: 'specs',
        heading: 'Location and contact',
        navLabel: 'Contact',
        items: [
          { label: 'Address', value: 'Dewas-Ujjain Highway, Village Bangar (Dewas), MP — Pin 455 001' },
          { label: 'Contact number', value: '07272-426500-501' },
          { label: 'Emergency', value: '07272 426500' },
        ],
      },
      {
        type: 'chips',
        heading: 'Facilities',
        items: [
          'Reception & Help Desk',
          'Directional signage on each floor',
          'Huge OPD area in basement (9am–4pm, except Sunday and gazetted holidays)',
          '300+ beds in wards, including private and deluxe rooms',
          '24 × 7 Casualty & Emergency services with wheelchairs and stretchers',
          '24 × 7 Laboratory services',
          'Routine & special investigations',
          '24 × 7 Blood Bank services',
          '24 × 7 X-Ray services',
          '24 × 7 Ambulance services (2 nos.)',
          'Sonography',
          'Canteen & Cafeteria',
          '24 × 7 Delivery services in Obstetrics department',
          'NRHM — Janani Sahyogi Yojna benefits',
          '24 × 7 Medical store & Pharmacy',
          'Modern well equipped ICU, ICCU, NICU and PICU',
          'Central oxygen supply',
          'Modern fully equipped operation theatres (5 nos.)',
          'Well equipped physiotherapy department',
        ],
      },
      {
        type: 'cards',
        heading: 'Rights and responsibilities',
        navLabel: 'Rights',
        columns: 2,
        items: [
          {
            icon: 'shield',
            title: 'Every patient has a right to',
            list: [
              'Be treated with compassion without any differentiation of caste, religion and race',
              'Know the details of treatment offered and ask for the consequences arising out of it',
              'Know the details and qualification of the treating doctor',
              'Know the details of their illness and its outcome',
              'Accept or refuse any investigation or treatment offered',
              'Request a second opinion, if desired',
              'Privacy during consultation, treatment and hospitalization',
              'Make a legitimate complaint to higher authorities',
              'Provide healthy constructive suggestions to improve our services',
            ],
          },
          {
            icon: 'users',
            title: 'Responsibilities towards the hospital',
            list: [
              'Treat all doctors, nurses and other staff with respect and dignity',
              'Behave in a decent manner with other patients',
              'Comply with hospital policy and guidelines',
              'Restrict visitors within the time frame allowed by the authorities',
              'Restrict entry of children except when really needed, to avoid exposure to diseases',
              'Do not take medications without prior consultation',
              'Protect the environment and cleanliness of the surroundings',
            ],
          },
        ],
      },
      {
        type: 'table',
        heading: 'Redressal of Complaints',
        navLabel: 'Complaints',
        caption: 'Contacts for complaint redressal',
        head: ['Contact', 'Phone'],
        rows: [
          ['Casualty', '07272 426525'],
          ['P.R.O.', '07272 426510'],
          ['C.O.O.', '07272 426515'],
          ['Medical Superintendent', '07272 426505'],
          ['Dean', '07272 426591'],
        ],
      },
      {
        type: 'prose',
        heading: 'Empanelled Institutions',
        navLabel: 'Empanelment',
        columns: 2,
        list: [
          'United India Insurance Co.',
          'National Insurance Co.',
          'New India Insurance Co.',
          'Oriental Insurance Co. (cashless also)',
          'Apollo Munich Health Insurance Co. Ltd.',
          'IFFCO Tokio General Insurance Co.',
          'Raksha TPA (cashless also)',
          'Vipul Medcare TPA (for cashless vaccination)',
        ],
      },
      {
        type: 'documents',
        heading: 'Download',
        items: [
          { label: 'Citizen Charter — Hindi', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/cc_hindi.pdf' },
        ],
      },
    ],
  },
  'bmw-west-annual-report': {
    title: 'BMW West Annual Report',
    breadcrumb: 'Important Links',
    lede: 'Bio-medical waste annual reports, published year on year.',
    blocks: [
      {
        type: 'documents',
        heading: 'Annual reports',
        items: [
          { label: 'Annual Report for the year 2025', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/02/ANNUAL-REPORT-25-26-Signed-DocScanner-20-Jan-2026-1-33 pm.pdf' },
          { label: 'Annual Report for the year 2024', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2025/05/bmw_annual_report_2024.pdf' },
          { label: 'Annual Report for the year 2023', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/bmw_annual_report_2023.pdf' },
          { label: 'Annual Report for the year 2022', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2025/05/bmw_annual_report_2022.pdf' },
          { label: 'Annual Report for the year 2021', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/bmw_annual_report_2021.pdf' },
          { label: 'BMW West Annual Report', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/bmw_details_120421.pdf' },
        ],
      },
    ],
  },
  'college-information-pro-forma-status': {
    title: 'College Information Pro forma Status',
    breadcrumb: 'Important Links',
    lede: 'The college information pro forma, as filed.',
    blocks: [
      {
        type: 'documents',
        heading: 'Pro forma status',
        items: [
          { label: 'College Information Pro forma Status — 2026', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/05/AMALTAS-INSTITUTE-OF-MEDICAL-SCIENCES-DEWAS-1001-new1.pdf' },
          { label: 'College Information Pro forma Status — 2022', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Proforma-Form-18-AIMS-Dewas.pdf' },
        ],
      },
    ],
  },
  'ugmsr-pgmsr-information': {
    title: 'Information as per UGMSR 2023 & PGMSR Amendment 2026',
    breadcrumb: 'Important Links',
    lede: 'Mandatory institutional disclosure under the Undergraduate and Postgraduate Medical Standards Regulations.',
    blocks: [
      {
        type: 'stats',
        stats: [
          { label: 'Bed occupancy', value: 82.5, decimals: 1, suffix: '%', note: 'Average daily, previous year' },
          { label: 'Outpatients registered', value: 78276, note: 'Previous month record' },
          { label: 'Inpatients admitted', value: 4142, note: 'Previous month record' },
          { label: 'MBBS seats', value: 250, note: 'Admitted in 2025-26' },
        ],
      },
      {
        type: 'specs',
        heading: 'Information as per UGMSR 2023',
        navLabel: 'UGMSR 2023',
        items: [
          { label: 'Name', value: 'Amaltas Institute of Medical Sciences, Dewas' },
          { label: 'Address with pin code', value: 'Village Bangar, Dewas-Ujjain Highway, Dewas district, Madhya Pradesh, India — 455001' },
          { label: 'University address with pin code', value: 'Village Bangar, Dewas-Ujjain Highway, Dewas district, Madhya Pradesh, India — 455001' },
          { label: 'Official website', value: 'amaltasmedicalcollege.in', href: 'https://amaltasmedicalcollege.in/' },
          { label: 'Dean', value: 'Dr. Abhilash Kumar Pithawa' },
          { label: 'Mobile number', value: '+91 8085952768' },
          { label: 'Email ID of Dean', value: 'medical@amaltasgroup.co.in' },
          { label: 'Hospital', value: 'Amaltas Institute of Medical Sciences, Dewas' },
          { label: 'Date and year of registration of the hospital', value: '03 July 2015' },
          { label: 'Number of beds', value: '1460' },
          { label: 'Number of beds of emergency', value: '80' },
          { label: 'Date of the first Letter of Permission (LoP) of MBBS & number of seats', value: '20 August 2016 — 250 seats' },
          { label: 'Status of recognition', value: 'Recognised' },
          { label: 'Students admitted in this session', value: 'MBBS: 250 (2025-26); MD/MS: 104; DM/MCh: —' },
          { label: 'Inpatients registered and admitted (previous month)', value: '4142' },
          { label: 'Outpatients registered (previous month)', value: '78276' },
          { label: 'Deaths reported to the Municipality/village register (previous month)', value: '65' },
          { label: 'Address where death records are reported', value: 'Bangar Panchayat — Pin code 455001' },
          { label: 'Registry link for death records', value: 'dc.crsorgi.gov.in/crs', href: 'https://dc.crsorgi.gov.in/crs/' },
          { label: 'Number of births reported (month-wise)', value: '555' },
          { label: 'Address where birth records are reported', value: 'Bangar Panchayat' },
          { label: 'Registry link for birth records', value: 'dc.crsorgi.gov.in/crs', href: 'https://dc.crsorgi.gov.in/crs/' },
          { label: "Rooms in Men's Hostel and students accommodated", value: '345' },
          { label: "Rooms in Women's Hostel and students accommodated", value: '332' },
          { label: 'Grievance Redressal Officer (PIO & CPIO)', value: 'Dr. Jyoti Dave, Professor, Biochemistry Department' },
          { label: 'Address with pin code', value: 'Amaltas Institute of Medical Sciences, Village Bangar, Dewas-Ujjain Highway, Dewas district, Madhya Pradesh — 455001' },
          { label: 'Telephone number and email ID', value: '+91 9425442898 · medical@amaltasgroup.co.in' },
          { label: 'Grievances reported (previous month)', value: 'Nil' },
          { label: 'Details of Post-Graduation courses offered', value: 'Details of PG Course (PDF)', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/Details-of-PG-Course.pdf' },
        ],
      },
      {
        type: 'documents',
        heading: 'Information as per PGMSR Amendment 2026',
        navLabel: 'PGMSR 2026',
        items: [
          { label: 'List of Departments with available facilities', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/05/List-of-Departments-with-available-facilitie.pdf' },
          { label: 'List of PG courses along with number of seats permitted by NMC', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/List-of-pg-courses-along-with-number-of-seats-grant-by-NMC_page-0001.pdf' },
          { label: 'List of faculties of last three years, with designation and contact details', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/Web-list-123.pdf' },
          { label: 'UG MBBS List 2025-26', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/UG-MBBS-LIST-2025-26.pdf' },
          { label: 'UG MBBS List 2024-25', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/UG-MBBS-LIST-2024-25.pdf' },
          { label: 'UG MBBS List 2023-24', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/UG-MBBS-LIST-2023-24.pdf' },
          { label: 'Average daily Out-Patient attendance of previous year', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/05/Average-daily-Out-Patients-attendance-of-previous-year.pdf' },
          { label: 'Total major and minor surgeries performed during previous year, by department', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2026/04/Total-major-surgeries-and-minor-surgeries-performed-during-previous-year-in-each-surgical-department.pdf' },
        ],
      },
    ],
  },
  'affiliations-permissions': {
    title: 'Affiliations & Permissions',
    breadcrumb: 'Important Links',
    lede: 'Affiliation, statutory permissions, licences and accreditation certificates, published in full.',
    blocks: [
      {
        type: 'prose',
        heading: 'Affiliation',
        body: [
          'The college is affiliated with M.P. Medical Sciences University, Jabalpur for the academic session 2016–17.',
        ],
      },
      {
        type: 'documents',
        heading: 'Affiliation & permission documents',
        navLabel: 'Permissions',
        items: [
          { label: 'Consent of Affiliation', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/consent-of-affiliation.pdf' },
          { label: 'Essentiality Certificate', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/essentiality_certificate.pdf' },
          { label: 'MCI Permission Letter', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/MCI_permission_letter.pdf' },
          { label: '1st Renewal Letter', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/MCI-Renewal-permission.pdf' },
          { label: 'Affiliation MPMSU', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Affiliation-MPMSU.pdf' },
          { label: 'Permission for MBBS', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-J-1.pdf' },
          { label: 'Permission for Paramedical Courses', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-J-2.pdf' },
          { label: 'Permission for B.Sc. Nursing', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-J-3.pdf' },
          { label: 'Permission for M.Sc. Nursing', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-J-4.pdf' },
          { label: 'MCI Permission 4th Renewal, 5th Batch 2020-21', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/MCI-Permission-4th-Renewal-5th-Batch-2020-21.pdf' },
          { label: 'NMC Permission 2023-24 Batch, 250 seats', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/NMC-Permission-2023-24-Btach-250-Seats.pdf' },
          { label: 'NMC Permission 2024-25, 250 seats', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/NMC-Permission-Original-2024-25-250-Seats.pdf' },
        ],
      },
      {
        type: 'table',
        heading: 'Licences & Clearances',
        navLabel: 'Licences',
        caption: 'Statutory permissions, licences and clearances',
        head: ['S.No.', 'Permission', 'Reference & date'],
        rows: [
          ['01', 'Society Registration', 'Registration in corporation 03/27/03/16579/13'],
          ['02', 'Permission essentiality & desirability from government', 'F.No. 5-134/2015/1/55, 31/07/2015'],
          ['03', 'University Affiliation', 'M.P. Medical Science University, Jabalpur / No. Aff/2015/742, 27/08/2015 for academic session 2016/2017'],
          ['04', 'Radiological Safety Division', '15-LOEE-73928'],
          ['05', 'Registration under PNDT Act', 'DWS/PNDT/15/37-A — valid 01/2016 to 26/08/2020'],
          ['06', 'Blood Bank NOC & Licence', '28C/3/2016, valid till 26/04/2016'],
          ['07', 'Environment Clearance AIMS', 'CTE/MPPCB/UJJ/22643, 28/12/2015'],
          ['08', 'Installation & commissioning of Sewage Treatment Plant', 'MPPCB Ujjain 30.06.2016/363'],
          ['09', 'Bio Medical Waste', '373974-BMW-30328563, 3.06.2016'],
          ['10', 'Pollution Control Board — Air and Water', 'CTE-45177'],
          ['11', 'Biomedical Waste Management and Handling Authorization', '373974-BMW-30328563, 13/10/2015 to 13/10/2018'],
          ['12', 'Registration under Clinical Establishment Act', 'NH/0065/JULY/2015, 03/07/2015 to 13/03/2018'],
          ['13', 'Fire NOC', '19, 20/06/2016 to 19/06/2017'],
          ['14', 'Employee Provident Fund', '2287678634-MPIND, 24/05/2016'],
          ['15', 'PAN', 'AADAA4008J, 18/12/2013'],
          ['16', 'Building occupancy / completion certificate', 'Q/PANCHA/69/2016, 16/08/2016'],
          ['17', 'Licence for electrical installation', '207-A'],
          ['18', 'Sanction for Lift', 'L-I4100, 09/05/2016-08/05/2016'],
          ['19', 'Licence — Denatured Spirit', '2016/12324, 23/08/2016'],
          ['20', 'Drug Licence', '20/37/2/2015, 18/07/2015-17/07/2020'],
          ['21', 'Land Certificate', '27026/Reader-1/2014'],
          ['22', 'Canteen Licence', '20160809152249920, 09/08/2016'],
          ['23', 'MTP Licence', 'Reg. no. 03, 10/03/2016'],
        ],
      },
      {
        type: 'documents',
        heading: 'Certification',
        items: [
          { label: 'ISO 9001-2015', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/iso_certificate.pdf' },
          { label: 'Spirit Certificate', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Spirit-Certificate.pdf' },
          { label: 'NABH Certificate', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/NABH-Certificate-H-2018-0556.pdf' },
          { label: 'NABL Certificate', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Certificate-MC-5267.pdf' },
        ],
      },
      {
        type: 'documents',
        heading: 'Annexures',
        items: [
          { label: 'Annexure F', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-F.pdf' },
          { label: 'Annexure R', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-R.pdf' },
          { label: 'Annexure J', href: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/08/Annexure-J.pdf' },
        ],
      },
    ],
  },
  posters: {
    title: 'Posters',
    breadcrumb: 'Quick Links',
    lede: 'Campaign and awareness posters published by the institute.',
    blocks: [
      {
        type: 'gallery',
        heading: 'Posters',
        columns: 3,
        items: [
          { src: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/07/poster1.jpeg', alt: 'Amaltas Institute of Medical Sciences poster 1', caption: 'Poster 1' },
          { src: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/07/poster2.jpeg', alt: 'Amaltas Institute of Medical Sciences poster 2', caption: 'Poster 2' },
          { src: 'https://amaltasmedicalcollege.in/wp-content/uploads/2024/07/poster3.jpeg', alt: 'Amaltas Institute of Medical Sciences poster 3', caption: 'Poster 3' },
        ],
      },
    ],
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
