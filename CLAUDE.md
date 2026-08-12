# Costa Planner Estates — Claude Instructions

## Project Context

- **Site**: Costa Planner Estates — a real-estate branch of Costa Planner (costaplanner.com). A boutique listing site for land and homes in the **Puriscal region** of central Costa Rica.
- **Owner**: Kevin Piórkowski — French-Polish expat, engineer, living in the Puriscal region since 2022. Multilingual (EN/FR/PL/ES). Offers free video calls and free on-site visits.
- **Repo**: p0rkyp0rk/costa-planner-estates — separate project from the travel site, deployed on its own Vercel, branch `main`.
- **Stack**: Next.js 16 App Router, React 19, Tailwind CSS v4, TypeScript. No i18n (English only for now).
- **Key paths**: `app/page.tsx` (homepage), `app/bird-house/page.tsx` (real listing), `app/listings/[slug]/page.tsx` (dynamic detail page), `app/lib/listings.ts` (central data), `app/components/` (Hero, Nav, Footer, etc.).

---

## Factual accuracy — HARD RULE (read every session)

This rule exists because a factual claim ("an hour from the capital") once shipped as the hero headline without being verified. It happened to be true; that was luck, not process. Never again.

**Every verifiable claim on the site must have a source before it ships.** Verifiable claims include: distances, drive times, elevations, plot/house sizes, room counts, prices, dates, quantities, and any "closest / only / first / nearest / most" or superlative.

A claim may go on a page ONLY if it is one of:
1. **Verified** against a real source (web search, map, official data) — and the source is noted in the reply to Kevin.
2. **Given by Kevin**, or from a source Kevin has designated correct — e.g. the Bird House Craigslist listing, the Finca Krispin document.
3. **Clearly labelled illustrative / placeholder** (e.g. the four not-yet-real listings, which carry a visible "illustrative pending final listing details" note).

If none of those hold, **do not write the claim.** Leave it out, use a softer non-numeric phrasing, or ask Kevin. A plausible-sounding number is not a fact.

- Highest scrutiny for **headlines, hero copy, and JSON-LD schema** — the most-quoted, hardest-to-notice places.
- **Schema is separate from visible copy.** When you fix a fact in visible text, check the JSON-LD on the same page and fix it there too (they are separate constants).
- When editing any block, **re-verify the factual claims in the block you touch**, even if you didn't change them.
- Never invent a blanket claim about "most plots / every listing" (water, wildlife, borders a park). If it isn't true of a specific listing from a real source, don't state it as fact.

---

## Listing data provenance (current)

- **The Bird House** (`/bird-house`): real. All figures from the Craigslist listing Kevin designated correct — $82,000, 2 bed/2 bath, two units, ~130 m², 422 m² lot, +1.2 ac optional, ocean view, five-year Superhost Airbnb, RonRon community.
- **Finca Krispin** (`/listings/finca-krispin`): real. All figures from Kevin's document — 6.3 ha, ~2 h from San José, near La Cangreja, 75% pasture / 25% forest, spring water pumped to the top, electricity on site, near-360° view. Price on request.
- **Río Grifo Alto, Mirador Turrubares, Finca Barbacoas, Casa Santiago**: PLACEHOLDER. Prices and specs are fabricated for layout. They must stay clearly labelled illustrative until Kevin supplies real data. Do not present their numbers as fact anywhere they could be quoted without that label.

---

## Voice (inherited from Costa Planner)

- First person. Kevin lives in the region and shows every listing himself — that's the core differentiator.
- Cut travel-speak and unearned superlatives ("bespoke", "curated", "hidden gems", "perfect" as filler, "seamlessly"). No filler openers ("Whether you…"). No negative "not X / not a tourist" openers.
- Specific over general. Short sentences. First person. Prefer 15 words over 20.
- No expiring numbers ("5 years", "since 2021"). Prefer timeless phrasing; "since 2022" sparingly.
- Watch for word repetition within a passage — Kevin notices.
- "Puriscal" alone is the **town** (Santiago de Puriscal). For the area, say "the Puriscal region / highlands / hills / valleys", not bare "Puriscal".
- No orphan words: don't leave a paragraph's last line as a single word — widen the container so it pulls up.

---

## Languages

Kevin works in four: English, French, Polish, Spanish. Any body-text list of the languages he speaks must include all four.

---

## Dev rules

1. Run `npm run build` before every `git push`.
2. The `origin` remote drops intermittently — before pushing, re-add it: `git remote remove origin; git remote add origin https://github.com/p0rkyp0rk/costa-planner-estates`, then `git push -u origin HEAD`.
3. Verify visual changes with a Playwright screenshot where practical. Note: the sandbox Chromium has no H.264 codec, so **mp4 video cannot be previewed here** — Kevin verifies video playback on the live Vercel deploy.
4. AI-readiness matters: keep JSON-LD schema (RealEstateAgent, RealEstateListing, FAQPage, Offer) accurate. A wrong price or fact in schema is worse than in copy — it gets extracted verbatim.
