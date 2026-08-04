import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'

// Interior routes are code-split so the landing page ships the smallest
// possible bundle.
const Courses = lazy(() => import('@/pages/Courses'))
const Admission = lazy(() => import('@/pages/Admission'))
const Contact = lazy(() => import('@/pages/Contact'))
const News = lazy(() => import('@/pages/News'))
const ClinicalDepartments = lazy(() => import('@/pages/ClinicalDepartments'))
const ContentPage = lazy(() => import('@/pages/ContentPage'))
const LeadershipPage = lazy(() => import('@/pages/LeadershipPage'))
const Antiragging = lazy(() => import('@/pages/Antiragging'))
const Gallery = lazy(() => import('@/pages/Gallery'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Every slug below resolves against src/data/pages.js.
const CONTENT_SLUGS = [
  'about-the-society',
  'details-of-institution',
  'quality-policy',
  'academic-and-hospital-facilities',
  'built-up-area',
  'pre-clinical-departments',
  'college-layout',
  'library-photography',
  'residential-facilities',
  'students',
  'teaching-schedule',
  'publications',
  'fees',
  'committees',
  'citizen-charter',
  'bmw-west-annual-report',
  'college-information-pro-forma-status',
  'ugmsr-pgmsr-information',
  'affiliations-permissions',
  'posters',
  'erp-login',
]

const LEADERSHIP_SLUGS = [
  'chairmans-message',
  'vice-chancellor',
  'dean',
  'medical-superintendent',
  'registrar',
]

function Fallback() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-line border-t-gold-500" />
      <span className="sr-only">Loading</span>
    </div>
  )
}

export default function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="courses" element={<Courses />} />
          <Route path="admission" element={<Admission />} />
          <Route path="contact" element={<Contact />} />
          <Route path="clinical-departments" element={<ClinicalDepartments />} />
          <Route path="antiragging-measures" element={<Antiragging />} />
          <Route path="photogallery" element={<Gallery />} />

          <Route
            path="events"
            element={
              <News
                title="Activities / Events"
                lede="Campus festivities, sports, community service and everything else our students organise through the year."
                breadcrumb="Events"
                path="/events"
              />
            }
          />
          <Route
            path="news-press-release"
            element={
              <News
                title="News - Press Release"
                lede="Stay updated with the latest developments, achievements and announcements from Amaltas Institute of Medical Sciences."
                breadcrumb="Events"
                path="/news-press-release"
              />
            }
          />
          <Route
            path="cme-conference-academic-activities"
            element={
              <News
                title="CME, Conference & Academic Activities"
                lede="Continuing medical education, conferences and academic workshops hosted at AIMS."
                breadcrumb="Events"
                only="CME & Academic"
                path="/cme-conference-academic-activities"
              />
            }
          />
          <Route
            path="awards-achievements"
            element={
              <News
                title="Awards & Achievements"
                lede="Recognitions earned by our students, faculty and the wider Amaltas Group."
                breadcrumb="Events"
                only="Awards & Achievements"
                path="/awards-achievements"
              />
            }
          />

          {LEADERSHIP_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<LeadershipPage slug={slug} />} />
          ))}

          {CONTENT_SLUGS.map((slug) => (
            <Route key={slug} path={slug} element={<ContentPage slug={slug} />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
