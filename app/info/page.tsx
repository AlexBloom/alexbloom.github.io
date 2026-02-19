import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info",
  description: "About Alex Bloom — designer.",
};

export default function InfoPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h1 className="text-2xl font-medium mb-8">Info</h1>

      {/* Bio */}
      <section className="mb-12 prose prose-zinc">
        <p className="text-muted-foreground leading-relaxed">
          {/* Replace with your bio */}
          Designer. Content placeholder.
        </p>
      </section>

      {/* Sections — mirror the Jekyll info.html structure */}
      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          I believe in
        </h2>
        <ul className="space-y-1 text-sm">
          <li>Placeholder</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          I provide
        </h2>
        <ul className="space-y-1 text-sm">
          <li>Placeholder</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Also me
        </h2>
        <ul className="space-y-1 text-sm">
          <li>Placeholder</li>
        </ul>
      </section>
    </div>
  );
}
