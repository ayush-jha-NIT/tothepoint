# Project architecture

## Principles
- Next.js App Router, React, TypeScript and Tailwind CSS v4.
- Use `src/app` for page routes, `src/components` for reusable UI, `src/config` for business details and `src/lib` for utilities.
- No database or payment gateway for the approved scope.
- Do not invent credentials, prices, reviews, testimonials or locations from illustrative designs.
- Booking is a WhatsApp redirect, not an onsite booking/payment/confirmation system.
- Contact form delivery is server-side only; Resend integration comes in Part 10 after DNS sender verification.
- Use environment variables for deployment-only settings and secrets; never use `NEXT_PUBLIC_` for private credentials.

## Routes planned
| Route | Stage |
|---|---|
| `/` | Part 2 |
| `/about` | Part 3 |
| `/services` | Part 4 |
| `/services/[slug]` | Part 5 |
| `/testimonials` | Part 7 |
| `/blog` | Part 8 |
| `/blog/[slug]` | Part 9 |
| `/contact` | Part 10 |
| `/privacy-policy` | Part 11 |
| `/terms-and-conditions` | Part 11 |
| `/refund-policy` | Part 11 |

## Business constants
- Client name: Tothepoint Astrology; astrologer: Hariom Shrivastava.
- Direct-booking WhatsApp phone: +91 7007962637.
- Contact form recipient: tothepointastrology@gmail.com.
- All other business data must be supplied and approved before publishing.

## Design source
The compressed visual reference mockups are included in the separate Part 0 ZIP. They are illustrative design references, not final client photos or verified content.
