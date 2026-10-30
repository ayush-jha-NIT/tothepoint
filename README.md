# Tothepoint Astrology

Website of Hariom Shrivastava, implemented in phased releases. Parts 0–7 cover the Next.js foundation, shared design system, homepage, About page, Services overview, six service detail pages, standardized WhatsApp booking and the Testimonials page.

## Stack
- Next.js 16 (App Router)
- React 19, TypeScript, Tailwind CSS 4
- ESLint + Next.js rules, Node.js 22
- GitHub Actions CI, Vercel-compatible deployment

## Local development
1. Install **Node.js 22**.
2. Run `npm install` once while connected to the internet. This generates `package-lock.json`; **commit that lockfile**.
3. Copy `.env.example` to `.env.local` and complete variables when relevant.
4. Run `npm run dev`. Open http://localhost:3000.

## Quality checks
```bash
npm run lint
npm run typecheck
npm test
npm run build
```

The GitHub Actions workflow uses `npm ci` when a lockfile is present, or `npm install` for the first online install. **Before publishing**, run `npm install` and commit the generated `package-lock.json` for reproducible builds. Builds and tests are verified through GitHub Actions after each development part.

## Current scope
- Confirmed booking WhatsApp: **+91 7007962637**. All booking CTAs open WhatsApp with a prefilled enquiry. The legacy `/booking` and `/book-consultation` routes redirect there. See `docs/whatsapp-booking.md`.
- Confirmed form recipient: **tothepointastrology@gmail.com**. Form delivery will be implemented in Part 10.
- Part 7 Testimonials: category-filtered reviews and video section, initially empty until authentic, consented content is verified. The feedback form prepares an email for the visitor to send manually. See `docs/testimonials.md`.
- No payment gateway, booking database or automatic booking confirmation.

## Folder map
```text
src/
  app/             App Router routes and globals.css
  components/      Shared components (Part 1+)
  config/site.ts   Approved business facts and services
  lib/whatsapp.ts  WhatsApp deep link builder
  types/           Shared type declarations
tests/             Dependency-free unit tests
docs/              Architecture and launch checklist
.github/workflows/ci.yml  CI checks
```

Design mockup reference images are supplied separately in the original Part 0 ZIP and have intentionally not been committed as binary files. The repository contains the website source and implementation foundation.

Do not treat sample prices, reviews, contact locations, photos, certificates, experience claims or booking IDs in mockups as verified business facts.
