# Images in this build

Every file here was generated from the originals in `/source-assets`
(project root, **outside** `public/` so the ~200 MB of raw camera files are
never deployed). Web copies are resized and re-encoded — mozjpeg q78 for
photographs, palette PNG for marks — and the whole set is ~7 MB.

Anything still missing renders a branded pine placeholder with the alt text,
so the site never shows a broken image.

## What is wired up

| Path | Shown where | Source |
| --- | --- | --- |
| `aims-emblem.png` | Header, "Why choose us" hub | `logo/Amaltas-University-Logo.jpg` (crest cropped out) |
| `aims-logo-white.png` | Footer | `logo/white-logo.png` |
| `favicon.png` · `og-default.jpg` | Browser tab · social cards | crest · night aerial |
| `campus/hero.jpg` | Homepage hero | `campus life/green.png` |
| `campus/night.jpg` | Footer wash, default interior page hero | `footer/amaltas-night.jpeg` |
| `campus/aerial.jpg` | Details of Institution, Gallery hero | `photo-gallery/DJI_0019.jpg` |
| `campus/hospital.jpg` | Programmes band, Clinical Departments hero | `our purpose/amaltas_photo.jpeg` |
| `campus/labs.jpg` · `lecture-hall.jpg` · `library.jpg` | Homepage intro mosaic | photo-gallery / campus life |
| `campus/walkway.jpg` | Admission page hero | `campus life/IMG_9478` |
| `courses/*.jpg` | Courses page strip + hero | photo-gallery, OT photograph |
| `student-life/*.jpg` | Student life cards | festival, football team, plantation drive |
| `facilities/*.jpg` | Student life facilities strip | hostels, gym, reading room (+ hostel room, computer lab, seminar hall available) |
| `leadership/chairman.jpg` · `vice-chancellor.jpg` · `registrar.jpg` | Leadership cards | `leadership/mayank`, `vc-sir`, `registrar-sir` |
| `news/*.jpg` (9 of 16) | News cards | see below |
| `gallery/gallery-1…12.jpg` | Photo gallery | campus, labs, hostel, convocation, festival |
| `recognition/*.png` | "Recognised by" strip on the homepage | `recognisation/` council marks |

## Still needed

1. **`leadership/dean.jpg`** (Dr. A. K. Pithawa) and
   **`leadership/medical-superintendent.jpg`** (Dr. Mahavir Khandelwal).
   `source-assets/leadership/` holds `suresh-sir` and `salil-sir`, but which
   portrait belongs to which office could not be established — both are shown
   on the homepage, so name them before launch.
2. **News thumbnails** for `aids-rally`, `captains-of-industry`,
   `convocation`, `cpr-week`, `icon-award`, `oncology-conclave`,
   `republic-day`, `youth-walk`. The `source-assets/news-press/` press cards
   cover several of these stories, but they are 1080×1080 layouts with
   headline text and crop badly into the 16:10 card. Photographs from those
   events are the better fill.
3. **An AIMS-specific wordmark.** The only logo supplied is the Amaltas
   University crest; the header pairs it with the institute name in type.

## Regenerating

The web set was produced with `sharp`. To redo it after dropping new
originals into `/source-assets`, resize to the widths above and encode at
mozjpeg q78 (photographs) or palette PNG (marks).
