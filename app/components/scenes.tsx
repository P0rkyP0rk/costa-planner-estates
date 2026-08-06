// Pure SVG scenery for the Estates pages.
// These double as designed "photo slots": each property renders an on-brand
// illustrated terrain until a real photograph is dropped in at the matching
// /images/estates/*.jpg path. No client JS — safe to import from server or
// client components.

import * as React from "react";

/* A stylised Scarlet Macaw in flight. `gid` keeps gradient ids unique when
   more than one macaw is on screen. */
export function MacawSVG({ gid, className }: { gid: string; className?: string }) {
  return (
    <svg viewBox="0 0 220 150" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`wg-${gid}`} x1="1" y1="0" x2="0" y2="0.4">
          <stop offset="0" stopColor="#e23a2e" />
          <stop offset="0.42" stopColor="#eaa519" />
          <stop offset="0.72" stopColor="#3aa64a" />
          <stop offset="1" stopColor="#2f6fd0" />
        </linearGradient>
      </defs>
      <path d="M104 96 L100 150 L110 144 L110 150 L120 144 L116 96Z" fill="#c62f26" />
      <path d="M108 96 L110 148 L114 96Z" fill="#e6534a" />
      <g className="est-wing est-wing-l">
        <path d="M100 60 C60 44 26 46 6 66 C34 66 40 74 44 84 C64 70 86 70 100 78Z" fill={`url(#wg-${gid})`} />
        <path d="M100 62 C74 52 50 54 34 66" stroke="#a9241d" strokeWidth="1.2" fill="none" opacity=".5" />
      </g>
      <g className="est-wing est-wing-r">
        <path d="M120 60 C160 44 194 46 214 66 C186 66 180 74 176 84 C156 70 134 70 120 78Z" fill={`url(#wg-${gid})`} />
        <path d="M120 62 C146 52 170 54 186 66" stroke="#a9241d" strokeWidth="1.2" fill="none" opacity=".5" />
      </g>
      <ellipse cx="110" cy="74" rx="15" ry="34" fill="#e23a2e" />
      <ellipse cx="110" cy="70" rx="9" ry="24" fill="#f0574c" />
      <circle cx="110" cy="34" r="16" fill="#e23a2e" />
      <path d="M104 30 a7 6 0 0 1 12 0 a10 8 0 0 1 -12 0Z" fill="#f5f0e6" />
      <circle cx="110" cy="30" r="2.4" fill="#1a1a1a" />
      <path d="M104 22 C107 12 113 12 116 22 C113 20 107 20 104 22Z" fill="#efe7d6" />
      <path d="M106 19 C108 13 112 13 114 19Z" fill="#3a3128" />
    </svg>
  );
}

/* Overhead aerial map — the poster behind the drone tour video until the real
   30s footage loads over it. HUD is added by the component that uses it. */
export function AerialScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="est-av" cx="0.5" cy="0.45" r="0.75">
          <stop offset="0" stopColor="#2c5e46" />
          <stop offset="1" stopColor="#12332440" />
        </radialGradient>
      </defs>
      <rect width="1200" height="675" fill="#1c4331" />
      <g fill="#245239">
        <ellipse cx="180" cy="120" rx="140" ry="90" />
        <ellipse cx="500" cy="80" rx="180" ry="100" />
        <ellipse cx="900" cy="140" rx="200" ry="120" />
        <ellipse cx="1080" cy="480" rx="180" ry="140" />
        <ellipse cx="240" cy="520" rx="200" ry="150" />
      </g>
      <g fill="#2d6244" opacity=".9">
        <ellipse cx="360" cy="300" rx="240" ry="160" />
        <ellipse cx="760" cy="360" rx="260" ry="170" />
      </g>
      <rect width="1200" height="675" fill="url(#est-av)" />
      <path d="M-20 180 C220 250 260 380 500 430 C740 480 820 580 1240 620" stroke="#7fb9c4" strokeWidth="26" fill="none" opacity=".85" />
      <path d="M-20 180 C220 250 260 380 500 430 C740 480 820 580 1240 620" stroke="#a9d4db" strokeWidth="10" fill="none" opacity=".6" />
      <g transform="translate(560 300)">
        <ellipse cx="40" cy="30" rx="150" ry="100" fill="#7f9c63" opacity=".85" />
        <g transform="rotate(-18)">
          <rect x="0" y="0" width="80" height="52" fill="#c46a3f" />
          <path d="M0 0 L40 -20 L80 0Z" fill="#a2542f" />
        </g>
        <g transform="translate(70 60) rotate(-18)">
          <rect x="0" y="0" width="52" height="34" fill="#d0764a" />
        </g>
        <ellipse cx="120" cy="70" rx="26" ry="16" fill="#4fa3b0" />
      </g>
      <path d="M120 90 C300 200 500 160 700 300 C860 420 980 380 1080 480" stroke="#ffffff" strokeWidth="2" strokeDasharray="3 10" fill="none" opacity=".55" />
      <circle cx="120" cy="90" r="5" fill="#e23a2e" />
      <circle cx="1080" cy="480" r="5" fill="#eaa519" />
    </svg>
  );
}

