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
};

export const PRODUCTS: Record<"teak" | "cypress", Product> = {
  teak: {
    slug: "teak",
    name: "Plantation Teak",
    tagline: "The outdoor hardwood. Priced for the project — not the yacht.",
    blurb:
      "Sustainably grown, kiln-dried teak with the natural oil content that made the species famous. Straight grain, tight knots, consistent color. Imported by the container under CAFTA-DR at 0% duty.",
    wholesaleBF: 9.5,
    fabricatedBF: 14.25,
    landedBF: 5.73,
    grossMargin: "~40%",
    strengths: [
      "High natural oil content — resists rot, insects, and marine moisture",
      "Dimensional stability across freeze-thaw cycles",
      "Silvers gracefully or holds amber color under oil",
      "Specified by architects and marine builders worldwide",
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
      { name: "FEQ — First European Quality", description: "Clear, tight-knot, architect-grade. Straight grain, uniform color." },
      { name: "Select / Better", description: "Small sound knots permitted. Ideal for exterior cladding, decking, fencing." },
      { name: "Standard", description: "Character-grade with natural variation. Best for volume fencing and landscape use." },
    ],
    sizes: [
      "4/4 × 4″, 6″, 8″, 10″ widths",
      "5/4 decking profiles (square-edge, T&G on request)",
      "8/4 post and beam stock",
      "Custom mill-to-spec available",
    ],
    finishes: [
      "Kiln-dried raw",
      "S4S surfaced four sides",
      "T&G and shiplap profiles (fabricated tier)",
    ],
  },
  cypress: {
    slug: "cypress",
    name: "Central American Cypress",
    tagline: "The landscape workhorse. Straight, stable, and built for weather.",
    blurb:
      "Kiln-dried cypress with naturally decay-resistant heartwood. The volume product for the landscape and fence channel — lighter, softer, and faster to install than teak, at roughly half the landed cost.",
    wholesaleBF: 4.75,
    fabricatedBF: 7.75,
    landedBF: 3.22,
    grossMargin: "~32%",
    strengths: [
      "Naturally decay-resistant heartwood — no pressure treatment needed",
      "Dimensional stability with minimal warping or cupping",
      "Lighter, softer, and easier to install than teak",
      "Classic warm grain that weathers to a soft gray if left raw",
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
      { name: "Select", description: "Clear cypress, uniform color. Best for exposed interior cladding." },
      { name: "#1 Common", description: "Minor character marks permitted. Volume fencing and landscape grade." },
      { name: "Rustic / Pecky", description: "Character-grade with natural texture. Specialty interior applications." },
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
  },
};
