import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Clock, CheckCircle, Star, Quote } from "lucide-react";
import kombiImg from "../../slike/kombi.jpeg";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Osiguranje tereta",
    description: "Svaka pošiljka potpuno osigurana. Zaštita od preuzimanja do dostave.",
  },
  {
    icon: Wrench,
    title: "Moderna oprema",
    description: "Vrhunska vozila i profesionalni materijali za pakiranje.",
  },
  {
    icon: Clock,
    title: "Jamstvo točnosti",
    description: "Točna preuzimanja i dostave — poštujemo vaš raspored.",
  },
  {
    icon: CheckCircle,
    title: "Kvalificirani tim",
    description: "Obučeni stručnjaci za sigurno rukovanje i montažu namještaja.",
  },
];

const testimonials = [
  {
    name: "Marko D.",
    location: "Split",
    text: "Koristio sam Kinesis Transport za selidbu stana. Sve je prošlo besprijekorno — točni, profesionalni i iznimno pažljivi prema namještaju. Preporučam svima!",
  },
  {
    name: "Ana K.",
    location: "Menadžerica ureda, Split",
    text: "Selili smo ured s 15 zaposlenika. Kinesis je sve organizirao do detalja, namještaj montirali na novoj lokaciji isti dan. Nula stresa, nula zastoja.",
  },
  {
    name: "Ivan P.",
    location: "Trogir",
    text: "Teret je stigao neoštećen, cijena fer i transparentna. Nijednog trenutka nisam brinuo za svoju imovinu. Definitivno ću ih kontaktirati opet.",
  },
];

const STAR_COUNT = 5;

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">

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
            Sigurnost i integritet kao apsolutni prioritet
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Moderna oprema, sveobuhvatno osiguranje i iskusan tim — sve što trebate za miran transport.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

        <motion.div
          className="mt-10 rounded-2xl border border-border bg-secondary/60 p-8 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-7 w-7 text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-foreground mb-1.5">
              Potpuno osiguranje imovine — uključeno u cijenu
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              Svaki transport pokriven je policom osiguranja bez dodatnih troškova. Bilo da se radi o
              jednoj sofi ili kompletnoj selidbi ureda, vaš je teret zaštićen od oštećenja i gubitka
              tijekom cijelog putovanja.
            </p>
          </div>
        </motion.div>

        {/* Real-life transport photo — social proof */}
        <motion.div
          className="mt-14 rounded-3xl overflow-hidden relative shadow-xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <img
            src={kombiImg}
            alt="Kinesis Transport – teret sigurno spreman za prijevoz"
            className="w-full h-56 md:h-80 object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent/85 via-accent/40 to-transparent" />
          <div className="absolute inset-0 flex items-center px-10 md:px-14">
            <div>
              <p className="text-white/65 text-xs font-bold uppercase tracking-widest mb-2">
                Stvarni transport
              </p>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                Svaki teret pažljivo<br className="hidden sm:block" /> zaštićen i spreman
              </h3>
              <p className="mt-2 text-sm text-white/60 max-w-xs">
                Profesionalno pakiranje i slaganje — ništa se ne miče dok ne stigne.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Recenzije
          </span>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold text-foreground">
            Što kažu naši klijenti
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="relative bg-card border border-border rounded-2xl p-7 flex flex-col gap-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <Quote className="h-8 w-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1">
                {Array(STAR_COUNT).fill(null).map((_, si) => (
                  <Star key={si} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
