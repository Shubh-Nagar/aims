import Reveal from './Reveal'
import Button from './Button'

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  action,
  light = false,
  className = '',
}) {
  const centered = align === 'center'
  return (
    <div
      className={`flex flex-col gap-6 ${
        centered ? 'items-center text-center' : 'md:flex-row md:items-end md:justify-between'
      } ${className}`}
    >
      <div className={centered ? 'max-w-2xl' : 'max-w-2xl'}>
        {eyebrow && (
          <Reveal as="p" className={`eyebrow ${light ? 'text-gold-300' : ''}`}>
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h2" delay={0.05} className="mt-4 text-3xl leading-[1.12] md:text-[2.6rem]">
          {title}
        </Reveal>
        {lede && (
          <Reveal
            as="p"
            delay={0.1}
            className={`mt-4 text-[15px] leading-relaxed ${light ? 'text-white/70' : 'text-muted'}`}
          >
            {lede}
          </Reveal>
        )}
      </div>
      {action && (
        <Reveal delay={0.15} className="shrink-0">
          <Button to={action.to} href={action.href} variant={light ? 'light' : 'outline'}>
            {action.label}
          </Button>
        </Reveal>
      )}
    </div>
  )
}
