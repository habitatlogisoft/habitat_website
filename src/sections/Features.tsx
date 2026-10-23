import type { LucideIcon } from 'lucide-react'
import {
  BedDouble,
  Building2,
  CalendarRange,
  Clock4,
  CreditCard,
  LineChart,
  ReceiptText,
  RotateCcw,
  Sparkles,
  Star,
  UsersRound,
} from 'lucide-react'
import { Container, SectionHeading } from '../components/ui'

type Feature = { icon: LucideIcon; title: string; body: string }

const FEATURES: Feature[] = [
  {
    icon: BedDouble,
    title: 'Front desk & room board',
    body: 'Arrivals, departures and walk-ins on one screen. Assign rooms floor by floor and see every change live.',
  },
  {
    icon: CalendarRange,
    title: 'Rates & inventory',
    body: 'Room types, a rate calendar, extra-bed and child charges, and discount codes. Availability is never double-sold.',
  },
  {
    icon: CreditCard,
    title: 'Payments your way',
    body: 'Take online payments through Razorpay, an advance or the full amount, or settle at the hotel by cash, card or bank transfer.',
  },
  {
    icon: ReceiptText,
    title: 'GST done for you',
    body: 'Taxes are worked out per stay and every booking gets a proper GST invoice, ready to download or send.',
  },
  {
    icon: RotateCcw,
    title: 'Cancellations & refunds',
    body: 'Set your own cancellation and no-show rules. Refunds follow them, with small ones approved automatically if you want.',
  },
  {
    icon: Clock4,
    title: 'Stays that fit your hotel',
    body: 'Nightly stays, day-use, or 24-hour check-out from arrival. Offer early check-in and late check-out windows.',
  },
  {
    icon: Sparkles,
    title: 'Housekeeping',
    body: 'Rooms flip to "needs cleaning" at check-out, so the desk only hands over rooms that are ready.',
  },
  {
    icon: UsersRound,
    title: 'Staff roles & audit trail',
    body: 'Give managers, front desk and accounts exactly the access they need. Every change is logged with who made it.',
  },
  {
    icon: Building2,
    title: 'One login, many properties',
    body: 'Run several hotels from one business account, each with its own rooms, rates, policies and website.',
  },
  {
    icon: LineChart,
    title: 'Reports',
    body: 'Occupancy, revenue and booking reports by property, so you can see how the month is going at a glance.',
  },
  {
    icon: Star,
    title: 'Guest reviews',
    body: 'Guests review their stay after check-out, and the reviews appear on your booking website.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-white py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Everything in one place"
          title="One system for the desk, the rooms and the money"
          lead="No more spreadsheets next to a booking engine next to a billing tool. Habitat keeps reservations, rooms, payments and invoices in step."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, body }) => (
            <article key={title} data-reveal className="bg-white p-7 transition hover:bg-ivory">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-100">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-5 text-base font-semibold text-ink-900">{title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{body}</p>
            </article>
          ))}
          <article data-reveal className="flex flex-col justify-center bg-ink-900 p-7 text-white">
            <p className="font-display text-2xl leading-snug">Built around how Indian hotels actually work.</p>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-300">
              GST, Razorpay, rupee pricing and WhatsApp aren't add-ons here. They're the defaults.
            </p>
          </article>
        </div>
      </Container>
    </section>
  )
}
