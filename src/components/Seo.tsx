import { Head } from "vite-react-ssg";
import { useTranslation } from "react-i18next";
import { SITE_URL } from "@/lib/contact";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  keywords?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noIndex?: boolean;
};

const DEFAULT_TITLE = "Selidbe Split i kombi prijevoz | Kinesis Transport";
const DEFAULT_DESCRIPTION =
  "Kinesis Transport — selidbe, kombi prijevoz i dostava namještaja u Splitu i okolici. Brzo, sigurno, korektne cijene. Besplatna procjena.";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

const Seo = ({
  title,
  description,
  path = "/",
  image = DEFAULT_IMAGE,
  type = "website",
  keywords,
  jsonLd,
  noIndex = false,
}: SeoProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("en") ? "en" : "hr";
  const ogLocale = lang === "en" ? "en_US" : "hr_HR";
  const ogLocaleAlt = lang === "en" ? "hr_HR" : "en_US";

  const fullTitle = title ?? DEFAULT_TITLE;
  const fullDescription = description ?? DEFAULT_DESCRIPTION;
  const url = `${SITE_URL}${path}`;

  const structuredData = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Head>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <link rel="canonical" href={url} />

      <meta property="og:locale" content={ogLocale} />
      <meta property="og:locale:alternate" content={ogLocaleAlt} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kinesis Transport" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />

      {structuredData.map((data, idx) => (
        <script key={idx} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Head>
  );
};

export default Seo;
