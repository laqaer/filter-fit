# MERV 11 vs 13 in a 1-inch slot

This guide explains why raising MERV inside a 1-inch rack is a different decision from raising MERV in a deeper cabinet. Readers arrive from the header, the picker, the Guides list, or the footer, then keep reading linked size and depth guides.

## Sub-features

- `merv-arrive` opens the guide from each hub entry and shows its h1.
- `merv-onward` follows an in-guide link to a size or depth page.
- `merv-article` exposes Article and FAQPage JSON-LD and the shared footer disclosure.

## How to get to it (user POV)

- On `/`, choose header `Thin media`.
- On `/`, choose `MERV 11 vs 13 in a 1-inch slot` in the default picker result (`--nth 1`), the Guides card (`--nth 2`), or the footer (`--nth 3`).
- After the picker is on 1-inch MERV 13, choose that same title in the result panel (`click --follow-name`).
- From another guide, choose a link whose visible text points at this comparison (wording differs by page; match the text on that page).

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes.
- Start from `/` unless the bullet names another source page.

- **Header entry.** Choose `Thin media`. Run `filter-fit follow --from / --name "Thin media" --expect "MERV 11 vs 13 when the rack is only an inch deep" --expect "Article" --dir .cursor/skills/verify-filter-fit/evidence/merv-11-vs-13 --action header.txt --feature merv-11-vs-13`. Status is 200, title is `MERV 11 vs MERV 13 in a 1-inch furnace filter · FilterFit`, and h1 is `MERV 11 vs 13 when the rack is only an inch deep`.
- **Guides-card entry.** Choose the card, not the picker result and not the footer. Run `filter-fit follow --from / --name "MERV 11 vs 13 in a 1-inch slot" --nth 2 --expect "MERV 11 vs 13 when the rack is only an inch deep" --dir .cursor/skills/verify-filter-fit/evidence/merv-11-vs-13 --action guides-card.txt --feature merv-11-vs-13`. `action.txt`’s `nth` line is `2/3` and the href is `/merv-11-vs-13-1-inch`.
- **Onward link.** From the guide, choose `16×25×1 comparison`. Run `filter-fit follow --from /merv-11-vs-13-1-inch --name "16×25×1 comparison" --expect "16×25×1 furnace filters, compared without fake scores"`. The href is `/16x25x1-furnace-filters`.
- **Proof.** Save the arrived guide. Run `filter-fit snapshot /merv-11-vs-13-1-inch --dir .cursor/skills/verify-filter-fit/evidence/merv-11-vs-13 --as guide --screenshot --feature merv-11-vs-13`. `guide.txt` includes JSON-LD types `Article` and `FAQPage`, h1 as above, and Primary nav. `guide.html` contains `https://filterfitguide.com/merv-11-vs-13-1-inch`.

## Gotchas

- `--nth 1` on the title is the default picker result, which is a real entry but a different one from the Guides card.
- The page emits `FAQPage` from `faqPageJsonLd`, with a visible Questions section. `16×25×1` uses the same helper.
- In-guide Amazon or other retailer links, if present on a later edit, are out of bounds. This guide’s onward proof is the internal `16×25×1 comparison` link.
- There is no breadcrumb nav and no “On this page” list. Do not invent those handles.
- A direct `get /merv-11-vs-13-1-inch` checks the document only. It does not pass `merv-arrive`.
