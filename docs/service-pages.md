# Part 5: Six Individual Astrology Service Pages

## Implemented routes
- `/services/kundli-analysis`
- `/services/marriage-relationship`
- `/services/career-guidance`
- `/services/numerology`
- `/services/vastu`
- `/services/muhurat`

Each page has the approved navy, gold and cream styling and uses a single reusable Next.js App Router template, populated from the six service-specific profiles in `src/config/service-profiles.ts`. Every profile has unique introductory text, an overview, six discussion topics, preparation notes, and at least four FAQs.

## Layout sections
1. Unique title, short description, themed SVG illustration and breadcrumbs.
2. Four highlights describing the manual consultation flow.
3. Service overview and responsible disclaimer.
4. Six discussion topics, without guaranteed benefits.
5. Four-step consultation process.
6. Information to prepare, plus an illustrative session outline (not a fake PDF report).
7. Fees and availability: enquiry-only until the actual offering is confirmed.
8. Service-specific FAQ.
9. Three related services.
10. Direct WhatsApp CTA.

## Booking
Every Book Consultation / Chat on WhatsApp CTA uses `getConsultationWhatsAppUrl(service.title)`, which targets **+91 7007962637** with the selected service in the prefilled message. Clicking does **not** confirm an appointment, create a booking record or charge money.

## Accuracy
The earlier sample Kundli mockup contained example prices, ratings, client counts, a mock report and unverified credentials. These were not copied into the product as real claims.

- No fake prices, testimonials, review scores, consultant credentials, PDF report deliverables or appointment availability.
- Individual pages are fully rendered and may be indexed; no longer generic noindex placeholders.
- No sensitive birth details are collected on-site.
- All consultation scope, fees and optional deliverables are clarified by WhatsApp.
- Astrology guidance is presented as interpretive and not a substitute for medical, legal, engineering or financial expertise.

## Validation
`tests/service-pages.test.mjs` checks six data-complete routes, unique content, FAQs, correct WhatsApp deep links and removal of placeholder code. Part 2 homepage test updated to match the now-complete pages. GitHub Actions validates lint, TypeScript, unit tests and production build.
