import type { Project } from "@/types";

// Project data ported from the Jekyll _projects/ collection.
// Add/edit entries here; each slug maps to a route at /projects/[slug].
export const projects: Project[] = [
  {
    slug: "bike-and-build",
    title: "Bike & Build",
    subtitle: "Brand identity for a cross-country cycling nonprofit",
    thumbnail: "/img/projects/thumbnails/bikebuild.png",
    context:
      "Bike & Build organizes cross-country cycling trips that benefit affordable housing causes.",
    services: ["Brand Identity", "Print Design"],
    year: "2015",
    featured: true,
  },
  {
    slug: "haus",
    title: "Haus",
    subtitle: "Real estate platform for the modern renter",
    thumbnail: "/img/projects/thumbnails/haus.png",
    context: "A rental platform redesign focused on transparency and trust.",
    services: ["Product Design", "UX Research"],
    year: "2016",
    featured: true,
  },
  {
    slug: "cinereach",
    title: "Cinereach",
    subtitle: "Digital presence for an independent film foundation",
    thumbnail: "/img/projects/thumbnails/cinereach.jpg",
    context:
      "Cinereach supports independent films that illuminate the human condition.",
    services: ["Web Design", "Brand Identity"],
    year: "2016",
    featured: true,
  },
  {
    slug: "woolley-market",
    title: "Woolley Market",
    subtitle: "E-commerce experience for a local artisan marketplace",
    thumbnail: "/img/projects/thumbnails/woolley.png",
    context: "A community marketplace connecting local makers with buyers.",
    services: ["UX Design", "E-commerce"],
    year: "2017",
    featured: false,
  },
  {
    slug: "gnarrboro",
    title: "Gnarrboro",
    subtitle: "Brand identity for an outdoor adventure company",
    thumbnail: "/img/projects/thumbnails/gnarrboro.jpg",
    context: "Gnarrboro runs guided backcountry ski and bike trips.",
    services: ["Brand Identity", "Print Design"],
    year: "2017",
    featured: false,
  },
  {
    slug: "energy-realities",
    title: "Energy Realities",
    subtitle: "Data visualization for energy policy research",
    thumbnail: "/img/projects/thumbnails/energyrealities.jpg",
    context:
      "An interactive report exploring the trade-offs in global energy transition.",
    services: ["Data Visualization", "Web Design"],
    year: "2018",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
