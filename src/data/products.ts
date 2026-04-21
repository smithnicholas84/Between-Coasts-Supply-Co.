// ─────────────────────────────────────────────────────────────────────────────
// IMAGE NOTES
// Hero and gallery URLs below are curated Unsplash placeholders.
// REPLACE with owned/licensed photography before launch.
// Each image object includes a `visualBrief` field describing exactly what
// the replacement photo must show. See audit doc for full sourcing guide.
// ─────────────────────────────────────────────────────────────────────────────

export type ProductImage = {
  url: string;
  alt: string;
  /** Exact visual brief for photography sourcing / art direction */
  visualBrief: string;
};

export type ComparisonRow = {
  category: string;
  teak?: string;
  cypress?: string;
  cedar: string;
  ptPine: string;
};

export type Product = {
  slug: "teak" | "cypress";
  name: string;
  tagline: string;
  blurb: string;
  wholesaleBF: number;
  fabricatedBF: number;
  landedBF: number;
  grossMargin: string;
  strengths: string[];
  applications: string[];
  grades: { name: string; description: string }[];
  sizes: string[];
  finishes: string[];
  heroImage: ProductImage;
  galleryImages: ProductImage[];
  comparison: ComparisonRow[];
};

export const PRODUCTS: Record<"teak" | "cypress", Product> = {
  teak: {
    slug: "teak",
    name: "Plantation Teak",
    tagline: "1,155 lbf Janka. Built-in Tectoquinone. Zero treatment required. Ever.",
    blurb:
      "Kiln-dried plantation teak powered by Tectoquinone — a naturally occurring naphthoquinone compound that acts as a built-in preservative against rot, insects, and moisture. At 1,155 lbf Janka hardness with ~1% silica content and a natural oil matrix, this wood requires zero chemical treatment and will perform for 50–80 years in Midwest conditions. Imported direct from Costa Rica at 0% duty.",
    wholesaleBF: 9.5,
    fabricatedBF: 14.25,
    landedBF: 5.73,
    grossMargin: "~40%",
    strengths: [
      "Tectoquinone compound + natural oil matrix: a built-in moisture barrier that requires zero chemical treatment in any climate",
      "Shrinkage coefficients of 2.5% radial / 4.0% tangential — among the lowest of any commercial hardwood. No gapping, no warping, no seasonal movement",
      "Silica content (~1%) hardens grain against abrasion and weathering. The same silica that dulls saw blades is what makes the fence outlast the house",
      "1,155 lbf Janka — harder than black walnut (1,010 lbf), comparable to English oak. Denting resistance that cedar (350 lbf) and pine (870 lbf) simply don't have",
      "2,000+ years of marine use: Royal Navy, Mughal fleet, modern superyachts. What survives saltwater survives Iowa winters",
      "FEQ = 100% heartwood, minimum 5% oil content. Know what grade you're buying and why it matters",
    ],
    applications: [
      "Deck & dock boards",
      "Horizontal fencing (premium tier)",
      "Gate & entry panels",
      "Marine trim & cockpit sole",
      "Sauna & spa interiors",
      "Accent walls & statement millwork",
    ],
    grades: [
      {
        name: "FEQ — First European Quality",
        description:
          "100% heartwood, tight straight grain, uniform amber color, highest oil content. Architect-specified for gates, entry features, and exposed architectural cladding where uniformity is non-negotiable.",
      },
      {
        name: "Select / Better",
        description:
          "Predominantly heartwood, small sound knots permitted. Best price-to-performance ratio for the trade — ideal for exterior cladding, premium decking, and horizontal fencing.",
      },
      {
        name: "Standard",
        description:
          "Character-grade with natural color variation and occasional knots. Best for volume fencing, landscaping, and applications where the install will be stained or oiled.",
      },
    ],
    sizes: [
      "4/4 × 4″, 6″, 8″, 10″ widths",
      "5/4 decking profiles (square-edge; T&G on request)",
      "8/4 post and beam stock",
      "Custom mill-to-spec available",
    ],
    finishes: [
      "Kiln-dried raw",
      "S4S surfaced four sides",
      "T&G and shiplap profiles (fabricated tier)",
    ],

    // ── HERO IMAGE ────────────────────────────────────────────────────────────
    heroImage: {
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=90",
      alt: "Modern home with horizontal teak exterior cladding and matching deck",
      visualBrief:
        "REPLACE: Full-bleed photo of a modern residential or commercial build featuring horizontal teak cladding or decking. Warm amber wood tones. No people. No lifestyle staging. Clean architectural photography. Shot from a slight angle showing depth and texture of the boards.",
    },

    // ── GALLERY IMAGES ────────────────────────────────────────────────────────
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=85",
        alt: "Teak horizontal fence panels with tight grain detail",
        visualBrief:
          "REPLACE: Close-up of teak fence boards showing tight grain, amber heartwood color, and consistent texture. Natural light. No stain or finish — raw kiln-dried appearance.",
      },
      {
        url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?auto=format&fit=crop&w=1200&q=85",
        alt: "Teak deck boards on a modern residential deck",
        visualBrief:
          "REPLACE: Looking down a teak deck from eye level — boards running horizontally, showing the natural grain pattern. Warm afternoon light. Clean modern railing.",
      },
      {
        url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85",
        alt: "Teak sauna interior with natural wood benches",
        visualBrief:
          "REPLACE: Interior of a teak sauna or steam room. Warm amber tones, soft steam light. Shows the smooth, splinter-free surface quality of teak in high-heat applications.",
      },
    ],

    // ── COMPARISON TABLE ──────────────────────────────────────────────────────
    comparison: [
      {
        category: "Outdoor Lifespan",
        teak: "50–80+ years",
        cedar: "15–25 years",
        ptPine: "15–20 years",
      },
      {
        category: "Treatment Required",
        teak: "None — ever",
        cedar: "Seal or stain every 2–3 years",
        ptPine: "Seal annually; re-treat every 3–5 years",
      },
      {
        category: "Janka Hardness",
        teak: "1,155 lbf",
        cedar: "350 lbf",
        ptPine: "870 lbf",
      },
      {
        category: "Rot Resistance",
        teak: "Class 1 — Highly Resistant",
        cedar: "Class 2 — Resistant",
        ptPine: "Chemically treated only",
      },
      {
        category: "Dimensional Stability",
        teak: "Excellent — 2.5% / 4.0% shrinkage",
        cedar: "Moderate — 2.4% / 5.0% shrinkage",
        ptPine: "Poor — 4.0% / 7.4% shrinkage",
      },
      {
        category: "25-Year Cost / LF",
        teak: "~$18–22 (material only, no maintenance)",
        cedar: "~$24–32 (material + 8–10 maintenance cycles)",
        ptPine: "~$16–22 (material + replacement likely at yr 15–20)",
      },
      {
        category: "Aging / Patina",
        teak: "Golden amber → silver-gray (reversible with oil)",
        cedar: "Tan → gray, then surface checking and splitting",
        ptPine: "Green cast fades; checking and warping in 3–5 yrs",
      },
      {
        category: "FSC Certifiable",
        teak: "Yes — plantation grown",
        cedar: "Yes — domestic harvest",
        ptPine: "Limited — SFI common, not FSC",
      },
    ],
  },

  cypress: {
    slug: "cypress",
    name: "Central American Cypress",
    tagline: "Cypressine oil. Cedar-like aroma. Built for the closet — not the chemical shelf.",
    blurb:
      "Kiln-dried Cupressus lusitanica — the ciprés of Costa Rica's highlands, grown at 1,500–2,500m elevation where cool nights produce dense, aromatic timber. Natural cypressine oils provide fungal resistance and the scent that makes a cypress closet an upgrade over cedar. Above-grade decay resistance for exterior use. Lighter, softer, and faster to install than teak, at roughly half the landed cost.",
    wholesaleBF: 4.75,
    fabricatedBF: 7.75,
    landedBF: 3.22,
    grossMargin: "~32%",
    strengths: [
      "Cypressine (sesquiterpene oil) acts as a natural fungal preservative — above-grade decay resistance without chemical treatment",
      "Alpha-pinene and cedrol create the cedar-like aromatic profile that repels moths and lasts 5–10 years in closet applications",
      "Janka ~900–1,100 lbf — harder than aromatic red cedar (350 lbf), smoother finish, more dent-resistant on interior panels",
      "Exceptional workability: planes, sands, and finishes cleanly. Takes oil and stain finishes evenly with minimal blotching",
      "Costa Rica highland origin: grown at altitude under SINAC forest management — legitimate sustainability story with documentation",
      "Natural color range from pale honey to golden amber heartwood — present variation as a feature of real material, not a defect",
    ],
    applications: [
      "Horizontal privacy fencing (volume)",
      "Closet & wardrobe paneling",
      "Pergola & trellis framing",
      "Exterior siding & rainscreen",
      "Soffit, fascia & porch ceilings",
      "Interior shiplap & accent walls",
    ],
    grades: [
      {
        name: "Select",
        description:
          "Clear cypress with uniform honey-to-amber color. Minimal character marks. Best for exposed interior cladding, closet panels, and anywhere a clean, consistent surface is specified.",
      },
      {
        name: "#1 Common",
        description:
          "Minor character marks and knots permitted. The volume grade for exterior fencing, pergola framing, siding, and landscape applications.",
      },
      {
        name: "Rustic / Pecky",
        description:
          "Character-grade with natural texture variation including occasional pecky pockets from fungal activity during growth. A premium grade for interior feature walls and rustic design applications.",
      },
    ],
    sizes: [
      "1 × 4, 1 × 6, 1 × 8 fence boards",
      "5/4 decking stock",
      "2 × 4, 2 × 6 framing stock",
      "T&G and shiplap profiles available",
    ],
    finishes: [
      "Kiln-dried raw",
      "Smooth-planed S4S",
      "T&G and shiplap profiles (fabricated tier)",
    ],

    // ── HERO IMAGE ────────────────────────────────────────────────────────────
    heroImage: {
      url: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=1920&q=90",
      alt: "Warm cypress wood closet panels in a modern interior",
      visualBrief:
        "REPLACE: Interior shot of a closet or wardrobe lined with cypress panels. Warm honey-to-amber tones. Soft natural light. Shows the smooth, consistent grain texture of Select grade cypress. Clean, modern but warm aesthetic.",
    },

    // ── GALLERY IMAGES ────────────────────────────────────────────────────────
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=85",
        alt: "Cypress horizontal fence panels in a residential yard",
        visualBrief:
          "REPLACE: Horizontal cypress fence boards installed in a residential backyard. Natural wood color — not stained. Clean lines, consistent board spacing. No people.",
      },
      {
        url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
        alt: "Cypress shiplap accent wall in a modern interior",
        visualBrief:
          "REPLACE: Interior shiplap wall in cypress showing the warm grain and clean joints. Natural or warm artificial light. Modern space — no rustic props.",
      },
      {
        url: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=85",
        alt: "Cypress pergola framing in a residential backyard",
        visualBrief:
          "REPLACE: Cypress pergola or trellis structure in a backyard setting. Shows the structural use of cypress framing stock. Warm light, natural wood color.",
      },
    ],

    // ── COMPARISON TABLE ──────────────────────────────────────────────────────
    comparison: [
      {
        category: "Primary Use Case",
        cypress: "Closet panels, interior cladding, above-grade exterior",
        cedar: "Closet lining, exterior trim, decking",
        ptPine: "Structural framing, ground-contact exterior",
      },
      {
        category: "Janka Hardness",
        cypress: "~900–1,100 lbf",
        cedar: "350 lbf",
        ptPine: "870 lbf",
      },
      {
        category: "Natural Aroma",
        cypress: "Cedar-like; 5–10 years in closet applications",
        cedar: "Strong cedar; 3–5 years before fading",
        ptPine: "Chemical / resinous — not suitable for closet",
      },
      {
        category: "Moth Repellent",
        cypress: "Yes — natural cypressine and alpha-pinene oils",
        cedar: "Yes — cedrol and thujopsene",
        ptPine: "No",
      },
      {
        category: "Decay Resistance",
        cypress: "USDA Class 2–3 (above-grade)",
        cedar: "USDA Class 2 (above-grade)",
        ptPine: "Chemically treated only; Class 1 with treatment",
      },
      {
        category: "Surface Quality",
        cypress: "Excellent — planes to smooth, even finish",
        cedar: "Good — softer, more prone to denting",
        ptPine: "Rough — requires sanding; raised grain common",
      },
      {
        category: "Workability",
        cypress: "Excellent — consistent staining, minimal blotch",
        cedar: "Good — tends to blotch; pre-conditioner recommended",
        ptPine: "Poor for finish work — resin bleed, grain raise",
      },
      {
        category: "FSC Certifiable",
        cypress: "Yes — Costa Rica plantation grown",
        cedar: "Yes — domestic harvest available",
        ptPine: "Limited",
      },
    ],
  },
};
