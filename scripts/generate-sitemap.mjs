// Regenerates public/sitemap.xml from the static routes + every post in
// src/posts/*.md, so a new blog post is automatically in the sitemap on the
// next build — nothing to remember to update by hand.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const postsDir = path.join(root, "src", "posts");
const outFile = path.join(root, "public", "sitemap.xml");
const SITE_URL = "https://teoislearning.com";

function frontmatterDate(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---/);
  if (!match) return null;
  const line = match[1].split("\n").find((l) => l.trim().startsWith("date:"));
  return line ? line.split(":").slice(1).join(":").trim() : null;
}

const today = new Date().toISOString();

const staticUrls = [
  { loc: `${SITE_URL}/`, lastmod: today },
  { loc: `${SITE_URL}/blog`, lastmod: today },
];

const postFiles = readdirSync(postsDir).filter((f) => f.endsWith(".md"));
const postUrls = postFiles.map((file) => {
  const slug = file.replace(/\.md$/, "");
  const raw = readFileSync(path.join(postsDir, file), "utf-8");
  const date = frontmatterDate(raw);
  return { loc: `${SITE_URL}/blog/${slug}`, lastmod: date ? new Date(date).toISOString() : today };
});

const urls = [...staticUrls, ...postUrls];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.map((u) => `<url>\n  <loc>${u.loc}</loc>\n  <lastmod>${u.lastmod}</lastmod>\n</url>`).join("\n")}
</urlset>
`;

writeFileSync(outFile, xml);
console.log(`sitemap.xml written with ${urls.length} URLs`);
