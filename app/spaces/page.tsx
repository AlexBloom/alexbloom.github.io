import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spaces } from "@/content/spaces";

export const metadata: Metadata = {
  title: "Spaces",
  description: "Interiors, kitchens, custom cabinetry, furniture, and renovation projects built by Alex Bloom.",
};

export default function SpacesPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <p className="mb-8 text-sm"><Link href="/" className="underline underline-offset-4 hover:opacity-65">← Back to home</Link></p>
      <header className="mb-12 space-y-4">
        <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-5xl">Spaces</h1>
        <p className="text-muted-foreground">Interiors, furniture, and things built by hand.</p>
      </header>

      <ul className="divide-y border-y">
        {spaces.filter((space) => !space.hidden).map((space, index) => {
          const thumbnail = space.images[0];
          return (
            <li key={space.id} id={space.id} className="scroll-mt-24">
              <Link href={`/spaces/${space.id}`} aria-describedby={`${space.id}-description`} className="group flex items-center gap-5 py-6 sm:gap-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden bg-muted sm:w-52">
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    sizes="(max-width: 639px) 112px, 208px"
                    priority={index === 0}
                    className="object-cover transition-opacity group-hover:opacity-90"
                  />
                </div>
                <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h2 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">{space.title}</h2>
                  {space.year && <p className="text-sm text-muted-foreground">{space.year}</p>}
                </div>
                <p id={`${space.id}-description`} className="sr-only">{space.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
