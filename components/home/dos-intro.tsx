"use client";

import { useEffect, useRef } from "react";

/** A low-resolution framebuffer: all edges snap back to a single phosphor color. */
export function DosIntro() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const screen = canvas.current;
    const context = screen?.getContext("2d", { willReadFrequently: true });
    if (!screen || !context) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let tick = 0;
    let timer: number | undefined;

    function draw() {
      if (!context || !screen) return;
      if (document.hidden || document.documentElement.dataset.theme !== "apple2") return;
      const color = getComputedStyle(screen).color;
      context.clearRect(0, 0, 120, 90);
      context.fillStyle = color;
      context.strokeStyle = color;
      context.lineWidth = 1;
      // Stepped diamond, compass marks, and the rotating office lettering.
      const reveal = reducedMotion.matches ? 1 : Math.min(1, (tick + 1) / 6);
      context.save();
      context.translate(60, 45);
      context.scale(reveal, reveal);
      context.beginPath();
      context.moveTo(0, -40);
      context.lineTo(40, 0);
      context.lineTo(0, 40);
      context.lineTo(-40, 0);
      context.closePath();
      context.stroke();
      for (let i = 0; i < 8; i++) {
        context.save();
        context.rotate(i * Math.PI / 4);
        context.fillRect(-1, -35, 2, 4);
        context.restore();
      }
      const label = "YOU HAVE REACHED THE OFFICE OF · ";
      context.font = "bold 6px monospace";
      context.textAlign = "center";
      context.textBaseline = "middle";
      for (let i = 0; i < label.length; i++) {
        const angle = i / label.length * Math.PI * 2 - Math.PI / 2 - tick * Math.PI / 64;
        context.save();
        context.translate(Math.cos(angle) * 26, Math.sin(angle) * 26);
        context.rotate(angle + Math.PI / 2);
        context.fillText(label[i], 0, 0);
        context.restore();
      }
      // The eye opens in discrete frames and blinks occasionally.
      const blink = !reducedMotion.matches && tick % 48 >= 46;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(-6, blink ? 0 : -6);
      context.lineTo(-15, 0);
      context.lineTo(-6, blink ? 0 : 6);
      context.moveTo(6, blink ? 0 : -6);
      context.lineTo(15, 0);
      context.lineTo(6, blink ? 0 : 6);
      context.stroke();
      context.fillRect(-2, blink ? -1 : -2, 4, blink ? 2 : 4);
      context.restore();
      const pixels = context.getImageData(0, 0, 120, 90);
      for (let i = 3; i < pixels.data.length; i += 4) pixels.data[i] = pixels.data[i] >= 96 ? 255 : 0;
      context.putImageData(pixels, 0, 0);
      tick++;
    }
    function start() {
      window.clearInterval(timer);
      draw();
      if (!reducedMotion.matches) timer = window.setInterval(draw, 125);
    }
    start();
    reducedMotion.addEventListener("change", start);
    const observer = new MutationObserver(draw);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => {
      window.clearInterval(timer);
      reducedMotion.removeEventListener("change", start);
      observer.disconnect();
    };
  }, []);

  return (
    <a className="dos-intro" href="mailto:alexbloomdesign@pm.me" aria-label="Email Alex Bloom — the digital office of Alex Bloom">
      <canvas ref={canvas} width="120" height="90" aria-hidden="true" />
    </a>
  );
}
