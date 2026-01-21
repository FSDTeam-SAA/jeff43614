import { Metadata } from "next";
import HomeBanner from "../components/home/banner";
import HomeAboutSection from "../components/home/home-about";
import ServiceHome from "../components/home/home-services";
import FeaturesSection from "@/components/home/features";
import ContactSection from "@/components/shared/contact-form";

export const metadata: Metadata = {
  title: "Parking Lot Striping in Ohio & Michigan | Line It Up",
  description:
    "Professional parking lot striping services across Ohio, Michigan & Indiana. 15+ years of experience. Get a free quote today! Available 24/7 for your project.",
  openGraph: {
    title: "Line It Up Toledo | Professional Pavement Marking & Striping Services",
    description:
      "Toledo-te apnar parking lot ba pavement-ke din ekti porichonno ebong peshadar rup. Amra dicchi accurate striping, ADA compliance, ebong parking lot maintenance-er nischoyota. Aaj-i amader sathe jogajog korun!",
    url: "https://lineituptoledo.com/",
    type: "website",
    images: [
      {
        url: "https://lineituptoledo.com/wp-content/uploads/2023/10/Line-it-up-Toledo-Logo.png",
      },
    ],
  },
  alternates: {
    canonical: "https://lineituptoledo.com/",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Line It Up Toledo",
    image:
      "https://lineituptoledo.com/wp-content/uploads/2023/10/Line-it-up-Toledo-Logo.png",
    "@id": "https://lineituptoledo.com",
    url: "https://lineituptoledo.com",
    telephone: "+1-419-351-4089",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Toledo and surrounding areas",
      addressLocality: "Toledo",
      addressRegion: "OH",
      postalCode: "43601",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.6528,
      longitude: -83.5379,
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
      ],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/lineituptoledo",
      "https://www.instagram.com/lineituptoledo",
    ],
    description:
      "Professional pavement marking and parking lot striping services in Toledo, Ohio. We specialize in ADA compliance, line painting, and parking lot maintenance.",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeBanner />
      <HomeAboutSection />
      <ServiceHome />
      <FeaturesSection />
      <ContactSection />
    </main>
  );
}
