import { useEffect, useState } from "react";
import { Home, List, Info, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

type SectionId = "hero" | "services" | "trust" | "contact";

const BottomNav = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const [active, setActive] = useState<SectionId>("hero");

  const navItems: { id: SectionId; label: string; icon: React.ElementType }[] = [
    { id: "hero", label: t("bottomNav.home"), icon: Home },
    { id: "services", label: t("bottomNav.services"), icon: List },
    { id: "trust", label: t("bottomNav.whyUs"), icon: Info },
  ];

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => { if (window.scrollY < 120) setActive("hero"); };
    window.addEventListener("scroll", onScroll, { passive: true });

    const observed: SectionId[] = ["services", "trust", "contact"];
    const observers = observed.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o?.disconnect());
    };
  }, [isHome]);

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden h-16 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] flex items-center justify-around px-1">
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = isHome && active === id;
        return isHome ? (
          <a
            key={id}
            href={`#${id}`}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-none">{label}</span>
          </a>
        ) : (
          <Link
            key={id}
            to={`/#${id}`}
            className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 text-muted-foreground"
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-none">{label}</span>
          </Link>
        );
      })}

      {/* CTA */}
      {isHome ? (
        <a
          href="#contact"
          className="flex flex-col items-center justify-center flex-1 h-full"
        >
          <div
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 ${
              active === "contact" ? "bg-primary shadow-lg shadow-primary/30" : "bg-primary/90"
            }`}
          >
            <FileText className="h-4 w-4 text-white" />
            <span className="text-[11px] font-bold text-white">{t("bottomNav.quote")}</span>
          </div>
        </a>
      ) : (
        <Link
          to="/kontakt"
          className="flex flex-col items-center justify-center flex-1 h-full"
        >
          <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-primary/90 transition-all duration-200">
            <FileText className="h-4 w-4 text-white" />
            <span className="text-[11px] font-bold text-white">{t("bottomNav.quote")}</span>
          </div>
        </Link>
      )}

      {/* Language switcher — vertical flags */}
      <div className="flex flex-col items-center justify-center flex-shrink-0 px-2 h-full">
        <LanguageSwitcher vertical />
      </div>
    </nav>
  );
};

export default BottomNav;
