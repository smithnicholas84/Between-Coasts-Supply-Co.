import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ParallaxHero from "@/components/ParallaxHero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";
import { APPLICATIONS } from "@/data/applications";
import { PRODUCTS } from "@/data/products";

const exteriorApps = APPLICATIONS.filter((a) => a.category === "Exterior");

// Contractor-first pillar order. Sustainability is #04 — credibility, not headline.
const PILLARS = [
  {
    n: "01",
    title: "Built for the trade. Not the retail aisle.",
    body: "We sell to contractors, fence installers, landscapers, millwork shops, and architects. Wholesale pricing. Net-30 for qualified accounts. If you're pulling more than a pallet, you're our customer.",
  },
  {
    n: "02",
    title: "Costa Rica to your job site. Typically in 3–5 weeks.",
    body: "Lumber moves from our Costa Rica partner's kiln through Houston and into our Des Moines-area staging yard. Pickup or regional delivery across seven states. No freight surprises.",
  },
  {
    n: "03",
    title: "CAFTA-DR · 0% import duty.",
    body: "Costa Rica teak and Central American Cypress enter under CAFTA-DR at zero tariff (HTS 4407). That savings is in the landed price — not captured by us. It's how we move premium material at contractor-viable pricing.",
  },
  {
    n: "04",
    title: "Responsibly sourced. Documented.",
    body: "Every board comes from plantation growers — members of the Costa Rican Forestry Chamber, not clear-cut tropical. FSC-track, CITES-compliant, phyto-certified at origin. The paperwork is clean.",
  },
];

const STATS = [
  { k: "0%", v: "Import duty under CAFTA-DR" },
  { k: "3–5 wk", v: "Costa Rica to Iowa yard" },
  { k: "~$9.50", v: "Teak · wholesale per BF" },
  { k: "~$4.75", v: "Central American Cypress · wholesale per BF" },
];

const MARQUEE = [
  "5/4 × 6 KD · FAS+ · CAFTA-DR 0% duty · HTS 4407",
  "Plantation teak — $9.50 / BF wholesale · 50-year outdoor life",
  "Central American Cypress — $4.75 / BF wholesale · zero chemical treatment",
  "Des Moines staging yard · ships IA · NE · KS · MN · MO · WI · CO",
  "1,155 lbf Janka teak · 900–1,100 lbf Cupressus lusitanica",
  "3–5 weeks Costa Rica to yard · CITES-compliant · phyto-certified",
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
            A direct import desk for contractors who need
            {" "}
            <span className="italic text-[var(--color-amber)]">
              material that outperforms what the big-box stocks.
            </span>
          </>
        }
        intro={
          <>
            Between Coasts Teak & Timber Co. is a wholesale hardwood importer based
            in Waukee, Iowa. We bring kiln-dried teak and Central American Cypress from
            plantation growers in Costa Rica, land them through Houston,
            and stage them in a Des Moines-area yard for pickup or delivery
            across the Midwest and Rocky Mountain region.
            Teak at $9.50/BF. Central American Cypress at $4.75/BF. No retail markup.
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
            Teak. Central American Cypress.{" "}
            <span className="italic text-[var(--color-amber)]">
              Both outperform everything in the cedar aisle.
            </span>
          </>
        }
        intro="Teak handles the premium and marine work — decks, gates, architectural cladding. Central American Cypress runs the volume: fence line, pergola stock, siding, porch ceilings. Both arrive kiln-dried, both enter at 0% duty, both outlast cedar without treatment."
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
        eyebrow="What it builds"
        title={
          <>
            Fence. Deck. Pergola. Siding.{" "}
            <span className="italic text-[var(--color-amber)]">Everything a Midwest job asks for.</span>
          </>
        }
        intro="Eight exterior applications that close fast. Interior millwork, hospitality, and specialty work also available — ask the trade desk."
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {exteriorApps.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.05}>
              <Link
                href={`/applications#${a.slug}`}
                className="card block p-6 h-full group"
              >
                <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)]">
                  {a.category}
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
        eyebrow="Where we deliver"
        title={
          <>
            Seven states.{" "}
            <span className="italic text-[var(--color-amber)]">One lane.</span>
          </>
        }
        intro="Direct from Costa Rica through Houston to our Iowa yard, then regional freight from there. We cover Iowa, Nebraska, Kansas, Minnesota, Missouri, Wisconsin, and Colorado. Pickup at the Des Moines-area yard or we'll quote delivery to your job site."
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

      {/* Why Our Wood */}
      <Section
        tone="deep"
        eyebrow="The science"
        title={
          <>
            Why Our Wood.{" "}
            <span className="italic text-[var(--color-amber)]">
              The chemistry that makes it different.
            </span>
          </>
        }
        intro="Most lumber suppliers can tell you where the wood came from. We can tell you what's in it — and why that matters on a job site."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              label: "TECTOQUINONE",
              headline: "It's what makes teak the only wood that gets better with age outdoors.",
              body: "Tectoquinone is a naturally occurring naphthoquinone compound unique to Tectona grandis heartwood. Combined with teak's natural oil matrix, it creates a built-in moisture barrier that requires zero chemical treatment — in any climate, ever.",
              href: "/wood/teak",
              cta: "Learn the chemistry →",
            },
            {
              label: "CYPRESSINE",
              headline: "The reason a Central American Cypress closet doesn't need cedar.",
              body: "Cypressine and alpha-pinene are naturally occurring oils in Cupressus lusitanica that act as both a fungal preservative and a mild aromatic moth repellent. The scent lasts 5–10 years in a closed closet — no cedar required.",
              href: "/wood/cypress",
              cta: "Learn the science →",
            },
            {
              label: "ORIGIN",
              headline: "The only country where teak and Central American Cypress grow together on certified sustainable plantations.",
              body: "Costa Rica achieved net-zero deforestation and manages its highland plantations under SINAC oversight. Our teak is CITES-compliant. Our Central American Cypress is plantation-grown ciprés. Direct relationship — one grower, documented at origin.",
              href: "/sourcing",
              cta: "How we source →",
            },
          ].map((panel, i) => (
            <Reveal key={panel.label} delay={i * 0.08}>
              <div className="card p-7 md:p-9 h-full flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] mb-5">
                  {panel.label}
                </span>
                <h3 className="font-serif text-xl md:text-2xl leading-tight mb-4">
                  {panel.headline}
                </h3>
                <p className="text-[var(--color-bone-2)] text-pretty leading-relaxed text-sm flex-1">
                  {panel.body}
                </p>
                <Link
                  href={panel.href}
                  className="mt-6 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--color-amber)] hover:text-[var(--color-amber-2)] transition-colors"
                >
                  {panel.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
