const logos = [
  { name: "Lyft", slug: "lyft", href: "https://www.lyft.com/" },
  { name: "Lettuce", slug: "lettuce", href: "https://lettuce.co/" },
  { name: "Ford", slug: "ford", href: "https://techcrunch.com/2017/11/01/fords-canvas-monthly-car-subscription-car-service-expands-to-la/" },
  { name: "Continuum", slug: "continuum", href: "https://www.forbes.com/sites/frederickdaso/2022/07/12/continuum-raises-12m-to-build-the-fractional-executive-marketplace/" },
  { name: "HomeVision", slug: "homevision", href: "https://www.homevision.co/" },
  { name: "Afresh", slug: "afresh", href: "https://www.afresh.com/" },
];

export function ClientLogoTicker() {
  return <nav className="client-logos text-muted-foreground" aria-label="Selected teams I’ve worked with">
    <ul className="client-logo-row">
      {logos.map(({ name, slug, href }) => <li key={slug}>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={slug === "continuum" ? "Continuum — Forbes profile (opens in a new tab)" : slug === "ford" ? "Ford — Canvas in TechCrunch (opens in a new tab)" : `${name} (opens in a new tab)`} data-link-style="button">
          <span className={`client-logo client-logo-${slug}`} style={{ maskImage: `url(/logos/${slug}.svg)`, WebkitMaskImage: `url(/logos/${slug}.svg)` }} aria-hidden="true" />
        </a>
      </li>)}
    </ul>
  </nav>;
}
