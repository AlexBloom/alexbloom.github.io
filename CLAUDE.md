# CLAUDE.md

This file provides context for AI assistants working in this repository.

## Project Overview

Personal portfolio website for Alex Bloom, a designer. Built with Jekyll and hosted on GitHub Pages at `alexbloom.design`. Version 5 of the site.

## Technology Stack

- **Jekyll** - Ruby-based static site generator with Liquid templating
- **SASS/SCSS** - Custom utility-first CSS library (inspired by Basscss/Tachyons)
- **Vanilla JavaScript** - No frameworks; custom AJAX page loading and animations
- **Gulp 3** - Task runner for development workflow
- **Browser-sync** - Live reload for local development
- **Swiper** (v5.3.6) - Touch carousel/slider library
- **Barba.js** - Page transition library (bundled as `js/barba.min.js`)
- **GitHub Pages** - Hosting

## Repository Structure

```
alexbloom.github.io/
├── _config.yml          # Jekyll site configuration
├── _drafts/             # Unpublished draft posts
├── _includes/           # Reusable Liquid template partials
├── _layouts/            # Page layout templates
├── _posts/              # Blog posts (Markdown)
├── _projects/           # Portfolio project pages (6 projects)
├── _sass/               # SASS source files (modular structure)
├── css/                 # main.scss entry point + Swiper CSS
├── img/                 # Images (organized by project)
├── js/                  # JavaScript files
├── index.html           # Homepage
├── projects.html        # Portfolio listing
├── bookshelf.html       # Reading list
├── info.html            # About/contact page
├── cv.md                # Curriculum vitae
├── 404.html             # Custom error page
├── gulpfile.js          # Gulp task definitions
├── package.json         # Node dependencies
└── CNAME                # Custom domain: alexbloom.design
```

### Key Layout Files

| File | Purpose |
|------|---------|
| `_layouts/default.html` | Root template; contains header, footer, AJAX wrapper |
| `_layouts/project.html` | Individual project detail page |
| `_layouts/post.html` | Blog post template |
| `_layouts/page.html` | Generic content page |

### Key Include Files

| File | Purpose |
|------|---------|
| `_includes/head.html` | `<head>` with meta tags and CSS links |
| `_includes/header.html` | Site navigation and logo |
| `_includes/footer.html` | Footer with social links |
| `_includes/project-loop.html` | Project listing loop partial |
| `_includes/icons.html` | SVG icon sprite |
| `_includes/navigation.html` | Nav menu markup |

### SASS Structure (`_sass/`)

```
_sass/
├── _variables.scss      # Breakpoints, spacing scale, utility functions
├── _base.scss           # Normalize and core element styles
├── animation/           # CSS animations, carousel styles
├── colors/              # Color palette, shadow utilities
├── elements/            # Buttons, icons, links, media
├── layout/              # Grid, borders, spacing, positioning
├── reset/               # Normalize CSS reset
└── typography/          # Headings, body text, lists
```

### JavaScript Files (`js/`)

| File | Purpose |
|------|---------|
| `js/main.js` | AJAX page loading, Swiper init, logo animations |
| `js/plugins.js` | Supporting utilities |
| `js/barba.min.js` | Barba.js library (page transitions) |
| `js/swiper.min.js` | Swiper carousel library |

## Development Workflow

### Initial Setup

```bash
# Install Node dependencies
npm install

# Jekyll requires Ruby; install Jekyll if not present
gem install jekyll bundler
```

### Local Development

```bash
# Start development server (Jekyll build + Browser-sync live reload)
gulp
```

This runs two parallel tasks:
1. `jekyll build --watch` - Watches for changes and rebuilds the `_site/` directory
2. Browser-sync - Serves `_site/` with live reload on port 3000

### Manual Jekyll Commands

```bash
# Build site once
jekyll build

# Build and serve with Jekyll's built-in server
jekyll serve
```

### What Gets Built

Jekyll compiles everything into `_site/` (gitignored). SASS files compile to CSS automatically as part of Jekyll's build. Do not edit files inside `_site/`.

## Jekyll Configuration (`_config.yml`)

