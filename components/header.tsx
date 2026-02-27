import Link from "next/link";
import { cn } from "@/lib/utils";

const navLinks = [
  // { href: "/projects", label: "Projects" },
  { href: "/info", label: "Info" },
  { href: "/bookshelf", label: "Bookshelf" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-[1080px] mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight hover:opacity-70 transition-opacity"
        >
          Alex Bloom
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm text-muted-foreground hover:text-foreground transition-colors"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
