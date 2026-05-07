import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import Seo from "@/components/Seo";
import heroLogoAvif from "../../slike/kinesis-transport-logo.avif";
import heroLogoWebp from "../../slike/kinesis-transport-logo.webp";
import {
  PHONE_DISPLAY,
  EMAIL,
  COMPANY_LEGAL_NAME,
  COMPANY_OIB,
  ADDRESS_STREET,
  ADDRESS_POSTAL,
  ADDRESS_CITY,
  SITE_URL,
} from "@/lib/contact";

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${SITE_URL}/#business`,
  name: "Kinesis Transport",
  legalName: COMPANY_LEGAL_NAME,
  url: SITE_URL + "/",
  telephone: PHONE_DISPLAY.replace(/\s/g, ""),
  email: EMAIL,
  vatID: `HR${COMPANY_OIB}`,
  taxID: COMPANY_OIB,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS_STREET,
    postalCode: ADDRESS_POSTAL,
    addressLocality: ADDRESS_CITY,
    addressRegion: "Splitsko-dalmatinska županija",
    addressCountry: "HR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.508133, longitude: 16.440193 },
  areaServed: [
    { "@type": "City", name: "Split" },
    { "@type": "City", name: "Solin" },
    { "@type": "City", name: "Kaštela" },
    { "@type": "City", name: "Trogir" },
    { "@type": "City", name: "Omiš" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  priceRange: "€€",
  knowsLanguage: ["hr", "en"],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-16 sm:pb-0">
      <Seo
        title="Selidbe Split i kombi prijevoz | Kinesis Transport"
        description="Kinesis Transport — selidbe, kombi prijevoz i dostava namještaja u Splitu i okolici. Brzo, sigurno, korektne cijene. Besplatna procjena."
        keywords="selidbe Split, kombi prijevoz Split, dostava namještaja Split, prijevoz Split, selidbe Solin, selidbe Kaštela, selidbe Trogir, prijevoz paketa Split"
        path="/"
        jsonLd={homeJsonLd}
        preloadImages={[
          { href: heroLogoAvif, type: "image/avif" },
          { href: heroLogoWebp, type: "image/webp" },
        ]}
      />
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
