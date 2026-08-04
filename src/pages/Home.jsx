import Seo from '@/components/ui/Seo'
import Hero from '@/components/home/Hero'
import NewsTicker from '@/components/home/NewsTicker'
import Intro from '@/components/home/Intro'
import Stats from '@/components/home/Stats'
import WhyChoose from '@/components/home/WhyChoose'
import Leadership from '@/components/home/Leadership'
import Programs from '@/components/home/Programs'
import HowToApply from '@/components/home/HowToApply'
import StudentLife from '@/components/home/StudentLife'
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
      <NewsTicker />
      <Intro />
      <Stats />
      <WhyChoose />
      <Programs />
      <Leadership />
      <HowToApply />
      <StudentLife />
      <Accreditation />
      <NewsGrid />
    </>
  )
}
