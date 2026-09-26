# Cloudflare migration

FilterFit is being validated as a pure Next.js static export to Cloudflare Workers Static Assets. No Worker script is required.

The migration branch disables Vercel Git deployment only for itself. CI runs lint, Next route type generation, TypeScript, the real static export, output assertions, and a credential-free Wrangler dry-run.

After the gate passes, verify a workers.dev preview for all guides, affiliate search links/disclosures, canonical metadata, robots/sitemap, 404 behavior and direct refreshes. Production custom-domain/DNS cutover remains a separate operation, with Vercel retained as rollback through stabilization.
