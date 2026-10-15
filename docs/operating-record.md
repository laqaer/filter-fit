# FilterFit operating record

Updated: 2026-10-15. This file is the handoff. It is not a claim that the business is profitable.

## Mission and offer

FilterFit helps a US homeowner buy the correct furnace filter — nominal size, slot depth, then MERV — without a fake review score. The customer does not pay FilterFit. Amazon pays an Associates commission on qualifying purchases through tag `laqaer-20`.

Primary buyer: a homeowner who already has a filter slot and is about to replace the pad.

Primary channel: Google organic search for exact-size queries. No paid acquisition. New discretionary spend is **$0** until the owner sets a cap.

Why this offer: the domain, the guides, the Associates tag, and the Vercel production project already exist. A direct checkout would need a merchant account this workspace cannot use, and homeowners already expect to buy the filter at a retailer.

## What was observed on 2026-09-26

- Repository `laqaer/filter-fit` at `1602f8e` on `main` before this change.
- Production `https://filterfitguide.com` returned HTTP 200 from Vercel. `www` 307s to the apex. Trailing-slash URLs 308 to the non-slash URL. Google Search Console mail on 2026-09-16 called that class of URL “Page with redirect.” That redirect is intentional.
- Search Console mail (2026-09-08 verification, 2026-09-13 impression collection started) arrives at `add461977@gmail.com`. No Amazon Associates payment or performance mail was found in that mailbox.
- Vercel project `prj_enRAWHMaAnLvR51UCEdtawV29e2d` (`filter-fit`), hobby plan on the authenticated user, team `team_iqR4NlUL0GDmg2ea1f5JflsB`. Team-scoped token calls return 403. Custom domain is public. Preview deployments use Vercel SSO.
- Cloudflare account Laqaer Products does not hold the `filterfitguide.com` zone. DNS is Vercel (`ns1.vercel-dns.com`). There is no FilterFit Worker.
- OpenSEO account `andy@chartingstars.com` reported 0 credits. No keyword API was called.
- Stripe MCP is not authenticated. It is not required for the Associates offer.
- `laqaer/agent-prompts` registry does not list FilterFit. `laqaer/memory` has no FilterFit record. Forge’s merge restriction applies to Forge, not to this repository.
- No open GitHub issues.

## Experiment FF-EXP-001

Set before the pages in this change were treated as a result.

| Field | Value |
| --- | --- |
| Hypothesis | Shoppers who already picked a size and MERV will click a disclosed Amazon search, and exact-size 4-inch queries (20×25×4, 16×20×4, 20×20×4) are uncovered commercial URLs. |
| Audience | US homeowners with one of those media cabinets, or anyone using the homepage picker. |
| Offer | The existing comparison, plus one Amazon search that matches the picker selection, plus three cabinet guides with three MERV searches each. |
| Channel | Google organic, via sitemap and internal links. No outreach, no ads. |
| Cost ceiling | $0 new spend. Hosting stays on the existing Vercel project. |
| Success metric | Production URLs return 200, sit in the sitemap, and contain `tag=laqaer-20` plus the Associates disclosure. Profit stays unverified until Associates reporting is readable. |
| Evaluation window | 14 days for indexation mail or a manual URL inspection. 45 days before judging commission evidence. |
| Stop or pivot | Revert if production verification fails. If day 45 still has no Associates evidence and the new URLs are not indexed, stop adding sizes and change the offer or the page that earns the click. |

## Profit ledger (provisional)

| Item | Amount | Evidence |
| --- | --- | --- |
| Cash collected | $0 observed | 2026-10-15: the Associates report for `laqaer-20` had no rows for the last 30 days. No Associates payment mail as of 2026-09-26 14:22 UTC. Rechecked the connected mailbox for filterfitguide.com Search Console mail and Amazon Associates payment or performance mail newer than 2 days: none. |
| Earned revenue | $0 recorded for the 30 days to 2026-10-15 | The owner read the Associates report for `laqaer-20` on 2026-10-15: no rows, so 0 recorded clicks and 0 orders. The tag is shared with other sites, so this is also a 0 for FilterFit alone. |
| Expenses paid | $0 new | No new vendor was purchased. Vercel hobby plan was already active. Team invoices were not readable (403). |
| Costs incurred, not billed | Not visible | Hobby plan can still generate overages this token cannot see. |
| Customer liabilities | None | No subscriptions, no prepaid FilterFit orders. |
| Net operating profit | Unverified. Do not read $0 revenue as proof of $0 profit or of a loss. | |

