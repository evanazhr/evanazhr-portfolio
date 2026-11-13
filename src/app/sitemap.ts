import { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = [
  { path: "", priority: 1.0 },
  { path: "/about", priority: 0.8 },
  { path: "/tech", priority: 0.8 },
  { path: "/projects", priority: 0.8 },
  { path: "/blogs", priority: 0.8 },
  { path: "/blogs/tutorial-html", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://evanazhr.vercel.app${route.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