Key settings:
- **Markdown**: kramdown
- **SASS**: compressed output style
- **Collections**: `_projects/` with permalink `/projects/:path/`
- **Excluded from build**: `package.json`, `node_modules`, `gulpfile.js`, `.sass-cache`
- **Site URL**: `https://alexbloom.design`

## Content Conventions

### Adding a Blog Post

Create a file in `_posts/` named `YYYY-MM-DD-title.md` with front matter:

```yaml
---
layout: post
title: "Post Title"
date: YYYY-MM-DD
---
```

### Adding a Portfolio Project

Create a file in `_projects/` (HTML or Markdown) with front matter:

```yaml
---
layout: project
title: "Project Name"
---
```

Projects are numerically prefixed (e.g., `01_project-name.html`) to control ordering.

### Front Matter Fields

Common fields used across the site:
- `layout` - Which layout template to use
- `title` - Page/post title
- `permalink` - Override URL (optional)

## CSS / SASS Conventions

This project uses a **utility-first** CSS approach similar to Tailwind or Basscss.

### Responsive Breakpoints

Defined in `_sass/_variables.scss`:

| Name | Value |
|------|-------|
| `sm` | 32em |
| `md` | 48em |
| `lg` | 64em |
| `xl` | 96em |
| `xxl` | 128em |

Responsive utility classes are prefixed: `md-col-4`, `lg-px-xl`, etc.

### Spacing Scale

| Name | Value |
|------|-------|
| `xs` | .25rem |
| `sm` | .5rem |
| `md` | 1rem |
| `lg` | 2rem |
| `xl` | 4rem |
| `xxl` | 8rem |
| `xxxl` | 16rem |

### Common Utility Class Patterns

- **Layout**: `col-12`, `md-col-4`, `flex`, `flex-wrap`
- **Spacing**: `px-md`, `py-lg`, `mx-auto`, `mt-xl`
- **Color**: `bg-black-9`, `white`, `black`
- **Float**: `float-left`, `float-right`
- **Typography**: `bold`, `caps`, `center`

### Adding New Styles

- Add component-specific SASS to the appropriate subdirectory in `_sass/`
- Utility classes go in the `layout/` or `elements/` subdirectories
- Import new partials in `css/main.scss` if creating a new file

## JavaScript Conventions

- **No frameworks** - Pure vanilla JS throughout
- **AJAX navigation** - `js/main.js` intercepts internal link clicks, fetches pages via the Fetch API, and swaps content with fade transitions using the History API
- **Swiper** - Initialized in `js/main.js` after page load and after AJAX transitions
- **Animations** - Logo and UI animations driven by CSS keyframes; JS adds/removes classes to trigger them

When modifying `js/main.js`, be aware that:
1. The AJAX page loader re-initializes scripts after each navigation (look for the re-init section)
2. Swiper instances must be destroyed before re-creating on navigation
3. Logo animation state resets on page transition

## Images

Images live in `img/` organized by project:
- `img/` - Root-level site images
- `img/projects/` - Per-project image folders (numbered to match `_projects/`)
- `img/bookshelf/` - Book cover images

Image references in templates use root-relative paths: `/img/projects/01_bike/image.jpg`.

## No Testing

There is no test suite. The `package.json` test script is a placeholder. Validate changes by:
1. Running `gulp` locally and inspecting the browser
2. Checking Jekyll build output for errors in the terminal

## Deployment

Deployment is automatic via **GitHub Pages**. Pushing to the `master` branch triggers a rebuild and deploy. The custom domain `alexbloom.design` is configured via the `CNAME` file and DNS settings.

Do not push directly to `master` without review — changes go live immediately.

## Content Management

The site integrates with **Pages CMS** (configured in `.pages.yml`) for non-technical content editing. This provides a visual interface for managing posts and site configuration without editing files directly. Many commits in the git history originate from Pages CMS.

## Files to Avoid Editing

| File | Reason |
|------|--------|
| `_site/` | Auto-generated build output; gitignored |
| `js/barba.min.js` | Third-party library; update via npm if needed |
| `js/swiper.min.js` | Third-party library; use the npm package instead |
| `node_modules/` | Gitignored; managed by npm |
| `.sass-cache/` | Gitignored; auto-generated |
