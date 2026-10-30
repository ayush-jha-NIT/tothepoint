import type { servicePreviews } from "./home";

type ServiceSlug = (typeof servicePreviews)[number]["slug"];

export type ServiceProfile = {
  heroLine: string;
  introduction: string;
  overviewHeading: string;
  overview: readonly [string, string];
  focus: readonly { title: string; description: string }[];
  preparation: readonly string[];
  approachNote: string;
  questions: readonly { question: string; answer: string }[];
};

/** Editorial consultation explanations, not promises of outcomes or reports.
 * Publishing exact prices or credentials requires separate client confirmation.
 */
export const serviceProfiles = {
  "kundli-analysis": {
    heroLine: "Know Yourself. Explore Your Birth Chart.",
    introduction: "Learn how a birth chart is traditionally interpreted in Vedic astrology, and discuss the questions that matter to you.",
    overviewHeading: "What Is Kundli Analysis?",
    overview: [
      "A Kundli, or Janam Kundli, is a chart created from a person's birth date, time and place using traditional astrological calculations. Astrologers interpret the placements of planets and houses through a Vedic framework.",
      "A consultation can help you explore the symbolism of your chart and how it relates to topics you want to discuss. These interpretations are perspectives rather than scientifically established predictions.",
    ],
    focus: [
      { title: "Birth Chart Overview", description: "Understand the houses, signs and planets represented in your chart." },
      { title: "Personal Tendencies", description: "Discuss traditional interpretations of temperament and personal strengths." },
      { title: "Career Questions", description: "Explore work-related themes often associated with the birth chart." },
      { title: "Relationships", description: "Consider chart interpretations concerning partnership and compatibility." },
      { title: "Planetary Periods", description: "Ask about Dasha and transit concepts used in Vedic astrology." },
      { title: "Your Specific Questions", description: "Focus the discussion on the topics you actually want to understand." },
    ],
    preparation: [
      "Date of birth, if relevant to your chosen analysis",
      "Birth time and birthplace, where available",
      "A short list of questions you want to discuss",
    ],
    approachNote: "A personal Kundli session is a discussion of traditional chart interpretations. A written report is not included unless explicitly agreed on WhatsApp before the session.",
    questions: [
      { question: "What birth details are useful for a Kundli?", answer: "A date, approximate or exact time, and place of birth are typically used. Explain on WhatsApp if any detail is unknown." },
      { question: "Can I book if I do not know my birth time?", answer: "You can enquire, but the scope of a birth-chart interpretation may be limited. The astrologer can clarify what is possible." },
      { question: "Will I receive a PDF Kundli report?", answer: "No report is automatically promised by this page. Ask on WhatsApp whether a written report is available and whether it changes the fee." },
      { question: "Will Kundli Analysis guarantee a future event?", answer: "No. Astrology offers interpretations rather than guaranteed predictions or scientific certainty." },
    ],
  },
  "marriage-relationship": {
    heroLine: "Explore Relationships with Greater Perspective.",
    introduction: "Discuss marriage, compatibility and personal relationships within traditional astrological interpretation.",
    overviewHeading: "What Is Marriage & Relationship Guidance?",
    overview: [
      "Relationship consultations explore traditional astrological concepts relating to partnership, expectations and compatibility. Some conversations may involve comparing two birth charts when the relevant information is available.",
      "The purpose is to reflect on your questions, not to claim certainty about another person's feelings or to replace communication, consent and individual judgment.",
    ],
    focus: [
      { title: "Compatibility Themes", description: "Explore how traditional chart comparison approaches compatibility." },
      { title: "Marriage Questions", description: "Discuss astrological perspectives associated with marriage-related concerns." },
      { title: "Communication", description: "Reflect on relationship expectations and what you want to discuss openly." },
      { title: "Partnership Patterns", description: "Consider symbolic interpretations related to partnership." },
      { title: "Family Considerations", description: "Discuss broader marriage-related topics within a traditional context." },
      { title: "Individual Questions", description: "Bring the specific issues on which you want a traditional perspective." },
    ],
    preparation: [
      "A brief description of the relationship-related topic",
      "Birth information for chart comparison if requested and willingly shared",
      "Any specific questions to address during the conversation",
    ],
    approachNote: "The consultation does not determine another person's consent, loyalty or intentions, and it cannot promise a marriage outcome.",
    questions: [
      { question: "Is another person's birth information always required?", answer: "Not always. The information needed depends on whether the discussion involves two-chart compatibility. Enquire about the scope first." },
      { question: "Can I discuss a relationship without marriage plans?", answer: "Yes. Explain your concern in WhatsApp so the relevant service can be confirmed." },
      { question: "Does a compatibility reading guarantee a successful relationship?", answer: "No. Astrological compatibility is interpretive and cannot guarantee relationship outcomes." },
      { question: "Can the session replace relationship counselling?", answer: "No. For serious interpersonal or mental-health concerns, seek appropriate qualified support." },
    ],
  },
  "career-guidance": {
    heroLine: "Reflect on Work, Direction and Opportunity.",
    introduction: "Explore career-related questions through Vedic astrology as one perspective alongside your skills, goals and practical choices.",
    overviewHeading: "What Is Career Guidance in Astrology?",
    overview: [
      "Career-focused astrology examines traditional birth-chart concepts associated with work, ambition, change and professional direction. The conversation may explore the symbols used in those interpretations.",
      "Career choices remain grounded in experience, education, qualifications and real opportunities. An astrological reading cannot verify a job offer or promise financial success.",
    ],
    focus: [
      { title: "Work Themes", description: "Discuss chart symbolism traditionally associated with professional life." },
      { title: "Professional Transitions", description: "Reflect on questions about changes in work or direction." },
      { title: "Education & Skills", description: "Bring questions about study or skill development into the discussion." },
      { title: "Independent Work", description: "Explore entrepreneurial questions through an interpretive lens." },
      { title: "Timing Concepts", description: "Learn how astrology traditionally discusses periods and transits." },
      { title: "Personal Priorities", description: "Identify the particular career-related concerns you want to discuss." },
    ],
    preparation: [
      "A clear description of your work or study question",
      "Birth details if chart analysis is part of the agreed session",
      "Your current options and goals for context",
    ],
    approachNote: "This service does not promise employment, promotions, admission, salary increases or investment returns.",
    questions: [
      { question: "Can astrology tell me exactly which job to take?", answer: "No. It offers traditional interpretations, not factual job assessments. Use practical information when making the decision." },
      { question: "Can I ask about studies or business?", answer: "Yes. Mention the topic in the initial WhatsApp enquiry so the consultation scope is clear." },
      { question: "Do I need to provide a resume?", answer: "Not generally for the initial enquiry. Avoid sharing unnecessary personal documents." },
      { question: "Are successful career outcomes guaranteed?", answer: "No. Career development depends on skills, circumstances and decisions; astrology does not guarantee outcomes." },
    ],
  },
  numerology: {
    heroLine: "Explore the Symbolism of Numbers.",
    introduction: "Discover how traditional numerology interprets numbers linked to dates and names, as a reflective rather than predictive framework.",
    overviewHeading: "What Is Numerology Consultation?",
    overview: [
      "Numerology assigns symbolic meanings to numbers, often calculated using birth dates or names. Different numerology traditions use different methods, so the consultation starts by clarifying the approach.",
      "It can be an interesting way to reflect on personal themes and questions. The practice is not a scientifically established way to predict health, wealth or life events.",
    ],
    focus: [
      { title: "Birth Date Numbers", description: "Explore numerical patterns traditionally calculated from a birth date." },
      { title: "Name Calculations", description: "Discuss number interpretations associated with names, if relevant." },
      { title: "Symbolic Meanings", description: "Learn how different numbers are interpreted within a given system." },
      { title: "Personal Themes", description: "Reflect on common numerology ideas and how they relate to your questions." },
      { title: "Number Systems", description: "Understand the method being used rather than assuming one universal formula." },
      { title: "Your Questions", description: "Bring specific topics to discuss in a practical, transparent way." },
    ],
    preparation: [
      "The numerology topic you want to explore",
      "Birth date or name details only if needed for the agreed method",
      "Any questions about the calculation or interpretation",
    ],
    approachNote: "This service does not guarantee luck, financial improvement or specific future events.",
    questions: [
      { question: "What do I need for a numerology consultation?", answer: "The required information depends on the selected method. Ask first whether your birth date, name or both are relevant." },
      { question: "Can a number guarantee good luck?", answer: "No. Numerology offers symbolic interpretations, not guaranteed outcomes." },
      { question: "Do all numerologists use the same method?", answer: "No. There are multiple systems. The chosen method should be explained during the session." },
      { question: "Can numerology replace professional advice?", answer: "No. Make medical, financial and legal decisions using qualified professional guidance." },
    ],
  },
  vastu: {
    heroLine: "Explore Traditional Ideas for Your Space.",
    introduction: "Discuss Vastu principles and how they have historically been applied to homes, offices and daily living environments.",
    overviewHeading: "What Is Vastu Consultation?",
    overview: [
      "Vastu Shastra is a traditional Indian framework for considering the orientation and arrangement of built spaces. A consultation may cover room placement, spatial use and related symbolic ideas.",
      "Vastu advice is separate from architectural safety, building codes, structural engineering and medical evidence. Any physical changes should be assessed by the relevant qualified professionals.",
    ],
    focus: [
      { title: "Room Orientation", description: "Discuss conventional Vastu ideas about the direction of rooms." },
      { title: "Living Spaces", description: "Explore traditional principles related to everyday home layouts." },
      { title: "Workspaces", description: "Consider common Vastu themes for an office or workspace." },
      { title: "Entrance & Layout", description: "Ask how traditional interpretations approach entrances and movement." },
      { title: "Existing Properties", description: "Discuss questions about a space without assuming structural changes." },
      { title: "Your Specific Space", description: "Explain the setting and the concerns you wish to discuss." },
    ],
    preparation: [
      "Whether the consultation concerns a home or workplace",
      "A rough description or sketch only if agreed and necessary",
      "Your main questions about the space",
    ],
    approachNote: "Vastu guidance should never override structural-safety inspections, building regulations or medical requirements.",
    questions: [
      { question: "Do I need a floor plan?", answer: "A simple plan might be useful depending on the consultation. Ask before sharing any property documents." },
      { question: "Can I ask about an existing home?", answer: "Yes. Describe the topic and whether you want a general discussion or a more detailed review." },
      { question: "Will Vastu changes guarantee prosperity?", answer: "No. Such outcomes cannot be guaranteed by changes based on Vastu ideas." },
      { question: "Does the consultation replace a building professional?", answer: "No. Consult licensed architects, engineers or other qualified specialists for structural, safety or code-related decisions." },
    ],
  },
  muhurat: {
    heroLine: "Understand Traditional Timing for Important Events.",
    introduction: "Explore how Muhurat is considered in traditional astrology when planning significant occasions.",
    overviewHeading: "What Is Muhurat Guidance?",
    overview: [
      "Muhurat refers to the selection of a time considered auspicious within particular astrological and cultural traditions. Calculations may refer to a specific date, location and type of occasion.",
      "A consultation explains the relevant tradition and the information required to consider potential dates. It does not replace legal deadlines, event logistics or practical safety planning.",
    ],
    focus: [
      { title: "Marriage Ceremonies", description: "Discuss traditional timing considerations for wedding rituals." },
      { title: "Housewarming", description: "Explore common Muhurat concepts for entering a new home." },
      { title: "Business Openings", description: "Ask about customary timing traditions for inaugurations." },
      { title: "Family Occasions", description: "Discuss auspicious timing within the context of your event." },
      { title: "Dates & Locations", description: "Understand why the place and timeframe of an event may matter." },
      { title: "Practical Constraints", description: "Bring real scheduling requirements to the discussion." },
    ],
    preparation: [
      "Type of occasion and preferred date range",
      "City or location of the event if calculation requires it",
      "Any fixed commitments, permissions or deadlines",
    ],
    approachNote: "A Muhurat cannot guarantee the success of an event. Confirm real-world permissions, deadlines and arrangements separately.",
    questions: [
      { question: "What information is needed to discuss a Muhurat?", answer: "Typically the type of occasion, the location and the relevant date range. Specific details depend on the calculation method." },
      { question: "Can I ask about more than one possible date?", answer: "Yes. Explain the available dates during the initial WhatsApp discussion so the scope can be agreed." },
      { question: "Does selecting an auspicious time guarantee success?", answer: "No. Muhurat is a traditional belief-based timing practice, not a guarantee." },
      { question: "Should I ignore legal or venue deadlines?", answer: "No. Practical, legal and safety constraints take precedence and should be confirmed independently." },
    ],
  },
} as const satisfies Record<ServiceSlug, ServiceProfile>;
