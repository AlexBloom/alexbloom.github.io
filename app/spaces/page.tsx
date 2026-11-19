import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spaces } from "@/content/spaces";

export const metadata: Metadata = {
  title: "Design IRL",
  description: "Interiors, kitchens, custom cabinetry, furniture, and renovation projects built by Alex Bloom.",
};

export default function SpacesPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <p className="mb-8 text-sm"><Link href="/" className="underline underline-offset-4 hover:opacity-65">← Back to home</Link></p>
      <header className="mb-12 space-y-4">
        <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-5xl">Design IRL</h1>
        <p className="text-muted-foreground">Spaces, furniture, and more.</p>
      </header>

      <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">
        {spaces.filter((space) => !space.hidden).map((space, index) => {
          const thumbnail = space.images[0];
          return (
            <li key={space.id} id={space.id} className="scroll-mt-24">
              <Link href={`/spaces/${space.id}`} aria-describedby={`${space.id}-description`} className="group block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={thumbnail.src}
                    alt={thumbnail.alt}
                    fill
                    sizes="(max-width: 639px) calc(100vw - 48px), 440px"
                    priority={index === 0}
                    className="object-cover transition-opacity group-hover:opacity-90"
                  />
                </div>
                <div className="mt-4 flex min-w-0 items-baseline justify-between gap-4">
                  <h2 className="text-lg font-semibold tracking-tight group-hover:underline underline-offset-4">{space.title}</h2>
                  {space.year && <p className="shrink-0 text-sm text-muted-foreground">{space.year}</p>}
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
