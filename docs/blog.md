# Parts 8 and 9: Blog Listing and Individual MDX Articles

## Routes
- `/blog`: index, featured guide, topic category controls, free-text search and empty-result state.
- `/blog/[slug]`: six statically generated, service-related editorial articles with metadata, breadcrumbs, table of contents, links to related guides and WhatsApp consultation enquiry.

## Content system
No database or CMS was added. Content is **source-managed MDX** in `src/content/blog/*.mdx` and mapped through `src/content/blog/posts.ts`. Each article is accompanied by typed public metadata (title, excerpt, category, keywords, reading estimate and heading anchors) in `src/config/blog.ts`.

To add a post:
1. Create a trusted local .mdx file in `src/content/blog/`.
2. Add metadata with a unique URL-safe slug and accurate section headings in `src/config/blog.ts`.
3. Import its MDX component and register that slug in `src/content/blog/posts.ts`.
4. Run `npm run check` and review the generated page.

The MDX compiler executes code, so **never** compile untrusted visitors' input or remote text as MDX. Only commit reviewed files from trusted maintainers.

## Display and accessibility
- Search checks article title, description, category and keywords; category selection and search work together. `aria-pressed`, form labels, result counts, empty-state reset and visible focus support interaction.
- Unique visual treatments use local SVG artwork; no stock imagery, unlicensed photographs or fabricated portraits.
- Article navigation links use stable heading IDs derived from the exact MDX headings. Each guide has distinct content, related posts and an enquiry CTA.
- The global navy/gold/cream design system and mobile header/footer remain unchanged.

## Editorial considerations
The initial six articles are introductory educational material, **not** guarantees, certified professional advice, medical recommendations or claims about the astrologer's credentials. No reviews or invented success metrics are inserted.

The articles are authored as website copy for this implementation and should be approved by the client before promoting them. No fake individual author names or historical publication dates were added. Detailed structured data and canonical-domain policy are scheduled for Part 12 after a domain is confirmed.

## SEO
Listing and article routes have titles, descriptions, Open Graph metadata and static prerendering of known article URLs. Unknown slugs produce 404 and cannot render arbitrary remote content.

## Development validation
`tests/blog.test.mjs` covers content coverage, search behavior, category filtering, slug resolution, article mapping, section IDs and route wiring.

Dependencies use the official `@next/mdx` plugin, `@mdx-js/react`, `@mdx-js/loader` and MDX types. GitHub CI validates package installation, lint, TypeScript, tests and production build.
