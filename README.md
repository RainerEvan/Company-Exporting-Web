# PT Nusantara Global Exports

A professional Next.js (App Router, TypeScript) website for an Indonesian exporter of:
- Frozen Yellowfin Tuna
- Marine Grade Meranti Plywood
- Coconut Shell Charcoal Briquettes

## Tech Stack
- Next.js 15 (App Router) + TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css`)
- i18n (English/Bahasa Indonesia) via lightweight context
- API route for contact (SendGrid optional)
- SEO: metadata, Open Graph, `sitemap.xml` and `robots.txt`
- Jest + Testing Library (sample tests)
- GitHub Actions CI (lint, build, test)

## Getting Started
1. Install dependencies
2. Run the dev server

\`\`\`
pnpm install
pnpm dev
\`\`\`

Open http://localhost:3000.

## Environment Variables
Copy `.env.local.example` to your environment:
- `NEXT_PUBLIC_SITE_URL` — site URL used for Open Graph, sitemap.
- `SENDGRID_API_KEY`, `SENDGRID_FROM_EMAIL`, `SENDGRID_TO_EMAIL` — optional; if set, contact form emails via SendGrid. If not set, submissions are stored in `data/contacts.json`.

## Deployment
- Click Publish in v0 or deploy to Vercel.
- Ensure env vars are set in Vercel project settings.
- CI workflow in `.github/workflows/ci.yml` runs lint/build/test.

## Scripts
- `pnpm dev` — start dev
- `pnpm build` — build
- `pnpm start` — start production
- `pnpm test` — run tests
- `pnpm lint` — lint
