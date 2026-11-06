"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

type ScreenLine = { text: string; href?: string };
const keys = ["C", "CE", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "="];

export function TiCalculator() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [lines, setLines] = useState<ScreenLine[]>([]);
  const [sections, setSections] = useState<number[]>([]);
  const [position, setPosition] = useState(0);
  const [help, setHelp] = useState(false);

  useEffect(() => {
    const sync = () => setActive(document.documentElement.dataset.theme === "casio");
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!active) return;
    const output: ScreenLine[] = [];
    const starts: number[] = [];
    function append(text: string, href?: string) {
      const words = text.replace(/\s+/g, " ").trim().split(" ");
      let line = "";
      for (const word of words) {
        if (line.length + word.length + 1 > 26 && line) { output.push({ text: line, href }); line = ""; }
        line += (line ? " " : "") + word;
      }
      if (line) output.push({ text: line, href });
    }
    append("You have reached the office of");
    append("Alex Bloom / Designer / PHL/NYC");
    document.querySelectorAll(".site-content main h2, .site-content main h3, .site-content main p, .site-content main li, .site-content main small, .site-content main a").forEach((node) => {
      if (node.closest("[hidden], header, #logo") || node.matches(".sr-only")) return;
      if (node.matches("a") && node.closest("p, li, small")) return;
      if (node.matches("h2, h3")) {
        output.push({ text: "" });
        starts.push(output.length);
      }
      const copy = node.cloneNode(true) as Element;
      copy.querySelectorAll(".kells-initial").forEach((art) => art.remove());
      append(copy.textContent ?? "", node.matches("a") ? node.getAttribute("href") ?? undefined : undefined);
    });
    setLines(output);
    setSections(starts);
    setPosition(0);
  }, [active, pathname]);

  const operate = useCallback((key: string) => {
    setHelp(false);
    const move = (amount: number) => setPosition((value) => Math.max(0, Math.min(lines.length - 3, value + amount)));
    if (key === "+") move(1);
    else if (key === "−") move(-1);
    else if (key === "×") move(2);
    else if (key === "÷") move(-2);
    else if (key === "C") setPosition(0);
    else if (key === "CE") setHelp(true);
    else if (key === "%") {
      const next = sections.find((start) => start > position);
      setPosition(next ?? 0);
    } else if (key === "=") window.location.href = "mailto:alexbloomdesign@pm.me";
    else if (key === ".") {
      const href = lines[position]?.href ?? lines[position + 1]?.href;
      if (href) window.location.href = href;
    } else if (/^[0-9]$/.test(key)) setPosition(key === "0" ? 0 : sections[Number(key) - 1] ?? 0);
  }, [lines, sections, position]);

  useEffect(() => {
    if (!active) return;
    function onKey(event: KeyboardEvent) {
      if (event.ctrlKey || event.metaKey || event.altKey || (event.target as Element)?.closest(".theme-ui, input, textarea, select, a")) return;
      if ((event.key === "Enter" || event.key === " ") && (event.target as Element)?.closest("button")) return;
      const mapped: Record<string, string> = { ArrowDown: "+", ArrowUp: "−", "-": "−", Enter: "=", Escape: "C", Backspace: "CE", "*": "×", "/": "÷" };
      const key = mapped[event.key] ?? event.key.toUpperCase();
      if (keys.includes(key)) { event.preventDefault(); operate(key); }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, operate]);

  if (!active) return null;
  const screen = help ? [{ text: "+/- SCROLL" }, { text: "1-9 SECTIONS" }, { text: ". LINK  = EMAIL" }] : lines.slice(position, position + 3);
  return <div className="ti-stage">
    <section className="ti-calculator" aria-label="TI-II website navigator">
      <div className="ti-face">
        <div className="ti-screen" tabIndex={0} aria-label="Calculator display. Use plus and minus to scroll." onWheel={(event) => operate(event.deltaY > 0 ? "+" : "−")}>
          <div className="ti-screen-lines" aria-live="polite" aria-atomic="true">
            {screen.map((line, index) => <div key={index}>{line.href ? <a href={line.href}>{line.text}</a> : line.text || "\u00a0"}</div>)}
          </div>
        </div>
        <div className="ti-brand"><span className="ti-monogram">TI-II</span><span>Datamath II</span></div>
        <div className="ti-keys">
          {keys.map((key) => <button key={key} className={`ti-key ${key === "0" ? "ti-zero" : ""} ${key === "=" ? "ti-equals" : ""} ${/^[0-9.]$/.test(key) ? "ti-number" : ""}`} onClick={() => operate(key)} aria-label={({ "+": "Scroll forward one line", "−": "Scroll back one line", "=": "Email Alex Bloom", C: "Return to start", CE: "Show controls", "%": "Next section", "÷": "Previous two lines", "×": "Next two lines", ".": "Open displayed link" } as Record<string, string>)[key] ?? `Jump to section ${key}`}><span>{key}</span></button>)}
        </div>
      </div>
      <p className="ti-instructions">+/− scroll · 1–9 jump · . link · = email · CE help</p>
    </section>
  </div>;
}
