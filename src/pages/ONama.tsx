import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import FeatureGrid from "@/components/page/FeatureGrid";
import CTABand from "@/components/page/CTABand";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const values = [
  {
    title: "Točan dolazak",
    description:
      "Dolazimo na vrijeme, kako smo se dogovorili. Kašnjenje znači gubitak vašeg vremena — to ne radimo.",
  },
  {
    title: "Pažljivo rukovanje",
    description:
      "Svaki predmet tretiramo kao da je naš. Krhke i vrijedne stvari pakiramo dodatno i prevozimo s pažnjom.",
  },
  {
    title: "Korektne cijene",
    description:
      "Cijena dogovorena unaprijed je cijena koju plaćate — bez skrivenih troškova i naknadnih iznenađenja.",
  },
  {
    title: "Fleksibilnost",
    description:
      "Radimo 7 dana u tjednu od 08:00 do 20:00 i prilagođavamo se vašem rasporedu.",
  },
  {
    title: "Individualan pristup",
    description:
      "Svaki posao je drugačiji. Pitamo, slušamo i prilagođavamo plan vašoj situaciji.",
  },
  {
    title: "Lokalno znanje",
    description:
      "Poznajemo Split i okolicu — kvartove, ulice, parkirne uvjete, otoke i trajektne linije.",
  },
];

const ONama = () => {
  return (
    <PageLayout>
      <Seo
        title="O nama | Kinesis Transport — selidbe i kombi prijevoz Split"
        description="Kinesis Transport d.o.o. je splitska tvrtka za selidbe i kombi prijevoz. Saznajte tko smo, što radimo i zašto klijenti biraju nas."
        keywords="o nama, Kinesis Transport, selidbe Split, kombi prijevoz Split"
        path="/o-nama"
        jsonLd={buildBreadcrumbJsonLd([{ name: "O nama", path: "/o-nama" }])}
      />
      <PageHero
        badge="O nama"
        title="Mlada splitska tvrtka koja gradi reputaciju s prvim klijentom"
        subtitle="Specijalizirani smo za selidbe i kombi prijevoz u Splitu i okolici. Svaki posao odrađujemo s dodatnom razinom odgovornosti — jer reputaciju gradimo upravo sad."
        breadcrumbs={[{ label: "O nama" }]}
      />

      <ContentSection eyebrow="Tko smo" title="Kinesis Transport" variant="muted">
        <div className="prose prose-sm md:prose-base max-w-3xl text-muted-foreground leading-relaxed">
          <p>
            Kinesis Transport d.o.o. je splitska tvrtka specijalizirana za selidbe, dostavu
            namještaja i kombi prijevoz na području Splita, Solina, Kaštela, Trogira, Omiša i
            cijele Splitsko-dalmatinske županije, uključujući otoke Brač, Hvar, Vis i Šoltu.
          </p>
          <p>
            Nismo veliki sustav s call-centrom. Svaki upit ide direktno do osobe koja organizira
            posao, što znači brz odgovor i jasno razumijevanje što vam treba. Klijent dobiva
            jednu kontakt-osobu od dogovora do izvršenja.
          </p>
          <p>
            Kao mlada tvrtka, znamo da svaki zadovoljan klijent znači preporuku. Zato ne radimo
            kompromise oko točnosti dolaska, sigurnosti vaših stvari i transparentnosti cijene.
          </p>
        </div>
      </ContentSection>

      <ContentSection eyebrow="Naše vrijednosti" title="Kako pristupamo poslu">
        <FeatureGrid items={values} />
      </ContentSection>

      <CTABand />
    </PageLayout>
  );
};

export default ONama;
