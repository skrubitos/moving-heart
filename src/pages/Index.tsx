import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <div id="trust" className="scroll-mt-20">
        <TrustSection />
      </div>
      <ContactSection />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
