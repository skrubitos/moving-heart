import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, PHONE_HREF, COMPANY_OIB, EMAIL, EMAIL_HREF } from "@/lib/contact";
import { services } from "@/lib/services";
import { locations } from "@/lib/locations";

const Footer = () => {
  const { t } = useTranslation();

  const company = [
    { label: t("nav.whyUs"), to: "/o-nama" },
    { label: t("nav.contact"), to: "/kontakt" },
    { label: "Vozni park", to: "/vozni-park" },
    { label: "FAQ", to: "/faq" },
    { label: "Cjenik", to: "/cjenik" },
    { label: "Uvjeti poslovanja", to: "/uvjeti-poslovanja" },
  ];

  const featuredLocations = locations.slice(0, 6);

  return (
    <footer className="bg-accent text-accent-foreground pt-12 pb-20 sm:pt-16 sm:pb-12">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-base font-bold text-white">Kinesis Transport</h3>
            <p className="mt-3 text-sm opacity-60 leading-relaxed">
              Selidbe, dostava namještaja i kombi prijevoz u Splitu i okolici.
            </p>
            <ul className="mt-5 space-y-2.5">
              <li>
                <a
                  href={PHONE_HREF}
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={EMAIL_HREF}
                  className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity break-all"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <address className="not-italic">{t("footer.address")}</address>
              </li>
              <li className="text-xs opacity-40">
                {t("footer.oibLabel")}: {COMPANY_OIB}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/60">
              Naše usluge
            </h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={s.path}
                    className="text-sm text-white/85 hover:text-primary transition-colors"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/60">
              Lokacije
            </h4>
            <ul className="space-y-2">
              {featuredLocations.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={l.path}
                    className="text-sm text-white/85 hover:text-primary transition-colors"
                  >
                    {l.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-white/60">
              Tvrtka
            </h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-white/85 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

      <div className="mt-10 sm:mt-14 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 pt-5 sm:pt-6 text-center text-xs opacity-40">
          {t("footer.copyright")}
        </div>
      </div>

    </footer>
  );
};

export default Footer;
