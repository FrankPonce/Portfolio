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
  return p
    ? {
        title: `${p.title} | ${profile.name}`,
        description: p.description,
        openGraph: {
          type: "article",
          url: `/work/${p.slug}/`,
          siteName: profile.name,
          title: p.title,
          description: p.description,
          images: [{ url: "/og.png", width: 1200, height: 630 }],
        },
        twitter: { card: "summary_large_image", title: p.title, description: p.description, images: ["/og.png"] },
      }
    : {};
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
