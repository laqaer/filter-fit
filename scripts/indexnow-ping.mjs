// Ping IndexNow after public/{key}.txt is live at the site root.
// Usage:
//   node scripts/indexnow-ping.mjs --dry-run https://filterfitguide.com/16x20x4-furnace-filters
//   node scripts/indexnow-ping.mjs https://filterfitguide.com/16x20x4-furnace-filters

import { readdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "../public");

const HOST = "filterfitguide.com";
const ENDPOINT = "https://api.indexnow.org/indexnow";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const urlList = args.filter((arg) => arg !== "--dry-run");

if (urlList.length === 0) {
  console.error(
    "usage: node scripts/indexnow-ping.mjs [--dry-run] https://filterfitguide.com/<path> [...]",
  );
  process.exit(1);
}

const keyName = readdirSync(publicDir).find((name) => /^[a-f0-9]{32}\.txt$/.test(name));
if (!keyName) {
  console.error("public/{32-hex}.txt IndexNow key file is missing");
  process.exit(1);
}

const key = keyName.slice(0, -4);
const fileKey = readFileSync(join(publicDir, keyName), "utf8");
if (fileKey !== key) {
  console.error("IndexNow key file must contain only the key");
  process.exit(1);
}

for (const url of urlList) {
  let parsed;
  try {
    parsed = new URL(url);
  } catch {
    console.error(`not a URL: ${url}`);
    process.exit(1);
  }
  if (parsed.protocol !== "https:" || parsed.hostname !== HOST) {
    console.error(`url must be https://${HOST}/... : ${url}`);
    process.exit(1);
  }
}

const payload = {
  host: HOST,
  key,
  keyLocation: `https://${HOST}/${key}.txt`,
  urlList,
};

if (dryRun) {
  console.log(JSON.stringify(payload));
  process.exit(0);
}

const response = await fetch(ENDPOINT, {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify(payload),
});
const text = await response.text();
console.log(`${response.status} ${text}`.trim());
if (response.status !== 200 && response.status !== 202) process.exit(1);
