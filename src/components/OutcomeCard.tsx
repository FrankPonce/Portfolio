import type { Outcome } from "@/data/portfolio";
import { describeOutcome } from "@/lib/outcome";
import { Icon } from "./Icons";
import { ScaledFrame } from "./ScaledFrame";

/** Embedded preview of a deliverable (Google Doc/Slides/Drive, Loom) + "Access" button. */
export function OutcomeCard({ outcome, title, rounded = "rounded-pf-lg" }: { outcome: Outcome; title: string; rounded?: string }) {
  const { embedUrl: liveUrl, label } = describeOutcome(outcome);
  const embedUrl = outcome.image ? undefined : liveUrl;
  return (
    <div className={`flex w-full flex-col overflow-hidden ${rounded} border border-pf-border`}>
      {outcome.image && (
        <a
          className="flex aspect-video w-full items-center justify-center overflow-hidden bg-pf-surface-muted p-4"
          href={outcome.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt={label} className="h-full w-auto object-contain shadow-lg" src={outcome.image} />
        </a>
      )}
      {embedUrl && (
        <div
          className={`relative w-full overflow-hidden bg-pf-surface-muted ${
            outcome.wide ? "h-[70vh] min-h-[420px] max-h-[820px]" : "aspect-video"
          }`}
        >
          {outcome.embed && outcome.wide ? (
            <ScaledFrame src={embedUrl} title={`${title} preview`} />
          ) : (
            <iframe
              allow="fullscreen"
              allowFullScreen
              className="absolute inset-0 size-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              src={embedUrl}
              title={`${title} preview`}
            />
          )}
        </div>
      )}
      <div
        className={`flex w-full gap-3 bg-pf-surface px-4 py-3 h-16 items-center ${
          embedUrl || outcome.image ? "border-pf-border border-t" : ""
        }`}
      >
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pf-tag text-pf-link">
            <Icon name="fileText" className="size-5" />
          </span>
          <span className="min-w-0 flex-1 truncate font-medium font-pf-body text-pf-heading text-sm leading-4">{label}</span>
        </div>
        <a
          className="pf-angle pf-angle-ring [--pf-angle-stroke:var(--pf-link)] inline-flex shrink-0 items-center gap-1.5 font-medium font-pf-body text-pf-link transition-colors duration-200 hover:bg-pf-tag/50 px-4 py-1.5 text-sm leading-[18px]"
          href={outcome.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Access
          <Icon name="arrowUpRight" className="size-5" />
        </a>
      </div>
    </div>
  );
}
