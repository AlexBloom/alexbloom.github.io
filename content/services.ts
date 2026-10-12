export const services = [
  {
    slug: "critique",
    title: "Critique",
    price: "$250",
    paragraphs: [
      "Fast, async feedback on your—or a competitor’s—product or feature.",
      "Send a link with context and a key question you’d like perspective on. Within 24 hours, you’ll get a Loom of 15 minutes or less with prioritized recommendations.",
    ],
    action: "Book",
  },
  {
    slug: "narrative",
    title: "Narrative",
    price: "$750",
    paragraphs: [
      "A 1.5-hour workshop on your company narrative—getting your story (or specific aspects of it) right for fundraising, hiring, or business development.",
    ],
    action: "Book",
  },
  {
    slug: "office-hours",
    title: "Office Hours",
    price: "$500",
    paragraphs: [
      "A staff-level perspective on one specific design decision.",
      "In a one-hour 1:1, we work through your options and trade-offs and land on a recommended path.",
    ],
    action: "Book",
  },
  {
    slug: "career-sessions",
    title: "Career Sessions",
    price: "$300",
    note: "New for 2027",
    paragraphs: [
      "1:1 guidance for designers making a transition, drawing from multiple decades of highly varied design experience.*",
      "For students, people going freelance, and those transitioning into a design career. We cover your portfolio, design challenge interviews, or building your own solo practice over one hour.",
    ],
    action: "Book",
  },
  {
    slug: "fractional-engagement",
    title: "Fractional Engagement",
    paragraphs: [
      "Principal design expertise without a full-time hire.",
      "Hands-on product design, prototyping, design systems, team building, and modernizing design with AI—working directly with founders and design, product, and technical leaders.",
      "From $15,000/month, with a three-month minimum.",
    ],
    action: "Get notified",
  },
];

export function serviceInquiryHref(service: { title: string }) {
  return `mailto:alexbloomdesign@pm.me?subject=${encodeURIComponent(service.title + " inquiry")}`;
}
