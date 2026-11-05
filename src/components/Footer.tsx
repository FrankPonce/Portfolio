import Link from "next/link";
import { profile } from "@/data/portfolio";

const link =
  "max-w-full font-medium font-pf-body text-base text-pf-text leading-5 underline-offset-4 transition-colors hover:text-pf-accent hover:underline";
const label = "font-pf-body text-pf-text-subtle text-sm leading-4";
const col = "wrap-break-word flex min-w-0 flex-1 flex-col items-start gap-2";
const vr = <div aria-hidden="true" className="h-px w-full shrink-0 bg-pf-divider md:h-auto md:w-px md:self-stretch" />;

export function Footer() {
  const c = profile.contact;
  return (
    <footer className="border-pf-border border-t bg-pf-canvas py-12">
      <div className="mx-auto w-full max-w-[1280px] flex flex-col gap-6 px-6 md:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className={col}>
            <p className="font-medium font-pf-body text-base text-pf-text leading-5">{profile.name}</p>
            <p className={label}>{profile.role}</p>
          </div>
          {vr}
          <div className={col}>
            <p className={label}>Explore</p>
            <Link className={`${link} truncate`} href="/#home">Home</Link>
            <Link className={`${link} truncate`} href="/#works">Work</Link>
            <Link className={`${link} truncate`} href="/#about">About me</Link>
          </div>
          {vr}
          <div className={col}>
            <p className={label}>Contact</p>
            <a className={`${link} w-full min-w-0 wrap-anywhere`} href={`mailto:${c.email}`}>{c.email}</a>
            <a className={`${link} w-full min-w-0 wrap-anywhere`} href={`tel:${c.phone}`}>{c.phoneDisplay}</a>
            <a className={`${link} w-full min-w-0 wrap-anywhere`} href={c.linkedin} rel="noopener noreferrer" target="_blank">
              LinkedIn Profile
            </a>
            <a className={`${link} w-full min-w-0 wrap-anywhere`} href={c.github} rel="noopener noreferrer" target="_blank">
              GitHub Profile
            </a>
            <p className="font-medium font-pf-body text-base text-pf-text leading-5 w-full min-w-0 wrap-anywhere">{c.location}</p>
          </div>
          {vr}
          <div className={col}>
            <p className={label}>Resume</p>
            <a className={link} download href={profile.resumeUrl}>Download PDF ↓</a>
          </div>
        </div>
        <div aria-hidden="true" className="h-px w-full bg-pf-divider" />
        <p className="text-center font-pf-body text-pf-text-muted text-xs leading-[14px] md:text-left">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
