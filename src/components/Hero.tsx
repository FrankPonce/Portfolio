import { profile } from "@/data/portfolio";
import { Icon } from "./Icons";
import { btnBase, btnFilled, btnLg, btnOutline } from "./ui";

function Badge() {
  if (!profile.badge) return null;
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-pf-pill bg-pf-surface-muted py-2 pr-4 pl-2">
      {profile.badge.logo && (
        <span className="flex size-6 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pf-accent">
          <img alt="" className="size-full object-cover" src={profile.badge.logo} />
        </span>
      )}
      <span className="whitespace-nowrap font-medium font-pf-display text-pf-text text-xs leading-[14px]">
        {profile.badge.label}
      </span>
    </div>
  );
}

function Actions() {
  return (
    <div className="flex flex-col items-stretch gap-6 sm:flex-row sm:items-center">
      <a className={`${btnBase} ${btnFilled} ${btnLg}`} href={profile.primaryAction.href}>
        <Icon name="briefcaseFill" className="size-6 shrink-0" />
        {profile.primaryAction.label}
      </a>
      <a className={`${btnBase} ${btnOutline} ${btnLg}`} href={profile.secondaryAction.href}>
        <Icon name="envelope" className="size-6 shrink-0" />
        {profile.secondaryAction.label}
      </a>
    </div>
  );
}

function Portrait({ className }: { className: string }) {
  return (
    <div className={`relative aspect-square w-full shrink-0 overflow-hidden ${className}`}>
      <img alt={`${profile.name} portrait`} className="size-full object-cover object-top" src={profile.heroPortrait} />
      <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: "var(--pf-hero-gradient)" }} />
    </div>
  );
}

export function Hero() {
  return (
    <section className="scroll-mt-[var(--pf-nav-height,4rem)]" id="home">
      <header className="relative z-0 w-full overflow-hidden bg-pf-surface lg:-mt-20">
        <div aria-hidden="true" className="absolute inset-0">
          <img alt="" className="size-full object-cover" src={profile.heroBackground} />
          <div className="absolute inset-0" style={{ backgroundImage: "var(--pf-hero-gradient)" }} />
        </div>

        <div className="mx-auto w-full max-w-[1280px] relative flex min-h-[520px] flex-col justify-end px-4 pt-6 pb-6 md:min-h-[620px] md:px-16 md:pt-32 md:pb-16">
          <div className="flex w-full flex-col items-center gap-6 lg:flex-row lg:items-end lg:gap-16">
            {/* mobile: badge + portrait on top */}
            <div className="flex w-full flex-col items-center gap-6 lg:hidden">
              <Badge />
              <Portrait className="rounded-pf-lg" />
            </div>

            <div className="flex w-full min-w-0 max-w-full flex-col items-start gap-6 lg:flex-1">
              <div className="hidden lg:block">
                <Badge />
              </div>
              <h1 className="font-bold font-pf-display text-[36px] text-pf-heading leading-[48px] tracking-[-0.72px] md:font-medium md:text-[48px] md:leading-[52px] md:tracking-[-0.96px]">
                {profile.headline}
              </h1>
              <p className="whitespace-pre-wrap font-pf-display text-lg text-pf-text-subtle leading-6 tracking-[-0.5px] md:text-[22px] md:leading-7 md:tracking-[-1px] min-w-0 max-w-full wrap-anywhere">
                {profile.intro}
              </p>
              <div className="hidden lg:block">
                <Actions />
              </div>
            </div>

            {/* desktop portrait */}
            <Portrait className="hidden max-w-[368px] self-start rounded-t-pf-lg lg:block lg:size-[368px] lg:self-end" />

            <div className="w-full lg:hidden">
              <Actions />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}
