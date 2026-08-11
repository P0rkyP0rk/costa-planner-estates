import type { Metadata } from "next";
import Link from "next/link";
import PropertyTour from "@/app/components/PropertyTour";
import Gallery from "@/app/components/Gallery";
import Reveal from "@/app/components/Reveal";

const serif = "Didot, 'Bodoni MT', 'Hoefler Text', Garamond, 'Times New Roman', serif";

const photos = Array.from({ length: 25 }, (_, i) => `/images/estates/bird-house-${String(i + 1).padStart(2, "0")}.jpg`);
const HERO = photos[0];

// Placeholder figures pending the real listing details.
const listing = {
  name: "The Bird House",
  location: "RonRon · South of Puriscal · Pacific view",
  status: "Reduced",
  price: "$82,000",
  specs: [
    { n: "2 bed", l: "+ 2 bath" },
    { n: "2 units", l: "Live in or rent out" },
    { n: "~130 m²", l: "+ covered pool area" },
    { n: "422 m²", l: "lot · +1.2 ac optional" },
    { n: "Ocean view", l: "Manuel Antonio → Hermosa" },
    { n: "Airbnb", l: "5 yrs · Superhost" },
  ],
};

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "SingleFamilyResidence",
    name: "The Bird House — ocean-view glass house, RonRon, Puriscal, Costa Rica",
    description:
      "A two-storey glass house on a mountaintop in the RonRon community south of Puriscal, Costa Rica — panoramic Pacific ocean views, two independent units, a covered pool area, and a fruit-and-herb garden, in the ecological corridor between the Carrara and La Cangreja reserves. A five-year Superhost Airbnb. Reduced to US$82,000.",
    numberOfRooms: 2,
    floorSize: { "@type": "QuantitativeValue", value: 130, unitCode: "MTK" },
    offers: { "@type": "Offer", price: "82000", priceCurrency: "USD", availability: "https://schema.org/InStock" },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Ocean view", value: true },
      { "@type": "LocationFeatureSpecification", name: "Indoor jacuzzi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Furnished", value: true },
    ],
    address: { "@type": "PostalAddress", addressRegion: "Puriscal", addressCountry: "CR" },
  },
];

export const metadata: Metadata = {
  title: "The Bird House — Ocean-View Home in RonRon, Puriscal",
  description:
    "A two-storey glass house in the RonRon community south of Puriscal — Pacific ocean view, two independent units, a covered pool, fruit garden, and a five-year Superhost Airbnb. Reduced to $82,000. See the drone tour, browse the gallery, and book a free visit.",
};

