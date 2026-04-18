import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "About — Built between the coasts",
  description:
    "Between Coasts Supply Co. is an Iowa-based wholesale hardwood import business, bringing premium plantation teak and cypress directly to Midwest builders.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">About</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance max-w-5xl">
            Built between the coasts.{" "}
            <span className="italic text-[var(--color-amber)]">On purpose.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            Between Coasts Supply Co. is a wholesale hardwood import business
            based in Indianola, Iowa. We exist because the builders, landscapers,
            and contractors shaping the American middle deserve the same access
            to premium tropical hardwoods that the coasts have had for fifty years —
            without the coastal markup.
          </p>
          <div className="divider-amber mt-14" />
        </div>
      </section>

      <Section
        eyebrow="The thesis"
        title={
          <>
            Big-box lumber{" "}
            <span className="italic text-[var(--color-amber)]">isn&rsquo;t built for the job you&rsquo;re quoting.</span>
          </>
        }
        intro={
          <>
            Pressure-treated pine warps. Composite dies on the second hot summer.
            Cedar runs short every season. Meanwhile, two species grown on
            responsibly-managed plantations 2,200 miles south — teak and cypress —
            outperform everything in the big-box aisle and enter the U.S. at
            zero tariff.
            <br /><br />
            The only reason Midwest contractors haven&rsquo;t bought them at
            volume is that the import lane didn&rsquo;t exist. So we built one.
          </>
        }
      />

      <Section tone="deep" eyebrow="How it works" title="One lane. One yard. One trade desk.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            {
              n: "01",
              title: "Source",
              body: "We work directly with responsible plantation growers in Costa Rica — plantation-grown, not clear-cut, with phyto-certification and CITES compliance documented at origin.",
            },
            {
              n: "02",
              title: "Ship",
              body: "40-foot containers move from Caldera or Limón to the Port of Houston by ocean freight, then inland by rail or truck to our Des Moines-area staging yard. Roughly 20,000 board feet per container.",
            },
            {
              n: "03",
              title: "Supply",
              body: "Contractors and shops pick up from the yard or take regional delivery across Iowa, Nebraska, Kansas, Minnesota, Missouri, Wisconsin, and Colorado. Net-30 for qualified trade accounts.",
            },
          ].map((c, i) => (
            <Reveal key={c.n} delay={i * 0.08}>
              <div className="card p-8 h-full">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)]">
                  {c.n}
                </span>
                <h3 className="mt-3 font-serif text-2xl">{c.title}</h3>
                <p className="mt-4 text-[var(--color-bone-2)] text-pretty leading-relaxed">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section eyebrow="Who runs this" title="The operators.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="card p-8">
              <h3 className="font-serif text-3xl">Nick Smith</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-amber)]">
                Founder · Indianola, Iowa
              </p>
              <p className="mt-5 text-[var(--color-bone-2)] text-pretty leading-relaxed">
                A decade in home-efficiency sales across Iowa and the central
                plains. Knows the contractor buyer because he&rsquo;s sat across
                the kitchen table from ten thousand of them. Runs the trade desk,
                the supply relationship, and the first-call sales.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card p-8">
              <h3 className="font-serif text-3xl">Ross</h3>
              <p className="mt-1 font-mono text-[11px] tracking-[0.22em] uppercase text-[var(--color-amber)]">
                Partner · Waukee, Iowa
              </p>
              <p className="mt-5 text-[var(--color-bone-2)] text-pretty leading-relaxed">
                Operations and yard. Runs staging, inventory, pickup scheduling,
                and regional freight. The reason a contractor can call on a
                Tuesday and pull up on a Thursday.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="deep" eyebrow="Values" title="How we work.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { t: "Direct-to-trade.", b: "No retail storefront, no showroom. We sell to contractors, landscapers, architects, and millwork shops. The margin stays with the people cutting and installing." },
            { t: "Container math, not shelf math.", b: "We price the way imports actually work — landed cost per board foot, rolled up to the container. No phantom surcharges, no change-of-currency markup." },
            { t: "Responsibly sourced. Quietly.", b: "Plantation-grown, chamber-member supplier, phyto-certified, CITES-compliant. We don&rsquo;t brag about it — we just won&rsquo;t buy otherwise." },
            { t: "Built to last.", b: "The species we sell outlast every pressure-treated board in the aisle. The business we&rsquo;re building is supposed to outlast us, too." },
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="card p-7">
                <h4 className="font-serif text-2xl mb-3">{v.t}</h4>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed" dangerouslySetInnerHTML={{ __html: v.b }} />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
