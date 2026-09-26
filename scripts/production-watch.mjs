import assert from "node:assert/strict";

// Live commercial-path check. Does not call Amazon or any other retailer.
const base = new URL(process.env.WATCH_BASE_URL ?? "https://filterfitguide.com");
assert.ok(
  ["filterfitguide.com", "127.0.0.1"].includes(base.hostname),
  `refusing to watch ${base.hostname}`,
);

const pages = [
  ["/", "FilterFit"],
  ["/16x25x1-furnace-filters", "16x25x1"],
  ["/20x25x1-furnace-filters", "20x25x1"],
  ["/16x25x4-furnace-filters", "16x25x4"],
  ["/20x25x4-furnace-filters", "20x25x4"],
  ["/16x20x4-furnace-filters", "16x20x4"],
  ["/20x20x4-furnace-filters", "20x20x4"],
];

async function read(path) {
  const response = await fetch(new URL(path, base), {
    redirect: "error",
    signal: AbortSignal.timeout(15000),
    headers: { "user-agent": "FilterFitProductionWatch/1.0" },
  });
  assert.equal(response.status, 200, `${path} returned ${response.status}`);
  return response.text();
}

const sitemap = await read("/sitemap.xml");
for (const [path, marker] of pages) {
  const html = await read(path);
  assert.ok(html.includes(marker), `${path} missing marker ${marker}`);
  if (path === "/") {
    assert.match(html, /As an Amazon Associate I earn from qualifying purchases/);
    assert.match(html, /tag=laqaer-20/);
    continue;
  }
  const canonical = `https://filterfitguide.com${path}`;
  assert.ok(html.includes(`href="${canonical}"`), `${path} canonical missing`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${path} missing from sitemap`);
  assert.match(html, /As an Amazon Associate I earn from qualifying purchases/);
  assert.match(html, /tag=laqaer-20/);
  assert.match(html, new RegExp(`k=${marker}\\+merv\\+11\\+furnace\\+filter`));
}

console.log(`PASS: production watch ${base.origin} (${pages.length} pages)`);
