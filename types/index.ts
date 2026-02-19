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
  description?: string;
}

export interface Book {
  title: string;
  author: string;
  cover: string;
  bookshopUrl?: string;
  description?: string;
  notes?: string;
}
