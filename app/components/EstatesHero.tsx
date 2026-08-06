"use client";

import * as React from "react";
import { MacawSVG } from "./scenes";

/*
  The arrival sequence.

  As the visitor scrolls the tall journey section, two Scarlet Macaws fly down
  across the sky and the camera descends toward the finca. Moving the cursor
  nudges the birds so you feel like you are following them. Near the end, the
  short bird's-eye drone clip (the "flying with the macaws" POV) fades in behind
  the birds and hands off into the property tour below.

  MEDIA (optional — the scene works without it, then upgrades when present):
    public/video/estates-flyover.mp4   short aerial POV clip, muted/looping
  The clip only becomes visible once it can actually play, so a missing file
  never leaves a black box — the illustrated sky carries the moment instead.
*/

export default function EstatesHero() {
  const journey = React.useRef<HTMLElement | null>(null);
  const copy = React.useRef<HTMLDivElement | null>(null);
  const hint = React.useRef<HTMLDivElement | null>(null);
  const sky = React.useRef<HTMLDivElement | null>(null);
  const sun = React.useRef<HTMLDivElement | null>(null);
  const r1 = React.useRef<HTMLDivElement | null>(null);
  const r2 = React.useRef<HTMLDivElement | null>(null);
  const r3 = React.useRef<HTMLDivElement | null>(null);
  const pin = React.useRef<HTMLDivElement | null>(null);
  const m1 = React.useRef<HTMLDivElement | null>(null);
  const m2 = React.useRef<HTMLDivElement | null>(null);
  const arrive = React.useRef<HTMLDivElement | null>(null);
  const flyover = React.useRef<HTMLVideoElement | null>(null);
  const [clipReady, setClipReady] = React.useState(false);

  React.useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let raf = 0;

    const onResize = () => { vw = window.innerWidth; vh = window.innerHeight; };
    const onMove = (e: MouseEvent) => { tmx = e.clientX / vw - 0.5; tmy = e.clientY / vh - 0.5; };
    window.addEventListener("resize", onResize, { passive: true });
    if (!reduce) window.addEventListener("mousemove", onMove, { passive: true });

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const clamp = (v: number, a: number, b: number) => (v < a ? a : v > b ? b : v);
    const ease = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

    const birdPos = (t: number, phase: number) => {
      const x = lerp(-0.12, 0.5, ease(t)) + Math.sin(t * 3.1 + phase) * 0.06;
      const base = lerp(0.22, 0.72, ease(t));
      const swoop = Math.sin(t * Math.PI) * -0.1;
      const y = base + swoop + Math.sin(t * 4 + phase) * 0.02;
      const scale = lerp(0.7, 1.18, t);
      const rot = lerp(-8, 22, ease(t)) + Math.sin(t * 3.1 + phase) * 4;
      return { x, y, scale, rot };
    };
    const place = (el: HTMLElement | null, t: number, phase: number, ox: number, oy: number) => {
      if (!el) return;
      const p = birdPos(t, phase);
      const px = p.x * vw + ox;
      const py = p.y * vh + oy;
      el.style.transform = `translate(${px.toFixed(1)}px,${py.toFixed(1)}px) rotate(${p.rot.toFixed(1)}deg) scale(${p.scale.toFixed(3)})`;
    };

    const render = () => {
      mx += (tmx - mx) * 0.06;
      my += (tmy - my) * 0.06;

      const sec = journey.current;
      if (sec) {
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - vh;
        const p = clamp(-rect.top / total, 0, 1);
        const e = ease(p);

        if (copy.current) { copy.current.style.opacity = String(clamp(1 - p / 0.3, 0, 1)); copy.current.style.transform = `translateY(${(-p * 80).toFixed(1)}px)`; }
        if (hint.current) hint.current.style.opacity = String(clamp(1 - p / 0.16, 0, 1));
        if (sky.current) sky.current.style.transform = `scale(${(1 + e * 0.16).toFixed(3)}) translateY(${(e * 3).toFixed(1)}%)`;
        if (sun.current) sun.current.style.transform = `translateY(${(e * 10).toFixed(1)}vh) scale(${(1 + e * 0.2).toFixed(3)})`;
        if (r1.current) r1.current.style.transform = `translateY(${(e * 10).toFixed(1)}vh)`;
        if (r2.current) r2.current.style.transform = `translateY(${(e * 20).toFixed(1)}vh)`;
        if (r3.current) r3.current.style.transform = `translateY(${(e * 34).toFixed(1)}vh)`;
        if (pin.current) {
          pin.current.style.transform = `translateX(-50%) translateY(${(e * 12).toFixed(1)}vh) scale(${lerp(0.8, 1.5, e).toFixed(3)})`;
          pin.current.style.opacity = String(clamp((p - 0.08) / 0.2, 0, 1) * clamp(1 - (p - 0.82) / 0.16, 0, 1));
        }

        place(m1.current, clamp(p * 1.02, 0, 1), 0, mx * 44, my * 30);
        place(m2.current, clamp(p * 1.02 + 0.06, 0, 1), 2.1, mx * 60, my * 22);
        const birdFade = clamp(1 - (p - 0.9) / 0.1, 0, 1);
        if (m1.current) m1.current.style.opacity = String(birdFade);
        if (m2.current) m2.current.style.opacity = String(birdFade);

        if (arrive.current) {
          const af = clamp((p - 0.7) / 0.22, 0, 1);
          arrive.current.style.opacity = String(af);
          arrive.current.style.transform = `translate(-50%,${lerp(20, 0, af).toFixed(1)}px)`;
        }
        if (flyover.current) {
          const vf = clamp((p - 0.55) / 0.4, 0, 1);
          flyover.current.style.opacity = String(clipReady ? vf : 0);
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
  }, [clipReady]);

  return (
    <section ref={journey} className="relative h-[250vh] bg-[#0c1712]">
      <style>{`
        .est-wing{transform-box:fill-box;transform-origin:center left}
        .est-wing-r{transform-origin:center right}
        .est-flap .est-wing-l{animation:estFlapL .62s ease-in-out infinite}
        .est-flap .est-wing-r{animation:estFlapR .62s ease-in-out infinite}
        .est-m2 .est-wing-l,.est-m2 .est-wing-r{animation-duration:.55s}
        @keyframes estFlapL{0%,100%{transform:rotate(14deg) scaleX(1)}50%{transform:rotate(-30deg) scaleX(.86)}}
        @keyframes estFlapR{0%,100%{transform:rotate(-14deg) scaleX(1)}50%{transform:rotate(30deg) scaleX(.86)}}
        @keyframes estPulse{50%{box-shadow:0 0 0 14px rgba(226,58,46,0)}}
        @keyframes estDrop{0%{transform:scaleY(.2);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}50.1%{transform-origin:bottom}100%{transform:scaleY(.2);transform-origin:bottom}}
        @media (prefers-reduced-motion:reduce){.est-flap .est-wing-l,.est-flap .est-wing-r,.est-pin-dot,.est-hint-line{animation:none!important}}
      `}</style>

      <div className="sticky top-0 h-screen overflow-hidden">
        {/* sky */}
        <div
          ref={sky}
          className="absolute -inset-[6%] will-change-transform"
          style={{
            background:
              "radial-gradient(120% 80% at 60% 118%, #f4b25f 0%, #f4b25f 12%, rgba(244,178,95,0) 55%), linear-gradient(180deg,#5f93ad 0%, #86adbc 26%, #d7d09a 60%, #f0c079 82%, #f3ae5f 100%)",
          }}
        />
        <div
          ref={sun}
          className="absolute left-[58%] bottom-[14%] w-[min(46vh,420px)] aspect-square rounded-full blur-[2px] will-change-transform"
          style={{ background: "radial-gradient(circle,#fff6df 0%, #ffe6ac 34%, rgba(255,224,150,0) 70%)" }}
        />

        {/* short bird's-eye clip — fades in at the hand-off once it can play */}
        <video
          ref={flyover}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          onCanPlay={() => setClipReady(true)}
          className="absolute inset-0 h-full w-full object-cover opacity-0"
          style={{ transition: "opacity .2s linear" }}
        >
          <source src="/video/estates-flyover.mp4" type="video/mp4" />
        </video>

        {/* ridges */}
        <div ref={r1} className="absolute -left-[6%] w-[112%] bottom-[24%] opacity-55 will-change-transform">
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none" className="block w-full h-auto"><path d="M0 200 C180 120 340 170 520 140 C720 108 900 168 1200 120 L1200 260 L0 260Z" fill="#4a7f7e" /></svg>
        </div>
        <div ref={r2} className="absolute -left-[6%] w-[112%] bottom-[12%] opacity-[.78] will-change-transform">
          <svg viewBox="0 0 1200 260" preserveAspectRatio="none" className="block w-full h-auto"><path d="M0 210 C160 160 300 190 470 150 C660 106 860 190 1200 150 L1200 260 L0 260Z" fill="#2f5f52" /></svg>
        </div>
        <div ref={r3} className="absolute -left-[6%] w-[112%] bottom-0 will-change-transform">
          <svg viewBox="0 0 1200 300" preserveAspectRatio="none" className="block w-full h-auto">
            <path d="M0 150 C140 120 260 168 430 140 C640 106 760 172 940 150 C1060 138 1140 160 1200 150 L1200 300 L0 300Z" fill="#1c3d31" />
            <g fill="#163227"><path d="M120 150c8-22 20-22 28 0zM200 152c6-16 16-16 22 0zM520 148c8-24 22-24 30 0zM760 150c7-18 18-18 25 0zM980 150c6-16 16-16 22 0z" /></g>
          </svg>
        </div>

        {/* property pin */}
        <div ref={pin} className="absolute left-1/2 bottom-[15%] -translate-x-1/2 text-center will-change-transform">
          <div className="est-pin-dot mx-auto h-3.5 w-3.5 rounded-full bg-[#e23a2e]" style={{ boxShadow: "0 0 0 6px rgba(226,58,46,.25)", animation: "estPulse 2.4s infinite" }} />
          <div className="mt-2 inline-block rounded-full bg-white/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[#20302a] backdrop-blur">Bird House · Puriscal</div>
        </div>

        {/* copy */}
        <div ref={copy} className="absolute inset-0 z-[6] flex max-w-[min(92vw,760px)] flex-col justify-center px-[clamp(20px,6vw,90px)] will-change-transform">
          <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#22332b]">Costa Planner · Estates</span>
          <h1 className="my-[0.28em] font-serif text-[clamp(48px,9vw,116px)] font-medium leading-[0.94] text-[#141d18]" style={{ fontFamily: "Didot, 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif" }}>
            Come see it<br /><span className="italic text-[#e23a2e]">from the air.</span>
          </h1>
          <p className="max-w-[34ch] text-[clamp(17px,2.1vw,22px)] text-[#22332b]">
            Costa Rica property, shown by someone who lives here. Follow the macaws down over the finca — then take the aerial tour.
          </p>
        </div>

        {/* macaws */}
        <div ref={m1} className="est-flap est-m1 absolute left-0 top-0 z-[5] w-[clamp(78px,11vw,140px)] will-change-transform" style={{ filter: "drop-shadow(0 12px 18px rgba(20,25,15,.28))" }}>
          <MacawSVG gid="h1" className="block w-full h-auto" />
        </div>
        <div ref={m2} className="est-flap est-m2 absolute left-0 top-0 z-[5] w-[clamp(78px,11vw,140px)] will-change-transform" style={{ filter: "drop-shadow(0 12px 18px rgba(20,25,15,.28))" }}>
          <MacawSVG gid="h2" className="block w-full h-auto" />
        </div>

        {/* arrival */}
        <div ref={arrive} className="absolute left-1/2 bottom-[16%] z-[7] max-w-[min(90vw,540px)] -translate-x-1/2 text-center opacity-0 will-change-transform">
          <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#213029]">Wheels up with the macaws</div>
          <h2 className="mt-2 font-serif text-[clamp(26px,4.4vw,44px)] text-[#151f19]" style={{ fontFamily: "Didot, 'Bodoni MT', 'Hoefler Text', Garamond, serif" }}>Now see it from above.</h2>
        </div>

        {/* scroll hint */}
        <div ref={hint} className="absolute left-1/2 bottom-8 z-[7] flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[11px] uppercase tracking-[0.26em] text-[#1c2a24]">
          <span>Scroll to fly</span>
          <span className="est-hint-line h-[34px] w-px" style={{ background: "linear-gradient(#1c2a24,transparent)", animation: "estDrop 1.8s infinite" }} />
        </div>
      </div>
    </section>
  );
}
