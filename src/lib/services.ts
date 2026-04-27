export type ServiceFAQ = { question: string; answer: string };

export type ServiceData = {
  slug: string;
  path: string;
  navLabel: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  badge?: string;
  intro: string;
  bullets: string[];
  features: { title: string; description: string }[];
  process?: { title: string; description: string }[];
  faqs?: ServiceFAQ[];
};

export const services: ServiceData[] = [
  {
    slug: "selidbe",
    path: "/selidbe",
    navLabel: "Selidbe",
    title: "Selidbe",
    h1: "Selidbe Split — stanovi, kuće i uredi",
    metaTitle: "Selidbe Split | Kinesis Transport — stanovi, kuće, uredi",
    metaDescription:
      "Profesionalne selidbe u Splitu i okolici. Selidbe stanova, kuća i ureda s utovarom, prijevozom i istovarom. Besplatna procjena i korektne cijene.",
    keywords:
      "selidbe Split, selidbe stanova Split, selidbe kuća Split, selidbe ureda Split, jeftine selidbe Split, povoljne selidbe Split",
    badge: "Selidbe",
    intro:
      "Selidbe stanova, kuća i poslovnih prostora u Splitu, Solinu, Kaštelima, Trogiru i Omišu. Brz dogovor, točan dolazak, pažljivo rukovanje stvarima i transparentne cijene bez skrivenih troškova.",
    bullets: [
      "Stanovi, kuće, uredi i manji poslovni prostori",
      "Utovar, prijevoz i istovar po dogovoru",
      "Besplatna procjena na temelju opisa ili obilaska",
      "Fleksibilni termini, 7 dana u tjednu",
    ],
    features: [
      {
        title: "Selidbe stanova",
        description:
          "Garsonijere, jednosobni i dvosobni stanovi — selidba s utovarom, prijevozom i istovarom na novu adresu, brzo i bez stresa.",
      },
      {
        title: "Selidbe kuća",
        description:
          "Selidbe obiteljskih kuća — više vožnji ako treba, koordinacija s timom i pažljivo rukovanje krhkim stvarima i namještajem.",
      },
      {
        title: "Selidbe ureda",
        description:
          "Selidbe ureda i manjih poslovnih prostora izvan radnog vremena ili vikendom kako bismo minimalizirali zastoj u radu.",
      },
      {
        title: "Demontaža i montaža",
        description:
          "Po dogovoru rastavljamo i ponovno sastavljamo namještaj na novoj adresi.",
      },
      {
        title: "Pakirni materijal",
        description:
          "Možemo osigurati kartonske kutije, foliju za zaštitu i druge potrepštine za pakiranje.",
      },
      {
        title: "Pomoć s utovarom i istovarom",
        description:
          "Naš tim preuzima fizički dio posla — vi samo recite gdje stvari idu.",
      },
    ],
    process: [
      {
        title: "1. Upit i procjena",
        description:
          "Javite nam se telefonom, WhatsAppom ili preko obrasca. Procjenu radimo na temelju opisa ili po potrebi obilaska.",
      },
      {
        title: "2. Dogovor termina",
        description:
          "Dogovaramo datum i vrijeme dolaska, te potvrđujemo cijenu prije početka — bez skrivenih troškova.",
      },
      {
        title: "3. Selidba",
        description:
          "Dolazimo na vrijeme s vozilom i opremom, pažljivo utovarimo, prevezemo i istovarimo na novoj adresi.",
      },
    ],
    faqs: [
      {
        question: "Koliko košta selidba u Splitu?",
        answer:
          "Cijena ovisi o količini stvari, udaljenosti, katu (s liftom ili bez), te potrebi za demontažom namještaja. Na temelju kratkog opisa dajemo besplatnu procjenu — bez obveze.",
      },
      {
        question: "Selite li i izvan Splita?",
        answer:
          "Primarno radimo u Splitu i okolici (Solin, Kaštela, Trogir, Omiš), ali po dogovoru možemo organizirati i međugradske selidbe na duljim relacijama.",
      },
      {
        question: "Možete li doći vikendom ili praznikom?",
        answer:
          "Da, radimo 7 dana u tjednu od 08:00 do 20:00. Termin dogovaramo prema vašim potrebama.",
      },
      {
        question: "Imate li kutije i pakirni materijal?",
        answer:
          "Po dogovoru možemo osigurati kartonske kutije i foliju za zaštitu. Recite nam unaprijed što vam treba kako bi sve bilo spremno na dan selidbe.",
      },
    ],
  },
  {
    slug: "dostava-namjestaja",
    path: "/dostava-namjestaja",
    navLabel: "Dostava namještaja",
    title: "Dostava namještaja",
    h1: "Dostava namještaja Split — iz trgovine do vašeg doma",
    metaTitle: "Dostava namještaja Split | Kinesis Transport",
    metaDescription:
      "Preuzimanje iz trgovine ili skladišta i dostava namještaja na vašu adresu u Splitu i okolici. Po dogovoru i unos u stan ili kuću.",
    keywords:
      "dostava namještaja Split, prijevoz namještaja Split, dostava IKEA Split, dostava JYSK Split, prijevoz iz Lesnine Split",
    badge: "Dostava namještaja",
    intro:
      "Preuzimamo namještaj iz trgovine, skladišta ili od privatne osobe i dostavljamo ga direktno na vašu adresu u Splitu i okolici. Po dogovoru unosimo robu u stan ili kuću.",
    bullets: [
      "Preuzimanje iz trgovine, skladišta ili od privatne osobe",
      "Dostava na adresu u Splitu i okolici",
      "Unos u stan ili kuću po dogovoru",
      "Pažljivo rukovanje krhkim i većim komadima",
    ],
    features: [
      {
        title: "IKEA, JYSK, Lesnina, Mömax",
        description:
          "Preuzimanje robe iz velikih trgovačkih centara i dostava na vašu adresu, bez čekanja na slobodne termine velikih lanaca.",
      },
      {
        title: "Online kupovina",
        description:
          "Dostava namještaja i većih artikala kupljenih online kad prodavač ne nudi povoljnu opciju dostave do kraja.",
      },
      {
        title: "Privatna prodaja",
        description:
          "Preuzimanje s druge adrese (Njuškalo, oglasnici, prijatelji, obitelj) i dostava do vas.",
      },
      {
        title: "Unos u stan ili kuću",
        description:
          "Po dogovoru ne ostavljamo robu samo na ulazu — unesemo je do prostorije gdje vam treba.",
      },
    ],
    faqs: [
      {
        question: "Koliko košta dostava namještaja u Splitu?",
        answer:
          "Cijena ovisi o veličini robe, udaljenosti i potrebi za unosom u stan/kuću. Na temelju kratkog opisa odmah dajemo procjenu.",
      },
      {
        question: "Možete li dostaviti istog dana?",
        answer:
          "Po dostupnosti termina — često da. Javite nam se što prije i pokušat ćemo prilagoditi raspored.",
      },
      {
        question: "Pomažete li s unosom u stan ili kuću?",
        answer:
          "Da, po dogovoru unosimo robu do prostorije gdje će biti smještena. Recite nam unaprijed ima li lift i koji je kat.",
      },
    ],
  },
  {
    slug: "prijevoz-paketa",
    path: "/prijevoz-paketa",
    navLabel: "Prijevoz paketa",
    title: "Prijevoz paketa i pošiljki",
    h1: "Prijevoz paketa Split — brza dostava paketa i pošiljki",
    metaTitle: "Prijevoz paketa Split | Kinesis Transport — kombi dostava",
    metaDescription:
      "Brzi prijevoz paketa, dokumenata i robe u Splitu i okolici. Pouzdana dostava od točke do točke kombi vozilom.",
    keywords:
      "prijevoz paketa Split, dostava paketa Split, kombi dostava Split, brza dostava Split",
    badge: "Pošiljke",
    intro:
      "Brza i pouzdana dostava paketa, dokumenata, opreme i manje robe u Splitu i okolici. Idealno za hitne pošiljke kad standardna dostava ne stiže.",
    bullets: [
      "Hitna dostava od točke do točke",
      "Paketi, dokumenti, oprema, alati",
      "Direktan prijevoz bez pretovara",
      "Potvrda o preuzimanju i predaji",
    ],
    features: [
      {
        title: "Hitne pošiljke",
        description:
          "Trebate da nešto stigne danas? Vozimo direktno bez pretovara, najkraćom putanjom.",
      },
      {
        title: "B2B dostava",
        description:
          "Redovita ili povremena dostava između firmi, skladišta, obrta i klijenata u Splitu i okolici.",
      },
      {
        title: "Veće pošiljke",
        description:
          "Kad poštanska dostava nije opcija — kombi nosi i veće, teže i nestandardne pakete.",
      },
    ],
    faqs: [
      {
        question: "Koja je razlika u odnosu na klasičnu poštu?",
        answer:
          "Vozimo direktno od pošiljatelja do primatelja, bez pretovara i bez čekanja. Idealno za hitne ili krhke pošiljke.",
      },
      {
        question: "Koliko brzo možete preuzeti?",
        answer:
          "Po dostupnosti termina, često unutar nekoliko sati. Javite nam se telefonom ili WhatsAppom.",
      },
    ],
  },
  {
    slug: "usputni-transporti",
    path: "/usputni-transporti",
    navLabel: "Usputni transporti",
    title: "Usputni transporti",
    h1: "Usputni transporti Split — kombi prijevoz po dogovoru",
    metaTitle: "Usputni transporti Split | Kinesis Transport",
    metaDescription:
      "Usputni kombi transporti u Splitu i okolici po dogovorenoj relaciji. Iskoristite slobodan kapacitet kombija po povoljnoj cijeni.",
    keywords: "usputni transporti Split, povoljan prijevoz Split, kombi prijevoz Split",
    intro:
      "Imate stvari koje treba prevesti, a ne hitate? Često idemo na različite relacije pa po dogovoru možemo uzeti vašu pošiljku usput — povoljnije nego standardni transport.",
    bullets: [
      "Povoljnije cijene za fleksibilne termine",
      "Iskorištavanje slobodnog kapaciteta kombija",
      "Pouzdano rukovanje pošiljkama",
    ],
    features: [
      {
        title: "Fleksibilni termini",
        description:
          "Ako vam datum nije strog, dogovaramo termin kad smo i tako u prolazu — što znači niža cijena za vas.",
      },
      {
        title: "Različite vrste robe",
        description:
          "Namještaj, građevinski materijal, paketi, sportska oprema — sve što stane u kombi.",
      },
    ],
  },
  {
    slug: "medugradski-transporti",
    path: "/medugradski-transporti",
    navLabel: "Međugradski transporti",
    title: "Međugradski transporti",
    h1: "Međugradski transporti — selidbe i prijevoz na duljim relacijama",
    metaTitle: "Međugradski transporti i selidbe | Kinesis Transport Split",
    metaDescription:
      "Međugradske selidbe i prijevoz iz/u Split — Zagreb, Rijeka, Zadar, Dubrovnik i druge relacije. Pouzdan transport po dogovoru.",
    keywords:
      "međugradski transporti, selidbe Split Zagreb, selidbe Split Rijeka, selidbe Split Zadar, selidbe Split Dubrovnik",
    intro:
      "Po dogovoru organiziramo selidbe i prijevoz robe na duljim relacijama — Split – Zagreb, Split – Rijeka, Split – Zadar, Split – Dubrovnik i druge.",
    bullets: [
      "Selidbe na duljim relacijama",
      "Direktan prijevoz bez pretovara",
      "Dogovor cijene unaprijed",
    ],
    features: [
      {
        title: "Selidbe Split – Zagreb",
        description: "Najčešća međugradska relacija — direktan prijevoz s utovarom i istovarom.",
      },
      {
        title: "Selidbe na obali",
        description:
          "Split – Zadar, Split – Šibenik, Split – Dubrovnik — relacije po cijeloj jadranskoj obali.",
      },
      {
        title: "Otoci",
        description:
          "Selidbe na Brač, Hvar, Vis i Šoltu uz koordinaciju s trajektnim linijama.",
      },
    ],
  },
  {
    slug: "utovar-istovar",
    path: "/utovar-istovar",
    navLabel: "Utovar i istovar",
    title: "Utovar i istovar",
    h1: "Utovar i istovar Split — fizička pomoć kod selidbe i dostave",
    metaTitle: "Utovar i istovar Split | Kinesis Transport",
    metaDescription:
      "Pomoć kod utovara i istovara u Splitu i okolici. Preuzimamo fizički dio posla kod selidbe, dostave ili preseljenja namještaja.",
    keywords: "utovar Split, istovar Split, fizička pomoć selidba Split",
    intro:
      "Trebate samo fizičku pomoć kod utovara, istovara ili premještanja namještaja? Dolazimo s timom i opremom, vi recite gdje stvari idu.",
    bullets: [
      "Utovar i istovar bez prijevoza (ako već imate vozilo)",
      "Pomoć s teškim namještajem unutar stana ili kuće",
      "Pomoć kod pakiranja i raspakiranja",
    ],
    features: [
      {
        title: "Samo fizička pomoć",
        description:
          "Imate vozilo, ali trebate ljude? Dolazimo i odrađujemo utovar ili istovar.",
      },
      {
        title: "Premještanje unutar prostora",
        description:
          "Renovirate i trebate premjestiti namještaj iz sobe u sobu — pomažemo bez stresa.",
      },
    ],
  },
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);
