# Part 10: Contact & Server-side Email

Routes: `/contact` and `POST /api/contact`.

## Features
- Responsive contact hero, email, WhatsApp and contact form.
- Required name, email, subject, message and explicit data-processing consent. Optional approved service. Honeypot field for basic bot filtering.
- Client shows validation, request-in-progress, API error and accepted-for-delivery status. API performs authoritative validation. Messages are not stored in a website database.
- Resend API called server-side with a verified sender, exact recipient from environment, and customer email in reply_to.
- Request size limit, JSON content enforcement, same-origin check when Origin header is present, server-side output normalization, no-store response.
- On missing credentials returns HTTP 503, on provider failure 502. Build and tests work without credentials; actual delivery does not.

## Deployment configuration (Vercel)
Configure **server-only** environment variables:
- `RESEND_API_KEY`: secret Resend API key.
- `CONTACT_FROM_EMAIL`: verified sender on a domain you own, e.g. `Tothepoint Astrology <contact@yourdomain.com>`.
- `CONTACT_TO_EMAIL=tothepointastrology@gmail.com`.

Verify the sending domain in Resend and update the From address accordingly. Never prefix the secret key with NEXT_PUBLIC_ or commit it.

## Operational limitations
- Successful Resend response means the provider accepted the message; it does not prove delivery to the recipient's inbox.
- Testing a real production email requires configured secrets, verified DNS and a manual end-to-end test.
- The honeypot and basic request guards are **not** complete distributed spam prevention. Add a trusted rate limiter or CAPTCHA before public launch if abusive traffic appears; serverless memory counters are not reliable.
- Do not include birth details, medical records, IDs or passwords in the contact message.
- The form is an enquiry, not a confirmed booking. WhatsApp flow remains unchanged.
