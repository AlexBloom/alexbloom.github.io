// Freeze the outgoing appearance without intercepting menu hover events.
export function captureThemeWipe() {
  const overlay = document.createElement("div");
  overlay.dataset.themeSnapshot = "";
  overlay.inert = true;
  overlay.setAttribute("aria-hidden", "true");
  const bodyStyle = getComputedStyle(document.body);
  Object.assign(overlay.style, {
    position: "fixed", inset: "0", zIndex: "2147483647", pointerEvents: "none",
    overflow: "hidden", background: getComputedStyle(document.documentElement).backgroundColor,
  });
  const clone = document.body.cloneNode(true) as HTMLElement;
  const originals = [document.body, ...document.body.querySelectorAll("*")];
  const copies = [clone, ...clone.querySelectorAll("*")];
  originals.forEach((original, index) => {
    const copy = copies[index];
    if (!(copy instanceof HTMLElement || copy instanceof SVGElement)) return;
    const computed = getComputedStyle(original);
    // Freeze inherited variables, fonts, colors and geometry before changing themes.
    for (let i = 0; i < computed.length; i++) {
      const property = computed[i];
      copy.style.setProperty(property, computed.getPropertyValue(property));
    }
    copy.style.setProperty("animation", "none");
    copy.style.setProperty("transition", "none");
    copy.removeAttribute("id");
    copy.removeAttribute("name");
    copy.style.setProperty("pointer-events", "none", "important");
  });
  clone.querySelectorAll("script, style, [data-theme-snapshot]").forEach((node) => node.remove());
  const bounds = document.body.getBoundingClientRect();
  Object.assign(clone.style, {
    position: "absolute", top: `${bounds.top}px`, left: `${bounds.left}px`,
    width: `${bounds.width}px`, height: `${bounds.height}px`, margin: "0",
    boxSizing: "border-box", background: bodyStyle.backgroundColor,
  });
  overlay.append(clone);
  document.body.append(overlay);
  return () => {
    const animation = overlay.animate([
      { clipPath: "inset(0)" },
      { clipPath: "inset(0 0 0 100%)" },
    ], { duration: 360, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)", fill: "forwards" });
    const finished = animation.finished.then(() => {}, () => {}).finally(() => overlay.remove());
    return { finished, skipTransition: () => { animation.cancel(); overlay.remove(); } };
  };
}
