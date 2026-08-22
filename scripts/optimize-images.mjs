#!/usr/bin/env node

import { access, mkdir, readdir, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import sharp from "sharp";

const SUPPORTED_INPUTS = new Set([".png", ".jpg", ".jpeg"]);

function parseArgs(argv) {
  const options = {
    inputs: [],
    outputDir: null,
    quality: 82,
    maxWidth: 2400,
    width: null,
    height: null,
    fit: "cover",
    position: "centre",
    suffix: "",
    force: false,
    lossless: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--input" || arg === "-i") options.inputs.push(argv[++i]);
    else if (arg === "--output-dir" || arg === "-o") options.outputDir = argv[++i];
    else if (arg === "--quality" || arg === "-q") options.quality = Number(argv[++i]);
    else if (arg === "--max-width") options.maxWidth = Number(argv[++i]);
    else if (arg === "--width") options.width = Number(argv[++i]);
    else if (arg === "--height") options.height = Number(argv[++i]);
    else if (arg === "--fit") options.fit = argv[++i];
    else if (arg === "--position") options.position = argv[++i];
    else if (arg === "--suffix") options.suffix = argv[++i];
    else if (arg === "--force") options.force = true;
    else if (arg === "--lossless") options.lossless = true;
    else if (arg === "--help" || arg === "-h") options.help = true;
    else throw new Error(`Unknown option: ${arg}`);
  }

  return options;
}

function printHelp() {
  console.log(`
Create visually lossless WebP derivatives without modifying source files.

Usage:
  npm run optimize:images -- --input public/images/hero.jpg
  npm run optimize:images -- -i public/images/catalog -q 84 --max-width 2000

Options:
  -i, --input <path>       File or directory. Repeat for multiple inputs.
  -o, --output-dir <dir>  Optional destination root; otherwise write siblings.
  -q, --quality <1-100>   WebP quality (default: 82).
      --max-width <px>    Resize only sources wider than this (default: 2400).
      --width <px>        Create an exact-width derivative.
      --height <px>       Optional exact height (use with --width for art direction).
      --fit <mode>        Sharp resize fit (default: cover).
      --position <value>  Crop position, e.g. centre, east, west (default: centre).
      --suffix <text>     Append to output stem, e.g. "-optimized".
      --lossless          Use lossless WebP (best for line art/UI graphics).
      --force             Replace an existing derivative.
  -h, --help              Show this help.

The script intentionally skips SVG, GIF, AVIF and existing WebP files to avoid
blind conversion or repeated recompression.
`);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(inputPath) {
  const inputStat = await stat(inputPath);
  if (inputStat.isFile()) return [inputPath];

  const files = [];
  for (const entry of await readdir(inputPath, { withFileTypes: true })) {
    const entryPath = path.join(inputPath, entry.name);
    if (entry.isDirectory()) files.push(...(await collectFiles(entryPath)));
    else if (entry.isFile()) files.push(entryPath);
  }
  return files;
}

function outputPathFor(filePath, options) {
  const parsed = path.parse(filePath);
  const filename = `${parsed.name}${options.suffix}.webp`;
  if (!options.outputDir) return path.join(parsed.dir, filename);

  const relative = path.relative(process.cwd(), parsed.dir);
  return path.join(options.outputDir, relative, filename);
}

async function optimize(filePath, options) {
  const extension = path.extname(filePath).toLowerCase();
  if (!SUPPORTED_INPUTS.has(extension)) {
    return { status: "skipped", filePath, reason: "format is intentionally excluded" };
  }

  const destination = outputPathFor(filePath, options);
  if (!options.force && (await exists(destination))) {
    return { status: "skipped", filePath, destination, reason: "derivative already exists" };
  }

  const before = (await stat(filePath)).size;
  const metadata = await sharp(filePath).metadata();
  const pipeline = sharp(filePath, { failOn: "warning" }).rotate();

  if (options.width) {
    pipeline.resize({
      width: options.width,
      height: options.height || undefined,
      fit: options.height ? options.fit : "inside",
      position: options.position,
      withoutEnlargement: true,
    });
  } else if (metadata.width && metadata.width > options.maxWidth) {
    pipeline.resize({ width: options.maxWidth, withoutEnlargement: true });
  }

  await mkdir(path.dirname(destination), { recursive: true });
  await pipeline
    .webp(
      options.lossless
        ? { lossless: true, effort: 6 }
        : { quality: options.quality, effort: 6, smartSubsample: true }
    )
    .toFile(destination);

  const after = (await stat(destination)).size;
  return {
    status: "optimized",
    filePath,
    destination,
    before,
    after,
    saved: before - after,
    reduction: Number((((before - after) / before) * 100).toFixed(1)),
  };
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  if (options.help) {
    printHelp();
    return;
  }
  if (options.inputs.length === 0) {
    throw new Error("Provide at least one --input path. Use --help for examples.");
  }
  if (!Number.isFinite(options.quality) || options.quality < 1 || options.quality > 100) {
    throw new Error("--quality must be between 1 and 100.");
  }
  if (!Number.isFinite(options.maxWidth) || options.maxWidth < 1) {
    throw new Error("--max-width must be a positive number.");
  }
  if (options.width && (!Number.isFinite(options.width) || options.width < 1)) {
    throw new Error("--width must be a positive number.");
  }
  if (options.height && (!Number.isFinite(options.height) || options.height < 1)) {
    throw new Error("--height must be a positive number.");
  }

  const files = (await Promise.all(options.inputs.map(collectFiles))).flat();
  const results = [];
  for (const filePath of files) results.push(await optimize(filePath, options));

  for (const result of results) {
    if (result.status === "optimized") {
      console.log(
        `${result.filePath} -> ${result.destination}: ` +
          `${(result.before / 1024).toFixed(1)} KB -> ${(result.after / 1024).toFixed(1)} KB ` +
          `(${result.reduction}% smaller)`
      );
    } else {
      console.log(`Skipped ${result.filePath}: ${result.reason}`);
    }
  }

  const optimized = results.filter((result) => result.status === "optimized");
  const before = optimized.reduce((sum, result) => sum + result.before, 0);
  const after = optimized.reduce((sum, result) => sum + result.after, 0);
  console.log(
    `\nOptimized ${optimized.length} file(s): ${(before / 1024 / 1024).toFixed(2)} MB -> ` +
      `${(after / 1024 / 1024).toFixed(2)} MB`
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
