import { Link, useParams } from "react-router-dom";
import { Terminal, ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { getPostBySlug } from "@/lib/posts";
import Mermaid from "@/components/Mermaid";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Terminal className="w-5 h-5" />
              <span className="font-bold font-jetbrains">Dev.Portfolio</span>
            </Link>
            <Link
              to="/blog"
              className="flex items-center gap-1 px-4 py-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <article className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-3">
            {post.date && <span>{post.date}</span>}
            {post.tags.length > 0 && (
              <span className="flex gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold font-jetbrains mb-8">{post.title}</h1>

          <div className="prose prose-invert prose-headings:font-jetbrains prose-a:text-primary max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                code({ className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  if (match?.[1] === "mermaid") {
                    return <Mermaid chart={String(children).trim()} />;
                  }
                  return (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                img({ alt, ...props }) {
                  return <img alt={alt ?? ""} {...props} className="rounded-lg border border-primary/20" loading="lazy" />;
                },
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </main>

      <footer className="border-t border-primary/20 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground font-mono text-sm">
            <span className="text-primary">&gt;</span> teoislearning.com 2025 - 2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPost;
