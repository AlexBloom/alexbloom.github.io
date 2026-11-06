import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageOff } from "lucide-react";
import { tools } from "@/content/tools";

export const metadata: Metadata = {
  title: "Tools",
  description: "Tools for drawing, building, working, and keeping things in order.",
};

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-[960px] px-6 py-16">
      <p className="mb-8 text-sm"><Link href="/" className="underline underline-offset-4 hover:opacity-65">← Back to home</Link></p>
      <header className="mb-12 max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-5xl">Tools</h1>
        <p className="text-muted-foreground leading-relaxed">For drawing, building, working, and keeping things in order.</p>
      </header>

      <ol className="grid grid-cols-1 gap-x-12 sm:grid-cols-2">
        {tools.map((tool) => (
          <li key={tool.name} className="border-t py-7">
            <article className="flex items-start gap-4">
              <div className="w-24 shrink-0">
                {tool.thumbnail ? (
                  <a href={tool.buyUrl} target="_blank" rel="noopener noreferrer" className="block rounded bg-white p-2 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4" aria-label={`Buy ${tool.name}`}>
                    <Image src={tool.thumbnail.src} alt={tool.thumbnail.alt} width={400} height={400} sizes="80px" className="aspect-square w-full object-contain" />
                  </a>
                ) : (
                  <div className="flex aspect-square flex-col items-center justify-center gap-2 rounded bg-white px-2 text-center text-muted-foreground" role="img" aria-label="Product photo pending exact model verification">
                    <ImageOff className="h-5 w-5" aria-hidden="true" />
                    <span className="text-[10px] leading-tight">Photo pending</span>
                  </div>
                )}
                {tool.thumbnail?.caption && <p className="mt-2 text-[10px] leading-snug text-muted-foreground">{tool.thumbnail.caption}</p>}
              </div>
              <div className="min-w-0 flex-1 space-y-3">
              <h2 className="font-semibold leading-snug">{tool.name}</h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tool.beforeQuote}<q cite={tool.sourceUrl}>{tool.quote}</q>{tool.afterQuote}
              </p>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
                <a href={tool.buyUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-65" aria-label={`Buy ${tool.name}`}>
                  Buy
                </a>
              </div>
              {tool.note && <p className="text-xs leading-relaxed text-muted-foreground">{tool.note}</p>}
              </div>
            </article>
          </li>
        ))}
      </ol>

      <footer className="mt-8 border-t pt-6 text-xs leading-relaxed text-muted-foreground">
        <p>Descriptions include excerpts by Wikipedia contributors, available under <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="underline underline-offset-4">CC BY-SA 4.0</a>.</p>
        <p className="mt-2"><Link href="/" className="underline underline-offset-4">Back home</Link></p>
      </footer>
    </div>
  );
}
