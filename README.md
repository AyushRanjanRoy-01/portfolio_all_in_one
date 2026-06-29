# Ayush Ranjan Roy — Portfolio

A fast, fully static personal portfolio site. **No build step, no dependencies** — a single
`index.html` with embedded CSS and vanilla JS. Designed to be hosted on GitHub Pages (or any
static host) and shared as a link.

🔗 **Live:** _enable GitHub Pages on this branch to get the link_ (see below).

## Highlights
- Cosmic dark theme, glassmorphism, animated starfield + nebula background
- Sections: Hero · About · Projects (filterable) · Contact
- Responsive, accessible, `prefers-reduced-motion` aware
- Featured projects: **IncidentIQ**, **RAGGym**, **Startup Incubator**, and more

## Edit the content
All editable content lives in two obvious places inside `index.html`:
- The `TECH` and `PROJECTS` arrays in the `<script>` block (projects, tags, links).
- Search for `EDIT ME` to update the LinkedIn URL.
- Contact email / GitHub handle appear in the nav, hero, and contact section.

## Run locally
Just open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000   # then visit http://localhost:8000
```

## Deploy on GitHub Pages
1. Push these files to a **public** repo (or a branch of one).
2. Repo → **Settings → Pages** → Source: *Deploy from a branch* → pick the branch → `/ (root)` → **Save**.
3. Your site goes live at `https://<username>.github.io/<repo>/` within ~1 minute.

---
Built with care by Ayush Ranjan Roy.
