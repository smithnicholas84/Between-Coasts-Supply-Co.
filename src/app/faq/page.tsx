"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "@/components/Section";
import CTA from "@/components/CTA";

type FAQ = { q: string; a: string };

const SECTIONS: { label: string; audience: string; items: FAQ[] }[] = [
  {
    label: "01",
    audience: "For Contractors & Trade",
    items: [
      { q: "What's the minimum order quantity?", a: "No hard minimum, but pricing tiers kick in at bundle (~250 BF) and pallet (~1,000 BF) quantities. Single-board orders aren't how we operate — if you need a sample pack, ask the trade desk." },
      { q: "Do you offer Net-30 terms?", a: "Yes, for qualified accounts. Standard trade credit application — business license, two trade references, and a D&B or personal guarantee for new relationships. Approval typically takes 48–72 hours." },
      { q: "What's the lead time from order to yard pickup?", a: "Stock items (standard dimensions, #1 Common / Select grade) are typically available within 1–2 weeks from our Des Moines-area staging yard. Custom mill specs, FEQ teak, and large-volume orders require 3–5 weeks from Costa Rica." },
      { q: "Do you deliver, or is it pickup only?", a: "Both. Pickup at our Des Moines-area yard is always available. Regional delivery across Iowa, Nebraska, Kansas, Minnesota, Missouri, Wisconsin, and Colorado — quote based on volume and destination. Get the trade desk a job address and we'll price it." },
      { q: "Can I get teak and cypress in the same shipment?", a: "Yes. We stage both species domestically. Mixed pallet orders are standard." },
      { q: "What certifications come with the lumber?", a: "All material ships with phytosanitary certificates issued at origin (Costa Rica). Teak is CITES Appendix II compliant with full chain-of-custody documentation. Our plantation growers are members of the Costa Rican Forestry Chamber. FSC-track certification available on request for eligible projects." },
      { q: "How is the lumber graded?", a: "We use our own published grade specs, aligned with NHLA standards where applicable. Teak grades: FEQ (First European Quality), Select/Better, Standard. Cypress grades: Select, #1 Common, Rustic/Pecky. Grade spec sheets available from the trade desk — we don't hide what you're buying." },
      { q: "Is teak really cost-effective for fencing? The upfront price is higher.", a: "Run the 25-year math. Cedar fencing at $3–5/LF requires 8–10 maintenance cycles over that period — adding $15–25/LF in labor and product. PT pine often needs partial replacement at year 15–20. Teak at $8–12/LF installed is untreated for its entire life. Total cost per LF over 25 years is typically within 10–20% of cedar — and the teak fence is still performing at year 50." },
      { q: "Does teak dull saw blades faster?", a: "Yes — the ~1% silica content is abrasive. Use carbide-tipped blades and expect more frequent sharpening than domestic lumber. The same silica that shortens your blade is what makes the wood impervious to abrasion in service. Budget accordingly and factor it into your install bid." },
      { q: "Do I need to pre-drill teak for fasteners?", a: "For screws, yes — especially near board ends. Teak's density (1,155 lbf Janka) means splitting risk without pilot holes. Use stainless steel or silicon bronze fasteners. Galvanized will react with teak's natural acids and leave black staining within 6–12 months. Hidden fastener systems are worth specifying on deck and fence work." },
      { q: "Can I get custom milling — specific dimensions, profiles, or T&G?", a: "Yes, at the fabricated tier. We can mill to custom widths, thicknesses, shiplap, T&G, and radius edge profiles. Minimum quantities apply for custom runs. Add 2–3 weeks for custom fabrication." },
    ],
  },
  {
    label: "02",
    audience: "For Homeowners",
    items: [
      { q: "How is teak different from cedar?", a: "Three core differences: hardness (teak at 1,155 lbf vs. cedar at 350 lbf — more than 3x denser), longevity (teak 50–80 years outdoors vs. cedar 15–25), and maintenance (teak requires zero treatment; cedar needs sealing or staining every 2–3 years). The premium price reflects a material that genuinely outperforms." },
      { q: "Does teak really not need sealing or staining?", a: "Correct. Teak's Tectoquinone compound and natural oil matrix act as a built-in moisture barrier. No sealant, stain, or preservative is needed — ever. Left untreated, teak weathers from golden amber to silver-gray over 12–18 months. The patina is reversible: light sanding and one application of teak oil restores the original color." },
      { q: "What does teak look like after 5 years outside?", a: "Untreated teak weathers to a silver-gray patina — similar to naturally aged teak decking on a wooden boat. The wood remains structurally sound; the color change is purely cosmetic. Many architects spec the silver-gray intentionally. Annual oil application keeps the golden amber." },
      { q: "What's the difference between your teak and big-box composite decking?", a: "Night and day. Composite decking uses plastic and wood fiber with a printed surface texture — it fades, scratches, and retains heat. Our teak is 100% genuine Tectona grandis heartwood — kiln-dried, plantation grown, 1,155 lbf Janka. The grain, the oil, the weathering behavior can't be replicated in composite." },
      { q: "Is cypress actually better than cedar for closets?", a: "For moth repellency and aromatic longevity, yes. Cedar's aromatic compounds fade in 3–5 years. Cypress contains alpha-pinene and cypressine, which provide moth repellency for 5–10 years. Cypress is also harder (900–1,100 lbf vs. cedar's 350 lbf) — it won't dent from hangers or shelving hardware." },
      { q: "Can I install teak or cypress as a DIY project?", a: "Teak requires carbide-tipped blades and pre-drilling for fasteners — workable for a skilled DIYer but not beginner territory. Cypress is much easier: it planes, cuts, and nails similarly to domestic softwood. For decking and fencing, always recommend a licensed contractor for fastener spec and structural attachment." },
      { q: "Is the wood sustainably sourced?", a: "Yes, with documentation. All teak and cypress comes from plantation growers in Costa Rica — not old-growth tropical forest. Costa Rica achieved net-zero deforestation. Our teak is CITES Appendix II compliant. Our cypress is managed under SINAC oversight. We can provide chain-of-custody documentation for any order." },
      { q: "How do I maintain teak over time?", a: "Option 1: Let it weather. No maintenance required — the silver-gray patina is structurally neutral. Option 2: Maintain the amber. Light sanding (80-grit) + teak oil once per year keeps the original color. Never paint or polyurethane teak — it prevents the natural oil cycle and can cause premature surface checking." },
      { q: "Where do you deliver?", a: "Iowa, Nebraska, Kansas, Minnesota, Missouri, Wisconsin, and Colorado from our Des Moines-area staging yard. Pickup is always available. Freight quotes for job-site delivery — we price by volume and distance." },
      { q: "How long does a teak deck actually last?", a: "50–80 years with zero treatment in Midwest conditions. The Royal Navy used teak decking on warships for centuries. Working teak decks on superyachts are in service 30–40 years in saltwater. Iowa winters are harsh but not sea-going harsh. The Tectoquinone and silica content that make teak marine-resistant make it bulletproof for residential use." },
    ],
  },
  {
    label: "03",
    audience: "For Architects & Designers",
    items: [
      { q: "What grade specs are available for FEQ teak?", a: "FEQ (First European Quality): 100% heartwood, minimum 5% natural oil content, tight straight grain, uniform amber color, no knots, grain deviation ≤10°. The architect-specified grade for exposed architectural cladding, entry gates, and feature millwork where visual uniformity is non-negotiable. Available by special order — lead time 3–5 weeks." },
      { q: "Can you provide documentation for LEED projects?", a: "Yes. We can provide phytosanitary certificates, CITES compliance documentation, plantation origin letters from our Costa Rican partners, and FSC-track chain-of-custody documentation for eligible projects. Coordinate with the trade desk early — documentation requests need 1–2 weeks ahead of project closeout." },
      { q: "What finishes are compatible with teak for interior millwork?", a: "Raw/natural: teak oil (Watco, Daly's) or Danish oil. Allow 48–72 hours cure between coats. For color-stable interior work: Rubio Monocoat or Bona Traffic — both bond well to teak's oil-rich surface if properly degreased with acetone first. Avoid solvent-based polyurethane on raw teak — adhesion failure is common without proper degreasing protocol." },
      { q: "Is there color consistency across a full architectural cladding project?", a: "Within FEQ grade: high consistency — uniform amber heartwood, tight grain. Expect ±15% natural variation in color intensity (this is real wood, not veneer). For large feature installations, order from a single shipment lot and acclimate on-site for 7–14 days before install." },
      { q: "What are the dimensional stability specs for interior applications?", a: "Teak: 2.5% radial, 4.0% tangential shrinkage coefficients — among the lowest of any commercial hardwood. For interior cladding in conditioned spaces, movement is minimal. Cypress: slightly higher at 3.4% radial, 6.2% tangential. Both species should be acclimated to job-site conditions for 7–14 days before installation." },
      { q: "Can cypress be specified for exterior siding in cold climates?", a: "Yes, with correct detailing. Cypress rates USDA Class 2–3 (above-grade) decay resistance — appropriate for vertical siding, rainscreen, soffit, and fascia applications. Not recommended for ground-contact. In freeze-thaw climates: proper back-priming, 1/4 inch reveal gaps at butt joints, and drainable cladding details. Same detailing requirements as western red cedar." },
      { q: "What are the knot specifications for Select and #1 Common cypress?", a: "Select: clear or near-clear — occasional tight pin knots permitted, no loose knots. #1 Common: sound, tight knots up to 1 inch diameter permitted. No loose, dead, or through knots in either grade. Rustic/Pecky grade includes natural pecky pockets — a character feature for interior feature wall applications." },
      { q: "Do you offer custom milling for specific architectural profiles?", a: "Yes. We can mill to custom widths, thicknesses, reveal depths, T&G profiles, shiplap dimensions, and radius-edge or beveled profiles. Minimum quantities apply (typically 500+ BF). Lead time adds 2–3 weeks. Submit profile drawings to the trade desk for a milling quote." },
      { q: "What's the FSC status of the material?", a: "Our plantation growers in Costa Rica are FSC-track eligible. Full FSC chain-of-custody certification available for specified project orders — requires advance coordination. Standard orders ship with CITES and phytosanitary documentation, which satisfies most sustainability narratives." },
    ],
  },
  {
    label: "04",
    audience: "Sourcing & General",
    items: [
      { q: "Where does your teak come from?", a: "Costa Rica. Plantation-grown Tectona grandis, not old-growth tropical forest. Costa Rica's volcanic soil, consistent rainfall, and responsible forestry policy produce dense, oil-rich heartwood. We work directly with one primary grower relationship — not through a commodity broker." },
      { q: "What's CAFTA-DR and why does it matter for pricing?", a: "CAFTA-DR (Dominican Republic–Central America Free Trade Agreement) eliminates import duty on Costa Rican lumber entering the US. Teak and cypress both enter at 0% tariff under HTS code 4407. That eliminates the 5–10% duty that applies to teak from other origins. We pass those savings directly to buyers." },
      { q: "Is plantation teak the same quality as old-growth teak?", a: "Close, with some nuance. Old-growth teak (80–120+ year trees) has the highest oil content and tightest grain. Costa Rica plantation teak at 20–30 years has slightly less oil content than century-old Burmese teak, but CAFTA-DR pricing, legal supply chain, and CITES compliance make it the right choice for commercial projects. At FEQ grade, the performance difference is negligible outside superyacht construction." },
      { q: "Is the wood legal to import? What about CITES?", a: "Fully legal. Tectona grandis is on CITES Appendix II, which requires documentation but does not prohibit trade. We maintain full CITES compliance with export permits from Costa Rica, phytosanitary certificates, and USDA/APHIS import compliance. Lacey Act declarations filed on all shipments." },
      { q: "How do I know what species of cypress I'm getting?", a: "Our cypress is Cupressus lusitanica — the ciprés grown at 1,500–2,500m elevation in Costa Rica's central highlands. Not Taxodium distichum (Louisiana bald cypress), not Chamaecyparis (Port Orford cedar), not Thuja plicata (marketed as western red cedar). Cupressus lusitanica has the cypressine sesquiterpene oil profile that delivers the moth-repellent aromatic benefit." },
      { q: "How long does import transit take?", a: "From our Costa Rica partner's kiln to our Des Moines-area staging yard: approximately 3–5 weeks. Includes mill time, export documentation, ocean freight (Houston), USDA inspection, and overland transit to Iowa. We maintain staging inventory for standard dimensions — call for current stock before committing to a project timeline." },
      { q: "What moisture content does the lumber arrive at?", a: "Kiln-dried to 10–14% MC at origin before shipment. Ocean transit in a sealed container holds MC reasonably well. Acclimate all material to job-site conditions for 7–14 days regardless of species — standard practice for any kiln-dried hardwood." },
      { q: "Do you work with other importers or just direct from Costa Rica?", a: "Direct from Costa Rica through our established grower relationship. We don't buy from US-based lumber brokers or secondary importers. Direct sourcing means we control documentation, grade verification, and moisture content at origin." },
    ],
  },
];

