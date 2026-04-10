import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Clock, CheckCircle } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Osiguranje tereta",
    description: "Svaka pošiljka je u potpunosti osigurana. Vaš je inventar zaštićen od preuzimanja do dostave.",
  },
  {
    icon: Wrench,
    title: "Moderna oprema",
    description: "Vrhunska vozila i profesionalni materijali za pakiranje za maksimalnu sigurnost.",
  },
  {
    icon: Clock,
    title: "Jamstvo točnosti",
    description: "Poštujemo vaš raspored. Točna preuzimanja i dostave, svaki put.",
  },
  {
    icon: CheckCircle,
    title: "Kvalificirani tim profesionalaca",
    description: "Naš tim je u potpunosti obučen za sigurno rukovanje, demontažu i montažu namještaja.",
  },
];

const TrustSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Zašto odabrati nas
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Sigurnost i integritet vašeg tereta kao apsolutni prioritet
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Sigurnost vašeg tereta naš je glavni prioritet. Kombiniramo modernu opremu sa sveobuhvatnim osiguranjem za potpuni mir.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-row md:flex-col items-center md:text-center gap-5 group"
            >
              <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-border transition-all duration-300 group-hover:border-primary group-hover:bg-primary/5 text-muted-foreground group-hover:text-primary">
                <point.icon className="h-6 w-6 md:h-7 md:h-7" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">{point.title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insurance banner */}
        <motion.div
          className="mt-16 rounded-2xl border border-border bg-secondary/50 p-8 md:p-12 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <ShieldCheck className="h-12 w-12 text-foreground flex-shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-foreground mb-2">Potpuno osiguranje imovine uključeno</h3>
            <p className="text-muted-foreground leading-relaxed">
              Svaki transport pokriven je policom osiguranja imovine bez dodatnih troškova. Bilo da se radi o jednoj sofi ili kompletnoj selidbi ureda, vaš je teret pokriven od oštećenja i gubitka tijekom cijelog putovanja.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
