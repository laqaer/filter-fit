import { readFileSync } from "node:fs";
import { join } from "node:path";

const before = process.argv[2];
const after = process.argv[3];
if (!before || !after) {
  console.error("usage: node scripts/html-parity.mjs <before-out> <after-out>");
  process.exit(2);
}

function locs(dir) {
  const xml = readFileSync(join(dir, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
}

function fileFor(dir, pathname) {
  if (pathname === "/") return join(dir, "index.html");
  return join(dir, `${pathname.replace(/^\//, "")}.html`);
}

function normalizeJson(value) {
  if (Array.isArray(value)) return value.map(normalizeJson);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, normalizeJson(value[key])]),
    );
  }
  return value;
}

function extract(html) {
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (match) => JSON.stringify(normalizeJson(JSON.parse(match[1]))),
  );
  blocks.sort();
  const hrefs = [...html.matchAll(/href="([^"]*tag=laqaer-20[^"]*)"/g)].map((match) =>
    match[1].replaceAll("&amp;", "&"),
  );
  hrefs.sort();
  return { blocks, hrefs, tagCount: hrefs.length };
}

const beforeLocs = locs(before);
const afterLocs = locs(after);
const paths = [...new Set([...beforeLocs, ...afterLocs])].sort();
let loss = 0;
console.log("path\tjsonld\ttags\threfs");
for (const pathname of paths) {
  const left = extract(readFileSync(fileFor(before, pathname), "utf8"));
  const right = extract(readFileSync(fileFor(after, pathname), "utf8"));
  const jsonldSame = left.blocks.join("\n") === right.blocks.join("\n");
  const hrefsSame = left.hrefs.join("\n") === right.hrefs.join("\n");
  const tagSame = left.tagCount === right.tagCount;
  if (!jsonldSame || !hrefsSame || !tagSame) loss += 1;
  console.log(
    `${pathname}\t${jsonldSame ? "same" : "CHANGED"} ${left.blocks.length}->${right.blocks.length}\t${left.tagCount}->${right.tagCount}\t${hrefsSame ? "same" : "CHANGED"}`,
  );
}
console.log(loss === 0 ? "parity zero loss" : `parity loss ${loss}`);
process.exit(loss === 0 ? 0 : 1);
