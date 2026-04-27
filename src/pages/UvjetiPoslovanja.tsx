import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_OIB,
  ADDRESS_FULL,
  EMAIL,
  PHONE_DISPLAY,
} from "@/lib/contact";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const UvjetiPoslovanja = () => {
  return (
    <PageLayout>
      <Seo
        title="Uvjeti poslovanja | Kinesis Transport"
        description="Uvjeti poslovanja Kinesis Transport d.o.o. — selidbe i kombi prijevoz u Splitu i okolici. Način dogovora, cijene, plaćanja i odgovornosti."
        path="/uvjeti-poslovanja"
        noIndex
        jsonLd={buildBreadcrumbJsonLd([
          { name: "Uvjeti poslovanja", path: "/uvjeti-poslovanja" },
        ])}
      />
      <PageHero
        badge="Pravni dokument"
        title="Uvjeti poslovanja"
        subtitle="Općeniti uvjeti pružanja usluga selidbi i kombi prijevoza."
        breadcrumbs={[{ label: "Uvjeti poslovanja" }]}
      />

      <ContentSection variant="muted">
        <div className="prose prose-sm md:prose-base max-w-3xl text-foreground/90">
          <h2>1. Pružatelj usluge</h2>
          <p>
            Pružatelj usluge je {COMPANY_LEGAL_NAME}, sjedište {ADDRESS_FULL}, OIB {COMPANY_OIB}.
            Kontakt: {PHONE_DISPLAY}, {EMAIL}.
          </p>

          <h2>2. Predmet usluge</h2>
          <p>
            Selidbe stanova, kuća i poslovnih prostora, dostava namještaja, prijevoz paketa i
            usputnih pošiljki, te utovar i istovar — na području Splita i okolice te po dogovoru
            i izvan njega.
          </p>

          <h2>3. Dogovor i ponuda</h2>
          <p>
            Ponuda se dogovara unaprijed na temelju opisa posla (količina stvari, lokacije,
            potrebe za demontažom i pakirnim materijalom). Po obostranom prihvatu, cijena je
            fiksna i ne mijenja se naknadno, osim u slučaju značajne promjene opsega posla od
            strane klijenta.
          </p>

          <h2>4. Plaćanje</h2>
          <p>
            Plaćanje se vrši nakon obavljene usluge — gotovinom ili po dogovoru bankovnom
            transakcijom. Za pravne osobe ispostavljamo račun s PDV-om.
          </p>

          <h2>5. Otkazivanje</h2>
          <p>
            Termin se može otkazati ili premjestiti bez naknade ako se javite najmanje 24 sata
            unaprijed. Za otkazivanje u kraćem roku može se obračunati naknada za rezerviran
            termin.
          </p>

          <h2>6. Odgovornost za stvari</h2>
          <p>
            Stvari prevozimo s pažnjom dobrog gospodara. Klijent je dužan unaprijed označiti
            posebno krhke ili vrijedne predmete. Za eventualnu štetu nastalu krivnjom pružatelja
            usluge odgovaramo u skladu s važećim propisima Republike Hrvatske.
          </p>

          <h2>7. Reklamacije</h2>
          <p>
            Reklamacije se podnose pisanim putem na email {EMAIL} u roku od 14 dana od pružene
            usluge. Reklamacija mora sadržavati opis i dokaze (fotografije).
          </p>

          <h2>8. Završne odredbe</h2>
          <p>
            Na sve odnose koji nisu uređeni ovim uvjetima primjenjuju se odredbe Zakona o
            obveznim odnosima i ostalih važećih propisa Republike Hrvatske.
          </p>
        </div>
      </ContentSection>
    </PageLayout>
  );
};

export default UvjetiPoslovanja;
