"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Peg = { x: number; y: number; color: string; href?: string };
const colors = ["#ff689a", "#ffc459", "#87f574", "#6ae6ff", "#c99bff", "#fff2a3"];

export function LiteBrite() {
  const [active, setActive] = useState(false);
  const [editing, setEditing] = useState(false);
  const [height, setHeight] = useState(1000);
  const [reset, setReset] = useState(0);
  const canvas = useRef<HTMLCanvasElement>(null);
  const pathname = usePathname();
  const edit = useRef(false);
  edit.current = editing;
  useEffect(() => {
    const sync = () => setActive(document.documentElement.dataset.theme === "lite-brite");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active || !canvas.current) return;
    const element = canvas.current;
    const context = element.getContext("2d");
    if (!context) return;
    const source: { text: string; href?: string }[] = [
      { text: "Alex Bloom" }, { text: "Designer / PHL/NYC" },
    ];
    document.querySelectorAll(".site-content main h2, .site-content main h3, .site-content main p, .site-content main li, .site-content main small, .site-content main a, .site-content footer p").forEach((node) => {
      if (node.closest("[hidden], header, nav, figure") || node.matches(".sr-only") || node.parentElement?.closest("p, li, small, a")) return;
      const link = node.matches("a") ? node : node.querySelector("a");
      const copy = node.cloneNode(true) as Element;
      copy.querySelectorAll(".kells-initial").forEach((art) => art.remove());
      const text = copy.textContent?.replace(/\s+/g, " ").trim();
      if (text) source.push({ text, href: link?.getAttribute("href") ?? undefined });
    });
    let pegs: Peg[] = [];
    let step = 5;
    let boardHeight = 0;
    let frame = 0;
    let dragging: { peg: Peg; x: number; y: number; moved: boolean } | null = null;
    function draw() {
      frame = 0;
      const ctx = context!;
      const width = element.clientWidth;
      const viewport = window.innerHeight;
      ctx.clearRect(0, 0, width, viewport);
      const offset = window.scrollY;
      ctx.fillStyle = "#24242a";
      for (let y = -(offset % step); y < viewport; y += step) {
        for (let x = 24; x < width - 24; x += step) { ctx.beginPath(); ctx.arc(x, y, step * 0.16, 0, Math.PI * 2); ctx.fill(); }
      }
      for (const peg of pegs) {
        const y = peg.y * step - offset;
        if (y < -20 || y > viewport + 20) continue;
        const x = 24 + peg.x * step;
        ctx.shadowColor = peg.color;
        ctx.shadowBlur = step * 1.15;
        ctx.fillStyle = peg.color;
        ctx.beginPath(); ctx.arc(x, y, step * 0.36, 0, Math.PI * 2); ctx.fill();
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#ffffffa0";
        ctx.beginPath(); ctx.arc(x - step * 0.09, y - step * 0.1, step * 0.1, 0, Math.PI * 2); ctx.fill();
      }
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(draw); }
    function build() {
      step = element.clientWidth < 600 ? 4 : 5;
      element.width = element.clientWidth;
      element.height = window.innerHeight;
      const columns = Math.max(10, Math.floor((element.clientWidth - 56) / (7 * step)));
      const glyph = document.createElement("canvas");
      glyph.width = columns * 7;
      glyph.height = 12;
      const ink = glyph.getContext("2d")!;
      pegs = [];
      let row = Math.ceil(100 / step);
      source.forEach((block, index) => {
        const words = block.text.toUpperCase().split(" ");
        const lines: string[] = [];
        let line = "";
        for (const word of words) {
          if ((line + " " + word).length > columns && line) { lines.push(line); line = ""; }
          // Long URLs and words must also fit on narrow boards.
          let rest = word;
          while (rest.length > columns) { if (line) { lines.push(line); line = ""; } lines.push(rest.slice(0, columns)); rest = rest.slice(columns); }
          line += (line ? " " : "") + rest;
        }
        if (line) lines.push(line);
        lines.forEach((text) => {
          ink.clearRect(0, 0, glyph.width, 12);
          ink.font = "bold 10px monospace";
          ink.fillStyle = "white";
          Array.from(text).forEach((character, index) => ink.fillText(character, index * 7, 9));
          const pixels = ink.getImageData(0, 0, glyph.width, 12).data;
          for (let y = 0; y < 12; y++) for (let x = 0; x < glyph.width; x++) {
            if (pixels[(y * glyph.width + x) * 4 + 3] > 110) pegs.push({ x, y: row + y, color: colors[index % colors.length], href: block.href });
          }
          row += 14;
        });
        row += 8;
      });
      boardHeight = (row + 15) * step;
      setHeight(boardHeight);
      schedule();
    }
    function point(event: PointerEvent) { return { x: (event.clientX - 24) / step, y: (event.clientY + window.scrollY) / step }; }
    function down(event: PointerEvent) {
      if (event.button !== 0 || (event.pointerType === "touch" && !edit.current)) return;
      const p = point(event);
      const peg = pegs.find((item) => Math.hypot(item.x - p.x, item.y - p.y) < 0.85);
      if (!peg) return;
      event.preventDefault();
      element.setPointerCapture(event.pointerId);
      dragging = { peg, x: event.clientX, y: event.clientY, moved: false };
      element.style.cursor = "grabbing";
    }
    function move(event: PointerEvent) {
      if (!dragging) return;
      if (Math.hypot(event.clientX - dragging.x, event.clientY - dragging.y) > 3) dragging.moved = true;
      if (!dragging.moved) return;
      const p = point(event);
      dragging.peg.x = Math.max(0, Math.min(Math.floor((element.clientWidth - 48) / step), Math.round(p.x)));
      dragging.peg.y = Math.max(16, Math.min(Math.floor(boardHeight / step) - 1, Math.round(p.y)));
      schedule();
    }
    function up(event: PointerEvent) {
      if (dragging && !dragging.moved && dragging.peg.href) window.location.href = dragging.peg.href;
      dragging = null;
      element.style.cursor = "grab";
      if (element.hasPointerCapture(event.pointerId)) element.releasePointerCapture(event.pointerId);
    }
    build();
    element.addEventListener("pointerdown", down);
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerup", up);
    element.addEventListener("pointercancel", up);
    window.addEventListener("scroll", schedule, { passive: true });
    const sizeObserver = new ResizeObserver(build);
    sizeObserver.observe(element);
    return () => {
      cancelAnimationFrame(frame);
      element.removeEventListener("pointerdown", down); element.removeEventListener("pointermove", move); element.removeEventListener("pointerup", up); element.removeEventListener("pointercancel", up);
      window.removeEventListener("scroll", schedule); sizeObserver.disconnect();
    };
  }, [active, pathname, reset]);

  if (!active) return null;
  return <div className="lite-brite-board" style={{ height }}>
    <div className="lite-brite-tools"><button onClick={() => setEditing(!editing)} aria-pressed={editing}>{editing ? "Done moving" : "Move pegs"}</button><button onClick={() => setReset((value) => value + 1)}>Reset board</button><span>Scroll to explore · drag a light to move it</span></div>
    <canvas ref={canvas} className={editing ? "is-editing" : ""} aria-label="Draggable Lite Brite lettering. The same page content and links are available below for assistive technology." />
  </div>;
}
