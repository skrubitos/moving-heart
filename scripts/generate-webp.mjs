import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const SRC = "slike";

async function convertOne(file) {
  const full = join(SRC, file);
  const ext = extname(file).toLowerCase();
  if (ext !== ".jpeg" && ext !== ".jpg" && ext !== ".png") return null;

  const base = file.slice(0, -ext.length);
  const webpPath = join(SRC, `${base}.webp`);
  const avifPath = join(SRC, `${base}.avif`);

  const original = await stat(full);

  const webpBuf = await sharp(full).webp({ quality: 82, effort: 6 }).toBuffer();
  const avifBuf = await sharp(full).avif({ quality: 60, effort: 6 }).toBuffer();

  await sharp(webpBuf).toFile(webpPath);
  await sharp(avifBuf).toFile(avifPath);

  return {
    file,
    original: original.size,
    webp: webpBuf.length,
    avif: avifBuf.length,
  };
}

const files = await readdir(SRC);
const results = [];
for (const f of files) {
  const r = await convertOne(f);
  if (r) results.push(r);
}

const kb = (n) => `${(n / 1024).toFixed(1)} KiB`;
for (const r of results) {
  console.log(
    `[images] ${r.file}: orig ${kb(r.original)} → webp ${kb(r.webp)} / avif ${kb(r.avif)}`,
  );
}
