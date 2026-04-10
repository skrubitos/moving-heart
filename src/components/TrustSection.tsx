import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Banknote, Heart, User, ChevronDown } from "lucide-react";
import kombiImg from "../../slike/kombi.jpeg";

const trustPoints = [
  {
    icon: Clock,
    title: "Brz i jednostavan dogovor",
    description: "Javite nam se, dogovorimo termin i dolazimo na vrijeme.",
  },
  {
    icon: Heart,
    title: "Fleksibilni termini",
    description: "Radimo 7 dana u tjednu i prilagođavamo se vašem rasporedu.",
  },
  {
    icon: Banknote,
    title: "Korektne cijene",
    description: "Bez skrivenih troškova — cijena je ono što se dogovorimo.",
  },
  {
    icon: ShieldCheck,
    title: "Pažljivo rukovanje stvarima",
    description: "Svaki predmet tretiramo s pažnjom kao da je naš vlastiti.",
  },
  {
    icon: User,
    title: "Individualan pristup",
    description: "Svaki posao je drugačiji — prilagođavamo se vašim potrebama.",
  },
];

const AccordionItem = ({
  point,
  isOpen,
  onToggle,
}: {
  point: (typeof trustPoints)[number];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <div className="border border-border rounded-2xl bg-card overflow-hidden">
    <button
      type="button"
      className="w-full flex items-center gap-4 px-5 py-4 text-left"
      onClick={onToggle}

    >
      <div
        className={`inline-flex items-center justify-center w-10 h-10 rounded-full border-2 flex-shrink-0 transition-colors duration-300 ${
          isOpen
            ? "border-primary/30 bg-primary/5 text-primary"
            : "border-border text-muted-foreground"
        }`}
      >
        <point.icon className="h-5 w-5" />
      </div>
      <span className="flex-1 text-sm font-bold text-foreground">{point.title}</span>
      <ChevronDown
        className={`h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    <div
      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
      }`}
    >
      <div className="overflow-hidden">
        <p className="px-5 pb-4 text-xs text-muted-foreground leading-relaxed">
          {point.description}
        </p>
      </div>
    </div>
  </div>
);

const TrustSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

        {/* O nama */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                O nama
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
                Tko smo mi
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-sm md:text-base">
                Mi smo nova firma specijalizirana za selidbe i prijevoz. Fokus nam je na
                jednostavnom dogovoru, dolasku na vrijeme i pažljivom rukovanju stvarima.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                Iako smo tek krenuli, svaki posao odrađujemo maksimalno profesionalno jer
                nam je cilj dugoročno zadovoljstvo klijenata.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-border shadow-xl">
              <img
                src={kombiImg}
                alt="Moving Heart – vozilo"
                className="w-full h-56 md:h-72 object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* Zašto mi */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Zašto odabrati nas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            Kako radimo
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Jednostavan dogovor, transparentne cijene i pažljivo rukovanje — to je naš način rada.
          </p>
        </motion.div>

        {/* Mobile accordion */}
        <div className="sm:hidden space-y-2">
          {trustPoints.map((point, i) => (
            <AccordionItem
              key={point.title}
              point={point}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 bg-card"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-full border-2 border-border group-hover:border-primary/30 group-hover:bg-primary/5 text-muted-foreground group-hover:text-primary transition-all duration-300">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-1.5">{point.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
