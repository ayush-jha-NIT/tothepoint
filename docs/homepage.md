# Part 2: Homepage implementation

The homepage replaces the Part 1 component showcase, following the **approved Tothepoint Astrology homepage mockup**.

## Page sections
1. Immersive navy-and-gold hero with circular celestial art, personal-guidance messaging and WhatsApp booking.
2. Six responsive service preview cards with service detail links and direct, service-specific WhatsApp CTAs.
3. About Hariom Shrivastava and consultation values.
4. Three-step consultation process, correctly describing the WhatsApp workflow.
5. Testimonials section with a transparent awaiting-verification placeholder, **not invented reviews**.
6. Native HTML FAQ accordions, covering booking, pricing, necessary details, consultation formats and limitations.
7. Closing call-to-action.

The global Part 1 site header and footer remain unchanged.

## Verified and unverified information
- Confirmed: business name, astrologer's name, service categories, booking WhatsApp (+91 7007962637), contact email.
- NOT confirmed: actual portrait, identity-specific imagery, client experience, credentials, qualifications, service prices, business address, operating hours, reviews, ratings or social profiles.
- Consequently the hero and about panel use an **abstract celestial illustration**, not a fictional portrayal of the astrologer.
- Testimonials are deliberately not fabricated. The placeholder is replaced in Part 7 upon receiving real, approved testimonials.

## Service detail destinations
Part 2 introduces six temporary `/services/[slug]` pages so every homepage service card works. The pages are `noindex` and will be replaced in Part 5.

## Booking
Every Book Consultation CTA uses `getConsultationWhatsAppUrl()`. Service cards pass their selected service title so the prefilled WhatsApp message identifies the enquiry.

## Accessibility and performance
- Server-rendered homepage and FAQ; no unnecessary client JS.
- Native disclosure elements, accessible headings, descriptive links.
- Decorative SVGs use aria-hidden, and no external or fabricated photographs are downloaded.
- Responsive service grid (1/2/3/6-column layout at breakpoints).
