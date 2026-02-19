import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getProjectBySlug } from "@/content/projects";

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
          <dd className="flex flex-wrap gap-1 mt-1">
            {project.services.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </dd>
        </div>
      </dl>

      {/* Case study content will go here */}
      <div className="prose prose-zinc max-w-none">
        {project.description ? (
          <p>{project.description}</p>
        ) : (
          <p className="text-muted-foreground">
            Case study content coming soon.
          </p>
        )}
      </div>

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
