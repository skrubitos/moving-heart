import Seo from "@/components/Seo";
import PageLayout from "@/components/page/PageLayout";
import PageHero from "@/components/page/PageHero";
import ContentSection from "@/components/page/ContentSection";
import CTABand from "@/components/page/CTABand";
import { Check, Info } from "lucide-react";
import { buildBreadcrumbJsonLd } from "@/lib/seo";

const factors = [
  "Količina i vrsta stvari",
  "Udaljenost — unutar grada ili međugradski",
  "Kat i postojanje lifta",
  "Potreba za demontažom i montažom namještaja",
  "Pakirni materijal (kutije, folija)",
  "Broj radnika potreban za posao",
  "Termin (vikend / praznik može biti drukčije)",
];

const packages = [
  {
    name: "Mala selidba / dostava",
    price: "od 60 €",
    description:
      "Pojedinačni veći komad, dostava namještaja s katom uz lift, manji prijevoz unutar Splita.",
    bullets: [
      "Kombi vozilo i jedan radnik",
      "Unutar Splita ili bliske okolice",
      "Vrijeme do ~2 sata",
    ],
  },
  {
    name: "Standardna selidba",
    price: "od 150 €",
    description:
      "Selidba garsonijere ili manjeg jednosobnog stana s utovarom, prijevozom i istovarom.",
    bullets: [
      "Kombi vozilo i tim od 2 radnika",
      "Utovar, prijevoz i istovar",
      "Pomoć kod krhkih stvari",
    ],
    highlighted: true,
  },
  {
    name: "Veća selidba",
    price: "po dogovoru",
    description:
      "Dvosobni i trosobni stanovi, kuće, uredi — više vožnji ili veći tim po potrebi.",
    bullets: [
      "Više vožnji ili veći kombi",
      "Tim od 2 – 4 radnika",
      "Demontaža i montaža po dogovoru",
    ],
  },
];

const Cjenik = () => {
  return (
    <PageLayout>
      <Seo
        title="Cjenik | Kinesis Transport — selidbe i kombi prijevoz Split"
        description="Okvirni cjenik selidbi i kombi prijevoza u Splitu i okolici. Cijena ovisi o količini, udaljenosti i terminu — uvijek dajemo besplatnu procjenu unaprijed."
        keywords="cjenik selidbe Split, cijena kombi prijevoz Split, koliko košta selidba Split"
        path="/cjenik"
        jsonLd={buildBreadcrumbJsonLd([{ name: "Cjenik", path: "/cjenik" }])}
      />
      <PageHero
        badge="Cjenik"
        title="Cjenik selidbi i kombi prijevoza"
        subtitle="Okvirni paketi i faktori koji utječu na cijenu. Konačnu cijenu uvijek dogovaramo unaprijed na temelju vaše konkretne situacije — bez skrivenih troškova."
        breadcrumbs={[{ label: "Cjenik" }]}
      />

      <ContentSection eyebrow="Paketi" title="Okvirne cijene" variant="muted">
        <div className="grid md:grid-cols-3 gap-4">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border bg-card p-6 flex flex-col ${
                p.highlighted ? "border-primary shadow-lg shadow-primary/15" : "border-border"
              }`}
            >
              {p.highlighted && (
                <span className="self-start mb-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Najčešće
                </span>
              )}
              <h3 className="text-lg font-bold text-foreground">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold text-primary">{p.price}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              <ul className="mt-4 space-y-2">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-6 inline-flex items-start gap-2 text-xs text-muted-foreground">
          <Info className="h-4 w-4 flex-shrink-0 mt-0.5" />
          Navedene cijene su orijentacijske. Konačna cijena ovisi o konkretnoj situaciji i
          dogovara se prije početka posla.
        </p>
      </ContentSection>

      <ContentSection eyebrow="Što utječe na cijenu" title="Faktori koji određuju konačnu cijenu">
        <ul className="grid sm:grid-cols-2 gap-3">
          {factors.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
              {f}
            </li>
          ))}
        </ul>
      </ContentSection>

      <CTABand
        title="Trebate konkretnu ponudu?"
        subtitle="Opišite što trebate prevesti — odgovaramo s procjenom u roku od 30 minuta."
      />
    </PageLayout>
  );
};

export default Cjenik;
