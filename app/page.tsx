import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import EstatesHero from "@/app/components/EstatesHero";
import Reveal from "@/app/components/Reveal";
import { ListingScene } from "@/app/components/scenes";
import { listings } from "@/app/lib/listings";

const regionStats: { n: string; l: string }[] = [
  { n: "1–1.5 h", l: "to San José & the airport" },
  { n: "≈1,000 m", l: "cool highland climate" },
  { n: "La Cangreja", l: "national park on the doorstep" },
  { n: "Coffee country", l: "rivers, springs & forest" },
];

const regionPoints: { h: string; p: string }[] = [
  { h: "Close to what you need", p: "San José's hospitals, flights and city are about an hour away. You get the quiet without cutting yourself off from anything." },
  { h: "A climate you'll enjoy", p: "Up around a thousand metres, these hills skip the coastal heat — warm days, cool nights, green the whole year round." },
  { h: "Value the coast forgot", p: "Land and homes here go for a fraction of Guanacaste, with more space, more water, and more forest for the money." },
];

const pillars: { icon: ReactNode; h: string; p: string }[] = [
  { icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />, h: "Its own water", p: "Most plots carry their own spring or creek, running through the dry months. You drink your own water instead of paying for it." },
  { icon: <><path d="M4 21V10l8-6 8 6v11" /><path d="M9 21v-6h6v6" /></>, h: "Real privacy", p: "Proper distance to the next roof. Nobody overlooking the terrace, and no road you didn't ask to live on." },
  { icon: <><circle cx="12" cy="14" r="6" /><path d="M12 8V4M12 4c0-1 1-1.6 2-1.6" /></>, h: "Fruit already growing", p: "Mango, citrus, banana and avocado established on most parcels. A good part of breakfast grows in the garden." },
  { icon: <path d="M21 5c-3 0-5 1-7 4-1-1-2-1.5-4-1.5C7 7.5 5 9 5 12c0 4 4 7 8 7 0 0-1-3 0-5 2 .5 3-1 3-3 2 0 3-2 3-3-1 0-2 0-3 .5C19 6.5 20 5.5 21 5z" />, h: "Wildlife passing through", p: "Toucans, monkeys and hundreds of birds move across the land, because it sits on the corridors that feed the forest." },
  { icon: <><path d="M3 20l6-9 4 6 3-4 5 7z" /><circle cx="17" cy="5" r="2" /></>, h: "Protected forest next door", p: "Much of it borders La Cangreja and the corridors around it — the one neighbour that never gets built on." },
  { icon: <><path d="M12 21v-8" /><path d="M12 13c0-3-2-5-5-5 0 3 2 5 5 5z" /><path d="M12 15c0-3 2-5 5-5 0 3-2 5-5 5z" /></>, h: "Room to give back", p: "Cleared pasture replants easily. If you want, your land can join a reforestation project — no obligation, just an option that's there." },
];


const schema = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Costa Planner Estates",
    description:
      "A boutique real-estate agency for the Puriscal region of central Costa Rica — a small, hand-picked list of land and homes with their own water, fruit trees, and wildlife, near protected forest. Presented by Kevin Piórkowski: engineer, multilingual, living in the region. Free video calls and free on-site visits.",
    areaServed: { "@type": "AdministrativeArea", name: "Puriscal, San José, Costa Rica" },
    knowsLanguage: ["English", "French", "Polish", "Spanish"],
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressRegion: "Puriscal", addressCountry: "CR" },
    parentOrganization: { "@type": "Organization", name: "Costa Planner", url: "https://www.costaplanner.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "Where is Puriscal and why buy there?", acceptedAnswer: { "@type": "Answer", text: "Puriscal is a green highland canton in San José province, central Costa Rica, about one to one and a half hours from the capital and the international airport. It offers a cool climate around 1,000 m, clean water, coffee farms and forest near La Cangreja National Park, at a fraction of coastal prices — which is why more buyers are looking inland." } },
      { "@type": "Question", name: "Do you charge for visits or calls?", acceptedAnswer: { "@type": "Answer", text: "No. The first video call is free and the on-site visit is free when you come. Kevin lives in Puriscal, knows each listing in detail, and shows the properties in person — the water, the boundaries, the access and what is buildable." } },
      { "@type": "Question", name: "Can the land join a reforestation project?", acceptedAnswer: { "@type": "Answer", text: "If you want it to. Much of this land sits along biological corridors near protected forest, so cleared pasture can be replanted. It is entirely optional, with no obligation attached to buying." } },
      { "@type": "Question", name: "What languages can I work in?", acceptedAnswer: { "@type": "Answer", text: "English, French, Polish, and Spanish. Kevin is an engineer and handles the Spanish, the sellers, and the local paperwork on your behalf, and can advise on construction feasibility." } },
    ],
  },
];

