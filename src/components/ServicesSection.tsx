import { motion } from "framer-motion";
import { Truck, Home, Building2, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Dostava namještaja",
    benefit: "Iz trgovine do praga u jedan dan",
    description:
      "Profesionalno rukovanje i prijevoz namještaja. Svaki komad pažljivo zaštićen i dostavljen bez ogrebotina.",
  },
  {
    icon: Home,
    title: "Selidbe kućanstava",
    benefit: "Cijela selidba — jedan poziv",
    description:
      "Od stručnog pakiranja do preciznog postavljanja na novoj adresi. Preseljenje bez stresa i gužve.",
  },
  {
    icon: Building2,
    title: "B2B Logistika",
    benefit: "Minimalni zastoj u poslovanju",
    description:
      "Pouzdana i prilagođena transportna rješenja za tvrtke svih veličina. Diskretno, brzo, bez iznenađenja.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
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
            Cjelovita logistička rješenja za fizičke osobe i poslovne subjekte —
            sve pod jednim krovom.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              className="group relative bg-card border border-border rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/25 overflow-hidden"
            >
              {/* Orange left-border accent on hover */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
                <service.icon className="h-6 w-6" />
              </div>

              {/* Benefit pill */}
              <span className="mb-3 self-start text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
                {service.benefit}
              </span>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                {service.description}
              </p>

              <button
                type="button"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Zatražite ponudu
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          className="mt-14 rounded-2xl bg-accent px-8 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">Trebate nešto specifično?</p>
            <h3 className="text-xl font-bold text-white">
              Prilagođavamo se vašim potrebama.
            </h3>
          </div>
          <button
            type="button"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
