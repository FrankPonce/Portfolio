"use client";

import { useState } from "react";
import type { BreakdownItem } from "@/data/portfolio";
import { Icon } from "./Icons";
import { N8nWorkflow } from "./N8nWorkflow";
import { OutcomeCard } from "./OutcomeCard";

function Item({ item, index, defaultOpen, centered }: { item: BreakdownItem; index: number; defaultOpen: boolean; centered: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div
      className={`flex flex-col rounded-pf-md border border-pf-border bg-pf-surface ${
        centered ? "md:col-span-2 md:max-w-[calc((100%-1.5rem)/2)] md:w-full md:justify-self-center" : ""
      }`}
    >
      <h3 className="flex">
        <button
          aria-expanded={open}
          className="flex flex-1 items-start justify-between gap-3 rounded-pf-md px-4 py-3 text-left font-medium text-sm leading-4 outline-none transition-colors duration-200 hover:bg-pf-tag/50 active:bg-pf-tag"
          onClick={() => setOpen((o) => !o)}
          type="button"
        >
          <span className="flex min-w-0 flex-1 items-start gap-3">
            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pf-tag font-pf-display text-pf-heading text-base">
              {index + 1}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <span className="text-pretty font-medium font-pf-body text-pf-heading text-sm leading-4">{item.title}</span>
              <span className="text-pretty font-normal font-pf-body text-[12px] text-pf-text-subtle leading-[14px]">
                {item.summary}
              </span>
            </span>
          </span>
          <Icon
            name="caretDown"
            className={`mt-2.5 size-5 shrink-0 text-pf-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </h3>
      {open && (
        <div className="overflow-hidden px-4 pb-4 text-sm">
          <div className="flex flex-col gap-3 border-pf-border border-t pt-3">
            {item.details && (
              <p className="text-pretty font-normal font-pf-body text-[12px] text-pf-text-subtle leading-[14px]">{item.details}</p>
            )}
            {item.workflow ? (
              <N8nWorkflow src={item.workflow} title={item.title} outcome={item.outcome} />
            ) : item.outcome ? (
              <OutcomeCard outcome={item.outcome} title={item.title} rounded="rounded-pf-md" />
            ) : (
              item.image && (
                <div className="flex w-full flex-col overflow-hidden rounded-pf-md border border-pf-border">
                  <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-pf-surface-muted">
                    <img alt="" className="absolute inset-0 size-full object-cover" src={item.image} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function Breakdown({ items }: { items: BreakdownItem[] }) {
  return (
    <div className="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
      {items.map((item, i) => (
        <Item
          key={item.title}
          item={item}
          index={i}
          defaultOpen
          centered={items.length % 2 === 1 && i === items.length - 1}
        />
      ))}
    </div>
  );
}
