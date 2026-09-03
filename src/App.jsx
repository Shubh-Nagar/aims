import { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from '@/components/layout/Layout'
import Home from '@/pages/Home'
import ErrorBoundary from '@/components/layout/ErrorBoundary'
import lazyWithRetry from '@/lib/lazyWithRetry'

// Interior routes are code-split so the landing page ships the smallest
// possible bundle.
const Courses = lazyWithRetry(() => import('@/pages/Courses'))
const Admission = lazyWithRetry(() => import('@/pages/Admission'))
const Contact = lazyWithRetry(() => import('@/pages/Contact'))
const News = lazyWithRetry(() => import('@/pages/News'))
const ClinicalDepartments = lazyWithRetry(() => import('@/pages/ClinicalDepartments'))
const ClinicalDepartmentDetail = lazyWithRetry(() => import('@/pages/ClinicalDepartmentDetail'))
const PreClinicalDepartments = lazyWithRetry(() => import('@/pages/PreClinicalDepartments'))
const PreClinicalDepartmentDetail = lazyWithRetry(() => import('@/pages/PreClinicalDepartmentDetail'))
const ContentPage = lazyWithRetry(() => import('@/pages/ContentPage'))
const LeadershipPage = lazyWithRetry(() => import('@/pages/LeadershipPage'))
const Antiragging = lazyWithRetry(() => import('@/pages/Antiragging'))
const Gallery = lazyWithRetry(() => import('@/pages/Gallery'))
const AboutSociety = lazyWithRetry(() => import('@/pages/AboutSociety'))
const Publications = lazyWithRetry(() => import('@/pages/Publications'))
const NewsPressRelease = lazyWithRetry(() => import('@/pages/NewsPressRelease'))
const BedDistribution = lazyWithRetry(() => import('@/pages/BedDistribution'))
const EventDetail = lazyWithRetry(() => import('@/pages/EventDetail'))
const AwardsAchievements = lazyWithRetry(() => import('@/pages/AwardsAchievements'))
const MsrDisclosure = lazyWithRetry(() => import('@/pages/MsrDisclosure'))
const NotFound = lazyWithRetry(() => import('@/pages/NotFound'))

// Every slug below resolves against src/data/pages.js.
const CONTENT_SLUGS = [
  'details-of-institution',
  'quality-policy',
  'academic-and-hospital-facilities',
  'built-up-area',
  'college-layout',
  'library-photography',
  'residential-facilities',
  'students',
  'teaching-schedule',
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
  'founder-chairman',
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
  const location = useLocation()

  return (
    // Keyed on the pathname so navigating away clears a failed page rather
    // than leaving the reader stuck on the error state for the whole session.
    <ErrorBoundary resetKey={location.pathname}>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="courses" element={<Courses />} />
            <Route path="admission" element={<Admission />} />
            <Route path="contact" element={<Contact />} />
            <Route path="clinical-departments" element={<ClinicalDepartments />} />
            <Route path="clinical-departments/:slug" element={<ClinicalDepartmentDetail />} />
            <Route path="pre-clinical-departments" element={<PreClinicalDepartments />} />
            <Route path="pre-clinical-departments/:slug" element={<PreClinicalDepartmentDetail />} />
            <Route path="antiragging-measures" element={<Antiragging />} />
            <Route path="photogallery" element={<Gallery />} />
            <Route path="about-the-society" element={<AboutSociety />} />
            <Route path="publications" element={<Publications />} />
            <Route path="bed-distribution" element={<BedDistribution />} />

            <Route
              path="events"
              element={
                <News
                  key="/events"
                  title="Activities / Events"
                  lede="Campus festivities, sports, community service and everything else our students organise through the year."
                  breadcrumb="Events"
                  only="Activities / Events"
                  path="/events"
                />
              }
            />
            <Route path="events/:slug" element={<EventDetail />} />
            <Route path="news-press-release" element={<NewsPressRelease />} />
            <Route
              path="cme-conference-academic-activities"
              element={
                <News
                  key="/cme-conference-academic-activities"
                  title="CME, Conference & Academic Activities"
                  lede="Continuing medical education, conferences and academic workshops hosted at AIMS."
                  breadcrumb="Events"
                  only="CME & Academic"
                  path="/cme-conference-academic-activities"
                  downloadPdf={{ href: '/documents/CMEs-Workshop-Details.pdf', label: 'Download CME & Workshop List (PDF)' }}
                />
              }
            />
            <Route path="awards-achievements" element={<AwardsAchievements />} />
            <Route path="information-under-msr-clause-b-1-11" element={<MsrDisclosure />} />

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
    </ErrorBoundary>
  )
}
