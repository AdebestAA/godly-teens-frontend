import { readdir, mkdir, stat, rename, unlink } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

const IN_DIR = "public/images/optimized";
const TMP_DIR = "public/images/opt-tmp";
const MAX_WIDTH = 800;
const QUALITY = 65;

const isWebp = (f) => /\.webp$/i.test(f);

async function main() {
  await mkdir(TMP_DIR, { recursive: true });
  const files = (await readdir(IN_DIR)).filter(isWebp).sort();

  let beforeBytes = 0;
  let afterBytes = 0;

  for (const file of files) {
    const inPath = join(IN_DIR, file);
    const tmpPath = join(TMP_DIR, file);

    const before = (await stat(inPath)).size;
    await sharp(inPath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(tmpPath);
    const after = (await stat(tmpPath)).size;

    beforeBytes += before;
    afterBytes += after;
    const kb = (n) => (n / 1024).toFixed(0).padStart(5);
    console.log(`${file}  ${kb(before)}KB -> ${kb(after)}KB`);
  }

  const mb = (n) => (n / 1024 / 1024).toFixed(1);
  console.log("\n----------------------------------------");
  console.log(`Files:      ${files.length}`);
  console.log(`Before:     ${mb(beforeBytes)}MB`);
  console.log(`After:      ${mb(afterBytes)}MB`);
  console.log(`Saved:      ${mb(beforeBytes - afterBytes)}MB (${(100 - (afterBytes / beforeBytes) * 100).toFixed(0)}% smaller)`);
  console.log(`\nOptimized files written to ${TMP_DIR}/`);
  console.log("Stop the dev server, then run: mv public/images/opt-tmp/* public/images/optimized/ && rmdir public/images/opt-tmp");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
