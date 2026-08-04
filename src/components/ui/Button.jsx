import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

const variants = {
  primary: 'btn-primary',
  gold: 'btn-gold',
  outline: 'btn-outline',
  light: 'btn-ghost-light',
}

/**
 * One button, four skins. The hover fill is CSS (see index.css .btn) so it
 * stays smooth without a JS animation frame.
 */
export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  arrow = true,
  className = '',
  children,
  ...rest
}) {
  const classes = `btn ${variants[variant] ?? variants.primary} group ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 ease-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {inner}
      </Link>
    )
  }
  if (href) {
    const external = /^https?:/.test(href)
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
        {...rest}
      >
        {inner}
      </a>
    )
  }

  const Tag = as ?? 'button'
  return (
    <Tag className={classes} {...rest}>
      {inner}
    </Tag>
  )
}
