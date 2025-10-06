import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return (
    <div>
      <Hero />
      <ClientWrapper />
      <CTA />
      <Footer />
    </div>
  );
}
