import { useId } from "react";

/** One consistent illustrated initial, with the original heading text preserved. */
export function IlluminatedTitle({ text }: { text: string }) {
  const id = useId().replace(/:/g, "");
  const colors = ["#8e4938", "#527878", "#615469"];
  const pigment = colors[text.charCodeAt(0) % colors.length];
  return <><svg className="kells-initial" viewBox="0 0 100 116" aria-hidden="true" focusable="false">
    <defs>
      <pattern id={`${id}-weave`} width="12" height="12" patternUnits="userSpaceOnUse"><path d="m0 0 12 12M-6 6 6 18M6-6 18 6" stroke="#cfb35f" strokeWidth="2" /><path d="m0 12 12-12" stroke="#8f6b40" strokeWidth="1" /></pattern>
      <pattern id={`${id}-ink`} width="18" height="24" patternUnits="userSpaceOnUse"><rect width="18" height="24" fill={pigment} /><path d="M0 0Q18 12 0 24M18 0Q0 12 18 24" fill="none" stroke="#ceb56b" strokeWidth="1.2" /></pattern>
    </defs>
    <rect x="5" y="5" width="90" height="106" rx="10" fill="#252b26" stroke="#b29a50" strokeWidth="2" />
    <rect x="9" y="9" width="82" height="98" rx="8" fill={`url(#${id}-weave)`} />
    <rect x="17" y="17" width="66" height="82" rx="4" fill="#d8c89c" stroke={pigment} strokeWidth="3" />
    <g fill="none" stroke="#d8c58d" strokeWidth="1.2"><path d="M13 25C0 4 38 0 25 17S7 21 16 12M87 91c13 21-25 25-12 8s18-4 9 5" /><circle cx="13" cy="102" r="5" /><circle cx="87" cy="14" r="5" /></g>
    <text x="50" y="84" textAnchor="middle" fontFamily="Uncial Antiqua, Georgia, serif" fontSize="76" fill={`url(#${id}-ink)`} stroke="#302c25" strokeWidth="0.8" paintOrder="stroke fill">{text[0]}</text>
    <rect x="1" y="1" width="98" height="114" rx="12" fill="none" stroke="#a35c42" strokeWidth="1.6" strokeDasharray="1 4" />
  </svg><span className="kells-plain-initial">{text[0]}</span><span>{text.slice(1)}</span></>;
}
