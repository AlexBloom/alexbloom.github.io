import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
  description: "Disciplined design for people and planet.",
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
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
