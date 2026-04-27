import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type FAQItem = { question: string; answer: string };

type FAQAccordionProps = {
  items: FAQItem[];
  title?: string;
  intro?: string;
};

const FAQAccordion = ({ items, title = "Često postavljana pitanja", intro }: FAQAccordionProps) => {
  if (!items || items.length === 0) return null;
  return (
    <section className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-foreground">{title}</h2>
        {intro && <p className="mt-3 text-muted-foreground">{intro}</p>}
        <Accordion type="single" collapsible className="mt-6">
          {items.map((item, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQAccordion;
