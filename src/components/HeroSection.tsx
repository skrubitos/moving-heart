import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { scrollToSection } from "@/lib/scroll";
import kombiLogoImg from "../../slike/kombi logo.jpeg";

const trustBullets = [
  "Besplatna procjena",
  "Pažljivo rukovanje stvarima",
  "Korektne cijene bez skrivenih troškova",
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-secondary/40 [clip-path:polygon(8%_0%,100%_0%,100%_100%,0%_100%)] hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-9rem)]">

          <div className="flex flex-col justify-center">
            <motion.span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase rounded-full border border-primary/30 text-primary bg-primary/5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Split i okolica · Dostupni 7 dana
            </motion.span>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.06] text-foreground"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Selidbe i dostava
              <br />
              <span className="text-primary">bez komplikacija</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
            >
              Nova firma iz Splita koja nudi brze i pouzdane usluge selidbi,
              dostave namještaja i prijevoza pošiljki.
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.32 }}
            >
              <ul className="space-y-2.5">
                {trustBullets.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              <Button
                size="lg"
                className="group px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => scrollToSection("contact")}
              >
                Zatraži ponudu
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none px-6 py-6 text-base font-semibold rounded-xl transition-all duration-300 hover:bg-secondary"
                  asChild
                >
                  <a href={PHONE_HREF}>
                    <Phone className="mr-2 h-4 w-4" />
                    Nazovite
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-5 py-6 rounded-xl border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                  asChild
                  title="Pišite nam na WhatsApp"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-white">
              <img
                src={kombiLogoImg}
                alt="Moving Heart vozilo"
                className="w-full h-auto object-contain"
              />
              <div className="px-6 py-3.5 bg-secondary/60 border-t border-border flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground">Dostavno vozilo</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
