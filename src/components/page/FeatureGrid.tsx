import { CheckCircle2 } from "lucide-react";

type FeatureGridProps = {
  items: { title: string; description?: string }[];
  columns?: 2 | 3;
};

const FeatureGrid = ({ items, columns = 3 }: FeatureGridProps) => {
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <ul className={`grid ${cols} gap-4`}>
      {items.map((it, idx) => (
        <li
          key={idx}
          className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-foreground">{it.title}</h3>
              {it.description && (
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.description}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default FeatureGrid;
