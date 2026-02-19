import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/content/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="mb-24">
        <h1 className="text-4xl font-medium tracking-tight mb-4">
          Alex Bloom
        </h1>
        <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
          Disciplined design for people and planet.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild>
            <Link href="/projects">View work</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/info">About</Link>
          </Button>
        </div>
      </section>

      {/* Featured projects */}
      <section>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-8">
          Selected work
        </h2>
        <ul className="divide-y divide-border">
          {featured.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="flex items-baseline justify-between py-5 group"
              >
                <div>
                  <span className="font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </span>
                  <span className="ml-3 text-sm text-muted-foreground">
                    {project.subtitle}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums ml-4 shrink-0">
                  {project.year}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
