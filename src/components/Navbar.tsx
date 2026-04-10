import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.whyUs"), href: "#trust" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      setOpen(false);
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Moving<span className="text-muted-foreground font-normal ml-0.5">Heart</span>
          </span>
        </a>

        {/* Desktop links + switcher + CTA */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button type="button"
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l.label}
            </button>
          ))}

          <LanguageSwitcher />

          <button type="button"
            onClick={() => scrollTo("#contact")}
            className="text-sm font-bold px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm shadow-primary/20 hover:shadow-primary/30"
          >
            {t("nav.cta")}
          </button>
        </div>

        {/* Mobile toggle */}
        <button type="button"
          className="md:hidden text-foreground p-1.5 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Izbornik"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden border-b border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <button type="button"
                  key={l.href}
                  onClick={() => scrollTo(l.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-secondary"
                >
                  {l.label}
                </button>
              ))}
              <button type="button"
                onClick={() => scrollTo("#contact")}
                className="mt-2 text-sm font-bold px-5 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center shadow-sm"
              >
                {t("nav.cta")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
