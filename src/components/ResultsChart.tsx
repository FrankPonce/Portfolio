import type { Results } from "@/data/portfolio";

const fmt = (v: number, d = 1) => v.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });

/**
 * Paired bars per metric: the baseline is always the full width, the model's bar is drawn to scale
 * against it, so the gap between the two ends is the improvement. Lower is better everywhere.
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
          const share = Math.max(0, Math.min(1, row.model / row.baseline));
          const change = Math.round((1 - share) * 100);
          const d = row.decimals ?? 1;
          return (
            <div key={row.metric} className="grid grid-cols-1 gap-3 py-5 md:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_4.5rem] md:items-center md:gap-8">
              <dt className="flex flex-col gap-0.5">
                <span className="font-medium font-pf-display text-base text-pf-heading leading-5">{row.metric}</span>
                {row.detail && <span className="font-pf-body text-pf-text-subtle text-xs leading-4">{row.detail}</span>}
              </dt>

              <dd className="flex flex-col gap-2">
                <span className="sr-only">
                  {r.baselineLabel} {fmt(row.baseline, d)}, {r.modelLabel} {fmt(row.model, d)}, {change} % lower.
                </span>
                <div aria-hidden="true" className="flex items-center gap-3">
                  <div className="h-3 flex-1 rounded-full bg-pf-text-muted/40" />
                  <span className="w-14 shrink-0 text-right font-pf-body text-pf-text-subtle text-sm tabular-nums">{fmt(row.baseline, d)}</span>
                </div>
                <div aria-hidden="true" className="flex items-center gap-3">
                  <div className="h-3 flex-1">
                    <div className="h-full rounded-full bg-pf-accent" style={{ width: `${share * 100}%` }} />
                  </div>
                  <span className="w-14 shrink-0 text-right font-medium font-pf-body text-pf-heading text-sm tabular-nums">{fmt(row.model, d)}</span>
                </div>
              </dd>

              <dd aria-hidden="true" className="font-pf-display font-semibold text-pf-accent text-xl tabular-nums md:text-right">
                −{change} %
              </dd>
            </div>
          );
        })}
      </dl>

      {r.note && <figcaption className="max-w-[68ch] font-pf-body text-pf-text-subtle text-sm leading-5">{r.note}</figcaption>}
    </figure>
  );
}
