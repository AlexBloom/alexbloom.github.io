export const services = [
  {
    slug: "career-sessions",
    title: "Career Sessions",
    price: "$300",
    note: "Now Booking for 2027",
    paragraphs: [
      "1:1 guidance for designers making a transition, drawing from multiple decades of highly varied design experience.*",
      "For students, people going freelance, and those transitioning into a design career. We cover your portfolio, design challenge interviews, or building your own solo practice over one hour.",
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
    slug: "fractional-engagement",
    title: "Fractional Engagement",
    paragraphs: [
      "Principal design expertise without a full-time hire.",
      "Hands-on product design, prototyping, design systems, team building, and modernizing design with AI—working directly with founders and design, product, and technical leaders.",
    ],
    action: "Get notified",
  },
];

export function serviceInquiryHref(service: { title: string }) {
  return `mailto:alexbloomdesign@pm.me?subject=${encodeURIComponent(service.title + " inquiry")}`;
}
