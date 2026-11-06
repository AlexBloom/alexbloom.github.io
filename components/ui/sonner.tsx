"use client";

import { Toaster as Sonner, type ToasterProps } from "sonner";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast:
            "bg-background text-foreground border border-border text-sm font-medium shadow-sm",
          description: "text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}
