"use client";

import { useEffect, useState } from "react";
import type { Outcome } from "@/data/portfolio";
import { Icon } from "./Icons";

/** n8n's official read-only workflow viewer (a web component that draws the canvas in an iframe). */
const N8N_DEMO_SRC = "https://cdn.jsdelivr.net/npm/@n8n_io/n8n-demo-component@1.0.20/n8n-demo.bundled.js";

declare module "react" {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "n8n-demo": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        workflow?: string;
        frame?: string;
        theme?: "light" | "dark";
        clicktointeract?: string;
        collapseformobile?: string;
        hidecanvaserrors?: string;
      };
    }
  }
}

let scriptPromise: Promise<void> | undefined;
function loadViewer() {
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    if (customElements.get("n8n-demo")) return resolve();
    const s = document.createElement("script");
    s.type = "module";
    s.src = N8N_DEMO_SRC;
    s.onload = () => customElements.whenDefined("n8n-demo").then(() => resolve());
    s.onerror = reject;
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/** Embeds an exported n8n workflow (JSON file in /public) as an interactive canvas. */
export function N8nWorkflow({
  src,
  title,
  outcome,
  rounded = "rounded-pf-md",
}: {
  src: string;
  title: string;
  /** Deliverable link shown as the "Access" button (its preview is replaced by the workflow). */
  outcome?: Outcome;
  rounded?: string;
}) {
  const [workflow, setWorkflow] = useState<string>();
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let alive = true;
    Promise.all([loadViewer(), fetch(src).then((r) => (r.ok ? r.text() : Promise.reject(r.status)))])
      .then(([, json]) => alive && setWorkflow(json))
      .catch(() => alive && setFailed(true));
    return () => {
      alive = false;
    };
  }, [src]);

  return (
    <div className={`flex w-full flex-col overflow-hidden ${rounded} border border-pf-border`}>
      <div className="relative min-h-[440px] w-full bg-pf-surface-muted">
        {workflow ? (
          <n8n-demo
            aria-label={`${title} n8n workflow`}
            className="block w-full"
            style={
              {
                "--n8n-workflow-min-height": "440px",
                "--n8n-frame-background-color": "transparent",
              } as React.CSSProperties
            }
            clicktointeract="true"
            collapseformobile="false"
            frame="false"
            hidecanvaserrors="true"
            theme="dark"
            workflow={workflow}
          />
        ) : (
          <p className="absolute inset-0 flex items-center justify-center font-pf-body text-pf-text-subtle text-sm">
            {failed ? "Couldn't load the workflow preview." : "Loading workflow…"}
          </p>
        )}
      </div>
      <div className="flex h-16 w-full items-center gap-3 border-pf-border border-t bg-pf-surface px-4 py-3">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pf-tag text-pf-link">
            <Icon name="fileText" className="size-5" />
          </span>
          <span className="min-w-0 flex-1 truncate font-medium font-pf-body text-pf-heading text-sm leading-4">
            n8n workflow
          </span>
        </div>
        <a
          aria-label="Download workflow JSON"
          className="inline-flex shrink-0 items-center justify-center rounded-full p-1.5 text-pf-text-subtle transition-colors duration-200 hover:text-pf-link"
          download
          href={src}
          title="Download workflow JSON"
        >
          <Icon name="download" className="size-5" />
        </a>
        {outcome && (
          <a
            className="pf-angle pf-angle-ring [--pf-angle-stroke:var(--pf-link)] inline-flex shrink-0 items-center gap-1.5 px-4 py-1.5 font-medium font-pf-body text-pf-link text-sm leading-[18px] transition-colors duration-200 hover:[text-shadow:0_0_10px_color-mix(in_srgb,var(--pf-link)_75%,transparent)]"
            href={outcome.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            Access
            <Icon name="arrowUpRight" className="size-5" />
          </a>
        )}
      </div>
    </div>
  );
}
