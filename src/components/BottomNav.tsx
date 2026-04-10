import { useEffect, useState } from "react";
import { Home, List, Info, FileText } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

type SectionId = "hero" | "services" | "trust" | "contact";

const navItems: { id: SectionId; label: string; icon: React.ElementType }[] = [
  { id: "hero", label: "Početna", icon: Home },
  { id: "services", label: "Usluge", icon: List },
  { id: "trust", label: "Zašto mi", icon: Info },
];

const BottomNav = () => {
  const [active, setActive] = useState<SectionId>("hero");

  useEffect(() => {
    // Hero: track via scroll position — no id needed
    const onScroll = () => {
      if (window.scrollY < 120) setActive("hero");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Other sections: Intersection Observer
    const observed: SectionId[] = ["services", "trust", "contact"];
    const observers = observed.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        // Fire when section occupies the middle band of the viewport
        { rootMargin: "-35% 0px -35% 0px", threshold: 0 },
      );
      obs.observe(el);
      return obs;
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observers.forEach((o) => o?.disconnect());
    };
  }, []);

  const handleNav = (id: SectionId) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 sm:hidden h-16 bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.08)] flex items-center justify-around px-1">
      {navItems.map(({ id, label, icon: Icon }) => {
        const isActive = active === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => handleNav(id)}
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors duration-200 ${
              isActive ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-5 w-5" />
            <span className="text-[10px] font-semibold leading-none">{label}</span>
          </button>
        );
      })}

      {/* CTA — always primary styled, subtle active glow when at contact */}
      <button
        type="button"
        onClick={() => scrollToSection("contact")}
        className="flex flex-col items-center justify-center flex-1 h-full"
      >
        <div
          className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl transition-all duration-200 ${
            active === "contact"
              ? "bg-primary shadow-lg shadow-primary/30"
              : "bg-primary/90"
          }`}
        >
          <FileText className="h-4 w-4 text-white" />
          <span className="text-[11px] font-bold text-white">Ponuda</span>
        </div>
      </button>
    </nav>
  );
};

export default BottomNav;
