import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import HowToApplySteps from '@/components/home/HowToApply'

/** The three-step application journey, moved off the homepage onto its own page. */
export default function HowToApply() {
  return (
    <>
      <Seo
        title="How to Apply | Amaltas Institute of Medical Sciences"
        description="Three steps from enquiry to enrolment at Amaltas Institute of Medical Sciences, Dewas."
        path="/how-to-apply"
      />
      <PageHero
        title="How to Apply"
        lede="Three steps from enquiry to enrolment — an admissions representative guides you through each one."
        breadcrumb="Institutional"
        image="/images/courses/simulation.jpg"
      />
      <HowToApplySteps />
    </>
  )
}
