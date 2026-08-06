// Verbatim structure of amaltasmedicalcollege.in/clinical-departments
export const clinicalDepartments = [
  {
    id: 'central-sterilization',
    name: 'Central Sterilization Department',
    summary: 'Two-shift sterile processing with separate receiving and distribution points.',
    blocks: [
      { type: 'text', body: 'Timing: 08:00 am to 10:00 pm in 2 shifts.' },
      {
        type: 'list',
        title: 'Equipment',
        items: ['Horizontal autoclaves: 01', 'Vertical autoclaves: 02', 'ETO sterilizers: 02'],
      },
      { type: 'text', body: 'Separate receiving and distribution points are available.' },
    ],
  },
  {
    id: 'surgery-allied',
    name: 'Surgery and Allied Branches',
    summary: 'Eleven surgical services delivered across five major and four minor theatres.',
    blocks: [
      {
        type: 'list',
        title: 'Services provided',
        items: [
          'Laparoscopic Surgery',
          'General Surgery',
          'Paediatric Surgery',
          'Plastic Surgery',
          'Gastro-intestinal Surgery',
          'Onco-surgery',
          'Obstetrics & Gynaecology Surgery',
          'Orthopaedic Surgery',
          'Ophthalmology Surgery',
          'E.N.T. Surgery',
          'Dentistry',
        ],
      },
    ],
  },
  {
    id: 'anesthesiology',
    name: 'Department of Anaesthesiology',
    summary: 'Five major and four minor operation theatres with full ICU back-up.',
    blocks: [
      {
        type: 'text',
        body: 'Amaltas Institute of Medical Sciences and Hospital and Research Center has well equipped 05 major and 04 minor operation theatres having all the facilities with well equipped ICU back up. Operation theatres are equipped with anaesthesia machines, monitors, central gas and oxygen supply, suction machine, infusion pump, defibrillators and C-Arm. A dedicated team of anaesthesiologists provides services for routine and emergency operations.',
      },
      {
        type: 'table',
        head: ['Sl. no.', 'Services available'],
        rows: [
          ['1', 'General Anaesthesia'],
          ['2', 'Regional Anaesthesia'],
          ['3', 'Local Anaesthesia'],
          ['4', 'Monitored Anaesthesia care'],
          ['5', 'Pre Anaesthesia checkup'],
          ['6', 'Operation theatre management'],
          ['7', 'Pain clinic'],
          ['8', 'ICU management'],
          ['9', 'Peripheral Anaesthesia services'],
          ['10', 'CPCR services'],
        ],
      },
    ],
  },
  {
    id: 'general-medicine',
    name: 'General Medicine',
    summary: 'Indoor and outdoor care with a well equipped medical ICU.',
    blocks: [
      {
        type: 'text',
        body: 'The Department of Medicine provides indoor and outdoor patients with advanced levels of treatment covering routine as well as emergency procedures. Facilities including a well equipped medical ICU are available.',
      },
      {
        type: 'list',
        title: 'Speciality clinics',
        items: ['Endocrinology', 'Urology', 'Cardiology', 'Renal and Hypertension clinic'],
      },
    ],
  },
  {
    id: 'psychiatry',
    name: 'Department of Psychiatry',
    summary: 'Comprehensive mental health services for adult and child patients.',
    blocks: [
      {
        type: 'text',
        body: 'The Department of Psychiatry aims to provide comprehensive mental health facilities to adult and child patients. Outpatient services cover both diagnostic and therapeutic care.',
      },
      {
        type: 'list',
        title: 'Inpatient services',
        items: [
          'Separate wards for males and females',
          'Consultation to both outpatients and inpatients from other departments',
        ],
      },
    ],
  },
  {
    id: 'paediatrics',
    name: 'Department of Paediatrics',
    summary: 'NICU, labour room support, neonatal resuscitation and routine care.',
    blocks: [
      { type: 'list', title: 'Facilities', items: ['NICU facilities', 'Labour room facilities', 'Neonatal resuscitation and routine care'] },
      { type: 'list', title: 'Inpatient services', items: ['Work up of developmental delay and growth arrest, with treatment facilities'] },
      {
        type: 'list',
        title: 'OPD services',
        items: [
          'Growth assessment and monitoring',
          'Developmental assessment and monitoring',
          'General paediatric problem care (bed wetting, temper tantrum)',
          'Immunisation',
        ],
      },
      { type: 'list', title: 'Emergency facilities', items: ['Nebulisation facilities', 'Dehydration management'] },
    ],
  },
  {
    id: 'skin-vd',
    name: 'Department of Skin and Venereal Diseases',
    summary: 'Special clinics, biopsy-led investigation and a full range of procedures.',
    blocks: [
      {
        type: 'text',
        body: 'The Skin and Venereal Disease Department is committed to serving outpatients and inpatients suffering from skin and V.D. disorders.',
      },
      { type: 'list', title: 'Special clinics', items: ['STD clinic', 'Vitiligo clinic', 'Counselling for STD patients'] },
      {
        type: 'list',
        title: 'Investigative facilities',
        items: ['Skin biopsy', 'FBS / PPBS', 'CBS', 'LFT / RFT', 'Urine routine / culture', 'Gram staining', 'Giemsa staining'],
      },
      {
        type: 'list',
        title: 'Treatment facilities',
        items: [
          'Vitiligo surgery',
          'Mole excision',
          'Milia extraction',
          'Molluscum contagiosum extraction',
          'Nail avulsion — complete, partial',
          'Skin biopsy',
          'Chemical peeling',
          'TCD & Podophyllin application for venereal wart',
          'Intra-lesional steroid injection',
        ],
      },
    ],
  },
  {
    id: 'physiotherapy',
    name: 'Department of Physiotherapy',
    summary: 'Under the aegis of the Department of Orthopaedics — seven days a week.',
    blocks: [
      {
        type: 'list',
        title: 'Facilities and modalities available',
        items: ['SWD', 'I.F.T.', 'TENS', 'Ultrasound', 'Traction', 'C.P.M.', 'Post-operative care facility'],
      },
      {
        type: 'list',
        title: 'Special features',
        items: [
          'Both male and female physiotherapists available',
          'Service given 9:00 am to 4:00 pm',
          'Sunday 9:00 am to 4:00 pm — physiotherapy given to both I.P.D. and O.P.D. patients',
          'Manual therapy, electrotherapy and mechanical therapy available',
        ],
      },
    ],
  },
  {
    id: 'diagnostics',
    name: 'Diagnostic Facilities',
    summary: 'Modern radiology plus a round-the-clock central laboratory.',
    blocks: [
      { type: 'text', body: 'Radiology offers modern X-ray and sonography facilities. Central lab services run round the clock.' },
      {
        type: 'list',
        title: 'Central laboratory services',
        items: [
          'Haematology',
          'Biochemistry',
          'Clinical Pathology',
          'Parasitology',
          'Serology',
          'Microbiology',
          'Cytology',
          'Histology',
          'Immunology',
          'Bacteriology',
        ],
      },
    ],
  },
  {
    id: 'blood-bank',
    name: 'Blood Bank & Pharmacy',
    summary: 'Licensed blood bank and in-house pharmacy providing free medicine and vaccination.',
    blocks: [
      { type: 'text', body: 'A fully equipped blood bank is available under licence no. 28c/3/2016.' },
      { type: 'text', body: 'In-house pharmacy services provide free medicine and vaccination.' },
    ],
  },
  {
    id: 'schemes',
    name: 'Public Health Schemes',
    summary: 'National and state health schemes run through the hospital.',
    blocks: [
      {
        type: 'list',
        title: 'Schemes being run by the hospital',
        items: [
          'Janani Sahayogi Yojana — safe delivery, iron and calcium tablet distribution, contraceptive pills and devices',
          'M.T.P.',
          'Sputum collection available',
          'National immunisation scheme',
        ],
      },
      {
        type: 'table',
        head: ['Scheme', 'Status'],
        rows: [
          ['I.C.T.C.', 'Approval awaited'],
          ["DOT's centre", 'Approval awaited'],
          ['DBCS', 'District blindness control society approval awaited'],
          ['Santusti Yojana (TT/VT)', 'Agreement awaited from JSK'],
        ],
      },
      {
        type: 'list',
        title: 'Other facilities',
        items: [
          'Central laundry: in-house, mechanised',
          'Biomedical waste management: outsourced under contract',
        ],
      },
    ],
  },
]

