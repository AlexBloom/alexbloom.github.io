"use client";

import { useEffect, useState } from "react";
import { useAttentionPlan, type AttentionPlan } from "@/components/plan-provider";

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

const PLANS: {
  value: AttentionPlan;
  label: string;
  sublabel: string;
}[] = [
  {
    value: "8s",
    label: "~8 Seconds",
    sublabel: "Quick look",
  },
  {
    value: "1m",
    label: "~1 Minute",
    sublabel: "Fuller picture",
  },
  {
    value: "5m",
    label: "~5 Minutes & Beyond",
    sublabel: "Deep dive",
  },
];

export function PlanSelectionScreen() {
  const { setInitialPlan } = useAttentionPlan();
  const [greeting, setGreeting] = useState("Good morning");

  useEffect(() => {
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-2xl w-full">
        {/* Greeting */}
        <p className="text-sm text-muted-foreground mb-1">
          {greeting}, and welcome to Alex Bloom Design
        </p>
        <h1 className="text-2xl font-medium mb-12 leading-snug">
          Please select an attention plan<br />that works for you.
        </h1>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PLANS.map(({ value, label, sublabel }) => (
            <button
              key={value}
              onClick={() => setInitialPlan(value)}
              className="group text-left border border-border rounded-lg p-5 hover:border-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <p className="text-xs text-muted-foreground mb-1 group-hover:text-foreground transition-colors">
                {sublabel}
              </p>
              <p className="text-base font-medium mb-3">{label}</p>
              <p className="mt-4 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                Select →
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
