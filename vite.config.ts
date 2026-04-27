import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return undefined;
          if (id.includes("react-router") || id.includes("/react-dom/") || id.includes("/react/")) {
            return "react-vendor";
          }
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("@radix-ui")) return "ui-vendor";
          if (id.includes("@tanstack/react-query") || id.includes("@tanstack/query-core")) return "query";
          if (id.includes("i18next") || id.includes("react-i18next")) return "i18n";
          return undefined;
        },
      },
    },
  },
}));
