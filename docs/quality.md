# Part 13: Quality, Accessibility, Responsive & Performance Checks

## Automated checks
CI on main/PR:
1. npm install / npm ci
2. ESLint
3. TypeScript typecheck
4. Node.js unit tests, including Part 12 SEO tests
5. Next.js production build
6. Chromium install via Playwright
7. Browser tests against the running production build
8. Artifact upload on failure (trace, screenshot, HTML report)

`e2e/site.spec.ts` exercises:
- Route rendering and horizontal overflow at 360px, 768px and 1440px, across primary, detail and legal pages.
- Mobile menu opening, Escape dismissal and navigation.
- Blog search, category filter and clear action.
- Invalid contact form response, without sending real email.
- robots noindex on draft and unverified testimonial pages.
- robots and sitemap safety when canonical URL is absent.
- Axe WCAG automated scans for serious/critical accessibility violations on five important routes.
- Lightweight homepage transfer budget (3MB of declared content lengths) and no external web fonts.

**Important limits**: A test can detect many issues but does not replace manual screen reader checks, real devices, keyboard tab sweeps, cross-browser checks, or lab/field Core Web Vitals. No unmeasured Lighthouse score or production performance guarantee is claimed.

## Local
Run `npm install`, `npm run build`, `npx playwright install chromium`, then `npm run test:e2e`. Chromium browser tests start `npm run start` locally.

Failures should be resolved before marking Part 13 complete. These tests deliberately avoid contacting external WhatsApp, charging customers, or sending real Resend emails.

## Still required for Part 14
- Verify final domain and HTTPS.
- Configure Resend keys and verified sender and smoke-test actual message delivery.
- Obtain genuine client photography, approved business copy and legal policies.
- Confirm analytics/tracking consent requirements if integrating analytics.
- Run actual-device and Lighthouse testing on the final public production URL.
