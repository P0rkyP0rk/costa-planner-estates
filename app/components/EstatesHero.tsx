"use client";

import * as React from "react";
import { MacawSVG, AerialScene } from "./scenes";

/*
  The arrival sequence — golf-model mechanic.

  Background: the real drone flyover footage, SCRUBBED by scroll (the video's
  playhead is tied to scroll position, so scrolling flies you over the finca).
  Foreground: a pair of Scarlet Macaws you follow as you scroll (cursor nudges
  them). They lead the eye across the property and hand off into the offer below.

  MEDIA:
    public/video/estates-flyover.mp4   the aerial drone clip (scrubbed background)

  Notes:
  - The AerialScene illustration sits behind the video as a fallback, so if a
    browser can't decode the clip the section still reads.
  - The realistic-macaw asset is a drop-in replacement for <MacawSVG/> later.
*/

export default function EstatesHero() {
  const journey = React.useRef<HTMLElement | null>(null);
  const video = React.useRef<HTMLVideoElement | null>(null);
  const copy = React.useRef<HTMLDivElement | null>(null);
  const hint = React.useRef<HTMLDivElement | null>(null);
  const scrim = React.useRef<HTMLDivElement | null>(null);
  const m1 = React.useRef<HTMLDivElement | null>(null);
  const m2 = React.useRef<HTMLDivElement | null>(null);
  const arrive = React.useRef<HTMLDivElement | null>(null);
  const [videoReady, setVideoReady] = React.useState(false);
  const durationRef = React.useRef(0);

  const onMeta = () => {
    const v = video.current;
    if (!v) return;
    durationRef.current = Number.isFinite(v.duration) ? v.duration : 0;
    try { v.pause(); v.currentTime = 0; } catch {}
    setVideoReady(true);
  };

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let raf = 0;
    let lastSeek = -1;

    const onResize = () => { vw = window.innerWidth; vh = window.innerHeight; };
    const onMove = (e: MouseEvent) => { tmx = e.clientX / vw - 0.5; tmy = e.clientY / vh - 0.5; };
    window.addEventListener("resize", onResize, { passive: true });
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const birdPos = (t: number, phase: number) => {
      const x = lerp(-0.14, 0.52, ease(t)) + Math.sin(t * 3.0 + phase) * 0.07;
      const base = lerp(0.20, 0.66, ease(t));
      const swoop = Math.sin(t * Math.PI) * -0.12;
      const y = base + swoop + Math.sin(t * 4 + phase) * 0.02;
      const scale = lerp(0.62, 1.15, t);
      const rot = lerp(-10, 20, ease(t)) + Math.sin(t * 3.0 + phase) * 5;
      return { x, y, scale, rot };
    };
    const place = (el: HTMLElement | null, t: number, phase: number, ox: number, oy: number) => {
      if (!el) return;
      const p = birdPos(t, phase);
      el.style.transform = `translate(${(p.x * vw + ox).toFixed(1)}px,${(p.y * vh + oy).toFixed(1)}px) rotate(${p.rot.toFixed(1)}deg) scale(${p.scale.toFixed(3)})`;
    };

    const render = () => {
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;

      const sec = journey.current;
      if (sec) {
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - vh;
        const p = clamp(-rect.top / total, 0, 1);

        // scrub the background drone video to scroll position
        const v = video.current;
        const dur = durationRef.current;
        if (v && dur > 0) {
          // hold a touch of head/tail so first/last frames breathe
          const target = clamp(p, 0, 0.999) * dur;
          if (Math.abs(target - lastSeek) > 0.03) {
            try { (v as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek ? v.fastSeek!(target) : (v.currentTime = target); } catch {}
            lastSeek = target;
          }
        }

        if (copy.current) {
          copy.current.style.opacity = String(clamp(1 - p / 0.34, 0, 1));
          copy.current.style.transform = `translateY(${(-p * 70).toFixed(1)}px)`;
        }
        if (hint.current) hint.current.style.opacity = String(clamp(1 - p / 0.14, 0, 1));
        if (scrim.current) scrim.current.style.opacity = String(lerp(0.55, 0.28, ease(p)));

        const off = { x: mx * 46, y: my * 30 };
        const off2 = { x: mx * 62, y: my * 22 };
        place(m1.current, clamp(p * 1.03, 0, 1), 0.0, off.x, off.y);
        place(m2.current, clamp(p * 1.03 + 0.06, 0, 1), 2.1, off2.x, off2.y);
        const birdFade = clamp(1 - (p - 0.9) / 0.1, 0, 1);
        if (m1.current) m1.current.style.opacity = String(birdFade);
        if (m2.current) m2.current.style.opacity = String(birdFade);

        if (arrive.current) {
          const af = clamp((p - 0.72) / 0.22, 0, 1);
          arrive.current.style.opacity = String(af);
          arrive.current.style.transform = `translate(-50%,${lerp(20, 0, af).toFixed(1)}px)`;
        }
      }
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section ref={journey} className="relative h-[320vh] bg-[#0c1712]">
      <style>{`
        .est-wing{transform-box:fill-box;transform-origin:center left}
        .est-wing-r{transform-origin:center right}
        .est-flap .est-wing-l{animation:estFlapL .60s ease-in-out infinite}
        .est-flap .est-wing-r{animation:estFlapR .60s ease-in-out infinite}
        .est-m2 .est-wing-l,.est-m2 .est-wing-r{animation-duration:.53s}
        @keyframes estFlapL{0%,100%{transform:rotate(14deg) scaleX(1)}50%{transform:rotate(-30deg) scaleX(.86)}}
        @keyframes estFlapR{0%,100%{transform:rotate(-14deg) scaleX(1)}50%{transform:rotate(30deg) scaleX(.86)}}
        @keyframes estDrop{0%{transform:scaleY(.2);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}50.1%{transform-origin:bottom}100%{transform:scaleY(.2);transform-origin:bottom}}
        @media (prefers-reduced-motion:reduce){.est-flap .est-wing-l,.est-flap .est-wing-r,.est-hint-line{animation:none!important}}
      `}</style>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* fallback scenery behind the video */}
        <AerialScene className="absolute inset-0 h-full w-full" />

        {/* real drone footage, scrubbed by scroll */}
        <video
          ref={video}
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={onMeta}
          onCanPlay={onMeta}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: videoReady ? 1 : 0, transition: "opacity .6s ease" }}
        >
          <source src="/video/estates-flyover.mp4" type="video/mp4" />
        </video>

        {/* legibility scrim */}
        <div ref={scrim} className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,12,8,.55) 0%, rgba(4,12,8,.15) 40%, rgba(4,12,8,.55) 100%)", opacity: 0.55 }} />

        {/* copy */}
        <div ref={copy} className="absolute inset-0 z-[6] flex max-w-[min(92vw,780px)] flex-col justify-center px-[clamp(20px,6vw,90px)] will-change-transform">
          <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-white/80">Costa Planner · Estates</span>
          <h1 className="my-[0.28em] font-display text-[clamp(48px,9vw,116px)] font-medium leading-[0.94] text-white [text-shadow:0_2px_24px_rgba(0,0,0,.35)]">
            Come see it<br /><span className="italic text-[#ff6a5a]">from the air.</span>
          </h1>
          <p className="max-w-[38ch] text-[clamp(17px,2.1vw,22px)] text-white/90 [text-shadow:0_1px_12px_rgba(0,0,0,.4)]">
            Costa Rica property, shown by someone who lives here. Follow the macaws — they&apos;ll fly you over the finca.
          </p>
        </div>

        {/* macaws */}
        <div ref={m1} className="est-flap est-m1 absolute left-0 top-0 z-[8] w-[clamp(78px,11vw,140px)] will-change-transform" style={{ filter: "drop-shadow(0 14px 22px rgba(0,0,0,.4))" }}>
          <MacawSVG gid="h1" className="block h-auto w-full" />
        </div>
        <div ref={m2} className="est-flap est-m2 absolute left-0 top-0 z-[8] w-[clamp(78px,11vw,140px)] will-change-transform" style={{ filter: "drop-shadow(0 14px 22px rgba(0,0,0,.4))" }}>
          <MacawSVG gid="h2" className="block h-auto w-full" />
        </div>

        {/* arrival cue → into the offer */}
        <div ref={arrive} className="absolute bottom-[12%] left-1/2 z-[7] max-w-[min(90vw,560px)] -translate-x-1/2 text-center opacity-0 will-change-transform">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/80">You flew in with the macaws</div>
          <h2 className="mt-2 font-display text-[clamp(26px,4.4vw,44px)] text-white [text-shadow:0_2px_18px_rgba(0,0,0,.4)]">Here&apos;s the offer.</h2>
        </div>

        {/* scroll hint */}
        <div ref={hint} className="absolute bottom-8 left-1/2 z-[7] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-white/85">
          <span>Scroll to fly</span>
          <span className="est-hint-line h-[34px] w-px" style={{ background: "linear-gradient(#ffffff,transparent)", animation: "estDrop 1.8s infinite" }} />
        </div>
      </div>
    </section>
  );
}
