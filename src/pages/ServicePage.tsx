import { Navigate, useLocation } from "react-router-dom";
import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import FeatureGrid from "@/components/page/FeatureGrid";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTABand from "@/components/page/CTABand";
import RelatedLinks from "@/components/page/RelatedLinks";
import { getServiceBySlug, services } from "@/lib/services";
import { locations } from "@/lib/locations";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib/seo";

const ServicePage = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const breadcrumbs = [{ name: service.title, path: service.path }];

  const jsonLd: Record<string, unknown>[] = [
    buildBreadcrumbJsonLd(breadcrumbs),
    buildServiceJsonLd({
      name: service.title,
      description: service.metaDescription,
      path: service.path,
    }),
  ];
  if (service.faqs && service.faqs.length > 0) {
    jsonLd.push(buildFaqJsonLd(service.faqs));
  }

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3)
    .map((s) => ({ to: s.path, label: s.title, description: s.intro.slice(0, 110) + "…" }));

  const relatedLocations = locations
    .filter((l) => !l.isIsland)
    .filter((l, i, arr) => arr.findIndex((x) => x.city === l.city) === i)
    .slice(0, 6)
    .map((l) => ({
      to: l.path,
      label: `${service.title} ${l.city}`,
      description: l.intro.slice(0, 110) + "…",
    }));

  return (
    <PageLayout>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        path={service.path}
        jsonLd={jsonLd}
      />
      <PageHero
        badge={service.badge ?? service.title}
        title={service.h1}
        subtitle={service.intro}
        bullets={service.bullets}
        breadcrumbs={[{ label: service.title }]}
      />

      <ContentSection
        eyebrow="Što pokrivamo"
        title={`Što uključuje ${service.title.toLowerCase()}`}
        variant="muted"
      >
        <FeatureGrid items={service.features} />
      </ContentSection>

      {service.process && service.process.length > 0 && (
        <ContentSection eyebrow="Kako radimo" title="Proces u tri koraka">
          <FeatureGrid items={service.process} columns={3} />
        </ContentSection>
      )}

      {service.faqs && service.faqs.length > 0 && (
        <FAQAccordion items={service.faqs} />
      )}

      <RelatedLinks
        eyebrow="Lokacije"
        title="Pokrivamo Split i okolicu"
        intro="Selidbe i kombi prijevoz na cijelom području Splita i okolnih mjesta."
        items={relatedLocations}
        variant="muted"
      />

      <RelatedLinks
        eyebrow="Druge usluge"
        title="Pogledajte i ostale usluge"
        items={relatedServices}
      />

      <CTABand />
    </PageLayout>
  );
};

export const Component = ServicePage;
export default ServicePage;
