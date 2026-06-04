import { MetadataRoute } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace("/api", "") ||
  process.env.NEXTAUTH_URL ||
  "http://localhost:3000";

const staticRoutes = [
  { path: "/", priority: 1.0, changeFreq: "daily" as const },
  { path: "/shops", priority: 0.9, changeFreq: "daily" as const },
  { path: "/offers", priority: 0.8, changeFreq: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFreq: "monthly" as const },
  { path: "/faq", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/customer-service", priority: 0.7, changeFreq: "monthly" as const },
  { path: "/customer-refund-policies", priority: 0.5, changeFreq: "monthly" as const },
  { path: "/vendor-refund-policies", priority: 0.5, changeFreq: "monthly" as const },
  { path: "/manufacturers", priority: 0.5, changeFreq: "monthly" as const },
  { path: "/privacy-policies", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/terms-conditions", priority: 0.4, changeFreq: "yearly" as const },
  { path: "/orders", priority: 0.3, changeFreq: "monthly" as const },
];

const shopCategories = [
  "gadgets", "clothing", "grocery", "medicine",
  "bags", "makeup", "books", "bakery", "furniture",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFreq,
    priority: route.priority,
  })) as MetadataRoute.Sitemap;

  const shopEntries = shopCategories.map((category) => ({
    url: `${BASE_URL}/shops/${category}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  })) as MetadataRoute.Sitemap;

  return [...staticEntries, ...shopEntries];
}
