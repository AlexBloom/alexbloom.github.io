import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Info",
  description: "About Alex Bloom — designer.",
};

export default function InfoPage() {
  return (
    <div className="max-w-[960px] mx-auto px-6 py-16">
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
      <h1 className="text-3xl lg:text-5xl font-bold leading-snug tracking-tight mb-8">
        Hi, I&apos;m Alex. Most people call me Bloom.
      </h1>

      {/* Bio */}
      <section className="mb-12 space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;ve been working in some form of professional design capacity since 2008. My superpower is framing options and tradeoffs to help founders make better decisions, faster. I&apos;m happiest when I&apos;m learning rapidly and operating at the edge of my capabilities.
        </p>
        <p className="text-muted-foreground leading-relaxed">
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
      <div className="border-t py-10 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8">
        <p className="text-sm md:text-base lg:text-lg text-foreground">I believe in</p>
        <ul className="space-y-1 text-sm md:text-base lg:text-lg text-muted-foreground">
          <li><a href="https://en.wikipedia.org/wiki/First_principle" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5">First principles <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span></a></li>
          <li><a href="https://99percentinvisible.org/episode/curb-cuts/" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5">The curb-cut effect <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span></a></li>
          <li><a href="https://en.wikipedia.org/wiki/Nonviolent_Communication" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5">Healthy feedback <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span></a></li>
          <li><Link href="/bookshelf/" className="group inline-flex items-center gap-0.5">Good books <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span></Link></li>
          <li>Having fun</li>
        </ul>
      </div>

      {/* Services */}
      <div className="border-t py-10 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8">
        <p className="text-sm md:text-base lg:text-lg text-foreground">How I work</p>
        <ul className="space-y-4 text-sm md:text-base lg:text-lg">
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
      <div className="border-t py-10 grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-4 sm:gap-8">
        <p className="text-sm md:text-base lg:text-lg text-foreground">Also me</p>
        <ul className="space-y-1 text-sm md:text-base lg:text-lg text-muted-foreground">
          <li>He/him</li>
          <li><a href="https://www.16personalities.com/enfp-personality" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-0.5">ENFP-A <span className="relative inline-flex overflow-hidden w-[1em] h-[1em] align-middle"><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out group-hover:translate-x-full group-hover:-translate-y-full">↗</span><span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0">↗</span></span></a></li>
          <li>Lifelong bicycle person</li>
        </ul>
      </div>
    </div>
  );
}
