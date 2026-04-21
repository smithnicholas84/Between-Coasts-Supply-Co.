import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Central American Cypress — Kiln-Dried, Wholesale",
  description:
    "Kiln-dried Central American cypress for fencing, siding, paneling, and landscape. $4.75/BF wholesale raw, $7.75/BF fabricated. Direct import under CAFTA-DR, 0% duty.",
};

export default function CypressPage() {
  return <ProductPage product={PRODUCTS.cypress} />;
}
