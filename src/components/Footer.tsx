import { Phone, Mail, MapPin, Truck } from "lucide-react";
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
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Truck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Moving<span className="font-normal opacity-60 ml-0.5">Heart</span>
              </h3>
            </div>
            <p className="text-sm opacity-55 leading-relaxed max-w-xs">
              {t("footer.desc")}
            </p>
          </div>

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
                <a href={PHONE_HREF} className="flex items-center gap-3 text-sm opacity-55 hover:opacity-100 transition-opacity">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:info@movingheart.hr" className="flex items-center gap-3 text-sm opacity-55 hover:opacity-100 transition-opacity">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@movingheart.hr
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-55">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Split, Hrvatska
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-40">
          <span>© {new Date().getFullYear()} Moving Heart. {t("footer.copyright")}</span>
          <span>Split, Hrvatska</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
