import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Sourcing — Responsibly grown. Quietly sourced.",
  description:
    "Between Coasts Supply Co. sources plantation-grown teak and cypress from responsible growers in Costa Rica. CITES-compliant, phyto-certified, CAFTA-DR 0% duty, FSC-track.",
};

export default function SourcingPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">Sourcing</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
            Responsibly grown.{" "}
            <span className="italic text-[var(--color-amber)]">Quietly sourced.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            We buy from a single trusted supply partner — a responsible plantation
            hardwood grower in Costa Rica, with farms across multiple regions and
            decades of vertical integration from log to kiln-dried plank.
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section
        eyebrow="The partnership"
        title={
          <>
            Plantation-grown,{" "}
            <span className="italic text-[var(--color-amber)]">not clear-cut tropical.</span>
          </>
        }
        intro={
          <>
            Our Costa Rica partner is an active member of the Costa Rican
            Forestry Chamber and has operated in Central American hardwoods
            for more than two decades. They run multiple plantation locations
            plus harvest rights on adjacent responsibly-managed properties.
            <br /><br />
            Every container we import moves through their vertically-integrated
            operation: log → cant → kiln. That means our board feet arrive
            with a documented chain of custody from a single, traceable origin
            — not the anonymous hardwood market.
          </>
        }
      />

      <Section tone="deep" eyebrow="Documentation" title="What ships with every container.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              t: "Phytosanitary Certificate",
              b: "Issued by Costa Rica's Ministry of Agriculture at origin, confirming the shipment is free of pests and complies with USDA APHIS import requirements.",
            },
            {
              t: "CITES Compliance",
              b: "Plantation teak and cypress are not CITES-listed species, and every shipment is documented and accompanied by origin paperwork to confirm plantation source.",
            },
            {
              t: "CAFTA-DR Certificate of Origin",
              b: "Qualifies the shipment under the Central America Free Trade Agreement for 0% import duty (HTS 4407.29 teak / 4407.10 cypress).",
            },
            {
              t: "Commercial Invoice & Packing List",
              b: "Board-foot count by species, grade, and bundle, with pricing in USD FOB Costa Rica port and landed estimate to destination yard.",
            },
            {
              t: "Bill of Lading",
              b: "Ocean freight carrier documentation from Caldera or Limón through to Port of Houston, with container number, seal, and inland movement authority.",
            },
            {
              t: "Lacey Act Declaration",
              b: "U.S. importer declaration filed at entry, covering species, country of harvest, and supplier — as required under the Lacey Act for wood imports.",
            },
          ].map((d, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card p-7 h-full">
                <h3 className="font-serif text-xl mb-3">{d.t}</h3>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed">
                  {d.b}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="The lane" title="From a Costa Rica kiln to your job site.">
        <ol className="space-y-6">
          {[
            { t: "Harvest & mill · Costa Rica", b: "Plantation logs → cants → kiln-dried planks at our partner&rsquo;s facility." },
            { t: "Pack & document · San José", b: "Banded bundles, phyto certificate, commercial invoice, CAFTA-DR certificate of origin." },
            { t: "Ocean freight · Caldera / Limón → Houston", b: "8–12 day transit on major carriers. Roughly $4,200 per 40' container." },
            { t: "Customs & clearance · Port of Houston", b: "Broker files entry under HTS 4407 at 0% duty. THC, inspection, phyto release." },
            { t: "Inland freight · Houston → Iowa", b: "Truck or rail-plus-drayage from Houston to our Des Moines-area staging yard." },
            { t: "Yard stage · Indianola, IA", b: "Unloaded, staged by species and grade. Available for pickup or regional delivery." },
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.04}>
              <li className="flex gap-6 items-start border-b border-white/10 pb-6">
                <span className="font-mono text-sm tracking-[0.22em] uppercase text-[var(--color-amber)] pt-1 min-w-[3ch]">
                  0{i + 1}
                </span>
                <div>
                  <h4 className="font-serif text-2xl">{s.t}</h4>
                  <p className="mt-2 text-[var(--color-bone-2)] text-pretty leading-relaxed" dangerouslySetInnerHTML={{ __html: s.b }} />
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Section>

      <CTA
        eyebrow="Due diligence"
        title={
          <>
            Want the paper?{" "}
            <span className="italic text-[var(--color-amber)]">We have it.</span>
          </>
        }
        body="Specifier, architect, or commercial GC looking to review supplier documentation before specifying? Get in touch and we'll share our current sourcing packet."
        primaryLabel="Request Sourcing Packet"
      />
    </>
  );
}
