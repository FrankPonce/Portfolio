import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { ProjectPage } from "@/components/ProjectPage";
import { profile, projects } from "@/data/portfolio";

type Params = { slug: string };

// Pre-render one page per project at build time.
export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: `${p.title} | ${profile.name}`, description: p.description } : {};
}

export default async function WorkPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Nav fixedActive="works" />
      <div className="flex w-full flex-1 flex-col">
        <ProjectPage project={project} />
      </div>
      <Footer />
    </>
  );
}
