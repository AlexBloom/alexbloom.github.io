import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { ServiceBooking } from "@/components/service-booking";
import { serviceDetails } from "@/content/service-details";
import { serviceBookingDescription } from "@/content/service-integrations";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return service ? { title: service.title, description: service.paragraphs[0] } : {};
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service || !(slug in serviceDetails)) notFound();
  const detail = serviceDetails[slug as keyof typeof serviceDetails];

  return (
    <>
      <div className="homepage mx-auto w-full max-w-[40em] px-6 pb-16 pt-12 sm:pt-20">
        <Link href="/#services">Back to services</Link>
        <header className="mt-8 space-y-4">
          <h1 className="text-3xl font-medium tracking-tight">{service.title}</h1>
          <p className="text-sm text-muted-foreground">{detail.format}</p>
          <p>{detail.intro}</p>
          <ServiceBooking service={service} />
          {service.slug !== "fractional-engagement" && (
            <p className="text-sm text-muted-foreground">{serviceBookingDescription(service.slug)}</p>
          )}
        </header>

        <section aria-labelledby="how-it-works" className="mt-12 space-y-4">
          <h2 id="how-it-works">How it works</h2>
          <ol className="list-decimal space-y-4 pl-5">
            {detail.steps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </section>

        <section aria-labelledby="takeaway" className="mt-12 space-y-4">
          <h2 id="takeaway">What you leave with</h2>
          <p>{detail.takeaway}</p>
        </section>

        <section aria-labelledby="example" className="mt-12 space-y-4">
          <h2 id="example">Example outcome</h2>
          <div className="space-y-4 rounded-md border border-foreground/20 p-5">
            <p className="text-xs uppercase tracking-wide text-muted-foreground">Illustrative example</p>
            <p><strong>The starting point</strong><br />{detail.example.scenario}</p>
            <p><strong>A possible outcome</strong><br />{detail.example.outcome}</p>
          </div>
        </section>

        <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3">
          <ServiceBooking service={service} />
          <Link href="/#services">Back to services</Link>
        </div>
      </div>
    </>
  );
}
