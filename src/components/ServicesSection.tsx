import { motion } from "framer-motion";
import { Truck, Home, Package, MoreHorizontal, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const services = [
  {
    icon: Home,
    title: "Selidbe",
    benefit: "Stan, kuća, poslovni prostor",
    description:
      "Selidbe stanova, kuća i manjih poslovnih prostora. Pomažemo kod utovara i istovara te pazimo na sigurnost vaših stvari.",
  },
  {
    icon: Truck,
    title: "Dostava namještaja",
    benefit: "Iz trgovine do vašeg doma",
    description:
      "Preuzimanje iz trgovine ili skladišta i dostava na vašu adresu. Po dogovoru unos u stan ili kuću.",
  },
  {
    icon: Package,
    title: "Prijevoz pošiljki",
    benefit: "Grad i okolica",
    description:
      "Brzi prijevoz paketa, robe i opreme na području grada i okolice.",
  },
  {
    icon: MoreHorizontal,
    title: "Ostalo",
    benefit: "Po dogovoru",
    description:
      "Prijevoz pića, građevinskog materijala i sličnih stvari prema dogovoru.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Djelatnosti
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            Što možemo učiniti za vas
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Selidbe, dostava i prijevoz — sve po dogovoru i bez komplikacija.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="group relative bg-card border border-border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/25 overflow-hidden"
            >
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <service.icon className="h-6 w-6" />
              </div>

              <span className="mb-3 self-start text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                {service.benefit}
              </span>

              <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{service.description}</p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                Zatraži ponudu
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-2xl bg-accent px-8 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              Trebate nešto specifično?
            </p>
            <h3 className="text-xl font-bold text-white">Prilagođavamo se vašim potrebama.</h3>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02]"
          >
            Kontaktirajte nas
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;
