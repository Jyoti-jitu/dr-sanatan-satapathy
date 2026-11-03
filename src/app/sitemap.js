import { conditionsData } from "@/data/conditions";

export default function sitemap() {
  const baseUrl = "https://drsanatansatapathy.com";

  const staticRoutes = [
    "",
    "/about",
    "/brain-surgery",
    "/spine-surgery",
    "/endoscopic-spine-surgery",
    "/minimally-invasive-spine-surgery",
    "/conditions",
    "/achievements",
    "/hospitals",
    "/contact",
    "/privacy-policy",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/conditions") || route.includes("surgery") ? 0.8 : 0.6,
  }));

  const conditionRoutes = conditionsData.map((c) => ({
    url: `${baseUrl}/conditions/${c.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...conditionRoutes];
}

