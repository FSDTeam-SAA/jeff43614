import ResourceList from "@/components/resources/resource-list";
import CommonBanner from "@/components/shared/common-banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Safety Resources & Paint Specs | Concrete Parking Blocks",
  description:
    "Access safety data sheets and technical specs for our premium Sherwin-Williams traffic marking paints and concrete parking blocks. Transparency and safety first in every project we do.",
  openGraph: {
    title: "Industry Resources & Safety Data Sheets | Line It Up Toledo",
    description:
      "Amader bebohar kora Sherwin-Williams paint-er Safety Data Sheets (SDS) ebong proyojoniyo technical resources ekhane paben. Amra proyojoniyo shokol compliance ebong safety standard mene kaj kori.",
    url: "https://lineituptoledo.com/resources",
  },
  alternates: {
    canonical: "https://lineituptoledo.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <main>
      <CommonBanner title="Resources" />
      <ResourceList />
    </main>
  );
}
