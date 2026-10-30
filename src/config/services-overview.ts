import type { servicePreviews } from "./home";

/** Descriptive service content. No unverified fees, qualifications, success claims or guarantees. */
export const serviceDetails = {
  "kundli-analysis": {
    eyebrow: "Birth chart",
    lead: "Understand the traditional interpretation of your birth chart.",
    details: "Explore planets, houses and personal themes according to Vedic astrology.",
    topics: ["Birth chart overview", "Planetary placements", "Personal questions"],
  },
  "marriage-relationship": {
    eyebrow: "Relationships",
    lead: "Explore relationship questions through an astrological lens.",
    details: "Discuss compatibility and partnership topics within traditional astrology.",
    topics: ["Compatibility themes", "Marriage questions", "Relationship concerns"],
  },
  "career-guidance": {
    eyebrow: "Professional life",
    lead: "Reflect on your career questions with traditional astrology.",
    details: "Discuss work, professional transitions and future choices without guaranteed predictions.",
    topics: ["Career direction", "Professional transitions", "Work-related questions"],
  },
  numerology: {
    eyebrow: "Numbers & meaning",
    lead: "Discover how numbers are interpreted in numerology.",
    details: "Explore symbolic number-based traditions and their relationship to personal questions.",
    topics: ["Number meanings", "Personal numerology", "Common interpretations"],
  },
  vastu: {
    eyebrow: "Spaces & balance",
    lead: "Explore traditional principles for your home or workspace.",
    details: "Discuss layout and environmental considerations from a Vastu perspective.",
    topics: ["Home spaces", "Workplaces", "Traditional Vastu ideas"],
  },
  muhurat: {
    eyebrow: "Important occasions",
    lead: "Discuss traditional considerations for choosing a Muhurat.",
    details: "Learn about astrological timing traditions in connection with significant events.",
    topics: ["Event planning", "Traditional timing", "Ceremonial occasions"],
  },
} satisfies Record<(typeof servicePreviews)[number]["slug"], {
  eyebrow: string;
  lead: string;
  details: string;
  topics: string[];
}>;

export const consultationBenefits = [
  {
    icon: "message",
    title: "A personal conversation",
    description: "Share the actual questions you want to explore before arranging a session.",
  },
  {
    icon: "sparkles",
    title: "Traditional perspectives",
    description: "Explore themes from Vedic astrology, numerology, Vastu and Muhurat.",
  },
  {
    icon: "calendar",
    title: "A clear booking process",
    description: "Confirm availability, format and applicable fees directly over WhatsApp.",
  },
  {
    icon: "shield",
    title: "Respect for your decisions",
    description: "Use the discussion as a perspective, not a promise of particular outcomes.",
  },
] as const;

export const bookingSteps = [
  {
    id: "01",
    icon: "star",
    title: "Explore the services",
    description: "Choose the topic that best matches your questions.",
  },
  {
    id: "02",
    icon: "message",
    title: "Message on WhatsApp",
    description: "Your selected service is included in the prefilled message.",
  },
  {
    id: "03",
    icon: "calendar",
    title: "Arrange the details",
    description: "Discuss the consultation format, availability and any fees.",
  },
  {
    id: "04",
    icon: "sparkles",
    title: "Have your consultation",
    description: "Explore the agreed topic through the relevant traditional framework.",
  },
] as const;

export const serviceQuestions = [
  {
    question: "How do I book an astrology consultation?",
    answer: "Choose a service and select Book Consultation. WhatsApp opens with a prefilled message to +91 7007962637. You can confirm the service, fees and time directly in the conversation.",
  },
  {
    question: "Do I need to provide my birth details?",
    answer: "Some services, such as Kundli Analysis, may need a date, time and place of birth. The requirements depend on your selected service. Only share the details needed for your enquiry.",
  },
  {
    question: "Can I discuss more than one topic?",
    answer: "Describe the topics you have in mind in your WhatsApp message. The consultation scope can be agreed before booking.",
  },
  {
    question: "Are prices and appointment times fixed?",
    answer: "The website does not advertise unconfirmed prices or available appointment slots. Fees, availability and format are shared directly before any consultation is arranged.",
  },
  {
    question: "Is this a confirmed appointment when I click Book Consultation?",
    answer: "No. Clicking the button opens a WhatsApp chat. An appointment is arranged only after the details have been confirmed through the conversation.",
  },
  {
    question: "Do astrology consultations guarantee results?",
    answer: "No. Astrology is interpretive guidance. It does not guarantee outcomes and is not a replacement for professional medical, legal or financial advice.",
  },
] as const;
