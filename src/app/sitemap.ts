import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://betweencoastssupply.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/products",
    "/products/teak",
    "/products/cypress",
    "/applications",
    "/sourcing",
    "/trade",
    "/about",
    "/contact",
  ];
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${SITE}${r}`,
    lastModified,
    changeFrequency: "weekly",
    priority: r === "" ? 1.0 : 0.7,
  }));
}
