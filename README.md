# Habitat website

The public marketing site for Habitat: what the product does, the hotel booking website, WhatsApp,
plans, FAQ and a demo-request form. React 19 + Vite + TypeScript + Tailwind CSS v4.

The demo form posts to the Habitat API (`POST /api/v1/public/demo-requests/`); requests show up in
the SaaS admin console under **Sales → Demo requests**.

## Run

```bash
npm install
npm run dev        # http://localhost:7010
npm run build      # static files in dist/
npm run preview    # serve dist/ on :7010
```

## Configure

Copy `.env.example` to `.env.local` and fill in:

| Variable | What it does | If empty |
|---|---|---|
| `VITE_API_URL` | Habitat API base (ends in `/api/v1`) the demo form posts to | `https://api.habitat-api.com/api/v1` |
| `VITE_PORTAL_URL` | "Sign in" and "Book a demo" go to the owner console | Buttons scroll to the demo form; "Sign in" is hidden |
| `VITE_GUEST_DEMO_URL` | "See a live booking site" | `https://app.habitat-api.com` |
| `VITE_CONTACT_EMAIL` | Sales email shown next to the form | Hidden |
| `VITE_CONTACT_PHONE` | Shown next to the form | Hidden |

## Layout

- `src/sections/`: one file per page section, in page order in `App.tsx`.
- `src/components/mockups/`: the product illustrations (room board, booking site, WhatsApp), drawn
  in HTML with sample data, so no screenshots need updating.
- `src/config/site.ts`: environment values and the nav.
- Copy lives in each section file. Keep claims to features the product actually has.

## Deploy

`dist/` is plain static files: any static host works (nginx, Azure Static Web Apps, S3 + CDN).
It is a single page with `#anchor` navigation, so no rewrite rules are needed.

The API must allow this site's origin: add it to the backend's `CORS_ALLOWED_ORIGINS`
(e.g. `https://habitat-api.com`), or the browser blocks the form's request.
