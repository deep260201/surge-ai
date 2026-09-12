// Next 16's static export writes per-segment prefetch payloads as nested directories
// (out/contact/__next.contact/__PAGE__.txt) but the client router requests them as a single
// dot-joined file (out/contact/__next.contact.__PAGE__.txt). Without this step every prefetch
// 404s: the console fills with errors and each miss downloads the whole 404 page instead.
//
// Copy each nested payload to the flattened name the router actually asks for.
// Remove this once Next fixes the mismatch; the check below will report 0 files.
import { copyFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const OUT = "out";
let copied = 0;

/** Collect every file under `dir`, returning paths relative to `dir`. */
function filesUnder(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) out.push(...filesUnder(full).map((p) => `${entry}/${p}`));
    else out.push(entry);
  }
  return out;
}

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    if (entry.startsWith("__next.")) {
      for (const rel of filesUnder(full)) {
        copyFileSync(join(full, rel), join(dir, `${entry}.${rel.split("/").join(".")}`));
        copied++;
      }
    } else if (entry !== "_next") {
      walk(full);
    }
  }
}

walk(OUT);
console.log(`fix-export-prefetch: flattened ${copied} prefetch payload${copied === 1 ? "" : "s"}`);
