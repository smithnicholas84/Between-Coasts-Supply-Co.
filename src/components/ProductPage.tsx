import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import ChipStrip from "@/components/ChipStrip";
import type { Product } from "@/data/products";
import { APPLICATIONS } from "@/data/applications";

const SITE_URL = "https://betweencoastssupply.com";

function buildProductJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/products/${product.slug}#product`,
    name: product.name,
    description: product.blurb,
    sku: product.slug,
    url: `${SITE_URL}/products/${product.slug}`,
    image: [product.heroImage.url, ...product.galleryImages.map((g) => g.url)],
    category: "Wholesale lumber",
    brand: {
      "@type": "Brand",
      name: "Between Coasts Teak & Timber Co.",
    },
    manufacturer: {
      "@type": "Organization",
      name: "Between Coasts Teak & Timber Co.",
      url: SITE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: product.wholesaleBF.toFixed(2),
      highPrice: product.fabricatedBF.toFixed(2),
      offerCount: 2,
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        unitCode: "BFT",
        unitText: "board foot",
      },
      seller: {
        "@type": "Organization",
        name: "Between Coasts Teak & Timber Co.",
        url: SITE_URL,
      },
    },
    additionalProperty: [
      { "@type": "PropertyValue", name: "Import duty", value: "0% under CAFTA-DR (HTS 4407)" },
      { "@type": "PropertyValue", name: "Lead time", value: product.leadTime },
      { "@type": "PropertyValue", name: "Minimum order", value: product.minOrder },
    ],
  };
}

