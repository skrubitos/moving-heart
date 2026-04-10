import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <div id="trust" className="scroll-mt-20">
        <TrustSection />
      </div>
      <ContactSection />
      <Footer />
      <StickyContact />
      <BottomNav />
    </div>
  );
};

export default Index;
