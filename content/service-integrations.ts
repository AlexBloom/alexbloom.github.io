/** Public hosted links only. Never put API keys or account secrets here. */
export const serviceIntegrations: Record<string, {
  provider: "cal" | "stripe";
  url: string | null;
  enabled: boolean;
}> = {
  critique: { provider: "stripe", url: "https://buy.stripe.com/14AaEXbaVfUn4RSeuE1oI00", enabled: true },
  narrative: { provider: "cal", url: "https://cal.com/alexbloom/narrative", enabled: false },
  "office-hours": { provider: "cal", url: "https://cal.com/alexbloom/office-hours", enabled: false },
  "career-sessions": { provider: "cal", url: "https://cal.com/alexbloom/career-sessions", enabled: false },
};

export function getServiceIntegration(slug: string) {
  const integration = Object.hasOwn(serviceIntegrations, slug)
    ? serviceIntegrations[slug]
    : undefined;
  if (!integration?.url) return null;

  const url = new URL(integration.url);
  const host = integration.provider === "cal" ? "cal.com" : "buy.stripe.com";
  if (url.protocol !== "https:" || url.hostname !== host || url.username || url.password || url.pathname === "/") {
    throw new Error(`Invalid ${integration.provider} booking URL for ${slug}`);
  }

  // Enable only after availability, prices, and payment collection are ready.
  if (!integration.enabled) return null;

  return { ...integration, url: url.toString() };
}

export function serviceBookingDescription(slug: string) {
  const integration = getServiceIntegration(slug);
  if (integration?.provider === "cal") {
    return "Choose an available time on Cal.com. Pricing and any required payment are shown during booking.";
  }
  if (integration?.provider === "stripe") {
    return "Purchase your critique through Stripe. Applicable tax is calculated at checkout. Then email your receipt and supporting context to alexbloomdesign@pm.me. We’ll confirm the scope and start time before the review begins.";
  }
  return "Email me to confirm scope, availability, and pricing.";
}
