import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import OurTeam from "@/components/OurTeam";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <OurTeam />
    </div>
  );
}
