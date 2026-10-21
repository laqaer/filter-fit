---
name: verify-filter-fit
description: Drive the FilterFit site (filterfitguide.com furnace-filter comparisons) on a local isolated server and prove reader paths, the size/depth/MERV picker, and crawler files. Use when verifying the homepage, a guide, About, Privacy, sitemap/robots/ads.txt, or after editorial or route changes.
---

# Verify FilterFit

FilterFit is a static editorial Next.js App Router site (`output: "export"`). A reader uses the homepage picker (nominal face, slot depth, MERV) and opens comparison guides. There is no account, search box, form, or checkout. Drive the **local** instance this run started. Do not request production, do not follow Amazon Associates links, and do not edit ads or affiliate tags.

Read `features/README.md`, then the feature file you are proving. One convenient deep link is not coverage when the map lists other entry points.

## Interview (what this skill is built on)

- **Surface:** browser web UI. Secondary crawler files: `/robots.txt`, `/sitemap.xml`, `/ads.txt`. The picker is a client component; link lists are server-rendered.
- **Run:** `npm install` then `npm run dev` (`next dev`). README opens `http://localhost:3000`. No app env vars. Node 20+; CI uses Node 22. `next start` does not boot this app. `output: "export"` is served, when needed, by `node scripts/serve-export.mjs` after `npm run build`.
- **Drive:** no Playwright or Cypress. `scripts/test-size-guide.mjs` unit-checks `lib/filters.ts` and does not open the site. Use `helpers/filter-fit` (HTTP of real routes, Chrome for picker clicks and screenshots). `scripts/production-watch.mjs` and `scripts/indexnow-ping.mjs` talk to the public site; do not run them here.
- **Observe:** status, `<title>`, `h1`, accessible link names, picker headline, JSON-LD `@type`, sitemap locs, screenshots, extracted text.
- **Isolate:** bind `127.0.0.1:4321` by default. Two runs need two `FILTERFIT_PORT` values. No database. Port **3000 is refused** even if this process could bind it. A listener on `:3000` is the documented human `npm run dev`, or something else this run does not own.

## Launch

From the repo root, after `npm install`:

```bash
chmod +x .cursor/skills/verify-filter-fit/helpers/filter-fit
FILTERFIT_PORT=4321 FILTERFIT_HOST=127.0.0.1 \
  .cursor/skills/verify-filter-fit/helpers/filter-fit launch
```

Ready when the helper prints `launched pid=… http://127.0.0.1:4321` and `GET /` is HTTP 200 with h1 `Pick a furnace filter by size, slot depth, then MERV`. The first request compiles the route; an open TCP port is not ready. The Next log is `/tmp/filter-fit-verify-4321/next.log`. Instance metadata is `/tmp/filter-fit-verify-4321/instance.json`.

The helper runs `node_modules/.bin/next dev --hostname 127.0.0.1 --port 4321`. That is the documented `next dev` command plus an explicit loopback host and a port other than 3000. It sets `NEXT_TELEMETRY_DISABLED=1` and does not pass `ADSENSE_PUB_ID` into the server. The first compile may download the Google fonts named in `app/layout.tsx` (IBM Plex Sans and Newsreader). If install or launch fails, stop and report that blocker.

Static export (optional, not the default proof): `npm run build`, then `FILTERFIT_MODE=export` with the same launch command. `scripts/serve-export.mjs` binds `127.0.0.1` and `PORT`. Unknown paths in that mode return the plain body `not found`, not the App Router 404 page. Prove the 404 sentence with `dev`.

Teardown is `filter-fit cleanup`. Do not `pkill next`.

## Doctor

Read-only. Run this first whenever anything looks off. It does not click, and it does not request port 3000.

```bash
FILTERFIT_PORT=4321 FILTERFIT_HOST=127.0.0.1 \
  .cursor/skills/verify-filter-fit/helpers/filter-fit doctor
```

Pass means all of:

- `/tmp/filter-fit-verify-$PORT/instance.json` exists and its `pid` is alive
- that file's host, port, and cwd match `FILTERFIT_HOST`, `FILTERFIT_PORT`, and the repo root
- the pid cmdline is this run's `next dev` (or `serve-export.mjs` in export mode)
- `GET /` is 200
- `<title>` is `FilterFit — Furnace filters by MERV, size, and depth`
- `h1` is `Pick a furnace filter by size, slot depth, then MERV`
- every visible listener on that port is in the launch pid's process tree (`next-server` is a child of the recorded pid)

If doctor fails, do not drive. Launch this run's instance, or stop. A page that looks like FilterFit on a port this run did not start is a foreign instance.

## Drive

Harness: `helpers/filter-fit`. Stable handles are **accessible names and routes**, not CSS or coordinates.

