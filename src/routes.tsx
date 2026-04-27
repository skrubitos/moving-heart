import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import LocationPage from "./pages/LocationPage";
import ONama from "./pages/ONama";
import Kontakt from "./pages/Kontakt";
import Faq from "./pages/Faq";
import Cjenik from "./pages/Cjenik";
import UvjetiPoslovanja from "./pages/UvjetiPoslovanja";
import { services } from "./lib/services";
import { locations } from "./lib/locations";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Index />, entry: "src/pages/Index.tsx" },
      { path: "o-nama", element: <ONama />, entry: "src/pages/ONama.tsx" },
      { path: "kontakt", element: <Kontakt />, entry: "src/pages/Kontakt.tsx" },
      { path: "faq", element: <Faq />, entry: "src/pages/Faq.tsx" },
      { path: "cjenik", element: <Cjenik />, entry: "src/pages/Cjenik.tsx" },
      {
        path: "uvjeti-poslovanja",
        element: <UvjetiPoslovanja />,
        entry: "src/pages/UvjetiPoslovanja.tsx",
      },
      ...services.map((s) => ({
        path: s.slug,
        element: <ServicePage slug={s.slug} />,
        entry: "src/pages/ServicePage.tsx",
      })),
      ...locations.map((l) => ({
        path: l.slug,
        element: <LocationPage slug={l.slug} />,
        entry: "src/pages/LocationPage.tsx",
      })),
      { path: "*", element: <NotFound />, entry: "src/pages/NotFound.tsx" },
    ],
  },
];
