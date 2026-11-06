export function KellsBorder() {
  return <div className="kells-ornaments" aria-hidden="true">
    <svg className="kells-texture" width="100%" height="100%"><filter id="parchment-grain"><feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#parchment-grain)" opacity="0.12" /></svg>
    {["left", "right"].map((side) => <svg key={side} className={`kells-border kells-border-${side}`} viewBox="0 0 64 800" preserveAspectRatio="xMidYMid slice">
      <defs><pattern id={`kells-knot-${side}`} width="64" height="128" patternUnits="userSpaceOnUse">
        <path d="M9 0v128M55 0v128" stroke="#805b2c" strokeWidth="2" />
        <path d="M20-32C62 0 2 32 44 64S26 128 20 160M44-32C2 0 62 32 20 64S38 128 44 160" fill="none" stroke="#527878" strokeWidth="9" />
        <path d="M20-32C62 0 2 32 44 64S26 128 20 160M44-32C2 0 62 32 20 64S38 128 44 160" fill="none" stroke="#b7a15e" strokeWidth="3" />
        <path d="m32 49 10 15-10 15-10-15Z" fill="#8e4938" stroke="#c9b77e" strokeWidth="2" />
      </pattern></defs>
      <rect width="64" height="800" fill={`url(#kells-knot-${side})`} />
    </svg>)}
    <svg className="kells-medallion" viewBox="0 0 160 160"><g fill="none" stroke="#a18a52"><circle cx="80" cy="80" r="72" strokeWidth="3" /><circle cx="80" cy="80" r="64" /><path d="M80 16c90 0 40 128 0 64S16 16 16 80s128 40 64 0S16 144 80 144s40-128 0-64S144 144 144 80 16 40 80 80 144 16 80 16Z" strokeWidth="6" /></g></svg>
  </div>;
}
