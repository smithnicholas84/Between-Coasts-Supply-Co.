import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Trade Program",
  description:
    "Wholesale pricing, Net-30 terms, volume tiers, and yard pickup for qualified trade accounts. Between Coasts Teak & Timber Co. trade program for contractors, landscapers, architects, and millwork shops.",
};

export default function TradePage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">Trade</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
            Built for the trade.{" "}
            <span className="italic text-[var(--color-amber)]">Not the weekend shopper.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            We sell to contractors, landscapers, architects, commercial GCs,
            millwork shops, and marina operators. No retail storefront. No
            showroom. Just wholesale material on a trade desk.
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section eyebrow="How it works" title="Three tiers. Clear math.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              tag: "Tier 01 — Project",
              label: "Single job",
              vol: "Under 2,000 BF",
              price: "Wholesale list",
              terms: "Credit card · 50% deposit",
              body: "One project, one pickup. You get wholesale pricing on the first board. We require a 50% deposit before we pull from the yard.",
            },
            {
              tag: "Tier 02 — Trade",
              label: "Repeat account",
              vol: "2,000–10,000 BF / yr",
              price: "Wholesale + 4% volume",
              terms: "Net-30 after credit check",
              body: "The working account. Net-30 after a standard credit review. Dedicated sales contact. Priority on pickup scheduling.",
            },
            {
              tag: "Tier 03 — Partner",
              label: "Volume partner",
              vol: "10,000+ BF / yr",
              price: "Negotiated landed",
              terms: "Net-30 · reserved stock",
              body: "You&rsquo;re moving serious volume. We carve out reserved stock against your forecast and price at negotiated landed with transparent mark-up.",
            },
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="card p-8 h-full relative">
                {i === 1 && (
                  <span className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.22em] uppercase text-[var(--color-midnight)] bg-[var(--color-amber)] px-2 py-1">
                    Most common
                  </span>
                )}
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)]">
                  {t.tag}
                </span>
                <h3 className="mt-3 font-serif text-3xl">{t.label}</h3>
                <dl className="mt-6 space-y-3 border-y border-white/10 py-6">
                  <Row k="Volume" v={t.vol} />
                  <Row k="Pricing" v={t.price} />
                  <Row k="Terms" v={t.terms} />
                </dl>
                <p className="mt-6 text-[var(--color-bone-2)] text-pretty leading-relaxed" dangerouslySetInnerHTML={{ __html: t.body }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="deep" eyebrow="Who qualifies" title="The trade desk is open to:">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            "Fence contractors",
            "Landscape + design-build companies",
            "Custom home builders",
            "Deck builders",
            "Remodelers with a commercial license",
            "Architects + interior designers",
            "Commercial general contractors",
            "Millwork shops + fabricators",
            "Marina operators + boat builders",
            "Hospitality group builders",
            "Retail fixture fabricators",
            "Garden centers (wholesale accounts)",
          ].map((t, i) => (
            <Reveal key={i} delay={i * 0.03}>
              <div className="card px-5 py-5 flex items-center gap-4">
                <span className="text-[var(--color-amber)]">◆</span>
                <span>{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        eyebrow="Apply to the trade desk"
        title={
          <>
            Open a trade account.{" "}
            <span className="italic text-[var(--color-amber)]">First load next month.</span>
          </>
        }
        body="Tell us your business, typical volume, and preferred terms. We'll run credit, open the account, and get you quoted in under a week."
        primaryLabel="Apply for Trade Account"
      />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">{k}</dt>
      <dd className="text-right text-[var(--color-bone-2)]">{v}</dd>
    </div>
  );
}
