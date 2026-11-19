import type { Metadata } from "next";
import { SpaceGallery } from "@/components/space-gallery";
import Link from "next/link";
import { notFound } from "next/navigation";
import { spaces } from "@/content/spaces";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return spaces.filter((space) => !space.hidden).map((space) => ({ slug: space.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const space = spaces.find((project) => project.id === slug && !project.hidden);
  if (!space) return {};
  return { title: space.title, description: space.description };
}

export default async function SpacePage({ params }: Props) {
  const { slug } = await params;
  const space = spaces.find((project) => project.id === slug && !project.hidden);
  if (!space) notFound();

  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <p className="mb-8 text-sm">
        <Link href="/spaces" className="underline underline-offset-4 hover:opacity-65">← Design IRL</Link>
      </p>
      <header className="mb-10 space-y-4">
        <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-5xl">{space.title}</h1>
        {space.year && <p className="text-sm text-muted-foreground">{space.year}</p>}
        <p className="max-w-2xl leading-relaxed text-muted-foreground">{space.description}</p>
        {space.credits && (
          <dl className="grid gap-4 border-t pt-4 text-sm sm:grid-cols-2">
            {space.credits.map((credit) => (
              <div key={credit.name}>
                <dt className="font-medium">
                  {credit.url ? <a href={credit.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-65">{credit.name}</a> : credit.name}
                </dt>
                <dd className="mt-1 text-muted-foreground">{credit.role}</dd>
              </div>
            ))}
          </dl>
        )}
        {space.relatedProject && (
          <p className="text-sm"><Link href={space.relatedProject.href} className="underline underline-offset-4 hover:opacity-65">{space.relatedProject.label} →</Link></p>
        )}
      </header>
      {space.story && (
        <div className="mb-10 max-w-2xl space-y-6">
          {space.story.map((section) => (
            <section key={section.title}>
              {section.title && <h2 className="text-lg font-semibold tracking-tight">{section.title}</h2>}
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.text}</p>
            </section>
          ))}
        </div>
      )}
      {space.filmLinks && (
        <ul className="mb-10 grid gap-4 sm:grid-cols-2">
          {space.filmLinks.map((film) => (
            <li key={film.url} className="border-t pt-4 text-sm">
              <a href={film.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-65">{film.label} ↗</a>
              <p className="mt-2 text-xs text-muted-foreground">{film.credit}</p>
            </li>
          ))}
        </ul>
      )}
      <SpaceGallery images={space.images} videos={space.videos} showGroups={space.showGroups} hideCaptions={space.hideCaptions} />
      <p className="mt-12 text-sm">
        <Link href="/spaces" className="underline underline-offset-4 hover:opacity-65">← Design IRL</Link>
      </p>
    </div>
  );
}
