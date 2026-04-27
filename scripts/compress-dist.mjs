import { readdir, readFile, writeFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { gzipSync, brotliCompressSync, constants } from "node:zlib";

const DIST = "dist";
const EXTS = [".html", ".css", ".js", ".json", ".svg", ".xml", ".webmanifest", ".txt"];
const MIN_SIZE = 1024;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let count = 0;
let originalTotal = 0;
let gzTotal = 0;
let brTotal = 0;

for await (const file of walk(DIST)) {
  if (file.endsWith(".gz") || file.endsWith(".br")) continue;
  if (!EXTS.some((ext) => file.endsWith(ext))) continue;

  const s = await stat(file);
  if (s.size < MIN_SIZE) continue;

  const buf = await readFile(file);
  const gz = gzipSync(buf, { level: 9 });
  const br = brotliCompressSync(buf, {
    params: { [constants.BROTLI_PARAM_QUALITY]: 11 },
  });

  await writeFile(`${file}.gz`, gz);
  await writeFile(`${file}.br`, br);

  originalTotal += s.size;
  gzTotal += gz.length;
  brTotal += br.length;
  count++;
}

const kb = (n) => `${(n / 1024).toFixed(1)} KiB`;
console.log(
  `[compress] ${count} files | original ${kb(originalTotal)} → gzip ${kb(gzTotal)} / brotli ${kb(brTotal)}`,
);
