import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Plantation Teak — Chemistry, Performance & Grades | Between Coasts Teak & Timber Co.",
  description:
    "Everything about Tectona grandis plantation teak: Tectoquinone chemistry, natural oil matrix, silica content, Janka hardness, grade specs, and why it outlasts cedar by decades without treatment.",
};

const CHEMISTRY = [
  {
    compound: "Tectoquinone",
    formula: "C₁₆H₁₂O₂",
    type: "Naphthoquinone",
    headline: "The built-in preservative.",
    body: "Tectoquinone is a naturally occurring naphthoquinone compound found exclusively in the heartwood of Tectona grandis. It acts as a systemic biocide against fungal decay and termite activity — functioning as a built-in wood preservative that requires no external application. Combined with teak's natural oil matrix (tectol and lapachol), it creates a moisture barrier that is active for the lifetime of the wood. This is not a surface treatment. It's in every cell of the heartwood.",
  },
  {
    compound: "Natural Oil Matrix",
    formula: "Tectol + Lapachol",
    type: "Naphthoquinone derivatives",
    headline: "What makes teak self-lubricating.",
    body: "The natural oil matrix — primarily tectol and lapachol — gives teak its characteristic waxy feel and low-friction surface. These oils saturate the cellular structure, creating a hydrophobic barrier that repels water at the molecular level. This is why teak decking doesn't need sealing: the wood is already sealed from within. The same oil matrix is responsible for teak's exceptional dimensional stability — the oils buffer moisture exchange between the wood and atmosphere.",
  },
  {
    compound: "Silica",
    formula: "SiO₂ · ~1% by weight",
    type: "Crystalline mineral",
    headline: "The grain hardener. The blade killer.",
    body: "Teak contains approximately 1% silica (SiO₂) — a crystalline mineral embedded in the wood grain. This silica content contributes to teak's exceptional abrasion resistance: the same property that dulls saw blades faster than domestic hardwoods is what makes a teak fence post impervious to abrasion from soil, sand, and weather. At 1,155 lbf Janka, teak is harder than black walnut (1,010 lbf) and significantly harder than cedar (350 lbf) or pressure-treated pine (870 lbf).",
  },
];

const GRADES = [
  {
    name: "FEQ — First European Quality",
    badge: "Architect Specified",
    description:
      "100% heartwood. Minimum 5% natural oil content. Tight, straight grain with deviation ≤10°. Uniform amber color. Zero knots. This is the grade specified by architects for exposed cladding, entry gates, and feature millwork where visual uniformity is non-negotiable. FEQ is a distinct purchasing specification — not a marketing term.",
    applications: ["Exposed architectural cladding", "Entry gates & feature panels", "Marine trim & sole boards", "Sauna interiors"],
  },
  {
    name: "Select / Better",
    badge: "Trade Standard",
    description:
      "Predominantly heartwood. Small, sound knots permitted. Best price-to-performance ratio for trade applications. Consistent structural and aesthetic performance for exterior cladding, premium decking, and horizontal fencing.",
    applications: ["Premium decking", "Exterior cladding", "Horizontal fencing", "Pergola trim"],
  },
  {
    name: "Standard",
    badge: "Volume / Landscape",
    description:
      "Character-grade with natural color variation and occasional knots. Best for volume fencing, landscaping, and applications where the install will be stained, oiled, or where character marks are acceptable.",
    applications: ["Volume fencing", "Landscaping structures", "Stained/oiled applications", "Secondary cladding"],
  },
];

const SPECS = [
  { label: "Species", value: "Tectona grandis" },
  { label: "Origin", value: "Costa Rica — plantation grown" },
  { label: "Janka Hardness", value: "1,155 lbf" },
  { label: "Density (air-dry)", value: "38–43 lbs/ft³" },
  { label: "Modulus of Rupture", value: "15,000 psi" },
  { label: "Radial Shrinkage", value: "2.5%" },
  { label: "Tangential Shrinkage", value: "4.0%" },
  { label: "Silica Content", value: "~1% by weight" },
  { label: "Natural Oil Content (FEQ)", value: "≥5%" },
  { label: "Moisture Content (kiln-dried)", value: "10–14% MC" },
  { label: "Decay Resistance Class", value: "Class 1 — Highly Resistant (EN 350)" },
  { label: "Import Duty (CAFTA-DR)", value: "0% — HTS 4407" },
];

