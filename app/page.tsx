"use client";

import { useAttentionPlan } from "@/components/plan-provider";
import { PlanSelectionScreen } from "@/components/plan-selection";
import { PlanHomepage } from "@/components/plan-homepage";

export default function HomePage() {
  const { plan, isHydrated } = useAttentionPlan();

  // Render nothing until localStorage has been read to avoid flashing
  // the selection screen for returning visitors
  if (!isHydrated) return null;

  if (plan === null) {
    return <PlanSelectionScreen />;
  }

  return <PlanHomepage />;
}
