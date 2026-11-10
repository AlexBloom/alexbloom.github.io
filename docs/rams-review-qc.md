# Rams review follow-up — November 9, 2026

Source: release PR #18, Rams summary and two inline comments.

- Theme radio buttons now select through native `onChange`, with Enter support and same-option click dismissal. Removed the no-op change handler and custom Space handling. Browser checks confirmed ArrowDown changes Light to Dark and closes the menu; Enter and native Space select themes and return focus to the trigger.
- Lite Brite UI labels are 14px and helper text is 12px, including mobile CSS. Winamp labels previously at 9–11px are 12–14px, with slider-row wrapping. Winamp and Lite Brite screenshots checked in the local browser.
- Lisa Frank's body drift already had a `prefers-reduced-motion` override at the time of review. The grouped override now explicitly includes the foil glint as well. The existing glitter, heading, and confetti overrides remain. No motion-preference emulation was available in this browser session; media rules were checked in source.
- Added WOFF2-first font sources for 13 local TTF/OTF files while retaining original fallbacks. Converted font payload: 2,494,200 to 509,944 bytes, about 80% smaller. Each compressed font decoded successfully with the original glyph count.
- The summary's concern about simultaneous identity variants was checked in the browser: the dark theme exposes one visible H1; the other four identity headings have no client rects because their wrappers are hidden by CSS.

The GitHub comment lists four detailed findings but counts three additional moderate accessibility refinements without their text. The Rams dashboard redirects to login. Those three findings cannot be certified addressed without their details; requested the user paste them.

Validation: local production static export passed, including lint and type checks; diff whitespace checks passed. Browser keyboard selection and font decoding verified as above.
