import { Link } from "react-router-dom";
import { Terminal } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { useSEO, SITE_URL } from "@/hooks/use-seo";

const Blog = () => {
  const posts = getAllPosts();

  useSEO({
    title: "Blog",
    description: "Notes on C++, quant dev, and whatever else I'm learning along the way.",
    path: "/blog",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "teoislearning blog",
      url: `${SITE_URL}/blog`,
      blogPost: posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        url: `${SITE_URL}/blog/${post.slug}`,
      })),
    },
  });

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <Terminal className="w-5 h-5" />
              <span className="font-bold font-jetbrains">Dev.Portfolio</span>
            </Link>
            <Link to="/blog" className="px-4 py-2 font-mono text-sm text-primary border-b-2 border-primary">
              Blog
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <p className="text-primary font-mono text-sm mb-2">
            <span className="text-primary">&gt;</span> ./blog
          </p>
          <h1 className="text-4xl font-bold font-jetbrains mb-2">Notes</h1>
          <p className="text-muted-foreground mb-10">
            C++, quant dev, and whatever else I'm learning along the way.
          </p>

          {posts.length === 0 ? (
            <p className="text-muted-foreground font-mono text-sm">No posts yet. Check back soon.</p>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="border-primary/20 hover:border-primary/50 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-1">
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
                      <CardTitle>{post.title}</CardTitle>
                      {post.description && <CardDescription>{post.description}</CardDescription>}
                    </CardHeader>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
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

export default Blog;
