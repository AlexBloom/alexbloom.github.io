"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { PlanSwitcher } from "@/components/plan-switcher";
import { Slideshow } from "@/components/home/slideshow";
import { CaseStudyOverlay } from "@/components/home/case-study-overlay";
import type { AttentionPlan } from "@/components/plan-provider";
import type { Project } from "@/types";

interface PlanHomepageProps {
  plan: AttentionPlan;
}

export function PlanHomepage({ plan }: PlanHomepageProps) {
  const showHeader = plan === "5m";
  const show1mSections = plan === "1m" || plan === "5m";
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
      {/* Header — 5m only */}
      {showHeader && <Header />}

      <div className={showHeader ? "pt-16" : ""}>
        {/* Plan switcher */}
        <div className="max-w-[1080px] mx-auto px-6 pt-6 pb-2">
          <PlanSwitcher />
        </div>

        {/* Slideshow — full width */}
        <div className="mt-4">
          <Slideshow onProjectClick={handleProjectClick} />
        </div>

        {/* Core content */}
        <div className="max-w-[960px] mx-auto px-6 py-12 space-y-16">

          {/* Heading statement */}
          <section>
            <h1 className="text-3xl font-bold leading-snug tracking-tight">
              Clarity and craft, with feeling.
            </h1>
          </section>

          {/* Contact */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12">
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

          {/* Newsletter */}
          <section className="grid grid-cols-1 min-[480px]:grid-cols-2 gap-y-3 gap-x-12">
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

          {/* 1m+ sections */}
          {show1mSections && (
            <>
              {/* Loom video */}
              <section>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Introduction
                </p>
                <div className="relative w-full aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-xs text-muted-foreground">
                    Video coming soon
                  </p>
                  {/* Replace the div above with:
                  <iframe
                    src="https://www.loom.com/embed/YOUR_LOOM_ID"
                    className="absolute inset-0 w-full h-full rounded-lg"
                    allowFullScreen
                  /> */}
                </div>
              </section>

              {/* Services */}
              <section>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                  Services
                </p>
                <ul className="space-y-1.5">
                  {[
                    "Brand Identity",
                    "Product Design",
                    "Web Design",
                    "UX Research",
                    "Data Visualization",
                    "Print Design",
                  ].map((service) => (
                    <li key={service} className="text-sm">
                      {service}
                    </li>
                  ))}
                </ul>
              </section>
            </>
          )}

          {/* 5m+ sections */}
          {show5mSections && (
            <section>
              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-3">
                Currently
              </p>
              <ul className="space-y-2">
                {[
                  "— Placeholder item one",
                  "— Placeholder item two",
                  "— Placeholder item three",
                ].map((item) => (
                  <li key={item} className="text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
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
