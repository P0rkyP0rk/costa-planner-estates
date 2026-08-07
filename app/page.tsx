import type { Metadata } from "next";
import Link from "next/link";
import EstatesHero from "@/app/components/EstatesHero";
import Reveal from "@/app/components/Reveal";
import { ListingScene, type SceneKey } from "@/app/components/scenes";

const serif = "Didot, 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif";

// Featured property — placeholder figures pending the real listing details.
const featured = {
  name: "The Bird House",
  location: "Puriscal · Central Pacific slopes · Ocean & mountain view",
  status: "Reduced",
  price: "$395,000",
  blurb:
    "A red steel-framed glass house on a Puriscal ridge — level with the birds, ocean on one horizon and mountains on the other. Open-plan living, an indoor jacuzzi, a hammock terrace, and a running Airbnb. Walk in and keep hosting, or empty it out and keep the view to yourself.",
  specs: [
    { n: "2 bed", l: "+ 2 bath" },
    { n: "Glass house", l: "Red steel frame" },
    { n: "900 m", l: "Elevation" },
    { n: "Ocean", l: "+ mountain view" },
    { n: "25 min", l: "To Puriscal" },
    { n: "1h30", l: "To SJO airport" },
  ],
};

const listings: {
  name: string; loc: string; tag: string; hot: boolean; desc: string;
  ha: string; beds: string; extra: string; price: string; scene: SceneKey;
}[] = [
  { name: "Casa del Río", loc: "Puriscal · Highlands", tag: "New", hot: false,
    desc: "Twenty minutes from my own farm. Coffee on the terraces, a restored guesthouse, water rights sorted.",
    ha: "2.5 ha", beds: "3 bed", extra: "Coffee + casa", price: "$585,000", scene: "river" },
  { name: "Mirador Pacífico", loc: "Nosara · Guanacaste", tag: "Ocean view", hot: true,
    desc: "A titled ridge lot above Nosara. The view holds in the dry season and the green — I checked in both.",
    ha: "0.8 ha", beds: "Build lot", extra: "Titled", price: "$1,200,000", scene: "ocean" },
  { name: "Casa Margarita Annex", loc: "Puriscal · Village edge", tag: "Move-in", hot: false,
    desc: "A restored three-bed on the edge of the village, walk to the pulpería. Next door to people I trust.",
    ha: "0.4 ha", beds: "3 bed", extra: "Restored", price: "$420,000", scene: "coffee" },
  { name: "Río Volcán", loc: "Arenal · Foothills", tag: "Off-grid ready", hot: false,
    desc: "Six hectares in the Arenal foothills, its own creek and a clearing already cut for the house.",
    ha: "6 ha", beds: "Build site", extra: "Creek", price: "$760,000", scene: "volcano" },
  { name: "Bosque Quetzal", loc: "San Gerardo · Cloud forest", tag: "Birding", hot: true,
    desc: "High and cold and full of birds. Quetzals nest in the next valley. For someone who came for the wildlife.",
    ha: "3.2 ha", beds: "1 cabin", extra: "1,900 m", price: "$540,000", scene: "cloud" },
  { name: "Playa Tortuga Lote", loc: "Osa · South Pacific", tag: "Rare", hot: false,
    desc: "Walking distance to a beach the tour buses skip. Flat, titled, ready for a single low house under the palms.",
    ha: "1.1 ha", beds: "Build lot", extra: "Beach walk", price: "$680,000", scene: "beach" },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Costa Planner Estates",
    description:
      "Costa Rica land and homes presented by Kevin Piórkowski, a French-Polish expat living on a finca in the Puriscal region since 2022. Guided property visits and expat relocation support.",
    areaServed: "Costa Rica",
    knowsLanguage: ["English", "French", "Polish", "Spanish"],
    address: { "@type": "PostalAddress", addressRegion: "Puriscal", addressCountry: "CR" },
    parentOrganization: { "@type": "Organization", name: "Costa Planner", url: "https://www.costaplanner.com" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I visit the Costa Rica properties in person before buying?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Every listing comes with a guided visit. Kevin lives in the Puriscal region and plans the days around the properties — the drive, the land in context, the neighbours worth meeting — before you decide anything." },
      },
      {
        "@type": "Question",
        name: "Do you help with relocation after buying?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Costa Planner runs the relocation side — residency, banking, schools, Spanish with locals. Buying a property is the first step; the relocation support carries on from there." },
      },
      {
        "@type": "Question",
        name: "In what languages can I work with Costa Planner Estates?",
        acceptedAnswer: { "@type": "Answer", text: "English, French, Polish, and Spanish. Kevin handles Spanish with local sellers and authorities on your behalf." },
      },
    ],
  },
];

