import type { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import mark from '../assets/habitat-mark.png'
import { site } from '../config/site'

export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cx('mx-auto w-full max-w-6xl px-5 sm:px-8', className)}>{children}</div>
}

export function Logo({ tone = 'dark' }: { tone?: 'dark' | 'light' }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <img src={mark} alt="" className="h-8 w-8 object-contain" draggable={false} />
      <span
        className={cx(
          'font-display text-[1.35rem] font-semibold tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink-900',
        )}
      >
        Habitat
      </span>
    </span>
  )
}

export function Eyebrow({ children, tone = 'gold' }: { children: ReactNode; tone?: 'gold' | 'light' }) {
  return (
    <p
      className={cx(
        'text-xs font-semibold tracking-[0.18em] uppercase',
        tone === 'light' ? 'text-gold-300' : 'text-gold-600',
      )}
    >
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = 'dark',
  align = 'center',
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  tone?: 'dark' | 'light'
  align?: 'center' | 'left'
}) {
  return (
    <div data-reveal className={cx('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <Eyebrow tone={tone === 'light' ? 'light' : 'gold'}>{eyebrow}</Eyebrow>
      <h2
        className={cx(
          'mt-3 font-display text-3xl leading-[1.12] font-medium tracking-tight text-balance sm:text-[2.6rem]',
          tone === 'light' ? 'text-white' : 'text-ink-900',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cx(
            'mt-4 text-base leading-relaxed text-pretty sm:text-lg',
            tone === 'light' ? 'text-ink-300' : 'text-ink-500',
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost-light'
  external?: boolean
  arrow?: boolean
  className?: string
}

export function ButtonLink({ href, children, variant = 'primary', external, arrow, className }: ButtonProps) {
  const styles = {
    primary: 'bg-ink-900 text-white hover:bg-ink-700 shadow-sm',
    secondary: 'bg-white text-ink-900 ring-1 ring-line hover:ring-ink-300',
    'ghost-light': 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15',
  }[variant]
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={cx(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400',
        styles,
        className,
      )}
    >
      {children}
      {arrow ? (
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      ) : null}
    </a>
  )
}

/** "Get started" goes to the console when one is configured, otherwise to the demo form. */
export const startHref = site.portalUrl || '#contact'
