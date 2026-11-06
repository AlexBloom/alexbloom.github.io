# Production release QC — November 6, 2026

- Homepage copy proofread; approved introduction and About language preserved.
- Career Sessions: $300 / 60 minutes on site and Cal.com. Availability starts January 1, 2027, America/New_York.
- Office Hours: $500 / 60 minutes on site and Cal.com.
- Fractional Engagement: waitlist only; removed the remaining detail-page price.
- Narrative and Critique have no public routes. Narrative draft has no price or booking URL.
- Corrected AI capitalization, Titebond naming, book title/author capitalization, and minor punctuation.
- Removed references to 19 missing portfolio gallery files and a missing Faircomp thumbnail. Contributor names remain; broken and placeholder credit URLs were removed.
- Legacy Systems remains plain text because the apex domain times out and www shows a parking page.
- Production export: 22 HTML pages; 488 internal references checked with no missing files or anchors before the final plain-text link change.
- All 13 visible themes smoke-tested in the browser with no logged errors or horizontal overflow.
- Outbound checks: valid responses for 45 of 74 URLs; 28 rejected automated requests with HTTP 403, and Legacy Systems timed out. These blocked URLs are not certified working. No purchases, payments, or test bookings were submitted.
- Build and lint passed. Development and export directories are isolated; production artifact is `.next-build/`.

Production uses the existing `master` branch. Dev pushes and promotion PRs build without deploying; only a manual workflow dispatch on master deploys through GitHub Pages Actions.
