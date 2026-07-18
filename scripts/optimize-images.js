// One-off image optimizer for the media/gallery sections.
// Reads originals from public/images, writes optimized WebPs to public/images/optimized.
// Originals are left untouched. Run with: node scripts/optimize-images.js
import { readdir, mkdir, stat } from "node:fs/promises";
import { join, parse } from "node:path";
import sharp from "sharp";

const SRC_DIR = "public/images";
const OUT_DIR = "public/images/optimized";
const MAX_WIDTH = 1200;
const QUALITY = 78;

const isJpg = (f) => /\.(jpe?g)$/i.test(f);

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const files = (await readdir(SRC_DIR)).filter(isJpg).sort();

  let originalBytes = 0;
  let optimizedBytes = 0;

  for (const file of files) {
    const inPath = join(SRC_DIR, file);
    const outPath = join(OUT_DIR, `${parse(file).name}.webp`);

    const before = (await stat(inPath)).size;
    await sharp(inPath)
      .rotate() // respect EXIF orientation
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    const after = (await stat(outPath)).size;

    originalBytes += before;
    optimizedBytes += after;
    const kb = (n) => (n / 1024).toFixed(0).padStart(5);
    console.log(`${file}  ${kb(before)}KB -> ${kb(after)}KB  ${parse(outPath).name}.webp`);
  }

  const mb = (n) => (n / 1024 / 1024).toFixed(1);
  console.log("\n----------------------------------------");
  console.log(`Files:      ${files.length}`);
  console.log(`Original:   ${mb(originalBytes)}MB`);
  console.log(`Optimized:  ${mb(optimizedBytes)}MB`);
  console.log(`Saved:      ${mb(originalBytes - optimizedBytes)}MB (${(100 - (optimizedBytes / originalBytes) * 100).toFixed(0)}% smaller)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});