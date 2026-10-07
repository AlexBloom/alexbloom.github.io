"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export function ProjectImageCarousel({ images, title }: ProjectImageCarouselProps) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return null;

  const prev = () => setCurrent((i) => Math.max(0, i - 1));
  const next = () => setCurrent((i) => Math.min(images.length - 1, i + 1));

  return (
    <div className="mb-12">
      {/* Image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images[current]}
        alt={`${title} — image ${current + 1}`}
        style={{
          maxHeight: "50vh",
          width: "auto",
          maxWidth: "100%",
          display: "block",
        }}
      />

      {/* Navigation */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 mt-3">
          <button
            onClick={prev}
            disabled={current === 0}
            className="disabled:opacity-20 text-foreground transition-opacity"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Tick indicators */}
          <div className="flex items-end h-6">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to image ${i + 1}`}
                className="flex items-end justify-center px-[5px]"
              >
                <span
                  className="block transition-all duration-150 ease-out"
                  style={{
                    width: 3,
                    height: i === current ? 20 : 12,
                    backgroundColor: i === current ? "#1a1a1a" : "#f5f5f4",
                  }}
                />
              </button>
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === images.length - 1}
            className="disabled:opacity-20 text-foreground transition-opacity"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
