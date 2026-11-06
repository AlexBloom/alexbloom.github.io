"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useAttentionPlan, type AttentionPlan } from "@/components/plan-provider";
import { cn } from "@/lib/utils";

const PLANS: { value: AttentionPlan; label: string }[] = [
  { value: "8s", label: "~8 Seconds" },
  { value: "1m", label: "~1 Minute" },
  { value: "5m", label: "~5 Minutes & Beyond +" },
];

export function PlanSwitcher() {
  const { plan, setPlan } = useAttentionPlan();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLabel = PLANS.find((p) => p.value === plan)?.label ?? "Select plan";

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "inline-flex items-center gap-1.5 text-xs text-muted-foreground",
          "hover:text-foreground transition-colors select-none"
        )}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="font-medium">{currentLabel}</span>
        <ChevronDown
          className={cn(
            "h-3 w-3 transition-transform duration-150",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 top-full mt-1.5 z-50 min-w-[180px] rounded-md border border-border bg-background shadow-md py-1"
        >
          {PLANS.map(({ value, label }) => (
            <button
              key={value}
              role="option"
              aria-selected={value === plan}
              onClick={() => {
                setPlan(value);
                setOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-1.5 text-xs transition-colors",
                value === plan
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
