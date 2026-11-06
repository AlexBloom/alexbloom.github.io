"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";

type Position = { x: number; y: number };
const stickers = [
  { name: "Rainbow cloud", kind: "rainbow", dx: 0, dy: 0.12, angle: -18, holo: false },
  { name: "Cosmic cat", kind: "cat", dx: 0.62, dy: 0, angle: 13, holo: true },
  { name: "Electric heart", kind: "heart", dx: 0.08, dy: 0.68, angle: 16, holo: true },
  { name: "Disco flower", kind: "flower", dx: 0.7, dy: 0.72, angle: -14, holo: false },
  { name: "Shooting star", kind: "star", dx: 0.02, dy: 1.25, angle: -10, holo: true },
  { name: "Rainbow butterfly", kind: "butterfly", dx: 0.65, dy: 1.32, angle: 20, holo: false },
];

function StickerArt({ kind, holographic }: { kind: string; holographic: boolean }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" focusable="false">
      {holographic && <defs>
        <linearGradient id={`${id}-foil`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#748198" /><stop offset="0.18" stopColor="#f7fbff" />
          <stop offset="0.35" stopColor="#a9d6e7" /><stop offset="0.5" stopColor="#e7caff" />
          <stop offset="0.64" stopColor="#9daabd" /><stop offset="0.8" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b5e5d9" />
        </linearGradient>
        <mask id={`${id}-mask`} style={{ maskType: "alpha" }}><use href={`#${id}-ink`} /></mask>
      </defs>}
      <g id={`${id}-ink`} className="sticker-ink">
      {kind === "rainbow" && <>
        <path d="M15 83V62a45 45 0 0 1 90 0v21" stroke="white" strokeWidth="23" />
        {["#fa249f", "#ff922b", "#fff043", "#52de7b", "#19c5ee", "#9750dd"].map((color, i) => <path key={color} d={`M${15 + i * 5} 83V62a${45-i*5} ${45-i*5} 0 0 1 ${90-i*10} 0v21`} stroke={color} strokeWidth="6" />)}
        <path d="M5 87c0-9 8-14 16-11 1-15 23-15 25-1 14-2 20 20 4 25H16C5 100 1 95 5 87ZM74 86c-1-11 10-17 19-12 6-14 26-7 23 7 14 6 8 22-4 21H83c-12 0-18-10-9-16Z" fill="#fff8ff" stroke="white" strokeWidth="5" />
        <path d="m24 87 2 0m11 0h2m50 0h2m11 0h2M29 94q4 4 8 0m53 1q5 4 9-1" stroke="#693b88" strokeWidth="3" strokeLinecap="round" />
      </>}
      {kind === "cat" && <>
        <path d="m20 45-1-32 31 18h20l31-18-1 33c19 28 10 61-40 61S1 75 20 45Z" fill="#ad66e8" stroke="white" strokeWidth="7" strokeLinejoin="round" />
        <path d="m27 38-1-13 15 11M81 36l13-11-1 14" fill="#ff7ccc" />
        <path d="M57 32 49 52l12-5-5 18 19-28-13 6 6-11" fill="#fff14b" />
        <path d="M25 63q12-15 25 0-13 20-25 0ZM71 63q12-15 25 0-13 20-25 0Z" fill="#61f4dd" stroke="#633184" strokeWidth="3" />
        <path d="M38 58v10m46-10v10" stroke="#412358" strokeWidth="4" strokeLinecap="round" />
        <path d="m53 78 7 6 7-6Z" fill="#ff399e" />
        <path d="M60 84v5m0 0q-7 6-12 0m12 0q7 6 12 0M30 80l-20-4m21 11L9 90m81-10 20-4M89 87l22 3" stroke="#633184" strokeWidth="2.5" strokeLinecap="round" />
        <path d="m102 4 3 8 8 3-8 3-3 8-3-8-8-3 8-3Z" fill="#fff14b" />
      </>}
      {kind === "heart" && <>
        <path d="M60 105 14 62C-9 33 29-3 60 28 91-3 129 33 106 62Z" fill="#ff32aa" stroke="white" strokeWidth="8" strokeLinejoin="round" />
        <path d="m62 24-23 39h19l-6 32 31-48H64l10-23Z" fill="#fff443" stroke="#b168f3" strokeWidth="3" strokeLinejoin="round" />
        <path d="M21 43q1-13 16-13" stroke="#ffa9dc" strokeWidth="6" strokeLinecap="round" />
        <path d="m103 86 3 7 8 2-8 3-3 8-3-8-7-3 7-2Z" fill="#19d2db" />
      </>}
      {kind === "flower" && <>
        <g stroke="white" strokeWidth="5">{["#ff43b5", "#ffac33", "#fff145", "#64e36b", "#27d5ee", "#a076f1"].map((color, i) => <ellipse key={color} cx="60" cy="30" rx="18" ry="25" transform={`rotate(${i*60} 60 60)`} fill={color} />)}</g>
        <circle cx="60" cy="60" r="24" fill="#fff268" stroke="white" strokeWidth="4" />
        <path d="M50 55v5m20-5v5m-21 7q11 14 22 0" stroke="#87438d" strokeWidth="3" strokeLinecap="round" />
        <circle cx="44" cy="66" r="4" fill="#ff9cc5" /><circle cx="76" cy="66" r="4" fill="#ff9cc5" />
      </>}
      {kind === "star" && <>
        <path d="m10 99 62-61M8 78l44-32m-24 62 39-43" stroke="white" strokeWidth="13" strokeLinecap="round" />
        <path d="m10 99 62-61" stroke="#ff42ad" strokeWidth="8" strokeLinecap="round" /><path d="m8 78 44-32" stroke="#23d5e7" strokeWidth="8" strokeLinecap="round" /><path d="m28 108 39-43" stroke="#ffb42f" strokeWidth="8" strokeLinecap="round" />
        <path d="m76 8 11 24 27 4-20 19 5 28-24-13-24 12 5-28-19-19 27-3Z" fill="#fff24e" stroke="white" strokeWidth="6" strokeLinejoin="round" />
        <path d="m76 23 6 15 17 3-12 11 2 16-14-8-14 7 4-16-12-12 16-1Z" fill="#ff90c9" />
      </>}
      {kind === "butterfly" && <>
        <path d="M58 53C36-5 0 13 9 51c3 16 20 20 41 16-43 1-42 47-13 38 14-4 18-19 23-31 5 12 9 27 23 31 29 9 30-37-13-38 21 4 38 0 41-16 9-38-27-56-49 2Z" fill="#26dcd3" stroke="white" strokeWidth="7" />
        <path d="M47 54C22 14 8 34 25 49l23 11m24-6c25-40 39-20 22-5L71 60M47 78q-32 9-14 19m40-19q32 9 14 19" stroke="#a148d2" strokeWidth="11" strokeLinecap="round" />
        <path d="m60 56-1 29m0-34-8-13m9 13 9-13" stroke="#f126a0" strokeWidth="7" strokeLinecap="round" />
        <circle cx="29" cy="36" r="5" fill="#fff146" /><circle cx="92" cy="36" r="5" fill="#fff146" />
      </>}
      </g>
      {holographic && <g mask={`url(#${id}-mask)`} pointerEvents="none">
        <rect width="120" height="120" fill={`url(#${id}-foil)`} opacity="0.5" />
        <path className="sticker-foil-glint" d="M-80-30h20l80 180H0Z" fill="white" opacity="0.65" />
      </g>}
    </svg>
  );
}

