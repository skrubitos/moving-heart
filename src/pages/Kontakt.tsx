import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import ContactSection from "@/components/ContactSection";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  WHATSAPP_URL,
  ADDRESS_FULL,
  COMPANY_LEGAL_NAME,
  COMPANY_OIB,
  SITE_URL,
  ADDRESS_STREET,
  ADDRESS_POSTAL,
  ADDRESS_CITY,
} from "@/lib/contact";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  "@id": `${SITE_URL}/#business`,
  name: "Kinesis Transport",
  legalName: COMPANY_LEGAL_NAME,
  url: SITE_URL + "/kontakt",
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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "20:00",
    },
  ],
};

const Kontakt = () => {
  return (
    <PageLayout>
      <Seo
        title="Kontakt | Kinesis Transport — selidbe i kombi prijevoz Split"
        description={`Kontaktirajte Kinesis Transport za selidbe i kombi prijevoz u Splitu i okolici. Telefon ${PHONE_DISPLAY}, WhatsApp, email ili obrazac. Odgovaramo u roku od 30 minuta.`}
        keywords="kontakt Kinesis Transport, selidbe Split kontakt, kombi prijevoz Split telefon"
        path="/kontakt"
        jsonLd={[
          buildBreadcrumbJsonLd([{ name: "Kontakt", path: "/kontakt" }]),
          localBusinessJsonLd,
        ]}
      />

      <PageHero
        badge="Kontakt"
        title="Javite nam se za besplatnu procjenu"
        subtitle="Odgovaramo u roku od 30 minuta tijekom radnog vremena. Telefonom, WhatsAppom, mailom ili preko obrasca — kako vam je najlakše."
        breadcrumbs={[{ label: "Kontakt" }]}
      />

      <ContentSection variant="muted">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={PHONE_HREF}
            className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <Phone className="h-5 w-5 text-primary mb-3" />
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Telefon
            </div>
            <div className="text-base font-semibold text-foreground">{PHONE_DISPLAY}</div>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <MessageCircle className="h-5 w-5 text-[#25D366] mb-3" />
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              WhatsApp
            </div>
            <div className="text-base font-semibold text-foreground">Pošaljite poruku</div>
          </a>

          <a
            href={EMAIL_HREF}
            className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
          >
            <Mail className="h-5 w-5 text-primary mb-3" />
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Email
            </div>
            <div className="text-sm font-semibold text-foreground break-all">{EMAIL}</div>
          </a>

          <div className="rounded-2xl border border-border bg-card p-5">
            <Clock className="h-5 w-5 text-primary mb-3" />
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
              Radno vrijeme
            </div>
            <div className="text-sm font-semibold text-foreground">Pon — Ned</div>
            <div className="text-sm text-muted-foreground">08:00 – 20:00</div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Sjedište
              </div>
              <address className="not-italic text-base font-semibold text-foreground">
                {COMPANY_LEGAL_NAME}
                <br />
                {ADDRESS_FULL}, Hrvatska
              </address>
              <div className="mt-2 text-xs text-muted-foreground">OIB: {COMPANY_OIB}</div>
            </div>
          </div>
        </div>
      </ContentSection>

      <ContactSection />
    </PageLayout>
  );
};

export const Component = Kontakt;
export default Kontakt;
