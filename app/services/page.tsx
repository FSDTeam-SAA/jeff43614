import AllServices from "@/components/services/all-services";
import CommonBanner from "@/components/shared/common-banner";
import CTASection from "@/components/shared/cta-section";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Line It Up Striping | Services",
  description:
    "Explore our comprehensive parking lot line striping services in Ohio and Michigan. From new installations to maintenance, we ensure safety and aesthetics with expert solutions.",
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
