import type { MetadataRoute } from "next";
import { getSiteOrigin, hasVerifiedTestimonials } from "@/lib/seo";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  // Until the canonical origin is configured, deliberately prevent indexing of preview domains.
  if (!origin) return { rules: [{ userAgent: "*", disallow: "/" }] };
  const disallow = [
    "/api/", "/booking", "/book-consultation", "/privacy-policy",
    "/terms-and-conditions", "/refund-policy",
  ];
  if (!hasVerifiedTestimonials()) disallow.push("/testimonials");
  return {
    rules: { userAgent: "*", allow: "/", disallow },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
