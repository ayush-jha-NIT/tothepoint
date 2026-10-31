# Part 11: Legal Page Drafts

Routes: `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`.

Each route includes breadcrumbs, an anchor-linked section navigation, accessible headings, email contact information and prominent **DRAFT – NOT YET APPROVED** notice. The copy is source-controlled in `src/config/legal.ts` and intentionally uses `robots: { index: false, follow: true }`.

## Content
- Privacy: actual contact form inputs, processing purpose, Resend email routing, hosting, WhatsApp handoff, data rights and as-yet-unconfirmed retention practices.
- Terms: interpretive scope, manual WhatsApp booking, lack of online payments, no guaranteed outcomes, and need to confirm booking conditions in writing.
- Refund: information to request before paying, customer support email and explicit absence of confirmed percentages, windows or refund promises.

## Required before legal approval
- Confirm the operator's full registered legal identity and business address, if disclosure is legally required.
- Confirm controller contact details, providers, actual retention/deletion process, complaint and data-rights handling.
- Confirm cancellation deadlines, non-refundable fees if lawful, partial services, missed appointments, refund timelines and payment methods.
- Obtain local professional review for applicable consumer, privacy and online-commerce obligations.
- Remove the draft warning and noindex only after client and legal approval.

No legal policy is claimed to be approved merely because the route renders and CI passes.
