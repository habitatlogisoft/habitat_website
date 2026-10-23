import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, Phone } from 'lucide-react'
import { site } from '../config/site'
import { Container, Eyebrow, cx } from '../components/ui'

const FIELDS = [
  { name: 'name', label: 'Your name', type: 'text', autoComplete: 'name', required: true },
  { name: 'hotel_name', label: 'Hotel name', type: 'text', autoComplete: 'organization', required: true },
  { name: 'phone', label: 'Mobile', type: 'tel', autoComplete: 'tel', required: true },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email', required: false },
  { name: 'city', label: 'City', type: 'text', autoComplete: 'address-level2', required: false },
  { name: 'rooms', label: 'Number of rooms', type: 'number', autoComplete: 'off', required: false },
] as const

type FieldErrors = Partial<Record<string, string>>
type State = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent' } | { kind: 'error'; message: string }

const inputCls =
  'w-full rounded-xl bg-white px-4 py-3 text-[15px] text-ink-900 ring-1 ring-line outline-none transition placeholder:text-ink-300 focus:ring-2 focus:ring-gold-400'

/** Pulls `{ error: { message, fields } }` out of a Habitat API error response. */
function readError(body: unknown): { message: string; fields: FieldErrors } {
  const error = (body as { error?: { message?: unknown; fields?: unknown } } | null)?.error
  const fields: FieldErrors = {}
  if (error?.fields && typeof error.fields === 'object') {
    for (const [key, value] of Object.entries(error.fields as Record<string, unknown>)) {
      fields[key] = Array.isArray(value) ? String(value[0] ?? '') : String(value)
    }
  }
  return { message: typeof error?.message === 'string' ? error.message : '', fields }
}

/** Demo request: posted to the Habitat API, where it lands in the SaaS admin's "Demo requests". */
export function Contact() {
  const [state, setState] = useState<State>({ kind: 'idle' })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const get = (key: string) => String(data.get(key) ?? '').trim()
    const rooms = get('rooms')
    const payload = {
      name: get('name'),
      hotel_name: get('hotel_name'),
      phone: get('phone'),
      email: get('email'),
      city: get('city'),
      rooms: rooms ? Number(rooms) : null,
      message: get('message'),
      website: get('website'), // honeypot: hidden from people, filled by bots
    }

    setState({ kind: 'sending' })
    setFieldErrors({})
    try {
      const res = await fetch(`${site.apiUrl}/public/demo-requests/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        form.reset()
        setState({ kind: 'sent' })
        return
      }
      const { message, fields } = readError(await res.json().catch(() => null))
      setFieldErrors(fields)
      setState({
        kind: 'error',
        message:
          res.status === 429
            ? 'Too many requests from this network. Please try again in a little while.'
            : Object.keys(fields).length > 0
              ? 'Please check the highlighted fields.'
              : message || 'Something went wrong. Please try again.',
      })
    } catch {
      setState({ kind: 'error', message: 'Could not reach Habitat. Check your connection and try again.' })
    }
  }

  return (
    <section id="contact" className="bg-sand/60 py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
        <div data-reveal>
          <Eyebrow>Book a demo</Eyebrow>
          <h2 className="mt-3 font-display text-3xl leading-[1.12] font-medium tracking-tight text-balance text-ink-900 sm:text-[2.6rem]">
            See Habitat running on a hotel like yours
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Tell us a little about your property. We'll walk you through the front desk, the booking
            website and WhatsApp, and send you a quote.
          </p>
          <div className="mt-8 space-y-3">
            {site.contactEmail ? (
              <p className="flex items-center gap-3 text-[15px] text-ink-700">
                <Mail className="h-4 w-4 text-gold-600" aria-hidden />
                <a href={`mailto:${site.contactEmail}`} className="font-medium hover:underline">
                  {site.contactEmail}
                </a>
              </p>
            ) : null}
            {site.contactPhone ? (
              <p className="flex items-center gap-3 text-[15px] text-ink-700">
                <Phone className="h-4 w-4 text-gold-600" aria-hidden />
                <span className="font-medium">{site.contactPhone}</span>
              </p>
            ) : null}
          </div>
        </div>

        {state.kind === 'sent' ? (
          <div
            data-reveal
            className="flex flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-line"
            role="status"
          >
            <CheckCircle2 className="h-10 w-10 text-teal-600" aria-hidden />
            <h3 className="mt-4 font-display text-2xl text-ink-900">Thanks, we've got it</h3>
            <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-500">
              Someone from Habitat will call you on the number you gave to set up your demo.
            </p>
            <button
              type="button"
              onClick={() => setState({ kind: 'idle' })}
              className="mt-6 text-sm font-semibold text-ink-700 underline-offset-4 hover:underline"
            >
              Send another request
            </button>
          </div>
        ) : (
          <form data-reveal onSubmit={onSubmit} className="rounded-3xl bg-white p-6 ring-1 ring-line sm:p-8">
            {/* Honeypot: off-screen and skipped by keyboard and screen readers. */}
            <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input name="website" type="text" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {FIELDS.map((f) => {
                const error = fieldErrors[f.name]
                return (
                  <label key={f.name} className="block">
                    <span className="mb-1.5 block text-sm font-medium text-ink-700">
                      {f.label}
                      {f.required ? <span className="text-gold-600"> *</span> : null}
                    </span>
                    <input
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      required={f.required}
                      aria-invalid={error ? true : undefined}
                      {...(f.type === 'number' ? { min: 1, inputMode: 'numeric' as const } : {})}
                      className={cx(inputCls, error && 'ring-2 ring-red-400')}
                    />
                    {error ? <span className="mt-1 block text-xs text-red-600">{error}</span> : null}
                  </label>
                )
              })}
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-sm font-medium text-ink-700">Anything else?</span>
                <textarea name="message" rows={3} maxLength={2000} className={cx(inputCls, 'resize-y')} />
              </label>
            </div>
            <button
              type="submit"
              disabled={state.kind === 'sending'}
              className="mt-6 w-full rounded-full bg-ink-900 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-ink-700 disabled:cursor-wait disabled:opacity-70"
            >
              {state.kind === 'sending' ? 'Sending…' : 'Request a demo'}
            </button>
            <p
              className={cx('mt-3 text-center text-xs', state.kind === 'error' ? 'text-red-600' : 'text-ink-400')}
              role={state.kind === 'error' ? 'alert' : undefined}
            >
              {state.kind === 'error'
                ? state.message
                : "We'll only use these details to arrange your demo."}
            </p>
          </form>
        )}
      </Container>
    </section>
  )
}
