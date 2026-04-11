import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.whyUs"), href: "#trust" },
    { label: t("nav.contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-accent text-accent-foreground pt-8 pb-20 sm:pt-16 sm:pb-16">
      <div className="max-w-4xl mx-auto px-6">

        {/* ── MOBILE: 2-column compact layout ─────────────────────── */}
        <div className="sm:hidden grid grid-cols-2 gap-4 text-center">

          {/* Brzi linkovi */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-50">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-1">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm opacity-55 hover:opacity-100 hover:text-primary transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 opacity-50">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-1.5">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-1.5 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kinesistransport.hr"
                  className="flex items-center justify-center gap-1.5 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                  <span className="break-all">info@kinesistransport.hr</span>
                </a>
              </li>
              <li className="flex items-center justify-center gap-1.5 text-sm opacity-55">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                {t("footer.city")}
              </li>
            </ul>
          </div>

        </div>

        {/* ── DESKTOP: 2-column layout ──────────────────────────────── */}
        <div className="hidden sm:grid sm:grid-cols-2 sm:gap-12 max-w-lg mx-auto text-center sm:text-left">

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 opacity-50">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2.5">
              {links.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm opacity-55 hover:opacity-100 hover:text-primary transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 opacity-50">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kinesistransport.hr"
                  className="flex items-center gap-2 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@kinesistransport.hr
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-55">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                {t("footer.city")}
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* Full-width border + copyright */}
      <div className="mt-8 sm:mt-12 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 pt-4 sm:pt-8 text-center text-xs opacity-40">
          {t("footer.copyright")}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
