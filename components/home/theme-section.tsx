"use client";

import { IlluminatedTitle } from "@/components/home/illuminated-title";
import { useEffect, useState, type ReactNode } from "react";

export function ThemeSection({ id, title, className, children }: { id: string; title: string; className: string; children: ReactNode }) {
  const [wiki, setWiki] = useState(false);
  const [desktop, setDesktop] = useState(false);
  const [open, setOpen] = useState(id === "about");
  useEffect(() => {
    const sync = () => setWiki(document.documentElement.dataset.theme === "wiki");
    const shell = document.querySelector(".site-content");
    const resize = () => setDesktop((shell?.getBoundingClientRect().width ?? window.innerWidth) >= 1000);
    const viewport = new ResizeObserver(resize);
    if (shell) viewport.observe(shell);
    resize();
    const reveal = () => { if (window.location.hash === `#${id}`) setOpen(true); };
    sync();
    reveal();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    window.addEventListener("hashchange", reveal);
    return () => { observer.disconnect(); window.removeEventListener("hashchange", reveal); viewport.disconnect(); };
  }, [id]);
  if (!wiki || desktop) return <section aria-labelledby={id} className={className}><h2 id={id} aria-label={title} className="scroll-mt-24"><IlluminatedTitle text={title} /></h2>{children}</section>;
  return <details className="wiki-section" open={open} onToggle={(event) => setOpen(event.currentTarget.open)}>
    <summary><h2 id={id} aria-label={title} className="scroll-mt-24"><IlluminatedTitle text={title} /></h2></summary>
    <div className="wiki-section-content">{children}</div>
  </details>;
}
