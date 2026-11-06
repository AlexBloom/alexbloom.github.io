// Draft only: not imported by the site or included in static routes.
// Narrative intentionally has no pricing or booking integration.
export const pausedServices = [
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
    paragraphs: [
      "A 1.5-hour workshop on your company narrative—getting your story (or specific aspects of it) right for fundraising, hiring, or business development.",
    ],
    action: "Book",
  },
];

export const pausedServiceDetails = {
  "critique": {
    "format": "Async · Recorded feedback within 24 hours",
    "intro": "A focused review when you need an outside perspective on a product or feature. Bring your own work or a competitor’s, and one question that will make the feedback useful.",
    "steps": [
      "Purchase the critique through Stripe, providing the product or prototype link and your key question at checkout. Email your receipt and supporting context to alexbloomdesign@pm.me.",
      "We confirm the scope and what I’ll review before the critique begins.",
      "Within 24 hours of the agreed start, you receive a Loom of 15 minutes or less with prioritized recommendations."
    ],
    "takeaway": "A recorded walkthrough you can revisit or share with your team, with a clear order of priorities.",
    "example": {
      "scenario": "An onboarding flow loses people before they reach the first useful moment.",
      "outcome": "A critique could identify where the flow asks for too much too early, recommend a shorter path to value, and prioritize the changes to try first."
    }
  },

  "narrative": {
    "format": "Live workshop · 1.5 hours",
    "intro": "A working session to clarify what your company does, why it matters, and how to tell that story to a specific audience.",
    "steps": [
      "Share your current pitch, website, or notes, and tell me whether the story is for fundraising, hiring, or business development.",
      "In the workshop, we work through the audience, the problem, your point of view, and the evidence behind it.",
      "We shape a narrative structure together and identify what to refine or validate next."
    ],
    "takeaway": "A working narrative outline and a clearer sense of which claims, examples, and proof points belong in your story.",
    "example": {
      "scenario": "A founder has a feature-heavy pitch but struggles to explain why the company should exist.",
      "outcome": "The session could produce an opening centered on the customer’s problem, a concise explanation of the company’s approach, and a sequence of supporting proof points."
    }
  },
};
