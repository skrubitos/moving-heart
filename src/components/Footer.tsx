import { Phone, Mail, MapPin, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Truck className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Kinesis<span className="font-normal opacity-60 ml-0.5">Transport</span>
              </h3>
            </div>
            <p className="text-sm opacity-55 leading-relaxed max-w-xs">
              Profesionalne usluge prijevoza namještaja i selidbe. Potpuno osigurani, uvijek pouzdani.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 opacity-50">Brzi linkovi</h4>
            <ul className="space-y-2.5">
              {[
                { l: "Usluge", h: "#services" },
                { l: "Zašto mi", h: "#trust" },
                { l: "Kontakt", h: "#contact" },
              ].map((item) => (
                <li key={item.l}>
                  <a
                    href={item.h}
                    className="text-sm opacity-55 hover:opacity-100 hover:text-primary transition-all duration-200"
                  >
                    {item.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-5 opacity-50">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+385976754606"
                  className="flex items-center gap-3 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  +385 97 675 4606
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@kinesistransport.com"
                  className="flex items-center gap-3 text-sm opacity-55 hover:opacity-100 transition-opacity"
                >
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  info@kinesistransport.com
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
          <span>© {new Date().getFullYear()} Kinesis Transport. Sva prava pridržana.</span>
          <span>Split, Hrvatska · Dostupni 7 dana</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