Inherited revenue and new revenue cannot be separated until Associates reporting shows rows. On 2026-10-15 there were none to separate.

## Unattended operation

- Configured: `.github/workflows/production-watch.yml` runs `scripts/production-watch.mjs` daily at 13:17 UTC and on manual dispatch. It only requests `filterfitguide.com`.
- Unattended-tested: GitHub Actions run `36245087685` fired from `schedule` at 2026-09-26 13:25 UTC (cron delay from 13:17) on `main` and succeeded in 9s. The log line is `PASS: production watch https://filterfitguide.com (7 pages)`. No secrets and no paid API. The job is read-only, so a retry cannot double-charge or double-message.
- The daily agent timer `filterfit-daily-ops` is a follow-up queue in the Cursor conversation. It is not itself a deployed worker. This 14:22 UTC pass is that timer reading the Actions result.
- Stop the watch by disabling the GitHub Actions workflow. Stop the agent follow-up from the Cursor agent run.

## Verification on 2026-09-26

Local, before merge:

- `npm run lint`, `npm run typecheck`, and `node scripts/test-size-guide.mjs` passed (132 selector cases).
- `npm run build` wrote the static export, including the three new routes.
- `node scripts/serve-export.mjs` plus `SMOKE_BASE_URL=http://127.0.0.1:3100` passed the affiliate smoke (exactly three tagged searches per size page, canonicals, sitemap, disclosure).
- Exported homepage HTML contains the default picker link `tag=laqaer-20` and `ascsubtag=ff-picker-16x25x1-merv11`.

Production, after merge of PR #15 (`2e9e041`) and Vercel deployment `dpl_DxJ3eFWx5ipSPsSkCvWhriDkQqzk` (state READY):

- `node scripts/production-watch.mjs` against `https://filterfitguide.com` passed: homepage, three existing money pages, and the three new cabinet pages returned 200 with the disclosure, `tag=laqaer-20`, and the MERV 11 search.
- Homepage HTML on the custom domain contains `ascsubtag=ff-picker-16x25x1-merv11`.
- A datacenter HEAD request to the Amazon search URL returned 503. That is not evidence the link is broken for a browser. It was not retried as a purchase.

The first scheduled production-watch run has now succeeded. See Unattended operation.

## Daily check 2026-09-26 14:22 UTC

- Production watch run `36245087685` passed. No site change in this check.
- Mailbox search found no new Search Console or Associates mail. FF-EXP-001 still has no indexation mail and no commission evidence. Indexation window runs through 2026-10-10. Commission window runs through 2026-11-10. No new size pages in this check.
- `main` at the start of this check was `2513955` (later content commits from other work). This check did not alter those pages.
- Spend this check: $0.

## Associates check 2026-10-15

- The owner opened Amazon Associates reporting for tag `laqaer-20` on 2026-10-15. The report showed no rows for the last 30 days.
- Recorded result: 0 clicks and 0 ordered items through `laqaer-20` from about 2026-09-15 to 2026-10-15. This covers every site that uses the tag, so FilterFit's share is also 0.
- This is day 19 of the 45-day commission window (FF-EXP-001 started 2026-09-26). The window still runs through 2026-11-10.
- Indexation is not recorded here. The 14-day indexation window ended 2026-10-10; record its result separately before the stop-or-pivot call.
- No site change in this check. Spend this check: $0.

## Discovery check 2026-10-15

**Finding: no technical indexing blocker was demonstrated. Google index status, impressions, search clicks and human visits remain unknown because authenticated evidence was unavailable. Unknown is not zero or “not indexed.”**

The production audit requested pages at 23:06–23:07 UTC (16:06–16:07 PDT). Source was `a7e71639c2318c27b1bbe1a90f8ed16b6b425266`, the merged PR #29 revision. Vercel reported production deployment `dpl_6DjWDfvFQuaUg93abN5QFaW1Pme5` READY for that SHA; the live HTML referenced the same deployment.

