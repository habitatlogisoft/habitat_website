import { nav, site } from '../config/site'
import { Container, Logo } from '../components/ui'

export function Footer() {
  return (
    <footer className="bg-ink-950 py-14 text-ink-300">
      <Container className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Logo tone="light" />
          <p className="mt-4 text-sm leading-relaxed">
            Hotel management and direct bookings for independent hotels, lodges and homestays.
          </p>
        </div>
        <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm sm:grid-cols-3">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="hover:text-white">
            Book a demo
          </a>
          {site.portalUrl ? (
            <a href={site.portalUrl} className="hover:text-white">
              Sign in
            </a>
          ) : null}
        </nav>
      </Container>
      <Container className="mt-12 border-t border-white/10 pt-6 text-xs text-ink-400">
        © {new Date().getFullYear()} Habitat. All rights reserved.
      </Container>
    </footer>
  )
}