/* Tall cloud-forest scene for the featured property media column. */
export function FincaScene({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="est-fSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe0dd" />
          <stop offset="1" stopColor="#eef0df" />
        </linearGradient>
        <linearGradient id="est-fRiver" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fc0c9" />
          <stop offset="1" stopColor="#4f97a3" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#est-fSky)" />
      <path d="M0 150 C90 120 150 150 220 130 C300 108 350 140 400 128 L400 0 L0 0Z" fill="#dfe6d6" opacity=".6" />
      <path d="M0 210 C80 180 160 210 250 185 C330 164 380 196 400 188 L400 500 L0 500Z" fill="#7fa88f" />
      <path d="M0 300 C90 268 180 300 270 280 C340 264 380 292 400 286 L400 500 L0 500Z" fill="#3f6f56" />
      <path d="M0 380 C100 350 200 380 300 366 C350 358 380 372 400 368 L400 500 L0 500Z" fill="#264a39" />
      <path d="M120 500 C150 380 250 360 300 300 C260 400 260 460 250 500Z" fill="url(#est-fRiver)" opacity=".85" />
      <g transform="translate(150 300)">
        <rect x="0" y="0" width="66" height="40" fill="#e9e2d2" />
        <path d="M-6 0 L33 -22 L72 0Z" fill="#b6584a" />
        <rect x="12" y="14" width="14" height="26" fill="#5a4632" />
        <rect x="40" y="14" width="16" height="14" fill="#8fb7c0" />
      </g>
      <g fill="#173325">
        <path d="M60 340c6-20 18-20 24 0zM300 330c7-22 20-22 27 0zM340 360c6-16 16-16 22 0z" />
      </g>
      <circle cx="70" cy="70" r="16" fill="#fff" opacity=".5" />
      <circle cx="95" cy="66" r="20" fill="#fff" opacity=".4" />
    </svg>
  );
}

/* Listing card terrains, keyed by name. */
export type SceneKey = "ocean" | "river" | "coffee" | "volcano" | "cloud" | "beach";