export default function BirdHousePage() {
  return (
    <div className="bg-white text-zinc-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="relative flex min-h-[82vh] flex-col justify-end overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={HERO} alt="The Bird House — glass house with panoramic ridge view" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/30" />
        <div className="relative z-10 mx-auto w-full max-w-[1240px] px-[clamp(20px,5vw,52px)] pb-14 pt-40">
          <Link href="/" className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.24em] text-white/80 transition hover:text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 6l-6 6 6 6" /></svg>
            All properties
          </Link>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
            <div>
              <h1 className="font-display text-[clamp(44px,8vw,104px)] leading-[0.92] text-white">The Bird House</h1>
              <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.2em] text-white/85">{listing.location}</p>
            </div>
            <div className="rounded-2xl border border-white/25 bg-black/35 px-6 py-4 backdrop-blur">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#eaa519]">{listing.status} · guide price</div>
              <div className="font-display text-[32px] text-white">{listing.price}</div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#visit" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">Book a free visit</a>
            <a href="#tour" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Watch the aerial tour</a>
          </div>
        </div>
      </section>

      {/* Quick specs */}
      <section className="border-b border-zinc-200 bg-stone-50">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-px bg-zinc-200 px-[clamp(20px,5vw,52px)] md:grid-cols-6 md:px-0">
          {listing.specs.map((s) => (
            <div key={s.l} className="bg-stone-50 px-5 py-6">
              <div className="font-display text-[22px]">{s.n}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-500">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="py-[clamp(56px,8vw,110px)]">
        <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-[clamp(28px,5vw,64px)] px-[clamp(20px,5vw,52px)] lg:grid-cols-[1fr_360px] lg:items-start">
          <Reveal>
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The house</span>
            <h2 className="mt-3 max-w-[20ch] text-balance font-display text-[clamp(28px,4.4vw,50px)] leading-[1.05]">A glass house, open to the Pacific.</h2>
            <div className="mt-6 max-w-[62ch] space-y-4 text-lg text-zinc-600">
              <p>A two-storey glass house on a mountaintop in RonRon, a small private community south of Puriscal — its glass fronts wide open to the Pacific, from Manuel Antonio round to Playa Hermosa. It sits in the ecological corridor between the Carrara and La Cangreja reserves, and after twenty years of planting for the birds, the garden is never quiet.</p>
              <p>It lives as one home or two independent units. Downstairs, a 40 m² apartment with a queen bed, kitchen and bath behind a full panoramic window; upstairs, a 90 m² main floor with a king-bed master, kitchen, bath and balcony. There&apos;s a covered pool area with a whirlpool bathhouse going in, fruit trees and herbs all around, hot water and gas on demand, and — being on a summit — genuinely good internet and phone signal.</p>
              <p>It has earned a steady Airbnb income for five years, Superhost since the fourth, and I can keep that running for you if you&apos;re not here. The 422 m² lot can grow: the neighbour&apos;s 1.2-acre parcel is available alongside it for a full 360° view. I&apos;ve walked every metre — as an engineer I&apos;ll tell you straight about the access, the seasons and what more you could build. Come see it on a free visit, in whatever language suits you.</p>
            </div>
          </Reveal>
          <Reveal delay={100} className="overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_22px_60px_-28px_rgba(24,33,27,.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[1]} alt="The Bird House — hammock terrace with mountain view" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* Aerial tour */}
      <section id="tour" className="border-y border-zinc-200 bg-stone-50 py-[clamp(56px,8vw,110px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-8 grid grid-cols-1 items-end gap-x-10 gap-y-4 lg:grid-cols-[1fr_320px]">
            <div>
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">Aerial tour</span>
              <h2 className="mt-2 text-balance font-display text-[clamp(28px,4.4vw,50px)] leading-tight">See it from the air.</h2>
            </div>
            <p className="text-zinc-500 lg:pb-1.5">A 30-second drone pass over the house and the ridge it sits on.</p>
          </Reveal>
          <Reveal delay={80}><PropertyTour /></Reveal>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-[clamp(56px,8vw,110px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <Reveal className="mb-8 max-w-[640px]">
            <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-zinc-500">The gallery</span>
            <h2 className="mt-3 font-display text-[clamp(28px,4.4vw,50px)] leading-[1.05]">Room by room.</h2>
            <p className="mt-4 text-lg text-zinc-500">Tap any photo to open it full-screen.</p>
          </Reveal>
          <Reveal delay={60}><Gallery images={photos} alt="The Bird House" /></Reveal>
        </div>
      </section>

      {/* Enquiry */}
      <section id="visit" className="pb-[clamp(72px,10vw,140px)]">
        <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)]">
          <div className="relative overflow-hidden rounded-[26px] px-[clamp(28px,6vw,72px)] py-[clamp(44px,7vw,80px)] text-white shadow-[0_26px_70px_-30px_rgba(20,33,27,.55)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={photos[4]} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b241c]/95 via-[#0b241c]/80 to-[#0b241c]/40" />
            <div className="relative z-10 max-w-[620px]">
              <span className="font-mono text-[12px] uppercase tracking-[0.28em] text-[#eaa519]">Free video call · Free on-site visit</span>
              <h2 className="mt-3 font-display text-[clamp(28px,5vw,52px)] leading-none">Come see it in person.</h2>
              <p className="my-5 max-w-[46ch] text-lg text-white/85">I live in these hills. Start with a free video call — English, French, Polish or Spanish. When you come, the visit is free: I&apos;ll show you the water, the boundaries, the trees, and talk through what&apos;s buildable. Fair price, no pressure.</p>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:hello@costaplanner.com?subject=The%20Bird%20House%20—%20free%20visit" className="inline-flex items-center gap-2 rounded-full bg-[#e23a2e] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-110">Book a free visit</a>
                <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">Back to all properties</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
