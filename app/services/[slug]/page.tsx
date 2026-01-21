import React from "react";
import { notFound } from "next/navigation";
import { servicesData } from "@/data/services-data";
import ServiceDetailsClient from "@/components/services/service-details-client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle || service.title,
    description: service.metaDescription || service.description,
    openGraph: {
      title: service.socialTitle || service.title,
      description: service.socialDescription || service.description,
      url: `https://lineituptoledo.com/services/${slug}`,
      images: [
        {
          url:
            typeof service.image === "string"
              ? service.image
              : (service.image as { src: string }).src || "",
        },
      ],
    },
    alternates: {
      canonical: `https://lineituptoledo.com/services/${slug}`,
    },
  };
}

export default async function ServiceDetails({ params }: Props) {
  const { slug } = await params;

  // Find the service based on the slug
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailsClient service={service} />;
}
