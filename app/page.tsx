import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import EstatesHero from "@/app/components/EstatesHero";
import Reveal from "@/app/components/Reveal";
import { ListingScene, type SceneKey } from "@/app/components/scenes";

// Featured property.
const featured = {
  name: "The Bird House",
  location: "Puriscal · Central Pacific slopes",
  status: "Reduced",
  price: "$395,000",
  blurb:
    "A glass house on a private Puriscal ridge — its own water, fruit trees at the door, ocean and forest in every window. It sits along the kind of country the toucans still use, and it already earns as an Airbnb. Move in, keep hosting, or keep the quiet for yourself.",
  specs: [
    { n: "Own water", l: "Spring-fed" },
    { n: "Fruit trees", l: "At the door" },
    { n: "2 bed", l: "+ 2 bath" },
    { n: "Ocean view", l: "+ forest" },
    { n: "Turnkey", l: "Running Airbnb" },
    { n: "1.2 ha", l: "Titled" },
  ],
};

const listings: {
  name: string; loc: string; tag: string; hot: boolean; desc: string;
  meta: string[]; price: string; scene: SceneKey;
}[] = [
  { name: "Casa del Río", loc: "Puriscal · Highlands", tag: "Own river", hot: false,
    desc: "Its own river, coffee on the terraces, a restored guesthouse. Twenty minutes from my farm, and the water runs all year.",
    meta: ["2.5 ha", "River", "3 bed"], price: "$585,000", scene: "river" },
  { name: "Mirador Pacífico", loc: "Nosara · Guanacaste", tag: "Wildlife corridor", hot: true,
    desc: "A titled ridge above Nosara — ocean on the horizon, forest behind. Private and quiet, on a corridor the wildlife uses down to the coast.",
    meta: ["0.8 ha", "Titled", "Ocean view"], price: "$1,200,000", scene: "ocean" },
  { name: "Casa Margarita Annex", loc: "Puriscal · Village edge", tag: "Move-in", hot: false,
    desc: "A restored three-bed with fruit trees and its own well, a walk from the village. Small, private, easy to live in from day one.",
    meta: ["0.4 ha", "Own well", "Fruit trees"], price: "$420,000", scene: "coffee" },
  { name: "Río Volcán", loc: "Arenal · Foothills", tag: "Reforestation-ready", hot: false,
    desc: "Six hectares with its own creek and cleared ground that wants to be forest again. Off-grid ready, bordering protected land.",
    meta: ["6 ha", "Creek", "Off-grid"], price: "$760,000", scene: "volcano" },
  { name: "Bosque Quetzal", loc: "San Gerardo · Cloud forest", tag: "Against the reserve", hot: true,
    desc: "High, cold and full of birds, right against the reserve. Quetzals nest in the next valley. For someone who came for the wildlife.",
    meta: ["3.2 ha", "1,900 m", "Birding"], price: "$540,000", scene: "cloud" },
  { name: "Playa Tortuga Lote", loc: "Osa · South Pacific", tag: "Rare", hot: false,
    desc: "Flat, titled, a walk from a beach the buses skip, palms and fruit trees already in the ground. Private, and ready to build low.",
    meta: ["1.1 ha", "Beach walk", "Titled"], price: "$680,000", scene: "beach" },
];

const pillars: { icon: ReactNode; h: string; p: string }[] = [
  {
    icon: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
    h: "Its own water",
    p: "Springs and creeks that run through the dry season. Water you own, not water you're sold.",
  },
  {
    icon: <><path d="M4 21V10l8-6 8 6v11" /><path d="M9 21v-6h6v6" /></>,
    h: "Real privacy",
    p: "Actual distance. No one overlooking you, no traffic you didn't invite in.",
  },
  {
    icon: <><circle cx="12" cy="14" r="6" /><path d="M12 8V4M12 4c0-1 1-1.6 2-1.6" /></>,
    h: "Fruit off the land",
    p: "Mango, citrus, banana, avocado already in the ground. Breakfast from your own trees.",
  },
  {
    icon: <path d="M21 5c-3 0-5 1-7 4-1-1-2-1.5-4-1.5C7 7.5 5 9 5 12c0 4 4 7 8 7 0 0-1-3 0-5 2 .5 3-1 3-3 2 0 3-2 3-3-1 0-2 0-3 .5C19 6.5 20 5.5 21 5z" />,
    h: "Wildlife on the move",
    p: "Toucans, monkeys, and a hundred birds passing through. You're on their route, and they know it.",
  },
  {
    icon: <><path d="M3 20l6-9 4 6 3-4 5 7z" /><circle cx="17" cy="5" r="2" /></>,
    h: "Protected land next door",
    p: "Much of it borders national parks and biological corridors — the reason the wildlife is there at all.",
  },
  {
    icon: <><path d="M12 21v-8" /><path d="M12 13c0-3-2-5-5-5 0 3 2 5 5 5z" /><path d="M12 15c0-3 2-5 5-5 0 3-2 5-5 5z" /></>,
    h: "Room to grow it back",
    p: "Cleared pasture that wants to be forest again. Replant it if you like — I'll help you start.",
  },
];

