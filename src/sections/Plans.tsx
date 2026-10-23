import { Check, Plus } from 'lucide-react'
import { ButtonLink, Container, SectionHeading, startHref } from '../components/ui'

const EVERY_PLAN = [
  'Front desk, room board and housekeeping',
  'Rates, inventory and discount codes',
  'Your own booking website',
  'Online payments and pay at hotel',
  'GST invoices',
  'Cancellation and refund rules',
  'Staff roles and audit trail',
  'WhatsApp alerts for new bookings',
]

const PREMIUM = [
  'Guest messages on WhatsApp from your own business number',
  'Confirmation, invoice, reminder and bill sent automatically',
  'WhatsApp booking assistant with payment links',
  'Shared inbox so staff can reply to guests',
]

export function Plans() {
  return (
    <section id="plans" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Plans"
          title="Start with the essentials. Add WhatsApp when you're ready."
          lead="Plans are priced per business, by the number of properties and rooms. Book a demo and we'll send you a quote."
        />
        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-3xl bg-ivory p-8 ring-1 ring-line">
            <p className="text-sm font-semibold text-ink-500">Free & Standard</p>
            <h3 className="mt-2 font-display text-2xl text-ink-900">Every plan includes</h3>
            <ul className="mt-6 space-y-3">
              {EVERY_PLAN.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink-600">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="relative rounded-3xl bg-ink-900 p-8 text-white">
            <span className="absolute top-6 right-6 rounded-full bg-gold-400 px-2.5 py-1 text-[11px] font-bold text-ink-900">
              Premium
            </span>
            <p className="text-sm font-semibold text-ink-300">Everything in Standard, plus</p>
            <h3 className="mt-2 font-display text-2xl">WhatsApp for your guests</h3>
            <ul className="mt-6 space-y-3">
              {PREMIUM.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] text-ink-300">
                  <Plus className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink href={startHref} variant="ghost-light" arrow className="mt-8">
              Get a quote
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
