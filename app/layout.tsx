import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { AttentionPlanProvider } from "@/components/plan-provider";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

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
    <html lang="en" className={`${inter.variable} ${GeistMono.variable}`}>
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
