# FilterFit operating record

Updated: 2026-09-26. This file is the handoff. It is not a claim that the business is profitable.

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
| Cash collected | $0 observed | No Associates or other payment mail in the connected mailbox. |
| Earned revenue | Unknown, not verified | Tag is live in HTML. Clicks and shipments are not visible here. |
| Expenses paid | $0 new | No new vendor was purchased. Vercel hobby plan was already active. Team invoices were not readable (403). |
| Costs incurred, not billed | Not visible | Hobby plan can still generate overages this token cannot see. |
| Customer liabilities | None | No subscriptions, no prepaid FilterFit orders. |
| Net operating profit | Unverified. Do not read $0 revenue as proof of $0 profit or of a loss. | |

Inherited revenue and new revenue cannot be separated until Associates reporting exists.

## Unattended operation

- Configured: `.github/workflows/production-watch.yml` runs `scripts/production-watch.mjs` daily at 13:17 UTC and on manual dispatch. It only requests `filterfitguide.com`.
- Not true yet: a passing unattended run. The first scheduled run is the evidence. A workflow file is not a completed run.
- Cursor agent sessions are not a 24/7 worker. A daily timer in this agent conversation is a follow-up queue, not a deployed business runtime.
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

The daily GitHub Action has not fired yet. Configured is not the same as an unattended run.

## Next action

Wait for the 13:17 UTC production-watch run and for Search Console or Associates evidence. Do not buy traffic. Do not add more sizes until FF-EXP-001’s 14-day indexation window says something.
