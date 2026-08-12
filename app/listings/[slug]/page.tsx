import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import Gallery from "@/app/components/Gallery";
import { ListingScene } from "@/app/components/scenes";
import { detailListings, bySlug } from "@/app/lib/listings";

const serif = "Didot, 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif";

export function generateStaticParams() {
  return detailListings.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const l = bySlug(slug);
  if (!l) return {};
  return {
    title: `${l.name} — ${l.loc}`,
    description: `${l.name}, ${l.location ?? l.loc}. ${l.desc}`,
  };
}

export default async function ListingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const l = bySlug(slug);
  if (!l || l.external) notFound();

  const heroImg = l.gallery && l.gallery.length > 0 ? l.gallery[0] : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: `${l.name} — ${l.location ?? l.loc}, Costa Rica`,
    description: l.desc,
    ...(l.price && l.price !== "On request"
      ? { offers: { "@type": "Offer", price: l.price.replace(/[^0-9]/g, ""), priceCurrency: "USD", availability: "https://schema.org/InStock" } }
      : {}),
    address: { "@type": "PostalAddress", addressRegion: "Puriscal", addressCountry: "CR" },
  };

  return (
    <div className="bg-white text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative flex min-h-[78vh] flex-col justify-end overflow-hidden bg-[#0c1712]">
        {heroImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={heroImg} alt={`${l.name}, ${l.loc}`} className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <ListingScene scene={l.scene ?? "cloud"} className="absolute inset-0 h-full w-full" />
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(4,12,8,.45) 0%, rgba(4,12,8,.05) 34%, rgba(4,12,8,.5) 70%, rgba(4,12,8,.86) 100%)" }} />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[clamp(20px,5vw,52px)] pb-14 pt-40">
          <Link href="/#listings" className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-white/80 transition hover:text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
            All listings
          </Link>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(40px,7vw,92px)] leading-[0.94] text-white [text-shadow:0_2px_24px_rgba(0,0,0,.4)]">{l.name}</h1>
              <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.2em] text-white/85">{l.location ?? l.loc}</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-black/35 px-6 py-4 backdrop-blur">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#eaa519]">{l.status ? `${l.status} · ` : ""}guide price</div>
              <div className="font-display text-[30px] text-white">{l.price}</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#enquire" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">Book a free visit</a>
            {l.videos && l.videos.length > 0 && (
              <a href="#land" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">See the land</a>
            )}
          </div>
        </div>
      </section>

      {/* Specs */}
      {l.specs && l.specs.length > 0 && (
        <section className="border-b border-zinc-200 bg-stone-50">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-px bg-zinc-200 px-[clamp(20px,5vw,52px)] md:grid-cols-6 md:px-0">
            {l.specs.map((s) => (
              <div key={s.l} className="bg-stone-50 px-5 py-6">
                <div className="font-display text-[21px]">{s.n}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{s.l}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Story */}
      <section className="py-[clamp(56px,8vw,110px)]">
        <div className="mx-auto max-w-[820px] px-[clamp(20px,5vw,52px)]">
          <Reveal>
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The property</span>
            <h2 className="mt-3 text-balance font-display text-[clamp(28px,4.4vw,50px)] leading-[1.05]">{l.storyHeading}</h2>
          </Reveal>
          <Reveal delay={80} className="mt-6 space-y-4 text-lg leading-relaxed text-zinc-700">
            {l.story?.map((p, i) => <p key={i}>{p}</p>)}
          </Reveal>
          {l.placeholder && (
            <Reveal delay={120} className="mt-6 flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-stone-50 px-4 py-3 font-mono text-[12px] text-zinc-500">
              <span className="inline-block h-[7px] w-[7px] rounded-full bg-[#eaa519]" />
              Full details and photos on request — ask me and I&apos;ll send everything.
            </Reveal>
          )}
        </div>
      </section>

      {/* Videos — walk the land */}
      {l.videos && l.videos.length > 0 && (
        <section id="land" className="border-y border-zinc-200 bg-stone-50 py-[clamp(56px,8vw,110px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
            <Reveal className="mb-8 max-w-[640px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">On the land</span>
              <h2 className="mt-3 font-display text-[clamp(28px,4.4vw,48px)] leading-tight">Take a look around.</h2>
              <p className="mt-4 text-lg text-zinc-500">A few clips from the day I walked it — the view from the summit, the spring, and how it sits on the mountain.</p>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {l.videos.map((v) => (
                <Reveal key={v.src}>
                  <div className="overflow-hidden rounded-[18px] border border-zinc-200 bg-black shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
                    {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                    <video controls playsInline preload="metadata" className="aspect-video w-full bg-black object-cover">
                      <source src={v.src} type="video/mp4" />
                    </video>
                  </div>
                  <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">{v.label}</div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      {l.gallery && l.gallery.length > 0 && (
        <section className="py-[clamp(56px,8vw,110px)]">
          <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
            <Reveal className="mb-8 max-w-[640px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The gallery</span>
              <h2 className="mt-3 font-display text-[clamp(28px,4.4vw,50px)] leading-[1.05]">A closer look.</h2>
            </Reveal>
            <Reveal delay={60}><Gallery images={l.gallery} alt={l.name} /></Reveal>
          </div>
        </section>
      )}

      {/* Enquire */}
      <section id="enquire" className="py-[clamp(64px,9vw,130px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="relative overflow-hidden rounded-[26px] bg-[#0b1a14] px-[clamp(28px,6vw,72px)] py-[clamp(44px,7vw,80px)] text-white shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
            <div className="relative z-10 max-w-[620px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#eaa519]">Free video call · Free on-site visit</span>
              <h2 className="mt-3 font-display text-[clamp(28px,5vw,52px)] leading-[1.02]">Want to see {l.name}?</h2>
              <p className="my-5 max-w-[46ch] text-lg text-white/85">Start with a free video call — English, French, Polish or Spanish. When you come, I&apos;ll drive you out and walk you through it in person: the water, the boundaries, the access, and what you could build. No fee, no pressure.</p>
              <div className="flex flex-wrap gap-3">
                <a href={`mailto:hello@costaplanner.com?subject=${encodeURIComponent(l.name + " — free visit")}`} className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">Book a free visit</a>
                <Link href="/#listings" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">Back to all listings</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
