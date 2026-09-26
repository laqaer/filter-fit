import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import ts from "typescript";

// Exercise the actual, dependency-free selector without adding a runtime loader.
const source = readFileSync("lib/filters.ts", "utf8");
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const sandbox = { exports: {} };
vm.runInNewContext(compiled.outputText, sandbox, { timeout: 1000 });
const { faceSizes, depths, mervOptions, recommend, sizeChart } = sandbox.exports;
const guide = "/16x25x4-furnace-filters";
const face14 = "/14x20x1-furnace-filters";
const face20x30 = "/20x30x1-furnace-filters";
const cabinetGuides = {
  "16x20": "/16x20x4-furnace-filters",
  "16x25": "/16x25x4-furnace-filters",
  "20x20": "/20x20x4-furnace-filters",
  "20x25": "/20x25x4-furnace-filters",
};
let cases = 0;

const guidesSource = readFileSync("lib/guides.ts", "utf8");
const guidesCompiled = ts.transpileModule(guidesSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const guidesSandbox = { exports: {} };
vm.runInNewContext(guidesCompiled.outputText, guidesSandbox, { timeout: 1000 });
const { guides } = guidesSandbox.exports;
for (const href of [face14, face20x30, "/12x24x1-furnace-filters", guide, ...Object.values(cabinetGuides)]) {
  assert.ok(guides.some((item) => item.href === href), `guides registry must include ${href}`);
}

for (const face of faceSizes) {
  for (const { inches } of depths) {
    for (const { value } of mervOptions) {
      const result = recommend(face.id, inches, value);
      const expected = face.id === "16x25" && inches === 4;
      assert.equal(result.related.includes(guide), expected,
        `${face.id}, depth ${inches}, MERV ${value}: incorrect cabinet guide`);
      if (face.id === "16x25" && inches === 1) {
        assert.ok(result.related.includes("/16x25x1-furnace-filters"),
          "The existing one-inch guide must remain reachable");
      }
      if (face.id === "12x24" && inches === 1) {
        assert.ok(result.related.includes("/12x24x1-furnace-filters"),
          "The 12×24 one-inch guide must be reachable from the picker");
      }
      assert.equal(
        result.related.includes(face14),
        face.id === "14x20" && inches === 1,
        `${face.id}, depth ${inches}, MERV ${value}: incorrect 14×20 guide`,
      );
      assert.equal(
        result.related.includes(face20x30),
        face.id === "20x30" && inches === 1,
        `${face.id}, depth ${inches}, MERV ${value}: incorrect 20×30 guide`,
      );
      for (const [cabinetFace, cabinetHref] of Object.entries(cabinetGuides)) {
        assert.equal(
          result.related.includes(cabinetHref),
          face.id === cabinetFace && inches === 4,
          `${face.id}, depth ${inches}, MERV ${value}: incorrect ${cabinetHref}`,
        );
      }
      assert.equal(new Set(result.related).size, result.related.length,
        "Related guides must not contain duplicates");
      cases += 1;
    }
  }
}
assert.ok(cases > 0, "The selector matrix must not be empty");

const face14Page = readFileSync(`app${face14}/page.tsx`, "utf8");
assert.doesNotMatch(face14Page, /therefore raises resistance unless/);
assert.match(face14Page, /manufacturer-specific/);
assert.match(face14Page, /data sheet/);
const face20x30Page = readFileSync(`app${face20x30}/page.tsx`, "utf8");
assert.doesNotMatch(face20x30Page, /therefore raises resistance unless/);
assert.match(face20x30Page, /manufacturer-specific/);
assert.match(face20x30Page, /data sheet/);

const row = sizeChart.find((item) => item.nominal === "16×25×4");
assert.ok(row, "The shared size chart must include the media-cabinet row");
assert.match(row.typicalActual, /3⅝–4⅜/);
assert.match(row.typicalActual, /not a compatibility range/);
assert.match(row.notes, /all three actual dimensions/);
const page = readFileSync(`app${guide}/page.tsx`, "utf8");
assert.match(page, /all three actual dimensions/);
assert.match(page, /not a compatibility range/);
assert.doesNotMatch(page, /actual size near 15⅜–15⅞ × 24⅜–24⅞ × 3¾/);

for (const nominal of ["16×20×4", "20×20×4", "20×25×4"]) {
  const cabinetRow = sizeChart.find((item) => item.nominal === nominal);
  assert.ok(cabinetRow, `size chart must include ${nominal}`);
  assert.match(cabinetRow.typicalActual, /not a compatibility range/);
  assert.match(cabinetRow.notes, /all three actual dimensions/);
  assert.doesNotMatch(cabinetRow.typicalActual, /19⅜|15⅜/);
}

for (const [cabinetFace, cabinetHref] of Object.entries(cabinetGuides)) {
  const cabinetPage = readFileSync(`app${cabinetHref}/page.tsx`, "utf8");
  assert.match(cabinetPage, /manufacturer-specific/);
  assert.match(cabinetPage, /data-sheet/);
  assert.match(cabinetPage, /not a compatibility range/);
  assert.doesNotMatch(cabinetPage, /therefore raises resistance unless/);
  const shopAt = cabinetPage.indexOf("<AmazonShopExamples");
  const brandsAt = cabinetPage.indexOf("Brand classes, not a leaderboard");
  assert.ok(shopAt > 0 && brandsAt > shopAt, `${cabinetHref}: shop links must precede the brand essay`);
  assert.equal(
    cabinetPage.split("<AmazonShopExamples").length - 1,
    1,
    `${cabinetHref}: exactly one shop block`,
  );
  assert.match(cabinetPage, new RegExp(`face="${cabinetFace}x4"`));
}

const amazonSource = readFileSync("lib/amazon.ts", "utf8");
const amazonCompiled = ts.transpileModule(amazonSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
});
const amazonSandbox = { exports: {}, URLSearchParams };
vm.runInNewContext(amazonCompiled.outputText, amazonSandbox, { timeout: 1000 });
const picked = new URL(amazonSandbox.exports.amazonSearchUrl("16x25x1 merv 11 furnace filter", "ff-picker-16x25x1-merv11"));
assert.equal(picked.searchParams.get("tag"), "laqaer-20");
assert.equal(picked.searchParams.get("k"), "16x25x1 merv 11 furnace filter");
assert.equal(picked.searchParams.get("ascsubtag"), "ff-picker-16x25x1-merv11");
assert.equal(picked.hostname, "www.amazon.com");
assert.equal(picked.pathname, "/s");