const why: { no: string; h: string; p: string }[] = [
  { no: "01", h: "I know every property in detail.", p: "I've walked all of them. I'll show you the water in the dry season, the real boundaries, the trees, where the sun lands — the honest version, not the brochure." },
  { no: "02", h: "I'm an engineer.", p: "So I can tell you what's actually buildable: the access road, the slope, where water and power come from, what a house here really takes. Before you fall for a view." },
  { no: "03", h: "I speak your language.", p: "English, French, Polish, Spanish. I handle the Spanish, the sellers, and the paperwork with the locals — on your side of the table." },
  { no: "04", h: "Free to talk, free to visit.", p: "Start with a free video call. When you come, the on-site visit is free too. Fair prices, no pressure, no rush to sign anything." },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Costa Planner Estates",
    description:
      "Private Costa Rica land and homes — with their own water, fruit trees, and wildlife, much of it along biological corridors and protected forest. Fair deals, shown in person by Kevin Piórkowski: engineer, French-Polish expat living in the Puriscal region. Free video calls and free on-site visits.",
    areaServed: "Costa Rica",
    knowsLanguage: ["English", "French", "Polish", "Spanish"],
    priceRange: "$$",
    address: { "@type": "PostalAddress", addressRegion: "Puriscal", addressCountry: "CR" },
    parentOrganization: { "@type": "Organization", name: "Costa Planner", url: "https://www.costaplanner.com" },
    makesOffer: {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Free property consultation and on-site visit", serviceType: "Real estate guided visit" },
      price: "0",
      priceCurrency: "USD",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What kind of Costa Rica land do you sell?", acceptedAnswer: { "@type": "Answer", text: "Private land and homes with their own water sources, fruit trees, and wildlife — much of it bordering national parks and biological corridors. For buyers who want space, self-reliance, and a place that means something, not a resort lot." } },
      { "@type": "Question", name: "Do you charge for visits or calls?", acceptedAnswer: { "@type": "Answer", text: "No. The first video call is free, and the on-site visit is free when you come. Kevin lives in the region and shows the properties in person — the water, the boundaries, the trees, the build feasibility." } },
      { "@type": "Question", name: "Can the land be part of a reforestation project?", acceptedAnswer: { "@type": "Answer", text: "If you want it to. Much of this land sits inside biological corridors near protected forest, so cleared pasture can be replanted and joined to reforestation efforts. It is entirely optional — there is no obligation attached to buying." } },
      { "@type": "Question", name: "What languages can I work in?", acceptedAnswer: { "@type": "Answer", text: "English, French, Polish, and Spanish. Kevin is an engineer and handles the Spanish, the sellers, and the local paperwork on your behalf, and can advise on construction feasibility." } },
    ],
  },
];

