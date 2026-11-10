"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Check, ChevronDown, X } from "lucide-react";
import { captureThemeWipe } from "@/components/theme-wipe";
import { Button } from "@/components/ui/button";
import { initializeTheme, themes } from "@/lib/theme";

function WaveLine({ active }: { active: boolean }) {
  const path = useRef<SVGPathElement>(null);
  const energized = useRef(active);
  energized.current = active;

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let previous = 0;
    let phase = 0;
    let intensity = 0;
    function draw(time: number) {
      const elapsed = previous ? Math.min((time - previous) / 1000, 0.05) : 0;
      previous = time;
      intensity += ((energized.current ? 1 : 0) - intensity) * (1 - Math.exp(-elapsed * 10));
      phase += elapsed * (1.65 + intensity * 3.35);
      const amplitude = motion.matches ? 0 : 5.45 + intensity * 3.55;
      const cycles = 1 + intensity * 1.5;
      const points = Array.from({ length: 65 }, (_, i) => {
        const x = i / 64;
        const y = 12 + Math.sin(x * Math.PI * 2 * cycles + phase) * amplitude * Math.sin(x * Math.PI);
        return `${i ? "L" : "M"}${(x * 20 + 2).toFixed(2)},${y.toFixed(2)}`;
      });
      path.current?.setAttribute("d", points.join(" "));
      frame = requestAnimationFrame(draw);
    }
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, []);

  return <svg className="vibe-wave" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path ref={path} d="M2,12 L22,12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
}

const bSideIds = new Set(["winamp", "wiki", "newspaper", "lisa-frank", "kells", "escher", "risograph"]);

type ThemeTransition = { finished: Promise<void>; skipTransition: () => void };

export function ThemeToggle() {
  const [bSidesOpen, setBSidesOpen] = useState(false);
  const [waveActive, setWaveActive] = useState(false);
  const transition = useRef<ThemeTransition | undefined>(undefined);
  const [choice, setChoice] = useState("light");
  const [open, setOpen] = useState(false);
  const sessionChoice = useRef<string | undefined>(undefined);
  const panel = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  function activateWave() {
    setWaveActive(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }

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
    if (bSideIds.has(sessionChoice.current ?? document.documentElement.dataset.theme ?? "")) setBSidesOpen(true);
    panel.current?.querySelector<HTMLButtonElement>("button")?.focus();
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeSheet();
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
    transition.current?.skipTransition();
    flushSync(() => setOpen(false));
    trigger.current?.focus();
    const reveal = next !== choice && !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? captureThemeWipe() : undefined;
    sessionChoice.current = next;
    flushSync(() => setChoice(initializeTheme(next)));
    try { localStorage.setItem("theme", next); } catch { /* Keep this visit's choice. */ }
    if (reveal) transition.current = reveal();
  }

  function renderTheme(theme: (typeof themes)[number]) {
    return (
            <label key={theme.id} className="relative flex min-h-11 cursor-pointer items-center gap-3 rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted has-[:checked]:bg-muted">
              <input className="peer sr-only" type="radio" name="site-theme" value={theme.id} checked={choice === theme.id} onChange={() => {}} onClick={() => select(theme.id)} onKeyDown={(event) => { if (event.key === " ") { event.preventDefault(); select(theme.id); } }} />
              <span className="pointer-events-none absolute inset-0 rounded-md peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-[-2px] peer-focus-visible:outline-ring" />
              <span className="flex-1">{theme.label}</span>
              {choice === theme.id && <Check className="h-4 w-4 shrink-0" aria-hidden="true" />}
            </label>
    );
  }

  return (
    <>
      <div className="theme-ui fixed right-4 top-4 z-[250] font-sans">
        <Button ref={trigger} type="button" variant="ghost" className="vibe-trigger h-11 gap-2 px-2 text-muted-foreground" aria-label="Vibe Check" aria-expanded={open} aria-controls="vibe-check-sheet" onMouseEnter={activateWave} onMouseLeave={() => setWaveActive(false)} onFocus={activateWave} onBlur={() => setWaveActive(false)} onClick={() => open ? closeSheet() : setOpen(true)}>
          <span className="hidden md:inline">vibe</span>
          <WaveLine active={waveActive} />
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
        <div className="flex items-center justify-between gap-4">
          <h2 id="vibe-check-title" className="text-lg font-semibold text-foreground">vibe check</h2>
          <Button type="button" variant="ghost" size="icon" className="h-11 w-11 shrink-0 text-muted-foreground hover:bg-muted hover:text-muted-foreground" aria-label="Close Vibe Check" onClick={closeSheet}>
            <X className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
        <fieldset className="space-y-1">
          <legend className="sr-only">Theme</legend>
          {themes.filter((theme) => !bSideIds.has(theme.id)).map(renderTheme)}
          <div>
            <button type="button" className="flex min-h-11 w-full items-center justify-between rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-ring" aria-expanded={bSidesOpen} aria-controls="b-sides-themes" onClick={() => setBSidesOpen(!bSidesOpen)}>
              <span>B-Sides</span>
              <ChevronDown className={`h-4 w-4 transition-transform motion-reduce:transition-none ${bSidesOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div id="b-sides-themes" hidden={!bSidesOpen} className="ml-3 space-y-1 border-l border-border pl-2">
              {themes.filter((theme) => bSideIds.has(theme.id)).map(renderTheme)}
            </div>
          </div>
        </fieldset>
      </aside>
    </>
  );
}
