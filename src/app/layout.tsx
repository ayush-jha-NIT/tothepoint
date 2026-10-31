import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { getSiteOrigin, organizationSchema, websiteSchema } from "@/lib/seo";
import "./globals.css";

const origin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: origin ? new URL(origin) : undefined,
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: `Explore ${siteConfig.name} and request an astrology consultation with ${siteConfig.astrologer}.`,
  applicationName: siteConfig.name,
  robots: { index: !!origin, follow: true },
  openGraph: { siteName: siteConfig.name, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image" },
  referrer: "strict-origin-when-cross-origin",
  other: { "color-scheme": "dark" },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy-deep text-cream antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        {origin && <JsonLd data={[organizationSchema(origin), websiteSchema(origin)]}/>}
        <div className="flex min-h-screen flex-col">
          <SiteHeader/>
          <main id="main-content" className="min-w-0 flex-1">{children}</main>
          <SiteFooter/>
        </div>
      </body>
    </html>
  );
}
