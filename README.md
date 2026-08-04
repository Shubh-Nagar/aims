# Amaltas Institute of Medical Sciences — website

A rebuild of [amaltasmedicalcollege.in](https://amaltasmedicalcollege.in/) as a
modern React application: same information architecture and the same published
content, rebuilt with a deliberate design system, scroll-triggered motion and a
mobile-first layout.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the production build locally
```

Node 18 or newer.

---

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Build | **Vite 5** | Fast dev server, tiny config surface, static output that drops onto Hostinger or any CDN. |
| UI | **React 18** | Requested. |
| Routing | **React Router 6** | Requested. Interior routes are lazy-loaded. |
| Styling | **Tailwind CSS 3** | Requested. All tokens live in `tailwind.config.js`. |
| Motion | **Framer Motion 11** | Requested. Every entrance uses a shared variant from `src/lib/motion.js`. |
| Head tags | **react-helmet-async** | Per-route `<title>` / description / canonical. |
| Icons | **lucide-react** | Consistent 1.5px stroke weight. |

### Vite over Next.js

The old site is a content site whose pages change rarely, and it needs to sit on
the college's existing shared hosting. A static Vite build gives you the SEO
that matters here — real URLs, per-route meta tags, `robots.txt`, JSON-LD in
`index.html` — with no Node runtime to maintain. If you later need server-side
rendering for the news archive, the component tree ports to Next's App Router
with only the router imports changing.

---

## Folder structure

```
src/
├── main.jsx                  # entry: Router + Helmet providers
├── App.jsx                   # all routes, lazy boundaries, slug tables
├── index.css                 # design tokens + component classes (.btn, .card, .nav-link)
├── data/                     # ← ALL CONTENT LIVES HERE
│   ├── site.js               #   contact details, stats, accreditations, apply steps
│   ├── navigation.js         #   header mega-menu + footer columns
│   ├── courses.js            #   every intake table, verbatim
│   ├── departments.js        #   clinical department services
│   ├── leadership.js         #   office bearers
│   ├── news.js               #   posts feeding the ticker, grid and archive
│   └── pages.js              #   generic content pages
├── lib/motion.js             # fadeUp / scaleIn / stagger / pageTransition variants
├── hooks/                    # useScrollState, useLockBodyScroll
├── components/
│   ├── layout/               # Header, MobileNav, Footer, Layout, ScrollToTop
│   ├── ui/                   # Button, Reveal, SectionHeading, Vitals, Counter,
│   │                         # Img, PageHero, DataTable, Accordion, Seo
│   └── home/                 # one file per homepage section
└── pages/                    # route components
```

**Editing content never means editing a component.** Change `src/data/*.js` and
the page updates.

---

## Design system

### Palette

The brief asked for Renaissance University's visual language. Rather than copy
their hex values, the same *structure* — a deep institutional base, one warm
accent, generous white space — is derived from Amaltas's own identity: the
amaltas is the golden shower tree, so gold is the accent, set against clinical
pine.

| Token | Hex | Used for |
| --- | --- | --- |
| `brand-800` | `#0A3A33` | Primary surfaces, buttons, hero |
| `brand-900` | `#072A26` | Headings, deep sections |
| `brand-600` | `#0F6759` | Links, hover states |
| `gold-500` | `#E9A825` | The single accent — CTAs, rules, hover fills |
| `paper` | `#F6F8F7` | Page background |
| `line` | `#E2EAE7` | Hairlines and card rings |

Re-theming is two files: the `colors` block in `tailwind.config.js` and the
`:root` variables at the top of `src/index.css`.

### Typography

- **Fraunces** — display. A variable serif with real optical sizing; carries
  institutional weight without the Playfair cliché.
- **Inter** — body and UI.
- Eyebrow labels are Inter at 11px, uppercase, `0.18em` tracking, always
  preceded by a short gold rule (`.eyebrow`).

### Interaction language

Consistency matters more than variety, so there are exactly four hover moves and
every element uses one of them:

1. **Buttons** — the accent fill wipes up from the bottom edge over 420ms while
   the arrow drifts up-right. Pure CSS (`.btn::after`), so it never drops a frame.
2. **Nav links** — a 2px gold rule scales in from the left origin.
3. **Cards** — lift 6px, ring warms from grey to gold, media zooms 6%.
4. **List rows and footer links** — a hairline grows outward from zero width.

### Motion

Every scroll entrance goes through `<Reveal>`, which wraps Framer Motion's
`whileInView` with `once: true` and a `-80px` margin so content animates just
before it reaches the fold. Page transitions are a 400ms fade-and-lift keyed on
`location.pathname`.

`prefers-reduced-motion` is honoured twice over: `<Reveal>` and `<Vitals>` return
static markup via `useReducedMotion`, and `index.css` kills every CSS transition
at the media-query level.

### The signature element

`<Vitals>` — a single-stroke ECG trace that draws itself left-to-right when it
enters the viewport (`pathLength` 0→1). It replaces every decorative divider on
the site: under the hero, above the stats band, closing the enroll banner and
the footer. It is the one place the design raises its voice; everything around
it stays quiet.

---

## Accessibility

- Skip-to-content link as the first focusable element.
- Landmarks throughout: `header`, `nav[aria-label]`, `main#main`, `footer`.
- Mega-menu buttons carry `aria-expanded` / `aria-haspopup`; Escape closes them.
- The mobile drawer is `role="dialog" aria-modal="true"` and locks body scroll.
- Focus is always visible: a 2px gold ring with a 2px offset, globally.
- Tables use `<caption>` (screen-reader only), `scope="col"`, and horizontal
  scroll on narrow viewports rather than shrinking text.
- Accordions wire `aria-controls` to panel ids; the lightbox traps within a
  dialog and closes on backdrop click.
- Decorative SVG and icons are `aria-hidden`; the placeholder image component
  exposes `role="img"` with the real alt text.

---

## Content status

Content was taken from the live site. Where the current pages publish full copy
it has been migrated verbatim:

- Homepage — hero, welcome text, mission, statistics (302 seats / 100% placement
  percentile / 537 teachers), leadership block, how-to-apply, student life,
  anti-ragging helplines, accreditations.
- **Courses** — every intake table exactly as published: MBBS 250, MD/MS 134,
  super-speciality 10, the two PG schedules, nursing, paramedical.
- **Clinical Departments** — all eleven departments with their services,
  equipment lists and scheme tables.
- **Details of Institution**, **About the Society**, **Contact**, **ERP**.

Some pages on the current site render their body copy through Elementor widgets
that a fetch does not return. Rather than invent replacement text, those routes
build and style correctly but render an explicit **"content migration pending"**
notice with a link to the live page:

`quality-policy` · `academic-and-hospital-facilities` · `built-up-area` ·
`pre-clinical-departments` · `college-layout` · `library-photography` ·
`residential-facilities` · `students` · `teaching-schedule` · `publications` ·
`fees` · `committees` · `citizen-charter` · `bmw-west-annual-report` ·
`college-information-pro-forma-status` · `ugmsr-pgmsr-information` ·
`affiliations-permissions` · `posters` · the five leadership messages · the
anti-ragging committee composition.

To fill one in, add a `sections` array under its key in `src/data/pages.js` (or
a `message` array in `src/data/leadership.js`) and delete the `pendingSource`
line. No component changes needed.

**One deliberate omission.** The current homepage carries leftover text from the
purchased theme's demo content — an "Online Programs" block listing Business
Media / Corporate Finance / Business Administration, and a "Press Release"
section quoting tuition in US dollars against a "Make School" ISA plan. None of
it describes Amaltas, so it is not in this build.

---

## Assets

- `public/images/IMAGE-GUIDE.md` — every image path the build expects, what it
  should show, and the target dimensions.
- `public/documents/README.md` — the eleven PDFs the navigation links to.

Missing images degrade gracefully: `<Img>` catches the error and renders a pine
gradient carrying the alt text, so nothing looks broken mid-migration.

---

## Deployment

The build is fully static (`dist/`). Because routing is client-side, the host
must serve `index.html` for unknown paths — config for the three likely targets
is included:

- **Hostinger / Apache** — `public/.htaccess` (also sets gzip and cache headers).
- **Netlify** — `public/_redirects`.
- **Vercel** — `vercel.json`.

### Before go-live

1. Drop in the real images and PDFs.
2. Point the admission form at a real endpoint — `handleSubmit` in
   `src/pages/Admission.jsx` currently only sets local state.
3. Replace the placeholder social URLs in `src/data/site.js`.
4. Add a `sitemap.xml` to `public/` listing the routes in `App.jsx`.
5. Set 301s from the old WordPress slugs. Most map one-to-one; the ones that
   changed are `/awards-achivements/` → `/awards-achievements`,
   `/category/activities_event/` → `/events`, and
   `/erp-staff-students-log-in/` → `/erp-login`.
