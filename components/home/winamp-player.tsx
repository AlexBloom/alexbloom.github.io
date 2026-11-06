"use client";

import { useState } from "react";
import { SkipBack, SkipForward, Play, Pause, Square, Mail } from "lucide-react";

const tracks = ["introduction", "currently", "services", "about", "more", "connect"];
export function WinampPlayer() {
  const [playing, setPlaying] = useState(true);
  const [track, setTrack] = useState(0);
  const [level, setLevel] = useState(70);
  function skip(direction: number) {
    const next = (track + direction + tracks.length) % tracks.length;
    setTrack(next);
    window.location.hash = tracks[next];
  }
  return <div className="winamp-player">
    <div className="winamp-titlebar"><span>ϟ</span><span>WINAMP</span><span>◆</span></div>
    <div className="winamp-display" data-playing={playing}>
      <div className="winamp-readout"><span>{playing ? "▶" : "Ⅱ"}</span><strong>0{track + 1}:00</strong><div className="winamp-spectrum" aria-hidden="true" style={{ opacity: 0.3 + level / 145 }}>{Array.from({ length: 24 }, (_, i) => <i key={i} style={{ height: `${20 + (i * 37 % 75)}%`, animationDelay: `${i * -0.13}s`, animationDuration: `${0.7 + i % 5 * 0.18}s` }} />)}</div></div>
      <div className="winamp-track"><h1>Alex Bloom</h1><p>Designer · PHL/NYC</p><span>0{track + 1}. {tracks[track].toUpperCase()}</span></div>
    </div>
    <div className="winamp-sliders"><label>VIS <input aria-label="Visualizer intensity" type="range" min="0" max="100" value={level} onChange={(event) => setLevel(Number(event.target.value))} /></label><span>STEREO</span></div>
    <div className="winamp-transport">
      <button onClick={() => skip(-1)} aria-label="Previous section"><SkipBack /></button>
      <button onClick={() => setPlaying(!playing)} aria-label={playing ? "Pause visualizer" : "Play visualizer"}>{playing ? <Pause /> : <Play />}</button>
      <button onClick={() => { setPlaying(false); setTrack(0); window.location.hash = "introduction"; }} aria-label="Stop and return to Introduction"><Square /></button>
      <button onClick={() => skip(1)} aria-label="Next section"><SkipForward /></button>
      <a href="mailto:alexbloomdesign@pm.me" data-link-style="button" aria-label="Email Alex Bloom"><Mail /></a>
      <span>VISUALIZER</span>
    </div>
    <div className="winamp-titlebar"><span>―</span><span>PLAYLIST</span><span>―</span></div>
    <nav className="winamp-playlist" aria-label="Page playlist">{tracks.map((id, index) => <a key={id} href={`#${id}`} onClick={() => setTrack(index)} aria-current={track === index ? "location" : undefined}><span>0{index + 1}. {id}</span><span>▶</span></a>)}</nav>
  </div>;
}
