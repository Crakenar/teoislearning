# teoislearning

## Blog

Posts live as Markdown files in `src/posts/`. Drop a `.md` file with frontmatter (`title`, `date`, `tags`, `description`), it shows up at `/blog` automatically — no registration step.

`npm run build` also:
1. regenerates `public/sitemap.xml` from every post (`prebuild`)
2. prerenders `/blog` and `/blog/:slug` to static HTML in `dist/` via headless Chromium, so the per-post `<title>`/`<meta>`/JSON-LD are real HTML for crawlers and link-preview bots, not just client-rendered (`postbuild`)

Step 2 needs Chromium once: `npm run playwright:install`. If it's missing, the build still succeeds — prerendering is skipped and the site just falls back to plain client-side rendering.