export function LisaPlayground() {
  const [active, setActive] = useState(false);
  const [positions, setPositions] = useState<Position[]>(stickers.map(() => ({ x: 0, y: 0 })));
  const playground = useRef<HTMLDivElement>(null);
  const placed = useRef(false);
  const topLayer = useRef(stickers.length);
  const [layers, setLayers] = useState(stickers.map((_, i) => i));
  const drag = useRef<{ index: number; pointer: number; x: number; y: number; start: Position } | null>(null);

  useEffect(() => {
    const sync = () => setActive(document.documentElement.dataset.theme === "lisa-frank");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const fit = () => {
      const width = playground.current?.clientWidth ?? window.innerWidth;
      const size = Math.min(125, Math.max(64, width * 0.09));
      if (!placed.current) {
        const left = width - size * 1.85 - 20;
        setPositions(stickers.map(({ dx, dy }) => ({
          x: Math.max(0, Math.min(1 - size / width, (left + dx * size) / width)),
          y: Math.max(0, Math.min(1 - size / window.innerHeight, (88 + dy * size) / window.innerHeight)),
        })));
        placed.current = true;
        return;
      }
      setPositions((current) => current.map(({ x, y }) => ({
        x: Math.max(0, Math.min(1 - size / width, x)),
        y: Math.max(0, Math.min(1 - size / window.innerHeight, y)),
      })));
    };
    fit();
    const observer = new ResizeObserver(fit);
    if (playground.current) observer.observe(playground.current);
    return () => observer.disconnect();
  }, [active]);

  function move(index: number, x: number, y: number, element: HTMLElement) {
    const width = playground.current?.clientWidth ?? window.innerWidth;
    const maxX = Math.max(0, 1 - element.offsetWidth / width);
    const maxY = Math.max(0, 1 - element.offsetHeight / window.innerHeight);
    setPositions((current) => current.map((position, i) => i === index ? { x: Math.max(0, Math.min(maxX, x)), y: Math.max(0, Math.min(maxY, y)) } : position));
  }

  function start(event: ReactPointerEvent<HTMLButtonElement>, index: number) {
    if (event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    const layer = ++topLayer.current;
    setLayers((current) => current.map((value, i) => i === index ? layer : value));
    drag.current = { index, pointer: event.pointerId, x: event.clientX, y: event.clientY, start: positions[index] };
  }

  if (!active) return null;

  return (
    <div ref={playground} className="lisa-playground" role="group" aria-label="Moveable rainbow stickers">
      <p id="sticker-instructions" className="sr-only">Drag a sticker to move it. With a sticker focused, use the arrow keys to move it, or Shift and an arrow key for a larger step.</p>
      <div className="lisa-glitter" aria-hidden="true">
        {Array.from({ length: 88 }, (_, i) => <span key={i} style={{ left: `${(i * 37.17 + 3) % 100}%`, top: `${(i * 23.43 + 7) % 100}%`, animationDelay: `${i * -0.27}s`, animationDuration: `${3 + (i % 7) * 0.55}s` }}>{i % 3 === 0 ? "✧" : "✦"}</span>)}
      </div>
      <div className="lisa-rainbow-confetti" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => <svg key={i} viewBox="0 0 100 100" style={{ left: `${i % 2 ? 88 + i % 4 : (i % 4) * 2}%`, top: `${8 + i * 7.4}%`, animationDelay: `${i * -1.7}s`, rotate: `${i * 31}deg` }}><path d="m50 2 12 30 33 2-25 22 8 34-28-18-28 18 8-34L5 34l33-2Z" fill={["#ff14a7", "#05c9e8", "#ffdc12", "#8d20d6", "#78e832"][i % 5]} stroke="white" strokeWidth="3" /></svg>)}
      </div>
      {stickers.map((sticker, index) => (
        <button key={sticker.kind} type="button" className={`lisa-sticker${sticker.holo ? " lisa-holographic" : ""}`} aria-label={`Move ${sticker.name.toLowerCase()} sticker`} aria-describedby="sticker-instructions"
          style={{ left: `${positions[index].x * 100}%`, top: `${positions[index].y * 100}%`, rotate: `${sticker.angle}deg`, zIndex: layers[index] }}
          onPointerDown={(event) => start(event, index)}
          onPointerMove={(event) => {
            const state = drag.current;
            if (!state || state.index !== index || state.pointer !== event.pointerId) return;
            move(index, state.start.x + (event.clientX - state.x) / (playground.current?.clientWidth ?? window.innerWidth), state.start.y + (event.clientY - state.y) / window.innerHeight, event.currentTarget);
          }}
          onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }} onLostPointerCapture={() => { drag.current = null; }}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
            event.preventDefault();
            const step = event.shiftKey ? 30 : 10;
            move(index, positions[index].x + (event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0) / (playground.current?.clientWidth ?? window.innerWidth), positions[index].y + (event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0) / window.innerHeight, event.currentTarget);
          }}>
          <StickerArt kind={sticker.kind} holographic={sticker.holo} />
        </button>
      ))}
    </div>
  );
}
