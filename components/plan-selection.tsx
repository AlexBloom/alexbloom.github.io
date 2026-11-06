"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import { useAttentionPlan, type AttentionPlan } from "@/components/plan-provider";

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const PLANS: {
  value: AttentionPlan;
  display: string;
  tag: string;
}[] = [
  { value: "8s",  display: "~8 seconds",  tag: "most popular"  },
  { value: "1m",  display: "~1 minute",   tag: "recommended"   },
  { value: "5m",  display: "~5 minutes+", tag: "thinkmaxxing"  },
];

function anim(ready: boolean, delayMs: number, type: "up" | "in" = "up"): CSSProperties {
  if (!ready) return { opacity: 0 };
  const name = type === "up" ? "plan-fade-up" : "plan-fade-in";
  return {
    animation: `${name} 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms both`,
  };
}

export function PlanSelectionScreen() {
  const { setInitialPlan } = useAttentionPlan();
  const [greeting, setGreeting] = useState("Good morning");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setGreeting(getGreeting());
    setReady(true);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6 sm:px-12"
      style={{ background: "#FAFAF8" }}
    >
      <div className="w-full max-w-xl">

        {/* Eyebrow */}
        <p
          className="plan-animate text-[10px] tracking-[0.18em] uppercase text-foreground/30 mb-10"
          style={anim(ready, 0, "in")}
        >
          {greeting} from Alex Bloom Design
        </p>

        {/* Heading */}
        <div className="mb-14" style={anim(ready, 80)}>
          <h1 className="plan-animate text-[1.75rem] sm:text-[3.1rem] font-medium tracking-[-0.03em] leading-[1.15] text-foreground">
            Let&apos;s start with an attention plan.
          </h1>
        </div>

        {/* Row list */}
        <div
          className="plan-animate border-t border-foreground/8"
          style={anim(ready, 160)}
        >
          {PLANS.map(({ value, display, tag }, i) => (
            <button
              key={value}
              onClick={() => setInitialPlan(value)}
              className="plan-animate group relative w-full text-left border-b border-foreground/8 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
              style={anim(ready, 220 + i * 70)}
            >
              {/* Hover sweep — left to right */}
              <div className="absolute inset-0 bg-foreground/[0.03] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />

              {/* Row content */}
              <div className="relative flex items-center gap-4">
                {/* Time value */}
                <span className="text-[1.7rem] sm:text-[2.75rem] leading-none font-medium tracking-[-0.03em] text-foreground/75 group-hover:text-foreground transition-colors duration-300 flex-1 whitespace-nowrap">
                  {display}
                </span>

                {/* Tag */}
                <span className="text-[10px] tracking-[0.12em] uppercase border border-foreground/15 rounded-full px-2.5 py-1 text-foreground/40 group-hover:border-foreground/35 group-hover:text-foreground/65 transition-colors duration-300 shrink-0">
                  {tag}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
