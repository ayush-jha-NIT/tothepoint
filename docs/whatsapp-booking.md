# Part 6: Direct WhatsApp Consultation Booking

## Confirmed destination
All Book Consultation and equivalent WhatsApp enquiry buttons open:

`https://wa.me/917007962637?text=<URL-encoded enquiry>`

The number is the international form of **+91 7007962637**, stored in `siteConfig.whatsappNumber`. Service-specific CTAs insert their approved service title in the prefilled message. No personal birth details are inserted into that message.

## Shared implementation
- `src/lib/whatsapp.ts`: generates correctly encoded WhatsApp URLs; optional service names are normalized. `getConsultationWhatsAppUrlForSlug` resolves user-controlled query slugs only from the approved list.
- `src/components/booking/whatsapp-booking-link.tsx`: reusable CTA for the header, mobile menu, footer, homepage, About, Services, service details, and unfinished pages. It uses `ActionLink`, which opens HTTPS links in a new tab with `rel="noopener noreferrer"`.
- `/book-consultation`: legacy direct URL redirects to WhatsApp. Optionally accepts `?service=kundli-analysis` or one of the other five valid service slugs.
- `/booking`: legacy URL redirects to the generic WhatsApp enquiry.
- There is **no** automatic booking confirmation, date/time selection, payment gateway or booking database. Unrecognized legacy service slugs fall back to the generic text rather than being copied into a message.

## Enquiry lifecycle
1. The visitor clicks a button or legacy booking URL.
2. WhatsApp opens with a prefilled message to the approved number.
3. The visitor **must manually send** the message.
4. The client then confirms consultation timing, format, price and scope.
5. No page or email claims that a consultation was reserved simply because the button was clicked.

## Not part of Part 6
The Contact form will send email to `tothepointastrology@gmail.com` using a server-side Resend integration in **Part 10**. This step does not activate email delivery.

## Testing
Unit tests verify the number, URL encoding, service titles, service slug validation and blank/unknown values. Source regression tests verify that consultation CTAs across all implemented sections use the shared component and that legacy URLs redirect without a confirmation page. The standard workflow checks lint, TypeScript, tests and production build.
