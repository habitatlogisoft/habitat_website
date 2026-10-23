import { Check } from 'lucide-react'
import { site } from '../config/site'
import { ButtonLink, Container, SectionHeading } from '../components/ui'
import { BookingSiteMock } from '../components/mockups/BookingSiteMock'

const POINTS = [
  'Your own link to share on Google, Instagram and WhatsApp',
  'Your logo, colours, cover photo and tagline',
  'Live availability and prices straight from your rate calendar',
  'Guests pay online or choose to pay at the hotel',
  '“My trips” for guests to view, change or cancel by your rules',
  'A maintenance switch when you need to pause bookings',
]

export function BookingSite() {
  return (
    <section id="booking-site" className="py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div className="order-2 lg:order-1" data-reveal>
          <BookingSiteMock className="mx-auto max-w-md" />
        </div>
        <div className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Your booking website"
            title="Every booking direct. No commission on the rooms you sell yourself."
            lead="Each property gets a booking website the moment it goes live, running on the same rooms and rates your front desk uses."
          />
          <ul className="mt-8 space-y-3" data-reveal>
            {POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-[15px] text-ink-600">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600">
                  <Check className="h-3.5 w-3.5" aria-hidden />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-9" data-reveal>
            <ButtonLink href={site.guestDemoUrl} variant="secondary" external arrow>
              Open a live example
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
