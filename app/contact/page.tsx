import ContactPageContent from "@/components/contact/contact-page";
import CommonBanner from "@/components/shared/common-banner";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Professional Parking stops Service | Get Free Quote",
  description:
    "Ready for professional parking stops installation? Get your free striping quote today! Expert service across Ohio & Michigan. Contact us to get started!",
  openGraph: {
    title: "Contact Line It Up Line Striping | Get a Free Quote Today",
    description:
      "Ohio ebong Michigan-e parking lot striping service proyojon? Line It Up Line Striping, LLC-er sathe jogajog korun. Free quote pete amader call korun ba online form-ti fill-up korun. Amra 24 ghonta apnar shebay achi.",
    url: "https://lineituptoledo.com/contact",
  },
  alternates: {
    canonical: "https://lineituptoledo.com/contact",
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Line It Up Line Striping, LLC",
      image:
        "https://lineituptoledo.com/wp-content/uploads/2023/10/Line-it-up-Toledo-Logo.png",
      telephone: "+1-419-381-7083",
      email: "workingbuckeye@gmail.com",
      url: "https://lineituptoledo.com/contact",
      description:
        "Contact us for a free quote on professional parking lot striping and pavement maintenance services in Ohio and Michigan.",
      areaServed: ["Ohio", "Michigan", "Indiana"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Toledo",
        addressRegion: "OH",
        addressCountry: "US",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CommonBanner title="Contact Us" />
      <ContactPageContent />
    </main>
  );
}
