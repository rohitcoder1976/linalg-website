import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import OurTeam from "@/components/OurTeam";
import About from "@/components/about/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <OurTeam />
      <CTA />
      <Footer />
    </div>
  );
}
