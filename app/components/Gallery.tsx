"use client";

import * as React from "react";

/* Responsive photo grid with a click-to-open lightbox (arrow keys + Esc). */
export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [open, setOpen] = React.useState<number | null>(null);

  const close = React.useCallback(() => setOpen(null), []);
  const step = React.useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + images.length) % images.length)),
    [images.length],
  );

  React.useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, i) => (
          <button
            key={src}
            onClick={() => setOpen(i)}
            className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-stone-100 ${i === 0 ? "col-span-2 sm:col-span-2 sm:aspect-[8/3] lg:aspect-[8/3]" : ""}`}
            aria-label={`Open photo ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`${alt} — photo ${i + 1}`}
              loading={i < 4 ? "eager" : "lazy"}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="pointer-events-none absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10" onClick={close} aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <button className="absolute left-3 sm:left-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Previous">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[open]}
            alt={`${alt} — photo ${open + 1}`}
            className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="absolute right-3 sm:right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Next">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 font-mono text-xs tracking-widest text-white/70">
            {open + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
