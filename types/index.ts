export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  context: string;
  services: string[];
  partners?: string;
  year: string;
  launchLink?: string;
  heroImages?: string[];
  featured: boolean;
  hidden?: boolean;
  description?: string;
  links?: { label: string; url: string }[];
  videos?: { label: string; url: string }[];
  credits?: { name: string; role: string; url?: string }[];
}

export interface Book {
  title: string;
  author: string;
  cover: string;
  bookshopUrl?: string;
  description?: string;
  notes?: string;
}
