# FF-EXP-001 discovery and commercial-evidence review

Observation date: 2026-10-15. Live audit requests: 23:06–23:07 UTC / 16:06–16:07 PDT. No discretionary spending, retailer clicks, new content or site-code changes.

## Conclusion

The three experimental cabinet guides are publicly reachable, crawlable under the observed directives, internally linked and present in the production sitemap. All three appeared in public search results. No technical indexing defect was demonstrated that would justify a production repair.

Google's current index verdict and page-level impressions/clicks remain **unknown**. Search Console was signed out in the available browser. Public search observations do not identify the underlying search provider as Google or establish customer traffic. The absence of authenticated reporting must not be recorded as non-indexation or zero impressions.

The owner-reported zero Associates clicks/orders is a real negative result for the shared tag. It does not explain where the funnel failed. The highest-value action is to recover the missing page-level exposure evidence, preserve the current experiment, and decide on 2026-11-10 using the conditional framework below.

## Evidence and its limits

| Claim | Observation | What it establishes / does not establish |
| --- | --- | --- |
| Current source | Main `a7e71639c2318c27b1bbe1a90f8ed16b6b425266`; [PR #29](https://github.com/laqaer/filter-fit/pull/29) merged 2026-10-15 | The latest operating record includes the owner's zero-row Associates report. |
| Production revision | Vercel production `dpl_6DjWDfvFQuaUg93abN5QFaW1Pme5`, READY, mapped to the same SHA; same deployment ID in live scripts | The source and inspected production build correspond. READY alone would not establish live content correctness. |
| Sitemap and robots | `/sitemap.xml` and `/robots.txt` return 200; 22 unique sitemap URLs, all return 200; all canonical tags match; robots allows `/` and lists the sitemap | Observed technical discovery paths work. Google sitemap submission/processing is not verified. |
| Three target guides | Each returns 200 without a redirect; one correct absolute canonical; `index, follow`; no observed X-Robots-Tag; substantial content in initial HTML | No observed noindex, broken canonical, soft error body or JavaScript-only content barrier. This is not a Googlebot live test or index verdict. |
| Internal linking | Direct HTML homepage links; inbound anchors from all other 21 sitemap pages, including shared navigation; relevant contextual links in the chart, depth comparison and corresponding 1-inch guide | The pages are not orphaned. Link counts include navigation and do not quantify search authority. |
| URL variants | Target trailing slash → 308 → canonical 200; HTTP homepage → 308 → HTTPS 200; www homepage → 307 → apex 200 | Expected consolidation. Historical “Page with redirect” mail does not prove the destination is excluded. |
| Shopping path | Three Amazon anchors per target: correct size, MERV 8/11/13, `tag=laqaer-20`, `ascsubtag`, sponsored/nofollow attributes and disclosure | Links are present and correctly constructed. Amazon acceptance, actual clicks, conversion and subtag reportability were not independently tested. No artificial affiliate clicks were generated. |
| Public search | Exact `site:filterfitguide.com/<guide-path>` searches returned each target with its matching title. A second search provider returned no results | Positive public search visibility evidence; provider differences demonstrate why absence is inconclusive. No claim of Google Search Console verification, normal-query rankings or customer impressions. |
| Existing daily watch | [Run 38743470225](https://github.com/laqaer/filter-fit/actions/runs/38743470225), 2026-10-15 13:31 UTC, source `f2c079cb1028823ed61251f5bcc79ed5ae21b8ae`; job log says `PASS: production watch https://filterfitguide.com (7 pages)` | Hosted live availability checks passed before PR #29. This monitor measures neither indexation nor demand. |
| Search Console access | `https://search.google.com/search-console` redirected to `/search-console/about` with “Start now”; no property or report visible | This browser had no authenticated report access. The property may still be verified and populated. |
| Mail evidence | Connected Gmail differs from the historical Search Console recipient; relevant search found no messages | The historical inbox was not searched. No inference about absent notices or indexation is valid. |
| Visitor evidence | No analytics integration found in inspected app/package source or emitted script sources; Vercel observability schema request returned 404 without metrics | Human visitors, sessions and page-level traffic remain unknown. Hosting requests would include crawlers and monitoring and must not be equated with people. |
| Associates | Owner's report for `laqaer-20`, approximately 2026-09-15–2026-10-15: no rows, zero recorded clicks/orders, recorded in PR #29 | Shared-tag zero includes FilterFit. Future positive shared-tag totals must not automatically be attributed to FilterFit or a particular guide. |

[Machine-readable production snapshot](evidence/ff-exp-001-discovery-2026-10-15.json) records observation timestamps, response hashes, canonical/meta fields, redirects and the nine affiliate URLs. Audit user agent: `FilterFitDiscoveryAudit/1.0`. These requests are synthetic and should be excluded from any later human-traffic analysis. The audit followed only FilterFit URLs, not retailers.

## Resolve the missing evidence at no new cost

Use the existing verified Search Console property through an authenticated session, or obtain exports/screenshots from that property. Do not create a duplicate property, buy an SEO tool, enable paid observability or change tracking tags merely to complete this review.

For each exact canonical:

- `https://filterfitguide.com/20x25x4-furnace-filters`
- `https://filterfitguide.com/16x20x4-furnace-filters`
- `https://filterfitguide.com/20x20x4-furnace-filters`

1. Capture the **indexed URL Inspection result**, page-indexing reason, last crawl, crawl/index permission, page-fetch result, user-declared canonical and Google-selected canonical. Keep the observation date. A successful live test establishes eligibility, not actual inclusion in Google's index. If indexed, current status does not retrospectively prove it was indexed by the October 10 checkpoint.
2. Read the sitemap report for the production sitemap: submitted URL, status, last read and discovered pages. If absent, submit the existing valid sitemap at no cost. If a specific guide is eligible but not indexed, inspect the stated reason before requesting indexing; requests are not guarantees and should not be repeatedly spammed.
3. Export Search Performance, search type **Web**, with an **exact Page filter** for each canonical, 2026-09-26 through the latest complete available reporting date. Record impressions, clicks, CTR, average position, queries and dates. Read all countries first, then the US subset separately; preserve every filter and the reporting timezone. Do not silently treat delayed/provisional recent dates as complete.
4. Compare 2026-09-26–10-02, 10-03–10-09, and 10-10 onward through the latest complete date. Unequal periods need per-day interpretation. An impression proves the page was served during that period; zero impressions does not prove non-indexation. Search clicks measure Google referrals, not unique people, sessions or Amazon clicks.
5. If existing hosting or analytics reports are available at no extra cost, inspect human landing-page traffic while excluding bots, the daily production watch, this audit and owner tests. If no such evidence exists, leave visitors unknown. Keep the Associates zero as a separate observation rather than calculating an unsupported outbound conversion rate.

## Diagnosis and November 10 decision

The 14-day checkpoint ended 2026-10-10 with an unverified result. October 15 is day 19 of the original 45-day commercial window; 26 days remain. The original technical success checks (200, sitemap, tagged links and disclosure) have passed, but they do not establish commercial success. No minimum traffic denominator or click-through target was preregistered; do not invent one retroactively to force a pass/fail result.

| Evidence at evaluation | Defensible interpretation | Highest-value action |
| --- | --- | --- |
| Google confirms non-indexation and Associates still shows no activity | The experiment failed to establish the intended discovery-to-affiliate path; this alone does not prove shoppers reject the offer | Apply the original stop/pivot rule: stop adding sizes and reconsider the offer or page. Repair only a demonstrated technical cause; for crawled-but-not-indexed without a technical blocker, assess usefulness and differentiation instead of generating more similar pages. |
| Indexed, zero or very low impressions | Search exposure/demand/visibility remains the bottleneck; offer conversion has not been adequately tested | Inspect query demand and relevance; improve one existing page or reconsider the acquisition approach within $0. Do not expand the size catalog. |
| Meaningful impressions but few/no search clicks | Search-result relevance, ranking or presentation may be limiting referrals | Use actual queries and positions to choose one existing title/description or intent adjustment; avoid claiming a CTA test has failed without visits. |
| Relevant visits established, still zero affiliate activity | On-page fit-selection, shopping CTA, retailer handoff or attribution is the next hypothesis | Verify attribution and test one existing page's shopping path. A clearer cabinet/actual-dimension decision followed by a nearby shopping link is a candidate, not a validated remedy. |
| Affiliate activity emerges | Some commercial engagement exists; shared-tag totals may include other sites | Attribute FilterFit evidence before expansion; inspect orders, commission and costs separately. Clicks alone do not establish profitability. |
| Reports remain inaccessible | Commercially unvalidated; measurement incomplete | Keep expansion stopped and spend at $0. Record the unresolved evidence requirement; do not assert “not indexed,” declare the offer disproven, or automatically restart/extend the 45-day clock. |

This is an interpretation framework, not a replacement for the original stop rule. At the deadline, record the actual denominator and the uncertainty. If available exposure remains too small to distinguish hypotheses, say so explicitly. Waiting longer is a proposed follow-on experiment only if supported by observed traction and a separately recorded decision; it is not today's conclusion.

## Reusable review prompt

> Review `{repository}` experiment `{experiment_id}` at `{observation_date}` against its original `{deadline}` and `{spend_ceiling}`. Recover the current operating record and production revision first. Inspect only the existing target URLs, crawl directives, canonical tags, sitemap and internal links. Combine authenticated URL Inspection, exact-page performance and affiliate evidence using matching date windows. Separate observed zero from missing access, technical eligibility from index inclusion, and search clicks from human visitors and retailer clicks. Implement only a demonstrated scoped defect through the repository workflow. Record sources, tested revisions, limitations, one highest-value action and the conditional deadline decision; do not add content, spend money or reset the experiment without authorization.

## Primary interpretation references

- [Google URL Inspection documentation](https://support.google.com/webmasters/answer/9012289): indexed inspection versus live eligibility test and Google-selected canonical.
- [Google site-search operator documentation](https://developers.google.com/search/docs/monitor-debug/search-operators/all-search-site): results are not exhaustive; a missing result is not a reliable exclusion verdict.
- [Google Search Performance documentation](https://support.google.com/webmasters/answer/7576553): impressions, clicks and report filtering.
- [Production source at the inspected revision](https://github.com/laqaer/filter-fit/tree/a7e71639c2318c27b1bbe1a90f8ed16b6b425266).
