import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getVisibleProjects } from "@/content/projects";

function endYear(year: string): number {
  if (/present/i.test(year) || /ongoing/i.test(year)) return 9999;
  const nums = year.match(/\d{4}/g);
  if (!nums) return 0;
  return Math.max(...nums.map(Number));
}

function startYear(year: string): number {
  const nums = year.match(/\d{4}/g);
  if (!nums) return 0;
  return Math.min(...nums.map(Number));
}

const projects = getVisibleProjects()
  .slice()
  .sort((a, b) => {
    const endDiff = endYear(b.year) - endYear(a.year);
    if (endDiff !== 0) return endDiff;
    return startYear(b.year) - startYear(a.year);
  });

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected design work by Alex Bloom.",
};

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-medium mb-12">Projects</h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`} className="group block">
              {/* Thumbnail */}
              <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden mb-4">
                {project.thumbnail && (
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                )}
              </div>

              {/* Meta */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground tabular-nums shrink-0 mt-0.5">
                  {project.year}
                </span>
              </div>

              {/* Services */}
              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3">
                {project.services.map((service) => (
                  <span key={service} className="text-xs text-muted-foreground">
                    {service}
                  </span>
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
