import { Navigate } from "react-router-dom";
import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import FeatureGrid from "@/components/page/FeatureGrid";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTABand from "@/components/page/CTABand";
import { getServiceBySlug } from "@/lib/services";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, buildServiceJsonLd } from "@/lib/seo";

type ServicePageProps = { slug: string };

const ServicePage = ({ slug }: ServicePageProps) => {
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/404" replace />;

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

      <CTABand />
    </PageLayout>
  );
};

export default ServicePage;
