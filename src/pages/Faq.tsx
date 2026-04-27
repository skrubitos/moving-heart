import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import FAQAccordion from "@/components/page/FAQAccordion";
import CTABand from "@/components/page/CTABand";
import { buildBreadcrumbJsonLd, buildFaqJsonLd } from "@/lib/seo";

const faqs = [
  {
    question: "Koliko košta selidba u Splitu?",
    answer:
      "Cijena selidbe ovisi o količini stvari, udaljenosti, katu (s liftom ili bez) te eventualnoj demontaži namještaja. Na temelju kratkog opisa odmah dajemo besplatnu procjenu — bez obveze.",
  },
  {
    question: "Koliko unaprijed se trebam najaviti?",
    answer:
      "Što prije, to bolje — ali često uspijemo prihvatiti i hitne termine. Vikendi i početak/kraj mjeseca su popunjeniji pa se za tada preporuča rezervacija barem nekoliko dana unaprijed.",
  },
  {
    question: "Radite li vikendom i praznikom?",
    answer:
      "Da, radimo 7 dana u tjednu od 08:00 do 20:00, uključujući subote i nedjelje. Termin dogovaramo prema vašoj situaciji.",
  },
  {
    question: "Vozite li izvan Splita?",
    answer:
      "Primarno radimo u Splitu i okolici (Solin, Kaštela, Trogir, Omiš), ali po dogovoru organiziramo selidbe i na otoke (Brač, Hvar, Vis, Šolta) te međugradske relacije poput Split – Zagreb, Split – Rijeka, Split – Zadar i druge.",
  },
  {
    question: "Imate li pakirni materijal — kutije, foliju?",
    answer:
      "Po dogovoru osiguravamo kartonske kutije, foliju i druge potrepštine za pakiranje. Recite nam unaprijed što vam treba kako bi sve bilo spremno na dan selidbe.",
  },
  {
    question: "Demontirate li i ponovno sastavljate namještaj?",
    answer:
      "Da, po dogovoru rastavljamo i ponovno sastavljamo namještaj na novoj adresi. Recite nam unaprijed što treba demontirati kako bismo planirali vrijeme.",
  },
  {
    question: "Što ako imam nešto vrlo krhko ili vrijedno?",
    answer:
      "Krhke i vrijedne predmete pakiramo dodatno (folija, kutije, fiksiranje u kombiju) i prevozimo s posebnom pažnjom. Recite nam unaprijed za što treba poseban tretman.",
  },
  {
    question: "Plaćam unaprijed ili po izvršenju?",
    answer:
      "Plaćanje je nakon obavljene usluge. Cijena je dogovorena unaprijed i ne mijenja se naknadno — bez skrivenih troškova.",
  },
  {
    question: "Kako mogu zatražiti ponudu?",
    answer:
      "Najbrže je preko WhatsAppa ili telefona — javite nam što trebate prevesti, odakle i kamo, i odmah dajemo procjenu. Možete koristiti i obrazac na stranici Kontakt ili poslati email.",
  },
  {
    question: "Možete li dostaviti istog dana?",
    answer:
      "Po dostupnosti termina — često da. Javite nam se što prije i pokušat ćemo prilagoditi raspored.",
  },
];

const Faq = () => {
  return (
    <PageLayout>
      <Seo
        title="Često postavljana pitanja | Kinesis Transport — selidbe Split"
        description="Odgovori na najčešća pitanja o selidbama, kombi prijevozu i dostavi namještaja u Splitu i okolici. Cijene, termini, način rada."
        keywords="selidbe Split FAQ, pitanja selidbe, kombi prijevoz Split cijena, kako se selim Split"
        path="/faq"
        jsonLd={[
          buildBreadcrumbJsonLd([{ name: "Često postavljana pitanja", path: "/faq" }]),
          buildFaqJsonLd(faqs),
        ]}
      />
      <PageHero
        badge="FAQ"
        title="Često postavljana pitanja"
        subtitle="Odgovori na ono što klijenti najčešće pitaju prije selidbe ili kombi prijevoza. Ako nešto fali, javite nam — rado ćemo odgovoriti."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <FAQAccordion items={faqs} title="Sva česta pitanja" />
      <CTABand />
    </PageLayout>
  );
};

export default Faq;
