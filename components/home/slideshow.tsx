"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { getVisibleProjects } from "@/content/projects";
import type { Project } from "@/types";

interface SlideshowProps {
  onProjectClick: (project: Project, sourceRect: DOMRect | null) => void;
}

function endYear(year: string): number {
  if (/present/i.test(year) || /ongoing/i.test(year)) return 9999;
  const nums = year.match(/\d{4}/g);
  if (!nums) return 0;
  return Math.max(...nums.map(Number));
}

function startYear(year: string): number {
  const nums = year.match(/\d{4}/g);
  if (!nums) return 0;
  return Math.min(...nums.map(Number));
}

const visibleProjects = getVisibleProjects()
  .slice()
  .sort((a, b) => {
    const endDiff = endYear(b.year) - endYear(a.year);
    if (endDiff !== 0) return endDiff;
    return startYear(b.year) - startYear(a.year);
  });

export function Slideshow({ onProjectClick }: SlideshowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const containerCenter = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const dist = Math.abs(card.offsetLeft + card.offsetWidth / 2 - containerCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = cardRefs.current[index];
    if (!card) return;
    el.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - el.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const getBarHeight = (index: number): number => {
    if (hoveredBar !== null) {
      const dist = Math.abs(index - hoveredBar);
      if (dist === 0) return 30;
      if (dist === 1) return 22;
      if (dist === 2) return 17;
    }
    return 18;
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none", paddingTop: 22, paddingBottom: 40 }}
      >
        <div className="flex" style={{ gap: 40, paddingLeft: 24, paddingRight: 24 }}>
          {visibleProjects.map((project, i) => (
            <button
              key={project.slug}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={(e) => {
                const isMobile = window.innerWidth < 768;
                onProjectClick(
                  project,
                  isMobile ? null : e.currentTarget.getBoundingClientRect()
                );
              }}
              aria-label={`View ${project.title} case study`}
              className="shrink-0 cursor-pointer text-left rounded-xl"
              style={{
                width: "clamp(200px, 35vw, 380px)",
                background: "white",
                border: "none",
                padding: 0,
              }}
            >
              {/* 8px polaroid border, image gets rounded (4px) */}
              <div style={{ padding: "8px 8px 0 8px" }}>
                <div
                  className="relative overflow-hidden"
                  style={{ width: "100%", aspectRatio: "1 / 1", borderRadius: 4 }}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 35vw"
                  />
                </div>
              </div>
              {/* Polaroid caption — Geist Mono */}
              <div
                className="flex items-center justify-between gap-3 font-mono"
                style={{ padding: 16 }}
              >
                <span className="text-sm uppercase tracking-normal text-gray-700 truncate leading-tight">
                  {project.title}
                </span>
                <span className="text-sm text-gray-400 shrink-0 tabular-nums">
                  {project.year}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tick indicator */}
      <div
        className="flex items-end justify-center h-9"
        onMouseLeave={() => setHoveredBar(null)}
      >
        {visibleProjects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            onMouseEnter={() => setHoveredBar(i)}
            className="cursor-pointer flex items-end justify-center px-[8px]"
            aria-label={`Go to slide ${i + 1}`}
          >
            <span
              className="block transition-all duration-150 ease-out"
              style={{
                width: 3,
                height: getBarHeight(i),
                backgroundColor: i === activeIndex ? "#1a1a1a" : "#e7e5e4",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
