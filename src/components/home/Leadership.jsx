import { Link } from 'react-router-dom'
import { leadership, leadershipIntro } from '@/data/leadership'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Img from '@/components/ui/Img'

export default function Leadership() {
  const featured = leadership.filter((person) => person.featured)

  return (
    <section className="section bg-surface">
      <div className="container">
        <SectionHeading
          eyebrow="Insights from our leadership"
          title="The people steering the institute"
          lede={leadershipIntro}
          action={{ label: 'All office bearers', to: '/chairmans-message' }}
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {featured.map((person, i) => (
            <Reveal as="li" key={person.slug} delay={i * 0.08}>
              <Link to={`/${person.slug}`} className="card group block h-full overflow-hidden">
                <div className="card-media">
                  <Img src={person.image} alt={person.name} ratio="aspect-[4/5]" />
                </div>
                <div className="p-6">
                  <p className="text-2xs font-semibold uppercase tracking-eyebrow text-gold-600">
                    {person.role}
                  </p>
                  <h3 className="mt-2 text-xl transition-colors duration-300 group-hover:text-brand-600">
                    {person.name}
                  </h3>
                  <span className="mt-4 block h-px w-8 bg-gold-500 transition-all duration-400 ease-smooth group-hover:w-16" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
