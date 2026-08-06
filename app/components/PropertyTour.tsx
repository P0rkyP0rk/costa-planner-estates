"use client";

import * as React from "react";
import { AerialScene } from "./scenes";

/*
  The 30-second aerial property tour.

  Drop the footage at:  public/video/estates-tour.mp4   (H.264/mp4, muted-safe)
  Optional web fallback: public/video/estates-tour.webm
  Until it exists, the illustrated aerial map + flight HUD stand in, so the
  section always looks finished. The video fades in only once it can play.
*/

export default function PropertyTour() {
  const video = React.useRef<HTMLVideoElement | null>(null);
  const [ready, setReady] = React.useState(false);
  const [muted, setMuted] = React.useState(true);

  const toggleMute = () => {
    const v = video.current;
    if (!v) return;
    v.muted = !v.muted;
    if (!v.muted && v.paused) void v.play();
    setMuted(v.muted);
  };

  return (
    <div className="relative aspect-video overflow-hidden rounded-[20px] border border-black/10 bg-[#0a1410] shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
      {/* poster scene (shows until real footage loads, and behind it always) */}
      <AerialScene className="absolute inset-0 h-full w-full" />

      <video
        ref={video}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ opacity: ready ? 1 : 0, transition: "opacity .5s ease" }}
      >
        <source src="/video/estates-tour.mp4" type="video/mp4" />
      </video>

      {/* flight HUD */}
      <div className="pointer-events-none absolute inset-0 font-mono text-[12px] tracking-[0.12em] text-white/85">
        <div className="absolute left-[18px] top-4 flex items-center gap-2.5">
          <span className="flex items-center gap-1.5"><i className="h-2 w-2 rounded-full bg-[#e23a2e]" style={{ animation: "estBlink 1.4s steps(1) infinite" }} />REC</span>
          <span>4K · 60</span>
        </div>
        <div className="absolute right-[18px] top-4 text-right leading-tight">ALT 120M<br />N 09°54&apos; W 84°28&apos;</div>
        <div className="absolute bottom-4 left-[18px]">DJI · BIRD HOUSE</div>
        <div className="absolute bottom-4 right-[18px] text-right leading-tight">PURISCAL · CR<br />OCEAN VIEW</div>
        <div className="absolute inset-[14px] rounded-[8px] border border-white/20" />
      </div>
      <style>{`@keyframes estBlink{50%{opacity:.25}}`}</style>

      {/* mute / unmute — only meaningful once real footage is in */}
      <button
        onClick={toggleMute}
        aria-label={muted ? "Unmute tour" : "Mute tour"}
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/50 bg-white/15 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white backdrop-blur transition hover:bg-white/25"
      >
        {muted ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M22 9l-6 6M16 9l6 6" /></svg>
        ) : (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a9 9 0 0 1 0 14" /></svg>
        )}
        {muted ? "Sound off" : "Sound on"}
      </button>
    </div>
  );
}
