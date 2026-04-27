import { SITE_URL } from "@/lib/contact";

export const buildBreadcrumbJsonLd = (
  items: { name: string; path: string }[],
) => {
  const all = [{ name: "Početna", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
};

export const buildFaqJsonLd = (items: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((it) => ({
    "@type": "Question",
    name: it.question,
    acceptedAnswer: { "@type": "Answer", text: it.answer },
  })),
});

export const buildServiceJsonLd = (params: {
  name: string;
  description: string;
  path: string;
  areaServed?: string[];
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  serviceType: params.serviceType ?? params.name,
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: (params.areaServed ?? ["Split", "Solin", "Kaštela", "Trogir", "Omiš"]).map(
    (city) => ({ "@type": "City", name: city }),
  ),
  url: `${SITE_URL}${params.path}`,
});
