# About and privacy

About states that FilterFit is a Laqaer Products directory with editorial rules and a contact address. Privacy describes a site with no accounts. Both are linked from the footer on every page, and About is also in the header.

## Sub-features

- `about-arrive` opens About from the header and from the footer and shows the editorial rules.
- `privacy-arrive` opens Privacy from the footer and shows the policy date.
- `about-onward` follows About’s link to Privacy.
- `about-org` shows a top-level Organization JSON-LD script on About only.

## How to get to it (user POV)

- Choose header `About`.
- Choose footer `About & editorial standards`.
- Choose footer `Privacy`.
- On About, choose the word `privacy` in the funding section.
- The footer also shows `hello@filterfitguide.com`. That is a mailto link. Do not open it.

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes.
- Use `/` as the source page for header and footer links.

- **Header About.** Choose `About`. Run `filter-fit follow --from / --name "About" --expect "FilterFit is a directory, not a filter brand" --expect "hello@filterfitguide.com" --expect "No fake scores." --dir .cursor/skills/verify-filter-fit/evidence/about-and-privacy --action about-header.txt --feature about-and-privacy`. Status is 200, title is `About FilterFit · FilterFit`, and h1 is `FilterFit is a directory, not a filter brand`.
- **Footer About.** Choose `About & editorial standards`. Run `filter-fit follow --from / --name "About & editorial standards" --expect "FilterFit is a directory, not a filter brand"`. The href is `/about`.
- **Organization script.** Run `filter-fit snapshot /about --dir .cursor/skills/verify-filter-fit/evidence/about-and-privacy --as about --screenshot --feature about-and-privacy`. `about.txt` lists top-level JSON-LD types `WebSite` and `Organization` (two scripts). The hub snapshot lists only `WebSite`.
- **Footer Privacy.** Choose `Privacy`. Run `filter-fit follow --from / --name "Privacy" --expect "Privacy policy" --expect "Last updated 2026-09-11." --expect "We do not run user accounts." --dir .cursor/skills/verify-filter-fit/evidence/about-and-privacy --action privacy-footer.txt --feature about-and-privacy`. Title is `Privacy policy · FilterFit` and h1 is `Privacy policy`.
- **About to Privacy.** Choose `privacy` on the About page. Run `filter-fit follow --from /about --name "privacy" --expect "Privacy policy"`. The href is `/privacy`.
- **Mailto stays closed.** Run `filter-fit follow --from / --name "hello@filterfitguide.com"`. The command fails without sending mail. Keep that stderr with the proof.

## Gotchas

- Every page’s WebSite JSON-LD includes a nested publisher Organization. A string search for `"@type":"Organization"` on `/` is the publisher inside WebSite, not the About script. Count scripts, which `snapshot` does in `*.txt` under `jsonld:`.
- Header `About` and footer `About & editorial standards` are different names for `/about`. Prove the one the journey names.
- The privacy date is `site.updated` (`2026-09-11`), not `site.contentUpdated` (`2026-09-26`). A sitemap `lastmod` of `2026-09-26` does not update this sentence.
- Do not follow `mailto:hello@filterfitguide.com`.
- There is no account, cookie banner, or newsletter form. Do not report those as missing features to implement.
