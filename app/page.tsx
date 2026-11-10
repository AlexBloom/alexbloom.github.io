import Link from "next/link";
import { IlluminatedTitle } from "@/components/home/illuminated-title";
import { ClientLogoTicker } from "@/components/home/client-logo-ticker";
import { WinampPlayer } from "@/components/home/winamp-player";
import { ThemeSection } from "@/components/home/theme-section";
import { DosBackdrop } from "@/components/dos-backdrop";
import { AnimatedLogo } from "@/components/home/animated-logo";
import { services } from "@/content/services";
import { ServiceBooking } from "@/components/service-booking";



export default function HomePage() {
  return (
    <>
      <div className="homepage mx-auto w-full max-w-[40em] px-6 pb-16 pt-6 sm:pt-10">
        <nav className="wiki-contents" aria-label="Contents">
          <strong>Contents</strong>
          <a href="#wiki-top">(Top)</a>
          <a href="#introduction">Introduction</a><a href="#currently">Currently</a><a href="#services">Services</a><a href="#about">About</a><a href="#more">More</a><a href="#connect">Connect</a>
        </nav>
        <header className="space-y-5">
          <WinampPlayer />
          <div className="mta-station-heading"><div className="mta-sign-rule" /><h1>Alex Bloom</h1><p>Designer</p><span className="mta-cities">PHL &lt;&gt; NYC</span></div>
          <div className="newspaper-masthead"><h1 className="newspaper-author">Alex Bloom</h1><p className="newspaper-title">the office post</p><div><span>Designer</span><span>PHL/NYC</span></div></div>
          <div className="wiki-article-heading" id="wiki-top"><h1>Alex Bloom</h1><p>Designer · PHL/NYC</p></div>
          <div className="dos-home-hero">
            <AnimatedLogo />
            <DosBackdrop />
          </div>
          <div className="home-identity"><h1>Alex Bloom</h1><p>Designer<br />PHL/NYC</p></div>
        </header>
        <figure className="wiki-infobox">
          <figcaption>Alex Bloom</figcaption>
          {/* A separate SVG keeps the encyclopedia illustration static. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/wiki-stamp.svg" alt="The office of Alex Bloom — compass and eye stamp" width="240" height="240" />
          <p>The virtual office of Alex Bloom</p>
          <dl><dt>Occupation</dt><dd>Designer</dd><dt>Location</dt><dd>PHL/NYC</dd><dt>Contact</dt><dd><a href="mailto:alexbloomdesign@pm.me">Email</a></dd></dl>
        </figure>

         <section hidden aria-labelledby="background" className="mt-12 space-y-4">
           <h2 id="background">Background</h2>
           <p>Since 2010, I’ve designed brands, <a href="https://www.figma.com/deck/L956p48owB2lqLKA0ulN2i/Alex-Bloom---Design-Samples-2025?node-id=0-1&t=AUQeoePTY8qXAe1Y-1" target="_blank" rel="noopener noreferrer">products</a>, &amp; <Link href="/spaces">spaces</Link> in a variety of full-time, freelance, and fractional capacities.</p>
         </section>
        <ThemeSection id="introduction" title="Introduction" className="mt-12 space-y-4">
          <p>Independent product design and guidance for founders, makers, and other designers. Since 2010, teams from NYC to Silicon Valley have trusted me to shape their products and hone their process.</p>
          <ClientLogoTicker />
        </ThemeSection>

        <ThemeSection id="currently" title="Currently" className="mt-12 space-y-4">
          <ul>
            <li>Building AI underwriting tools at <a href="https://www.homevision.co/">HomeVision</a>.</li>
            <li>Crafting a financial OS for businesses of one at <a href="https://lettuce.co">Lettuce</a>.</li>
            <li>Special projects at Legacy Systems.</li>
          </ul>
        </ThemeSection>

        <section hidden aria-labelledby="approach" className="mt-12 space-y-4">
          <h2 id="approach">Approach</h2>
          <p>My product partners have said I’m world-class at:</p>
          <ul>
            <li>Working from first principles</li>
            <li>Framing decisions and trade-offs through design</li>
            <li>Centering the user</li>
          </ul>
        </section>

        <ThemeSection id="services" title="Services" className="mt-12 space-y-8">
          {services.map((service) => (
            <article key={service.title} className="space-y-3">
              <h3 aria-label={service.note ? `${service.title} (${service.note})` : service.title} className="font-semibold"><IlluminatedTitle text={service.title} />{service.note && <span className="ml-2 text-sm font-normal text-muted-foreground">({service.note})</span>}</h3>
              {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ServiceBooking service={service} showLearnMore />
              {service.slug === "career-sessions" && (
          <small className="block text-sm text-muted-foreground">* Including teaching university design courses, working for and with advertising agencies, mom &amp; pop brand shops, non-profits, retail brands, editorial shops, educational institutions, experiential design agencies, global products, and many VC-backed startups.</small>
              )}
            </article>
          ))}
        </ThemeSection>

        <ThemeSection id="about" title="About" className="mt-12 space-y-4">
          <p>I believe in <a href="https://en.wikipedia.org/wiki/First_principle">first principles</a>, <a href="https://99percentinvisible.org/episode/curb-cuts/">the curb-cut effect</a>, <a href="https://en.wikipedia.org/wiki/Nonviolent_Communication">healthy feedback</a>, <Link href="/bookshelf/">good books</Link>, and having fun.</p>
          <p>Also me: he/him, <a href="https://www.16personalities.com/enfp-personality">ENFP-A</a>, two wheels for life.</p>
        </ThemeSection>

        <ThemeSection id="more" title="More" className="mt-12 space-y-4">
          <ul>
            <li><Link href="/bookshelf">Books</Link></li>
            {/* Tools is temporarily hidden while its page is being developed. */}
            <li><Link href="/spaces">Spaces</Link></li>
            <li><a href="https://www.figma.com/deck/L956p48owB2lqLKA0ulN2i/Alex-Bloom---Design-Samples-2025?node-id=0-1&t=AUQeoePTY8qXAe1Y-1" target="_blank" rel="noopener noreferrer">Work Samples</a></li>
          </ul>
        </ThemeSection>

        <ThemeSection id="connect" title="Connect" className="mt-12 space-y-4">
          <ul>
            <li><a href="mailto:alexbloomdesign@pm.me">Email</a></li>
            <li><a href="https://www.are.na/alex-bloom-5ypulxwnvyy">Are.na</a></li>
            <li><a href="https://instagram.com/alex-bloom">Instagram</a></li>
            <li><a href="https://linkedin.com/in/alexanderbloom">LinkedIn</a></li>
            <li><a href="https://alexbloomdesign.substack.com/subscribe">Newsletter</a></li>
          </ul>
        </ThemeSection>
      </div>
    </>
  );
}
