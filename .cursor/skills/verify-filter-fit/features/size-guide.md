# Size guide

A size guide compares one nominal face and depth at MERV 8, 11, and 13 using brand classes (Filtrete-style, Aerostar-style, Filterbuy-style) and no numbered review score. `16×25×1` is the worked example. Each other size URL is its own entry point and needs its own proof.

## Sub-features

- `size-arrive` opens `16×25×1` from the header kicker `Common size`.
- `size-identity` shows that page’s h1, the actual-size warning, and the Amazon example block without leaving the site.
- `size-faq` shows the visible questions and `FAQPage` JSON-LD on this page.
- `size-other` repeats arrival for each other size route listed below, using that route’s own title and h1.

## How to get to it (user POV)

- On `/`, choose header `Common size` to open `/16x25x1-furnace-filters`.
- On `/`, choose `16×25×1 furnace filters`. Document order is picker result (`--nth 1`), the sentence under Guides (`--nth 2`), the Guides card (`--nth 3`), then the footer (`--nth 4`).
- Choose the matching title in the footer Guides list on any page.
- Other size routes, each with its own h1 in `SKILL.md`: `/20x25x1-furnace-filters`, `/16x20x1-furnace-filters`, `/14x25x1-furnace-filters`, `/20x20x1-furnace-filters`, `/14x20x1-furnace-filters`, `/20x30x1-furnace-filters`, `/12x24x1-furnace-filters`, `/24x24x1-furnace-filters`, `/24x30x1-furnace-filters`, `/16x25x4-furnace-filters`, `/20x25x4-furnace-filters`, `/16x20x4-furnace-filters`, `/20x20x4-furnace-filters`, `/20x30x4-furnace-filters`.

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes.
- Prove `16×25×1` before claiming the size-guide pattern. A pass here does not pass another size URL.

- **Header entry.** Choose `Common size`. Run `filter-fit follow --from / --name "Common size" --expect "16×25×1 furnace filters, compared without fake scores" --expect "Shop examples on Amazon" --expect "15½ × 24½ × ¾" --dir .cursor/skills/verify-filter-fit/evidence/size-guide --action header.txt --feature size-guide`. Status is 200 and the title is `16×25×1 furnace filters: MERV 8 vs 11 vs 13 · FilterFit`.
- **Leave the retailer links alone.** The page contains `MERV 8 16×25×1 furnace filters`, `MERV 11 16×25×1 furnace filters`, and `MERV 13 16×25×1 furnace filters`. Run `filter-fit follow --from /16x25x1-furnace-filters --name "MERV 11 16×25×1 furnace filters"`. The command fails and does not request Amazon. That failure is the pass for “do not follow affiliate links.” Record the stderr in the evidence directory.
- **FAQ.** Run `filter-fit snapshot /16x25x1-furnace-filters --dir .cursor/skills/verify-filter-fit/evidence/size-guide --as guide --screenshot --feature size-guide`. `guide.txt` includes JSON-LD types `Article` and `FAQPage`, and the h1 `16×25×1 furnace filters, compared without fake scores`. The body contains `What is the actual size of a nominal 16×25×1 filter?`.
- **Another size, separately.** Choose header `20×25 face` only when proving `/20x25x1-furnace-filters`. Run `filter-fit follow --from / --name "20×25 face" --expect "20×25×1 furnace filters, compared without fake scores"`. Do not file that artifact under the `16×25×1` pass.

## Gotchas

- Not every size page emits `FAQPage`. Require it for `/16x25x1-furnace-filters`, `/16x20x1-furnace-filters`, `/20x25x1-furnace-filters`, `/14x25x1-furnace-filters`, `/20x20x1-furnace-filters`, `/16x25x4-furnace-filters`, `/16x20x4-furnace-filters`, `/20x25x4-furnace-filters`, `/20x20x4-furnace-filters`, and `/20x30x4-furnace-filters`. Do not fail the others for its absence.
- `16×24` is selectable in the picker and has no size guide. Do not add a route to make a journey pass.
- `/12x24x1-furnace-filters` is a real guide. The README route table does not list it. Drive the app, not that table.
- Shop-example anchors use `rel="nofollow sponsored noopener noreferrer"` and `tag=laqaer-20`. Seeing them in the HTML is the side effect to record. Requesting them is out of bounds.
- These pages do not show star ratings or a “best overall” score. Do not treat a missing score widget as a failure, and do not invent one.
- 4-inch titles are not the same sentence as 1-inch titles. `/16x25x4-furnace-filters` h1 is `16×25×4 furnace filters and air filters are the same pad`.
