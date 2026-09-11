# FilterFit

Independent comparison directory for furnace filters by **MERV × nominal size × slot depth**. Helps people choose MERV 11 vs 13 without choking airflow.

**Brand:** FilterFit  
**Domain:** [filterfitguide.com](https://filterfitguide.com) (live)  
**Contact:** [hello@filterfitguide.com](mailto:hello@filterfitguide.com)  
**Publisher:** Laqaer Products

## Mogul factory Site #2

This repo is **Mogul factory Site #2** — the furnace-filter vertical in the Laqaer Products comparison line.

Mogul ships small, useful buying-guide sites (circuit-honest HVAC here: manufacturer airflow guidance wins; MERV alone is not enough). Do not mix other Laqaer consumer brands into this codebase. No invented RPM, traffic claims, or fake review scores.

## Stack

- Next.js App Router (16) + TypeScript
- Tailwind CSS v4
- Static editorial pages, JSON-LD (`WebSite` on every page, `Article` on guides, `Organization` on About)
- Vercel-ready (`npm run build` / `npm run start`; no env vars required)

## Local setup

Requires Node.js 20+ (22 is fine).

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy on Vercel

1. Import `laqaer/filter-fit`.
2. Framework preset: **Next.js**. Leave build/output commands at defaults (`next build`).
3. No environment variables are required for the editorial site.
4. Production domain `filterfitguide.com` is live (apex; `www` redirects to apex).
5. Replace `public/ads.txt` and add real retailer links before serving ads or affiliate clicks.

## Routes

| Path | Purpose |
| --- | --- |
| `/` | Decision-tree hub: size → depth → MERV → brand-class table; links every guide |
| `/merv-11-vs-13-1-inch` | 1-inch MERV 11 vs 13; pressure drop and short-cycle risk |
| `/16x25x1-furnace-filters` | Common size, MERV 8 / 11 / 13, Filtrete / Aerostar / Filterbuy-style classes (no fake scores) |
| `/20x25x1-furnace-filters` | Second-most-common retail face, MERV 8 / 11 / 13, same brand classes (no fake scores) |
| `/16x20x1-furnace-filters` | Common 1-inch face (often + return grille), MERV 8 / 11 / 13, same brand classes (no fake scores) |
| `/14x25x1-furnace-filters` | Common 1-inch upflow-closet face, MERV 8 / 11 / 13, same brand classes (no fake scores) |
| `/1-inch-vs-4-inch-merv-13` | Depth beats MERV; when to upgrade the cabinet |
| `/merv-13-safe-for-furnace` | When MERV 13 is OK vs when it chokes blowers |
| `/furnace-filter-size-depth-chart` | Nominal size + depth chart, how to measure |
| `/about` | FilterFit / Laqaer Products, editorial standards, hello@filterfitguide.com |
| `/privacy` | Privacy policy for a content + affiliate site |
| `/robots.txt` | Generated |
| `/sitemap.xml` | Generated |
| `/ads.txt` | Placeholder seller file |

Affiliate disclosure and the HVAC airflow caveat appear in the footer on every page.

## Editorial rules

- No composite review scores. Brand classes only.
- MERV is ASHRAE 52.2. House scales (MPR) are labeled as house scales.
- Do not invent SKU pressure-drop numbers. Point at data sheets and the furnace manual.
- Depth and loading change the product. A dirty MERV 11 is not the pad on the carton.
- This is not HVAC or medical advice. Hire a licensed technician when static, icing, or limit trips show up.
