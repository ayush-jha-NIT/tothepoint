import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: `Explore ${siteConfig.name} and request an astrology consultation with ${siteConfig.astrologer}.`,
  applicationName: siteConfig.name,
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-navy-deep text-cream antialiased">
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main-content" className="min-w-0 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