export function ListingScene({ scene, className }: { scene: SceneKey; className?: string }) {
  const inner: Record<SceneKey, React.ReactNode> = {
    ocean: (
      <>
        <defs>
          <linearGradient id="est-s1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bcd8e0" /><stop offset="1" stopColor="#e9ead6" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s1)" />
        <path d="M0 150 L400 128 L400 210 L0 220Z" fill="#5aa0b0" />
        <path d="M0 205 C120 190 260 210 400 196 L400 300 L0 300Z" fill="#3a7d6a" />
        <path d="M0 250 C140 236 280 252 400 244 L400 300 L0 300Z" fill="#255241" />
        <g fill="#183a2c"><path d="M60 250c6-18 16-18 22 0zM320 244c6-16 15-16 21 0z" /></g>
        <circle cx="330" cy="60" r="26" fill="#ffe6ac" opacity=".8" />
      </>
    ),
    river: (
      <>
        <defs>
          <linearGradient id="est-s2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#cfe0dd" /><stop offset="1" stopColor="#e9ecdb" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s2)" />
        <path d="M0 130 C120 100 260 140 400 116 L400 0 L0 0Z" fill="#dbe4d2" opacity=".6" />
        <path d="M0 180 C110 156 230 186 400 168 L400 300 L0 300Z" fill="#6f9c7f" />
        <path d="M0 240 C120 216 250 244 400 232 L400 300 L0 300Z" fill="#2f5a44" />
        <path d="M170 300 C190 210 250 200 240 150 C210 230 200 270 210 300Z" fill="#6fb0bb" opacity=".85" />
        <g transform="translate(250 180)"><rect width="40" height="26" fill="#ece4d4" /><path d="M-4 0 L20 -14 L44 0Z" fill="#b6584a" /></g>
      </>
    ),
    coffee: (
      <>
        <defs>
          <linearGradient id="est-s3" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#dbe0cf" /><stop offset="1" stopColor="#ece7d3" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s3)" />
        <path d="M0 150 C120 128 260 152 400 138 L400 300 L0 300Z" fill="#8caf7f" />
        <path d="M0 200 C120 180 260 204 400 190 L400 300 L0 300Z" fill="#5a8460" />
        <path d="M0 250 C120 232 260 254 400 242 L400 300 L0 300Z" fill="#39603f" />
        <g stroke="#2d5035" strokeWidth="1" opacity=".5"><path d="M0 175 C120 156 260 178 400 165" /><path d="M0 225 C120 208 260 228 400 216" /></g>
        <g transform="translate(180 165)"><rect width="46" height="30" fill="#ece4d4" /><path d="M-5 0 L23 -16 L51 0Z" fill="#c9663a" /><rect x="8" y="12" width="10" height="18" fill="#5a4632" /></g>
      </>
    ),
    volcano: (
      <>
        <defs>
          <linearGradient id="est-s4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c7d6db" /><stop offset="1" stopColor="#e7e8d7" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s4)" />
        <path d="M120 150 L200 40 L280 150Z" fill="#6b7f86" />
        <path d="M180 66 L200 40 L222 66 C210 60 190 60 180 66Z" fill="#8a9aa0" />
        <path d="M0 150 C120 130 260 152 400 140 L400 300 L0 300Z" fill="#4a7a5f" />
        <path d="M0 210 C120 190 260 212 400 200 L400 300 L0 300Z" fill="#2c503a" />
        <path d="M110 300 C140 220 210 210 200 160 C170 240 165 270 175 300Z" fill="#6fb0bb" opacity=".8" />
      </>
    ),
    cloud: (
      <>
        <defs>
          <linearGradient id="est-s5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d3dcda" /><stop offset="1" stopColor="#e8ebdc" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s5)" />
        <path d="M0 160 C120 138 260 160 400 148 L400 300 L0 300Z" fill="#7fa08c" />
        <path d="M0 215 C120 196 260 216 400 206 L400 300 L0 300Z" fill="#3f6a52" />
        <ellipse cx="90" cy="120" rx="60" ry="20" fill="#fff" opacity=".5" />
        <ellipse cx="260" cy="100" rx="80" ry="22" fill="#fff" opacity=".45" />
        <ellipse cx="330" cy="150" rx="60" ry="18" fill="#fff" opacity=".4" />
        <g transform="translate(200 175)"><rect width="34" height="22" fill="#ece4d4" /><path d="M-4 0 L17 -12 L38 0Z" fill="#b6584a" /></g>
      </>
    ),
    beach: (
      <>
        <defs>
          <linearGradient id="est-s6" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#bfdbe0" /><stop offset="1" stopColor="#efebd6" /></linearGradient>
        </defs>
        <rect width="400" height="300" fill="url(#est-s6)" />
        <path d="M0 170 L400 158 L400 210 L0 218Z" fill="#5aa7b0" />
        <path d="M0 205 C120 196 280 214 400 205 L400 300 L0 300Z" fill="#e7d9b4" />
        <g transform="translate(70 210)" stroke="#3a6b4a" strokeWidth="5" fill="none">
          <path d="M0 0 C-2 -30 -2 -50 0 -70" />
          <path d="M0 -70 C-18 -78 -34 -70 -40 -58" strokeWidth="7" />
          <path d="M0 -70 C18 -78 34 -70 40 -58" strokeWidth="7" />
          <path d="M0 -70 C-8 -86 -4 -96 6 -100" strokeWidth="7" />
        </g>
        <g transform="translate(300 215)" stroke="#3a6b4a" strokeWidth="4" fill="none">
          <path d="M0 0 C-2 -22 -2 -38 0 -52" />
          <path d="M0 -52 C-14 -58 -26 -52 -32 -44" strokeWidth="6" />
          <path d="M0 -52 C14 -58 26 -52 32 -44" strokeWidth="6" />
        </g>
      </>
    ),
  };
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true">
      {inner[scene]}
    </svg>
  );
}
