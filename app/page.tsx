import Link from "next/link";
import { AnimatedLogo } from "@/components/home/animated-logo";
import { services } from "@/content/services";
import { ServiceBooking } from "@/components/service-booking";



export default function HomePage() {
  return (
    <>
      <div className="homepage mx-auto w-full max-w-[40em] px-6 pb-16 pt-6 sm:pt-10">
        <header className="space-y-5">
          <h1 className="sr-only">The Virtual Office of Alex Bloom</h1>
          <AnimatedLogo />
          <p><strong>Alex Bloom</strong><br />Designer<br />PHL/NYC</p>
        </header>

         <section hidden aria-labelledby="background" className="mt-12 space-y-4">
           <h2 id="background">Background</h2>
           <p>Since 2010, I’ve designed brands, <a href="https://www.figma.com/deck/L956p48owB2lqLKA0ulN2i/Alex-Bloom---Design-Samples-2025?node-id=0-1&t=AUQeoePTY8qXAe1Y-1" target="_blank" rel="noopener noreferrer">products</a>, &amp; <Link href="/spaces">spaces</Link> in a variety of full-time, freelance, and fractional capacities.</p>
         </section>
        <section aria-labelledby="about" className="mt-12 space-y-4">
          <h2 id="about">About</h2>
          <p>Design and product guidance for founders, makers, and independent thinkers.</p>
        </section>

        <section aria-labelledby="currently" className="mt-12 space-y-4">
          <h2 id="currently">Currently</h2>
          <ul>
            <li>Building AI underwriting tools at <a href="https://www.homevision.co/">HomeVision</a>.</li>
            <li>Crafting a financial OS for businesses of one at <a href="https://lettuce.co">Lettuce</a>.</li>
            <li>Special projects at <a href="https://legacysystems.global">Legacy Systems</a>.</li>
          </ul>
        </section>

        <section hidden aria-labelledby="approach" className="mt-12 space-y-4">
          <h2 id="approach">Approach</h2>
          <p>My product partners have said I’m world-class at:</p>
          <ul>
            <li>Working from first principles</li>
            <li>Framing decisions and trade-offs through design</li>
            <li>Centering the user</li>
          </ul>
        </section>

        <section aria-labelledby="services" className="mt-12 space-y-8">
          <h2 id="services" className="scroll-mt-24">Services</h2>
          {services.map((service) => (
            <article key={service.title} className="space-y-3">
              <h3 className="font-semibold">{service.title}{service.note && <span className="ml-2 text-sm font-normal text-muted-foreground">({service.note})</span>}</h3>
              {service.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <ServiceBooking service={service} showLearnMore />
              {service.slug === "career-sessions" && (
          <small className="block text-sm text-muted-foreground">* Including teaching university design courses, working for and with advertising agencies, mom &amp; pop brand shops, non-profits, retail brands, editorial shops, educational institutions, experiential design agencies, global products, and many VC-backed startups.</small>
              )}
            </article>
          ))}
        </section>

        <section aria-labelledby="more" className="mt-12 space-y-4">
          <h2 id="more">More</h2>
          <ul>
            <li><Link href="/bookshelf">Books</Link></li>
            <li><Link href="/tools">Tools</Link></li>
            <li><Link href="/spaces">Spaces</Link></li>
            <li><a href="https://www.figma.com/deck/L956p48owB2lqLKA0ulN2i/Alex-Bloom---Design-Samples-2025?node-id=0-1&t=AUQeoePTY8qXAe1Y-1" target="_blank" rel="noopener noreferrer">Work Samples</a></li>
            <li>About</li>
          </ul>
        </section>

        <section aria-labelledby="connect" className="mt-12 space-y-4">
          <h2 id="connect">Connect</h2>
          <ul>
            <li><a href="mailto:alexbloomdesign@pm.me">Email</a></li>
            <li><a href="https://www.are.na/alex-bloom-5ypulxwnvyy">Are.na</a></li>
            <li><a href="https://instagram.com/alex-bloom">Instagram</a></li>
            <li><a href="https://linkedin.com/in/alexanderbloom">LinkedIn</a></li>
            <li><span className="text-muted-foreground">Newsletter (profile URL to be added)</span></li>
          </ul>
        </section>
      </div>
    </>
  );
}
