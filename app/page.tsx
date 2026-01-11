import { Metadata } from "next";
import HomeBanner from "./components/home/banner";
import HomeAboutSection from "./components/home/home-about";
import ServiceHome from "./components/home/home-services";

export const metaData: Metadata = {
  title: "Line It Up Striping | Home",
  description:
    "Professional parking lot line striping services in Ohio and Michigan. Enhance safety and aesthetics with our expert solutions.",
};

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeAboutSection />
      <ServiceHome />
    </main>
  );
}
