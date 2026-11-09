import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { Breakdown } from "./Breakdown";
import { Icon } from "./Icons";
import { OutcomeCard } from "./OutcomeCard";
import { ResultsChart } from "./ResultsChart";
import { metaParts } from "@/lib/project";
import { Tag, btnBase, btnGhost, btnMd, btnOutline } from "./ui";

const sectionCls = "border-pf-border border-t bg-pf-canvas px-4 py-10 md:px-16 md:py-12";
const h2 = "font-semibold font-pf-heading text-[36px] text-pf-text leading-10";
const body = "font-pf-display text-base text-pf-text leading-5 whitespace-pre-line";

export function ProjectPage({ project: p }: { project: Project }) {
  const meta = metaParts(p);
  const status = [p.verified && "✅ Verified by Extern", p.inProgress && "⏱️ In progress"].filter(Boolean).join(" · ");

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="px-4 py-8 md:px-16">
        <div className="relative mx-auto flex w-full max-w-[1280px] flex-col gap-6 md:gap-12">
          <div className="relative flex flex-col gap-3 md:min-h-10 md:flex-row md:items-center">
            <Link className={`${btnBase} ${btnOutline} ${btnMd} relative z-10 w-fit shrink-0`} href="/#works">
              <Icon name="arrowLeft" className="size-5" />
              Back to work
            </Link>
            {meta.length > 0 && (
              <div className="flex justify-center md:pointer-events-none md:absolute md:inset-0 md:items-center md:justify-center">
                <p className="font-pf-display text-base text-pf-link leading-5">{meta.join(" · ")}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex max-w-[720px] flex-col items-center gap-2">
              {status && <p className="text-center font-pf-display text-base text-pf-heading leading-5">{status}</p>}
              {p.award && (
                <p className="mb-1 inline-flex items-center gap-2 rounded-pf-pill border border-pf-accent/60 bg-pf-accent/10 px-3 py-1 font-medium font-pf-display text-pf-heading text-sm leading-5">
                  <span aria-hidden="true">🏆</span>
                  {p.award}
                </p>
              )}
              <h1 className="font-pf-display font-semibold text-[32px] text-pf-heading leading-10 tracking-[-0.54px] md:text-[36px] md:leading-[44px]">
                {p.title}
              </h1>
              <p className="font-pf-display text-[22px] text-pf-text-subtle leading-7 tracking-[-1px]">{p.description}</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {p.tags.map((t) => (
                <Tag key={t} small>
                  {t}
                </Tag>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className={sectionCls}>
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6 md:flex-row md:items-center md:gap-6">
          <div className="flex min-w-0 flex-1 flex-col gap-8">
            <h2 className={h2}>Overview</h2>
            <p className={body}>{p.overview ?? p.description}</p>
          </div>
          {p.heroImage && (
            <div className="relative min-w-0 flex-1">
              <div className="relative w-full overflow-hidden bg-pf-surface-muted">
                <img alt={p.title} className="block h-auto w-full object-contain" src={p.heroImage} />
                <div aria-hidden="true" className="absolute inset-0 bg-[image:var(--pf-noir-image-scrim)]" />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* What I've accomplished */}
      {p.accomplishment && (
        <section className={sectionCls}>
          <div
            className={`mx-auto flex w-full max-w-[1280px] flex-col gap-6 ${
              p.featuredOutcome?.wide ? "flex-col-reverse" : "md:flex-row md:items-center"
            }`}
          >
            {p.featuredOutcome && (
              <div className="flex min-w-0 flex-1 flex-col gap-6">
                <OutcomeCard outcome={p.featuredOutcome} title={p.title} />
              </div>
            )}
            <div
              className={`flex min-w-0 flex-1 flex-col gap-4 ${
                p.featuredOutcome && !p.featuredOutcome.wide ? "" : "items-center text-center"
              }`}
            >
              <h2 className={h2}>What I&apos;ve accomplished</h2>
              <p className={body}>{p.accomplishment}</p>
              {p.certificateUrl && (
                <div className="flex flex-wrap items-center gap-1">
                  <a
                    className="inline-flex h-[22px] items-center justify-center whitespace-nowrap rounded-pf-pill bg-pf-tag px-2 font-medium font-pf-body text-[11.48px] text-pf-heading leading-[13px] transition-opacity hover:opacity-80"
                    href={p.certificateUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    View certificate
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Results vs baseline */}
      {p.results && (
        <section className={sectionCls}>
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8">
            <h2 className={`${h2} max-w-[24ch]`}>{p.results.headline}</h2>
            <ResultsChart results={p.results} />
          </div>
        </section>
      )}

      {/* Dashboards */}
      {p.dashboards && p.dashboards.length > 0 && (
        <section className={sectionCls}>
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-10">
            <h2 className={h2}>Dashboards</h2>
            {p.dashboards.map((d) => (
              <div key={d.title} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium font-pf-display text-[22px] text-pf-heading leading-7">{d.title}</h3>
                  {d.description && <p className={body}>{d.description}</p>}
                </div>
                <OutcomeCard outcome={d.outcome} title={d.title} />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Project breakdown */}
      {p.breakdown && p.breakdown.length > 0 && (
        <section className={sectionCls}>
          <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
            <h2 className={h2}>Project breakdown</h2>
            <Breakdown items={p.breakdown} />
          </div>
        </section>
      )}

      <section className={`flex flex-col items-center ${sectionCls}`}>
        <Link className={`${btnBase} ${btnGhost} ${btnMd}`} href="/#works">
          View all work
          <Icon name="arrowRight" className="size-5" />
        </Link>
      </section>
    </div>
  );
}
