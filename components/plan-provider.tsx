"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { toast } from "sonner";

export type AttentionPlan = "8s" | "1m" | "5m";

const PLAN_ORDER: AttentionPlan[] = ["8s", "1m", "5m"];

interface PlanContextValue {
  plan: AttentionPlan | null;
  isHydrated: boolean;
  setPlan: (plan: AttentionPlan) => void;
  setInitialPlan: (plan: AttentionPlan) => void;
}

const PlanContext = createContext<PlanContextValue | null>(null);

export function AttentionPlanProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [plan, setPlanState] = useState<AttentionPlan | null>(null);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("attention-plan") as AttentionPlan | null;
    if (stored && PLAN_ORDER.includes(stored)) {
      setPlanState(stored);
    }
    setIsHydrated(true);
  }, []);

  // Called when switching an already-set plan — fires upgrade/downgrade toast
  const setPlan = useCallback(
    (newPlan: AttentionPlan) => {
      if (plan !== null) {
        const oldIndex = PLAN_ORDER.indexOf(plan);
        const newIndex = PLAN_ORDER.indexOf(newPlan);
        if (newIndex > oldIndex) {
          toast("Plan upgraded");
        } else if (newIndex < oldIndex) {
          toast("Plan downgraded");
        }
      }
      setPlanState(newPlan);
      localStorage.setItem("attention-plan", newPlan);
    },
    [plan]
  );

  // Called on first selection — no toast
  const setInitialPlan = useCallback((newPlan: AttentionPlan) => {
    setPlanState(newPlan);
    localStorage.setItem("attention-plan", newPlan);
  }, []);

  return (
    <PlanContext.Provider value={{ plan, isHydrated, setPlan, setInitialPlan }}>
      {children}
    </PlanContext.Provider>
  );
}

export function useAttentionPlan() {
  const ctx = useContext(PlanContext);
  if (!ctx) throw new Error("useAttentionPlan must be used within AttentionPlanProvider");
  return ctx;
}
