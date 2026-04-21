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
    tagline: "The premium outdoor hardwood. Architect-specified. Contractor-proven.",
    blurb:
      "Dense-grained, kiln-dried plantation teak with the natural oil content that makes it the standard for exterior hardwood worldwide. Straight grain, tight knots, consistent amber color. Outlasts cedar by decades. Imported direct from Costa Rica at 0% duty.",
    wholesaleBF: 9.5,
    fabricatedBF: 14.25,
    landedBF: 5.73,
    grossMargin: "~40%",
    strengths: [
      "High natural oil content — resists rot, insects, and moisture with zero treatment required",
      "Dimensional stability through Midwest freeze-thaw cycles: no warping, no cupping, no seasonal movement",
      "Silvers to a clean pewter gray untreated, or holds amber under annual oil — both are spec'd finishes",
      "Hardness rating (Janka 1070 lbf) outperforms cedar (350 lbf) and most domestic hardwoods",
      "Architect-specified globally for decking, cladding, and marine applications — instant credibility on a job site",
      "Available in FEQ, Select, and Standard grades — match the grade to the application, not the budget",
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
          "Clear, tight-knot, architect-grade. Straight grain, uniform color. Specify this for gates, entry features, exposed architectural cladding, and any job where uniformity is non-negotiable.",
      },
      {
        name: "Select / Better",
        description:
          "Small sound knots permitted. Ideal for exterior cladding, premium decking, and horizontal fencing. Best price-to-performance ratio for the trade.",
      },
      {
        name: "Standard",
        description:
          "Character-grade with natural variation. Best for volume fencing, landscaping, and any application where the install will be stained or oiled.",
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
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
        alt: "Horizontal teak privacy fence on residential property — installed",
        visualBrief:
          "REPLACE: Installed horizontal teak fence, residential setting. Boards should show clean grain and tight spacing. Modern home visible in background. Natural light. No stock-photo staging.",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
        alt: "Teak deck boards on waterfront dock — installed",
        visualBrief:
          "REPLACE: Teak decking installed on a dock, lake-front property, or elevated deck. Show the grain and color clearly. Water or exterior context in background.",
      },
      {
        url: "https://images.unsplash.com/photo-1565183997392-2f6f122e5912?auto=format&fit=crop&w=900&q=85",
        alt: "Close-up teak wood grain — kiln-dried plantation teak surface texture",
        visualBrief:
          "REPLACE: Macro/close-up of teak grain. Should show the characteristic straight grain, natural oil sheen, and tight knot pattern. Well lit. No filters or artificial color grading.",
      },
      {
        url: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=900&q=85",
        alt: "Teak horizontal cladding on exterior wall of modern home",
        visualBrief:
          "REPLACE: Teak exterior cladding on a modern home. Horizontal boards, clean install lines. Show the weathering potential — either fresh amber or silver-gray patina depending on install age.",
      },
    ],

    // ── COMPARISON TABLE (vs. alternatives) ──────────────────────────────────
    comparison: [
      {
        category: "Lifespan (untreated exterior)",
        teak: "40–75 years",
        cedar: "15–25 years",
        ptPine: "10–20 years",
      },
      {
        category: "Rot resistance",
        teak: "Class 1 (highest)",
        cedar: "Class 2–3",
        ptPine: "Requires chemical treatment",
      },
      {
        category: "Hardness (Janka lbf)",
        teak: "1,070",
        cedar: "350",
        ptPine: "870 (varies by treatment)",
      },
      {
        category: "Dimensional stability",
        teak: "Excellent — minimal seasonal movement",
        cedar: "Moderate — warps in wet climates",
        ptPine: "Poor — high shrink/swell rate",
      },
      {
        category: "Treatment required",
        teak: "None — natural oils sufficient",
        cedar: "Sealer recommended",
        ptPine: "Mandatory — pressure treatment for exterior",
      },
      {
        category: "Appearance over time",
        teak: "Silvers gracefully or holds amber under oil",
        cedar: "Grays and checks if unsealed",
        ptPine: "Grays, checks, and splits",
      },
    ],
  },

  cypress: {
    slug: "cypress",
    name: "Central American Cypress",
    tagline: "The volume workhorse for fence, siding, and landscape. Straight, stable, built for weather.",
    blurb:
      "Central American cypress delivers naturally decay-resistant heartwood with no pressure treatment required. Lighter than teak, faster to install, and priced for volume — the go-to species for fence contractors running high-board-count residential and commercial jobs. At roughly half the cost of teak, it's the workhorse of the lineup.",
    wholesaleBF: 4.75,
    fabricatedBF: 7.75,
    landedBF: 3.22,
    grossMargin: "~32%",
    strengths: [
      "Naturally decay-resistant heartwood — no chemical treatment required for ground or weather exposure",
      "Dimensional stability with minimal warping or cupping — critical for fence lines running hundreds of linear feet",
      "Lighter and softer than teak: faster to cut, faster to install, lower labor cost per linear foot",
      "Classic warm grain that weathers to a clean silver if left raw — a proven aesthetic on residential jobs",
      "T&G and shiplap profiles available — the detail spec for porch ceilings, soffits, and premium fence panels",
      "Priced for volume: moves high board counts without breaking the contractor's material budget",
    ],
    applications: [
      "Horizontal privacy fencing (volume)",
      "Pergola & trellis framing",
      "Planter boxes & raised beds",
      "Exterior siding & rainscreen",
      "Soffit, fascia & porch ceilings",
      "Interior shiplap & accent walls",
    ],
    grades: [
      {
        name: "Select",
        description:
          "Clear cypress, uniform color. Best for exposed interior cladding, porch ceilings, soffit, and any application where the finish surface is on display. Specify this for T&G and shiplap profiles.",
      },
      {
        name: "#1 Common",
        description:
          "Minor character marks permitted. Volume fencing and landscape grade. The right call for the majority of fence-line and outdoor structure work — knots are tight and sound.",
      },
      {
        name: "Rustic / Pecky",
        description:
          "Character-grade with natural pecky texture from fungal growth during the tree's life. Specialty interior applications and accent walls. Not for structural use.",
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
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1920&q=90",
      alt: "Horizontal cypress privacy fence installed at residential property",
      visualBrief:
        "REPLACE: Full-bleed photo of an installed horizontal cypress or natural wood privacy fence. Residential setting — yard or driveway boundary. Show the length of fence run to communicate scale. Clean installation. No people smiling at camera. No staged lifestyle photography. Boards should be horizontal, tight-set, and show natural wood grain.",
    },

    // ── GALLERY IMAGES ────────────────────────────────────────────────────────
    galleryImages: [
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85",
        alt: "Cypress fence boards being installed — job site photo",
        visualBrief:
          "REPLACE: Job-site install photo showing cypress fence boards being set. Contractor context — tools, lumber stacked nearby, fence posts in ground. This signals to fence installers that this is their material.",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=85",
        alt: "Cypress exterior siding on modern residential home",
        visualBrief:
          "REPLACE: Cypress exterior siding or rainscreen cladding on a residential home. Horizontal board profile. Show the wood grain and natural color. Exterior context with landscaping visible.",
      },
      {
        url: "https://images.unsplash.com/photo-1597218868981-1b68e15f0065?auto=format&fit=crop&w=900&q=85",
        alt: "T&G cypress porch ceiling — installed soffit detail",
        visualBrief:
          "REPLACE: Tongue-and-groove cypress porch ceiling or soffit. The detail contractors and homeowners photograph. Clean install with visible board lines. Warm light. No people.",
      },
      {
        url: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=900&q=85",
        alt: "Close-up cypress wood grain — natural heartwood texture",
        visualBrief:
          "REPLACE: Macro of cypress grain showing the natural heartwood color and straight grain pattern. Should show the reddish-brown heartwood vs. lighter sapwood if possible. Well lit, no filters.",
      },
    ],

    // ── COMPARISON TABLE (vs. alternatives) ──────────────────────────────────
    comparison: [
      {
        category: "Lifespan (untreated exterior)",
        cypress: "30–50 years",
        cedar: "15–25 years",
        ptPine: "10–20 years",
      },
      {
        category: "Rot resistance",
        cypress: "Class 2 — naturally resistant heartwood",
        cedar: "Class 2–3",
        ptPine: "Requires chemical treatment",
      },
      {
        category: "Treatment required",
        cypress: "None — heartwood is self-protecting",
        cedar: "Sealer recommended annually",
        ptPine: "Mandatory pressure treatment",
      },
      {
        category: "Dimensional stability",
        cypress: "Excellent — tight grain, low shrink/swell",
        cedar: "Moderate — warps in wet/dry swings",
        ptPine: "Poor — high shrink/swell, splits common",
      },
      {
        category: "Install speed",
        cypress: "Fast — light, easy to cut, holds fasteners well",
        cedar: "Moderate",
        ptPine: "Slow — heavy, wet boards, rough cut",
      },
      {
        category: "Appearance over time",
        cypress: "Weathers to clean silver-gray if left raw",
        cedar: "Grays and checks if unsealed",
        ptPine: "Grays, checks, and splits within 5 years",
      },
    ],
  },
};
