import type { Metadata } from "next";
import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const SITE = "https://betweencoastssupply.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Between Coasts Supply Co. — Premium Teak & Cypress, Built to Last",
    template: "%s · Between Coasts Supply Co.",
  },
  description:
    "Kiln-dried teak and cypress, imported direct from responsible plantation growers in Costa Rica. Sold wholesale to the builders, landscapers, and contractors who build the American middle.",
  keywords: [
    "teak wholesale", "cypress wholesale", "kiln-dried teak", "teak Iowa",
    "cypress Iowa", "teak decking Midwest", "cypress fencing", "tropical hardwood importer",
    "Costa Rica teak", "plantation teak", "Between Coasts Supply",
  ],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Between Coasts Supply Co.",
    description:
      "Kiln-dried teak and cypress, direct from Costa Rica. Built between the coasts. Built to last.",
    siteName: "Between Coasts Supply Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Between Coasts Supply Co.",
    description: "Premium teak and cypress, direct from Costa Rica.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="bg-[var(--color-midnight)] text-[var(--color-bone)] antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
