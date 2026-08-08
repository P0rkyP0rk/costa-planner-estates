import type { Metadata } from "next";
import "./globals.css";
import EstatesNav from "@/app/components/EstatesNav";
import EstatesFooter from "@/app/components/EstatesFooter";

export const metadata: Metadata = {
  title: {
    default: "Costa Planner Estates — Private Costa Rica Land, Water & Freedom",
    template: "%s | Costa Planner Estates",
  },
  description:
    "Private Costa Rica property with its own water, fruit trees, and wildlife — much of it along biological corridors and protected forest. Fair deals, shown in person by Kevin: engineer, multilingual, free calls and visits.",
  openGraph: {
    title: "Costa Planner Estates — Private Costa Rica Land, Water & Freedom",
    description:
      "Private Costa Rica land with its own water, trees, and wildlife. Fair deals, shown in person. Free video calls and on-site visits.",
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
