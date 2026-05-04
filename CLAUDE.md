# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (a `pnpm-lock.yaml` is committed; a `package-lock.json` is also present but pnpm is the source of truth).

```bash
pnpm dev      # Next.js dev server at http://localhost:3000
pnpm build    # Production build
pnpm start    # Run production build
pnpm lint     # eslint .
```

There is no test runner configured.

`next.config.mjs` sets `typescript.ignoreBuildErrors: true` and `images.unoptimized: true` — TypeScript errors will not fail the build, so run `pnpm lint` and visually verify changes when editing TS.

## Required environment

Copy `.env.example` to `.env`. The app will not function without:

- `STRIPE_SECRET_KEY` / `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — Stripe checkout
- `NEXT_PUBLIC_APP_URL` — used to build Stripe `success_url` / `cancel_url` (must be the publicly reachable origin, no trailing slash needed; the code strips it)
- `EMAIL_USER` / `EMAIL_PASSWORD` / `EMAIL_FROM` — Gmail SMTP for the post-purchase confirmation email (see `lib/email.ts`)

## Architecture

Spanish-language Next.js 16 (App Router) + React 19 landing page for **BatchFit**, a one-time-purchase ("founder access") product sold via Stripe Checkout. The site is a single landing page plus a checkout funnel.

### Page topology

- `app/page.tsx` — landing page composed of section components from `components/landing/*`. Each section is wrapped in a `<section data-section="...">` so `lib/analytics.ts` can observe section visibility.
- `app/checkout/page.tsx` — assembles cards from `components/checkout/*` and triggers Stripe via the API route below.
- `app/payment_success/page.tsx` — post-Stripe redirect; reads `stripe_session_id` from `sessionStorage` and POSTs it to `record-purchase`.
- `app/waitlist/`, `app/pricing/`, `app/aviso-legal/`, `app/cookies/`, `app/privacidad/` — secondary/legal pages.

### API routes (`app/api/`)

- `checkout/create-session/route.ts` — creates a Stripe Checkout Session using `lib/stripe.ts` (`PRODUCT_CONFIG` defines name/price/currency in one place; price is in cents). Returns `{ url, sessionId }`. The frontend stores `sessionId` in `sessionStorage` before the redirect.
- `checkout/record-purchase/route.ts` — called from the success page; verifies the session is `paid`, extracts the `nombre_completo` custom field + customer email, and triggers `sendPurchaseConfirmation` from `lib/email.ts`. Email failures are logged but do not fail the request. There is a `// TODO: Send to Google Sheets` — purchase persistence is not yet implemented.
- `send-manual-email/route.ts` — manual trigger for the same confirmation email.

### CTA system

CTAs across the landing page are centralized in `lib/cta-config.ts` + `lib/cta-context.tsx`. The `<CTAProvider mode="..." single={true|false}>` in `app/layout.tsx` selects which preset (`default` / `pricing` / `ebook` / `waitlist`) is exposed via the `useCTA()` hook to all sections. **To switch the funnel-wide call to action, change the `mode` prop in `app/layout.tsx` rather than editing individual sections.** Currently `mode="pricing"` routes the primary CTA to `/checkout`.

### Analytics

`lib/analytics.ts` is the single source of truth for tracking. It mirrors every event into both **GA4** (`G-TY6H1011EB`) and **Meta Pixel** (`915438308012120`); the IDs are hardcoded in `lib/analytics.ts` and injected via `<Script>` tags in `app/layout.tsx`.

- Use `trackEvent`, `trackCtaClick`, `trackLeadSubmit` rather than calling `gtag`/`fbq` directly.
- `initLandingPageTracking()` (mounted by `components/landing-page-tracking.tsx`) wires up scroll-depth thresholds (25/50/75/100%) and an IntersectionObserver that emits `section_view` and `section_time` events for every `[data-section]` element. **New landing-page sections must set `data-section="..."` to be tracked.**

### Styling

- Tailwind v4 (CSS-based config in `app/globals.css` via `@import 'tailwindcss'` and `@theme`/CSS variables — there is no `tailwind.config.*`).
- shadcn/ui ("new-york" style) under `components/ui/`. Aliases (`@/components`, `@/lib`, `@/hooks`, `@/components/ui`) are defined in both `tsconfig.json` and `components.json`.
- Three Google Fonts (`Barlow_Semi_Condensed`, `Geist`, `Space_Mono`) loaded via `next/font/google` in `app/layout.tsx`. `Bebas Neue` is **self-hosted** from `/public/bebas-neue-v16-latin-regular.woff2` for performance — referenced as `--font-title` in `globals.css`.

### Performance notes

`app/layout.tsx` and `components/performance-optimizer.tsx` contain hand-tuned LCP/FCP optimizations: DNS prefetch, preconnect, preload of the hero image and self-hosted font, and `lazyOnload` for the GA/Meta scripts. When adding above-the-fold images, prefer `priority` on `<Image>` and add a `<link rel="preload">` in the layout `<head>`. Hero imagery is served as `.webp`.

## Conventions

- All copy is in **Spanish**; `<html lang="es">`.
- The Stripe price (`PRODUCT_CONFIG.price` in `lib/stripe.ts`) is in **cents**. Keep it in sync with the price displayed in `components/checkout/checkout-form-card.tsx` and in `trackEvent('begin_checkout', ...)` calls.
- Logs use the `[BatchFit] ...` prefix; analytics use `[Analytics] ...`. Match these prefixes for new logging.
- Path alias `@/*` resolves to the repo root.
