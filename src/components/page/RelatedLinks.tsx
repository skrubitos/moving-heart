import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export type RelatedLink = {
  to: string;
  label: string;
  description?: string;
};

type RelatedLinksProps = {
  title?: string;
  eyebrow?: string;
  intro?: string;
  items: RelatedLink[];
  variant?: "default" | "muted";
};

const RelatedLinks = ({
  title = "Povezane stranice",
  eyebrow = "Možda vas zanima",
  intro,
  items,
  variant = "default",
}: RelatedLinksProps) => {
  if (!items || items.length === 0) return null;
  const bg = variant === "muted" ? "bg-secondary/40" : "bg-background";
  return (
    <section className={`py-12 md:py-16 ${bg}`}>
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-xs font-semibold tracking-widest uppercase text-primary">
          {eyebrow}
        </span>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">{title}</h2>
        {intro && <p className="mt-3 text-muted-foreground max-w-2xl">{intro}</p>}
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {items.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="group flex items-start justify-between gap-3 rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.label}
                  </div>
                  {item.description && (
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RelatedLinks;
