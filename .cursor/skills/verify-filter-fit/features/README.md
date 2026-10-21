# FilterFit verification map

This directory is the maintained source for verifying FilterFit the way a reader does. Read this index, then the feature file you are proving. One convenient deep link is not coverage when the map lists other entry points.

## Baseline preconditions

- Repo root, after `npm install`. Node 22 (CI) or any Node that can run `next dev`. No app env vars. No database and no seed data.
- Launch with `helpers/filter-fit launch` so the server binds `127.0.0.1:4321` (override with `FILTERFIT_PORT`, never `3000`).
- Run `filter-fit doctor` and require that pid, host, port, cwd, title, and h1.
- Drive only the instance whose `/tmp/filter-fit-verify-$PORT/instance.json` this run wrote.
- Chrome (`FILTERFIT_CHROME` or `/usr/local/bin/google-chrome`) is required for `click` and screenshots. HTTP `get` / `follow` do not need it.
- Do not request `https://filterfitguide.com` or Amazon. Do not run `scripts/production-watch.mjs`.

## Driving conventions

- Harness is `helpers/filter-fit`, invoked from the repo root with the same `FILTERFIT_PORT` and `FILTERFIT_HOST` as launch.
- Prefer accessible names and route paths. Do not use coordinates or CSS selectors.
- `follow` matches the accessible name (aria-hidden text removed, HTML comments removed) and refuses any URL that is not this instance.
- Repeated names on one page need `--nth` (1-based, document order). A different nth is a different entry point.
- `click --follow-name` reads links only inside the picker result panel (the `h3` parent), then GETs that href on this instance.
- Do not follow a link whose href is Amazon or `mailto:`.
- Leave proof files in `../evidence/<feature-id>/`. Cleanup must not remove them.

## Proof and skip reporting

- Capture the reader action and the resulting page, not only the final screenshot.
- A raw `get` of a destination skips the entry point. That is not a pass for that entry point.
- Record the feature id and entry point in `PROOF.txt`.
- If a precondition is missing, report the failure and the command. Do not swap in an easier path and call it the same proof.
- `scripts/test-size-guide.mjs` checks `lib/filters.ts` in a vm. It does not open the site.

## Feature entry contract

Each feature file has an H1, one opening paragraph, then these H2 sections in order: `Sub-features`, `How to get to it (user POV)`, `Driving it with filter-fit`, `Gotchas`.

## Features

- [Decision hub](./decision-hub.md) is the homepage: read the hub, change the size/depth/MERV picker, and open the result link.
- [MERV 11 vs 13 in a 1-inch slot](./merv-11-vs-13.md) is the thin-media guide reached from the header, the picker, the guide list, and the footer.
- [Size guide](./size-guide.md) is a nominal-size comparison page. `16×25×1` is the fully specified example; the other size routes are separate entry points.
- [About and privacy](./about-and-privacy.md) are the editorial and legal pages linked from the footer.
- [SEO surfaces](./seo-surfaces.md) are `/robots.txt`, `/sitemap.xml`, and `/ads.txt` for this local instance.
