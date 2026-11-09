"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { SigilStar } from "./Sigil";
import { Icon } from "./Icons";

type Tab = "home" | "works" | "about";

const tabs: { id: Tab; short: string; long: string }[] = [
  { id: "home", short: "Home", long: "Home" },
  { id: "works", short: "Work", long: "Work" },
  { id: "about", short: "About", long: "About me" },
];

/** Sticky top bar. On the home page it highlights the section you're scrolled to. */
export function Nav({ fixedActive }: { fixedActive?: Tab }) {
  const [active, setActive] = useState<Tab>(fixedActive ?? "home");

  useEffect(() => {
    if (fixedActive) return;
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35;
      let current: Tab = "home";
      for (const t of tabs) {
        const el = document.getElementById(t.id);
        if (el && el.offsetTop <= y) current = t.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [fixedActive]);

  return (
    <nav
      aria-label="Portfolio"
      className="sticky top-0 z-40 w-full border-pf-divider border-b bg-pf-surface px-4 md:px-16 lg:h-20"
    >
      <div className="mx-auto w-full max-w-[1280px] flex h-full flex-row items-center justify-between gap-4 py-4">
        <div className="flex min-w-0 items-center lg:w-[400px]">
          <p className="flex min-w-0 items-center gap-1.5 py-2 sm:gap-2.5">
            <SigilStar className="size-3 shrink-0 text-pf-accent sm:size-4 lg:size-5" />
            <span className="whitespace-nowrap font-pf-gothic text-[24px] text-pf-heading leading-none sm:text-[30px] lg:text-[38px]">
              {profile.name}
            </span>
            <span aria-hidden="true" className="hidden h-6 w-px shrink-0 bg-pf-text-muted/50 lg:block" />
            <span className="hidden truncate font-pf-body text-[15px] text-pf-text-muted leading-5 lg:block">
              {profile.role}
            </span>
          </p>
        </div>

        <nav
          aria-label="Portfolio sections"
          className="flex w-fit shrink-0 items-center gap-1 rounded-pf-pill bg-[var(--pf-noir-pill)] p-1"
        >
          {tabs.map((t) => (
            <Link
              key={t.id}
              href={`/#${t.id}`}
              data-pf-tab={t.id}
              data-active={active === t.id}
              className="rounded-pf-pill px-2 py-2 font-normal font-pf-display text-pf-text text-sm leading-5 transition-colors hover:bg-pf-surface-muted lg:px-3 lg:text-base"
            >
              <span className="lg:hidden">{t.short}</span>
              <span className="hidden lg:inline">{t.long}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden min-w-0 items-center gap-6 lg:flex lg:w-[358px] lg:justify-end">
          <a
            className="min-w-0 truncate font-normal font-pf-body text-base text-pf-text leading-5 underline decoration-solid underline-offset-2 transition-all hover:text-pf-accent hover:opacity-70"
            href={`mailto:${profile.contact.email}`}
          >
            {profile.contact.email}
          </a>
          <div className="flex shrink-0 items-center gap-6">
            <a
              aria-label="LinkedIn"
              className="flex size-6 shrink-0 items-center justify-center text-pf-text transition-all hover:text-pf-accent hover:opacity-70"
              href={profile.contact.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="linkedin" className="size-6" />
            </a>
            <a
              aria-label="GitHub"
              className="flex size-6 shrink-0 items-center justify-center text-pf-text transition-all hover:text-pf-accent hover:opacity-70"
              href={profile.contact.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Icon name="github" className="size-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
