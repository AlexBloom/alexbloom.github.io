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
          const radius = eye.clientHeight * 0.0475;
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
    <div id="ab-logo-component" ref={rootRef}>
  <div className="stage">
    <div className="logo-wrap">
      <div id="logo" role="group" aria-label="The digital office of Alex Bloom, rotating text around an eye in a diamond">
        <div id="cross-inner-ns" className="logo-cross"></div>
        <div id="cross-inner-ew" className="logo-cross"></div>
        <div id="cross-outer-nesw" className="logo-cross"></div>
        <div id="cross-outer-nwse" className="logo-cross"></div>
        <div id="circle">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <path id="ab-ring-path" d="M50,10 A40,40 0 1,1 50,90 A40,40 0 1,1 50,10"/>
              <mask id="ab-ring-knockout" maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100" style={{ maskType: "luminance" }}>
                <circle cx="50" cy="50" r="50" fill="white"/>
                <circle cx="50" cy="50" r="36" fill="black"/>
                <text id="ring-type"><textPath href="#ab-ring-path" textLength="245" lengthAdjust="spacing">YOU HAVE REACHED THE OFFICE OF · </textPath></text>
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
