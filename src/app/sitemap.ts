import { MetadataRoute } from "next";
import { SITE, NAV_LINKS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = NAV_LINKS.map((route) => ({
    url: `${SITE.url}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route.href === "/" ? 1 : 0.8,
  }));

  const additionalRoutes = [
    {
      url: `${SITE.url}/`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE.url}/reservations`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${SITE.url}/privacy`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  return [...additionalRoutes, ...routes];
}
