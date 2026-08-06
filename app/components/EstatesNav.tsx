"use client";

import * as React from "react";
import Link from "next/link";

function Mark({ light }: { light: boolean }) {
  return (
    <svg width="26" height="26" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 3c-6 6-9 12-9 19a9 9 0 0018 0c0-7-3-13-9-19z" fill="#e23a2e" />
      <path d="M20 12c-2.4 3-3.6 6-3.6 10a3.6 3.6 0 007.2 0c0-4-1.2-7-3.6-10z" fill="#eaa519" />
      <path d="M20 3c-6 6-9 12-9 19" stroke={light ? "#ffffff" : "#1f7d8c"} strokeWidth="1.4" />
    </svg>
  );
}

export default function EstatesNav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const light = !scrolled;

  return (
    <>
      {/* legibility scrim over the hero, only while transparent */}
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-40 h-28 transition-opacity duration-300"
        style={{ background: "linear-gradient(180deg, rgba(6,14,10,.38), rgba(6,14,10,0))", opacity: scrolled ? 0 : 1 }}
        aria-hidden="true"
      />
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "border-b border-black/10 bg-white/85 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1240px] items-center justify-between px-[clamp(18px,5vw,48px)] py-3.5">
          <Link href="/" className="flex items-center gap-2.5" aria-label="Costa Planner Estates home">
            <Mark light={light} />
            <span className={`leading-none ${light ? "text-white" : "text-zinc-900"}`}>
              <span className="font-display text-[19px]">Costa&nbsp;Planner</span>
              <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.34em] opacity-80">Estates</span>
            </span>
          </Link>

          <div className={`hidden items-center gap-8 text-sm md:flex ${light ? "text-white/90" : "text-zinc-700"}`}>
            <Link href="/bird-house" className="transition hover:opacity-70">The Bird House</Link>
            <Link href="/#visit" className="transition hover:opacity-70">Guided visits</Link>
            <Link href="/#edge" className="transition hover:opacity-70">Why buy with me</Link>
          </div>

          <a
            href="mailto:hello@costaplanner.com?subject=Costa%20Planner%20Estates%20enquiry"
            className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_-12px_#e23a2e] transition hover:brightness-110"
          >
            Enquire
          </a>
        </div>
      </nav>
    </>
  );
}
