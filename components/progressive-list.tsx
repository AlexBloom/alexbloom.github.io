"use client";

import { Children, useId, useState, type ReactNode } from "react";

interface ProgressiveListProps {
  children: ReactNode;
  className: string;
  initialCount?: number;
  batchSize?: number;
  label?: string;
}

export function ProgressiveList({ children, className, initialCount = 12, batchSize = 12, label = "items" }: ProgressiveListProps) {
  const items = Children.toArray(children);
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const id = useId();
  const remaining = Math.max(0, items.length - visibleCount);

  return (
    <div>
      <ul id={id} className={className}>{items.slice(0, visibleCount)}</ul>
      {items.length > initialCount && (
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          <p role="status" className="text-muted-foreground">Showing {Math.min(visibleCount, items.length)} of {items.length} {label}</p>
          {remaining > 0 && (
            <button
              type="button"
              aria-controls={id}
              onClick={() => setVisibleCount((count) => count + batchSize)}
              className="rounded border px-4 py-2 hover:bg-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              Show {Math.min(batchSize, remaining)} more {label}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
