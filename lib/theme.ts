export const themes = [
  { id: "light", label: "Light" },
  { id: "dark", label: "Dark" },
  { id: "apple2", label: "MS-DOS" },
  { id: "boogie-van", label: "1977 Boogie Van" },
  { id: "risograph", label: "Risograph" },
  { id: "escher", label: "Escher" },
  { id: "casio", label: "TI-II" },
  { id: "trapper", label: "Trapper Keeper" },
  { id: "mta", label: "MTA" },
  { id: "lite-brite", label: "Lite Brite" },
  { id: "snes", label: "Super NES" },
  { id: "lisa-frank", label: "Lisa Frank" },
  { id: "wiki", label: "Wiki" },
  { id: "kells", label: "Book of Kells" },
  { id: "newspaper", label: "Newspaper" },
  { id: "winamp", label: "Winamp" },
] as const;

// Matrix remains supported for saved preferences, but is hidden from the picker.
// Self-contained so the same function can run before paint and after hydration.
export function initializeTheme(preference?: string) {
  let choice = preference;
  if (!choice) {
    try { choice = localStorage.getItem("theme") ?? "auto"; } catch { choice = "auto"; }
  }
  if (choice === "ti83") choice = "casio";
  if (!["auto", "light", "dark", "casio", "matrix", "apple2", "snes", "lisa-frank", "trapper", "wiki", "kells", "mta", "newspaper", "winamp", "lite-brite", "boogie-van", "risograph", "escher"].includes(choice)) choice = "auto";
  const now = new Date();
  let hour = now.getHours();
  // Resolve the visitor's IANA timezone explicitly, including DST and midnight.
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    hour = Number(new Intl.DateTimeFormat("en-US", {
      timeZone,
      hour: "numeric",
      hourCycle: "h23",
    }).format(now));
  } catch { /* The browser's local getHours remains the fallback. */ }
  let automatic = hour < 6 || hour >= 18 ? "dark" : "light";
  try {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) automatic = "dark";
    else if (window.matchMedia("(prefers-color-scheme: light)").matches) automatic = "light";
  } catch { /* Use the visitor's local time if system preferences are unavailable. */ }
  const resolved = choice === "auto" ? automatic : choice;
  document.documentElement.classList.toggle("dark", ["dark", "matrix", "apple2", "trapper", "mta", "winamp", "lite-brite"].includes(resolved));
  document.documentElement.dataset.theme = resolved;
  return resolved;
}
