import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site } from '../config/site'
import { ButtonLink, Container, Logo, cx, startHref } from '../components/ui'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cx(
        'sticky top-0 z-50 transition-colors',
        scrolled || open ? 'bg-ivory/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur' : 'bg-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" aria-label="Habitat home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ink-500 transition hover:text-ink-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          {site.portalUrl ? (
            <a href={site.portalUrl} className="text-sm font-semibold text-ink-700 hover:text-ink-900">
              Sign in
            </a>
          ) : null}
          <ButtonLink href={startHref} className="py-2.5">
            Book a demo
          </ButtonLink>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full text-ink-900 ring-1 ring-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <div id="mobile-nav" className="border-t border-line bg-ivory lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base font-medium text-ink-700 hover:bg-sand"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href={startHref} className="mt-3">
              Book a demo
            </ButtonLink>
            {site.portalUrl ? (
              <ButtonLink href={site.portalUrl} variant="secondary">
                Sign in
              </ButtonLink>
            ) : null}
          </Container>
        </div>
      ) : null}
    </header>
  )
}
