"use client";

import { useEffect, useRef } from "react";



export function AnimatedLogo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const eye = root?.querySelector<HTMLElement>("#eye");
    const pupil = root?.querySelector<HTMLElement>("#pupil");
    if (!eye || !pupil) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let hovering = false;
    let pointer: { x: number; y: number } | null = null;

    function updateGaze() {
      if (!eye || !pupil) return;
      let x = 0;
      let y = 0;
      if (!hovering && pointer && !reducedMotion.matches) {
        const bounds = eye.getBoundingClientRect();
        const responseDistance = Math.min(bounds.width, bounds.height) * 0.9;
        if (responseDistance > 0) {
          const dx = (pointer.x - bounds.left - bounds.width / 2) / responseDistance;
          const dy = (pointer.y - bounds.top - bounds.height / 2) / responseDistance;
          const distance = Math.max(1, Math.hypot(dx, dy));
          const radius = 4;
          x = dx / distance * radius;
          y = dy / distance * radius;
        }
      }
      pupil.style.setProperty("--gaze-x", x + "px");
      pupil.style.setProperty("--gaze-y", y + "px");
    }

    function move(event: PointerEvent) {
      if (event.pointerType === "touch") return;
      pointer = { x: event.clientX, y: event.clientY };
      updateGaze();
    }
    function enter() { hovering = true; updateGaze(); }
    function leave() { hovering = false; updateGaze(); }
    function reset() { pointer = null; updateGaze(); }

    window.addEventListener("pointermove", move, { passive: true, capture: true });
    eye.addEventListener("pointerenter", enter);
    eye.addEventListener("pointerleave", leave);
    document.documentElement.addEventListener("pointerleave", reset);
    window.addEventListener("blur", reset);
    window.addEventListener("resize", updateGaze, { passive: true });
    window.addEventListener("scroll", updateGaze, { passive: true });
    reducedMotion.addEventListener("change", updateGaze);
    const observer = new ResizeObserver(updateGaze);
    observer.observe(eye);

    return () => {
      window.removeEventListener("pointermove", move, true);
      eye.removeEventListener("pointerenter", enter);
      eye.removeEventListener("pointerleave", leave);
      document.documentElement.removeEventListener("pointerleave", reset);
      window.removeEventListener("blur", reset);
      window.removeEventListener("resize", updateGaze);
      window.removeEventListener("scroll", updateGaze);
      reducedMotion.removeEventListener("change", updateGaze);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="ab-logo-component" ref={rootRef} className="text-link">
  <div className="stage">
    <svg className="kells-logo-ornament" viewBox="0 0 260 260" aria-hidden="true" focusable="false">
      <defs>
        <pattern id="kells-logo-plait" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#30392f" /><path d="m-8 0 24 24M0-8 24 16M-8 16 16-8M0 24 24 0" stroke="#b6a262" strokeWidth="2.5" /><path d="M0 8 8 0 16 8 8 16Z" fill="none" stroke="#71908a" strokeWidth="1" /></pattern>
      </defs>
      <path d="M130 8 252 130 130 252 8 130Z" fill="none" stroke="#9c5942" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" />
      <path d="M130 19 241 130 130 241 19 130Z" fill="none" stroke="#393d2f" strokeWidth="17" strokeLinejoin="round" />
      <path d="M130 19 241 130 130 241 19 130Z" fill="none" stroke="url(#kells-logo-plait)" strokeWidth="12" strokeLinejoin="round" />
      <path d="M130 30 230 130 130 230 30 130Z" fill="none" stroke="#b9a261" strokeWidth="1.5" />
      {[0, 90, 180, 270].map((angle) => <g key={angle} transform={`rotate(${angle} 130 130)`}>
        <path d="M130 11c-30 10-27 43 0 43s30-33 0-43Z" fill="#9c5942" stroke="#ccb783" strokeWidth="2" />
        <path d="M129 19c-19 4-17 26 1 26 15 0 16-19 3-19-9 0-8 11-1 10" fill="none" stroke="#d4c18a" strokeWidth="2" strokeLinecap="round" />
        <path d="M80 45c-25-13-34 14-15 18s23-20 8-20c-9 0-10 12-3 12" fill="none" stroke="#71908a" strokeWidth="3" />
        <circle cx="95" cy="43" r="3" fill="#b6a262" stroke="#393d2f" />
      </g>)}
    </svg>
    <svg className="trapper-logo-box" viewBox="0 0 240 250" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="logo-box-top" x2="1" y2="1"><stop stopColor="#79b5bc" /><stop offset=".3" stopColor="#a8b6cf" /><stop offset=".65" stopColor="#286eaa" /><stop offset="1" stopColor="#183456" /></linearGradient>
        <linearGradient id="logo-box-left" x2=".8" y2="1"><stop stopColor="#388fc4" /><stop offset="1" stopColor="#15243f" /></linearGradient>
        <linearGradient id="logo-box-right" x2="1" y2="1"><stop stopColor="#193552" /><stop offset="1" stopColor="#316a99" /></linearGradient>
        <filter id="logo-box-grain" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="linear" slope="0.22" /></feComponentTransfer>
          <feBlend in="SourceGraphic" mode="soft-light" result="textured" />
          <feComposite in="textured" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <g filter="url(#logo-box-grain)">
      <path d="M8 106 120 12 232 106 120 200Z" fill="url(#logo-box-top)" stroke="#8ec5db" />
      <path d="M8 106 120 200 120 238 8 144Z" fill="url(#logo-box-left)" stroke="#517d9e" />
      <path d="M120 200 232 106 232 144 120 238Z" fill="url(#logo-box-right)" stroke="#517d9e" />
      <path d="M8 106 120 200 232 106M120 200V238" fill="none" stroke="#a0ccdd" />
      </g>
    </svg>
    <div className="logo-wrap">
      <div id="logo" role="group" aria-label="The digital office of Alex Bloom, rotating text around an eye in a diamond">
        <div id="cross-inner-ns" className="logo-cross"></div>
        <div id="cross-inner-ew" className="logo-cross"></div>
        <div id="cross-outer-nesw" className="logo-cross"></div>
        <div id="cross-outer-nwse" className="logo-cross"></div>
        <div id="circle">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <mask id="ab-ring-knockout" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" style={{ maskType: "luminance" }}>
                <circle cx="50" cy="50" r="50" fill="white"/>
                <circle cx="50" cy="50" r="36" fill="black"/>
                <g id="ring-type">
                  {/* Explicit angles keep the ring evenly spaced across SVG engines and font loading. */}
                  {Array.from("YOU HAVE REACHED THE OFFICE OF · ").map((character, index, characters) => (
                    <text key={index} x="50" y="10" textAnchor="middle" transform={`rotate(${index * 360 / characters.length} 50 50)`}>{character}</text>
                  ))}
                </g>
              </mask>
            </defs>
            <circle cx="50" cy="50" r="50" fill="currentColor" mask="url(#ab-ring-knockout)"/>
          </svg>
        </div>
        <a id="eye" href="mailto:alexbloomdesign@pm.me" aria-label="Email Alex Bloom"><div id="bracket-L" className="eye-bracket"></div><div id="pupil"></div><div id="bracket-R" className="eye-bracket"></div></a>
      </div>
    </div>
  </div>

    </div>
  );
}
