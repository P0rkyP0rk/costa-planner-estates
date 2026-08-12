import type { SceneKey } from "@/app/components/scenes";

export type Listing = {
  slug: string;
  name: string;
  loc: string; // short location for the card
  tag: string;
  hot?: boolean;
  flagship?: boolean;
  price: string;
  status?: string;
  desc: string; // card description
  meta: string[]; // card chips
  img?: string; // real card image
  scene?: SceneKey; // illustrated fallback
  href: string; // where the card links
  cta: string;
  external?: boolean; // detail page lives outside the dynamic route (e.g. /bird-house)
  placeholder?: boolean; // details not yet confirmed

  // Detail page fields:
  location?: string; // longer hero location line
  specs?: { n: string; l: string }[];
  storyHeading?: string;
  story?: string[];
  gallery?: string[];
  videos?: { src: string; label: string }[];
};

export const listings: Listing[] = [
  {
    slug: "bird-house",
    name: "The Bird House",
    loc: "RonRon · South of Puriscal",
    tag: "Turnkey Airbnb",
    hot: true,
    flagship: true,
    price: "$82,000",
    status: "Reduced",
    desc: "A two-storey glass house on a mountaintop in the RonRon community, wide open to a Pacific view from Manuel Antonio to Playa Hermosa. Two independent units, a covered pool area, and a fruit-and-herb garden alive with birds, between the Carrara and Cangreja reserves. A Superhost Airbnb for five years.",
    meta: ["2 bed · 2 bath", "2 units · ~130 m²", "422 m² lot", "Ocean view"],
    img: "/images/estates/bird-house-01.jpg",
    href: "/bird-house",
    cta: "View listing",
    external: true,
  },
  {
    slug: "finca-krispin",
    name: "Finca Krispin",
    loc: "Near La Cangreja · Puriscal",
    tag: "Whole mountaintop",
    hot: true,
    price: "On request",
    status: "New",
    desc: "Six and a half hectares on its own summit near La Cangreja National Park, two hours from San José. Open pasture and forest, potable spring water already pumped to the top, electricity on site, and a near-360° view all the way to the ocean.",
    meta: ["6.3 ha", "Own water", "Near-360° view"],
    img: "/images/estates/flanc.jpeg",
    scene: "volcano",
    href: "/listings/finca-krispin",
    cta: "View listing",
    location: "Near La Cangreja · Puriscal · 2 h from San José",
    specs: [
      { n: "6.3 ha", l: "63,000 m²" },
      { n: "Own water", l: "Spring, pumped to top" },
      { n: "Near-360°", l: "Ocean & sunsets" },
      { n: "75% pasture", l: "25% forest" },
      { n: "Electricity", l: "On site" },
      { n: "2 h", l: "to San José" },
    ],
    storyHeading: "A whole mountaintop, near La Cangreja.",
    story: [
      "This one came to me through a neighbour. He is getting on in years and can no longer run cattle up here, so he asked me to help him find the right buyer — and I said yes, because I know the land and I know what it is worth.",
      "It is 6.3 hectares on its own summit near La Cangreja National Park, about two hours from San José. Three-quarters open pasture, a quarter forest with fruit trees, and a near-360° panorama that runs all the way to the ocean and the sunsets. Potable spring water is already pumped to the top, and there is electricity on the property.",
      "Two roads bring you off Route 239 to the land. The last stretch to the very summit still needs a proper vehicle track cut in — a job I would put at five to ten thousand dollars done right, and exactly the kind of thing I can scope for you as an engineer. What you get for it is rare: a private mountain of your own to build on, with the view already there.",
    ],
    videos: [
      { src: "/video/krispin-summit.mp4", label: "From the summit" },
      { src: "/video/krispin-jungle.mp4", label: "The spring water" },
      { src: "/video/krispin-satellite.mp4", label: "Where it sits" },
    ],
    gallery: [
      "/images/estates/ocean.jpeg",
      "/images/estates/cascade.jpeg",
      "/images/estates/flanc.jpeg",
      "/images/estates/cuvette.jpeg",
    ],
  },
  {
    slug: "rio-grifo-alto",
    name: "Río Grifo Alto",
    loc: "Grifo Alto · Puriscal",
    tag: "Own river",
    price: "$185,000",
    placeholder: true,
    desc: "A slope of coffee and gallery forest with its own year-round river, twenty minutes from town.",
    meta: ["2.5 ha", "River", "Coffee"],
    scene: "river",
    href: "/listings/rio-grifo-alto",
    cta: "View listing",
    location: "Grifo Alto · Puriscal",
    specs: [
      { n: "2.5 ha", l: "Titled" },
      { n: "Own river", l: "Year-round" },
      { n: "Coffee", l: "On the terraces" },
      { n: "20 min", l: "To Puriscal town" },
    ],
    storyHeading: "Coffee, forest, and a river of your own.",
    story: [
      "A working slope of coffee and gallery forest, with a river that runs clear through the dry season along its lower edge. Twenty minutes from Puriscal town, private but not remote.",
      "Room to keep the coffee, build a house above the water, or let part of it grow back to forest. I have walked it — come see it with me and I will show you the boundaries and the water.",
    ],
  },
  {
    slug: "mirador-turrubares",
    name: "Mirador Turrubares",
    loc: "Alto de Turrubares · Puriscal",
    tag: "Ocean-view lot",
    hot: true,
    price: "$110,000",
    placeholder: true,
    desc: "A titled ridge lot with a long view to the Pacific and forest at your back. Private, and ready to build on.",
    meta: ["0.8 ha", "Ocean view", "Titled"],
    scene: "ocean",
    href: "/listings/mirador-turrubares",
    cta: "View listing",
    location: "Alto de Turrubares · Puriscal",
    specs: [
      { n: "0.8 ha", l: "Titled" },
      { n: "Ocean view", l: "To the Pacific" },
      { n: "Forest", l: "At your back" },
      { n: "Build-ready", l: "Access in place" },
    ],
    storyHeading: "A ridge lot with the Pacific in front.",
    story: [
      "A titled building lot on a Turrubares ridge, looking west over the hills to the ocean, with forest behind for privacy and shade.",
      "The kind of spot you plan a single low house around. I can walk you through the access, the sun, and what a build here would take.",
    ],
  },
  {
    slug: "finca-barbacoas",
    name: "Finca Barbacoas",
    loc: "Barbacoas · Puriscal",
    tag: "Reforestation-ready",
    price: "$240,000",
    placeholder: true,
    desc: "Six hectares of pasture and gallery forest with its own creek and cleared ground that wants trees again.",
    meta: ["6 ha", "Creek", "Off-grid"],
    scene: "coffee",
    href: "/listings/finca-barbacoas",
    cta: "View listing",
    location: "Barbacoas · Puriscal",
    specs: [
      { n: "6 ha", l: "Pasture + forest" },
      { n: "Own creek", l: "Year-round" },
      { n: "Off-grid", l: "Ready" },
      { n: "Reforest", l: "If you like" },
    ],
    storyHeading: "Space, water, and room to give back.",
    story: [
      "Six hectares of gentle pasture and gallery forest with its own creek. Cleared ground that would replant easily, if you want your land to become forest again.",
      "Off-grid ready and genuinely private. Come see how it sits — I will show you the creek and the corridors the wildlife uses.",
    ],
  },
  {
    slug: "casa-santiago",
    name: "Casa Santiago",
    loc: "Santiago de Puriscal · Village",
    tag: "Move-in",
    price: "$168,000",
    placeholder: true,
    desc: "A restored three-bed a walk from the square, with fruit trees and its own well. Easy to live in from day one.",
    meta: ["3 bed", "Own well", "In town"],
    scene: "cloud",
    href: "/listings/casa-santiago",
    cta: "View listing",
    location: "Santiago de Puriscal · Village",
    specs: [
      { n: "3 bed", l: "+ 2 bath" },
      { n: "Own well", l: "Plus town water" },
      { n: "Fruit trees", l: "In the garden" },
      { n: "In town", l: "Walk to the square" },
    ],
    storyHeading: "A house in town, ready to live in.",
    story: [
      "A restored three-bedroom home a short walk from the Santiago square, with fruit trees and its own well behind town water. The easy option: nothing to build, just move in.",
      "Good for a first base while you look for land, or a comfortable home in its own right. I can show you around any day.",
    ],
  },
];

export const detailListings = listings.filter((l) => !l.external);
export const bySlug = (slug: string) => listings.find((l) => l.slug === slug);
