import { ReactNode } from "react";

type ContentSectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children?: ReactNode;
  variant?: "default" | "muted";
};

const ContentSection = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  variant = "default",
}: ContentSectionProps) => {
  const bg = variant === "muted" ? "bg-secondary/40" : "bg-background";
  return (
    <section id={id} className={`py-12 md:py-20 ${bg} scroll-mt-20`}>
      <div className="max-w-5xl mx-auto px-6">
        {eyebrow && (
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            {eyebrow}
          </span>
        )}
        {title && (
          <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-foreground">{title}</h2>
        )}
        {intro && <div className="mt-3 text-muted-foreground max-w-3xl">{intro}</div>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
};

export default ContentSection;
