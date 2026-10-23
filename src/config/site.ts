/**
 * Everything that changes per deployment, read from `VITE_*` variables (see `.env.example`).
 * An empty value hides or downgrades the thing that needs it instead of linking nowhere.
 */
const env = import.meta.env as unknown as Record<string, string | undefined>

const clean = (value: string | undefined): string => (value ?? '').trim()

export const site = {
  /** Habitat API base, ending in `/api/v1`. The demo form posts to `<apiUrl>/public/demo-requests/`. */
  apiUrl: (clean(env.VITE_API_URL) || 'https://api.habitat-api.com/api/v1').replace(/\/+$/, ''),
  /** The owner console: "Get started" and "Sign in". Empty → those buttons scroll to the form. */
  portalUrl: clean(env.VITE_PORTAL_URL),
  /** A live hotel booking site built on Habitat, shown as an example. */
  guestDemoUrl: clean(env.VITE_GUEST_DEMO_URL) || 'https://app.habitat-api.com',
  contactEmail: clean(env.VITE_CONTACT_EMAIL),
  contactPhone: clean(env.VITE_CONTACT_PHONE),
} as const

export const nav = [
  { href: '#features', label: 'Features' },
  { href: '#booking-site', label: 'Booking website' },
  { href: '#whatsapp', label: 'WhatsApp' },
  { href: '#how', label: 'How it works' },
  { href: '#plans', label: 'Plans' },
  { href: '#faq', label: 'FAQ' },
] as const
