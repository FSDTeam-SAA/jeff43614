import ResourceList from "@/components/resources/resource-list";
import CommonBanner from "@/components/shared/common-banner";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Line It Up Striping | Resources",
  description:
    "Discover essential resources for parking lot maintenance and safety. Access Safety Data Sheets (SDS) for the premium paints we use, ensuring transparency and compliance in every project.",
};

export default function ResourcesPage() {
  return (
    <main>
      <CommonBanner title="Resources" />
      <ResourceList />
    </main>
  );
}
