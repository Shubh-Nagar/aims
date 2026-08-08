import { Link } from 'react-router-dom'
import { Award, GraduationCap, Stethoscope } from 'lucide-react'
import { courseHighlightCards } from '@/data/courses'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

const ICONS = {
  mbbs: GraduationCap,
  'md-ms': Stethoscope,
  'dm-mch': Award,
}

export default function CourseHighlights() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          align="center"
          eyebrow="Courses"
          title="UG / PG medical and surgical specialisation courses"
          lede="Sanctioned intake across undergraduate, postgraduate and super-speciality programmes at AIMS."
          className="mx-auto"
        />

        <ul className="mx-auto mt-24 grid max-w-5xl gap-x-6 gap-y-24 sm:grid-cols-2 lg:grid-cols-3">
          {courseHighlightCards.map((course, i) => {
            const Icon = ICONS[course.id] ?? GraduationCap
            return (
              <Reveal as="li" key={course.id} delay={i * 0.1}>
                <Link
                  to="/courses"
                  className="group relative block rounded-2xl border border-line bg-white px-6 pb-8 pt-24 text-center shadow-sm transition-all duration-500 ease-smooth hover:-translate-y-1.5 hover:border-brand-300 hover:shadow-lg"
                >
                  <span className="absolute -top-20 left-1/2 -translate-x-1/2">
                    <Img
                      src={course.image}
                      alt={course.title}
                      ratio="aspect-square"
                      wrapperClassName="h-40 w-40 rounded-full ring-4 ring-white shadow-md"
                      className="transition-transform duration-500 ease-smooth group-hover:scale-110"
                    />
                    <span className="absolute -right-1 -top-1 grid h-10 w-10 place-items-center rounded-full bg-brand-700 text-white shadow-md ring-2 ring-white transition-colors duration-300 group-hover:bg-gold-600">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </span>

                  <h3 className="mt-2 text-lg font-semibold text-brand-900 transition-colors duration-300 group-hover:text-brand-600">
                    {course.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{course.subtitle}</p>

                  <span className="mt-5 inline-block rounded-full bg-brand-50 px-4 py-1.5 text-2xs font-semibold uppercase tracking-eyebrow text-brand-700 transition-colors duration-300 group-hover:bg-gold-100 group-hover:text-gold-700">
                    {course.seats}
                  </span>
                </Link>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
