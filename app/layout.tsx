import type { Metadata } from "next";
import "./globals.css";
import EstatesNav from "@/app/components/EstatesNav";
import EstatesFooter from "@/app/components/EstatesFooter";

export const metadata: Metadata = {
  title: {
    default: "Costa Planner Estates — Property in the Puriscal Highlands, Costa Rica",
    template: "%s | Costa Planner Estates",
  },
  description:
    "A small, hand-picked list of land and homes in the Puriscal region of central Costa Rica — cool highland climate, clean water, forest and fair prices, an hour from San José. Shown in person by Kevin: engineer, multilingual, free calls and visits.",
  openGraph: {
    title: "Costa Planner Estates — Property in the Puriscal Highlands, Costa Rica",
    description:
      "Land and homes in the Puriscal highlands of Costa Rica — water, forest, fair prices, an hour from San José. Shown in person. Free calls and visits.",
    type: "website",
    siteName: "Costa Planner Estates",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EstatesNav />
        <main>{children}</main>
        <EstatesFooter />
      </body>
    </html>
  );
}
