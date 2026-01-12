import ContactPageContent from "@/components/contact/contact-page";
import CommonBanner from "@/components/shared/common-banner";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Line It Up Striping | Contact",
  description:
    "Get in touch with Line It Up Striping for expert parking lot line striping services in Ohio and Michigan. Request a free quote today!",
};

export default function ContactPage() {
  return (
    <main>
      <CommonBanner title="Contact Us" />
      <ContactPageContent />
    </main>
  );
}
