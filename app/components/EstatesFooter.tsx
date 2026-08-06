import Link from "next/link";

export default function EstatesFooter() {
  return (
    <footer className="bg-[#0b1a14] text-[#dfe7df]">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,5vw,52px)] py-[clamp(48px,7vw,88px)]">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-[360px]">
            <div className="flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M20 3c-6 6-9 12-9 19a9 9 0 0018 0c0-7-3-13-9-19z" fill="#e23a2e" />
                <path d="M20 12c-2.4 3-3.6 6-3.6 10a3.6 3.6 0 007.2 0c0-4-1.2-7-3.6-10z" fill="#eaa519" />
              </svg>
              <span className="leading-none text-white">
                <span className="font-display text-[19px]">Costa&nbsp;Planner</span>
                <span className="mt-0.5 block font-mono text-[9.5px] uppercase tracking-[0.34em] opacity-70">Estates</span>
              </span>
            </div>
            <p className="mt-4 text-[15px] text-[#9fb3a3]">
              The property arm of Costa Planner. Kevin Piórkowski — French-Polish, living on a finca in Puriscal since 2022. I sell the land I&apos;d want to live on.
            </p>
          </div>

          <div className="flex flex-wrap gap-[clamp(34px,6vw,72px)]">
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f978a]">Explore</h4>
              <Link href="/bird-house" className="mb-2.5 block text-[15px] text-[#cfdccf] transition hover:text-white">The Bird House</Link>
              <Link href="/#portfolio" className="mb-2.5 block text-[15px] text-[#cfdccf] transition hover:text-white">All properties</Link>
              <Link href="/#visit" className="mb-2.5 block text-[15px] text-[#cfdccf] transition hover:text-white">Guided visits</Link>
            </div>
            <div>
              <h4 className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#7f978a]">Reach me</h4>
              <a href="mailto:hello@costaplanner.com" className="mb-2.5 block text-[15px] text-[#cfdccf] transition hover:text-white">hello@costaplanner.com</a>
              <span className="mb-2.5 block text-[15px] text-[#cfdccf]">Puriscal, Costa Rica</span>
              <a href="https://www.costaplanner.com" className="mb-2.5 block text-[15px] text-[#cfdccf] transition hover:text-white">costaplanner.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[12px] text-[#7f978a]">
          <span>© 2026 Costa Planner Estates</span>
          <span className="flex gap-3.5">
            <span>EN</span><span>FR</span><span>PL</span><span>ES</span>
          </span>
          <span>Properties shown are illustrative pending final listing details.</span>
        </div>
      </div>
    </footer>
  );
}
