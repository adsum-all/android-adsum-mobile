/**
 * Populate ./www with the production build of the web member application so the
 * Capacitor shell bundles the exact same UI as the web app (parity by
 * construction). Run `npm run build` in ../adsum-web-membre first.
 *
 * Usage: node scripts/prepare-web.mjs [path-to-web-membre-dist]
 * Default source: ../adsum-web-membre/dist (sibling checkout).
 */
import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const src = resolve(process.argv[2] ?? resolve(root, "..", "adsum-web-membre", "dist"));
const dest = resolve(root, "www");

if (!existsSync(src)) {
  console.error(
    `Web build not found at: ${src}\n` +
      "Build it first: (cd ../adsum-web-membre && npm ci && npm run build), " +
      "or pass an explicit dist path as the first argument.",
  );
  process.exit(1);
}

rmSync(dest, { recursive: true, force: true });
mkdirSync(dest, { recursive: true });
cpSync(src, dest, { recursive: true });
console.log(`Copied web build into ${dest}. Next: npx cap sync android`);
