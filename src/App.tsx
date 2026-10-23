import { useReveal } from './hooks/useReveal'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { BookingSite } from './sections/BookingSite'
import { WhatsApp } from './sections/WhatsApp'
import { HowItWorks } from './sections/HowItWorks'
import { Plans } from './sections/Plans'
import { Faq } from './sections/Faq'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'

export default function App() {
  useReveal()
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[60] rounded-full bg-ink-900 px-4 py-2 text-sm text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Features />
        <BookingSite />
        <WhatsApp />
        <HowItWorks />
        <Plans />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
