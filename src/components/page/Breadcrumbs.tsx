import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export type Crumb = { label: string; to?: string };

const Breadcrumbs = ({ items }: { items: Crumb[] }) => {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1 hover:text-primary transition-colors"
            aria-label="Početna"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Početna</span>
          </Link>
        </li>
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 opacity-60" />
              {item.to && !isLast ? (
                <Link to={item.to} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground font-medium" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
