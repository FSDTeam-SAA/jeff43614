import AboutHeritage from "@/components/about/about-heritage";
import CompanyCommitment from "@/components/about/company-commitment";
import QualityPromise from "@/components/about/quality-promise";
import CommonBanner from "@/components/shared/common-banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Line It Up Striping | Home",
  description:
    "Professional parking lot line striping services in Ohio and Michigan. Enhance safety and aesthetics with our expert solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <CommonBanner title="About Us" />
      <AboutHeritage />
      <QualityPromise />
      <CompanyCommitment />
    </main>
  );
}
