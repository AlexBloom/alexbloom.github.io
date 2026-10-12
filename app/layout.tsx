import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { AttentionPlanProvider } from "@/components/plan-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <AttentionPlanProvider>
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster />
        </AttentionPlanProvider>
      </body>
    </html>
  );
}
