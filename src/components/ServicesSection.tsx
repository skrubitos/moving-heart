import { motion } from "framer-motion";
import { Truck, Home, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Dostava namještaja",
    description:
      "Profesionalno rukovanje i prijevoz namještaja iz trgovina do vašeg kućnog praga. Svaki komad tretiramo s najvećom pažnjom.",
  },
  {
    icon: Home,
    title: "Selidbe kućanstava",
    description:
      "Preseljenje vašeg doma bez stresa – od stručnog pakiranja do preciznog postavljanja.",
  },
  {
    icon: Building2,
    title: "B2B Logistika",
    description:
      "Pouzdana i prilagođena transportna rješenja za vaše poslovanje.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Djelatnosti
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Naše usluge
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Cjelovita logistička rješenja prilagođena potrebama građana i poslovnih subjekata.
          </p>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative flex-shrink-0 w-[85%] md:w-full snap-center bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex flex-row md:flex-col items-start gap-4 md:gap-0">
                <div className="mb-0 md:mb-6 inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-5 w-5 md:h-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed line-clamp-2 md:line-clamp-none">
                    {service.description}
                  </p>
                </div>
              </div>
              <Button variant="link" className="mt-4 p-0 h-auto font-semibold text-primary group-hover:gap-2 transition-all" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Zatražite ponudu <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
