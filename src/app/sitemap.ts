import { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/about", "/tech", "/projects", "/blogs"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `https://evanazhr.vercel.app${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: index === 0 ? 1.0 : 0.8,
  }));
}
