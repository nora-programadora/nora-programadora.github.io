# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a static personal portfolio website for Nora Aguirre, deployed via GitHub Pages at `nora-programadora.github.io`. It has no build step, no package manager, and no framework — all files are served directly as-is.

## Running locally

Open `index.html` directly in a browser, or use any static file server:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080
```

## File structure

- `index.html` — single-page app; all sections (About, Resume, Projects, Skills, Contact) live here as anchor-linked `div`s
- `index.js` — hamburger menu toggle and typewriter cycling effect for the hero title
- `styles/style.css` — main styles including layout, color scheme, and component styles
- `styles/responsive.css` — mobile breakpoint overrides (≤768px)
- `styles/animations.css` — `@keyframes` definitions (`float`, `typing`, `blink`)

## Architecture notes

**Single-page layout:** All content is in `index.html` with section IDs (`#about-me`, `#resume`, `#education`, `#projects`, `#skills`, `#contact`). Navigation links use anchor scrolling (`scroll-behavior: smooth`).

**Sidebar nav:** The left nav (`.menu-vertical`) is `position: fixed`, 20% wide on desktop. The main content (`.content-main`) offsets with `margin-left: 20%`. On mobile (<768px), the nav collapses to a hamburger toggle handled in `index.js`.

**External dependencies (CDN only):**
- Bootstrap 5.3 (CSS + JS bundle) for grid and card components
- Font Awesome 6 for icons
- jQuery 3.6
- `ghactivity` widget for GitHub activity (unused in current HTML — the container `#github-activity` is absent; only the stats image embed remains)

**Color palette:** Dark sidebar `#333`, dark resume sections `#212529`, medium-dark about/github sections `#5c5c5c`, accent colors `plum`/`pink`/`#977290`.

**Contact form:** Embedded as a Typeform iframe. The previous native HTML form is commented out in `index.html`.

**CV download:** Links to a Google Drive direct-download URL (`uc?export=download&id=...`). Update the `id` parameter when replacing the PDF.

**Section backgrounds alternate** between `.about-section` (`#5c5c5c`) and `.resume` (`#212529`) for visual separation.
