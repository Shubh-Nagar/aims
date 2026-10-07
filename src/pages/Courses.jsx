import {
  coursesIntro,
  sanctionedIntake,
  pgCourses,
  pgCoursesSecondary,
  superSpeciality,
  nursingCourses,
  paramedicalCourses,
  permissionLetters,
} from '@/data/courses'
import { FileDown } from 'lucide-react'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'
import DataTable from '@/components/ui/DataTable'
import Img from '@/components/ui/Img'

const galleryImages = [
  '/images/courses/anatomy-lab.jpg',
  '/images/courses/clinical-rounds.jpg',
  '/images/courses/simulation.jpg',
  '/images/courses/lecture.jpg',
]

export default function Courses() {
  const tables = [sanctionedIntake, pgCourses, pgCoursesSecondary, superSpeciality, nursingCourses, paramedicalCourses]

  return (
    <>
      <Seo
        title="Courses | Amaltas Institute of Medical Sciences"
        description="MBBS, MD/MS, DM/MCh, nursing and paramedical courses at AIMS Dewas with sanctioned intake capacity for every programme."
        path="/courses"
      />
      <PageHero
        title={coursesIntro.title}
        lede={coursesIntro.lede}
        breadcrumb="Institutional"
        image="/images/courses/lecture.jpg"
      />

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="font-display text-[4.5rem] leading-none text-gold-500">{coursesIntro.headline}</p>
            <h2 className="mt-5 text-2xl leading-snug">{coursesIntro.headlineLabel}</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="prose-aims text-base">{coursesIntro.body}</p>
            <ul className="mt-8 flex flex-wrap gap-3">
              {permissionLetters.map((letter) => (
                <li key={letter.label}>
                  <a
                    href={letter.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2.5 text-xs font-medium text-brand-900 transition-all duration-300 hover:border-gold-400 hover:bg-gold-100"
                  >
                    <FileDown className="h-3.5 w-3.5 text-muted transition-colors group-hover:text-gold-600" aria-hidden="true" />
                    {letter.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="pb-4">
        <div className="container">
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {galleryImages.map((src, i) => (
              <Reveal as="li" key={src} delay={i * 0.06}>
                <Img src={src} alt="AIMS teaching facilities" ratio="aspect-[4/3]" wrapperClassName="rounded-2xl" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="h2" className="text-3xl md:text-[2.4rem]">
            Overview of programmes
          </Reveal>
          <Reveal as="p" delay={0.05} className="prose-aims mt-5 max-w-3xl">
            We offer courses for students interested in different aspects of medical and healthcare
            education. Whether you are pursuing a career as a doctor, nurse or paramedical technician, our
            programmes are tailored to equip you with the knowledge and skills required in your chosen field.
          </Reveal>

          <div className="mt-12 space-y-12">
            {tables.map((table, i) => (
              <Reveal key={table.caption} delay={i * 0.04}>
                <h3 className="mb-5 text-xl">{table.caption}</h3>
                <DataTable {...table} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-surface">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <p className="eyebrow">Why choose AIMS</p>
            <h2 className="mt-5 text-3xl md:text-[2.4rem]">Real-world medical experience</h2>
            <p className="prose-aims mt-5">
              Choosing AIMS means choosing a future in healthcare where you are equipped with the skills,
              knowledge and experience needed to succeed in a highly competitive field. Our focus on academic
              excellence, research and practical training ensures that graduates are well-prepared to
              contribute to improving healthcare standards globally.
            </p>
            <p className="prose-aims mt-4">
              Students of AIMS receive hands-on training at Amaltas Hospital, where they work alongside
              healthcare professionals in real-world medical settings.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Img
              src="/images/courses/hospital-training.jpg"
              alt="Students training at Amaltas Hospital"
              ratio="aspect-[4/3]"
              wrapperClassName="rounded-2xl"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
