/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { getVisibleProjects } from "@/content/projects";

function toEmbedUrl(url: string): string {
  const ytShort = url.match(/youtu\.be\/([^?&]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}?autoplay=1`;
  const ytLong = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (ytLong) return `https://www.youtube.com/embed/${ytLong[1]}?autoplay=1`;
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return url;
}

interface CaseStudyOverlayProps {
  project: Project;
  onClose: () => void;
  onClosing?: () => void;
  /** Card bounding rect at click time; null on mobile (uses fade-in). */
  sourceRect?: DOMRect | null;
}

export function CaseStudyOverlay({
  project: initialProject,
  onClose,
  onClosing,
  sourceRect,
}: CaseStudyOverlayProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(initialProject);
  const [direction, setDirection] = useState<"next" | "prev" | null>(null);
  const [contentKey, setContentKey] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  const visibleProjects = getVisibleProjects();
  const currentIndex = visibleProjects.findIndex((p) => p.slug === currentProject.slug);
  const prevProject = currentIndex > 0 ? visibleProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < visibleProjects.length - 1 ? visibleProjects[currentIndex + 1] : null;

  const navigateRef = useRef<(dir: "next" | "prev") => void>(() => {});
  navigateRef.current = (dir: "next" | "prev") => {
    const target = dir === "next" ? nextProject : prevProject;
    if (!target) return;
    setDirection(dir);
    setCurrentProject(target);
    setContentKey((k) => k + 1);
  };

  // Single-step close: panel fades + shrinks back to card in one motion.
  const handleCloseRef = useRef<() => void>(() => {});
  handleCloseRef.current = () => {
    const panel = panelRef.current;
    if (!panel) { onClose(); return; }

    onClosing?.();

    if (sourceRect) {
      const currentRect = panel.getBoundingClientRect();
      const scaleX = sourceRect.width / currentRect.width;
      const scaleY = sourceRect.height / currentRect.height;
      const dx =
        sourceRect.left + sourceRect.width / 2 - (currentRect.left + currentRect.width / 2);
      const dy =
        sourceRect.top + sourceRect.height / 2 - (currentRect.top + currentRect.height / 2);

      panel.style.transformOrigin = "center center";
      panel.style.transition =
        "transform 0.25s cubic-bezier(0.4, 0, 0.6, 1), opacity 0.2s ease";
      panel.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
      panel.style.opacity = "0";
      setTimeout(() => onClose(), 270);
    } else {
      panel.style.transition = "opacity 0.25s ease";
      panel.style.opacity = "0";
      setTimeout(() => onClose(), 270);
    }
  };

  // FLIP open: panel expands from card bounding rect to full screen.
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || !sourceRect) return;

    const finalRect = panel.getBoundingClientRect();
    const scaleX = sourceRect.width / finalRect.width;
    const scaleY = sourceRect.height / finalRect.height;
    const dx =
      sourceRect.left + sourceRect.width / 2 - (finalRect.left + finalRect.width / 2);
    const dy =
      sourceRect.top + sourceRect.height / 2 - (finalRect.top + finalRect.height / 2);

    panel.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
    panel.style.transformOrigin = "center center";
    panel.style.transition = "none";
    void panel.offsetHeight;

    requestAnimationFrame(() => {
      panel.style.transform = "translate(0px, 0px) scale(1)";
      panel.style.transition = "transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    return () => {
      const el = panelRef.current;
      if (el) {
        el.style.transform = "";
        el.style.transition = "";
      }
    };
  }, [sourceRect]);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseRef.current();
      if (e.key === "ArrowRight") navigateRef.current("next");
      if (e.key === "ArrowLeft") navigateRef.current("prev");
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const images = [currentProject.thumbnail, ...(currentProject.heroImages ?? [])];

  const contentAnimStyle =
    direction === "next"
      ? { animation: "case-study-slide-next 0.3s cubic-bezier(0.16,1,0.3,1) both" }
      : direction === "prev"
      ? { animation: "case-study-slide-prev 0.3s cubic-bezier(0.16,1,0.3,1) both" }
      : {};

  const btnCls =
    "inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30 disabled:pointer-events-none";

  return createPortal(
    <div
      className="fixed inset-0 z-[100]"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} case study`}
    >
      {/* Full-screen page panel */}
      <div
        ref={panelRef}
        className="absolute inset-0 bg-background overflow-y-auto"
        style={
          sourceRect
            ? { animation: "none" }
            : { animation: "case-study-fade-in 0.28s ease both" }
        }
      >
        {/* Sticky top nav — constrained to 960px */}
        <div className="sticky top-0 z-10 bg-background/90 backdrop-blur-sm">
          <div className="max-w-[960px] mx-auto px-6 flex items-center justify-between py-3">
            <button
              ref={closeBtnRef}
              onClick={() => handleCloseRef.current()}
              className={btnCls}
              aria-label="Close case study"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex gap-0.5">
              <button
                onClick={() => navigateRef.current("prev")}
                disabled={!prevProject}
                className={btnCls}
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateRef.current("next")}
                disabled={!nextProject}
                className={btnCls}
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content — key re-triggers slide animation on navigation */}
        <div key={contentKey} className="case-study-content" style={contentAnimStyle}>
          {/* Image row — full viewport width, images at natural width × 50vh height */}
          <div
            className="w-full overflow-x-auto flex [&::-webkit-scrollbar]:hidden mt-6"
            style={{
              scrollbarWidth: "none",
              gap: 32,
              height: "min(50vh, 560px)",
              paddingLeft: "calc(max(0px, (100vw - 960px) / 2) + 1.5rem)",
            }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={i === 0 ? currentProject.title : `${currentProject.title} image ${i + 1}`}
                style={{
                  height: "100%",
                  width: "auto",
                  flexShrink: 0,
                  display: "block",
                  marginRight: i === images.length - 1 ? "calc(max(0px, (100vw - 960px) / 2) + 1.5rem)" : 0,
                }}
              />
            ))}
          </div>

          {/* Text — constrained to 960px */}
          <div className="max-w-[960px] mx-auto px-6 pt-8 pb-24 space-y-4">
            {/* Title row: title left, year right */}
            <div className="flex items-baseline justify-between gap-4">
              <h1 className="text-lg md:text-xl lg:text-3xl font-medium tracking-tight leading-snug">
                {currentProject.title}
              </h1>
              <span className="text-xs text-muted-foreground uppercase tracking-widest shrink-0">
                {currentProject.year}
              </span>
            </div>

            {currentProject.description && (
              <div className="space-y-2">
                {currentProject.description.split("\n\n").map((para, i) => (
                  <p
                    key={i}
                    className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed"
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5">
              {currentProject.services.map((s) => (
                <Badge key={s} variant="secondary" className="text-xs">
                  {s}
                </Badge>
              ))}
            </div>

            {currentProject.videos && currentProject.videos.length > 0 && (
              <div className="pt-1 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Watch</p>
                <div className="flex flex-wrap gap-3">
                  {currentProject.videos.map(({ label, url }) => (
                    <button
                      key={label}
                      onClick={() => setActiveVideoUrl(url)}
                      className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentProject.links && currentProject.links.length > 0 && (
              <div className="pt-1 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Press</p>
                <div className="flex flex-wrap gap-3">
                  {currentProject.links.map(({ label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {currentProject.credits && currentProject.credits.length > 0 && (
              <div className="pt-1 space-y-2">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">With</p>
                <div className="space-y-1">
                  {currentProject.credits.map(({ name, role, url }) => (
                    <div key={name} className="text-sm">
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline underline-offset-4 hover:text-muted-foreground transition-colors"
                        >
                          {name}
                        </a>
                      ) : (
                        <span>{name}</span>
                      )}
                      {role && <span className="text-muted-foreground"> — {role}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentProject.launchLink && (
              <div className="pt-1">
                <a
                  href={currentProject.launchLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium underline underline-offset-4 hover:text-muted-foreground transition-colors"
                >
                  View live project
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video embed overlay */}
      {activeVideoUrl &&
        createPortal(
          <div
            className="fixed inset-0 z-[200] flex flex-col bg-black"
            role="dialog"
            aria-modal="true"
            aria-label="Video player"
          >
            <div className="flex justify-end p-3">
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="inline-flex items-center justify-center w-9 h-9 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 px-4 pb-6">
              <iframe
                src={toEmbedUrl(activeVideoUrl)}
                className="w-full h-full rounded-lg"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>,
          document.body
        )}
    </div>,
    document.body
  );
}
