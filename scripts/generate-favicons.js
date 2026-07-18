// Generates favicon / app-icon PNGs from public/logo.png.
// The source logo is a circular badge on a square green background, so a
// circular mask is applied to keep the corners transparent.
// Run with: node scripts/generate-favicons.js
import { mkdir, stat } from "node:fs/promises";
import sharp from "sharp";

const SRC = "public/logo.png";
const OUT_DIR = "public";

const TARGETS = [
  { size: 32, name: "favicon-32.png" },
  { size: 180, name: "apple-touch-icon.png" },
  { size: 192, name: "icon-192.png" },
  { size: 512, name: "icon-512.png" },
];

const circleMask = (size) =>
  Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#fff"/></svg>`,
  );

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const src = (await stat(SRC)).size;

  for (const { size, name } of TARGETS) {
    await sharp(SRC)
      .resize(size, size, { fit: "cover" })
      .composite([{ input: circleMask(size), blend: "dest-in" }])
      .png({ compressionLevel: 9 })
      .toFile(`${OUT_DIR}/${name}`);
    const out = (await stat(`${OUT_DIR}/${name}`)).size;
    console.log(`${name.padEnd(22)} ${size}x${size}  ${(out / 1024).toFixed(1)}KB`);
  }

  console.log(`\nsource: ${(src / 1024 / 1024).toFixed(2)}MB (${SRC})`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});