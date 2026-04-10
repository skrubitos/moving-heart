import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, MessageCircle, ShieldCheck, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import { scrollToSection } from "@/lib/scroll";
import kombiLogoImg from "../../slike/kombi logo.jpeg";

const trustBullets = [
  "Potpuno osiguranje tereta uključeno u cijenu",
  "Besplatna procjena ",
  "Jamstvo točnosti ",

];

const stats = [
  { value: "500+", label: "Uspješnih selidbi" },
  { value: "98%", label: "Zadovoljnih klijenata" },
  { value: "5+", label: "Godina iskustva" },
];

const panelFeatures = [
  { icon: ShieldCheck, label: "Osiguranje uključeno u cijenu", sub: "Bez doplate — potpuna zaštita" },
  { icon: Star, label: "Ocjena zadovoljstva 4.9 / 5", sub: "Na temelju 200+ recenzija" },
  { icon: Clock, label: "Dostupni 7 dana u tjednu", sub: "Odgovaramo u roku od 30 min" },
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
              Selidba bez
              <br />
              stresa i brige.
              <br />
              <span className="text-primary">Garantirano.</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
            >
              Profesionalni tim za selidbe stanova, kuća i ureda. Vaš teret je potpuno
              osiguran — mi se brinemo za sve, vi se samo uselijavate.
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
                Zatražite besplatnu ponudu
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
                  className="flex-1 sm:flex-none lg:hidden px-6 py-6 text-base font-semibold rounded-xl border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="mt-12 flex items-center gap-10 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.58 }}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-extrabold text-foreground tabular-nums">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5 leading-snug">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:flex flex-col gap-4"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-white">
              <img
                src={kombiLogoImg}
                alt="Kinesis Transport vozilo"
                className="w-full h-auto object-contain"
              />
              <div className="px-6 py-3.5 bg-secondary/60 border-t border-border flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground">Kinesis Transport d.o.o.</span>
                <span className="text-xs text-muted-foreground ml-auto">Reg. ST-KT001</span>
              </div>
            </div>

            <div className="relative bg-accent rounded-2xl p-7 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                {panelFeatures.map((item) => (
                  <div key={item.label} className="flex items-center gap-4 p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="w-9 h-9 rounded-lg bg-primary/25 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white leading-snug">{item.label}</div>
                      <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
                    </div>
                  </div>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center justify-center gap-3 w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#25D366] hover:bg-[#1fba59] transition-all duration-300 hover:shadow-lg"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pišite nam na WhatsApp
                </a>
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
