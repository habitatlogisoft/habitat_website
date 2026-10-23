import { Container, SectionHeading } from '../components/ui'

const STEPS = [
  {
    title: 'Set up your property',
    body: 'A guided setup walks you through your business details, rooms, photos, policies and how you take payment.',
  },
  {
    title: 'We verify it',
    body: 'Upload your GST or PAN documents. The Habitat team checks them so guests know they are booking a real hotel.',
  },
  {
    title: 'Go live and take bookings',
    body: 'Your booking website switches on. Share the link, and run the desk from the same console from day one.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="bg-sand/60 py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From sign-up to your first direct booking"
          lead="No installation and no hardware. Habitat runs in the browser, on the desk computer or your phone."
        />
        <ol className="mt-16 grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <li key={step.title} data-reveal className="relative rounded-3xl bg-white p-7 ring-1 ring-line">
              <span className="font-display text-5xl font-medium text-gold-400">{i + 1}</span>
              <h3 className="mt-4 text-lg font-semibold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-500">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
