# Justin Suchit — Portfolio

Static portfolio site (HTML, CSS, vanilla JavaScript). No build step.

## Files

- `index.html`, `websites.html`, `experience.html`, `skills.html`, `education.html`, `contact.html` — the six pages
- `resume.html` — print-friendly resume (Print, then Save as PDF)
- `styles.css` — colours, type and layout
- `script.js` — website and system entries, case notes dialog, contact form, page-flip navigation
- `assets/fonts/` — Barlow and Barlow Condensed (SIL Open Font License)
- `assets/profile.jpg` — optional; add it to show a portrait in the hero

## Editing

- Websites live in the `SITES` array and supporting systems in `SYSTEMS`, both at the top of `script.js`.
- Everything else is plain HTML in each page file. The header and node rail are repeated in every page, so change them in all six.
- To add a page, also add its file name to the `PAGES` list in `script.js`.

## Deploy on Vercel

Import the repository, set the framework preset to **Other**, and leave the build command and output directory empty.
