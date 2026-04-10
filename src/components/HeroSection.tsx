import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2, MessageCircle, Truck, Star, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustBullets = [
  "Potpuno osiguranje tereta uključeno u cijenu",
  "Besplatna procjena – bez obaveza",
  "Jamstvo točnosti – stižemo na vrijeme",
  "Profesionalna montaža i demontaža namještaja",
];

const stats = [
  { value: "500+", label: "Uspješnih selidbi" },
  { value: "98%", label: "Zadovoljnih klijenata" },
  { value: "5+", label: "Godina iskustva" },
];

const panelFeatures = [
  {
    icon: ShieldCheck,
    label: "Osiguranje uključeno u cijenu",
    sub: "Bez doplate — potpuna zaštita",
  },
  {
    icon: Star,
    label: "Ocjena zadovoljstva 4.9 / 5",
    sub: "Na temelju 200+ recenzija",
  },
  {
    icon: Clock,
    label: "Dostupni 7 dana u tjednu",
    sub: "Odgovaramo u roku od 30 min",
  },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
      {/* Light diagonal wash on the right half */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-secondary/40 [clip-path:polygon(8%_0%,100%_0%,100%_100%,0%_100%)] hidden lg:block" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-9rem)]">

          {/* ── Left column ── */}
          <div className="flex flex-col justify-center">

            {/* Badge */}
            <motion.span
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase rounded-full border border-primary/30 text-primary bg-primary/5"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Split i okolica · Dostupni 7 dana
            </motion.span>

            {/* Headline */}
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

            {/* Subtext */}
            <motion.p
              className="mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22 }}
            >
              Profesionalni tim za selidbe stanova, kuća i ureda. Vaš teret je potpuno
              osiguran — mi se brinemo za sve, vi se samo uselijavate.
            </motion.p>

            {/* Trust bullets */}
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

            {/* CTA buttons */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.42 }}
            >
              <Button
                size="lg"
                className="group px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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
                  <a href="tel:+385976754606">
                    <Phone className="mr-2 h-4 w-4" />
                    Nazovite
                  </a>
                </Button>

                {/* WhatsApp — visible on mobile only (panel covers desktop) */}
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-1 sm:flex-none lg:hidden px-6 py-6 text-base font-semibold rounded-xl border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                  asChild
                >
                  <a
                    href="https://wa.me/385976754606?text=Pozdrav%2C%20zainteresiran%20sam%20za%20usluge%20selidbe."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Stats bar */}
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

          {/* ── Right column — Navy trust panel (desktop only) ── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
          >
            <div className="relative bg-accent rounded-3xl p-10 overflow-hidden">
              {/* Dot-grid texture */}
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]" />
              {/* Glow spot */}
              <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/15 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                  <Truck className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  Vaš teret. Naša odgovornost.
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Svaka selidba pokrivena je policom osiguranja. Nema skrivenih
                  troškova, nema iznenađenja — samo bezbrižan transport.
                </p>

                {/* Feature rows */}
                <div className="space-y-3">
                  {panelFeatures.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/25 flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white leading-snug">{item.label}</div>
                        <div className="text-xs text-white/50 mt-0.5">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/385976754606?text=Pozdrav%2C%20zainteresiran%20sam%20za%20usluge%20selidbe."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm transition-all duration-300 hover:bg-[#1fba59] hover:shadow-lg hover:shadow-[#25D366]/30"
                >
                  <MessageCircle className="h-5 w-5" />
                  Pišite nam na WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
