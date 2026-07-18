import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mnqe.com";
  
  // Real routes present in your Next.js application structure
  const routes = [
    "",
    "/about",
    "/contact",
    "/pricing",
    "/terms",
    "/privacy",
    "/product",
    "/customers",
    "/features",
    "/monique",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
