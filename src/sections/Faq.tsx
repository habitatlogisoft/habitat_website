import { ChevronDown } from 'lucide-react'
import { Container, SectionHeading } from '../components/ui'

const FAQS = [
  {
    q: 'Do I need my own website?',
    a: 'No. Every property gets a booking website on Habitat with its own link. If you already have a website, link its "Book now" button to it.',
  },
  {
    q: 'How do guests pay?',
    a: 'Online through Razorpay (UPI, cards, net banking), either an advance or the full amount, or at the hotel by cash, card or bank transfer. You choose which options each property offers.',
  },
  {
    q: 'Does it handle GST?',
    a: 'Yes. Taxes are calculated for each stay and every booking gets a GST invoice with your business details and GSTIN.',
  },
  {
    q: 'Can I manage more than one hotel?',
    a: 'Yes. One business account holds all your properties, each with its own rooms, rates, policies, staff access and booking website.',
  },
  {
    q: 'Can my staff only see what they need?',
    a: 'Yes. Create roles for managers, front desk or accounts and pick exactly what each can do. Every change is recorded in an audit trail.',
  },
  {
    q: 'What does WhatsApp need from me?',
    a: 'New-booking alerts work on every plan. To message guests from your own number, you need a WhatsApp Business number on the Premium plan; we help you connect it.',
  },
  {
    q: 'Do I need to install anything?',
    a: 'No. Habitat runs in a web browser on any computer, tablet or phone.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Questions hoteliers ask us" />
        <div className="mt-12 divide-y divide-line rounded-3xl bg-white ring-1 ring-line">
          {FAQS.map(({ q, a }) => (
            <details key={q} className="group px-6 py-5 sm:px-8" data-reveal>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-ink-900 [&::-webkit-details-marker]:hidden">
                {q}
                <ChevronDown className="h-4 w-4 shrink-0 text-ink-400 transition group-open:rotate-180" aria-hidden />
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
