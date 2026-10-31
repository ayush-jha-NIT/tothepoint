import { blogPosts } from "../config/blog.ts";
import { servicePreviews } from "../config/home.ts";
import { approvedReviews, approvedVideoReviews, getPublicVideoReviews } from "../config/testimonials.ts";
import { siteConfig } from "../config/site.ts";

/** One canonical, explicitly configured public URL. Never publish localhost as canonical. */
export function normalizeSiteOrigin(value: string | undefined): string | null {
  if (!value) return null;
  try {
    const url = new URL(value.trim());
    if (url.protocol !== "https:" && url.protocol !== "http:") return null;
    if (url.username || url.password || url.search || url.hash) return null;
    if (url.pathname !== "/" && url.pathname !== "") return null;
    if (url.hostname === "localhost" || url.hostname.endsWith(".localhost") ||
        url.hostname === "127.0.0.1" || url.hostname === "0.0.0.0" ||
        url.hostname === "::1") return null;
    // Domain must be genuinely public. These reserved suffixes are examples only.
    if (url.hostname.endsWith(".example") || url.hostname.endsWith(".test") ||
        url.hostname.endsWith(".invalid")) return null;
    if (!url.hostname.includes(".")) return null;
    if (url.protocol !== "https:") return null;
    return url.origin;
  } catch {
    return null;
  }
}

export function getSiteOrigin(env: Record<string, string | undefined> = process.env): string | null {
  const custom = normalizeSiteOrigin(env.NEXT_PUBLIC_SITE_URL);
  if (custom) return custom;
  // Production Vercel URL is acceptable as a temporary domain only if explicitly opted in.
  // Preview aliases are never used as canonical or sitemap hosts.
  if (env.VERCEL_ENV === "production" && env.SEO_ALLOW_VERCEL_DOMAIN === "true") {
    return normalizeSiteOrigin(env.VERCEL_PROJECT_PRODUCTION_URL && `https://${env.VERCEL_PROJECT_PRODUCTION_URL}`);
  }
  return null;
}

export function canonicalPath(path: string, origin = getSiteOrigin()): string | undefined {
  if (!origin || !path.startsWith("/") || path.startsWith("//") || /[?#]/.test(path)) return undefined;
  return `${origin}${path}`;
}

export const corePublicPaths = ["/", "/about", "/services", "/blog", "/contact"] as const;

export function hasVerifiedTestimonials() {
  return approvedReviews.some((review) => review.approved && review.consentToPublish)
    || getPublicVideoReviews(approvedVideoReviews).length > 0;
}

export function getIndexablePaths(): string[] {
  const routes: string[] = [...corePublicPaths];
  for (const item of servicePreviews) routes.push(`/services/${item.slug}`);
  for (const article of blogPosts) routes.push(`/blog/${article.slug}`);
  if (hasVerifiedTestimonials()) routes.push("/testimonials");
  return routes;
}

/** JSON-LD is restricted to facts present in our source data. No invented location, ratings or qualifications. */
export function organizationSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: siteConfig.name,
    url: origin,
    email: siteConfig.contactEmail,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${siteConfig.whatsappNumber}`,
      contactType: "customer service",
      availableLanguage: ["en", "hi"],
    },
  };
}

export function websiteSchema(origin: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    name: siteConfig.name,
    url: origin,
    publisher: { "@id": `${origin}/#organization` },
    inLanguage: "en",
  };
}

export function serviceSchema(origin: string, service: (typeof servicePreviews)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${origin}/services/${service.slug}#service`,
    name: service.title,
    description: service.description,
    url: `${origin}/services/${service.slug}`,
    provider: { "@id": `${origin}/#organization` },
    serviceType: "Astrology consultation",
  };
}

export function articleSchema(origin: string, post: (typeof blogPosts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${origin}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    mainEntityOfPage: `${origin}/blog/${post.slug}`,
    author: { "@id": `${origin}/#organization` },
    publisher: { "@id": `${origin}/#organization` },
    inLanguage: "en",
  };
}

export function breadcrumbSchema(origin: string, items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${origin}${item.path}`,
    })),
  };
}