// Verbatim structure of amaltasmedicalcollege.in/pre-clinical-departments.
// Shared infrastructure (lecture theatres) is exposed separately since it
// isn't specific to any one department.
export const lectureTheatres = {
  name: 'Lecture Theatres',
  blocks: [
    {
      type: 'text',
      body: 'Two air-conditioned lecture theatres are available — one in the basement and one on the ground floor (495 sq. m. each).',
    },
    {
      type: 'list',
      title: 'Facilities',
      items: ['Gallery-type seating', 'Seating capacity — 180 students each', 'Audiovisual aids — LCD projector, speakers, green board'],
    },
  ],
}

export const preClinicalDepartments = [
  {
    id: 'anatomy',
    name: 'Department of Anatomy',
    summary: 'A dissection hall, histology lab and museum, alongside dedicated demonstration rooms, a research lab and departmental library.',
    stats: [
      { value: 150, suffix: '', label: 'Dissection hall capacity' },
      { value: 8, suffix: '', label: 'Cadavers preserved' },
      { value: 117, suffix: '', label: 'Wet specimens in the museum' },
      { value: 90, suffix: '', label: 'Histology microscopes, 1:1 ratio' },
    ],
    blocks: [
      {
        type: 'list',
        title: 'Demonstration rooms',
        items: [
          'Number: 2',
          'Size: 64.4 sq. m. each',
          'Capacity: 75 students each',
          'Audio-visual aids: overhead projector, 75 flip chairs, green board, view box, OHP, 10 gross anatomy posters',
        ],
      },
      {
        type: 'list',
        title: 'Dissection hall',
        items: [
          'Size: 4,900 sq. ft., capacity 150 students',
          'Tables: 20 big, 5 small',
          'Wash basins: 21',
          'Lockers for students: 150',
          'Light and exhaust arrangements: adequate',
          'Special instruments: electric saw, band saw',
          'Extra learning aids: view box, LCD projector, display board, charts, green board, loose bone sets',
        ],
      },
      {
        type: 'list',
        title: 'Cadaver preservation',
        items: [
          'Embalming room: 71.61 sq. m., attached to the dissection hall',
          'Storage tanks: 3, totalling 18.63 sq. m.',
          'Cold room / cooling cabinets: 27.95 sq. m., capacity 8 bodies',
          'Cadavers available: 8',
          'Students allotted per cadaver: 15',
        ],
      },
      {
        type: 'list',
        title: 'Histology laboratory',
        items: [
          'Size: 3,358 sq. ft., capacity 90 students',
          'Slide storage: 6 cabinets (1,000 slides each)',
          'Microscopes: 90 (1/3, 1/6 & 1/12 objectives), 2 binocular, 1 projection, 5 demonstration',
          'Student-to-microscope ratio: 1:1',
          'Preparation room: 19.15 sq. m.',
          'Teaching aids: 27 histology charts, photo frames of microscopic slides, 1 LCD projector, 1 display board',
        ],
      },
      {
        type: 'list',
        title: 'Museum',
        items: [
          'Size: 3,172 sq. ft.',
          'Wet specimens: 117 total — limbs 28, thorax 16, abdomen & pelvis 42, head & neck 4, brain 17, embryology 10',
          'Coverage: gross anatomy, embryology, osteology, radiological anatomy, foetal anatomy',
          'Catalogues available to students: 6',
          'Viewing boxes: 1 hexagonal, 1 rectangular, plus a separate radiology section',
          'Other exhibits: 7 articulated skeletons, 21 radiology posters, 26 embryology posters, 76 embryology photo frames, 34 models, 35 loose bone sets',
          'Radiological & specialised imaging exhibits: 103 (plain X-rays, CT scans, MRI scans)',
          'Seating: 35 students',
        ],
      },
      {
        type: 'list',
        title: 'Research lab & departmental library',
        items: [
          'Research lab: 620 sq. ft.',
          'Departmental library cum seminar room: 31.30 sq. m., seats 12, 92 books',
        ],
      },
    ],
  },
  {
    id: 'physiology',
    name: 'Department of Physiology',
    summary: 'Clinical, haematology, amphibian and mammalian laboratories supporting hands-on physiology training.',
    stats: [
      { value: 4, suffix: '', label: 'Dedicated practical laboratories' },
      { value: 90, suffix: '', label: 'Haematology lab capacity' },
      { value: 90, suffix: '', label: 'Microscopes, 1:1 student ratio' },
      { value: 170, suffix: '', label: 'Demonstration room seats, 2 rooms' },
    ],
    blocks: [
      {
        type: 'list',
        title: 'Demonstration rooms',
        items: [
          'Number: 2',
          'Size: 625 sq. ft. each',
          'Capacity: 85 students each',
          'Audio-visual aids: overhead projector, 85 flip chairs, green board, OHP, 36 posters',
        ],
      },
      {
        type: 'list',
        title: 'Clinical laboratory',
        items: [
          'Size: 1,900 sq. ft., capacity 90 students',
          'Preparation room: 150 sq. ft., attached to the lab',
          'Tables: 10 examination, 5 small',
          'Clinical equipment: available',
          'Wash basins: 3',
          'Learning aids: 31 clinical posters, 1 green board',
        ],
      },
      {
        type: 'list',
        title: 'Haematology laboratory',
        items: [
          'Size: 3,935 sq. ft., capacity 90 students',
          'Preparation rooms: 2, 149 sq. ft. each',
          'Microscopes: 90 (2 binocular), 1:1 student ratio',
          'Wash basins: 29',
          'Teaching aids: haematology slides, 26 charts, 1 green board',
        ],
      },
      {
        type: 'list',
        title: 'Amphibian laboratory',
        items: [
          'Size: 2,600 sq. ft., capacity 90 students',
          'Preparation room and store attached — roughly 146 and 142 sq. ft.',
          "Tables: 10, each with a kymograph and Dale's organ bath wired for electric supply",
          'Teaching aids: 20 amphibian graphs, 2 posters, 1 green board',
        ],
      },
      {
        type: 'list',
        title: 'Mammalian laboratory',
        items: [
          'Size: 1,300 sq. ft., capacity 90 students',
          'Preparation room: 150 sq. ft., attached to the lab',
          'Wash basins: 3',
          'Learning aids: 7 posters, 11 graphs, 1 green board',
        ],
      },
    ],
  },
  {
    id: 'biochemistry',
    name: 'Department of Biochemistry',
    summary: 'Undergraduate and research laboratories equipped for practical biochemistry and molecular biology training.',
    stats: [
      { value: 100, suffix: '', label: 'Undergraduate lab capacity' },
      { value: 27, suffix: '', label: 'Reagent racks' },
      { value: 54, suffix: '', label: 'Gas burners' },
      { value: 93, suffix: '', label: 'Books in the departmental library' },
    ],
    blocks: [
      {
        type: 'list',
        title: 'Demonstration rooms',
        items: [
          'Number: 2',
          'Size: 65.0 sq. m. (room 1), 60.859 sq. m. (room 2)',
          'Capacity: 85 students each',
          'Audio-visual aids: overhead projector, OHP, charts, 85 flip chairs, 1 green board',
        ],
      },
      {
        type: 'list',
        title: 'Undergraduate practical laboratory',
        items: [
          'Size: 311.9 sq. m., capacity 100 students',
          'Reagent racks: 27, each seating 4 students',
          'Stools: 100, small tables: 4',
          'Wash basins: 26',
          'Gas burners: 54',
          'Light, exhaust, instruments and glassware: adequate',
        ],
      },
      {
        type: 'list',
        title: 'Research laboratory',
        items: [
          'Size: 59.9 sq. m.',
          'Washing, light and exhaust: available and adequate',
          'Special instruments: electrophoresis chamber, chromatography chamber, fume hood, pH meter, spectrophotometer, flame photometer, UV lamp',
          'Refrigerator and glassware: available',
        ],
      },
      {
        type: 'list',
        title: 'Museum',
        items: ['Size: 32.9 sq. m.', 'Models and charts covering biochemistry and molecular biology'],
      },
      {
        type: 'list',
        title: 'Departmental library cum seminar room',
        items: ['Size: 27.5 sq. m.', 'Seating: 20', 'Books: 93'],
      },
    ],
  },
]
