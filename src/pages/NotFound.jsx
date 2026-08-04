import Seo from '@/components/ui/Seo'
import Button from '@/components/ui/Button'
import Vitals from '@/components/ui/Vitals'

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found | Amaltas Institute of Medical Sciences" />
      <section className="surface-dark grid min-h-[80vh] place-items-center pt-[var(--header-h)]">
        <div className="container text-center">
          <p className="eyebrow justify-center text-gold-300">Error 404</p>
          <h1 className="mt-6 text-4xl md:text-6xl">This page is not on the campus map</h1>
          <p className="mx-auto mt-5 max-w-lg text-[15px] text-white/65">
            The page you asked for has moved or never existed. Head back to the homepage, or go straight to
            courses and admissions.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/" variant="gold">
              Back to homepage
            </Button>
            <Button to="/courses" variant="light">
              Browse courses
            </Button>
          </div>
          <Vitals tone="light" className="mt-14 opacity-50" />
        </div>
      </section>
    </>
  )
}
