import type { Metadata } from "next";
import "./globals.css";
import EstatesNav from "@/app/components/EstatesNav";
import EstatesFooter from "@/app/components/EstatesFooter";

export const metadata: Metadata = {
  title: {
    default: "Costa Planner Estates — Costa Rica property, shown from the air",
    template: "%s | Costa Planner Estates",
  },
  description:
    "Costa Rica land and homes presented by someone who lives here. Follow the macaws down over the finca, then take the aerial drone tour. Guided property visits and expat relocation support.",
  openGraph: {
    title: "Costa Planner Estates — Costa Rica property, shown from the air",
    description:
      "Costa Rica land and homes, shown by someone who lives here. Aerial drone tours, guided visits, relocation support.",
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
