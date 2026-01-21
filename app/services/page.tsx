import AllServices from "@/components/services/all-services";
import CommonBanner from "@/components/shared/common-banner";
import CTASection from "@/components/shared/cta-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Striping paint Services | Ohio & Michigan",
  description:
    "We handle all your parking lot needs - striping paint services, re-striping, ADA compliance, stenciling, and more. Serving Ohio & Michigan with expert precision. Free quote!",
  openGraph: {
    title:
      "Professional Pavement Striping & Maintenance Services | Line It Up Toledo",
    description:
      "Amra parking lot striping, ADA-approved handicap stalls, directional arrows, ebong specialty court striping-er moto bivinno service provide kori. Ohio, Michigan, ebong Indiana-te apnar parking lot-ke aro nirapod ebong organized korte amader expert team-er sahayjo nin.",
    url: "https://lineituptoledo.com/services",
  },
  alternates: {
    canonical: "https://lineituptoledo.com/services",
  },
};

export default function ServicePage() {
  return (
    <main>
      <CommonBanner title="Services" />
      <AllServices />
      <CTASection />
    </main>
  );
}
