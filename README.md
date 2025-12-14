# Portfolio

Ultra-minimal, fast-loading AI Engineer portfolio built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- 🚀 Next.js 14 with App Router
- ⚡ Minimal JavaScript, fast loading (<2s)
- 🎨 Clean, professional design
- 📱 Fully responsive
- ♿ Accessible (semantic HTML, ARIA)
- 🔍 SEO optimized
- 📝 Simple blog system
- 📊 Lighthouse optimized (90+)

## Setup

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

```bash
vercel
```

## Project Structure

```
app/
  layout.tsx          # Root layout
  page.tsx            # Home page
  globals.css         # Global styles
  work/page.tsx       # Projects page
  blog/page.tsx       # Blog listing
  blog/[slug]/page.tsx # Individual blog post
  about/page.tsx      # About page

components/
  Header.tsx          # Navigation
  Footer.tsx          # Footer

public/               # Static assets
```

## Customization

All content is in the page files. Update text, colors, and links directly in the component files.

## Performance

- Optimized Tailwind CSS
- Image lazy loading ready
- Minimal CSS-in-JS
- Static generation where possible
- ~50KB initial JS

## License

MIT
