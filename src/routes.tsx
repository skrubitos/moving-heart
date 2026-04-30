import type { RouteRecord } from "vite-react-ssg";
import Layout from "./Layout";
import Index from "./pages/Index";
import { services } from "./lib/services";
import { locations } from "./lib/locations";

export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: <Index />, entry: "src/pages/Index.tsx" },
      {
        path: "o-nama",
        lazy: () => import("./pages/ONama"),
        entry: "src/pages/ONama.tsx",
      },
      {
        path: "kontakt",
        lazy: () => import("./pages/Kontakt"),
        entry: "src/pages/Kontakt.tsx",
      },
      {
        path: "faq",
        lazy: () => import("./pages/Faq"),
        entry: "src/pages/Faq.tsx",
      },
      {
        path: "cjenik",
        lazy: () => import("./pages/Cjenik"),
        entry: "src/pages/Cjenik.tsx",
      },
      {
        path: "uvjeti-poslovanja",
        lazy: () => import("./pages/UvjetiPoslovanja"),
        entry: "src/pages/UvjetiPoslovanja.tsx",
      },
      {
        path: "vozni-park",
        lazy: () => import("./pages/VozniPark"),
        entry: "src/pages/VozniPark.tsx",
      },
      ...services.map<RouteRecord>((s) => ({
        path: s.slug,
        entry: "src/pages/ServicePage.tsx",
        lazy: () => import("./pages/ServicePage"),
      })),
      ...locations.map<RouteRecord>((l) => ({
        path: l.slug,
        entry: "src/pages/LocationPage.tsx",
        lazy: () => import("./pages/LocationPage"),
      })),
      {
        path: "*",
        lazy: () => import("./pages/NotFound"),
        entry: "src/pages/NotFound.tsx",
      },
    ],
  },
];
