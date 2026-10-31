"use client";

import { WhatsAppBookingLink } from "@/components/booking/whatsapp-booking-link";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { primaryNavigation } from "@/config/navigation";
import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icons";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-gold/20 bg-navy-deep/95 shadow-[0_10px_40px_rgba(0,0,0,.18)] backdrop-blur-xl"
      onKeyDown={(event) => { if (event.key === "Escape") setMenuOpen(false); }}
    >
      <Container className="flex h-[70px] items-center justify-between gap-5 lg:h-[74px]">
        <BrandMark />

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 lg:flex">
          {primaryNavigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <Link
                href={item.href}
                key={item.href}
                aria-current={active ? "page" : undefined}
                className={["rounded-md px-3 py-2.5 text-[13px] font-medium transition-colors", active ? "text-gold" : "text-cream/75 hover:bg-white/5 hover:text-cream"].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppBookingLink size="small" icon="arrow-up-right">Book Consultation</WhatsAppBookingLink>
        </div>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-gold/30 text-gold transition-colors hover:bg-gold/10 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "close" : "menu"} size={23} />
        </button>
      </Container>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-70px)] overflow-y-auto border-b border-gold/25 bg-navy px-5 py-5 shadow-2xl lg:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col gap-1">
          {primaryNavigation.map((item) => {
            const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={["flex min-h-12 items-center justify-between rounded-lg px-4 py-3 font-medium", active ? "bg-gold/10 text-gold" : "text-cream hover:bg-white/5"].join(" ")}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                  <Icon name="chevron-right" size={17} />
                </Link>
              </li>
            );
          })}
          <li className="mt-3">
            <WhatsAppBookingLink icon="message" className="w-full">Book Consultation</WhatsAppBookingLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
