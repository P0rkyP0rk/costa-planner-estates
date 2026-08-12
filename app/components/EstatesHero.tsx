import Link from "next/link";

/*
  Hero — photo-led. A private ridge view carries the promise: your own water,
  trees, and quiet. (No video here; the drone footage lives on the listing.)
*/

export default function EstatesHero() {
  return (
    <section className="relative flex h-[100svh] min-h-[600px] flex-col justify-end overflow-hidden bg-[#0c1712]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/estates/bird-house-01.jpg"
        alt="A private Costa Rica ridge, forest and mountains to the horizon"
        className="est-kenburns absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,12,8,.5) 0%, rgba(4,12,8,.1) 30%, rgba(4,12,8,.35) 62%, rgba(4,12,8,.82) 100%)" }} />

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[clamp(20px,5vw,52px)] pb-[clamp(48px,9vh,110px)]">
        <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.3em] text-white/80">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 21s7-6.3 7-12a7 7 0 1 0-14 0c0 5.7 7 12 7 12z" /><circle cx="12" cy="9" r="2.4" /></svg>
          Puriscal Highlands · Costa Rica
        </span>
        <h1 className="mt-5 font-display text-[clamp(42px,7.4vw,94px)] font-medium leading-[0.98] text-white [text-shadow:0_2px_30px_rgba(0,0,0,.4)]">
          Make the<br /><span className="italic text-[#ff7a68]">lasting choice.</span>
        </h1>
        <p className="mt-7 max-w-[56ch] text-[clamp(17px,2vw,21px)] leading-relaxed text-white/90 [text-shadow:0_1px_14px_rgba(0,0,0,.5)]">
          The Puriscal highlands are the green, high middle of Costa Rica — cooler air, running water, coffee slopes, and forest the birds never left. An hour from San José, a world from the resort coast, and still priced the way the country was before the crowds arrived. I keep the list short and hand-picked, and I show you around myself.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="#listings" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_#e23a2e] transition hover:brightness-110">
            See the listings
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </Link>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10">
            Book a free call
          </a>
        </div>
      </div>

      <style>{`
        .est-kenburns{animation:estKen 26s ease-in-out infinite alternate;transform-origin:60% 40%}
        @keyframes estKen{from{transform:scale(1.02)}to{transform:scale(1.12)}}
        @media (prefers-reduced-motion:reduce){.est-kenburns{animation:none}}
      `}</style>
    </section>
  );
}