export const metadata: Metadata = {
  title: "Private Costa Rica Land — Water, Trees, Freedom",
  description:
    "Private Costa Rica property with its own water, fruit trees, and wildlife — much of it along biological corridors and protected forest. Fair deals, shown in person by Kevin: engineer, multilingual, free calls and visits.",
};

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}
function ArrowRight({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <EstatesHero />

      {/* The idea */}
      <section id="idea" className="bg-white py-[clamp(72px,10vw,150px)]">
        <div className="mx-auto max-w-[900px] px-[clamp(20px,5vw,52px)]">
          <Reveal>
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The idea</span>
            <h2 className="mt-4 text-balance font-display text-[clamp(30px,5vw,58px)] leading-[1.04]">
              Freedom — with something living attached.
            </h2>
          </Reveal>
          <Reveal delay={80} className="mt-8 space-y-5 text-[clamp(18px,2.1vw,22px)] leading-relaxed text-zinc-700">
            <p>Owning land here buys you space. Water you can drink, fruit off your own trees, and nobody looking over the fence. That&apos;s the freedom part, and it&apos;s real.</p>
            <p>The rest is quieter. A lot of this land sits inside biological corridors, right up against protected forest — so you&apos;re holding a piece of something bigger than the plot lines. If you ever want to, your land can join a reforestation project: trees back, wildlife through. No obligation, no catch. Just an option, because out here it matters.</p>
            <p>None of that changes the deal. You get a fair price and a place that&apos;s yours. The forest is simply part of what you&apos;re buying.</p>
          </Reveal>
        </div>
      </section>

      {/* What the land gives you */}
      <section id="land" className="border-y border-zinc-200 bg-stone-50 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[640px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">What you&apos;re buying</span>
            <h2 className="mt-3.5 font-display text-[clamp(30px,5vw,54px)] leading-[1.04]">Water, privacy, and a lot of green.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-[clamp(24px,4vw,56px)] gap-y-[clamp(30px,4vw,54px)] sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.h} delay={(i % 3) * 70}>
                <div className="text-[#1f7d8c]"><Icon>{p.icon}</Icon></div>
                <h3 className="mt-4 font-display text-[24px] leading-[1.1]">{p.h}</h3>
                <p className="mt-2.5 text-[16px] leading-relaxed text-zinc-600">{p.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured property */}
      <section id="featured" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,5vw,68px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-zinc-200 shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
            <Link href="/bird-house" className="block h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/estates/bird-house-01.jpg" alt="The Bird House — glass house with ocean and forest view" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </Link>
            <div className="pointer-events-none absolute bottom-[18px] left-[18px] rounded-[12px] border border-white/60 bg-white/85 px-4 py-2.5 backdrop-blur">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">{featured.status} · guide price</div>
              <div className="font-display text-[24px]">{featured.price}</div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#1f7d8c]">Featured · {featured.location}</div>
            <h3 className="mt-3 font-display text-[clamp(30px,4.4vw,52px)] leading-[1.02]">{featured.name}</h3>
            <p className="my-5 max-w-[46ch] text-zinc-600">{featured.blurb}</p>
            <div className="my-6 grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-zinc-200 bg-zinc-200">
              {featured.specs.map((s) => (
                <div key={s.l} className="bg-white px-3.5 py-4">
                  <div className="font-display text-[21px]">{s.n}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/bird-house" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                See the full listing <ArrowRight />
              </Link>
              <a href="#call" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
                Book a free visit
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-zinc-200 bg-stone-50 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[680px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The properties</span>
            <h2 className="mt-3.5 font-display text-[clamp(32px,5vw,58px)] leading-[1.02]">Land I&apos;d walk you through myself.</h2>
            <p className="mt-4 text-lg text-zinc-500">A short list, on purpose. Every one has its own water or its own quiet, and I&apos;ve stood on all of them. Prices are guide figures — the real number gets set fairly, on the visit.</p>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {listings.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-zinc-200 bg-white transition duration-300 hover:-translate-y-1.5 hover:border-zinc-300 hover:shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <ListingScene scene={p.scene} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                    <span className={`absolute left-3.5 top-3.5 rounded-full border border-white/60 bg-white/80 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] backdrop-blur ${p.hot ? "text-[#e23a2e]" : "text-zinc-700"}`}>{p.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col gap-2.5 px-5 pb-6 pt-5">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#1f7d8c]">{p.loc}</span>
                    <h3 className="font-display text-[25px] leading-[1.05]">{p.name}</h3>
                    <p className="flex-1 text-[15px] text-zinc-500">{p.desc}</p>
                    <div className="flex flex-wrap gap-4 border-t border-zinc-200 pt-3.5 font-mono text-[12px] text-zinc-700">
                      {p.meta.map((m) => <span key={m} className="font-semibold">{m}</span>)}
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-display text-[21px]">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">Guide price</span>
                        {p.price}
                      </span>
                      <a href="#call" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e23a2e] transition-all hover:gap-2.5">Free visit <ArrowRight /></a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kevin */}
      <section id="why" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[680px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">Why buy with me</span>
            <h2 className="mt-3.5 font-display text-[clamp(32px,5vw,58px)] leading-[1.02]">You&apos;re buying from someone who lives here.</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-[clamp(28px,5vw,64px)] gap-y-[clamp(28px,4vw,48px)] md:grid-cols-2">
            {why.map((e, i) => (
              <Reveal key={e.no} delay={(i % 2) * 90} className="border-t-2 border-[#e23a2e] pt-5">
                <div className="font-mono text-[12px] tracking-[0.2em] text-zinc-500">{e.no}</div>
                <h3 className="mb-3 mt-3 font-display text-[26px] leading-[1.1]">{e.h}</h3>
                <p className="max-w-[46ch] text-zinc-600">{e.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — free call */}
      <section id="call" className="bg-white pb-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="relative overflow-hidden rounded-[26px] px-[clamp(28px,6vw,72px)] py-[clamp(48px,8vw,96px)] text-white shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/estates/bird-house-20.jpg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(9,26,20,.95) 0%, rgba(9,26,20,.8) 46%, rgba(9,26,20,.35) 100%)" }} />
            <div className="relative z-10 max-w-[620px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#eaa519]">Free video call · Free on-site visit</span>
              <h2 className="mt-3 font-display text-[clamp(30px,5vw,56px)] leading-[1.02]">Start with a free call.</h2>
              <p className="my-5 max-w-[46ch] text-lg text-white/85">Tell me what you&apos;re after — the land, the life, roughly when. We&apos;ll talk it through on a free video call, I&apos;ll send you what fits, and when you come, I&apos;ll show you around in person. No fee, no pressure.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@costaplanner.com?subject=Costa%20Planner%20Estates%20—%20free%20call" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3.5 text-sm font-semibold text-white transition hover:brightness-110">Book a free call</a>
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">See the properties</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
