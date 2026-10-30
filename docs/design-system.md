# Part 1: Global design system

Approved visual direction: **navy, antique gold, cream**, refined serif headlines, understated celestial ornament, and readable modern UI text.

## Tokens
| Token | Value | Role |
|---|---|---|
| `--navy-deep` | `#020d1b` | Page/background |
| `--navy` | `#061427` | Main sections |
| `--navy-soft` | `#0c2037` | Raised sections |
| `--navy-elevated` | `#11283e` | Cards |
| `--gold` | `#e8b664` | Primary CTA |
| `--gold-light` | `#f8d99d` | Hover and highlighted text |
| `--cream` | `#f8f0e4` | Main foreground |
| `--muted` | `#b5bdc9` | Supporting text |

## Components
- `SiteHeader` and `SiteFooter`: global brand shell, functional desktop/mobile navigation, selected page indication, and verified contact details.
- `BrandMark`: CSS/inline SVG brand illustration, not a client-approved trademark.
- `Container`: consistent responsive widths and horizontal gutters.
- `ActionLink`: accessible internal links and external WhatsApp/mail links, primary/outline/ghost variants.
- `SurfaceCard` / `FeatureCard`: reusable panel and informational card layouts.
- `SectionHeading`: section typography and optional action slot.
- `CelestialArt`: lightweight, decorative SVG motif with no external image dependencies.
- `Icon`: compact local icon set with no added icon-library dependency.

## Accessibility and interactions
- Focus-visible styles, a skip-to-content link, landmark elements, accessible menu labels, and `aria-expanded`.
- Escape closes the mobile navigation. Menu links close the panel after navigation.
- Reduced-motion styles respect system preferences.
- Buttons and navigation use 44px+ touch targets.
- Future-page links lead to `noindex` placeholder pages instead of dead URLs.

## Scope guard
The Part 1 homepage is an explicit temporary showcase. Part 2 will replace it with the previously approved homepage visual design. No fabricated ratings, claims, location, social URLs, or photographs have been added. The booking CTA always uses the confirmed WhatsApp number. The contact email is shown in the footer; the form will be built in Part 10.
