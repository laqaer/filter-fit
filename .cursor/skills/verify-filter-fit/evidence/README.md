# Evidence

Proof artifacts for `verify-filter-fit` live in this directory, one folder per feature id:

`.cursor/skills/verify-filter-fit/evidence/<feature-id>/`

`helpers/filter-fit cleanup` deletes `/tmp/filter-fit-verify-$PORT/` only. It does not delete this directory. A cleanup that removes a proof is a failed cleanup.

Each proof should include `PROOF.txt` naming the feature id, the entry point, and the `filter-fit` command that produced the artifact. Snapshots are `*.html`, `*.txt`, `*.meta.json`, and optional `*.png`.