export default function TeakPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <Link
            href="/products/teak"
            className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog)] hover:text-[var(--color-amber)] transition-colors"
          >
            ← Product Page
          </Link>
          <p className="eyebrow mt-5 mb-5">Species 01 · The Science</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            Why Plantation Teak Works.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            Tectoquinone. Natural oil matrix. 1% silica. This isn't a wood that needs help from a chemical
            treatment — it is the treatment. Here's the chemistry behind 50–80 years of zero-maintenance
            outdoor performance.
          </p>
          <div className="mt-10 divider-amber" />
        </div>
      </section>

      {/* Chemistry */}
      <Section eyebrow="The Chemistry" title="What's actually in the wood.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CHEMISTRY.map((c, i) => (
            <Reveal key={c.compound} delay={i * 0.08}>
              <div className="card p-7 md:p-9 h-full flex flex-col">
                <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] mb-1">
                  {c.type}
                </span>
                <div className="flex items-baseline gap-3 mb-4">
                  <h3 className="font-serif text-2xl">{c.compound}</h3>
                  <span className="font-mono text-xs text-[var(--color-fog)]">{c.formula}</span>
                </div>
                <p className="font-serif text-lg italic text-[var(--color-bone)] mb-3">{c.headline}</p>
                <p className="text-[var(--color-bone-2)] text-sm text-pretty leading-relaxed flex-1">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Plantation origin */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">Plantation Science</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8 max-w-2xl">
            Why Costa Rica plantation teak performs like old-growth.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
            <div>
              <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
                Old-growth teak from Burma and Indonesia — the material that built Royal Navy warships — comes
                from trees 80–120+ years old. Costa Rica plantation teak is harvested at 20–30 years. The
                question contractors and architects always ask: does that matter?
              </p>
              <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
                For structural and exterior applications: no meaningful difference. The Tectoquinone content,
                silica density, and oil matrix that determine performance are established in the heartwood
                during growth — not accumulated exclusively over centuries. FEQ-grade Costa Rica plantation
                teak meets or exceeds the Tectoquinone thresholds established by the International Teak
                Association.
              </p>
              <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty">
                Where old-growth has a documented edge: oil content consistency at the very highest end of FEQ
                spec, and ring-tight grain on the largest dimensional stock. For superyacht sole boards and
                museum-grade joinery, the difference matters. For architectural cladding, fencing, decking, and
                millwork — plantation FEQ is the right material at a viable price.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-amber)] mb-5">
                Why Costa Rica specifically
              </h4>
              {[
                {
                  n: "01",
                  t: "Volcanic soil",
                  b: "Costa Rica's Pacific-facing highlands sit on mineral-rich volcanic substrate that drives dense grain and high oil content in plantation trees.",
                },
                {
                  n: "02",
                  t: "Elevation and climate",
                  b: "Teak grown at 200–800m elevation in Costa Rica's two-season climate develops tighter growth rings than equatorial lowland plantation material.",
                },
                {
                  n: "03",
                  t: "CAFTA-DR 0% duty",
                  b: "Costa Rica teak enters the US under CAFTA-DR at zero tariff — passing savings directly to landed pricing. Southeast Asian and African teak carries 5–10% duty.",
                },
                {
                  n: "04",
                  t: "Legal supply chain",
                  b: "CITES Appendix II compliant, phytosanitary certified, Lacey Act declaration filed at entry. No gray market, no documentation gaps.",
                },
              ].map((item) => (
                <div key={item.n} className="flex gap-4 mb-6">
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)] pt-1 shrink-0">
                    {item.n}
                  </span>
                  <div>
                    <p className="font-medium text-[var(--color-bone)] mb-1">{item.t}</p>
                    <p className="text-sm text-[var(--color-bone-2)] leading-relaxed">{item.b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Aging / Patina */}
      <Section eyebrow="Color & Weathering" title="Amber to silver — and back. Both are correct.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div className="card p-7">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] mb-4 block">
              Fresh Install
            </span>
            <h4 className="font-serif text-xl mb-3">Golden amber.</h4>
            <p className="text-[var(--color-bone-2)] text-sm leading-relaxed text-pretty">
              New kiln-dried teak shows warm golden-amber heartwood. The natural oils are at maximum
              concentration. Grain is tight and the surface has a slight waxy sheen from teak's oil matrix. No
              finish or sealer needed — or recommended.
            </p>
          </div>
          <div className="card p-7">
            <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog)] mb-4 block">
              12–18 Months Outdoors
            </span>
            <h4 className="font-serif text-xl mb-3">Silver-gray patina.</h4>
            <p className="text-[var(--color-bone-2)] text-sm leading-relaxed text-pretty">
              UV exposure oxidizes the surface oils, producing a uniform silver-gray patina. This is a cosmetic
              change only — the Tectoquinone and structural integrity of the wood are unaffected. Many
              architects specify the silver-gray intentionally. It reads as intentional, not neglected.
            </p>
          </div>
        </div>
        <div className="mt-6 card p-7 max-w-4xl">
          <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-amber)] mb-4 block">
            Restoring the Amber
          </span>
          <p className="text-[var(--color-bone-2)] text-sm leading-relaxed text-pretty max-w-2xl">
            The silver patina is fully reversible. Light sanding with 80-grit followed by one application of
            teak oil (Watco or equivalent) restores the original amber. Annual maintenance preserves the color
            indefinitely. Never use polyurethane or film-forming sealers on exterior teak — they prevent the
            natural oil cycle and cause peeling and surface checking within 2–3 seasons.
          </p>
        </div>
      </Section>

      {/* Grade Guide */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">Grade Guide</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
            Know what grade you're specifying.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {GRADES.map((g, i) => (
              <Reveal key={g.name} delay={i * 0.06}>
                <div className="card p-7 h-full flex flex-col">
                  <span className="font-mono text-[10px] tracking-[0.24em] uppercase text-[var(--color-amber)] mb-3">
                    {g.badge}
                  </span>
                  <h3 className="font-serif text-xl mb-4 leading-tight">{g.name}</h3>
                  <p className="text-[var(--color-bone-2)] text-sm leading-relaxed text-pretty mb-5 flex-1">
                    {g.description}
                  </p>
                  <ul className="space-y-1">
                    {g.applications.map((a) => (
                      <li key={a} className="font-mono text-[10px] tracking-[0.18em] uppercase text-[var(--color-fog)]">
                        — {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 2000 Year Track Record */}
      <Section eyebrow="Track Record" title="2,000 years of documented performance.">
        <div className="max-w-3xl">
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
            Teak is the only wood with a 2,000-year documented performance record in the harshest conditions
            on earth. The Mughal fleet. The Royal Navy. The Dutch East India Company. Every significant
            maritime power that needed durable, low-maintenance ship decking specified Tectona grandis — not
            because it was available, but because nothing else performed comparably.
          </p>
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
            Modern superyacht builders continue to specify teak sole boards and deck planking not out of
            tradition but because no synthetic or composite material has matched its combination of hardness,
            slip resistance when wet, dimensional stability, and natural aesthetic. Working teak decks on
            vessels built in the 1980s are still in service today.
          </p>
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty">
            For context: an Iowa teak fence faces freeze-thaw cycles, UV exposure, precipitation, and soil
            contact at the posts. A Royal Navy teak deck faced saltwater immersion, tropical sun, iron cannon
            fittings, and centuries of use. The Midwest is not a difficult environment for Tectona grandis.
            It's an easy one.
          </p>
        </div>
      </Section>

      {/* Specs Table */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">Technical Specs</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">Full specification sheet.</h2>
          <div className="overflow-x-auto -mx-4 md:mx-0 max-w-2xl">
            <table className="w-full text-left border-collapse">
              <tbody>
                {SPECS.map((s, i) => (
                  <tr
                    key={s.label}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className="py-4 pr-8 font-mono text-[11px] tracking-[0.1em] uppercase text-[var(--color-fog)] w-[220px]">
                      {s.label}
                    </td>
                    <td className="py-4 text-[var(--color-bone)] font-medium text-sm">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <Section eyebrow="Next Step" title="Ready to specify teak?">
        <div className="flex flex-wrap gap-4">
          <Link href="/products/teak" className="btn-primary">
            View pricing &amp; grades
          </Link>
          <Link href="/contact" className="btn-ghost">
            Request a trade quote
          </Link>
          <Link href="/applications" className="btn-ghost">
            See applications
          </Link>
        </div>
      </Section>

      <CTA />
    </>
  );
}
