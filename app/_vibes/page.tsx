/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vibes",
  description: "A collection of vibes from Alex Bloom.",
};

// Web-ready images from public/img/vibes/ (excludes originals/ and src/)
const vibes = [
  "IMG_0075.webp",
  "IMG_0104.webp",
  "IMG_0201.webp",
  "IMG_0396.webp",
  "IMG_0566.webp",
  "IMG_0568.webp",
  "IMG_0569.webp",
  "IMG_0570.webp",
  "IMG_0775.webp",
  "IMG_0811.webp",
  "IMG_0874.webp",
  "IMG_0875.webp",
  "IMG_0880.webp",
  "IMG_0881.webp",
  "IMG_1054.webp",
  "IMG_1073.webp",
  "IMG_1075.webp",
  "IMG_1134.webp",
  "IMG_1170.webp",
  "IMG_1264.webp",
  "IMG_1511 2.webp",
  "IMG_1612.webp",
  "IMG_1937.webp",
  "IMG_1986.webp",
  "IMG_2101.webp",
  "IMG_2120.webp",
  "IMG_2183.webp",
  "IMG_2252.webp",
  "IMG_2272.webp",
  "IMG_2438.webp",
  "IMG_2469.webp",
  "IMG_2470.webp",
  "IMG_2492.webp",
  "IMG_2493.webp",
  "IMG_2499.webp",
  "IMG_2503.webp",
  "IMG_2506.webp",
  "IMG_2508.webp",
  "IMG_2512.webp",
  "IMG_2799.gif",
  "IMG_3048.webp",
  "IMG_3614.webp",
  "IMG_3655.webp",
  "IMG_3793.webp",
  "IMG_3796.webp",
  "IMG_3800.webp",
  "IMG_4078.webp",
  "IMG_4154 2.webp",
  "IMG_4155 2.webp",
  "IMG_4494.webp",
  "IMG_4595.webp",
  "IMG_9129.webp",
  "alex_by_spencer.webp",
  "basic_options.webp",
  "pumper.webp",
  "taxi_daddy.webp",
  "teton_lake_swim.webp",
];

export default function VibesPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
      <div className="mb-10">
        <h1 className="text-3xl lg:text-5xl font-bold leading-snug tracking-tight mb-2">
          Vibes
        </h1>
        <p className="text-muted-foreground">
          A visual scrapbook of places, people, and making.
        </p>
      </div>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {vibes.map((file) => (
          <li key={file} className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <img
              src={`/img/vibes/${encodeURIComponent(file)}`}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
