import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_HREF } from "@/lib/contact";

type CTABandProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaTo?: string;
};

const CTABand = ({
  title = "Trebate selidbu ili prijevoz?",
  subtitle = "Javite nam se za besplatnu procjenu — odgovaramo u roku od 30 minuta.",
  ctaLabel = "Zatraži ponudu",
  ctaTo = "/kontakt",
}: CTABandProps) => {
  return (
    <section className="py-12 md:py-16 bg-secondary/40">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl bg-accent text-accent-foreground px-6 py-8 md:px-12 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
            <p className="mt-1.5 text-sm text-white/70 max-w-lg">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              to={ctaTo}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/20 text-white font-semibold text-sm hover:bg-white/5 transition-all"
            >
              <Phone className="h-4 w-4" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABand;
