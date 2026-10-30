# Part 4: Services Overview Page

Dedicated route: `/services`. It replaces the generic placeholder without affecting the future-service placeholders at `/services/[slug]` (Part 5).

## Sections
1. Breadcrumb hero with celestial art, service introduction, two functioning CTAs.
2. Cream feature bar introducing four consultation characteristics.
3. Six large service cards, each with a unique, locally authored SVG illustration, brief explanation, topic tags, links to its specific service route, and a WhatsApp CTA with its service title in the message.
4. Four-step How It Works booking flow.
5. Why Explore Our Services: four informational panels.
6. Honest client-feedback placeholder, pending real approved testimonials.
7. FAQ section using native, accessible disclosure elements.
8. Final call-to-action.

## Content fidelity
- Name, six service categories, WhatsApp number and contact email use confirmed shared configuration.
- No guessed prices, ratings, photos, credentials, experience counts, reviews, specific appointment dates or availability.
- Clicking Book Consultation opens WhatsApp. It **does not** make or confirm an appointment.
- Service details and booking are confirmed manually.
- All detail pages remain temporary noindex placeholders until Part 5.
- Contact and testimonials pages remain temporary until Parts 10 and 7.

## Testing
`tests/services-overview.test.mjs` validates service coverage, direct WhatsApp booking, structural sections, links and non-fabrication.
CI runs ESLint, TypeScript, unit tests and Next.js build.
