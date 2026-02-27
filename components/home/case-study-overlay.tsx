"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";
import { getVisibleProjects } from "@/content/projects";

function toEmbedUrl(url: string): string {
  // YouTube: youtu.be/ID or youtube.com/watch?v=ID
  const ytShort = url.match(/youtu\.be\/([^?&]+)/);
  if (ytShort) return `https://www.youtube.com/embed/${ytShort[1]}?autoplay=1`;
  const ytLong = url.match(/youtube\.com\/watch\?v=([^&]+)/);
  if (ytLong) return `https://www.youtube.com/embed/${ytLong[1]}?autoplay=1`;
  // Vimeo: vimeo.com/ID
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (vimeo) return `https://player.vimeo.com/video/${vimeo[1]}?autoplay=1`;
  return url;
}

interface CaseStudyOverlayProps {
  project: Project;
  onClose: () => void;
  /** Card's bounding rect at the moment of click; null on mobile (uses slide-up). */
  sourceRect?: DOMRect | null;
}

export function CaseStudyOverlay({
  project: initialProject,
  onClose,
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

  // FLIP zoom: panel starts at the card's screen position and expands to final.
  // Only applies when sourceRect is provided (desktop).
  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || !sourceRect) return;

    // Panel is already at its final layout position — capture it.
    const finalRect = panel.getBoundingClientRect();
    const scaleX = sourceRect.width / finalRect.width;
    const scaleY = sourceRect.height / finalRect.height;
    const dx =
      sourceRect.left + sourceRect.width / 2 - (finalRect.left + finalRect.width / 2);
    const dy =
      sourceRect.top + sourceRect.height / 2 - (finalRect.top + finalRect.height / 2);

    // Start: place the panel at the card's position/size (inverted transform).
    panel.style.transform = `translate(${dx}px, ${dy}px) scale(${scaleX}, ${scaleY})`;
    panel.style.transformOrigin = "center center";
    panel.style.transition = "none";

    // Force reflow so the browser registers the initial transform.
    void panel.offsetHeight;

    // Play: animate to final position.
    requestAnimationFrame(() => {
      panel.style.transform = "translate(0px, 0px) scale(1)";
      panel.style.transition =
        "transform 0.42s cubic-bezier(0.16, 1, 0.3, 1)";
    });

    return () => {
      if (panelRef.current) {
        panelRef.current.style.transform = "";
        panelRef.current.style.transition = "";
      }
    };
  }, [sourceRect]);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") navigateRef.current("next");
      if (e.key === "ArrowLeft") navigateRef.current("prev");
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

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

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex flex-col md:items-center md:pt-14 md:pb-8 md:px-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${currentProject.title} case study`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-white/80"
        style={{ animation: "plan-fade-in 0.2s ease both" }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={cn(
          "case-study-panel",
          "relative mt-auto bg-background overflow-y-auto",
          "rounded-t-2xl max-h-[92dvh]",
          "md:mt-0 md:rounded-2xl md:max-h-[80vh] md:w-full md:max-w-2xl md:shadow-xl"
        )}
        // When sourceRect is provided, our JS FLIP handles the entrance —
        // suppress the CSS keyframe animation so they don't conflict.
        style={sourceRect ? { animation: "none" } : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top nav */}
        <div className="flex items-center justify-between px-3 pt-3 pb-1">
          <button
            ref={closeBtnRef}
            onClick={onClose}
            className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Close case study"
          >
            <X className="w-4 h-4" />
          </button>
          <div className="flex gap-0.5">
            <button
              onClick={() => navigateRef.current("prev")}
              disabled={!prevProject}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateRef.current("next")}
              disabled={!nextProject}
              className="inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-30 disabled:pointer-events-none"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content — key changes on navigation to re-trigger slide animation */}
        <div key={contentKey} className="case-study-content" style={contentAnimStyle}>
          {/* Image carousel */}
          <div
            className="w-full overflow-x-auto flex gap-2 px-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none" }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative shrink-0 rounded-lg overflow-hidden bg-muted"
                style={{
                  width: "clamp(280px, 72vw, 640px)",
                  height: "clamp(260px, 60vh, 560px)",
                  scrollSnapAlign: "start",
                }}
              >
                <Image
                  src={src}
                  alt={
                    i === 0
                      ? currentProject.title
                      : `${currentProject.title} image ${i + 1}`
                  }
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80vw, 60vw"
                />
              </div>
            ))}
          </div>

          {/* Text content */}
          <div className="px-6 pt-6 pb-10 space-y-4 md:px-8">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              {currentProject.year}
            </p>
            <h1 className="text-2xl font-medium tracking-tight leading-snug">
              {currentProject.title}
            </h1>
            {currentProject.description && (
              <div className="space-y-2">
                {currentProject.description.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-muted-foreground leading-relaxed">
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
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Watch
                </p>
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
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  Press
                </p>
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
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  With
                </p>
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
                      <span className="text-muted-foreground"> — {role}</span>
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
                  View live project &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
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
