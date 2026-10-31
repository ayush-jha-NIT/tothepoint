# Part 3: About Page

Route: `/about`.

## Sections delivered
1. Hero: About Hariom Shrivastava, breadcrumbs, WhatsApp booking and services CTA.
2. Four-value strip on a cream background.
3. Brand perspective and consultation philosophy, with a visual instead of an unverified portrait.
4. Four "Why Tothepoint Astrology?" cards.
5. Four-step consultation approach.
6. Six service disciplines linked to future individual service pages.
7. Final WhatsApp consultation banner.

## Content integrity
The About concept mockup included an AI-generated depiction of the astrologer, numerical experience/client claims and unverified credentials. Those elements were **not** used as factual production material.

The page contains:
- The confirmed astrologer name: Hariom Shrivastava.
- Known service categories.
- A neutral decorative monogram/astrology illustration pending an approved photograph.
- Descriptions of service topics and the manual WhatsApp booking process.
- No invented endorsements, qualifications, office address, client counts, success rates or years of practice.

## Implementation
- Next.js server-rendered page and route-specific SEO metadata.
- Reuses Part 1 navigation, container, icon, celestial art and ActionLink components.
- Responsive layouts across mobile/tablet/desktop.
- Direct Book Consultation WhatsApp link through the shared utility (+91 7007962637).
- Real individual service pages are scheduled for Part 5; current links use temporary valid service preview routes.

## Before public marketing launch
- Supply and approve actual profile portrait, factual biography and verified qualifications.
- If education or experience details are provided, add a separate factual credentials section.
- Verify all service descriptions and business claims with the client.

## Approved About Hero Replacement

The About page now uses the exact user-supplied image at `public/images/about-hero.png`. The image is stored in GitHub, rather than existing only as an AI-generated chat attachment. The original illustration remains below the hero in the historical "Our Story" section.

The image itself contains decorative text, which is masked under a navy gradient on desktop so the readable and keyboard-accessible heading, consultation CTA and services link are real HTML. On mobile the copy flows above the image; the image focuses on the person and wheel to avoid duplicated text. The hero remains viewport-aware below the sticky header.

The image is loaded by `next/image` with `priority` and responsive sizing, with no remote runtime dependency. The temporary import workflow used to transfer the approved PNG was removed after the asset was committed.
