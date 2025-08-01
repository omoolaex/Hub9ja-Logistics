import Image from "next/image";

import Hero from "@/components/Hero";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Partner from "@/components/Partner";
import TrackPackage from "@/components/TrackPackage";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-800">
      <Hero />
      <Services />
      <HowItWorks />
      <Partner />
      <TrackPackage />
      <Contact />
      <Footer />
    </main>
  );
}
