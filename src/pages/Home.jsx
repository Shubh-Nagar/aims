import Seo from '@/components/ui/Seo'
import { site } from '@/data/site'
import { ReplayReveals } from '@/components/ui/Reveal'
import Hero from '@/components/home/Hero'
import NewsTicker from '@/components/home/NewsTicker'
import Intro from '@/components/home/Intro'
import CinematicBreak from '@/components/home/CinematicBreak'
import WhyChoose from '@/components/home/WhyChoose'
import CourseHighlights from '@/components/home/CourseHighlights'
import Departments from '@/components/home/Departments'
import CampusEvents from '@/components/home/CampusEvents'
import Facilities from '@/components/home/Facilities'
import StudentLife from '@/components/home/StudentLife'
import Testimonials from '@/components/home/Testimonials'
import Leadership from '@/components/home/Leadership'
import HowToApply from '@/components/home/HowToApply'
import Accreditation from '@/components/home/Accreditation'

export default function Home() {
  return (
    <>
      <Seo
        title="Amaltas Institute of Medical Sciences, Dewas | MBBS, MD/MS & Paramedical"
        description="A 27.378-acre medical campus in Dewas, Madhya Pradesh offering MBBS, postgraduate, super-speciality, nursing and paramedical programmes with clinical training at Amaltas Hospital."
      />
      <Hero />

      <div className="border-y border-line bg-brand-50 py-3.5 text-center text-sm text-brand-800">
        <span className="font-medium">{site.name}</span> is a unit of the{' '}
        <span className="font-medium">{site.parent}</span>.
      </div>

      <NewsTicker />

      {/* Everything below the hero replays its entrance each time it scrolls
          into frame, so moving back up the page is as animated as coming
          down it. Reveals outside this wrapper still fire once. */}
      <ReplayReveals>
        <Intro />
        <CinematicBreak />
        <WhyChoose />
        <CourseHighlights />
        <Departments />
        <CampusEvents />
        <Facilities />
        <StudentLife />
        <Testimonials />
        <Leadership />
        <HowToApply />
        <Accreditation />
      </ReplayReveals>
    </>
  )
}
