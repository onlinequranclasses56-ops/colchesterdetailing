import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Pinned date — update whenever content changes to signal freshness to crawlers
  const lastModified = new Date("2025-09-13T00:00:00Z");

  return [
    {
      url: "https://www.mintdetail.co.uk/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
