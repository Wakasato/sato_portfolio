import { projects } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import CampaignSystemCaseStudy from "@/components/projects/CampaignSystemCaseStudy";
import CycleVennerCaseStudy from "@/components/projects/CycleVennerCaseStudy";
import ConversionOptimisationCaseStudy from "@/components/projects/ConversionOptimisationCaseStudy";
import ShoreQuestCaseStudy from "@/components/projects/ShoreQuestCaseStudy";
import CheckoutUICaseStudy from "@/components/projects/CheckoutUICaseStudy";

// In Next.js App Router, params must be awaited in dynamic routes
export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (id === 'campaign-system') {
    return <CampaignSystemCaseStudy />;
  }

  if (id === 'cycle-venner') {
    return <CycleVennerCaseStudy />;
  }

  if (id === 'conversion-optimisation') {
    return <ConversionOptimisationCaseStudy />;
  }

  if (id === 'shore-quest') {
    return <ShoreQuestCaseStudy />;
  }

  if (id === 'checkout-ui') {
    return <CheckoutUICaseStudy />;
  }

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 sm:py-24">
      <Link href="/projects" className="text-sm text-muted hover:text-accent transition-colors mb-10 inline-flex items-center gap-2">
        ← Back to Projects
      </Link>

      <div className="bg-surface h-64 sm:h-96 w-full border border-border mb-8 flex items-center justify-center">
        <span className="text-muted font-medium">Image Placeholder</span>
      </div>

      <h1 className="font-display text-3xl sm:text-4xl font-medium tracking-tight text-foreground mb-4">{project.title}</h1>

      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-8 text-xs uppercase tracking-wide text-muted">
        {project.techStack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>

      <p className="text-lg leading-relaxed text-foreground/90 max-w-none">
        {project.description}
      </p>

      <div className="flex gap-4 mt-12 pt-8 border-t border-border">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-accent text-accent-foreground text-sm font-medium hover:opacity-90 transition-opacity">
            Visit Project
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-border text-sm font-medium hover:bg-surface transition-colors">
            View Source
          </a>
        )}
      </div>
    </div>
  );
}
