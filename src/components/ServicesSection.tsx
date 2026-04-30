import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Truck, Home, Package, MoreHorizontal, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const AUTOPLAY_INTERVAL = 4000;

type ServiceKey = "moving" | "furniture" | "parcels" | "other";

const serviceIcons: Record<ServiceKey, React.ElementType> = {
  moving: Home,
  furniture: Truck,
  parcels: Package,
  other: MoreHorizontal,
};

const serviceKeys: ServiceKey[] = ["moving", "furniture", "parcels", "other"];

const ServiceCard = ({ serviceKey }: { serviceKey: ServiceKey }) => {
  const { t } = useTranslation();
  const Icon = serviceIcons[serviceKey];
  return (
    <div className="group relative bg-card border border-border rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:border-primary/25 overflow-hidden">
      <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-primary scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:shadow-lg group-hover:shadow-primary/25">
        <Icon className="h-6 w-6" />
      </div>
      <span className="mb-3 self-start text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-primary/8 text-primary border border-primary/15">
        {t(`services.items.${serviceKey}.benefit`)}
      </span>
      <h3 className="text-xl font-bold text-foreground mb-2">{t(`services.items.${serviceKey}.title`)}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t(`services.items.${serviceKey}.description`)}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-3 transition-all duration-300"
      >
        {t("services.cta")}
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};

const MobileCarousel = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const userSwiped = useRef(false);

  const goTo = (index: number, dir: number) => {
    setDirection(dir);
    setCurrent(index);
  };

  const next = (byUser = false) => {
    if (byUser) userSwiped.current = true;
    goTo((current + 1) % serviceKeys.length, 1);
  };

  const prev = (byUser = false) => {
    if (byUser) userSwiped.current = true;
    goTo((current - 1 + serviceKeys.length) % serviceKeys.length, -1);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      if (!userSwiped.current) {
        setDirection(1);
        setCurrent((c) => (c + 1) % serviceKeys.length);
      }
      userSwiped.current = false;
      startAutoplay();
    }, AUTOPLAY_INTERVAL);
  };

  useEffect(() => {
    startAutoplay();
    return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next(true) : prev(true);
    touchStartX.current = null;
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <div className="sm:hidden">
      <div className="relative overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            <ServiceCard serviceKey={serviceKeys[current]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {serviceKeys.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={t("services.cardLabel", { n: i + 1 })}
            onClick={() => { goTo(i, i > current ? 1 : -1); userSwiped.current = true; }}
            className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/40"}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {t("services.badge")}
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-foreground">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            {t("services.subtitle")}
          </p>
        </div>

        <MobileCarousel />

        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceKeys.map((key) => (
            <div key={key}>
              <ServiceCard serviceKey={key} />
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-accent px-8 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-1">
              {t("services.specific")}
            </p>
            <h3 className="text-xl font-bold text-white">{t("services.adapt")}</h3>
          </div>
          <a
            href="#contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02]"
          >
            {t("services.contactUs")}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
