# Screenshot-reference Homepage Redesign

The homepage was redesigned to closely follow the structure and visual direction of the user-provided About-page screenshot: **navy cosmic backdrop, gold serif text, cream value bands, personal-story section, four reasons, connected four-step process, knowledge cards and an illustrated closing call to action**.

## Structure
1. Split hero: "About Hariom Shrivastava", gold celestial illustration, WhatsApp and Explore Services CTAs.
2. Four-value cream strip with centered gold icons and dividers.
3. Dark "My Journey" section: a decorative stand-in for the portrait, two paragraphs and three truth-based fact cards.
4. Four evenly spaced "Why Choose Tothepoint Astrology?" cream cards.
5. Dark "My Approach" section with connected gold circular four-step process.
6. Cream "Knowledge & Practice" section, four icon columns and links to all six services.
7. Dark mountain-horizon CTA matching the reference footer transition.

The shared header and footer were tightened and styled after the reference (quick links, six services, contact column and policies). The mobile navigation and links remain functional.

## Image integrity
The screenshot includes a person, but it was supplied as a **layout reference** without an independent full-resolution portrait or confirmation that the depicted likeness is the actual astrologer. Accordingly, the live site uses existing, self-contained celestial illustrations and a monogram stand-in. Replacing it with a high-resolution, authorized portrait is an explicit outstanding business asset requirement. The site does not present generated imagery as the real person.

The screenshot also displayed unverified experience counts, client counts and location. They are intentionally **not copied**. The actual known service count of six is shown without extrapolated credentials, ratings or results.

## Responsive design
New page-specific CSS in `src/app/homepage.css` uses mobile-first layouts, two-column text/image arrangement, responsive value/reason grids, and decorative imagery clipped to avoid horizontal overflow. Decorative content is hidden from assistive technology. Important headings, calls to action and footer destinations remain real HTML, not text baked into an image.

## Booking/SEO
WhatsApp routes to the confirmed number **+91 7007962637**. The six consultation pages remain accessible in homepage services links and the footer. Canonical metadata stays in place. The production website will redeploy automatically from `main` after GitHub push.

## Validation
`tests/homepage.test.mjs` verifies reference section order and absence of unverified claims. `tests/booking-integration.test.mjs` checks the retained WhatsApp flow. Existing CI includes ESLint, TypeScript, unit tests, production build, Chromium responsive E2E and automated axe accessibility checks.
