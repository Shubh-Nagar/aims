/**
 * Bed distribution at Amaltas Hospital, migrated from the signed PDF at
 * /documents/BED-DISTRIBUTION.pdf (dated 20/04/2026, broad speciality;
 * super-speciality figures dated 03/08/2026, signed by the Dean).
 */
export const bedDistributionUpdated = '20 April 2026'
export const superSpecialityUpdated = '3 August 2026'

export const broadSpeciality = [
  {
    group: 'Medicine allied',
    department: 'Medicine',
    wards: [
      { name: 'Male I', beds: 30 },
      { name: 'Male II', beds: 30 },
      { name: 'Male III', beds: 30 },
      { name: 'Male IV', beds: 30 },
      { name: 'Male V', beds: 30 },
      { name: 'Female I', beds: 30 },
      { name: 'Female II', beds: 30 },
      { name: 'Female III', beds: 30 },
    ],
    total: 240,
    units: 'I, II, III, IV, V, VI, VII, VIII',
  },
  {
    group: 'Medicine allied',
    department: 'Paediatrics',
    wards: [
      { name: 'Common ward I', beds: 40 },
      { name: 'Common ward II', beds: 30 },
      { name: 'Common ward III', beds: 30 },
      { name: 'Common ward IV', beds: 30 },
    ],
    total: 130,
    units: 'I, II, III, IV',
  },
  {
    group: 'Medicine allied',
    department: 'TB & Chest',
    wards: [
      { name: 'Male', beds: 30 },
      { name: 'Female', beds: 30 },
    ],
    total: 60,
    units: 'I, II',
  },
  {
    group: 'Medicine allied',
    department: 'Skin & VD',
    wards: [
      { name: 'Male I', beds: 20 },
      { name: 'Male II', beds: 20 },
      { name: 'Female', beds: 20 },
    ],
    total: 60,
    units: 'I, II, III',
  },
  {
    group: 'Medicine allied',
    department: 'Psychiatry',
    wards: [
      { name: 'Male', beds: 30 },
      { name: 'Female', beds: 30 },
    ],
    total: 60,
    units: 'I, II',
  },
  {
    group: 'Surgery allied',
    department: 'General Surgery',
    wards: [
      { name: 'Male I', beds: 30 },
      { name: 'Male II', beds: 30 },
      { name: 'Male III', beds: 30 },
      { name: 'Male IV', beds: 30 },
      { name: 'Male V', beds: 30 },
      { name: 'Female I', beds: 30 },
      { name: 'Female II', beds: 30 },
      { name: 'Female III', beds: 30 },
    ],
    total: 240,
    units: 'I, II, III, IV, V, VI, VII, VIII',
  },
  {
    group: 'Surgery allied',
    department: 'Orthopaedics',
    wards: [
      { name: 'Male I', beds: 30 },
      { name: 'Male II', beds: 30 },
      { name: 'Male III', beds: 30 },
      { name: 'Female I', beds: 30 },
    ],
    total: 120,
    units: 'I, II, III, IV',
  },
  {
    group: 'Surgery allied',
    department: 'Ophthalmology',
    wards: [
      { name: 'Male', beds: 30 },
      { name: 'Female', beds: 30 },
    ],
    total: 60,
    units: 'I, II',
  },
  {
    group: 'Surgery allied',
    department: 'ENT',
    wards: [
      { name: 'Male', beds: 30 },
      { name: 'Female', beds: 30 },
    ],
    total: 60,
    units: 'I, II',
  },
  {
    group: 'Surgery allied',
    department: 'Obstetrics & ANC',
    wards: [
      { name: 'Female I', beds: 30 },
      { name: 'Female II', beds: 30 },
      { name: 'Female III', beds: 30 },
    ],
    total: 90,
    units: 'I, II, III, IV, V (shared with Gynecology)',
  },
  {
    group: 'Surgery allied',
    department: 'Gynecology',
    wards: [
      { name: 'Female I', beds: 30 },
      { name: 'Female II', beds: 30 },
    ],
    total: 60,
    units: 'I, II, III, IV, V (shared with Obstetrics & ANC)',
  },
  {
    group: 'Surgery allied',
    department: 'Emergency Medicine',
    wards: [
      { name: 'Common ward', beds: 40 },
      { name: 'Common ward', beds: 40 },
    ],
    total: 80,
    units: 'I, II',
  },
]

export const broadSpecialityTotal = { beds: 1260, units: 42 }

export const superSpeciality = [
  { department: 'DM Cardiology', wards: [{ name: 'Male', beds: 10 }, { name: 'Female', beds: 10 }], total: 20, units: 'I' },
  { department: 'DM Nephrology', wards: [{ name: 'Male', beds: 10 }, { name: 'Female', beds: 10 }], total: 20, units: 'I' },
  { department: 'MCH Neuro Surgery', wards: [{ name: 'Male', beds: 10 }, { name: 'Female', beds: 10 }], total: 20, units: 'I' },
  { department: 'MCH Urology', wards: [{ name: 'Male', beds: 10 }, { name: 'Female', beds: 10 }], total: 20, units: 'I' },
  { department: 'DM Oncology', wards: [{ name: 'Male', beds: 15 }, { name: 'Female', beds: 15 }], total: 30, units: 'I' },
  { department: 'DM Endocrinology', wards: [{ name: 'Male', beds: 15 }, { name: 'Female', beds: 15 }], total: 30, units: 'I' },
  { department: 'DM Gastroenterology', wards: [{ name: 'Male', beds: 15 }, { name: 'Female', beds: 15 }], total: 30, units: 'I' },
  { department: 'DM Neurology', wards: [{ name: 'Male', beds: 15 }, { name: 'Female', beds: 15 }], total: 30, units: 'I' },
]

export const superSpecialityTotal = { beds: 200, units: 8 }

export const grandTotal = { beds: 1460, units: 50 }
