import type { Project } from "@/types";

// Project data. Each slug maps to a route at /projects/[slug].
// Add thumbnail images to public/img/projects/thumbnails/ for new entries.
export const projects: Project[] = [
  {
    slug: "continuum",
    title: "Continuum",
    subtitle: "Elite fractional tech talent marketplace",
    thumbnail: "/img/projects/thumbnails/continuum.jpg",
    context: "Elite fractional tech talent marketplace",
    services: ["Product Design"],
    year: "2023",
    featured: true,
    description:
      "I designed the Spark AI talent matching flow for Continuum — a streamlined onboarding experience that minimized user input while maximizing relevant talent matches for companies hiring fractional tech executives. The flow became Continuum's primary CTA and homepage onboarding journey.",
    links: [{ label: "joincontinuum.com", url: "https://joincontinuum.com" }],
  },
  {
    slug: "homevision",
    title: "HomeVision",
    subtitle: "AI-powered underwriting software for mortgage lending",
    thumbnail: "/img/projects/thumbnails/homevision.jpg",
    context: "AI-powered underwriting software for mortgage lending",
    services: ["Design Management", "Product Design", "Product Marketing"],
    year: "2020–present",
    featured: true,
    description:
      "MiRA (Machine Intelligence Review Assistant) is a suite of web-based tools for mortgage underwriting, powered by a centralized document understanding platform that reads, structures, and analyzes text, images, and other content to accelerate document review. I led design of these products and oversaw the design team from 2020–2022, and have continued building new features since.",
  },
  {
    slug: "lettuce",
    title: "Lettuce",
    subtitle: "Automated finance & accounting for businesses of one",
    thumbnail: "/img/projects/thumbnails/lettuce.jpg",
    context: "Automated finance & accounting for businesses of one",
    services: ["Product Design", "Design Systems"],
    year: "2021–2023",
    featured: true,
    description:
      "I developed and evolved core product experiences for Lettuce — including the customer dashboard, onboarding, payroll setup, automated tax savings and payments, and money movement flows. I also led a redesign of entry points for common money movement actions, capturing rich transaction data with minimal disruption to user experience.",
  },
  {
    slug: "faircomp",
    title: "Faircomp",
    subtitle: "AI interview and negotiation toolkit for job seekers in tech",
    thumbnail: "/img/projects/thumbnails/faircomp.jpg",
    context: "AI interview and negotiation toolkit for job seekers in tech",
    services: ["Product Design", "Creative Direction"],
    year: "2022–2023",
    featured: false,
    hidden: true,
    description:
      "Faircomp was built on a simple question: what if employees could access verified, real-time comp data? I created product models to validate and bring this idea to market — including a free offer evaluation tool that used LLMs and verified user salary data to generate compensation insights. The platform was featured in Forbes, CNBC, and Fast Company.",
    links: [
      { label: "Forbes", url: "https://forbes.com" },
      { label: "CNBC", url: "https://cnbc.com" },
      { label: "Fast Company", url: "https://fastcompany.com" },
    ],
  },
  {
    slug: "lyft",
    title: "Lyft",
    subtitle: "An overhaul of in-app help for millions of riders and drivers",
    thumbnail: "/img/projects/thumbnails/Lyft.jpg",
    context: "An overhaul of in-app help experiences for millions of riders and drivers",
    services: ["Product Design"],
    year: "2020",
    featured: true,
    description:
      "At Lyft, I redesigned in-app help for both riders and drivers. For riders, I introduced a ride-first approach using AI and data science to surface the most likely issues for recent trips, replacing a tile-based menu with a more scannable list view. For drivers, I designed a tiered premium support model alongside a new help home screen, support chat, and AI automations for common issues.",
    heroImages: [
      "/img/projects/lyft/lyft-1.png",
    ],
  },
  {
    slug: "airstream",
    title: "Airstream",
    subtitle: "Design & build for an iconic American travel trailer brand",
    thumbnail: "/img/projects/thumbnails/Airstream.jpg",
    context: "Design & build for an iconic American travel trailer brand",
    services: ["Web Design", "Brand Identity"],
    year: "2024",
    featured: true,
    description:
      "Placeholder — case study coming soon.",
  },
  {
    slug: "bench",
    title: "Bench",
    subtitle: "Bookkeeping software for small businesses",
    thumbnail: "/img/projects/thumbnails/Bench.jpg",
    context: "Bookkeeping software for small businesses",
    services: ["Product Design"],
    year: "2024",
    featured: true,
    description:
      "Utili, no hardware, private client.",
  },
  {
    slug: "public-equity",
    title: "Public Equity",
    subtitle: "Investment platform for public market retail investors",
    thumbnail: "/img/projects/thumbnails/PublicEquity.jpg",
    context: "Investment platform for public market retail investors",
    services: ["Product Design", "UX Research"],
    year: "2022",
    featured: true,
    description:
      "Placeholder — case study coming soon.",
  },
  {
    slug: "public-ledger",
    title: "Public Ledger",
    subtitle: "Financial transparency tooling for public companies",
    thumbnail: "/img/projects/thumbnails/PublicLedger.jpg",
    context: "Financial transparency tooling for public companies",
    services: ["Product Design"],
    year: "2023",
    featured: true,
    description:
      "Placeholder — case study coming soon.",
  },
  {
    slug: "woolley-market",
    title: "Woolley Market",
    subtitle: "Revitalizing and celebrating a town with history as rich as its soil.",
    thumbnail: "/img/projects/woolleymarket/specialitems/neon.jpg",
    context: "Brand identity, environmental design, and digital experience for a community-owned artisan marketplace.",
    services: ["Brand Identity", "Environmental Design", "Web Design", "Creative Direction"],
    year: "2014",
    featured: false,
    description:
      "In January of 2014, I fell into one of the most interesting places and projects I've ever been able to work on. I was approached by Will Honea, the founder of the Market and a team of highly-dedicated people with uniquely focused experience in farming and market operations.\n\nI served as the market's sole creative director for 6 months, engaged at pre-incorporation stage through the market's first 50 hired employees. I oversaw, and in many cases— physically executed all aspects of the market's brand strategy, identity, packaging, interior, exterior, and digital design.",
    credits: [
      { name: "True Hand Society", role: "Brand, Illustration", url: "http://truehandsociety.com" },
      { name: "Nathan Kane", role: "Photography", url: "http://nathankane.com" },
      { name: "Sign Mart", role: "Neon, Production", url: "http://signmartusa.com" },
      { name: "Skagit Valley Signs", role: "Digital Printing", url: "http://skagitvalleysigns.com" },
    ],
    heroImages: [
      "/img/projects/woolleymarket/brand/logo-circle.gif",
      "/img/projects/woolleymarket/brand/logo-type.gif",
      "/img/projects/woolleymarket/brand/logo-tusks.gif",
      "/img/projects/woolleymarket/brand/logo-saw.gif",
      "/img/projects/woolleymarket/collateral/butcherpaper.jpg",
      "/img/projects/woolleymarket/collateral/giftcard.jpg",
      "/img/projects/woolleymarket/collateral/shirt.jpg",
      "/img/projects/woolleymarket/metcalf.jpg",
      "/img/projects/woolleymarket/specialitems/modelt.jpg",
      "/img/projects/woolleymarket/specialitems/modeltpoint.jpg",
      "/img/projects/woolleymarket/exterior/corner.jpg",
      "/img/projects/woolleymarket/exterior/frontentrance.jpg",
      "/img/projects/woolleymarket/exterior/frontlogo.jpg",
      "/img/projects/woolleymarket/exterior/marquee.jpg",
      "/img/projects/woolleymarket/exterior/paintingwall.jpg",
      "/img/projects/woolleymarket/exterior/gateway.jpg",
      "/img/projects/woolleymarket/exterior/rearentrance.jpg",
      "/img/projects/woolleymarket/exterior/rearlogo.jpg",
      "/img/projects/woolleymarket/exterior/coldbeer.jpg",
      "/img/projects/woolleymarket/exterior/painting_window.jpg",
      "/img/projects/woolleymarket/fisherman.jpg",
      "/img/projects/woolleymarket/interior/fisherman.jpg",
      "/img/projects/woolleymarket/specialitems/neon-detail.jpg",
      "/img/projects/woolleymarket/barn.jpg",
      "/img/projects/woolleymarket/interior/murals.jpg",
      "/img/projects/woolleymarket/interior/produce.jpg",
      "/img/projects/woolleymarket/interior/frozen.jpg",
      "/img/projects/woolleymarket/interior/hangingsigns.jpg",
      "/img/projects/woolleymarket/interior/cafe.jpg",
    ],
  },
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
    description:
      "Bike & Build organizes cross-country cycling trips that benefit affordable housing causes.",
    heroImages: [
      "/img/projects/bikebuild/photogrid.jpg",
      "/img/projects/bikebuild/pacificphoto.jpg",
      "/img/projects/bikebuild/fundraiserphoto.jpg",
      "/img/projects/bikebuild/fundraiser_animation_browser.gif",
      "/img/projects/bikebuild/devices.jpg",
      "/img/projects/bikebuild/flow.png",
      "/img/projects/bikebuild/routemap.gif",
      "/img/projects/bikebuild/2015_annual_report.jpg",
      "/img/projects/bikebuild/2015_jersey.jpg",
      "/img/projects/bikebuild/2015_jerseys_front.jpg",
      "/img/projects/bikebuild/2015_jerseys_back.jpg",
      "/img/projects/bikebuild/2013-annual-report.jpg",
      "/img/projects/bikebuild/2013_jerseys_front.jpg",
      "/img/projects/bikebuild/2013_jerseys_back.jpg",
      "/img/projects/bikebuild/card_sort.jpg",
    ],
  },
  {
    slug: "gnarrboro",
    title: "Gnarrboro",
    subtitle: "Brand identity for an outdoor adventure company",
    thumbnail: "/img/projects/thumbnails/gnarrboro.jpg",
    context: "Gnarrboro runs guided backcountry ski and bike trips.",
    services: ["Brand Identity", "Print Design"],
    year: "2015–2017",
    featured: false,
    description:
      "Building community on a platform—of trash.\n\nCarrboro, North Carolina. I am the co-inventor, designer, and unofficial \"construction foreman\" of the primary attraction— an open invitation to ride BMX ramps, built from discarded objects and materials on their way to a landfill.",
    heroImages: [
      "/img/projects/gnarrboro/carjump.jpg",
      "/img/projects/gnarrboro/flair.jpg",
      "/img/projects/gnarrboro/carve.jpg",
      "/img/projects/gnarrboro/hangs.jpg",
      "/img/projects/gnarrboro/table.jpg",
      "/img/projects/gnarrboro/toothpick.jpg",
      "/img/projects/gnarrboro/band.jpg",
      "/img/projects/gnarrboro/gnarrboro1_flyer.gif",
      "/img/projects/gnarrboro/gnarrboro2_flyer.gif",
    ],
    videos: [
      { label: "Film — Vimeo", url: "https://vimeo.com/130455113?fl=pl&fe=cm" },
      { label: "Video — YouTube", url: "https://youtu.be/jeP27ufIv3s" },
    ],
  },
  {
    slug: "canvas",
    title: "Canvas",
    subtitle: "Learning management platform for higher education",
    thumbnail: "/img/projects/thumbnails/canvas.png",
    context: "Learning management platform for higher education",
    services: ["Product Design", "UX Research"],
    year: "2018–2019",
    featured: true,
    description:
      "Placeholder — case study coming soon.",
    heroImages: [
      "/img/projects/canvas/canvas-1.jpg",
      "/img/projects/canvas/canvas-2.jpg",
      "/img/projects/canvas/canvas-3.jpg",
      "/img/projects/canvas/canvas-4.jpg",
      "/img/projects/canvas/canvas-5.jpg",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && !p.hidden);
}

export function getVisibleProjects(): Project[] {
  return projects.filter((p) => !p.hidden);
}
