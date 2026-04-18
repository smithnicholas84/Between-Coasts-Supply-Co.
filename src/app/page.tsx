import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";
import { APPLICATIONS } from "@/data/applications";
import { PRODUCTS } from "@/data/products";

const phase1Apps = APPLICATIONS.filter((a) => a.phase === 1);

const PILLARS = [
  {
    n: "01",
    title: "Sustainably sourced. Quietly.",
    body: "Every board originates with responsible plantation growers in Costa Rica — members of the Costa Rican Forestry Chamber, not clear-cut tropical. FSC track, CITES-compliant, phyto-certified at origin.",
  },
  {
    n: "02",
    title: "Landed, not airdropped.",
    body: "We ship full 40-foot containers — roughly 20,000 board feet each — through Houston and into a Des Moines-area yard. You pick up or we deliver. No freight surprises.",
  },
  {
    n: "03",
    title: "CAFTA-DR · 0% duty.",
    body: "Costa Rica teak and cypress enter under CAFTA-DR at zero import duty (HTS 4407). That savings is baked into the landed price — not captured by the importer.",
  },
  {
    n: "04",
    title: "Built for the trade, not the retail shopper.",
    body: "We sell to contractors, landscapers, millwork shops, and architects. Wholesale pricing. Net-30 for qualified accounts. Container-volume math.",
  },
];

const STATS = [
  { k: "20,000", v: "Board feet per 40' container" },
  { k: "0%", v: "Import duty under CAFTA-DR" },
  { k: "~$5.73", v: "Landed cost per BF · teak" },
  { k: "~$3.22", v: "Landed cost per BF · cypress" },
];

const MARQUEE = [
  "Iowa · Nebraska · Kansas · Minnesota · Missouri · Wisconsin · Colorado",
  "Kiln-dried teak — $9.50 / BF wholesale",
  "Kiln-dried cypress — $4.75 / BF wholesale",
  "40' containers · 20,000 BF per load",
  "FSC-track · CITES-compliant · Phyto-certified",
  "Built between the coasts. Built to last.",
];

export default function Home() {
  return (
    <>
      <ParallaxHero />

      <Marquee items={MARQUEE} />

      {/* Positioning */}
      <Section
        eyebrow="What we are"
        title={
          <>
            A direct import desk for
            {" "}
            <span className="italic text-[var(--color-amber)]">
              builders who don&rsquo;t want to buy from big-box.
            </span>
          </>
        }
        intro={
          <>
            Between Coasts Supply Co. is a wholesale hardwood import business
            based in Indianola, Iowa. We bring premium kiln-dried teak and
            cypress up from responsible plantation growers in Costa Rica,
            clear them through Houston, and stage them in a Des Moines-area
            yard for pickup or delivery across seven Midwest and Rocky Mountain
            states.
          </>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.08}>
              <div className="card p-7 md:p-9 h-full">
                <div className="flex items-baseline justify-between mb-5">
                  <span className="font-mono text-[11px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                    {p.n}
                  </span>
                  <span className="h-px flex-1 ml-5 bg-white/10" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section
        tone="deep"
        eyebrow="The material"
        title={
          <>
            Two species. One import lane.{" "}
            <span className="italic text-[var(--color-amber)]">Everything a Midwest job needs.</span>
          </>
        }
        intro="We run a 70/30 teak-to-cypress mix per container by default, adjusted to your order book. Teak handles the premium and marine work. Cypress moves the volume: fence line, pergola stock, siding, porch ceilings."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {Object.values(PRODUCTS).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link
                href={`/products/${p.slug}`}
                className="card group block p-8 md:p-10 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)]">
                      {p.slug === "teak" ? "Species 01 · Premium" : "Species 02 · Volume"}
                    </span>
                    <h3 className="mt-2 font-serif text-3xl md:text-4xl leading-tight">
                      {p.name}
                    </h3>
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-[var(--color-bone-2)] group-hover:text-[var(--color-amber)] group-hover:rotate-[-8deg] transition-all"
                  />
                </div>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed mb-8">
                  {p.tagline}
                </p>
                <dl className="grid grid-cols-2 gap-y-4 gap-x-6 border-t border-white/10 pt-6">
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
                      Wholesale raw
                    </dt>
                    <dd className="mt-1 font-serif text-2xl">
                      ${p.wholesaleBF.toFixed(2)}
                      <span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
                      Fabricated
                    </dt>
                    <dd className="mt-1 font-serif text-2xl">
                      ${p.fabricatedBF.toFixed(2)}
                      <span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
                      Gross margin
                    </dt>
                    <dd className="mt-1 font-serif text-2xl text-[var(--color-amber)]">
                      {p.grossMargin}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)]">
                      Landed cost
                    </dt>
                    <dd className="mt-1 font-serif text-2xl">
                      ${p.landedBF.toFixed(2)}
                      <span className="text-sm text-[var(--color-fog)] ml-1">/ BF</span>
                    </dd>
                  </div>
                </dl>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Applications spotlight */}
      <Section
        eyebrow="Where it ships"
        title={
          <>
            Fence. Deck. Pergola. Paneling.{" "}
            <span className="italic text-[var(--color-amber)]">And twenty more.</span>
          </>
        }
        intro="Phase 1 is built around eight exterior applications that move container volume fast. Interior millwork, hospitality, marine, and specialty follow in Phases 2 and 3."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {phase1Apps.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link
                href={`/applications#${a.slug}`}
                className="card block p-6 h-full group"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                  {a.category} · Phase {a.phase}
                </span>
                <h4 className="mt-3 font-serif text-xl leading-snug">
                  {a.name}
                </h4>
                <p className="mt-2 text-sm text-[var(--color-fog)] text-pretty">
                  {a.buyer}
                </p>
                <p className="mt-4 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-bone-2)]">
                  {a.pricing}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/applications" className="btn-ghost">
            See the full application spectrum
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </Section>

      {/* Stats strip */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
            {STATS.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div>
                  <div className="font-serif text-4xl md:text-5xl text-[var(--color-amber)] leading-none">
                    {s.k}
                  </div>
                  <div className="mt-3 font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-fog)]">
                    {s.v}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geography */}
      <Section
        eyebrow="Where we ship"
        title={
          <>
            Seven states.{" "}
            <span className="italic text-[var(--color-amber)]">One lane.</span>
          </>
        }
        intro="We run one container lane — Costa Rica to Houston to Iowa — and fan out by regional freight from there. Our radius covers Iowa, Nebraska, Kansas, Minnesota, Missouri, Wisconsin, and Colorado. If you're building between the coasts, you're inside our box."
      >
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {["Iowa","Nebraska","Kansas","Minnesota","Missouri","Wisconsin","Colorado"].map((s, i) => (
            <Reveal key={s} delay={i * 0.04}>
              <div className="card px-5 py-8 text-center hover-lift">
                <div className="font-serif text-2xl">{s}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
