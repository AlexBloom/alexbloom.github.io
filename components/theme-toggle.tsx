"use client";

import { useEffect, useRef, useState } from "react";
import { Palette, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { initializeTheme, themes } from "@/lib/theme";

export function ThemeToggle() {
  const [choice, setChoice] = useState("light");
  const [open, setOpen] = useState(false);
  const sessionChoice = useRef<string | undefined>(undefined);
  const panel = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const refresh = () => setChoice(initializeTheme(sessionChoice.current));
    const sync = (event: StorageEvent) => {
      if (event.key !== "theme" && event.key !== null) return;
      sessionChoice.current = undefined;
      refresh();
    };
    refresh();
    const timer = window.setInterval(refresh, 60_000);
    const systemThemes = [
      window.matchMedia("(prefers-color-scheme: dark)"),
      window.matchMedia("(prefers-color-scheme: light)"),
    ];
    systemThemes.forEach((query) => query.addEventListener("change", refresh));
    window.addEventListener("storage", sync);
    window.addEventListener("focus", refresh);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      window.clearInterval(timer);
      systemThemes.forEach((query) => query.removeEventListener("change", refresh));
      window.removeEventListener("storage", sync);
      window.removeEventListener("focus", refresh);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);

  function closeSheet() {
    setOpen(false);
    trigger.current?.focus();
  }

  function select(next: string) {
    sessionChoice.current = next;
    setChoice(initializeTheme(next));
    try { localStorage.setItem("theme", next); } catch { /* Keep this visit's choice. */ }
  }

  return (
    <>
      <div className="theme-ui fixed right-4 top-4 z-[250] font-sans">
        <Button ref={trigger} type="button" variant="ghost" size="icon" className="vibe-trigger h-11 w-11 text-muted-foreground hover:bg-accent hover:text-foreground" aria-label="Vibe Check" aria-expanded={open} aria-controls="vibe-check-sheet" onClick={() => setOpen(!open)}>
          <Palette className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
      <aside
        ref={panel}
        id="vibe-check-sheet"
        aria-labelledby="vibe-check-title"
        aria-hidden={!open}
        inert={!open}
        data-state={open ? "open" : "closed"}
        className="theme-ui theme-sheet fixed inset-y-0 right-0 z-[251] h-dvh overflow-y-auto border-l border-border bg-background p-6 font-sans text-muted-foreground outline-none"
      >
        <div className="mb-8 flex items-center justify-between gap-4">
          <h2 id="vibe-check-title" className="text-lg font-semibold text-foreground">Vibe Check</h2>
          <Button type="button" variant="ghost" size="icon" className="h-11 w-11 shrink-0 text-muted-foreground hover:bg-muted hover:text-muted-foreground" aria-label="Close Vibe Check" onClick={closeSheet}>
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <fieldset className="space-y-1">
          <legend className="sr-only">Theme</legend>
          {themes.map((theme) => (
            <label key={theme.id} className="relative flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted has-[:checked]:bg-muted">
              <input className="peer sr-only" type="radio" name="site-theme" value={theme.id} checked={choice === theme.id} onChange={() => select(theme.id)} />
              <span className="pointer-events-none absolute inset-0 rounded-md peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[-2px] peer-focus-visible:outline-ring" />
              <span className="flex-1">{theme.label}</span>
              {choice === theme.id && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
            </label>
          ))}
        </fieldset>
      </aside>
    </>
  );
}
