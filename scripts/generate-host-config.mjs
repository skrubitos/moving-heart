import { readdir, writeFile, copyFile } from "node:fs/promises";
import { join } from "node:path";

const DIST = "dist";

const files = (await readdir(DIST)).filter(
  (f) => f.endsWith(".html") && f !== "index.html" && f !== "404.html",
);

const routes = files.map((f) => f.replace(/\.html$/, ""));

const redirectsLines = [
  "# Auto-generated. Do not edit. See scripts/generate-host-config.mjs",
  "# Pretty URL handling for vite-react-ssg pre-rendered pages.",
  "# Each /<route> URL serves /<route>.html with a 200 rewrite (URL stays clean).",
  "",
  ...routes.map((r) => `/${r}\t/${r}.html\t200`),
  "",
  "# SPA fallback: anything else falls through to index.html so React Router renders NotFound.",
  "/*\t/index.html\t200",
  "",
];
await writeFile(join(DIST, "_redirects"), redirectsLines.join("\n"));

const vercelConfig = {
  cleanUrls: true,
  trailingSlash: false,
};
await writeFile(join(DIST, "vercel.json"), JSON.stringify(vercelConfig, null, 2));

await copyFile(join(DIST, "index.html"), join(DIST, "404.html"));

console.log(`[host-config] _redirects (${routes.length} routes + SPA fallback), vercel.json, 404.html generated`);
