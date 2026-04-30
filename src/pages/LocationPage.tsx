import { Navigate, Link } from "react-router-dom";
import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTABand from "@/components/page/CTABand";
import RelatedLinks from "@/components/page/RelatedLinks";
import { getLocationBySlug, locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { buildBreadcrumbJsonLd, buildServiceJsonLd } from "@/lib/seo";

type LocationPageProps = { slug: string };

const LocationPage = ({ slug }: LocationPageProps) => {
  const location = getLocationBySlug(slug);

  if (!location) return <Navigate to="/" replace />;

  const breadcrumbs = [{ name: location.navLabel, path: location.path }];

  const jsonLd: Record<string, unknown>[] = [
    buildBreadcrumbJsonLd(breadcrumbs),
    buildServiceJsonLd({
      name: `Selidbe ${location.city}`,
      description: location.metaDescription,
      path: location.path,
      areaServed: [location.city],
      serviceType: "Selidbe i kombi prijevoz",
    }),
  ];

  const popularServices = services.filter((s) =>
    ["selidbe", "dostava-namjestaja", "prijevoz-paketa", "utovar-istovar"].includes(s.slug),
  );

  const siblingLocations = locations
    .filter((l) => l.slug !== location.slug && l.isIsland === location.isIsland)
    .slice(0, 6)
    .map((l) => ({
      to: l.path,
      label: `Selidbe ${l.city}`,
      description: l.intro.slice(0, 110) + "…",
    }));

  const allServiceLinks = services.map((s) => ({
    to: s.path,
    label: s.title,
    description: s.intro.slice(0, 110) + "…",
  }));

  return (
    <PageLayout>
      <Seo
        title={location.metaTitle}
        description={location.metaDescription}
        keywords={location.keywords}
        path={location.path}
        jsonLd={jsonLd}
      />
      <PageHero
        badge={location.isIsland ? "Otok" : location.region}
        title={location.h1}
        subtitle={location.intro}
        bullets={location.highlights}
        breadcrumbs={[{ label: location.navLabel }]}
      />

      <ContentSection
        eyebrow="Naše usluge"
        title={`Što radimo u ${location.city.endsWith("a") || location.city.endsWith("š") ? location.city + "u" : location.city}`}
        variant="muted"
      >
        <FeatureGrid
          items={popularServices.map((s) => ({
            title: s.title,
            description: s.intro,
          }))}
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {popularServices.map((s) => (
            <Link
              key={s.slug}
              to={s.path}
              className="text-sm font-semibold text-primary hover:underline"
            >
              Saznaj više o usluzi {s.title.toLowerCase()} →
            </Link>
          ))}
        </div>
      </ContentSection>

      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <ContentSection
          eyebrow={location.isIsland ? "Mjesta na otoku" : "Kvartovi i mjesta"}
          title={`Pokrivamo cijeli ${location.city}`}
        >
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 text-sm">
            {location.neighborhoods.map((n) => (
              <li
                key={n}
                className="px-3 py-2 rounded-lg bg-secondary/60 border border-border text-foreground/80"
              >
                {n}
              </li>
            ))}
          </ul>
        </ContentSection>
      )}

      <RelatedLinks
        eyebrow={location.isIsland ? "Drugi otoci" : "Druge lokacije"}
        title={
          location.isIsland
            ? "Selidbe na ostale otoke"
            : "Selidbe i u drugim mjestima"
        }
        intro="Pokrivamo Split i okolicu — pogledajte sve lokacije gdje radimo."
        items={siblingLocations}
        variant="muted"
      />

      <RelatedLinks
        eyebrow="Sve usluge"
        title="Detaljnije o pojedinim uslugama"
        items={allServiceLinks}
      />

      <CTABand
        title={`Trebate selidbu ili prijevoz u ${location.city}?`}
        subtitle="Javite nam se za besplatnu procjenu — odgovaramo brzo."
      />
    </PageLayout>
  );
};

export const Component = LocationPage;
export default LocationPage;
