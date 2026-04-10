import { motion } from "framer-motion";
import { ShieldCheck, Wrench, Clock, CheckCircle } from "lucide-react";

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Osiguranje tereta",
    description: "Svaka pošiljka je u potpunosti osigurana. Vaše su stvari zaštićene od preuzimanja do dostave.",
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
    title: "Obučeni stručnjaci",
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
            Povjerenje i sigurnost na prvom mjestu
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Sigurnost vašeg tereta naš je glavni prioritet. Kombiniramo modernu opremu sa sveobuhvatnim osiguranjem za potpuni mir.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="mx-auto mb-5 inline-flex items-center justify-center w-16 h-16 rounded-full border-2 border-border transition-all duration-300 group-hover:border-foreground group-hover:bg-primary group-hover:text-primary-foreground">
                <point.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
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
            <h3 className="text-xl font-bold text-foreground mb-2">Potpuno osiguranje tereta uključeno</h3>
            <p className="text-muted-foreground leading-relaxed">
              Svaki transport dolazi sa sveobuhvatnim osiguranjem tereta bez dodatnih troškova. Bilo da se radi o jednoj sofi ili kompletnoj selidbi ureda, vaša je roba pokrivena od oštećenja i gubitka tijekom cijelog putovanja.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
