"use client";

import * as React from "react";
import Link from "next/link";
import { AerialScene } from "./scenes";

/*
  Hero — a clean, good-quality drone video.

  Plays the LAST ~18 seconds of the 30s aerial tour on a loop (starts the
  playhead near the end and seeks back there when it finishes), so no separate
  trimmed file is needed. Autoplay, muted, looping — reliable on every device.

  MEDIA: public/video/estates-tour.mp4 (the 30s aerial tour)
  The illustrated aerial scene sits behind as a fallback if the clip can't play.
*/

const TAIL = 18; // seconds to loop from the end

export default function EstatesHero() {
  const video = React.useRef<HTMLVideoElement | null>(null);
  const startRef = React.useRef(0);
  const [ready, setReady] = React.useState(false);

  const onMeta = () => {
    const v = video.current;
    if (!v || !Number.isFinite(v.duration)) return;
    startRef.current = Math.max(0, v.duration - TAIL);
    try { v.currentTime = startRef.current; } catch {}
    void v.play().catch(() => {});
  };
  const onEnded = () => {
    const v = video.current;
    if (!v) return;
    try { v.currentTime = startRef.current; } catch {}
    void v.play().catch(() => {});
  };

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0c1712]">
      {/* fallback scenery behind the video */}
      <AerialScene className="absolute inset-0 h-full w-full" />

      <video
        ref={video}
        muted
        autoPlay
        playsInline
        preload="auto"
        onLoadedMetadata={onMeta}
        onCanPlay={() => setReady(true)}
        onEnded={onEnded}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: ready ? 1 : 0, transition: "opacity .8s ease" }}
      >
        <source src="/video/estates-tour.mp4" type="video/mp4" />
      </video>

      {/* legibility scrim */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,12,8,.5) 0%, rgba(4,12,8,.12) 38%, rgba(4,12,8,.62) 100%)" }} />

      {/* copy */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-[clamp(20px,6vw,90px)]">
        <div className="max-w-[min(92vw,780px)]">
          <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-white/80">Costa Planner · Estates</span>
          <h1 className="my-[0.28em] font-display text-[clamp(48px,9vw,116px)] font-medium leading-[0.94] text-white [text-shadow:0_2px_24px_rgba(0,0,0,.4)]">
            Come see it<br /><span className="italic text-[#ff6a5a]">from the air.</span>
          </h1>
          <p className="max-w-[40ch] text-[clamp(17px,2.1vw,22px)] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,.45)]">
            Costa Rica property, shown by someone who lives here — from the finca to the ocean on the horizon, in one aerial pass.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/bird-house" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_#e23a2e] transition hover:brightness-110">
              View The Bird House
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </Link>
            <a href="#visit" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
              Guided visits
            </a>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-white/85">
        <span>Scroll</span>
        <span className="h-[34px] w-px" style={{ background: "linear-gradient(#ffffff,transparent)", animation: "estDrop 1.8s infinite" }} />
      </div>
      <style>{`@keyframes estDrop{0%{transform:scaleY(.2);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}50.1%{transform-origin:bottom}100%{transform:scaleY(.2);transform-origin:bottom}}@media (prefers-reduced-motion:reduce){[style*="estDrop"]{animation:none!important}}`}</style>
    </section>
  );
}
