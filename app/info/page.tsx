import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "About Alex Bloom — designer.",
};

export default function InfoPage() {
  return (
    <div className="homepage mx-auto w-full max-w-[40em] px-6 pb-16 pt-6 sm:pt-10">
      <p className="mb-8"><Link href="/">Back home</Link></p>
      <div className="mb-10">
        <Image
          src="/img/info/alex-sun.png"
          alt="Alex standing outside in the sun."
          width={1024}
          height={679}
          className="w-full rounded-lg object-cover"
          priority
        />
        <p className="font-mono text-sm text-gray-400 mt-2 text-right tabular-nums">
          Photo by Spencer Harrison
        </p>
      </div>
      <h1 className="text-3xl font-medium leading-snug tracking-tight mb-8">
        Hi, I&apos;m Alex. Most people call me Bloom.
      </h1>

      {/* Bio */}
      <section className="mb-12 space-y-4">
        <p className="">
          I&apos;ve been working in some form of professional design capacity since 2008. My superpower is framing options and tradeoffs to help founders make better decisions, faster. I&apos;m happiest when I&apos;m learning rapidly and operating at the edge of my capabilities.
        </p>
        <p className="">
          I&apos;m available for consulting and advising — reach out at{" "}
          <a
            href="mailto:alexbloomdesign@pm.me"
            className="group text-muted-foreground hover:text-foreground transition-colors"
          >
            alexbloomdesign@pm.me
          </a>
          .
        </p>
      </section>

      {/* Approach */}
      <div className="mt-12 space-y-4">
        <h2>I believe in</h2>
        <ul className="space-y-1">
          <li><a href="https://en.wikipedia.org/wiki/First_principle" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center">First principles</a></li>
          <li><a href="https://99percentinvisible.org/episode/curb-cuts/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center">The curb-cut effect</a></li>
          <li><a href="https://en.wikipedia.org/wiki/Nonviolent_Communication" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center">Healthy feedback</a></li>
          <li><Link href="/bookshelf/" className="group inline-flex items-center">Good books</Link></li>
          <li>Having fun</li>
        </ul>
      </div>

      {/* Services */}
      <div className="mt-12 space-y-4">
        <h2>How I work</h2>
        <ul className="space-y-4">
          <li>
            Design Advisor
            <p className="text-muted-foreground mt-1">Hourly consulting or coaching for startups, founders, teams, and individuals.</p>
          </li>
          <li>
            Fractional Product Design Leadership (Embedded Retainer)
            <p className="text-muted-foreground mt-1">Embedded part-time team member. Monthly cadence, direct slack access, and regular check-ins.</p>
          </li>
          <li>
            Commissioned Works
            <p className="text-muted-foreground mt-1">Bespoke furniture and objects by request.</p>
          </li>
        </ul>
      </div>

      {/* Also me */}
      <div className="mt-12 space-y-4">
        <h2>Also me</h2>
        <ul className="space-y-1">
          <li>He/him</li>
          <li><a href="https://www.16personalities.com/enfp-personality" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center">ENFP-A</a></li>
          <li>Lifelong bicycle person</li>
        </ul>
      </div>
    </div>
  );
}
