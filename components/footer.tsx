import Link from "next/link";

const socialLinks = [
  { href: "mailto:alexbloomdesign@gmail.com", label: "Email" },
  { href: "https://linkedin.com/in/alexbloom", label: "LinkedIn" },
  { href: "https://github.com/alexbloom", label: "GitHub" },
  { href: "https://dribbble.com/alexbloom", label: "Dribbble" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border px-6 py-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {year} Alex Bloom
        </p>

        <nav className="flex items-center gap-4">
          {socialLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
