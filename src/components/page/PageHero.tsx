import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/contact";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

type PageHeroProps = {
  badge?: string;
  title: string;
  subtitle?: ReactNode;
  bullets?: string[];
  breadcrumbs?: Crumb[];
  ctaPrimaryLabel?: string;
  ctaPrimaryTo?: string;
};

const PageHero = ({
  badge,
  title,
  subtitle,
  bullets,
  breadcrumbs,
  ctaPrimaryLabel = "Zatraži ponudu",
  ctaPrimaryTo = "/kontakt",
}: PageHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-background pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(#fef3c7_1.5px,transparent_1.5px)] bg-[size:28px_28px] opacity-40 pointer-events-none" />
      <div className="hidden lg:block absolute -top-20 -left-20 w-[260px] h-[260px] rounded-full bg-[#f97316] opacity-[0.07] blur-[60px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <div className="mb-6">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}

        {badge && (
          <span className="reveal-up inline-flex items-center gap-2 px-3 py-1 mb-5 text-[11px] font-semibold tracking-wider uppercase rounded-full border border-primary/30 text-primary bg-primary/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            {badge}
          </span>
        )}

        <h1 className="reveal-up reveal-d1 text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.08] text-foreground">
          {title}
        </h1>

        {subtitle && (
          <p className="reveal-up reveal-d2 mt-5 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}

        {bullets && bullets.length > 0 && (
          <ul className="mt-6 grid sm:grid-cols-2 gap-2.5 max-w-2xl">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm font-medium text-foreground">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="px-7 py-6 text-base font-bold rounded-xl shadow-lg shadow-primary/25">
            <Link to={ctaPrimaryTo}>
              {ctaPrimaryLabel}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <div className="flex gap-3">
            <Button variant="outline" size="lg" className="px-6 py-6 text-base font-semibold rounded-xl" asChild>
              <a href={PHONE_HREF}>
                <Phone className="mr-2 h-4 w-4" />
                Nazovite
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-5 py-6 rounded-xl border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/5"
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
