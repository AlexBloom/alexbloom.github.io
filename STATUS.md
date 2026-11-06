# Project status

Production is live at https://alexbloom.design/ (verified November 6, 2026).

- Development branch: `dev`; current site release commit: `2d894ab`.
- Production branch: `master`; released merge: `c88c9efa3e7c17d0a70cf0ba4ccd32b3d2f4a212`.
- Release PR: https://github.com/AlexBloom/alexbloom.github.io/pull/14
- Successful deployment: https://github.com/AlexBloom/alexbloom.github.io/actions/runs/42299704154
- Hosting: GitHub Pages Actions, existing custom domain and HTTPS preserved.
- Deployment requires explicit user authorization, promotion through a PR, and a manual workflow dispatch on master. Dev pushes and PRs only build.
- The existing Pages environment permissions were retained. An optional environment branch-policy update was rejected by automatic approval review and was not applied.
- Preview: `npm run dev -- --hostname 0.0.0.0`, http://localhost:3000/; dev cache `.next-dev`.
- Production: `npm run build`, exported artifact `.next-build/`.
- QC details and external-link verification limits: `docs/release-qc.md`.