export const metadata: Metadata = {
  title: "Costa Rica Property, Shown From the Air",
  description:
    "Costa Rica land and homes presented by someone who lives here. Follow the macaws down over the finca, then take the aerial drone tour. Guided property visits and expat relocation support.",
};

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="bg-white text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Arrival: macaw flight → bird's-eye hand-off */}
      <EstatesHero />

      {/* Featured property */}
      <section id="featured" className="border-y border-zinc-200 bg-stone-50 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 items-center gap-[clamp(30px,5vw,68px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-zinc-200 shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
            <Link href="/bird-house" className="block h-full w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/estates/bird-house-01.jpg" alt="The Bird House — glass house with ocean and mountain view" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
            </Link>
            <div className="pointer-events-none absolute bottom-[18px] left-[18px] rounded-[12px] border border-white/60 bg-white/85 px-4 py-2.5 backdrop-blur">
              <div className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-zinc-500">{featured.status} · guide price</div>
              <div className="font-display text-[24px]">{featured.price}</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="font-mono text-[12px] uppercase tracking-[0.22em] text-[#1f7d8c]">{featured.location}</div>
            <h3 className="mt-3 font-display text-[clamp(30px,4.4vw,52px)] leading-[1.02]">{featured.name}</h3>
            <p className="my-5 max-w-[46ch] text-zinc-600">{featured.blurb}</p>
            <div className="my-6 grid grid-cols-3 gap-px overflow-hidden rounded-[14px] border border-zinc-200 bg-zinc-200">
              {featured.specs.map((s) => (
                <div key={s.l} className="bg-stone-50 px-3.5 py-4">
                  <div className="font-display text-[23px]">{s.n}</div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-500">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/bird-house" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800">
                View the full listing <ArrowRight />
              </Link>
              <a href="#visit" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:border-zinc-900">
                Ask me about relocation
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-[clamp(34px,5vw,60px)] max-w-[640px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The portfolio</span>
            <h2 className="mt-3.5 font-display text-[clamp(32px,5vw,58px)] leading-[1.02]">Land I&apos;d walk you through myself.</h2>
            <p className="mt-4 text-lg text-zinc-500">A short list, on purpose. Every one of these I&apos;ve stood on. Prices are guide figures — the real number gets set on the visit.</p>
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
                      <span className="font-semibold">{p.ha}</span>
                      <span className="font-semibold">{p.beds}</span>
                      <span className="font-semibold">{p.extra}</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <span className="font-display text-[21px]">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-400">Guide price</span>
                        {p.price}
                      </span>
                      <a href="#visit" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#e23a2e] transition-all hover:gap-2.5">Guided visit <ArrowRight /></a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why buy this way */}
      <section id="edge" className="bg-stone-100 py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-5 max-w-[640px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">Why buy this way</span>
            <h2 className="mt-3.5 font-display text-[clamp(32px,5vw,58px)] leading-[1.02]">You&apos;re buying from a neighbour.</h2>
          </Reveal>
          <div className="mt-5 grid grid-cols-1 gap-[clamp(24px,4vw,50px)] md:grid-cols-3">
            {[
              { no: "01", h: "I've stood on every listing.", p: "I live in these hills. I know which access road floods in October, which titles are clean, which ocean view disappears when the trees leaf out. Nothing here is a photo I found online." },
              { no: "02", h: "The visit is guided.", p: "Fly in for the properties and I plan the days around them — the drive, the meals, the neighbours worth meeting. You see the land and the life around it before you decide anything." },
              { no: "03", h: "Buying is step one.", p: "Most people who buy here want to live here. Costa Planner already runs the relocation side — residency, banking, schools, Spanish with the locals. The keys are the start, not the finish." },
            ].map((e, i) => (
              <Reveal key={e.no} delay={i * 90} className="border-t-2 border-[#e23a2e] pt-5">
                <div className="font-mono text-[12px] tracking-[0.2em] text-zinc-500">{e.no}</div>
                <h3 className="mb-3 mt-3.5 font-display text-[26px] leading-[1.08]">{e.h}</h3>
                <p className="text-zinc-600">{e.p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="visit" className="bg-white py-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="relative overflow-hidden rounded-[26px] px-[clamp(28px,6vw,72px)] py-[clamp(44px,7vw,88px)] text-[#f4efe2] shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
            <div className="absolute inset-0 z-0" aria-hidden="true">
              <svg viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
                <defs><linearGradient id="bandG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#123a30" /><stop offset="1" stopColor="#081813" /></linearGradient></defs>
                <rect width="1200" height="500" fill="url(#bandG)" />
                <path d="M0 360 C200 300 380 360 560 330 C760 296 940 366 1200 320 L1200 500 L0 500Z" fill="#0e2a22" />
                <path d="M0 420 C220 380 420 420 640 400 C860 380 1020 424 1200 404 L1200 500 L0 500Z" fill="#0a2019" />
                <circle cx="980" cy="120" r="60" fill="#eaa519" opacity=".2" /><circle cx="980" cy="120" r="34" fill="#eaa519" opacity=".28" />
              </svg>
            </div>
            <div className="relative z-[2] max-w-[620px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#eaa519]">Guided visits · Relocation</span>
              <h2 className="mt-3 font-display text-[clamp(30px,5vw,56px)] leading-none text-white">Come fly it in person.</h2>
              <p className="my-5 max-w-[44ch] text-lg text-white/80">Tell me what you&apos;re looking for and roughly when. I&apos;ll line up the properties that fit, plan the visit around them, and send you off the plane straight into it.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@costaplanner.com?subject=Costa%20Planner%20Estates%20enquiry" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110">Start the conversation</a>
                <a href="#portfolio" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Browse the portfolio</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
