"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Slideshow } from "@/components/home/slideshow";
import { CaseStudyOverlay } from "@/components/home/case-study-overlay";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/types";

export function PlanHomepage() {
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const handleProjectClick = useCallback((p: Project, rect: DOMRect | null) => {
    setOpenProject(p);
    setIsBlurred(true);
    setSourceRect(rect);
  }, []);
  const handleClosing = useCallback(() => setIsBlurred(false), []);
  const handleClose = useCallback(() => setOpenProject(null), []);

  return (
    <>
    <div
      className="flex flex-col min-h-screen transition-[filter,opacity] duration-[250ms]"
      style={
        isBlurred
          ? { filter: "blur(4px)", opacity: 0.6, pointerEvents: "none" }
          : {}
      }
    >

      <div>
        {/* Slideshow — hidden for now; component + data preserved */}
        {false && (
          <div className="mt-4">
            <Slideshow onProjectClick={handleProjectClick} />
          </div>
        )}

        {/* Core content */}
        <div className="max-w-[960px] mx-auto px-6 py-12 space-y-0">

          {/* Heading statement */}
          <section className="py-16">
            <h1 className="text-3xl lg:text-5xl font-bold leading-snug tracking-tight">
              Clarity, Connection, and Craft.
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Available for consulting and advising.
            </p>
            <p className="mt-3">
              <Link
                href="https://www.figma.com/deck/L956p48owB2lqLKA0ulN2i/Alex-Bloom---Design-Samples-2025?node-id=0-1&t=AUQeoePTY8qXAe1Y-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                Work samples
              </Link>
            </p>
          </section>

          <Separator />

          {/* Currently */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-[220px_1fr] gap-y-3 gap-x-12 py-16">
            <p className="text-sm md:text-base lg:text-lg text-foreground">
              Currently
            </p>
            <ul className="space-y-1.5">
              {[
                { key: "available", content: "Available for consulting and advising" },
                { key: "rooms", content: "Exploring ideas in little rooms" },
                {
                  key: "homevision",
                  content: (
                    <>
                      Building an AI Underwriting Toolkit at{" "}
                      <Link
                        href="https://homevision.co"
                        className="group text-muted-foreground hover:text-foreground transition-colors"
                      >
                        HomeVision
                      </Link>
                    </>
                  ),
                },
                {
                  key: "lettuce",
                  content: (
                    <>
                      Making a complete financial OS for Solos at{" "}
                      <Link
                        href="https://lettuce.co"
                        className="group text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Lettuce
                      </Link>
                    </>
                  ),
                },
              ].map(({ key, content }) => (
                <li key={key} className="text-sm md:text-base lg:text-lg text-muted-foreground">
                  {content}
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          {/* Newsletter — hidden for now; content preserved */}
          {false && (
            <>
              <section className="grid grid-cols-1 min-[480px]:grid-cols-[220px_1fr] gap-y-3 gap-x-12 py-16">
                <p className="text-sm md:text-base lg:text-lg text-foreground">
                  Newsletter
                </p>
                <div>
                  <p className="text-sm md:text-base lg:text-lg font-medium text-muted-foreground mb-1">IC1000</p>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-3 leading-relaxed">
                    Monthly career strategy to level up anyone on the path less managed.
                  </p>
                  <Link
                    href="#newsletter"
                    className="group text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Subscribe
                  </Link>
                </div>
              </section>

              <Separator />
            </>
          )}

          {/* Connect */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-[220px_1fr] gap-y-3 gap-x-12 py-16">
            <p className="text-sm md:text-base lg:text-lg text-foreground">
              Connect
            </p>
            <div className="space-y-1.5">
              {[
                { label: "Email", href: "mailto:alexbloomdesign@pm.me" },
                { label: "Signal", href: "#" },
                { label: "Are.na", href: "https://www.are.na/alex-bloom" },
                { label: "Github", href: "https://github.com/alexbloom" },
                { label: "Instagram", href: "#" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <Link
                    href={href}
                    className="group text-sm md:text-base lg:text-lg text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>

    {openProject && (
      <CaseStudyOverlay project={openProject} onClose={handleClose} onClosing={handleClosing} sourceRect={sourceRect} />
    )}
    </>
  );
}