export default function ProductPage({ product }: { product: Product }) {
  const relatedApps = APPLICATIONS.filter((a) =>
    a.species.includes(product.slug === "teak" ? "Teak" : "Cypress")
  );

  const speciesLabel = product.slug === "teak" ? "Species 01 · Premium" : "Species 02 · Volume";

  const productJsonLd = buildProductJsonLd(product);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      {/* ─── HERO — above-fold: title, chips, price band, dual CTAs ─────── */}
      <section className="relative pt-28 md:pt-36 pb-0 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <Link
            href="/products"
            className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog)] hover:text-[var(--color-amber)] transition-colors"
          >
            ← All Products
          </Link>
          <p className="eyebrow mt-4 mb-4">{speciesLabel}</p>
          <h1 className="font-serif text-[clamp(2rem,6.5vw,5.5rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            {product.name}
          </h1>
          <p className="mt-4 text-base md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            {product.tagline}
          </p>

          {/* Chip strip — credibility tags */}
          <div className="mt-5">
            <ChipStrip chips={product.chips} />
          </div>

          {/* Price band + dual CTAs — the conversion row */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 pt-5 border-t border-white/10">
            <div>
              <p className="font-serif text-2xl md:text-3xl text-[var(--color-bone)]">
                ${product.wholesaleBF.toFixed(2)}
                <span className="text-[var(--color-fog)]">–</span>
                ${product.fabricatedBF.toFixed(2)}
                <span className="text-sm font-sans text-[var(--color-fog)] ml-2">/ BF wholesale</span>
              </p>
              <p className="mt-1 font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-fog)]">
                {product.leadTime}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact?intent=quote" className="btn-primary">
                Request quote
              </Link>
              <Link href="/contact?intent=sample" className="btn-ghost">
                Request sample
              </Link>
            </div>
          </div>
        </div>

        {/* Full-bleed hero image — below the above-fold conversion row */}
        <div className="mt-10 md:mt-14 relative w-full h-[50vh] min-h-[340px] max-h-[560px] overflow-hidden">
          <Image
            src={product.heroImage.url}
            alt={product.heroImage.alt}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay: fade top (into page bg) and bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-midnight)] via-transparent to-[var(--color-midnight)] opacity-60" />
          {/* Visual brief tooltip — only shown in dev via data attr, hidden in prod */}
          <div
            className="absolute bottom-4 right-4 hidden"
            data-visual-brief={product.heroImage.visualBrief}
          />
        </div>

        <div className="container-x relative mt-8 md:mt-10">
          <div className="divider-amber" />
        </div>
      </section>

      {/* ─── PRICING STATS ───────────────────────────────────────────────── */}
      <Section eyebrow="Pricing" title="What you're buying.">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBox k={`$${product.wholesaleBF.toFixed(2)}`} v="Wholesale raw / BF" />
          <StatBox k={`$${product.fabricatedBF.toFixed(2)}`} v="Fabricated / BF" />
          <StatBox k={product.grossMargin} v="Gross margin" accent />
          <StatBox k={`$${product.landedBF.toFixed(2)}`} v="Our landed cost / BF" />
        </div>
        <p className="mt-6 text-sm text-[var(--color-fog)]">
          Landed cost is our internal benchmark — not the sale price. Wholesale raw pricing is for trade accounts ordering by the bundle or pallet. Contact the trade desk for volume pricing.
        </p>
      </Section>

      {/* ─── APPLICATIONS — what jobs this ships to ──────────────────────── */}
      <Section
        tone="deep"
        eyebrow="Applications"
        title={`Where ${product.name} ships.`}
        intro="Selected applications this species is specified for. See the full application spectrum for per-tier pricing."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedApps.slice(0, 9).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.04}>
              <Link
                href={`/applications#${a.slug}`}
                className="card p-6 block h-full group hover:border-[var(--color-amber)]/40"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                  {a.category}
                </span>
                <h5 className="mt-3 font-serif text-lg leading-snug">{a.name}</h5>
                <p className="mt-2 text-sm text-[var(--color-fog)]">{a.buyer}</p>
                <p className="mt-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-bone-2)]">
                  {a.pricing}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/applications" className="btn-ghost">
            Full application spectrum
          </Link>
        </div>
      </Section>

      {/* ─── WHY THIS MATERIAL — strengths ───────────────────────────────── */}
      <Section eyebrow="Why this material" title="What it does on the job.">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {product.strengths.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="card p-6 flex gap-5 items-start">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] pt-1 shrink-0">
                  0{i + 1}
                </span>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed flex-1">
                  {s}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* ─── COMPARISON TABLE — vs cedar, vs PT pine ─────────────────────── */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">Performance comparison</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
            {product.name} vs. cedar vs. pressure-treated pine.
          </h2>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="w-full min-w-[640px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] pb-4 pr-6 w-[220px]">
                    Category
                  </th>
                  <th className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-amber)] pb-4 pr-6">
                    {product.name}
                  </th>
                  <th className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] pb-4 pr-6">
                    Western Red Cedar
                  </th>
                  <th className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] pb-4">
                    Pressure-Treated Pine
                  </th>
                </tr>
              </thead>
              <tbody>
                {product.comparison.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className="py-4 pr-6 font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-fog)]">
                      {row.category}
                    </td>
                    <td className="py-4 pr-6 text-[var(--color-bone)] font-medium text-sm">
                      {row.teak ?? row.cypress}
                    </td>
                    <td className="py-4 pr-6 text-[var(--color-bone-2)] text-sm">
                      {row.cedar}
                    </td>
                    <td className="py-4 text-[var(--color-fog)] text-sm">
                      {row.ptPine}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── GRADES ──────────────────────────────────────────────────────── */}
      <Section eyebrow="Grades" title="Match the grade to the job.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {product.grades.map((g, i) => (
            <Reveal key={g.name} delay={i * 0.08}>
              <div className="card p-7 h-full">
                <h4 className="font-serif text-xl mb-3 text-[var(--color-amber)]">
                  {g.name}
                </h4>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed">
                  {g.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ─── SPECIFICATIONS — sizes & finishes ───────────────────────────── */}
      <Section tone="deep" eyebrow="Specifications" title="Dimensions &amp; Profiles.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-amber)] mb-4">
              Sizes & Dimensions
            </h4>
            <ul className="space-y-3">
              {product.sizes.map((s, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-bone-2)]">
                  <span className="text-[var(--color-amber)] shrink-0">◆</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-amber)] mb-4">
              Profiles & Finishes
            </h4>
            <ul className="space-y-3">
              {product.finishes.map((f, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-bone-2)]">
                  <span className="text-[var(--color-amber)] shrink-0">◆</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 p-6 card">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-amber)] mb-2">
            Custom sizing
          </p>
          <p className="text-[var(--color-bone-2)] text-sm leading-relaxed">
            Mill-to-spec is available for orders of sufficient volume. Contact the trade desk with your profile requirements and we'll quote to order.
          </p>
        </div>
      </Section>

      {/* ─── VISUAL PROOF — gallery ───────────────────────────────────────── */}
      <Section
        eyebrow="Visual proof"
        title="Installed. In the field."
        intro="Real applications. No staged stock photography."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {product.galleryImages.map((img, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3] bg-[var(--color-midnight-3)]">
                <Image
                  src={img.url}
                  alt={img.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* Hover caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight)] via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-350 flex items-end p-5">
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[var(--color-bone-2)]">
                    {img.alt}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Photography replacement notice — remove before launch */}
        <div className="mt-8 p-5 border border-[var(--color-amber)]/30 bg-[var(--color-amber)]/5">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-amber)] mb-2">
            ⚠ Pre-launch action required
          </p>
          <p className="text-sm text-[var(--color-bone-2)]">
            Gallery images above are Unsplash placeholders. Replace with licensed job-site photography before launch.
            Visual briefs for each image slot are in <code className="text-[var(--color-amber)]">src/data/products.ts</code> under <code className="text-[var(--color-amber)]">galleryImages[].visualBrief</code>.
          </p>
        </div>
      </Section>

      {/* ─── CTA ─────────────────────────────────────────────────────────── */}
      <CTA
        title={
          <>
            Need {product.name.toLowerCase()}?{" "}
            <span className="italic text-[var(--color-amber)]">Start a quote.</span>
          </>
        }
        body="Tell us volume, grade, sizes, and job site. We'll come back with landed pricing, lead times, and a delivery plan within 24 hours."
      />
    </>
  );
}

function StatBox({ k, v, accent = false }: { k: string; v: string; accent?: boolean }) {
  return (
    <div className="card p-6">
      <div
        className={`font-serif text-3xl md:text-4xl leading-none ${
          accent ? "text-[var(--color-amber)]" : "text-[var(--color-bone)]"
        }`}
      >
        {k}
      </div>
      <div className="mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
        {v}
      </div>
    </div>
  );
}
