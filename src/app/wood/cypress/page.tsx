import Link from "next/link";
import type { Metadata } from "next";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Central American Cypress — Chemistry, Aroma & Grades | Between Coasts Teak & Timber Co.",
  description:
    "Everything about Cupressus lusitanica from Costa Rica: cypressine chemistry, alpha-pinene aromatic profile, species identification, grade specs, and applications for closets, fencing, and exterior cladding.",
};

const CHEMISTRY = [
  {
    compound: "Cypressine",
    type: "Sesquiterpene",
    headline: "The natural fungal preservative.",
    body: "Cypressine is a sesquiterpene oil compound produced in the heartwood and sapwood of Cupressus lusitanica. It acts as a natural fungicidal agent — providing above-grade decay resistance without chemical treatment. USDA rates Cupressus lusitanica at Class 2–3 decay resistance, equivalent to western red cedar for above-grade applications. The cypressine concentration is highest in heartwood and increases with tree age and elevation of origin.",
  },
  {
    compound: "Alpha-Pinene",
    type: "Monoterpene · 25–40% of oil fraction",
    headline: "The aromatic compound that repels moths.",
    body: "Alpha-pinene is the dominant monoterpene in Cupressus lusitanica essential oil, comprising 25–40% of the volatile fraction. It is the same compound responsible for the characteristic piney-cedar aroma and the moth-repellent properties that make Central American Cypress closets effective. In a sealed closet environment, alpha-pinene maintains effective concentration for 5–10 years — significantly longer than aromatic red cedar (cedrol-dominant, 3–5 years) before the surface oils exhaust.",
  },
  {
    compound: "Cedrol + Limonene",
    type: "Sesquiterpene + Monoterpene",
    headline: "What creates the cedar-like scent profile.",
    body: "Cedrol (sesquiterpene) and limonene (monoterpene) round out the aromatic compound profile in Cupressus lusitanica. Cedrol contributes the warm cedar-like base note; limonene adds the fresh citrus top note. Combined with alpha-pinene, the result is an aromatic profile that is cedar-adjacent but chemically distinct — and longer-lasting in closet applications than Thuja plicata or Juniperus virginiana.",
  },
];

const SPECIES_ID = [
  {
    species: "Cupressus lusitanica",
    common: "Costa Rica ciprés / Mexican cypress",
    origin: "Costa Rican highlands, 1,500–2,500m",
    aroma: "Cedar-pine; alpha-pinene dominant",
    hardness: "~900–1,100 lbf",
    applications: "Closets, exterior siding, fencing, pergola",
    notes: "Our species. SINAC-managed plantations.",
    highlight: true,
  },
  {
    species: "Taxodium distichum",
    common: "Bald cypress / Louisiana cypress",
    origin: "SE United States swamp & river lowlands",
    aroma: "Mild; low aromatic oil content",
    hardness: "510 lbf",
    applications: "Marine, exterior trim, structural",
    notes: "Swamp species. Different genus entirely.",
    highlight: false,
  },
  {
    species: "Thuja plicata",
    common: "Western red cedar",
    origin: "Pacific Northwest, Canada",
    aroma: "Spicy cedar; thujopsene dominant",
    hardness: "350 lbf",
    applications: "Siding, shingles, closets, decking",
    notes: "Industry standard. Softer, shorter aroma life.",
    highlight: false,
  },
  {
    species: "Juniperus virginiana",
    common: "Eastern red cedar / aromatic cedar",
    origin: "Eastern US hardwood zones",
    aroma: "Sharp cedar; cedrol dominant, 3–5 yr life",
    hardness: "900 lbf",
    applications: "Closet lining, fence posts",
    notes: "Common closet lining. Shorter aroma window.",
    highlight: false,
  },
];

const GRADES = [
  {
    name: "Select",
    badge: "Interior / Architectural",
    description:
      "Clear or near-clear Central American Cypress with uniform honey-to-amber color. Occasional tight pin knots permitted. No loose knots. Best for exposed interior cladding, closet panels, shiplap feature walls, and anywhere a clean, consistent surface is specified.",
    applications: ["Closet & wardrobe paneling", "Interior shiplap", "Architectural siding", "Soffit & fascia"],
  },
  {
    name: "#1 Common",
    badge: "Trade / Volume",
    description:
      "Minor character marks and sound, tight knots up to 1 inch diameter permitted. The volume grade for exterior fencing, pergola framing, siding, and landscape applications. Consistent performance at contractor-viable pricing.",
    applications: ["Horizontal privacy fencing", "Pergola & trellis framing", "Exterior siding", "Landscape structures"],
  },
  {
    name: "Rustic / Pecky",
    badge: "Character / Feature",
    description:
      "Character-grade with natural texture variation including occasional pecky pockets — voids created by fungal activity during the tree's growth cycle. A premium interior design grade for feature walls and rustic-modern applications where natural texture is the specification.",
    applications: ["Interior feature walls", "Bar & hospitality cladding", "Rustic-modern design", "Accent panels"],
  },
];

