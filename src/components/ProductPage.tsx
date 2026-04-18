import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import type { Product } from "@/data/products";
import { APPLICATIONS } from "@/data/applications";

export default function ProductPage({ product }: { product: Product }) {
  const relatedApps = APPLICATIONS.filter((a) =>
    a.species.includes(product.slug === "teak" ? "Teak" : "Cypress")
  );

  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <Link
            href="/products"
            className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog)] hover:text-[var(--color-amber)]"
          >
            ← All Products
          </Link>
          <p className="eyebrow mt-5 mb-5">
            {product.slug === "teak" ? "Species 01 · Premium" : "Species 02 · Volume"}
          </p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            {product.name}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            {product.tagline}
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section eyebrow="The short version" title="What you're buying." intro={product.blurb}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatBox k={`$${product.wholesaleBF.toFixed(2)}`} v="Wholesale raw / BF" />
          <StatBox k={`$${product.fabricatedBF.toFixed(2)}`} v="Fabricated / BF" />
          <StatBox k={product.grossMargin} v="Gross margin" accent />
          <StatBox k={`$${product.landedBF.toFixed(2)}`} v="Landed cost / BF" />
        </div>
      </Section>

      <Section tone="deep" eyebrow="Why it works" title="Material strengths.">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {product.strengths.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="card p-6 flex gap-5 items-start">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] pt-1">
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

      <Section eyebrow="Grades" title="What grade fits the job.">
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

      <Section tone="deep" eyebrow="Sizes & profiles" title="What ships on the container.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-amber)] mb-4">
              Sizes
            </h4>
            <ul className="space-y-3">
              {product.sizes.map((s, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-bone-2)]">
                  <span className="text-[var(--color-amber)]">◆</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-amber)] mb-4">
              Finishes
            </h4>
            <ul className="space-y-3">
              {product.finishes.map((f, i) => (
                <li key={i} className="flex gap-3 text-[var(--color-bone-2)]">
                  <span className="text-[var(--color-amber)]">◆</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Where it ships"
        title={`${product.name} applications.`}
        intro="Selected applications this species ships into. See the full application spectrum for pricing by tier."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedApps.slice(0, 9).map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.04}>
              <Link
                href={`/applications#${a.slug}`}
                className="card p-6 block h-full"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                  {a.category} · Phase {a.phase}
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

      <CTA
        title={
          <>
            Need {product.name.toLowerCase()}?{" "}
            <span className="italic text-[var(--color-amber)]">Start a quote.</span>
          </>
        }
        body="Tell us volume, grade, sizes, and job site. We'll come back with landed pricing and a delivery plan."
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
