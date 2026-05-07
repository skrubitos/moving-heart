export type LocationData = {
  slug: string;
  path: string;
  navLabel: string;
  city: string;
  locative: string;
  region?: string;
  isIsland?: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  intro: string;
  highlights: string[];
  neighborhoods?: string[];
  notes?: string;
};

const SPLIT_NEIGHBORHOODS = [
  "Bačvice",
  "Bol",
  "Brda",
  "Dobri",
  "Gripe",
  "Lokve",
  "Lovret",
  "Manuš",
  "Meje",
  "Mertojak",
  "Pazdigrad",
  "Plokite",
  "Pujanke",
  "Ravne njive",
  "Spinut",
  "Sukoišan",
  "Šine",
  "Trstenik",
  "Visoka",
  "Žnjan",
];

export const locations: LocationData[] = [
  {
    slug: "selidbe-split",
    path: "/selidbe-split",
    navLabel: "Split",
    city: "Split",
    locative: "Splitu",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Selidbe Split | Kinesis Transport — selidbe stanova, kuća, ureda",
    metaDescription:
      "Selidbe u Splitu — stanovi, kuće i uredi. Kombi prijevoz, utovar i istovar po svim splitskim kvartovima. Besplatna procjena i korektne cijene.",
    keywords:
      "selidbe Split, selidbe stanova Split, selidbe kuća Split, kombi prijevoz Split, jeftine selidbe Split",
    h1: "Selidbe Split — pouzdano i povoljno za stanove, kuće i urede",
    intro:
      "Kinesis Transport je tvrtka iz Splita specijalizirana za selidbe i kombi prijevoz. Pokrivamo sve splitske kvartove — od Bačvica i Žnjana do Lovreta, Spinuta i Pazdigrada. Dolazimo na vrijeme, pažljivo rukujemo vašim stvarima i radimo bez skrivenih troškova.",
    highlights: [
      "Selidbe stanova u svim splitskim kvartovima",
      "Selidbe obiteljskih kuća i ureda",
      "Kombi vozilo i tim za utovar i istovar",
      "Fleksibilni termini, 7 dana u tjednu",
      "Besplatna procjena i transparentna cijena",
    ],
    neighborhoods: SPLIT_NEIGHBORHOODS,
  },
  {
    slug: "selidbe-solin",
    path: "/selidbe-solin",
    navLabel: "Solin",
    city: "Solin",
    locative: "Solinu",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Selidbe Solin | Kinesis Transport — kombi prijevoz Solin",
    metaDescription:
      "Selidbe i kombi prijevoz u Solinu. Pokrivamo cijeli Solin i okolicu — selidbe stanova, kuća, dostava namještaja i fizička pomoć kod utovara.",
    keywords: "selidbe Solin, kombi prijevoz Solin, dostava namještaja Solin",
    h1: "Selidbe Solin — kombi prijevoz i selidbe stanova i kuća",
    intro:
      "Selidbe u Solinu i okolici — stanovi, kuće, manji poslovni prostori. Kao splitska tvrtka redovito vozimo na relaciji Split – Solin, pa su termini fleksibilni i cijene konkurentne.",
    highlights: [
      "Selidbe stanova i kuća u Solinu",
      "Dostava namještaja na adresu",
      "Fleksibilni termini i kratko vrijeme dolaska",
      "Iskustvo s relacijom Split – Solin",
    ],
  },
  {
    slug: "selidbe-kastela",
    path: "/selidbe-kastela",
    navLabel: "Kaštela",
    city: "Kaštela",
    locative: "Kaštelima",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Selidbe Kaštela | Kinesis Transport — sva mjesta Kaštela",
    metaDescription:
      "Selidbe i kombi prijevoz u svim Kaštelima — Štafilić, Novi, Stari, Lukšić, Kambelovac, Gomilica, Sućurac. Selidbe stanova, kuća i dostava namještaja.",
    keywords: "selidbe Kaštela, kombi prijevoz Kaštela, dostava namještaja Kaštela",
    h1: "Selidbe Kaštela — sva kaštelanska mjesta",
    intro:
      "Pokrivamo svih sedam kaštelanskih mjesta: Štafilić, Novi, Stari, Lukšić, Kambelovac, Gomilica i Sućurac. Selidbe stanova, kuća i obiteljski prijevoz s pažljivim rukovanjem stvarima.",
    highlights: [
      "Selidbe u svim Kaštelima",
      "Iskustvo s kaštelanskim ulicama i pristupima kućama",
      "Dostava namještaja iz Splita u Kaštela",
      "Fleksibilni termini",
    ],
    neighborhoods: [
      "Kaštel Štafilić",
      "Kaštel Novi",
      "Kaštel Stari",
      "Kaštel Lukšić",
      "Kaštel Kambelovac",
      "Kaštel Gomilica",
      "Kaštel Sućurac",
    ],
  },
  {
    slug: "selidbe-trogir",
    path: "/selidbe-trogir",
    navLabel: "Trogir",
    city: "Trogir",
    locative: "Trogiru",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Selidbe Trogir | Kinesis Transport — kombi prijevoz",
    metaDescription:
      "Selidbe i kombi prijevoz u Trogiru i okolici. Iskustvo s prijevozom u zaštićenom centru grada i okolnim mjestima.",
    keywords: "selidbe Trogir, kombi prijevoz Trogir, dostava namještaja Trogir",
    h1: "Selidbe Trogir — selidbe stanova i kuća",
    intro:
      "Selidbe u Trogiru i okolici, uključujući okolna mjesta poput Seget Donjeg, Seget Gornjeg i Čiova. Iskustvo s logistikom u uskim ulicama i staroj jezgri.",
    highlights: [
      "Selidbe stanova i kuća u Trogiru",
      "Iskustvo s pristupom u staroj jezgri",
      "Dostava namještaja iz Splita",
      "Pomoć s utovarom i istovarom",
    ],
  },
  {
    slug: "selidbe-omis",
    path: "/selidbe-omis",
    navLabel: "Omiš",
    city: "Omiš",
    locative: "Omišu",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Selidbe Omiš | Kinesis Transport — kombi prijevoz",
    metaDescription:
      "Selidbe i kombi prijevoz u Omišu i okolici. Pouzdana usluga za selidbe stanova, kuća i dostavu namještaja u Splitsko-dalmatinskoj županiji.",
    keywords: "selidbe Omiš, kombi prijevoz Omiš, dostava namještaja Omiš",
    h1: "Selidbe Omiš — selidbe stanova, kuća i dostava namještaja",
    intro:
      "Selidbe u Omišu i okolnim mjestima poput Duća, Stanića, Jesenica i Čisla. Redovito vozimo na relaciji Split – Omiš pa termini ostaju fleksibilni.",
    highlights: [
      "Selidbe u Omišu i okolnim mjestima",
      "Dostava namještaja iz Splita",
      "Iskustvo s logistikom uz Cetinu",
      "Korektne cijene i fleksibilni termini",
    ],
  },
  {
    slug: "kombi-prijevoz-split",
    path: "/kombi-prijevoz-split",
    navLabel: "Kombi prijevoz Split",
    city: "Split",
    locative: "Splitu",
    region: "Splitsko-dalmatinska županija",
    metaTitle: "Kombi prijevoz Split | Kinesis Transport — brzi i povoljan",
    metaDescription:
      "Kombi prijevoz u Splitu i okolici za selidbe, dostavu namještaja, prijevoz paketa, građevinskog materijala i robe. Brzo, sigurno, povoljno.",
    keywords:
      "kombi prijevoz Split, kombi Split, prijevoz robe Split, prijevoz namještaja Split",
    h1: "Kombi prijevoz Split — brza i povoljna dostava",
    intro:
      "Kinesis Transport nudi kombi prijevoz u Splitu i okolici. Vozimo selidbe, namještaj, pakete, građevinski materijal, sportsku opremu — sve što stane u kombi vozilo.",
    highlights: [
      "Kombi vozilo dostupno 7 dana u tjednu",
      "Kratko vrijeme dolaska u Splitu i okolici",
      "Fizička pomoć s utovarom i istovarom",
      "Korektne cijene bez skrivenih troškova",
    ],
  },
  {
    slug: "selidbe-brac",
    path: "/selidbe-brac",
    navLabel: "Brač",
    city: "Brač",
    locative: "Braču",
    region: "Otok Brač",
    isIsland: true,
    metaTitle: "Selidbe Brač | Kinesis Transport — Supetar, Bol, Postira",
    metaDescription:
      "Selidbe i prijevoz na otok Brač iz Splita. Pokrivamo Supetar, Bol, Postira, Pučišća, Sutivan i ostala mjesta. Koordiniramo s trajektnim linijama.",
    keywords: "selidbe Brač, selidbe Supetar, selidbe Bol, prijevoz Brač",
    h1: "Selidbe Brač — selidbe i prijevoz na otok iz Splita",
    intro:
      "Selidbe i kombi prijevoz na otok Brač — uz koordinaciju s trajektima Split – Supetar i Makarska – Sumartin. Selidbe stanova, ljetnikovaca i poslovnih prostora.",
    highlights: [
      "Selidbe u Supetar, Bol, Postira, Pučišća, Sutivan",
      "Koordinacija s trajektnim linijama",
      "Iskustvo s otočkom logistikom",
      "Dostava namještaja iz Splita",
    ],
  },
  {
    slug: "selidbe-hvar",
    path: "/selidbe-hvar",
    navLabel: "Hvar",
    city: "Hvar",
    locative: "Hvaru",
    region: "Otok Hvar",
    isIsland: true,
    metaTitle: "Selidbe Hvar | Kinesis Transport — Hvar, Stari Grad, Jelsa",
    metaDescription:
      "Selidbe i prijevoz na otok Hvar iz Splita. Pokrivamo Hvar grad, Stari Grad, Jelsu, Vrboskoj i Sućuraj. Koordiniramo s trajektima.",
    keywords: "selidbe Hvar, selidbe Stari Grad, selidbe Jelsa, prijevoz Hvar",
    h1: "Selidbe Hvar — selidbe i prijevoz iz Splita",
    intro:
      "Selidbe na Hvar — Hvar grad, Stari Grad, Jelsa, Vrboska, Sućuraj. Koordiniramo s trajektnim linijama Split – Stari Grad i Drvenik – Sućuraj.",
    highlights: [
      "Selidbe na cijeli otok",
      "Koordinacija s trajektima Split – Stari Grad",
      "Selidbe ljetnikovaca i poslovnih prostora",
      "Iskustvo s otočkom logistikom",
    ],
  },
  {
    slug: "selidbe-vis",
    path: "/selidbe-vis",
    navLabel: "Vis",
    city: "Vis",
    locative: "Visu",
    region: "Otok Vis",
    isIsland: true,
    metaTitle: "Selidbe Vis | Kinesis Transport — Vis grad i Komiža",
    metaDescription:
      "Selidbe i prijevoz na otok Vis iz Splita. Pokrivamo Vis grad i Komižu. Koordiniramo s trajektnim linijama Split – Vis.",
    keywords: "selidbe Vis, selidbe Komiža, prijevoz Vis",
    h1: "Selidbe Vis — selidbe i prijevoz iz Splita",
    intro:
      "Selidbe i kombi prijevoz na otok Vis. Koordiniramo s trajektnim linijama Split – Vis. Pokrivamo i Vis grad i Komižu.",
    highlights: [
      "Selidbe u Vis grad i Komižu",
      "Koordinacija s trajektima Split – Vis",
      "Selidbe stanova i ljetnikovaca",
    ],
  },
  {
    slug: "selidbe-solta",
    path: "/selidbe-solta",
    navLabel: "Šolta",
    city: "Šolta",
    locative: "Šolti",
    region: "Otok Šolta",
    isIsland: true,
    metaTitle: "Selidbe Šolta | Kinesis Transport — Grohote, Stomorska, Maslinica",
    metaDescription:
      "Selidbe i prijevoz na otok Šolta iz Splita. Pokrivamo Grohote, Nečujam, Stomorsku, Maslinicu i ostala mjesta. Trajekt Split – Rogač.",
    keywords: "selidbe Šolta, selidbe Grohote, prijevoz Šolta",
    h1: "Selidbe Šolta — selidbe i prijevoz iz Splita",
    intro:
      "Selidbe i prijevoz na otok Šoltu — Grohote, Nečujam, Stomorska, Maslinica, Rogač. Koordiniramo s trajektnom linijom Split – Rogač.",
    highlights: [
      "Selidbe u sva mjesta otoka Šolte",
      "Trajekt Split – Rogač",
      "Selidbe ljetnikovaca i obiteljskih kuća",
    ],
  },
];

export const getLocationBySlug = (slug: string): LocationData | undefined =>
  locations.find((l) => l.slug === slug);
