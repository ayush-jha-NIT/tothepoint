export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const policyNavigation = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;

/** These pages are placeholders until their corresponding roadmap phases. */
export const placeholderPages: Record<string, { title: string; message: string; phase: string }> = {
  about: { title: "About Us", message: "Discover the story and approach behind Tothepoint Astrology.", phase: "Part 3" },
  services: { title: "Our Services", message: "Explore our astrology consultation services.", phase: "Part 4" },
  testimonials: { title: "Testimonials", message: "Client experiences will appear here after verification and approval.", phase: "Part 7" },
  blog: { title: "Astrology Insights", message: "Articles and educational resources will appear here.", phase: "Part 8" },
  contact: { title: "Contact Us", message: "Reach out directly for consultation inquiries.", phase: "Part 10" },
  "privacy-policy": { title: "Privacy Policy", message: "An approved privacy policy will appear here before launch.", phase: "Part 11" },
  "terms-and-conditions": { title: "Terms & Conditions", message: "Approved service terms will appear here before launch.", phase: "Part 11" },
  "refund-policy": { title: "Refund Policy", message: "The approved refund and cancellation rules will appear here before launch.", phase: "Part 11" },
};
