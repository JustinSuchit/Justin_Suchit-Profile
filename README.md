# Justin Suchit — Portfolio

Static portfolio site (HTML, CSS, vanilla JavaScript). No build step.

## Files

- `index.html`, `websites.html`, `experience.html`, `skills.html`, `education.html`, `contact.html` — the six pages
- `resume.html` — print-friendly resume (Print, then Save as PDF)
- `styles.css` — colours, type and layout
- `script.js` — website and system entries, case notes dialog, contact form, page-flip navigation
- `assets/fonts/` — Literata and Barlow (SIL Open Font License)
- `assets/sites/` — screenshots shown on the Websites page, named by site slug
- `assets/profile.jpg` — optional; add it to show a portrait in the hero

## Design

The site is styled as a book: the home page is the cover and contents, each other page is a chapter, and links between pages turn like a page.

## Editing

- Websites live in the `SITES` array and supporting systems in `SYSTEMS`, both at the top of `script.js`.
- Everything else is plain HTML in each page file. The header and node rail are repeated in every page, so change them in all six.
- To add a page, also add its file name to the `PAGES` list in `script.js`.

## Deploy on Vercel

Import the repository, set the framework preset to **Other**, and leave the build command and output directory empty.
