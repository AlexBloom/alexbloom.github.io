import { serviceInquiryHref } from "@/content/services";
import { getServiceIntegration } from "@/content/service-integrations";
import Link from "next/link";

const fractionalWaitlistUrl = "https://tally.so/r/WOGe7j";

export function ServiceBooking({ service, showLearnMore = false }: {
  service: { slug: string; title: string; action: string; price?: string };
  showLearnMore?: boolean;
}) {
  if (service.slug === "fractional-engagement") {
    return (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Currently booked through 2026 — get notified when 2027 bookings open up.
        </p>
        <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
          <a href={fractionalWaitlistUrl}>{service.action}</a>
          {showLearnMore && <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>Learn more</Link>}
        </div>
      </div>
    );
  }

  const integration = getServiceIntegration(service.slug);

  return (
    <div className="space-y-3">
      {service.price && <p className="text-sm text-muted-foreground">{service.price}</p>}
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-3">
        <a href={integration?.url ?? serviceInquiryHref(service)}>{service.action}</a>
        {showLearnMore && <Link href={`/services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>Learn more</Link>}
      </div>
    </div>
  );
}