const SPECS = [
  { label: "Species", value: "Cupressus lusitanica" },
  { label: "Common Name", value: "Costa Rica ciprés / Mexican cypress" },
  { label: "Origin", value: "Costa Rica highlands, 1,500–2,500m elevation" },
  { label: "Janka Hardness", value: "~900–1,100 lbf" },
  { label: "Density (air-dry)", value: "28–34 lbs/ft³" },
  { label: "Radial Shrinkage", value: "3.4%" },
  { label: "Tangential Shrinkage", value: "6.2%" },
  { label: "Alpha-Pinene Content", value: "25–40% of oil fraction" },
  { label: "Aroma Duration (closet)", value: "5–10 years" },
  { label: "Moisture Content (kiln-dried)", value: "10–14% MC" },
  { label: "Decay Resistance Class", value: "USDA Class 2–3 (above-grade)" },
  { label: "Import Duty (CAFTA-DR)", value: "0% — HTS 4407" },
];

export default function CypressPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-40 pointer-events-none" />
        <div className="container-x relative">
          <Link
            href="/products/cypress"
            className="font-mono text-[10px] tracking-[0.28em] uppercase text-[var(--color-fog)] hover:text-[var(--color-amber)] transition-colors"
          >
            ← Product Page
          </Link>
          <p className="eyebrow mt-5 mb-5">Species 02 · The Science</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            Why Central American Cypress Works.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            Cupressus lusitanica from Costa Rica's highlands: cypressine fungal resistance, alpha-pinene moth
            repellency, and an aromatic profile that outperforms cedar in closet applications. Here's the
            science.
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
                <h3 className="font-serif text-2xl mb-4">{c.compound}</h3>
                <p className="font-serif text-lg italic text-[var(--color-bone)] mb-3">{c.headline}</p>
                <p className="text-[var(--color-bone-2)] text-sm text-pretty leading-relaxed flex-1">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Species ID */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">Species Identification</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-4">
            Not all cypress is the same wood.
          </h2>
          <p className="text-[var(--color-bone-2)] mb-10 max-w-2xl leading-relaxed">
            Four species are commonly sold as "cypress" or "cedar" in the US lumber market. They have
            different genera, chemistry, performance profiles, and aromatic longevity.
          </p>
          <div className="overflow-x-auto -mx-4 md:mx-0">
            <table className="w-full min-w-[800px] text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  {["Species", "Common Name", "Origin", "Aroma", "Hardness", "Best Use", "Notes"].map((h) => (
                    <th
                      key={h}
                      className="font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--color-fog)] pb-4 pr-5"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPECIES_ID.map((row, i) => (
                  <tr
                    key={row.species}
                    className={`border-b border-white/5 ${i % 2 === 0 ? "bg-white/[0.02]" : ""}`}
                  >
                    <td className={`py-4 pr-5 text-sm font-medium italic ${row.highlight ? "text-[var(--color-amber)]" : "text-[var(--color-bone-2)]"}`}>
                      {row.species}
                    </td>
                    <td className="py-4 pr-5 text-sm text-[var(--color-bone-2)]">{row.common}</td>
                    <td className="py-4 pr-5 text-sm text-[var(--color-bone-2)]">{row.origin}</td>
                    <td className="py-4 pr-5 text-sm text-[var(--color-bone-2)]">{row.aroma}</td>
                    <td className="py-4 pr-5 text-sm text-[var(--color-bone-2)]">{row.hardness}</td>
                    <td className="py-4 pr-5 text-sm text-[var(--color-bone-2)]">{row.applications}</td>
                    <td className={`py-4 text-sm ${row.highlight ? "text-[var(--color-amber)]" : "text-[var(--color-fog)]"}`}>
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Application Guide */}
      <Section eyebrow="Application Guide" title="Where Central American Cypress excels. Where it doesn't.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-amber)] mb-5">
              Best Applications
            </h4>
            {[
              {
                t: "Closet & wardrobe paneling",
                b: "Alpha-pinene and cypressine provide 5–10 years of active moth repellency in a sealed closet. Harder surface than cedar means shelving hardware won't compress the wood.",
              },
              {
                t: "Horizontal privacy fencing",
                b: "Above-grade decay resistance with zero chemical treatment. Central American Cypress fence boards perform comparably to cedar at similar pricing — with better hardness and smoother finish.",
              },
              {
                t: "Pergola & trellis framing",
                b: "Structural framing stock at 2×4 and 2×6 dimensions handles the load requirements of pergola construction. Above-grade decay resistance is appropriate for this application.",
              },
              {
                t: "Interior shiplap & accent walls",
                b: "Excellent workability — planes, sands, and finishes cleanly. Takes oil and stain evenly with minimal blotching. Natural grain variation reads as character, not defect.",
              },
              {
                t: "Exterior siding & rainscreen",
                b: "With correct back-priming and drainable details, Central American Cypress is appropriate for vertical siding and rainscreen applications in Midwest climate zones.",
              },
            ].map((item) => (
              <div key={item.t} className="mb-5 border-l-2 border-[var(--color-amber)]/40 pl-5">
                <p className="font-medium text-[var(--color-bone)] mb-1">{item.t}</p>
                <p className="text-sm text-[var(--color-bone-2)] leading-relaxed">{item.b}</p>
              </div>
            ))}
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-fog)] mb-5">
              Not Recommended
            </h4>
            {[
              {
                t: "Ground contact",
                b: "Central American Cypress is rated above-grade. For ground contact or in-ground posts, specify pressure-treated pine (UC4A/UC4B) or teak. In ground contact it will fail within 5–10 years.",
              },
              {
                t: "Marine / below-waterline",
                b: "Cupressus lusitanica is not a marine-grade timber. For dock decking, boat trim, or wet immersion applications, specify teak or ipe.",
              },
              {
                t: "Structural framing (interior load-bearing)",
                b: "Central American Cypress framing stock is appropriate for landscape structures and pergolas. It is not engineered or code-approved as interior structural framing — use dimensional SPF or LVL.",
              },
            ].map((item) => (
              <div key={item.t} className="mb-5 border-l-2 border-white/15 pl-5">
                <p className="font-medium text-[var(--color-bone)] mb-1">{item.t}</p>
                <p className="text-sm text-[var(--color-bone-2)] leading-relaxed">{item.b}</p>
              </div>
            ))}
            <div className="card p-6 mt-6">
              <h5 className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--color-amber)] mb-3">
                Finishing Tips
              </h5>
              <ul className="space-y-2 text-sm text-[var(--color-bone-2)]">
                <li>— For closet panels: leave raw or apply a light coat of linseed oil. Do not seal — you want the oils to breathe.</li>
                <li>— For exterior: back-prime all four sides before install. Use penetrating stain rather than film-forming paint.</li>
                <li>— For stain work: apply pre-conditioner first to minimize blotching on end grain.</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Heritage */}
      <section className="relative border-y border-white/5 bg-[var(--color-midnight-2)]">
        <div className="container-x py-16 md:py-24 max-w-3xl">
          <p className="eyebrow mb-4">Costa Rica Origin</p>
          <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-8">
            Highland-grown. SINAC-managed. One grower relationship.
          </h2>
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
            Cupressus lusitanica — introduced to Costa Rica from Mexico in the colonial period — has
            naturalized into Costa Rica's volcanic highland ecology and is now grown as a managed plantation
            species under SINAC (Sistema Nacional de Áreas de Conservación) oversight. Our Central American Cypress comes from
            plantations at 1,500–2,500m elevation in the central highlands, where cool nights and altitude
            produce denser wood and higher aromatic oil content than lowland-grown material.
          </p>
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty mb-5">
            Costa Rica achieved net-zero deforestation status — the first tropical nation to do so. All
            plantation timber operates under a framework that requires replanting at minimum 1:1 ratios. Our
            Central American Cypress documentation includes plantation origin, SINAC management records, and phytosanitary
            certification at export. We can provide the paperwork for any order.
          </p>
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty">
            Under CAFTA-DR, Cupressus lusitanica enters the US at 0% import duty (HTS 4407). That's the same
            tariff treatment as our teak — and it's built into the landed price, not a discount we apply
            selectively.
          </p>
        </div>
      </section>

      {/* Grade Guide */}
      <section className="container-x py-16 md:py-24">
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
      </section>

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
      <Section eyebrow="Next Step" title="Ready to specify Central American Cypress?">
        <div className="flex flex-wrap gap-4">
          <Link href="/products/cypress" className="btn-primary">
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
