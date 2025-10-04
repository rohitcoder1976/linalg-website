import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurTeam from "@/components/OurTeam";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <WhyUs /> */}
      <OurTeam />
      <CTA />
      <Footer />
    </div>
  );
}
