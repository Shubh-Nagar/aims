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
