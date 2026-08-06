# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A static React rebuild of the Amaltas Institute of Medical Sciences (AIMS) college website, deployed as a client-rendered SPA. Content is migrated from the live WordPress site (amaltasmedicalcollege.in) and hardcoded into `src/data/*.js`.

## Commands

```bash
npm run lint      # eslint . — NOTE: no eslint config file exists in the repo yet, so this currently errors out
```

Node 18+.

## Architecture

**Content is fully decoupled from components.** Every page's copy, tables, and lists live in `src/data/*.js` (`site.js`, `navigation.js`, `courses.js`, `departments.js`, `leadership.js`, `news.js`, `pages.js`). Adding or editing content should almost never touch a component — find the right file in `src/data/` first.

**Generic page components driven by slug tables.** `src/App.jsx` defines two arrays, `CONTENT_SLUGS` and `LEADERSHIP_SLUGS`, and maps each slug to a shared route component (`ContentPage` / `LeadershipPage`) rather than a one-off page component. To add a new generic content page: add the slug to the array in `App.jsx`, then add a matching entry to `src/data/pages.js` (or `src/data/leadership.js`). No new component needed.

**Migration-pending pattern.** Content pages the original fetch couldn't retrieve (Elementor-rendered body copy) are marked with a `pendingSource` URL in `src/data/pages.js` instead of invented text — `ContentPage.jsx` renders an explicit "content migration pending" notice with a link to the live page. When filling one in, add a `sections` array and delete `pendingSource`. Never invent placeholder copy for these.

**Routes are lazy-loaded** (`src/App.jsx`) except `Home`, so the landing page ships the smallest bundle. The `News` page component is reused across three routes (`events`, `news-press-release`, `cme-conference-academic-activities`, `awards-achievements`) via props (`title`, `lede`, `only` filter).

**Design tokens** live in `tailwind.config.js` (`colors.brand` = institutional green, `colors.gold` = the amaltas-blossom accent) and are mirrored as CSS variables at the top of `src/index.css`, which also defines shared component classes (`.btn`, `.card`, `.nav-link`, `.eyebrow`, `.prose-aims`, `.section`). Re-theme by editing both files together.

**Motion.** All scroll-triggered entrances go through `<Reveal>` (`src/components/ui/Reveal.jsx`), which wraps Framer Motion's `whileInView` with `once: true`. Shared variants (`fadeUp`, `scaleIn`, `stagger`, `pageTransition`) live in `src/lib/motion.js` — reuse these rather than writing ad hoc variants. `prefers-reduced-motion` is respected in both `<Reveal>`/`<Vitals>` (via `useReducedMotion`) and globally in `index.css`.

**`<Vitals>`** (`src/components/ui/Vitals.jsx`) is the site's signature decorative element — a self-drawing ECG line SVG used in place of generic dividers. Reuse it rather than introducing a new divider style.

**`<Img>`** (`src/components/ui/Img.jsx`) wraps `<img>` with an `onError` fallback that renders a branded gradient placeholder carrying the alt text, so missing assets (many are still pending) never show a broken-image icon.

## Deployment

Static SPA (`dist/`) requiring an SPA fallback (serve `index.html` for unknown paths) at the host. Config for three targets is already checked in: `public/.htaccess` (Hostinger/Apache), `public/_redirects` (Netlify), `vercel.json` (Vercel).

Known pre-go-live gaps (see `README.md` for the full list): `handleSubmit` in `src/pages/Admission.jsx` only sets local state (no real submit endpoint yet); social URLs in `src/data/site.js` are placeholders; no `sitemap.xml` yet.
