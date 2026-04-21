import type { Metadata } from "next";
import ProductPage from "@/components/ProductPage";
import { PRODUCTS } from "@/data/products";

export const metadata: Metadata = {
  title: "Plantation Teak — Kiln-Dried, Wholesale",
  description:
    "Kiln-dried plantation teak sourced from responsible Costa Rica growers. $9.50/BF wholesale raw, $14.25/BF fabricated. Direct import, CAFTA-DR 0% duty.",
};

export default function TeakPage() {
  return <ProductPage product={PRODUCTS.teak} />;
}
