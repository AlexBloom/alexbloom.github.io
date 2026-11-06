function Mushroom() {
  return <svg viewBox="0 0 64 64" shapeRendering="crispEdges">
    <path fill="#513786" d="M16 4h32v8h8v8h8v24H0V20h8v-8h8Z" />
    <path fill="#c5b6ee" d="M16 12h12v12H16zm28 8h12v12H44zM4 28h12v8H4z" />
    <path fill="#fff1d9" d="M16 40h32v20H16z" /><path fill="#353044" d="M24 44h4v8h-4zm12 0h4v8h-4z" />
  </svg>;
}

function Island() {
  return <svg viewBox="0 0 160 100" shapeRendering="crispEdges">
    <path fill="#9182bf" d="M0 24h160v16H0z" /><path fill="#65548d" d="M8 40h144v16h-16v16h-24v16H56V72H32V56H8z" />
    <path fill="#c8bce8" d="M0 24h160v8H0zM24 48h16v8H24zm40 16h16v8H64zm48-16h16v8h-16z" />
    <path fill="#8170ad" d="M96 0h24v8h8v16H88V8h8Z" />
  </svg>;
}

export function SnesBackdrop() {
  return <div className="snes-backdrop" aria-hidden="true">
    <div className="snes-island snes-island-left"><Island /><div className="snes-mushroom"><Mushroom /></div></div>
    <svg className="snes-cloud snes-cloud-one" viewBox="0 0 120 48" shapeRendering="crispEdges"><path fill="#eeebf6" d="M0 24h16V8h24V0h32v8h24v16h24v24H0Z" /></svg>
    <svg className="snes-detail snes-coin" viewBox="0 0 24 32" shapeRendering="crispEdges"><path fill="#a39468" d="M8 0h8v4h4v4h4v16h-4v4h-4v4H8v-4H4v-4H0V8h4V4h4Z" /><path fill="#eee1ac" d="M8 6h4v20H8zm8 2h4v16h-4Z" /></svg>
    <svg className="snes-detail snes-star" viewBox="0 0 32 32" shapeRendering="crispEdges"><path fill="#b1a16b" d="M12 0h8v8h4v4h8v8h-8v4h4v8h-8v-4h-8v4H4v-8h4v-4H0v-8h8V8h4Z" /><path fill="#514376" d="M12 12h3v8h-3zm6 0h3v8h-3Z" /></svg>
    <svg className="snes-detail snes-blocks" viewBox="0 0 48 32" shapeRendering="crispEdges"><g fill="#8c79b8" stroke="#c9bee6" strokeWidth="2"><path d="M16 0h16v16H16zM0 16h16v16H0zm16 0h16v16H16zm16 0h16v16H32z" /></g></svg>
    <svg className="snes-detail snes-invader" viewBox="0 0 44 32" shapeRendering="crispEdges"><path fill="#81739e" d="M8 0h4v4H8zm24 0h4v4h-4ZM12 4h20v4h4v4h4v4h4v12h-4v-8h-4v8H8v-8H4v8H0V16h4v-4h4V8h4ZM8 28h8v4H8zm20 0h8v4h-8Z" /><path fill="#ded8ed" d="M12 12h4v4h-4zm16 0h4v4h-4Z" /></svg>
    <svg className="snes-detail snes-heart" viewBox="0 0 32 28" shapeRendering="crispEdges"><path fill="#a67e9b" d="M4 0h8v4h8V0h8v4h4v12h-4v4h-4v4h-4v4h-8v-4H8v-4H4v-4H0V4h4Z" /><path fill="#dac0d4" d="M4 4h8v4H8v4H4Z" /></svg>
    <div className="snes-delivery">
      <svg className="snes-paperboy" viewBox="0 0 160 128" shapeRendering="crispEdges">
        <g fill="none" stroke="#353044" strokeWidth="5"><circle cx="32" cy="98" r="24" /><circle cx="128" cy="98" r="24" /></g>
        <g fill="none" stroke="#8871bf" strokeWidth="6"><path d="m32 98 26-40 30 40H32l38-18 18 18 24-46 16 46M48 56h22m34-6h16" /></g>
        <path fill="#514376" d="M65 58h22v20H70v20H56V76h9Z" />
        <path fill="#a197cd" d="M62 30h26v30H62z" /><path fill="#efc79f" d="M70 10h20v20H70zM84 36h10v12h18v8H86Z" />
        <path fill="#513786" d="M64 6h28v8H60zm6-6h18v6H70Z" />
        <path fill="#ece8df" d="M40 36h22v32H36V44h4Z" /><path fill="#888096" d="M42 42h14v3H42zm0 8h14v3H42zm0 8h10v3H42Z" />
        <path fill="#353044" d="M52 96h22v6H52z" />
      </svg>
      <div className="snes-paper"><svg viewBox="0 0 40 28" shapeRendering="crispEdges"><path fill="#faf5e9" stroke="#827a94" strokeWidth="2" d="M1 1h38v26H1Z" /><path stroke="#827a94" strokeWidth="2" d="M6 7h28M6 12h12m4 0h12M6 17h12m4 0h12M6 22h28" /></svg></div>
    </div>
  </div>;
}
