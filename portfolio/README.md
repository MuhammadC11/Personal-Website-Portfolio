# Personal Portfolio — Muhammad Chaudhry

Personal site and project portfolio, live at
[mchaudhry.netlify.app](https://mchaudhry.netlify.app).

Built with Vue 3 (`<script setup>`), Vue Router, and Vite. No CSS framework and no
UI dependencies — styling is plain CSS with custom properties defined in
`src/style.css`.

## Getting started

```bash
npm install
npm run dev      # dev server at http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Project structure

```
public/              Static assets served as-is (images, résumé, favicon, SEO files)
src/
  components/        Navbar, Hero, About, Skills, Experience, project cards, Contact, Footer
  composables/
    useReveal.js     IntersectionObserver scroll-reveal
  data/
    site.js          All site content: profile, education, experience, skills, projects
  views/             Home, Projects, NotFound
  style.css          Design tokens, resets, and shared primitives
  main.js            App entry, router, per-route document titles
```

## Editing content

Text content lives in **`src/data/site.js`**, not in the components. To add a project,
append an object to the `projects` array:

```js
{
  id: "unique-slug",
  title: "Project name",
  description: "A paragraph shown on the card.",
  tech: ["Vue", "Node.js"],
  image: "/screenshot.webp",        // file in public/
  links: { live: "https://…", code: "https://…" },
  year: "2026",
  award: "Optional award text",     // renders a badge on the card
  featured: true,                    // also show it on the home page
}
```

Only projects marked `featured: true` appear on the home page; the `/projects` page
lists all of them.

## Images

Screenshots are stored as WebP and sized for their largest render size (1100px wide
for cards, 800px for the portrait). Drop new screenshots in `public/` and compress
them before committing — the originals were 6 MB before optimization.

## Deployment

Deployed on Netlify from this repository.

- Build command: `npm run build`
- Publish directory: `dist`

`public/_redirects` rewrites all paths to `index.html` so client-side routes like
`/projects` resolve on a hard refresh. `public/_headers` sets security headers and
long-lived caching for fingerprinted assets.
