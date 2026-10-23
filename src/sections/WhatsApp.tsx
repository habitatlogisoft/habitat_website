import { BellRing, Bot, FileText, Headset } from 'lucide-react'
import { Container, SectionHeading } from '../components/ui'
import { WhatsAppMock } from '../components/mockups/WhatsAppMock'

const ITEMS = [
  {
    icon: BellRing,
    title: 'New-booking alerts for you',
    body: 'The moment a booking comes in, the owner and any numbers you choose get a WhatsApp alert.',
  },
  {
    icon: FileText,
    title: 'Confirmations with the invoice',
    body: 'Guests get their confirmation and GST invoice PDF on WhatsApp, a reminder the day before, and the bill at check-out.',
  },
  {
    icon: Bot,
    title: 'Guests can book in the chat',
    body: 'A booking assistant checks dates, quotes the price, holds the room and sends a payment link.',
  },
  {
    icon: Headset,
    title: 'Your staff take over anytime',
    body: 'When a guest needs a person, the conversation lands in your inbox and your team replies from the console.',
  },
]

export function WhatsApp() {
  return (
    <section id="whatsapp" className="relative overflow-hidden bg-ink-900 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute -right-40 -bottom-40 h-[32rem] w-[32rem] rounded-full bg-teal-600/20 blur-3xl"
        aria-hidden
      />
      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <SectionHeading
            tone="light"
            align="left"
            eyebrow="WhatsApp, built in"
            title="Where your guests already are"
            lead="Habitat connects to the official WhatsApp Business Platform, so messages come from a verified business number, not someone's personal phone."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ITEMS.map(({ icon: Icon, title, body }) => (
              <div key={title} data-reveal>
                <Icon className="h-5 w-5 text-gold-300" aria-hidden />
                <h3 className="mt-3 text-[15px] font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
        <div data-reveal>
          <WhatsAppMock />
        </div>
      </Container>
    </section>
  )
}