| FF-EXP-001 guide | Live technical checks | Public search appearance | Google index status / impressions / search clicks / human visits |
| --- | --- | --- | --- |
| [20×25×4](https://filterfitguide.com/20x25x4-furnace-filters) | 200; self-canonical; index/follow; sitemap; direct homepage link | Found in the audit's public search results | All unknown; authenticated reports unavailable |
| [16×20×4](https://filterfitguide.com/16x20x4-furnace-filters) | 200; self-canonical; index/follow; sitemap; direct homepage link | Found in the audit's public search results | All unknown; authenticated reports unavailable |
| [20×20×4](https://filterfitguide.com/20x20x4-furnace-filters) | 200; self-canonical; index/follow; sitemap; direct homepage link | Found in the audit's public search results | All unknown; authenticated reports unavailable |

- All 22 sitemap URLs returned 200 with matching canonicals. `robots.txt` allows crawling and advertises the production sitemap. The three guides have no observed `X-Robots-Tag` restriction and contain their content in the initial HTML.
- Each target is linked from all 21 other sitemap pages, including shared navigation; this count is not a measure of editorial authority. Contextual links also exist from the size/depth chart, depth comparison and corresponding 1-inch guide. Each guide has exactly three correctly sized MERV 8/11/13 Amazon search links with `tag=laqaer-20`, subtag parameters and disclosure. No retailer links were followed during the audit.
- Trailing-slash target URLs return 308 to the non-slash canonical and then 200. The `www` homepage returns 307 to the apex; HTTP returns 308 to HTTPS. The earlier “Page with redirect” notice does not establish a problem with these canonical pages.
- Public search returned all three guides, but the search tool does not establish Google's current URL Inspection verdict, ranking, impressions or customer traffic. Another search provider returned no matches. These are discovery observations, not exhaustive index inventories.
- Search Console opened to its public sign-in landing page. The connected mailbox is different from the historical Search Console recipient recorded above; an empty mail search in that mailbox is not evidence that Google sent no notices. The Vercel observability schema request returned 404 and yielded no traffic measurements. No visitor analytics integration was identified in the inspected source/HTML. No new tracking service was added.
- Today's existing scheduled [production watch](https://github.com/laqaer/filter-fit/actions/runs/38743470225) passed all seven commercial-page checks at 13:31 UTC using source `f2c079cb1028823ed61251f5bcc79ed5ae21b8ae`. That is availability/link validation, not indexation or customer evidence.

**Recommendation:** obtain the three URL Inspection results and exact-page Search Performance reports before changing the offer. Zero recorded Associates clicks without a traffic denominator cannot distinguish insufficient exposure from weak click-through. Day 19 leaves 26 days until the existing 2026-11-10 commercial decision; elapsed time alone is not evidence that more waiting will work. The 2026-10-10 indexation checkpoint remains unverified, not failed. This check made no site-code changes and authorized no spend or content expansion.

Detailed evidence, collection procedure and the conditional stop/pivot decision are in [the discovery review](ff-exp-001-discovery-2026-10-15.md), with a [production observation snapshot](evidence/ff-exp-001-discovery-2026-10-15.json). The original experiment decision rule and deadline are unchanged.

## Next action

1. Obtain authenticated Search Console evidence for the three exact canonical URLs: indexed verdict, Google-selected canonical, last crawl, sitemap status, and impressions/clicks/CTR/position since 2026-09-26 through the latest complete reporting date. Preserve the report's dates and filters. Search clicks are not unique visitors. Record missing access as unknown.
2. Keep new discretionary spend at **$0**, hold further size-page expansion, and retain the existing production watch. Make only a scoped repair if evidence demonstrates a technical problem. If traffic is established but affiliate clicks remain absent, prioritize one existing page's fit-selection and shopping path over additional sizes.
3. On **2026-11-10**, combine a fresh Associates read with Google evidence. If affiliate activity remains absent **and Google confirms the new URLs are not indexed**, apply the established stop/pivot rule: stop adding sizes and change the offer or the page that earns the click. If indexed but unseen, address search demand/visibility; if visited but not earning affiliate clicks, investigate the offer/CTA and attribution. If reports are still inaccessible, record “commercially unvalidated; measurement incomplete,” keep expansion stopped, and do not substitute missing access for a failed-indexing result or automatically extend the experiment.