const pickerSource = readFileSync("components/decision-tree.tsx", "utf8");
assert.match(pickerSource, /amazonSearchUrl\(/);
assert.match(pickerSource, /As an Amazon Associate I earn from qualifying purchases/);
assert.match(pickerSource, /ascsubtag|ff-picker-/);

console.log(`PASS: ${cases} selector cases and cabinet-sizing regression assertions`);

// CI supplies only a loopback Next server. No retailer or production URL is fetched.
if (process.env.SMOKE_BASE_URL) {
  const base = new URL(process.env.SMOKE_BASE_URL);
  assert.equal(base.hostname, "127.0.0.1", "HTTP smoke must remain local");
  async function readRoute(path) {
    const response = await fetch(new URL(path, base), {
      signal: AbortSignal.timeout(10000),
      redirect: "error",
    });
    assert.equal(response.status, 200, `${path} must return HTTP 200`);
    return response.text();
  }
  const sitemap = await readRoute("/sitemap.xml");

  async function assertSizeSmoke(path, faceKey) {
    const html = await readRoute(path);
    const canonical = `https://filterfitguide.com${path}`;
    assert.ok(html.includes(`href="${canonical}"`), `${path}: canonical URL missing`);
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${path}: missing from sitemap`);
    assert.match(html.replace(/\s+/g, " "), /As an Amazon Associate I earn from qualifying purchases/);
    const links = Array.from(html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g),
      (match) => new URL(match[1].replaceAll("&amp;", "&"), base));
    const searches = links.filter((url) =>
      ["amazon.com", "www.amazon.com"].includes(url.hostname) &&
      url.pathname === "/s" && url.searchParams.get("k")?.startsWith(`${faceKey} `));
    assert.equal(searches.length, 3, `${path}: expected exactly three size-specific Amazon searches`);
    for (const merv of [8, 11, 13]) {
      assert.ok(searches.some((url) =>
        url.searchParams.get("k") === `${faceKey} merv ${merv} furnace filter` &&
        url.searchParams.get("tag") === "laqaer-20"), `${path}: MERV ${merv} affiliate search missing`);
    }
  }

  await assertSizeSmoke(guide, "16x25x4");
  await assertSizeSmoke(face14, "14x20x1");
  await assertSizeSmoke(face20x30, "20x30x1");
  for (const [cabinetFace, cabinetHref] of Object.entries(cabinetGuides)) {
    await assertSizeSmoke(cabinetHref, `${cabinetFace}x4`);
  }
  console.log("PASS: local HTTP, canonical, sitemap, disclosure, and three affiliate searches");
}
