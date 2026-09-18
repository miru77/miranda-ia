/**
 * Builds the brand PNGs from the SVGs under public/brand/.
 *
 * The SVGs are the source of truth: to change the mark, edit the SVG and run
 * `node scripts/generar-marca.mjs` again. Never the other way round.
 *
 * The tab icon is NOT built here — Next serves src/app/icon.svg by convention,
 * and that file carries its own geometry (the drawing fills more of the square
 * so the green block survives at 16px).
 *
 * Each size is produced by rewriting the SVG's width/height before rasterising
 * rather than resize()-ing one bitmap: every PNG is drawn natively at its own
 * size, so the edges stay crisp instead of picking up rescaling blur.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/** @type {{from: string, to: string, size: number}[]} */
const outputs = [
  // LinkedIn asks for 300x300 minimum on a company page logo.
  { from: "public/brand/marca.svg", to: "public/brand/marca-300.png", size: 300 },
  { from: "public/brand/marca.svg", to: "public/brand/marca-512.png", size: 512 },
  { from: "public/brand/marca.svg", to: "public/brand/marca-1024.png", size: 1024 },
  // iOS home-screen icon. Next picks this up from src/app/ by convention.
  { from: "public/brand/marca.svg", to: "src/app/apple-icon.png", size: 180 },
  // Transparent, to sit on any background.
  {
    from: "public/brand/marca-sobre-oscuro.svg",
    to: "public/brand/marca-sobre-oscuro-512.png",
    size: 512,
  },
  {
    from: "public/brand/marca-sobre-claro.svg",
    to: "public/brand/marca-sobre-claro-512.png",
    size: 512,
  },
];

/** Rewrites the SVG's width/height to the requested size. */
function atSize(svg, size) {
  return svg
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`);
}

let failures = 0;

for (const { from, to, size } of outputs) {
  try {
    const svg = await readFile(resolve(root, from), "utf8");
    const png = await sharp(Buffer.from(atSize(svg, size))).png().toBuffer();

    const target = resolve(root, to);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, png);

    const { width, height } = await sharp(png).metadata();
    if (width !== size || height !== size) {
      throw new Error(`got ${width}x${height}, expected ${size}x${size}`);
    }
    console.log(`ok  ${to}  ${width}x${height}  ${png.length} bytes`);
  } catch (error) {
    failures += 1;
    console.error(`FAILED  ${to}: ${error.message}`);
  }
}

if (failures > 0) {
  console.error(`\n${failures} file(s) were not written.`);
  process.exit(1);
}

console.log("\nDone.");
