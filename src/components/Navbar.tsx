import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Truck, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<"services" | "locations" | null>(null);
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  const goToContact = () => {
    setOpen(false);
    if (isHome) {
      const el = document.getElementById("contact");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    navigate("/kontakt");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <Truck className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground">
            Kinesis<span className="text-muted-foreground font-normal ml-0.5">Transport</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("services")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpenDropdown(openDropdown === "services" ? null : "services")}
            >
              {t("nav.services")}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {openDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2"
                >
                  <ul className="min-w-[220px] bg-background border border-border rounded-xl shadow-lg p-2">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          to={s.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors"
                        >
                          {s.navLabel}
                        </Link>
                      </li>
                    ))}
                    <li className="border-t border-border mt-1 pt-1">
                      <Link
                        to="/cjenik"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                      >
                        {t("nav.pricing")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/vozni-park"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-3 py-2 rounded-lg text-sm font-semibold text-primary hover:bg-primary/5 transition-colors"
                      >
                        {t("nav.vehicleFleet")}
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown("locations")}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setOpenDropdown(openDropdown === "locations" ? null : "locations")}
            >
              {t("nav.locations")}
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            <AnimatePresence>
              {openDropdown === "locations" && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-0 top-full pt-2"
                >
                  <ul className="min-w-[220px] bg-background border border-border rounded-xl shadow-lg p-2">
                    {locations.map((l) => (
                      <li key={l.slug}>
                        <Link
                          to={l.path}
                          onClick={() => setOpenDropdown(null)}
                          className="block px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors"
                        >
                          {l.navLabel}
                          {l.isIsland && (
                            <span className="ml-2 text-[10px] uppercase tracking-wider text-muted-foreground">
                              otok
                            </span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/o-nama"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.whyUs")}
          </Link>

          <Link
            to="/faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.faq")}
          </Link>

          <Link
            to="/kontakt"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {t("nav.contact")}
          </Link>

          <LanguageSwitcher />

          <button
            type="button"
            onClick={goToContact}
            className="text-sm font-bold px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-sm shadow-primary/20 hover:shadow-primary/30"
          >
            {t("nav.cta")}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden text-foreground p-1.5 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={t("nav.menu")}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-b border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              <details className="group">
                <summary className="flex items-center justify-between text-sm font-semibold text-foreground py-2.5 px-3 rounded-lg hover:bg-secondary cursor-pointer list-none">
                  {t("nav.services")}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-1 ml-3 border-l border-border pl-3 flex flex-col gap-0.5">
                  {services.map((s) => (
                    <li key={s.slug}>
                      <Link
                        to={s.path}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-2 rounded hover:bg-secondary transition-colors"
                      >
                        {s.navLabel}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/cjenik"
                      onClick={() => setOpen(false)}
                      className="block text-sm font-semibold text-primary py-1.5 px-2 rounded hover:bg-primary/5 transition-colors"
                    >
                      {t("nav.pricing")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vozni-park"
                      onClick={() => setOpen(false)}
                      className="block text-sm font-semibold text-primary py-1.5 px-2 rounded hover:bg-primary/5 transition-colors"
                    >
                      {t("nav.vehicleFleet")}
                    </Link>
                  </li>
                </ul>
              </details>

              <details className="group">
                <summary className="flex items-center justify-between text-sm font-semibold text-foreground py-2.5 px-3 rounded-lg hover:bg-secondary cursor-pointer list-none">
                  {t("nav.locations")}
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <ul className="mt-1 ml-3 border-l border-border pl-3 flex flex-col gap-0.5">
                  {locations.map((l) => (
                    <li key={l.slug}>
                      <Link
                        to={l.path}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-foreground py-1.5 px-2 rounded hover:bg-secondary transition-colors"
                      >
                        {l.navLabel}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>

              <Link
                to="/o-nama"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-secondary"
              >
                {t("nav.whyUs")}
              </Link>
              <Link
                to="/faq"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-secondary"
              >
                {t("nav.faq")}
              </Link>
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2.5 px-3 rounded-lg hover:bg-secondary"
              >
                {t("nav.contact")}
              </Link>

              <button
                type="button"
                onClick={goToContact}
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
