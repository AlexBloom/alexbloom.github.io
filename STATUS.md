# Project status

Production is live at https://alexbloom.design/ (verified November 17, 2026).

- Development branch: `dev`; current site release commit: `510e9f6`.
- Production branch: `master`; released merge: `e8da3b793d7297869b899794e5d9238105f3e11f`.
- Release PR: https://github.com/AlexBloom/alexbloom.github.io/pull/20
- Successful deployment: https://github.com/AlexBloom/alexbloom.github.io/actions/runs/44231581717
- Hosting: GitHub Pages Actions, existing custom domain and HTTPS preserved.
- Deployment requires explicit user authorization, promotion through a PR, and a manual workflow dispatch on master. Dev pushes and PRs only build.
- The existing Pages environment permissions were retained. An optional environment branch-policy update was rejected by automatic approval review and was not applied.
- Preview: `npm run dev -- --hostname 0.0.0.0`, http://localhost:3000/; dev cache `.next-dev`.
- Production: `npm run build`, exported artifact `.next-build/`.
- QC details and external-link verification limits: `docs/release-qc.md`.

Logo hotfix verified live: circular typography uses 33 explicitly positioned characters, avoiding SVG textPath spacing differences. The static Wiki stamp uses the same approach. Desktop and mobile local checks passed; production glyph layout and browser errors checked after deployment.

Service copy update released November 6, 2026: Career Sessions, Office Hours, and Fractional Engagement descriptions updated. Local production build and GitHub build checks passed; GitHub Pages deployment succeeded. Updated homepage copy and all three service detail routes verified over HTTPS.

Theme release verified November 9, 2026: compact animated wave with touch-safe activation, B-Sides menu grouping, selection-only left-to-right wipe, Inter Tight variable font for light/dark themes, heading hierarchy, MTA marker alignment/colors, rainbow Apple bezel mark, and Boogie Van/Risograph/Escher themes. Local production export, GitHub dev/PR builds, and Rams Design Review passed. The first Pages publish timed out syncing files; retrying the failed deployment job succeeded. Production homepage content, all 14 referenced font/CSS/JavaScript assets, and new theme artwork returned HTTP 200. Verification was HTTP-based; no new visual browser review was performed during this release.

Spaces/media/theme release verified November 17, 2026: expanded project galleries and archive content, stacked Spaces index, scroll-triggered blended photo/video galleries, optimized WebP/H.264 media, project years and credits, plus Lite Brite/MTA/Boogie Van and heading fixes. Release commit `510e9f6` promoted through PR #20. Both dev and PR builds passed; production deployment `44231581717` succeeded. The duplicate queued dispatch `44231607254` was canceled. Production homepage, Spaces index, Murphy Wall, Silver Shaka, Slot Shelving, and static stripe artwork returned HTTP 200 with expected release content. Local desktop/mobile and theme browser checks passed before release. Arches renovation remains hidden from index/static routes in the released content.
