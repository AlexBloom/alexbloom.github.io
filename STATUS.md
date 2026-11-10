# Project status

Production is live at https://alexbloom.design/ (verified November 6, 2026).

- Development branch: `dev`; current site release commit: `6274811`.
- Production branch: `master`; released merge: `5c01808aeaf2928201d75e4acc60e3068c47f6b3`.
- Release PR: https://github.com/AlexBloom/alexbloom.github.io/pull/17
- Successful deployment: https://github.com/AlexBloom/alexbloom.github.io/actions/runs/42303577538
- Hosting: GitHub Pages Actions, existing custom domain and HTTPS preserved.
- Deployment requires explicit user authorization, promotion through a PR, and a manual workflow dispatch on master. Dev pushes and PRs only build.
- The existing Pages environment permissions were retained. An optional environment branch-policy update was rejected by automatic approval review and was not applied.
- Preview: `npm run dev -- --hostname 0.0.0.0`, http://localhost:3000/; dev cache `.next-dev`.
- Production: `npm run build`, exported artifact `.next-build/`.
- QC details and external-link verification limits: `docs/release-qc.md`.

Logo hotfix verified live: circular typography uses 33 explicitly positioned characters, avoiding SVG textPath spacing differences. The static Wiki stamp uses the same approach. Desktop and mobile local checks passed; production glyph layout and browser errors checked after deployment.

Service copy update released November 6, 2026: Career Sessions, Office Hours, and Fractional Engagement descriptions updated. Local production build and GitHub build checks passed; GitHub Pages deployment succeeded. Updated homepage copy and all three service detail routes verified over HTTPS.
