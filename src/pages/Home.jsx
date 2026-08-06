import Seo from '@/components/ui/Seo'
import { site } from '@/data/site'
import Hero from '@/components/home/Hero'
import NewsTicker from '@/components/home/NewsTicker'
import Intro from '@/components/home/Intro'
import CinematicBreak from '@/components/home/CinematicBreak'
import Stats from '@/components/home/Stats'
import WhyChoose from '@/components/home/WhyChoose'
import Programs from '@/components/home/Programs'
import CampusEvents from '@/components/home/CampusEvents'
import Facilities from '@/components/home/Facilities'
import StudentLife from '@/components/home/StudentLife'
import Leadership from '@/components/home/Leadership'
import HowToApply from '@/components/home/HowToApply'
import Accreditation from '@/components/home/Accreditation'
import NewsGrid from '@/components/home/NewsGrid'

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
      <Intro />
      <CinematicBreak />
      <Stats />
      <WhyChoose />
      <Programs />
      <CampusEvents />
      <Facilities />
      <StudentLife />
      <Leadership />
      <HowToApply />
      <Accreditation />
      <NewsGrid />
    </>
  )
}