| Handle | What it is |
| --- | --- |
| Logo link `FilterFit Size · Depth · MERV` | header (`--nth 1`) and footer (`--nth 2`); the `FF` mark is `aria-hidden` |
| `nav` named `Primary` | `Picker`, then the first three guide kickers (`Thin media`, `Common size`, `20×25 face`), then `About` |
| `Picker` | header link to `/#picker` |
| Face buttons | `12×24`, `14×20`, `14×25`, `16×20`, `16×24`, `16×25`, `20×20`, `20×25`, `20×30`, `24×24`, `24×30` (`aria-pressed`; less-common faces append `less common`) |
| Depth buttons | `1 inch`, `2 inch`, `4 inch`, `5 inch` |
| MERV buttons | `MERV 8`, `MERV 11`, `MERV 13` |
| Result `h3` | headline inside `4. What to buy` |
| Result-panel links | guide titles rendered next to that headline; `click --follow-name` reads only these |
| `Shop MERV … filters on Amazon` | affiliate search in the result panel; do not open |
| Guides-list titles | each `guides[].title` from `lib/guides.ts` |
| Footer `About & editorial standards` | → `/about` |
| Footer `Privacy` | → `/privacy` |
| Footer `hello@filterfitguide.com` | mailto; do not open |

Default picker (no clicks): face `16×25` pressed, `1 inch` pressed, `MERV 11` pressed, headline `16×25×1: MERV 11 is the usual 1-inch everyday pick`.

Routes a reader can open:

| Path | Identity `h1` |
| --- | --- |
| `/` | Pick a furnace filter by size, slot depth, then MERV |
| `/merv-11-vs-13-1-inch` | MERV 11 vs 13 when the rack is only an inch deep |
| `/16x25x1-furnace-filters` | 16×25×1 furnace filters, compared without fake scores |
| `/20x25x1-furnace-filters` | 20×25×1 furnace filters, compared without fake scores |
| `/16x20x1-furnace-filters` | 16×20×1 furnace filters, compared without fake scores |
| `/14x25x1-furnace-filters` | 14×25×1 furnace filters, compared without fake scores |
| `/20x20x1-furnace-filters` | 20×20×1 furnace filters, compared without fake scores |
| `/14x20x1-furnace-filters` | 14×20×1 furnace filters and 14×20×1 air filters, compared without fake scores |
| `/20x30x1-furnace-filters` | 20×30×1 furnace filters, compared without fake scores |
| `/12x24x1-furnace-filters` | 12×24×1 furnace filters, compared without fake scores |
| `/24x24x1-furnace-filters` | 24×24×1 furnace filters, compared without fake scores |
| `/24x30x1-furnace-filters` | 24×30×1 furnace filters, compared without fake scores |
| `/16x25x4-furnace-filters` | 16×25×4 furnace filters and air filters are the same pad |
| `/20x25x4-furnace-filters` | 20×25×4 furnace filters and air filters are the same pad |
| `/16x20x4-furnace-filters` | 16×20×4 furnace filters and air filters are the same pad |
| `/20x20x4-furnace-filters` | 20×20×4 furnace filters, compared without trusting one depth |
| `/20x30x4-furnace-filters` | 20×30×4 furnace filters and air filters are the same pad |
| `/1-inch-vs-4-inch-merv-13` | Depth beats MERV: 1-inch vs 4-inch MERV 13 |
| `/merv-13-safe-for-furnace` | When MERV 13 is fine — and when it chokes the blower |
| `/furnace-filter-size-depth-chart` | Nominal size and slot-depth chart |
| `/about` | FilterFit is a directory, not a filter brand |
| `/privacy` | Privacy policy |

Guide titles use the template `%s · FilterFit`. The hub title does not. Unknown paths in `dev` render `That size is not on the rack` with link `Back to FilterFit` and status 404.

Commands (always pass the same `FILTERFIT_PORT` / `FILTERFIT_HOST` as launch):

```bash
H=.cursor/skills/verify-filter-fit/helpers/filter-fit

$H get /
$H get / --expect "Decision tree" --expect "Guides"

$H click --name "MERV 13" \
  --expect "16×25×1: 1-inch MERV 13 is the tightest common combo" \
  --follow-name "Is MERV 13 safe for your furnace?" \
  --expect "When MERV 13 is fine — and when it chokes the blower"

$H follow --from / --name "Thin media" \
  --expect "MERV 11 vs 13 when the rack is only an inch deep"

$H follow --from / --name "About & editorial standards" \
  --expect "FilterFit is a directory, not a filter brand"

$H get /not-a-real-size --status 404 --expect "That size is not on the rack"

$H screenshot / --out .cursor/skills/verify-filter-fit/evidence/decision-hub/home.png
$H snapshot / --dir .cursor/skills/verify-filter-fit/evidence/decision-hub --as home --screenshot
```

Titles that occur more than once need `--nth` (1-based, document order). On `/`, `MERV 11 vs 13 in a 1-inch slot` is picker result, Guides card, then footer. `16×25×1 furnace filters` is picker result, the sentence under Guides, the Guides card, then footer. Header kickers are unique.

Every feature file repeats this pairing: reader action → exact `filter-fit` command → observable result.

## Evidence

Proof directory (never deleted by cleanup):

`.cursor/skills/verify-filter-fit/evidence/<feature-id>/`

Minimum for a UI feature:

