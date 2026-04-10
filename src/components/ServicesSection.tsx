import { motion } from "framer-motion";
import { Truck, Home, Building2 } from "lucide-react";

const services = [
  {
    icon: Truck,
    title: "Dostava namještaja",
    description:
      "Profesionalno rukovanje i prijevoz namještaja iz trgovina do vašeg kućnog praga. Svaki komad tretiramo s najvećom pažnjom.",
  },
  {
    icon: Home,
    title: "Stambene selidbe",
    description:
      "Selidbe stanova i kuća bez stresa. Od pažljivog pakiranja do preciznog postavljanja – mi se brinemo za sve.",
  },
  {
    icon: Building2,
    title: "B2B Logistika",
    description:
      "Namjenska transportna rješenja za tvrtke. Pouzdana, skalabilna i prilagođena logističkim potrebama vašeg poslovanja.",
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
    <section id="services" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Što radimo
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            Naše usluge
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Sveobuhvatna logistička rješenja dizajnirana za privatne osobe i tvrtke.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="group relative bg-card border border-border rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
