"use client";

import { useEffect, useState } from "react";

const triangles = [
  { path: "m-90 710 170-550 240 420Z", duration: 9, phase: -3 },
  { path: "m1210 240 280 500-410-45Z", duration: 13, phase: -8 },
  { path: "m1000-100-110 260 330 10Z", duration: 11, phase: -5 },
  { path: "m200 840 200 270-400-20Z", duration: 17, phase: -12 },
  { path: "m720 330 140 250-280-20Z", duration: 10, phase: -7 },
];

function Geometry({ kind, id }: { kind: "orb" | "prism" | "cube"; id: string }) {
  return (
    <svg viewBox="0 0 220 260" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${id}-front`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#62cbe4" /><stop offset="0.25" stopColor="#2778b6" />
          <stop offset="0.65" stopColor="#1b3e73" /><stop offset="1" stopColor="#131d33" />
        </linearGradient>
        <linearGradient id={`${id}-silver`} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#8ccec0" /><stop offset="0.22" stopColor="#e2e4c8" />
          <stop offset="0.4" stopColor="#b8a7cf" /><stop offset="0.6" stopColor="#70b9df" />
          <stop offset="1" stopColor="#1c598e" />
        </linearGradient>
        <linearGradient id={`${id}-side`} x1="0" y1="0" x2="0.4" y2="1">
          <stop stopColor="#91d5eb" /><stop offset="0.3" stopColor="#286f9f" />
          <stop offset="0.55" stopColor="#10243c" /><stop offset="1" stopColor="#35567c" />
        </linearGradient>
        <linearGradient id={`${id}-sphere`} x1="0" y1="1" x2="1" y2="0">
          <stop stopColor="#97d4bf" /><stop offset="0.25" stopColor="#2f76a7" />
          <stop offset="0.5" stopColor="#101f39" /><stop offset="0.75" stopColor="#215c9d" />
          <stop offset="1" stopColor="#68a8d8" />
        </linearGradient>
        <filter id={`${id}-grain`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" result="grain" />
          <feColorMatrix in="grain" type="saturate" values="0" />
          <feComponentTransfer><feFuncA type="linear" slope="0.22" /></feComponentTransfer>
          <feBlend in="SourceGraphic" mode="soft-light" result="textured" />
          <feComposite in="textured" in2="SourceGraphic" operator="in" />
        </filter>
      </defs>
      <g filter={`url(#${id}-grain)`} strokeLinejoin="round">
        {kind === "orb" ? <circle cx="110" cy="130" r="88" fill={`url(#${id}-sphere)`} stroke="#93b7cf" strokeWidth="1.5" /> : kind === "prism" ? <>
          <path d="m30 92 82-65 75 34-82 72Z" fill={`url(#${id}-silver)`} stroke="#a0d0de" />
          <path d="m30 92 75 41 28 115-74-42Z" fill={`url(#${id}-front)`} stroke="#477d9e" />
          <path d="m105 133 82-72 25 117-79 70Z" fill={`url(#${id}-side)`} stroke="#507d9f" />
          <path d="m30 92 75 41 82-72m-82 72 28 115" fill="none" stroke="#a7dce6" strokeWidth="1.5" />
        </> : <>
          <path d="m20 93 88-56 96 46-89 64Z" fill={`url(#${id}-silver)`} stroke="#a7c9d5" />
          <path d="m20 93 95 54 7 97-93-53Z" fill={`url(#${id}-front)`} stroke="#47779e" />
          <path d="m115 147 89-64 1 96-83 65Z" fill={`url(#${id}-side)`} stroke="#3a668e" />
          <path d="m20 93 95 54 89-64m-89 64 7 97" fill="none" stroke="#a7dce6" strokeWidth="1.5" />
        </>}
      </g>
    </svg>
  );
}

export function TrapperBackdrop() {
  const [reducedMotion, setReducedMotion] = useState(true);
  useEffect(() => {
    const root = document.documentElement;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let listening = false;
    function update() {
      frame = 0;
      const range = Math.max(1, root.scrollHeight - window.innerHeight);
      const progress = Math.max(0, Math.min(1, window.scrollY / range));
      root.style.setProperty("--trapper-depth", `${progress * 360}px`);
    }
    function schedule() {
      if (!frame) frame = window.requestAnimationFrame(update);
    }
    function sync() {
      setReducedMotion(motion.matches);
      const enabled = root.dataset.theme === "trapper" && !motion.matches;
      if (enabled === listening) return;
      listening = enabled;
      if (enabled) {
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule);
        schedule();
      } else {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        window.cancelAnimationFrame(frame);
        frame = 0;
        root.style.removeProperty("--trapper-depth");
      }
    }
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    motion.addEventListener("change", sync);
    sync();
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", sync);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.cancelAnimationFrame(frame);
      root.style.removeProperty("--trapper-depth");
    };
  }, []);

  return (
    <div className="trapper-backdrop" aria-hidden="true">
      <svg className="trapper-wireframe" viewBox="0 0 1440 1000" preserveAspectRatio="xMidYMid slice" focusable="false">
        <defs>
          {triangles.map((triangle, index) => (
            <linearGradient key={index} id={`trapper-neon-${index}`} x1="0" y1="0" x2="1" y2="1">
              {["#dd5974", "#ac416a", "#626b9f", "#489e80", "#8ac39e"].map((color, stop) => (
                <stop key={stop} offset={stop / 4} stopColor={color}>
                  {!reducedMotion && <animate attributeName="stop-color" values={`${color};${["#489e80", "#8ac39e", "#dd5974", "#ac416a", "#626b9f"][stop]};${color}`} dur={`${triangle.duration}s`} begin={`${triangle.phase}s`} repeatCount="indefinite" />}
                </stop>
              ))}
              {!reducedMotion && <animateTransform attributeName="gradientTransform" type="rotate" values={`${index * 67} .5 .5;${index * 67 + (index % 2 ? -360 : 360)} .5 .5`} dur={`${triangle.duration * 1.5}s`} begin={`${triangle.phase}s`} repeatCount="indefinite" />}
            </linearGradient>
          ))}
        </defs>
        <g fill="none" strokeWidth="14" opacity="0.95">
          {triangles.map((triangle, index) => <path key={index} d={triangle.path} stroke={`url(#trapper-neon-${index})`} opacity={index === 4 ? 0.45 : 1} />)}
        </g>
        <g stroke="#5ac1ea" opacity="0.35"><path d="M164 100v780M65 700h280M1208 390v380M1080 640h330" /></g>
      </svg>
      <div className="trapper-object trapper-orb"><Geometry kind="orb" id="trapper-orb" /></div>
      <div className="trapper-object trapper-prism"><Geometry kind="prism" id="trapper-prism" /></div>
      <div className="trapper-object trapper-cube"><Geometry kind="cube" id="trapper-cube" /></div>
      <div className="trapper-object trapper-small-orb"><Geometry kind="orb" id="trapper-small-orb" /></div>
    </div>
  );
}
