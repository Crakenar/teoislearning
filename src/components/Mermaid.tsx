import { useEffect, useId, useRef, useState } from "react";

let initialized = false;

async function ensureInit() {
  const { default: mermaid } = await import("mermaid");
  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "dark",
      securityLevel: "strict",
      fontFamily: "JetBrains Mono, monospace",
    });
    initialized = true;
  }
  return mermaid;
}

interface MermaidProps {
  chart: string;
}

const Mermaid = ({ chart }: MermaidProps) => {
  const id = useId().replace(/:/g, "-");
  const containerRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    ensureInit()
      .then((mermaid) => mermaid.render(`mermaid-${id}`, chart))
      .then(({ svg }) => {
        if (!cancelled && containerRef.current) {
          containerRef.current.innerHTML = svg;
        }
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : String(err));
      });

    return () => {
      cancelled = true;
    };
  }, [chart, id]);

  if (error) {
    return (
      <pre className="rounded-md border border-destructive/50 bg-destructive/10 p-4 text-sm text-destructive overflow-x-auto">
        Mermaid render error: {error}
      </pre>
    );
  }

  return <div ref={containerRef} className="my-6 flex justify-center overflow-x-auto" />;
};

export default Mermaid;
