"use client";

import Link from "next/link";
import { useState } from "react";
import { profile, projects, type Project } from "@/data/portfolio";
import { metaParts } from "@/lib/project";
import { Icon } from "./Icons";
import { SectionIntro, Tag, btnBase, btnMd, btnOutline } from "./ui";


function WorkCard({ project: p }: { project: Project }) {
  const meta = metaParts(p);
  const showMeta = meta.length > 0 || p.verified || p.inProgress;
  return (
    <article
      className={`group relative flex min-h-[230px] w-full cursor-pointer flex-col items-center justify-center gap-[19px] overflow-hidden rounded-pf-lg bg-pf-surface px-4 py-6 transition-colors hover:bg-pf-surface-muted md:px-6 ${
        p.verified ? "" : "border border-pf-border"
      }`}
    >
      <Link className="absolute inset-0 z-10" href={`/work/${p.slug}/`}>
        <span className="sr-only">{p.title}</span>
      </Link>

      {p.heroImage && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <img
            alt=""
            className="absolute inset-0 size-full object-cover opacity-25 transition-transform duration-300 group-hover:scale-[1.02] md:opacity-60"
            src={p.heroImage}
          />
          <div className="absolute inset-0 bg-[image:var(--pf-noir-card-scrim)]" />
        </div>
      )}

      {showMeta && (
        <div className="relative flex w-full items-center justify-center gap-2">
          {p.company?.logo ? (
            <img
              alt={`${p.company.name} logo`}
              className="size-8 shrink-0 rounded-full object-cover"
              height={32}
              src={p.company.logo}
              width={32}
            />
          ) : (
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-pf-tag text-pf-text">
              <Icon name="briefcase" className="size-4" />
            </span>
          )}
          <p className="min-w-0 font-pf-display text-base text-pf-text-subtle leading-5">
            {meta.join(" · ")}
            {p.verified && (
              <>
                {meta.length > 0 && " · "}
                <span className="whitespace-nowrap text-pf-success">✅ Verified by Extern</span>
              </>
            )}
            {p.inProgress && (
              <>
                {" · "}
                <span className="whitespace-nowrap">⏱️ In progress</span>
              </>
            )}
          </p>
        </div>
      )}

      <div className="relative flex w-full flex-col items-center gap-[6.4px] text-center">
        <h5 className="w-full font-pf-display font-semibold text-[22px] text-pf-text leading-7 tracking-[-1px]">
          {p.title}
        </h5>
        <p className="w-full max-w-[600px] font-pf-display text-base text-pf-text-subtle leading-5">{p.description}</p>
      </div>

      <div className="relative flex w-full flex-wrap items-center justify-center gap-3">
        {p.tags.map((t) => (
          <Tag key={t} small>
            {t}
          </Tag>
        ))}
      </div>
    </article>
  );
}

const MOBILE_VISIBLE = 2;

export function Works() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="scroll-mt-[var(--pf-nav-height,4rem)]" id="works">
      <div className="border-pf-border border-t bg-pf-canvas">
        <SectionIntro title="Work samples" text={profile.worksIntro} />
      </div>
      <div className="bg-pf-canvas px-4 pt-2 pb-10 md:px-16 md:py-12">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-6">
          <ul className="flex w-full flex-col gap-8">
            {projects.map((p, i) => (
              <li key={p.slug} className={!expanded && i >= MOBILE_VISIBLE ? "hidden md:block" : ""}>
                <WorkCard project={p} />
              </li>
            ))}
          </ul>
          {!expanded && projects.length > MOBILE_VISIBLE && (
            <button
              className={`self-center md:hidden ${btnBase} ${btnOutline} ${btnMd}`}
              onClick={() => setExpanded(true)}
              type="button"
            >
              View more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
