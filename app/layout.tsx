import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { AttentionPlanProvider } from "@/components/plan-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { ThemeToggle } from "@/components/theme-toggle";
import { initializeTheme } from "@/lib/theme";
import { LisaPlayground } from "@/components/lisa-playground";
import { TrapperBackdrop } from "@/components/trapper-backdrop";
import { SnesBackdrop } from "@/components/snes-backdrop";
import { TiCalculator } from "@/components/ti-calculator";
import { LiteBrite } from "@/components/lite-brite";
import { KellsBorder } from "@/components/kells-border";
import "./globals.css";
import "@/components/home/animated-logo.css";

export const metadata: Metadata = {
  title: {
    default: "Alex Bloom",
    template: "%s — Alex Bloom",
  },
  description: "Clarity and craft, with feeling.",
  metadataBase: new URL("https://alexbloom.design"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexbloom.design",
    siteName: "Alex Bloom",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `(${initializeTheme.toString()})();` }} />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <AttentionPlanProvider>
          <ThemeToggle />
          <LisaPlayground />
          <TrapperBackdrop />
          <SnesBackdrop />
          <TiCalculator />
          <KellsBorder />
          <LiteBrite />
          <div className="device-frame" aria-hidden="true" />
          <div className="site-content">
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </AttentionPlanProvider>
      </body>
    </html>
  );
}
