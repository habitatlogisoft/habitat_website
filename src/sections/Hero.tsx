import { BadgeIndianRupee, BellRing, MessageCircle, ReceiptText, ShieldCheck } from 'lucide-react'
import { site } from '../config/site'
import { ButtonLink, Container, startHref } from '../components/ui'
import { RoomBoardMock } from '../components/mockups/RoomBoardMock'

const PROOF = [
  { icon: ReceiptText, label: 'GST invoices, built in' },
  { icon: BadgeIndianRupee, label: 'Razorpay & pay at hotel' },
  { icon: MessageCircle, label: 'WhatsApp updates' },
  { icon: ShieldCheck, label: 'Role-based staff access' },
]

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft warm light behind the product, echoing the Gateway mark's gold. */}
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-60 left-[-15%] h-[28rem] w-[28rem] rounded-full bg-teal-100/60 blur-3xl"
        aria-hidden
      />

      <Container className="relative grid items-center gap-14 pt-12 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div data-reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-ink-600 ring-1 ring-line">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Hotel software made for India
          </p>
          <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] font-medium tracking-tight text-balance text-ink-900 sm:text-6xl">
            Run your hotel. <span className="text-gold-600 italic">Own</span> your bookings.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-ink-500">
            Habitat runs the front desk, rooms, rates and payments, and gives your property its own
            booking website. Guests book direct, pay online, and get their GST invoice on WhatsApp.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={startHref} arrow>
              Book a free demo
            </ButtonLink>
            <ButtonLink href={site.guestDemoUrl} variant="secondary" external>
              See a live booking site
            </ButtonLink>
          </div>
          <ul className="mt-10 grid max-w-lg grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {PROOF.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-medium text-ink-600">
                <Icon className="h-4 w-4 shrink-0 text-teal-600" aria-hidden />
                {label}
              </li>
            ))}
          </ul>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <RoomBoardMock />
          {/* A booking landing while the desk works — small enough to leave the board readable. */}
          <div
            className="animate-float absolute -bottom-8 -left-3 hidden w-64 items-start gap-3 rounded-2xl bg-white p-3.5 shadow-[0_20px_50px_-20px_rgba(11,20,36,0.5)] ring-1 ring-ink-900/10 sm:flex lg:-left-10"
            aria-hidden
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gold-50 text-gold-600 ring-1 ring-gold-100">
              <BellRing className="h-4 w-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[13px] font-semibold text-ink-900">New direct booking</span>
              <span className="block text-[11.5px] leading-snug text-ink-500">
                Deluxe Sea View · 2 nights · ₹8,400 paid online
              </span>
              <span className="mt-1 block text-[10.5px] font-medium text-teal-700">
                Invoice sent on WhatsApp
              </span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  )
}
