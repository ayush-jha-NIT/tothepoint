# Part 7: Testimonials & Feedback Page

## Route and content policy
- Dedicated `/testimonials` route.
- The old catch-all placeholder has been removed.
- As of Part 7, **no reviews or videos have been provided and verified**. We do not invent ratings, reviewers, client counts, quotations, photos or endorsements.
- Page metadata uses `noindex` while there are no approved reviews/videos. It becomes indexable when authorized public records are added.

## Sections
1. Celestial hero, breadcrumbs, WhatsApp consultation CTA and link to the feedback section.
2. Publication and trust principles strip.
3. Interactive review category filter: All, Kundli, Relationships, Career, Numerology, Vastu, Muhurat.
4. Review cards are rendered only for approved, consented records; empty states are intentionally visible for now.
5. Video testimonial section plays approved locally hosted videos only, if available, and otherwise shows an honest empty state.
6. Feedback form with optional display name, service, rating, written feedback and **optional** explicit publication consent.
7. Closing consultation CTA.

## Review submission limitations
The form in Part 7 **prepares a mailto email**, addressed to **tothepointastrology@gmail.com**. It does not actually transmit a message from the website; the visitor must press **Send** in their email app. The UI states this clearly. No data is saved or auto-published.

Part 10 will implement server-side contact-form email via Resend. Review submissions are kept as draft-email handoff for this phase; replacing the form with server delivery would require explicit implementation and testing. Avoid misleading success messages.

## Publishing authentic content later
- Populate `src/config/testimonials.ts` `approvedReviews` only after verifying authenticity and obtaining permission for the review and display name.
- Add approved video files under `public/videos/` and reference their local paths. Do not add third-party videos without permission.
- Only consented, approved content can appear.
- Do not add structured Review or AggregateRating schema unless a genuine eligible source and appropriate schema requirements are met.

## Validation
`tests/testimonials.test.mjs` covers route/placeholder replacement, empty data, category filtering, consent gating, video path restrictions, email generation, input validation and client interactions.

CI: lint, TypeScript, unit tests and production build. The full website remains under staged development.
