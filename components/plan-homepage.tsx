"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Slideshow } from "@/components/home/slideshow";
import { CaseStudyOverlay } from "@/components/home/case-study-overlay";
import { Separator } from "@/components/ui/separator";
import type { AttentionPlan } from "@/components/plan-provider";
import type { Project } from "@/types";

interface PlanHomepageProps {
  plan: AttentionPlan;
}

export function PlanHomepage({ plan }: PlanHomepageProps) {
  const show5mSections = plan === "5m";

  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null);
  const handleProjectClick = useCallback((p: Project, rect: DOMRect | null) => {
    setOpenProject(p);
    setSourceRect(rect);
  }, []);
  const handleClose = useCallback(() => setOpenProject(null), []);

  return (
    <>
    <div
      className="flex flex-col min-h-screen transition-[filter,opacity] duration-300"
      style={
        openProject
          ? { filter: "blur(4px)", opacity: 0.6, pointerEvents: "none" }
          : {}
      }
    >
      <Header />

      <div className="pt-16">
        {/* Slideshow — full width */}
        <div className="mt-4">
          <Slideshow onProjectClick={handleProjectClick} />
        </div>

        {/* Core content */}
        <div className="max-w-[960px] mx-auto px-6 py-12 space-y-0">

          {/* Heading statement */}
          <section className="py-16">
            <h1 className="text-3xl font-bold leading-snug tracking-tight">
              Clarity and craft, with feeling.
            </h1>
          </section>

          <Separator />

          {/* Currently */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12 py-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Currently
            </p>
            <ul className="space-y-1.5">
              {[
                "Writing a Book",
                "Building an AI Underwriting Toolkit at HomeVision",
                "Making a complete financial OS for Solos at Lettuce",
                "~Vibing and Anti-Vibing~",
              ].map((item) => (
                <li key={item} className="text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <Separator />

          {/* Newsletter */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12 py-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Newsletter
            </p>
            <div>
              <p className="text-sm font-medium mb-1">IC1000</p>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Monthly career strategy to level up anyone on the path less managed.
              </p>
              <Link
                href="#newsletter"
                className="text-sm underline underline-offset-4 hover:text-muted-foreground transition-colors"
              >
                Subscribe
              </Link>
            </div>
          </section>

          <Separator />

          {/* Contact */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12 py-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Contact
            </p>
            <div className="space-y-1.5">
              {[
                { label: "Email", href: "mailto:alexbloomdesign@gmail.com" },
                { label: "Signal", href: "#" },
                { label: "Linkedin", href: "#" },
                { label: "Github", href: "https://github.com/alexbloom" },
                { label: "Instagram", href: "#" },
              ].map(({ label, href }) => (
                <div key={label}>
                  <Link
                    href={href}
                    className="text-sm hover:text-muted-foreground transition-colors"
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* 5m+ sections */}
          {show5mSections && (
            <>
              <Separator />
              <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12 py-16">
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  5m
                </p>
                <p className="text-sm text-muted-foreground">Extended content placeholder.</p>
              </section>
            </>
          )}
        </div>
      </div>
    </div>

    {openProject && (
      <CaseStudyOverlay project={openProject} onClose={handleClose} sourceRect={sourceRect} />
    )}
    </>
  );
}
