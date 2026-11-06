import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { spaces } from "@/content/spaces";

export const metadata: Metadata = {
  title: "Spaces",
  description: "Interiors, furniture, and things built by Alex Bloom: the Silver Shaka Airstream, Woolley Market, and Utile dining bench.",
};

export default function SpacesPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <p className="mb-8 text-sm"><Link href="/" className="underline underline-offset-4 hover:opacity-65">← Back to home</Link></p>
      <header className="mb-12 space-y-4">
        <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-5xl">Spaces</h1>
        <p className="text-muted-foreground">Interiors, furniture, and things built by hand.</p>
        <nav aria-label="Gallery projects" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {spaces.map((space) => (
            <a key={space.id} href={`#${space.id}`} className="underline underline-offset-4 hover:opacity-65">{space.shortTitle}</a>
          ))}
        </nav>
      </header>

      <div className="space-y-20">
        {spaces.map((space, sectionIndex) => (
          <section key={space.id} id={space.id} aria-labelledby={`${space.id}-title`} className="scroll-mt-24">
            <div className="mb-6 border-t pt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 id={`${space.id}-title`} className="text-xl font-semibold tracking-tight">{space.title}</h2>
                {space.year && <p className="text-sm text-muted-foreground">{space.year}</p>}
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{space.description}</p>
            </div>

            <ul className="columns-1 gap-5 sm:columns-2">
              {space.images.map((image, imageIndex) => (
                <li key={image.src} className="mb-5 break-inside-avoid">
                  <figure>
                    <a href={image.original} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size image: ${image.alt}`} className="group block overflow-hidden bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes="(max-width: 639px) calc(100vw - 48px), (max-width: 960px) calc((100vw - 68px) / 2), 446px"
                        priority={sectionIndex === 0 && imageIndex === 0}
                        className="h-auto w-full transition-opacity group-hover:opacity-90"
                      />
                    </a>
                    <figcaption className="mt-2 text-xs leading-relaxed text-muted-foreground">{image.caption}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm"><Link href="/" className="underline underline-offset-4 hover:opacity-65">Back home</Link></p>
    </div>
  );
}
