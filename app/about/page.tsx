import AboutHeritage from "@/components/about/about-heritage";
import CompanyCommitment from "@/components/about/company-commitment";
import QualityPromise from "@/components/about/quality-promise";
import CommonBanner from "@/components/shared/common-banner";
import CTASection from "@/components/shared/cta-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Line It Up | Parking Lot Paint Service",
  description:
    "Trusted parking lot paint and striping experts serving Ohio & Michigan for 16 years. Quality workmanship, premium materials, and impressive results. Get your free quote!",
  openGraph: {
    title: "About Line It Up Line Striping, LLC | 16 Years of Expertise",
    description:
      "Ohio ebong Michigan-er bhorsha-joggo parking lot striping service. 16 bochorer obhiggotar sathe amra Sherwin-Williams paint ebong advanced equipment bebohar kore apnar parking lot-ke kori aro nirapod ebong drishyoman.",
    url: "https://lineituptoledo.com/about",
  },
  alternates: {
    canonical: "https://lineituptoledo.com/about",
  },
};

export default function AboutPage() {
  return (
    <main>
      <CommonBanner title="About Us" />
      <AboutHeritage />
      <QualityPromise />
      <CompanyCommitment />
      <CTASection />
    </main>
  );
}