export const metadata: Metadata = {
  title: "Property in the Puriscal Highlands of Costa Rica",
  description:
    "A small, hand-picked list of land and homes in the Puriscal region of central Costa Rica — cool highland climate, clean water, forest and fair prices, an hour from San José. Shown in person by Kevin: engineer, multilingual, free calls and visits.",
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function SectionTag({ n, children }: { n: string; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2.5 font-mono text-[12px] uppercase tracking-[0.24em] text-zinc-500">
      <span className="text-[#e23a2e]">{n}</span><span className="h-px w-6 bg-zinc-300" />{children}
    </span>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <EstatesHero />

      {/* 01 — The region */}
      <section id="region" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="grid grid-cols-1 gap-[clamp(30px,5vw,72px)] lg:grid-cols-[1fr_0.85fr] lg:items-end">
            <Reveal>
              <SectionTag n="01">The region</SectionTag>
              <h2 className="mt-4 text-balance font-display text-[clamp(32px,5vw,60px)] leading-[1.02]">Why buyers are looking inland.</h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-zinc-600">
                For years the money went to the coast — the heat, the crowds, the beach-town prices. The Puriscal highlands are the other Costa Rica: green mountains an hour from the capital, mild climate, real water, and land that still costs what land should. A working canton of coffee and small towns, with forest running up to the national park. The people buying here now are the ones who did their homework.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="mt-[clamp(36px,5vw,60px)] grid grid-cols-2 divide-x divide-y divide-zinc-200 overflow-hidden rounded-2xl border border-zinc-200 md:grid-cols-4 md:divide-y-0">
            {regionStats.map((s) => (
              <div key={s.l} className="px-6 py-7">
                <div className="font-display text-[clamp(24px,3vw,34px)] leading-none">{s.n}</div>
                <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500">{s.l}</div>
              </div>
            ))}
          </Reveal>

          <div className="mt-[clamp(36px,5vw,64px)] grid grid-cols-1 gap-[clamp(24px,4vw,52px)] md:grid-cols-3">
            {regionPoints.map((p, i) => (
              <Reveal key={p.h} delay={i * 80}>
                <h3 className="font-display text-[22px] leading-[1.1]">{p.h}</h3>
                <p className="mt-2.5 text-[16px] leading-relaxed text-zinc-600">{p.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 02 — About / the agent */}
      <section id="about" className="border-y border-zinc-200 bg-stone-50 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,5vw,72px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-zinc-200 shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/estates/kevin-beach.jpg" alt="Kevin Piórkowski walking the surf on a Costa Rica beach" className="h-full w-full object-cover" />
            </div>
            {/* playful inset — Kevin & the macaw */}
            <div className="absolute -bottom-5 -right-3 w-[38%] max-w-[158px] rotate-[3deg] overflow-hidden rounded-2xl border-[5px] border-stone-50 shadow-[0_16px_40px_-16px_rgba(24,33,27,.5)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/estates/kevin-macaw.jpg" alt="Kevin with a scarlet macaw mural in Puriscal" className="aspect-square w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 lg:order-2">
            <SectionTag n="02">Your agent</SectionTag>
            <h2 className="mt-4 text-balance font-display text-[clamp(30px,4.6vw,54px)] leading-[1.03]">A local you can actually trust.</h2>
            <div className="mt-6 max-w-[54ch] space-y-4 text-[17px] leading-relaxed text-zinc-600">
              <p>I&apos;m Kevin. I run Costa Planner, and I&apos;ve built my life in these hills — a farm, a place in the community, football with the neighbours on Sundays. I&apos;m an engineer by training, so when I walk you through a property I&apos;m not reading a brochure: I can tell you where the water comes from, whether the road holds in October, and what the slope means if you want to build.</p>
              <p>I only list places I&apos;ve walked myself and would sell to a friend, and I know each one by heart. I organize the visits and guide them personally — and the first call and the first visit are free, in whatever language suits you.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2.5">
              {["Lives in Puriscal", "Engineer", "EN · FR · PL · ES", "Knows every listing", "Free visits"].map((c) => (
                <span key={c} className="rounded-full border border-zinc-300 bg-white px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-zinc-600">{c}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 03 — What the land offers */}
      <section id="land" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[680px]">
            <SectionTag n="03">The land</SectionTag>
            <h2 className="mt-4 font-display text-[clamp(32px,5vw,56px)] leading-[1.03]">What a property here comes with.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] gap-y-[clamp(30px,4vw,54px)] sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.h} delay={(i % 3) * 70}>
                <div className="text-[#1f7d8c]"><Icon>{p.icon}</Icon></div>
                <h3 className="mt-4 font-display text-[23px] leading-[1.1]">{p.h}</h3>
                <p className="mt-2.5 text-[16px] leading-relaxed text-zinc-600">{p.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — The listings */}
      <section id="listings" className="border-t border-zinc-200 bg-stone-50 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[720px]">
            <SectionTag n="04">The listings</SectionTag>
            <h2 className="mt-4 font-display text-[clamp(32px,5vw,58px)] leading-[1.02]">A short, hand-picked list.</h2>
            <p className="mt-4 text-lg text-zinc-500">Every property here I&apos;ve walked myself, all within the Puriscal region. Prices are guide figures — the real number gets set fairly, on the visit. Ask me about any of them, or we&apos;ll go see them together.</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 70} className={p.flagship ? "sm:col-span-2 lg:col-span-2" : ""}>
                <article className={`group flex h-full overflow-hidden rounded-[18px] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)] ${p.flagship ? "flex-col md:flex-row" : "flex-col"}`}>
                  <div className={`relative overflow-hidden ${p.flagship ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[4/3]"}`}>
                    {p.img ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={p.img} alt={`${p.name}, Puriscal`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <ListingScene scene={p.scene!} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                    )}
                    <span className={`absolute left-3.5 top-3.5 rounded-full border border-white/60 bg-white/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur ${p.hot ? "text-[#e23a2e]" : "text-zinc-700"}`}>{p.tag}</span>
                  </div>
                  <div className={`flex flex-1 flex-col gap-2.5 px-5 pb-6 pt-5 ${p.flagship ? "md:justify-center md:px-8" : ""}`}>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f7d8c]">{p.loc}</span>
                    <h3 className={`font-display leading-[1.05] ${p.flagship ? "text-[clamp(26px,3.4vw,38px)]" : "text-[25px]"}`}>{p.name}</h3>
                    <p className="flex-1 text-[15px] leading-relaxed text-zinc-500">{p.desc}</p>
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 border-t border-zinc-200 pt-3.5 font-mono text-[12px] text-zinc-700">
                      {p.meta.map((m) => <span key={m} className="font-semibold">{m}</span>)}
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-display text-[21px]">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">Guide price</span>
                        {p.price}
                      </span>
                      <Link href={p.href} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e23a2e] transition-all hover:gap-2.5">{p.cta} <ArrowRight /></Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Contact */}
      <section id="contact" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="relative overflow-hidden rounded-[26px] px-[clamp(28px,6vw,72px)] py-[clamp(48px,8vw,96px)] text-white shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estates/bird-house-13.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(9,26,20,.95) 0%, rgba(9,26,20,.82) 46%, rgba(9,26,20,.4) 100%)" }} />
            <div className="relative z-10 max-w-[620px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#eaa519]">Free video call · Free on-site visit</span>
              <h2 className="mt-3 font-display text-[clamp(30px,5vw,56px)] leading-[1.02]">Let&apos;s start with a conversation.</h2>
              <p className="my-5 max-w-[48ch] text-lg text-white/85">Tell me roughly what you&apos;re after and when you might come. We&apos;ll do a free video call — English, French, Polish or Spanish — I&apos;ll send you what fits, and when you land I&apos;ll drive you out and show you around. No fee, no pressure, no rush to sign.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@costaplanner.com?subject=Costa%20Planner%20Estates%20—%20Puriscal%20enquiry" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">Book a free call</a>
                <a href="#listings" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">See the listings</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
