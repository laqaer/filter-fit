# Decision hub

The homepage is the reader’s starting point: a fixed explanation of size, then depth, then MERV, a picker that updates a “what to buy” result, and a list of every guide.

## Sub-features

- `hub-identity` shows the FilterFit hub title and the picker at its default rack.
- `hub-picker` changes face, depth, or MERV and replaces the result headline and result links.
- `hub-result-link` opens a guide from the updated result panel.
- `hub-nav` follows the header links (logo, Picker, the first three guide kickers, About).
- `hub-guides` follows a guide title from the Guides list.

## How to get to it (user POV)

- Open `/`.
- Follow the header or footer logo `FilterFit Size · Depth · MERV` from any page (`--nth 1` is the header, `--nth 2` is the footer).
- Follow header `Picker`, which points at `/#picker`.
- Use the browser Back control after opening a guide. There is no in-app account or search box.

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes for this run’s port.
- Chrome is available for `click`. If it is missing, the picker steps fail; do not replace them with a GET of the destination guide.
- Default picker state, with no clicks, is face `16×25`, depth `1 inch`, MERV `MERV 11`.

- **Identity.** Open the hub. Run `filter-fit get / --expect "Decision tree" --expect "Size → depth → MERV → brands" --expect "Guides" --expect "Affiliate disclosure." --expect "HVAC caveat."`. Status is 200, title is `FilterFit — Furnace filters by MERV, size, and depth`, and h1 is `Pick a furnace filter by size, slot depth, then MERV`.
- **Default result.** The same response includes h3 text `16×25×1: MERV 11 is the usual 1-inch everyday pick`. Run `filter-fit get / --expect "16×25×1: MERV 11 is the usual 1-inch everyday pick"`.
- **Change MERV.** Choose `MERV 13`. Run `filter-fit click --name "MERV 13" --expect "16×25×1: 1-inch MERV 13 is the tightest common combo" --follow-name "Is MERV 13 safe for your furnace?" --expect "When MERV 13 is fine — and when it chokes the blower" --dir .cursor/skills/verify-filter-fit/evidence/decision-hub --screenshot .cursor/skills/verify-filter-fit/evidence/decision-hub/picker.png --feature decision-hub`. The button stays `aria-pressed`, the result headline changes, and the result panel link opens `/merv-13-safe-for-furnace` with that guide’s h1. The screenshot shows the pressed MERV 13 state, not only the destination.
- **Header into a guide.** Choose `Thin media`. Run `filter-fit follow --from / --name "Thin media" --expect "MERV 11 vs 13 when the rack is only an inch deep" --dir .cursor/skills/verify-filter-fit/evidence/decision-hub --action thin-media.txt --feature decision-hub`. The href is `/merv-11-vs-13-1-inch`.
- **Header into the common size.** Choose `Common size`. Run `filter-fit follow --from / --name "Common size" --expect "16×25×1 furnace filters, compared without fake scores"`. The href is `/16x25x1-furnace-filters`.
- **Guides list.** Choose the second `MERV 11 vs 13 in a 1-inch slot` link (the card under Guides; the first is the default picker result, the third is the footer). Run `filter-fit follow --from / --name "MERV 11 vs 13 in a 1-inch slot" --nth 2 --expect "MERV 11 vs 13 when the rack is only an inch deep"`.
- **Proof files.** Save the hub itself. Run `filter-fit snapshot / --dir .cursor/skills/verify-filter-fit/evidence/decision-hub --as home --screenshot --feature decision-hub`. `home.txt` lists the Primary nav links and a top-level JSON-LD type `WebSite`. `picker.png` shows the MERV 13 headline. `arrived.txt` is the guide opened from the result panel.

## Gotchas

- Picker changes exist only in the browser. A fresh `get /` always shows MERV 11 on 16×25×1. Do not treat that GET as proof that MERV 13 was selected.
- `click --follow-name` ignores links outside the result panel. `Is MERV 13 safe for your furnace?` is already in the Guides list and the footer before any click; those copies do not prove the picker changed.
- The result panel also contains `Shop MERV … filters on Amazon`. Do not follow it. The helper refuses Amazon hosts.
- Face `16×24` is a picker button and has no guide route. Selecting it must not be “fixed” by inventing a URL.
- `12×24` is labeled `less common` on the button. Its guide exists at `/12x24x1-furnace-filters`. The README route table omits that path; the running app and `lib/guides.ts` are the source of routes.
- Header kickers `Thin media`, `Common size`, and `20×25 face` are the first three `guides[].kicker` values. Reordering `lib/guides.ts` changes those names.
- Logo text includes a visible `FF` mark that is `aria-hidden`. The accessible name is `FilterFit Size · Depth · MERV`.
- Local HTML canonicals and JSON-LD use `https://filterfitguide.com`. That is not a request to production.
