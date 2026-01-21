import { MetadataRoute } from "next";
import { servicesData } from "@/data/services-data";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://lineituptoledo.com";

    // Base routes
    const routes = ["", "/about", "/services", "/resources", "/contact"].map(
        (route) => ({
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: route === "" ? 1 : 0.8,
        })
    );

    // Dynamic service routes
    const serviceRoutes = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.6,
    }));

    return [...routes, ...serviceRoutes];
}
