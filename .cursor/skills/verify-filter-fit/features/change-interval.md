# How often to change a furnace filter

This guide gives depth-aware change ranges for a residential furnace filter, the signs to change early, and the steps to seat the next pad. Readers arrive from the Guides list or the footer, then follow links to the size chart, the MERV guides, and the size comparisons.

## Sub-features

- `interval-arrive` opens the guide from the homepage Guides list and shows its h1.
- `interval-onward` follows an in-guide link to a size comparison.
- `interval-structured` exposes Article, FAQPage, and HowTo JSON-LD, the Associates disclosure, and `tag=laqaer-20` on the Amazon searches.

## How to get to it (user POV)

- On `/`, choose `How often to change a furnace filter` in the Guides list (`--nth 1`). The footer copy is `--nth 2`.
- The header does not list this guide. The first three kickers stay `Thin media`, `Common size`, and `20×25 face`.
- From the guide, choose `16×25×1 comparison`. The first copy is the in-body link (`--nth 1`). A later FAQ repeats the same name.

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes.
- Start from `/` unless the bullet names another source page.

- **Guides-list entry.** Choose the card, not the footer. Run `filter-fit follow --from / --name "How often to change a furnace filter" --nth 1 --expect "How often to change a furnace filter" --expect "FAQPage" --expect "HowTo" --dir .cursor/skills/verify-filter-fit/evidence/change-interval --action guides-card.txt --feature change-interval`. Status is 200, title is `How often to change a furnace filter · FilterFit`, and h1 is `How often to change a furnace filter`. `action.txt`’s `nth` line is `1/2` and the href is `/how-often-to-change-furnace-filter`.
- **Onward link.** From the guide, choose the first `16×25×1 comparison`. Run `filter-fit follow --from /how-often-to-change-furnace-filter --name "16×25×1 comparison" --nth 1 --expect "16×25×1 furnace filters, compared without fake scores"`. The href is `/16x25x1-furnace-filters`.
- **Proof.** Save the arrived guide. Run `filter-fit snapshot /how-often-to-change-furnace-filter --dir .cursor/skills/verify-filter-fit/evidence/change-interval --as guide --screenshot --feature change-interval`. `guide.txt` includes JSON-LD types `Article`, `FAQPage`, and `HowTo`, h1 as above, and Primary nav. `guide.html` contains `https://filterfitguide.com/how-often-to-change-furnace-filter`, `tag=laqaer-20`, and `As an Amazon Associate I earn from qualifying purchases`.

## Gotchas

- `--nth 2` on the title is the footer, a real entry and a different one from the Guides card.
- The page is last in `lib/guides.ts` so the header kickers do not change. Reordering it into the first three changes Primary nav.
- In-guide Amazon searches are out of bounds. Do not follow them. Seeing `tag=laqaer-20` in the saved HTML is the observation.
- A direct `get /how-often-to-change-furnace-filter` checks the document only. It does not pass `interval-arrive`.
