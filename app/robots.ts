import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers — allow the full site
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // No API routes to index
          "/_next/",     // Next.js internals
          "/static/",    // Static asset folder
        ],
      },
      // Googlebot — explicit max crawl signal
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Bingbot
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://www.mintdetail.co.uk/sitemap.xml",
    host: "https://www.mintdetail.co.uk",
  };
}
