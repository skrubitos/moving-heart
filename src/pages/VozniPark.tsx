import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import FeatureGrid from "@/components/page/FeatureGrid";
import RelatedLinks from "@/components/page/RelatedLinks";
import CTABand from "@/components/page/CTABand";
import { buildBreadcrumbJsonLd } from "@/lib/seo";
import { services } from "@/lib/services";
import kombiImg from "../../slike/kinesis-transport-kombi.jpeg";
import kombiAvif from "../../slike/kinesis-transport-kombi.avif";
import kombiWebp from "../../slike/kinesis-transport-kombi.webp";

const specs = [
  {
    title: "Tip vozila",
    description: "Dostavni kombi, ispitan i registriran za poslovni prijevoz robe i selidbe.",
  },
  {
    title: "Volumen tovarnog prostora",
    description: "Prilagođen za prijevoz namještaja, kutija i većih komada — dovoljan za prosječnu selidbu jednosobnog stana u jednoj vožnji.",
  },
  {
    title: "Nosivost",
    description: "Standardna nosivost dostavnog kombija — pokriva većinu kućanskih i poslovnih selidbi.",
  },
  {
    title: "Pristup pošiljkama",
    description: "Bočna i stražnja vrata za lakši utovar voluminoznih komada (frižider, perilica, ormari).",
  },
  {
    title: "Zaštita robe",
    description: "Folija, deke i remenje za fiksiranje — krhke i vrijedne stvari posebno pakiramo.",
  },
  {
    title: "Tehnička ispravnost",
    description: "Redovni servis i tehnički pregled — vozilo je uvijek u voznom stanju i pripremljeno za posao.",
  },
];

const VozniPark = () => {
  return (
    <PageLayout>
      <Seo
        title="Vozni park | Kinesis Transport — kombi za selidbe Split"
        description="Vozni park Kinesis Transport — dostavni kombi za selidbe, prijevoz namještaja i pakiranje. Tehnički ispravno vozilo, redovan servis, oprema za zaštitu robe."
        keywords="vozni park Kinesis Transport, kombi Split, dostavno vozilo Split, selidbe vozilo"
        path="/vozni-park"
        jsonLd={buildBreadcrumbJsonLd([{ name: "Vozni park", path: "/vozni-park" }])}
      />
      <PageHero
        badge="Vozni park"
        title="Naš kombi — pripremljen za svaku selidbu i prijevoz"
        subtitle="Dostavni kombi s opremom za sigurno rukovanje robom. Redovan servis i tehnički pregled, deke i folija za zaštitu, remenje za fiksiranje."
        breadcrumbs={[{ label: "Vozni park" }]}
      />

      <ContentSection variant="muted">
        <div className="rounded-3xl overflow-hidden border border-border shadow-xl max-w-3xl mx-auto">
          <picture>
            <source srcSet={kombiAvif} type="image/avif" />
            <source srcSet={kombiWebp} type="image/webp" />
            <img
              src={kombiImg}
              alt="Dostavni kombi Kinesis Transport — selidbe i prijevoz u Splitu"
              className="w-full h-auto object-cover"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
      </ContentSection>

      <ContentSection eyebrow="Specifikacije" title="Što vam možemo prevesti">
        <FeatureGrid items={specs} />
        <p className="mt-6 text-sm text-muted-foreground max-w-3xl">
          Točne dimenzije tovarnog prostora i nosivost recite nam unaprijed kad opisujete posao —
          tako možemo procijeniti broj vožnji ili veličinu vozila koje treba.
        </p>
      </ContentSection>

      <RelatedLinks
        eyebrow="Naše usluge"
        title="Što sve radimo s ovim vozilom"
        items={services.map((s) => ({
          to: s.path,
          label: s.title,
          description: s.intro.slice(0, 110) + "…",
        }))}
        variant="muted"
      />

      <CTABand
        title="Trebate kombi za selidbu ili prijevoz?"
        subtitle="Javite nam se za dostupnost termina i besplatnu procjenu cijene."
      />
    </PageLayout>
  );
};

export const Component = VozniPark;
export default VozniPark;
