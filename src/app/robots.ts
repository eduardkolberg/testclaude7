import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/danke"],
    },
    sitemap: "https://tonusdienst.de/sitemap.xml",
  };
}
