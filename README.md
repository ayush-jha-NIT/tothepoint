# Tothepoint Astrology

**Part 0: Project foundation** for the website of Hariom Shrivastava. The premium navy, gold and cream website designs will be implemented in subsequent parts.

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

The GitHub Actions workflow uses `npm ci` when a lockfile is present, or `npm install` for the first online install. **Before publishing**, run `npm install` and commit the generated `package-lock.json` for reproducible builds. The starter was assembled without npm registry access, so dependency installation and a production build have not yet been verified.

## Current scope
- Confirmed booking WhatsApp: **+91 7007962637**. All booking CTAs open WhatsApp.
- Confirmed form recipient: **tothepointastrology@gmail.com**. Form delivery will be implemented in Part 10.
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
