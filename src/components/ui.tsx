import { SigilDivider } from "./Sigil";
// Small shared building blocks (class names taken from the original Extern markup).

export const btnBase =
  "pf-angle inline-flex items-center justify-center gap-2 font-pf-display font-medium text-pf-inverse transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-pf-canvas";
export const btnFilled = "bg-[var(--pf-noir-pill)] hover:bg-pf-accent hover:text-white";
export const btnOutline = "pf-angle-ring [--pf-angle-stroke:var(--pf-inverse)] hover:bg-pf-accent hover:text-white hover:[--pf-angle-stroke:crimson]";
export const btnGhost = "hover:bg-pf-accent hover:text-white";
export const btnLg = "px-8 py-4 text-lg leading-6 tracking-[-0.5px]";
export const btnMd = "h-12 px-6 py-2 text-base leading-5";

export function Tag({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <span
      className={
        small
          ? "inline-flex items-center justify-center gap-1 pf-angle whitespace-nowrap bg-pf-tag text-pf-tag-text h-[22px] px-3 py-1 font-medium font-pf-body text-[11px] leading-[13px]"
          : "inline-flex items-center justify-center gap-1 pf-angle whitespace-nowrap bg-pf-tag text-pf-tag-text px-3 py-1 font-normal font-pf-display text-[12px] leading-[14px]"
      }
    >
      {children}
    </span>
  );
}

export function SectionIntro({ title, text }: { title: string; text?: string }) {
  return (
    <section className="flex flex-col items-center px-4 py-6 md:px-16 md:py-12">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-4 text-left md:items-center md:gap-6 md:text-center">
        <div className="flex flex-col items-start gap-3 md:items-center">
          <h1 className="font-pf-heading font-semibold text-[30px] text-pf-heading leading-8 md:text-[56px] md:leading-[60px]">
            {title}
          </h1>
          <SigilDivider className="h-5 w-60 text-pf-accent md:h-7 md:w-[22rem]" />
        </div>
        {text && (
          <p className="max-w-[700px] font-pf-display text-lg text-pf-text-subtle leading-6 tracking-[-0.5px] md:text-[22px] md:leading-7 md:tracking-[-1px]">
            {text}
          </p>
        )}
      </div>
    </section>
  );
}

export function Divider() {
  return <div aria-hidden="true" className="shrink-0 bg-pf-divider h-px w-full" />;
}
