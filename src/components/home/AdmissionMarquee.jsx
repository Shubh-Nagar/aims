import { admissionNotices } from '@/data/site'

/**
 * Horizontal admissions marquee — the modern equivalent of the plain
 * <marquee> strip on the current site's homepage ("Admission Open for
 * 2026-27" + linked fee/document PDFs). Duplicated once so the loop is
 * seamless; pauses on hover and freezes under prefers-reduced-motion.
 */
export default function AdmissionMarquee() {
  return (
    <div className="border-b border-line bg-white">
      <div className="flex items-center">
        <div className="hidden shrink-0 items-center gap-2 bg-gold-600 px-6 py-3.5 text-2xs font-semibold uppercase tracking-eyebrow text-white sm:flex">
          Admissions
        </div>
        <div className="group relative flex-1 overflow-hidden py-3.5">
          <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {[...admissionNotices, ...admissionNotices].map((item, i) =>
              item.href ? (
                <a
                  key={`${item.label}-${i}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex shrink-0 items-center gap-3 text-sm font-medium text-brand-800 underline decoration-gold-400 decoration-2 underline-offset-4 transition-colors hover:text-gold-700"
                >
                  {item.label}
                </a>
              ) : (
                <span key={`${item.label}-${i}`} className="flex shrink-0 items-center gap-3 text-sm text-muted">
                  <span className="h-1 w-1 rounded-full bg-gold-500" aria-hidden="true" />
                  {item.label}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
