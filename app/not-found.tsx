import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <p className="text-sm text-muted-foreground mb-4">404</p>
      <h1 className="text-2xl font-medium mb-6">Page not found</h1>
      <Button variant="outline" asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
