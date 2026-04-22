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
    default: "Between Coasts Teak & Timber Co. — Plantation Teak & Central American Cypress, Direct from Costa Rica",
    template: "%s · Between Coasts Teak & Timber Co.",
  },
  description:
    "Kiln-dried teak and Central American Cypress, imported direct from responsible plantation growers in Costa Rica. Sold wholesale to the builders, landscapers, and contractors who build the American middle.",
  keywords: [
    "teak wholesale", "Central American Cypress wholesale", "kiln-dried teak", "teak Iowa",
    "Central American Cypress Iowa", "teak decking Midwest", "Central American Cypress fencing", "tropical hardwood importer",
    "Costa Rica teak", "plantation teak", "Cupressus lusitanica", "Between Coasts Teak", "Between Coasts Timber",
  ],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Between Coasts Teak & Timber Co.",
    description:
      "Kiln-dried teak and Central American Cypress, direct from Costa Rica. Built between the coasts. Built to last.",
    siteName: "Between Coasts Teak & Timber Co.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Between Coasts Teak & Timber Co.",
    description: "Kiln-dried plantation teak and Central American Cypress, direct from Costa Rica. 0% duty under CAFTA-DR.",
  },
  robots: { index: true, follow: true },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE}#organization`,
  name: "Between Coasts Teak & Timber Co.",
  alternateName: "BCS",
  url: SITE,
  logo: `${SITE}/icon.svg`,
  description:
    "Wholesale importer of kiln-dried plantation teak and Central American Cypress from Costa Rica. Serving builders, landscapers, and contractors across the Midwest and Rocky Mountain region under CAFTA-DR 0% import duty.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Waukee",
    addressRegion: "IA",
    addressCountry: "US",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-515-555-0199",
      email: "trade@betweencoastssupply.com",
      contactType: "sales",
      availableLanguage: ["English"],
      areaServed: "US",
    },
    {
      "@type": "ContactPoint",
      email: "spec@betweencoastssupply.com",
      contactType: "technical support",
      availableLanguage: ["English"],
      areaServed: "US",
    },
  ],
  areaServed: [
    { "@type": "State", name: "Iowa" },
    { "@type": "State", name: "Nebraska" },
    { "@type": "State", name: "Kansas" },
    { "@type": "State", name: "Minnesota" },
    { "@type": "State", name: "Missouri" },
    { "@type": "State", name: "Wisconsin" },
    { "@type": "State", name: "Colorado" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body className="bg-[var(--color-midnight)] text-[var(--color-bone)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
