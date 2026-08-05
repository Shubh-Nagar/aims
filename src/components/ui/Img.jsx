import { useState } from 'react'

/**
 * Lazy image with a branded fallback. Until the real photograph is dropped
 * into /public/images the fallback keeps layout and colour intact rather
 * than showing a broken-image icon.
 */
export default function Img({ src, alt, className = '', wrapperClassName = '', ratio = 'aspect-[4/3]', ...rest }) {
  const [failed, setFailed] = useState(!src)

  return (
    <div className={`relative overflow-hidden bg-brand-50 ${ratio} ${wrapperClassName}`}>
      {failed ? (
        <div
          className="absolute inset-0 grid place-items-center bg-gradient-to-br from-brand-600 to-brand-800 grain"
          role="img"
          aria-label={alt}
        >
          <span className="px-6 text-center text-2xs font-semibold uppercase tracking-eyebrow text-white/45">
            {alt}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${className}`}
          {...rest}
        />
      )}
    </div>
  )
}
