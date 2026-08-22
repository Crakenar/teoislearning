export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  description: string;
}

export interface Post extends PostMeta {
  content: string;
}

// Very small frontmatter parser — no node deps, safe in browser.
// Expects:
// ---
// title: ...
// date: 2026-08-22
// tags: [c++, quant]
// description: ...
// ---
// markdown body...
function parseFrontmatter(raw: string): { meta: Record<string, string>; content: string } {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const [, frontmatter, content] = match;
  const meta: Record<string, string> = {};

  frontmatter.split("\n").forEach((line) => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let value = line.slice(idx + 1).trim();
    value = value.replace(/^["']|["']$/g, "");
    meta[key] = value;
  });

  return { meta, content: content.trim() };
}

function parseTags(raw?: string): string[] {
  if (!raw) return [];
  const inner = raw.replace(/^\[|\]$/g, "");
  return inner
    .split(",")
    .map((t) => t.trim().replace(/^["']|["']$/g, ""))
    .filter(Boolean);
}

const modules = import.meta.glob("/src/posts/*.md", { query: "?raw", import: "default", eager: true }) as Record<
  string,
  string
>;

function slugFromPath(path: string): string {
  return path.replace("/src/posts/", "").replace(/\.md$/, "");
}

const posts: Post[] = Object.entries(modules)
  .map(([path, raw]) => {
    const slug = slugFromPath(path);
    const { meta, content } = parseFrontmatter(raw);
    return {
      slug,
      title: meta.title ?? slug,
      date: meta.date ?? "",
      tags: parseTags(meta.tags),
      description: meta.description ?? "",
      content,
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

export function getAllPosts(): Post[] {
  return posts;
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
