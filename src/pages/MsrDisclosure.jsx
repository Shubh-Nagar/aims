import { Link } from 'react-router-dom'
import { msrDisclosures } from '@/data/msr'
import Seo from '@/components/ui/Seo'
import PageHero from '@/components/ui/PageHero'
import Reveal from '@/components/ui/Reveal'

function StatusItem({ item }) {
  if (typeof item === 'string') {
    return <span className="text-xs italic text-muted">{item}</span>
  }
  if (item.href.startsWith('/documents/')) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-xs font-medium text-brand-700 underline decoration-gold-400 decoration-2 underline-offset-2 transition-colors hover:text-gold-700"
      >
        {item.label}
      </a>
    )
  }
  return (
    <Link
      to={item.href}
      className="text-xs font-medium text-brand-700 underline decoration-gold-400 decoration-2 underline-offset-2 transition-colors hover:text-gold-700"
    >
      {item.label}
    </Link>
  )
}

function StatusCell({ status }) {
  if (Array.isArray(status)) {
    return (
      <ul className="space-y-1.5">
        {status.map((item) => (
          <li key={typeof item === 'string' ? item : item.label}>
            <StatusItem item={item} />
          </li>
        ))}
      </ul>
    )
  }
  if (status === 'Not yet published') {
    return <span className="text-xs italic text-muted">{status}</span>
  }
  return <span className="text-xs font-semibold uppercase tracking-eyebrow text-brand-700">{status}</span>
}

export default function MsrDisclosure() {
  return (
    <>
      <Seo
        title="Information Under MSR Clause B.1.11 | Amaltas Institute of Medical Sciences"
        description="Mandatory disclosures under Minimum Standard Requirements (MSR) Clause B.1.11 at Amaltas Institute of Medical Sciences."
        path="/information-under-msr-clause-b-1-11"
      />
      <PageHero
        title="Information Under MSR Clause B.1.11"
        lede="Mandatory public disclosures required under Minimum Standard Requirements (MSR) Clause B.1.11."
        breadcrumb="Important Links"
      />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="overflow-hidden rounded-2xl ring-1 ring-line">
              <div className="overflow-x-auto scrollbar-none">
                <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                  <caption className="sr-only">Information Under MSR Clause B.1.11</caption>
                  <thead>
                    <tr className="bg-brand-700 text-white">
                      <th scope="col" className="w-16 px-5 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow">
                        S.No.
                      </th>
                      <th scope="col" className="px-5 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow">
                        Details of information
                      </th>
                      <th scope="col" className="w-56 px-5 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow">
                        Provided or Not (with No. &amp; date)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-surface">
                    {msrDisclosures.map((row, i) => (
                      <tr
                        key={row.no}
                        className={`transition-colors duration-200 hover:bg-gold-100/60 ${i % 2 ? 'bg-paper/60' : ''}`}
                      >
                        <td className="border-t border-line px-5 py-3.5 align-top font-medium text-brand-900">{row.no}.</td>
                        <td className="border-t border-line px-5 py-3.5 align-top text-muted">{row.details}</td>
                        <td className="border-t border-line px-5 py-3.5 align-top">
                          <StatusCell status={row.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
