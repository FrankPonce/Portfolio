import { profile } from "@/data/portfolio";
import { techIconPaths } from "@/data/techIcons";
import { Icon, type IconName } from "./Icons";
import { Divider, SectionIntro, Tag } from "./ui";

const contactRow =
  "flex w-full max-w-full justify-center text-center font-medium text-base leading-5 text-pf-text [font-family:Lora,Georgia,serif]";

function ContactLine({ icon, label, href }: { icon: IconName; label: string; href?: string }) {
  const inner = (
    <span className="inline-flex max-w-full items-center justify-center gap-1.5 whitespace-nowrap">
      <span aria-hidden="true" className="flex size-5 shrink-0 items-center justify-center">
        <Icon name={icon} className="size-5" />
      </span>
      <span className="truncate">{label}</span>
    </span>
  );
  const external = href?.startsWith("http");
  return (
    <div className="flex w-full flex-col items-center px-6">
      {href ? (
        <a
          className={`${contactRow} transition-colors hover:text-pf-link`}
          href={href}
          {...(external ? { rel: "noopener noreferrer", target: "_blank" } : {})}
        >
          {inner}
        </a>
      ) : (
        <p className={contactRow}>{inner}</p>
      )}
    </div>
  );
}

function DetailGroup({
  label,
  icon,
  items,
}: {
  label?: string;
  icon: IconName;
  items: { title: string; subtitle: string; logo?: string; description?: string }[];
}) {
  if (items.length === 0) return null;
  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex w-full flex-col items-start gap-2">
        {label && <p className="font-pf-display text-pf-text-subtle text-sm leading-4">{label}</p>}
        {items.map((it) => (
          <div key={it.title + it.subtitle} className="flex items-start gap-3 py-2">
            {it.logo ? (
              <img alt="" className="size-10 shrink-0 object-contain" src={it.logo} />
            ) : (
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-pf-surface-muted text-pf-text">
                <Icon name={icon} className="size-5" />
              </span>
            )}
            <div className="flex min-w-0 flex-col justify-center gap-1">
              <p className="font-medium font-pf-display text-base text-pf-text leading-5">{it.title}</p>
              <p className="font-pf-display text-pf-text-subtle text-sm leading-4">{it.subtitle}</p>
              {it.description && (
                <p className="mt-1 max-w-[640px] text-pretty font-pf-display text-pf-text-subtle text-sm leading-5">
                  {it.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Divider />
    </div>
  );
}

/** Top-level block heading in the About column (Experience, Volunteering, Education). */
function BlockHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-pf-heading font-semibold text-[28px] text-pf-heading leading-8 md:text-[32px]">{children}</h3>;
}

function Skills() {
  if (profile.skills.length === 0) return null;
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-pf-display text-pf-text-subtle text-sm leading-4">Skills</p>
      <div className="flex flex-wrap gap-2">
        {profile.skills.map((s) => (
          <Tag key={s}>{s}</Tag>
        ))}
      </div>
    </div>
  );
}

function TechStack() {
  if (profile.techStack.length === 0) return null;
  return (
    <div className="flex w-full flex-col gap-4">
      <p className="font-pf-display text-pf-text-subtle text-sm leading-4">Tech stack</p>
      <ul className="grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-4 lg:grid-cols-3">
        {profile.techStack.map((t) => {
          const d = techIconPaths[t.name];
          return (
            <li key={t.name} className="group flex flex-col items-center gap-2.5 text-center">
              {d ? (
                <svg
                  aria-hidden="true"
                  className="size-11 overflow-visible text-pf-accent transition-[filter] duration-200 group-hover:drop-shadow-[0_0_6px_crimson]"
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                >
                  <path d={d} fillRule="evenodd" vectorEffect="non-scaling-stroke" />
                </svg>
              ) : (
                <img alt="" className="size-11 object-contain" src={t.icon} />
              )}
              <span className="font-pf-body text-[12px] text-pf-text-subtle leading-[14px]">{t.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function About() {
  const c = profile.contact;
  return (
    <section
      className="scroll-mt-[var(--pf-nav-height,4rem)] w-full border-pf-border border-y bg-pf-surface px-4 py-6 md:px-16 md:py-12"
      id="about"
    >
      <div className="mx-auto w-full max-w-[1280px] flex flex-col gap-8">
        <SectionIntro title="About me" text={profile.intro} />

        <div className="flex w-full flex-col gap-10 lg:flex-row lg:items-start">
          <div className="flex w-full max-w-[427px] shrink-0 flex-col gap-6">
          <aside className="relative flex w-full flex-col gap-6 overflow-hidden rounded-pf-lg bg-pf-surface">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <img alt="" className="absolute inset-0 size-full object-cover" src={profile.profilePicture} />
              <div className="absolute inset-0 bg-[image:var(--pf-hero-gradient)]" />
            </div>
            <span className="sr-only">{profile.name} portrait</span>
            <div className="relative aspect-square w-full" />
            <div className="relative flex w-full flex-col items-center gap-4 pb-6">
              <ContactLine icon="envelope" label={c.email} href={`mailto:${c.email}`} />
              <ContactLine icon="linkedin" label="LinkedIn Profile" href={c.linkedin} />
              <ContactLine icon="github" label="GitHub Profile" href={c.github} />
              <ContactLine icon="mapPin" label={c.location} />
              <a
                className="pf-angle inline-flex h-12 items-center justify-center bg-[var(--pf-noir-pill)] px-6 font-normal font-pf-display text-base text-pf-inverse leading-5 transition-colors hover:bg-pf-surface-muted"
                download
                href={profile.resumeUrl}
              >
                <span className="flex items-center justify-center gap-1.5">
                  <Icon name="download" className="size-5" />
                  Download Resume
                </span>
              </a>
            </div>
          </aside>
          <Skills />
          <TechStack />
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-6">
            <p className="w-full font-medium font-pf-display text-lg text-pf-text-subtle leading-6 tracking-[-0.5px] md:text-[22px] md:leading-7 md:tracking-[-1px]">
              {profile.bio}
            </p>
            <Divider />
            <BlockHeading>Experience</BlockHeading>
            <DetailGroup label="Externships" icon="sealCheck" items={profile.externships} />
            <DetailGroup
              label="Freelancing"
              icon="briefcase"
              items={profile.experience.filter((e) => e.kind === "freelance").map((e) => ({
                title: e.title,
                subtitle: `${e.company} · ${e.dates}`,
                logo: e.logo,
                description: e.description,
              }))}
            />
            <DetailGroup
              label="Internships"
              icon="briefcase"
              items={profile.experience.filter((e) => e.kind === "internship").map((e) => ({
                title: e.title,
                subtitle: `${e.company} · ${e.dates}`,
                logo: e.logo,
                description: e.description,
              }))}
            />
            <BlockHeading>Volunteering</BlockHeading>
            <DetailGroup icon="sealCheck" items={profile.volunteering.map((e) => ({
                title: e.title,
                subtitle: `${e.company} · ${e.dates}`,
                logo: e.logo,
                description: e.description,
              }))} />
            <BlockHeading>Education</BlockHeading>
            <DetailGroup
              icon="graduationCap"
              items={profile.education.map((e) => ({
                title: e.school,
                subtitle: `${e.degree} · Class of ${e.year}`,
                logo: e.logo,
                description: e.description,
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