function AccordionItem({ faq, idx }: { faq: FAQ; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full text-left py-5 flex items-start justify-between gap-6 group"
      >
        <span className="font-serif text-[var(--color-bone)] text-lg leading-snug text-pretty flex-1">
          {faq.q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 mt-1 text-[var(--color-amber)] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="pb-6 pr-8">
          <p className="text-[var(--color-bone-2)] leading-relaxed text-pretty">{faq.a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="relative pt-32 md:pt-40 pb-0 overflow-hidden">
        <div className="absolute inset-0 gradient-radial-amber opacity-30 pointer-events-none" />
        <div className="container-x relative">
          <p className="eyebrow mb-5">Knowledge Base</p>
          <h1 className="font-serif text-[clamp(2.5rem,7vw,6rem)] leading-[1.02] tracking-[-0.02em] text-balance">
            Frequently asked questions.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-[var(--color-bone-2)] max-w-3xl text-pretty leading-relaxed">
            Material science, sourcing, logistics, and installation — answered straight. No marketing copy.
          </p>
          <div className="mt-10 divider-amber" />
        </div>
      </section>

      {SECTIONS.map((s) => (
        <Section key={s.label} eyebrow={s.label} title={s.audience}>
          <div className="max-w-3xl">
            {s.items.map((faq, i) => (
              <AccordionItem key={i} faq={faq} idx={i} />
            ))}
          </div>
        </Section>
      ))}

      <CTA />
    </>
  );
}
