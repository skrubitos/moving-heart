import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Kinesis<span className="font-normal opacity-60 ml-1">Transport</span>
            </h3>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              Profesionalne usluge prijevoza namještaja i selidbe. Potpuno osigurani, uvijek pouzdani.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Brzi linkovi</h4>
            <ul className="space-y-2">
              {[{ l: "Usluge", h: "#services" }, { l: "Zašto mi", h: "#trust" }, { l: "Kontakt", h: "#contact" }].map((item) => (
                <li key={item.l}>
                  <a
                    href={item.h}
                    className="text-sm opacity-60 hover:opacity-100 transition-opacity"
                  >
                    {item.l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-60">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm opacity-60">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +385 97 675 4606
              </li>
              <li className="flex items-center gap-3 text-sm opacity-60">
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@kinesistransport.com
              </li>
              <li className="flex items-center gap-3 text-sm opacity-60">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                Split, Hrvatska
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-xs opacity-40">
          © {new Date().getFullYear()} Kinesis Transport. Sva prava pridržana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
