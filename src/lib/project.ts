import type { Project } from "@/data/portfolio";

/** Parts of the "Company · Date" meta line. */
export function metaParts(p: Project): string[] {
  return [p.company?.name, p.date].filter(Boolean) as string[];
}
