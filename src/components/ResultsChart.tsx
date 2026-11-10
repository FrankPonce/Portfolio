import type { Results } from "@/data/portfolio";

const fmt = (v: number, d = 1) => v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
const signed = (v: number, d: number) => `${v > 0 ? "+" : v < 0 ? "−" : "±"}${fmt(Math.abs(v), d)}`;

/**
 * Paired bars per metric, both drawn to scale against the larger of the two values, so the gap between
 * the bar ends is the difference. Each row says whether lower or higher is better; the change label is
 * crimson when the model wins and muted grey when it doesn't, so an honest "no edge" result reads as one.
 */
export function ResultsChart({ results: r }: { results: Results }) {
  return (
    <figure className="flex w-full flex-col gap-6">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-pf-body text-pf-text-subtle text-sm" aria-hidden="true">
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-6 rounded-full bg-pf-text-muted/40" />
          {r.baselineLabel}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-2.5 w-6 rounded-full bg-pf-accent" />
          {r.modelLabel}
        </span>
      </div>

      <dl className="flex flex-col divide-y divide-pf-border border-pf-border border-y">
        {r.rows.map((row) => {
          const d = row.decimals ?? 1;
          const max = Math.max(row.baseline, row.model) || 1;
          const higher = row.better === "higher";
          const wins = higher ? row.model > row.baseline : row.model < row.baseline;
          const change =
            row.changeAs === "points"
              ? `${signed(row.model - row.baseline, 1)} pts`
              : `${signed(((row.model - row.baseline) / row.baseline) * 100, 0)} %`;
          return (
            <div
              key={row.metric}
              className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_5.5rem] md:items-center md:gap-8"
            >
              <dt className="flex flex-col gap-0.5">
                <span className="font-medium font-pf-display text-base text-pf-heading leading-5">{row.metric}</span>
                {row.detail && <span className="font-pf-body text-pf-text-subtle text-xs leading-4">{row.detail}</span>}
              </dt>

              <dd className="flex flex-col gap-2">
                <span className="sr-only">
                  {r.baselineLabel} {fmt(row.baseline, d)}, {r.modelLabel} {fmt(row.model, d)},{" "}
                  {higher ? "higher" : "lower"} is better, {wins ? "model better" : "model not better"}.
                </span>
                <div aria-hidden="true" className="flex items-center gap-3">
                  <div className="h-3 flex-1">
                    <div className="h-full rounded-full bg-pf-text-muted/40" style={{ width: `${(row.baseline / max) * 100}%` }} />
                  </div>
                  <span className="w-14 shrink-0 text-right font-pf-body text-pf-text-subtle text-sm tabular-nums">{fmt(row.baseline, d)}</span>
                </div>
                <div aria-hidden="true" className="flex items-center gap-3">
                  <div className="h-3 flex-1">
                    <div className="h-full rounded-full bg-pf-accent" style={{ width: `${(row.model / max) * 100}%` }} />
                  </div>
                  <span className="w-14 shrink-0 text-right font-medium font-pf-body text-pf-heading text-sm tabular-nums">{fmt(row.model, d)}</span>
                </div>
              </dd>

              <dd
                aria-hidden="true"
                className={`font-pf-display font-semibold text-xl tabular-nums md:text-right ${wins ? "text-pf-accent" : "text-pf-text-muted"}`}
              >
                {change}
              </dd>
            </div>
          );
        })}
      </dl>

      {r.note && <figcaption className="max-w-[68ch] font-pf-body text-pf-text-subtle text-sm leading-5">{r.note}</figcaption>}
    </figure>
  );
}
