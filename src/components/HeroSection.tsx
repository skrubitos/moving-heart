import { ArrowRight, Phone, CheckCircle2, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import kombiLogoImg from "../../slike/kinesis-transport-logo.jpeg";
import kombiLogoAvif from "../../slike/kinesis-transport-logo.avif";
import kombiLogoWebp from "../../slike/kinesis-transport-logo.webp";

const HeroSection = () => {
  const { t } = useTranslation();

  const trustBullets = [
    t("hero.bullet1"),
    t("hero.bullet2"),
    t("hero.bullet3"),
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-background scroll-mt-20">
      {/* Base grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

      {/* Amber dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#fef3c7_1.5px,transparent_1.5px)] bg-[size:28px_28px] opacity-50 pointer-events-none" />

      {/* Right panel tint */}
      <div className="absolute inset-y-0 right-0 w-1/2 bg-secondary/40 [clip-path:polygon(8%_0%,100%_0%,100%_100%,0%_100%)] hidden lg:block" />

      {/* Blob top-left */}
      <div className="hidden lg:block absolute -top-24 -left-24 w-[300px] h-[300px] rounded-full bg-[#f97316] opacity-[0.08] blur-[60px] pointer-events-none z-0" />

      {/* Blob bottom-right */}
      <div className="hidden lg:block absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-[#f97316] opacity-[0.06] blur-[80px] pointer-events-none z-0" />

      {/* Decorative dot strip — far left */}
      <div className="hidden lg:block absolute left-0 top-1/4 w-28 h-72 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-[size:14px_14px] opacity-60 pointer-events-none z-0" />

      {/* Decorative dot strip — far right */}
      <div className="hidden lg:block absolute right-0 top-1/3 w-28 h-72 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-[size:14px_14px] opacity-60 pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-9rem)]">

          <div className="flex flex-col justify-center">
            <span className="reveal-up reveal-d0 inline-flex items-center gap-2 self-start px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider uppercase rounded-full border border-primary/30 text-primary bg-primary/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </span>

            <h1 className="reveal-up reveal-d1 text-5xl sm:text-6xl lg:text-[3.5rem] xl:text-[4rem] font-extrabold tracking-tight leading-[1.06] text-foreground">
              {t("hero.title1")}
              <br />
              <span className="text-gradient-animated">{t("hero.title2")}</span>
            </h1>

            <p className="reveal-up reveal-d2 mt-5 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="reveal-up reveal-d3 mt-6">
              <ul className="space-y-2.5">
                {trustBullets.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-medium text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-up reveal-d4 mt-10 flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="group px-8 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <a href="#contact">
                  {t("hero.ctaPrimary")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
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
                    {t("hero.ctaPhone")}
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="px-5 py-6 rounded-xl border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5 transition-all duration-300"
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                    <MessageCircle className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="reveal-right reveal-d2 flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden border border-border shadow-2xl bg-white">
              <picture>
                <source srcSet={kombiLogoAvif} type="image/avif" />
                <source srcSet={kombiLogoWebp} type="image/webp" />
                <img
                  src={kombiLogoImg}
                  alt="Kinesis Transport kombi za selidbe i prijevoz u Splitu"
                  className="w-full h-auto object-contain"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </picture>
              <div className="px-6 py-3.5 bg-secondary/60 border-t border-border flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-xs font-semibold text-foreground">{t("hero.vehicleLabel")}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
