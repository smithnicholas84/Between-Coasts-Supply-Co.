import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Products — Teak & Cypress",
  description:
    "Kiln-dried plantation teak and Central American cypress, direct from Costa Rica. Wholesale pricing, raw and fabricated profiles.",
};

export default function ProductsPage() {
  return (
    <>
      <SubHero
        eyebrow="Products"
        title={
          <>
            Two species.{" "}
            <span className="italic text-[var(--color-amber)]">Every application the Midwest asks for.</span>
          </>
        }
        intro="Raw planks, kiln-dried, surfaced to order, and priced for the trade. Fabricated profiles — T&G, shiplap, decking patterns — available on request."
      />

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.values(PRODUCTS).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link href={`/products/${p.slug}`} className="card group block p-8 md:p-10 h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)]">
                    {p.slug === "teak" ? "Species 01 · Premium" : "Species 02 · Volume"}
                  </span>
                  <ArrowUpRight size={22} className="text-[var(--color-bone-2)] group-hover:text-[var(--color-amber)] transition-colors" />
                </div>
                <h3 className="font-serif text-4xl md:text-5xl leading-[1.05] tracking-[-0.02em]">
                  {p.name}
                </h3>
                <p className="mt-4 text-[var(--color-bone-2)] text-pretty leading-relaxed">
                  {p.tagline}
                </p>
                <p className="mt-6 text-[var(--color-fog)] text-pretty leading-relaxed">
                  {p.blurb}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-y-5 gap-x-6 border-t border-white/10 pt-6">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Wholesale raw</dt>
                    <dd className="mt-1 font-serif text-2xl">${p.wholesaleBF.toFixed(2)}<span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Fabricated</dt>
                    <dd className="mt-1 font-serif text-2xl">${p.fabricatedBF.toFixed(2)}<span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span></dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Gross margin</dt>
                    <dd className="mt-1 font-serif text-2xl text-[var(--color-amber)]">{p.grossMargin}</dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">Landed cost</dt>
                    <dd className="mt-1 font-serif text-2xl">${p.landedBF.toFixed(2)}<span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span></dd>
                  </div>
                </dl>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}

function SubHero({ eyebrow, title, intro }: { eyebrow: string; title: React.ReactNode; intro: string }) {
  return (
    <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
      <div className="container-x relative">
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h1 className="font-serif text-[clamp(2.25rem,6vw,5rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
          {intro}
        </p>
        <div className="divider-amber mt-14" />
      </div>
    </section>
  );
}
