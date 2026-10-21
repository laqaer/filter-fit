# SEO surfaces

A crawler reading this local instance can fetch `/robots.txt`, `/sitemap.xml`, and `/ads.txt`. The files describe the public site. Fetching them locally does not fetch production.

## Sub-features

- `robots-local` serves an allow-all robots file that names the production sitemap URL.
- `sitemap-local` lists the hub, About, Privacy, and every guide href from `lib/guides.ts`.
- `ads-placeholder` serves the comment-only ads.txt placeholder.

## How to get to it (user POV)

- Request `/robots.txt`.
- Request the sitemap URL named by robots. Locally that body is served at `/sitemap.xml` on this instance; the loc values inside it are `https://filterfitguide.com/...`.
- Request `/ads.txt`.
- There is no HTML link in the header or footer to these files. The reader path for this feature is the crawler request itself.

## Driving it with filter-fit

Preconditions:

- `filter-fit doctor` passes.
- Launch was this skill’s `dev` server (or `export` after `npm run build`). The helper removes `ADSENSE_PUB_ID` from the server environment, so ads.txt stays the placeholder even if the shell has that variable set.

- **All three files.** Run `filter-fit seo --dir .cursor/skills/verify-filter-fit/evidence/seo-surfaces --feature seo-surfaces`. The command exits 0 only when robots contains `User-Agent: *`, `Allow: /`, `Host: filterfitguide.com`, and `Sitemap: https://filterfitguide.com/sitemap.xml`; the sitemap’s `<loc>` set is exactly `https://filterfitguide.com`, `https://filterfitguide.com/about`, `https://filterfitguide.com/privacy`, and `https://filterfitguide.com` plus each `href` in `lib/guides.ts`; ads.txt contains `# FilterFit ads.txt placeholder` and has no uncommented `google.com, pub-################, DIRECT` line.
- **Saved bodies.** The evidence directory contains `robots.txt`, `sitemap.xml`, `ads.txt`, and `PROOF.txt`. Those bodies are the proof. Do not re-fetch the same paths from `https://filterfitguide.com` to compare them.

## Gotchas

- Robots and sitemap advertise `https://filterfitguide.com` while the bytes were served by `127.0.0.1`. Recording that host is expected. Requesting the public host is not part of the proof.
- The placeholder ads.txt includes a commented example publisher id. A commented example is not a live seller line.
- `FILTERFIT_MODE=export` serves whatever `npm run build` wrote into `out/`. `next start` does not boot this app (`output: "export"`). Unknown paths under `scripts/serve-export.mjs` return the plain text `not found`, not the App Router 404 page. Prove the 404 sentence with `dev`.
- Adding a guide without a sitemap loc fails `filter-fit seo`. Do not delete the loc assertion to make an incomplete registry pass.
- Do not run `scripts/production-watch.mjs` or `scripts/indexnow-ping.mjs` as a stand-in for this feature.