- action: the `follow` or `click` that left the previous state (stdout, `action.txt` or `click.json`, and the destination snapshot)
- result: snapshot of the arrived page (`*.txt` headings/nav, `*.html`, `*.meta.json`, optional `*.png`)
- identity: visible FilterFit wordmark plus the page `h1` from the table above

Picker proof adds the screenshot taken after the click, while the result headline is on screen, and the GET of the result-panel href. A screenshot of the untouched hub does not prove the click.

Minimum for SEO files: `filter-fit seo --dir .cursor/skills/verify-filter-fit/evidence/seo-surfaces` and the saved bodies.

Standards:

- Exercise the real reader path (named link, header/footer, or a picker button). A raw `get` of the destination skips the entry point.
- Capture the action and the resulting page, not only the final screenshot.
- Confirm on-page side effects that exist: JSON-LD `WebSite` on every page (publisher Organization nested in that object); top-level `Organization` script on About; `Article` on guides; `FAQPage` on the size pages named in `features/size-guide.md`; footer strings `Affiliate disclosure.` and `HVAC caveat.`; canonical host `https://filterfitguide.com`.
- Do not mock Next. Do not request retailer or affiliate hosts. Amazon search links are present; seeing `tag=laqaer-20` in the saved HTML is the observation. Following them is not.
- Do not call this a dry-run of production. Local HTML still embeds production canonicals and JSON-LD URLs from `lib/site.ts`. That embedding is not a request to production, and it is not a traffic measurement.
- Do not invent sessions, rankings, or impression counts. This site does not expose them.

`*.meta.json` stores `url` and `capturedAt`. `PROOF.txt` is appended by commands that receive `--feature`, and must name the feature id and the entry point.

## Cleanup

```bash
FILTERFIT_PORT=4321 FILTERFIT_HOST=127.0.0.1 \
  .cursor/skills/verify-filter-fit/helpers/filter-fit cleanup
```

Kills only the pid in this run's `instance.json` (process group, plus listeners on that port that were in that pid's tree before the signal). Removes `/tmp/filter-fit-verify-$PORT/`. Does **not** delete `.cursor/skills/verify-filter-fit/evidence/`. If `instance.json` is missing, cleanup does not kill whatever is listening. Cleanup refuses port 3000 without sending a signal. After cleanup, confirm the evidence files still exist before reporting a pass.

If a drive fails, run cleanup before the next launch so port 4321 is not stranded.

## Helpers

`helpers/filter-fit` is executable. Invocation is always from the repo root with the env vars above. `click` needs Node's global `WebSocket` (Node 22, which CI uses).

| Command | Purpose |
| --- | --- |
| `filter-fit launch` | Start `next dev` (or `serve-export.mjs` if `FILTERFIT_MODE=export`) on `127.0.0.1:$FILTERFIT_PORT` |
| `filter-fit doctor` | Read-only health + hub identity |
| `filter-fit url` | Print `http://127.0.0.1:$PORT` |
| `filter-fit get <path> [--expect text]... [--status N]` | GET a path; print status/title/h1; assert substrings |
| `filter-fit follow --from <path> --name <text> [--nth N]` | Find that accessible name, refuse off-instance URLs, GET the href |
| `filter-fit click --name <button> [--follow-name <text>]` | Press picker buttons in Chrome and optionally open a result-panel link |
| `filter-fit snapshot <path> --dir <dir> [--as base] [--screenshot]` | Save html/txt/meta and an optional png |
| `filter-fit screenshot <path> --out <file>` | Chrome headless 1280×900 png of the server-rendered page |
| `filter-fit seo [--dir <dir>]` | Assert robots, sitemap locs from `lib/guides.ts`, and placeholder ads.txt |
| `filter-fit cleanup` | Tear down this instance; keep evidence |

Chrome is `/usr/local/bin/google-chrome` or `FILTERFIT_CHROME`. URL screenshots use `--headless=new --no-sandbox` and a disposable `--user-data-dir` under `/tmp/filter-fit-chrome-*`. If Chrome exits slowly after writing the PNG, the helper still accepts the file. Picker screenshots are taken through the DevTools connection after the click, so they show the updated headline. If Chrome is missing, HTTP snapshots still prove server-rendered content; say the click and screenshot steps failed. Do not skip a mapped picker journey and call the HTTP-only result a pass.

## Isolate and concurrency

- Default verification URL: `http://127.0.0.1:4321`
- Second instance: `FILTERFIT_PORT=4322` (run dir `/tmp/filter-fit-verify-4322`)
- `FILTERFIT_HOST` other than `127.0.0.1` is refused, including the public site name
- `FILTERFIT_PORT=3000` is refused for launch, doctor, drive, and cleanup
- No seed data, no auth cookies, no writable content store

## Maintenance

When routes, picker labels, or guide titles change, update this skill and `features/` with `/maintain-verification-skill`. Do not weaken a journey because a label moved.

## Anti-jobs

Do not request or “warm” `filterfitguide.com`. Do not follow Amazon or other retailer links. Do not change AdSense, `ads.txt` content, or affiliate tags. Do not invent traffic, rankings, or review scores. Do not mix other Laqaer sites into this proof. Local proof against the instance this run launched is the whole job.
