# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Static export to out/ (Next.js output: "export")
npm run lint     # ESLint
```

There are no automated tests. The build command (`next build`) is the primary correctness check.

**After editing any component or page, always run `npm run lint` on the changed files before finishing.** Fix any ESLint errors (e.g. unescaped entities, unused imports) before considering the task done.

## Deployment

Pushing to the `next` branch triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds and deploys the static output to the `gh-pages` branch. The live site is at `alexbloom.design`.

## Architecture

This is a **Next.js 15 static site** (`output: "export"`) — no server-side rendering at runtime. The build writes a fully static site to `out/`. `next/image` optimization is disabled because there's no server.

### Attention Plan system (the core UI concept)

The homepage has a unique "attention plan" gating mechanism. On first visit, `PlanSelectionScreen` (`components/plan-selection.tsx`) prompts the visitor to choose how much time they have: `8s`, `1m`, or `5m`. The chosen plan is persisted in `localStorage` and managed via `AttentionPlanProvider` (`components/plan-provider.tsx`).

`PlanHomepage` (`components/plan-homepage.tsx`) then renders progressively more content based on the plan:
- `8s` — slideshow + heading + contact + newsletter only
- `1m` — adds intro video placeholder, services list, and quick bio
- `5m` — adds the full `Header` nav and a "Currently" section

The `PlanSwitcher` component (a custom dropdown) lets returning visitors change their plan; switching fires an upgrade/downgrade toast via `sonner`.

### Routes

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Client component; delegates to plan system |
| `/projects` | `app/projects/page.tsx` | Lists all projects from `content/projects/index.ts` |
| `/projects/[slug]` | `app/projects/[slug]/` | Individual project detail |
| `/bookshelf` | `app/bookshelf/page.tsx` | Book list defined inline in the file |
| `/info` | `app/info/page.tsx` | About/info page |

### Content

- **Projects** are defined as TypeScript objects in `content/projects/index.ts` (not a CMS or markdown). Add/edit entries there. The `Project` type is in `types/index.ts`.
- **Books** are defined inline in `app/bookshelf/page.tsx`. Cover images go in `public/img/bookshelf/`.
- **Project images** go in `public/img/projects/`.

### Styling

Tailwind CSS with shadcn/ui conventions. Colors, radius, and fonts use CSS variables (`--background`, `--foreground`, etc.) defined in `app/globals.css`. The `cn()` utility (`lib/utils.ts`) merges class names with `clsx` + `tailwind-merge`. Components in `components/ui/` are shadcn-style primitives.

The Header is only shown for the `5m` plan and is fixed-position with a `pt-16` offset on the content below it.
