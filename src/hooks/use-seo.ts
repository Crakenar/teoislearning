import { useEffect } from "react";

const SITE_URL = "https://teoislearning.com";
const SITE_NAME = "teoislearning";

interface SeoOptions {
  title: string;
  description: string;
  path: string;              // e.g. "/blog/hello-world"
  type?: "website" | "article";
  publishedTime?: string;    // ISO date, articles only
  tags?: string[];
  jsonLd?: Record<string, unknown>;
}

function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Sets document title, description, canonical, OG/Twitter tags and an
// optional JSON-LD block for the current route. Runs on mount and cleans up
// its JSON-LD script on unmount so it doesn't leak between routes. This is a
// client-side patch — good enough for Googlebot (renders JS), not sufficient
// on its own for crawlers that don't execute JS (see prerender script).
export function useSEO({ title, description, path, type = "website", publishedTime, tags, jsonLd }: SeoOptions) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    setMeta("name", "description", description);
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", SITE_NAME);

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);

    if (type === "article" && publishedTime) {
      setMeta("property", "article:published_time", publishedTime);
    }
    if (tags?.length) {
      setMeta("name", "keywords", tags.join(", "));
    }

    let script: HTMLScriptElement | null = null;
    if (jsonLd) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }

    return () => {
      script?.remove();
    };
  }, [title, description, path, type, publishedTime, tags, jsonLd]);
}

export { SITE_URL, SITE_NAME };
