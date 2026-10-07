import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { projects, getProjectBySlug } from "@/content/projects";
import { ProjectImageCarousel } from "@/components/project-image-carousel";

interface Props {
  params: Promise<{ slug: string }>;
}

// Required for static export with dynamic routes
export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Back */}
      <Button variant="ghost" size="sm" className="-ml-2 mb-8" asChild>
        <Link href="/projects">← All projects</Link>
      </Button>

      {/* Hero images carousel */}
      {project.heroImages && project.heroImages.length > 0 && (
        <ProjectImageCarousel images={project.heroImages} title={project.title} />
      )}

      {/* Header */}
      <div className="mb-12">
        <h1 className="text-3xl font-medium tracking-tight mb-2">
          {project.title}
        </h1>
        <p className="text-lg text-muted-foreground">{project.subtitle}</p>
      </div>

      {/* Metadata grid */}
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 pb-12 border-b border-border mb-12">
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Year
          </dt>
          <dd className="text-sm">{project.year}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Context
          </dt>
          <dd className="text-sm">{project.context}</dd>
        </div>
        {project.partners && (
          <div>
            <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
              Partners
            </dt>
            <dd className="text-sm">{project.partners}</dd>
          </div>
        )}
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            Services
          </dt>
          <dd className="flex flex-wrap gap-x-2 gap-y-1 mt-1">
            {project.services.map((s) => (
              <span key={s} className="text-xs text-foreground">
                {s}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      {/* Case study content */}
      <div className="prose prose-zinc max-w-none space-y-4">
        {project.description ? (
          project.description.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))
        ) : (
          <p className="text-muted-foreground">
            Case study content coming soon.
          </p>
        )}
      </div>

      {/* Videos */}
      {project.videos && project.videos.length > 0 && (
        <div className="mt-8 space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Watch</p>
          <div className="flex flex-wrap gap-4">
            {project.videos.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Credits */}
      {project.credits && project.credits.length > 0 && (
        <div className="mt-12 space-y-2">
          <p className="text-xs uppercase tracking-widest text-muted-foreground">Credits</p>
          <ul className="space-y-1">
            {project.credits.map(({ name, role, url }) => (
              <li key={name} className="text-sm">
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
                  >
                    {name}
                  </a>
                ) : (
                  <span>{name}</span>
                )}
                {role && <span className="text-muted-foreground"> — {role}</span>}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* External link */}
      {project.launchLink && (
        <div className="mt-12">
          <Button asChild>
            <Link
              href={project.launchLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </Link>
          </Button>
        </div>
      )}
    </div>
  );
}
