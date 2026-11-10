# Justin Suchit — Portfolio

Static portfolio site (HTML, CSS, vanilla JavaScript). No build step.

## Files

- `index.html` — the portfolio page
- `resume.html` — print-friendly resume (Print → Save as PDF)
- `styles.css` — design tokens and layout
- `script.js` — project data, filters, project detail dialog, contact form
- `assets/` — put `profile.jpg` here to show a portrait in the hero

## Editing

- Projects live in the `PROJECTS` array at the top of `script.js`.
- Everything else is plain HTML in `index.html` and `resume.html`.

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework preset: **Other**. Leave build command and output directory empty.
4. Deploy.

## Run locally

Open `index.html` in a browser, or run `npx serve .`
