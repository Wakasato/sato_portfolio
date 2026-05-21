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

  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link href="/projects" className="text-sm text-gray-500 hover:text-black dark:hover:text-white transition-colors mb-8 inline-flex items-center gap-2">
        ← Back to Projects
      </Link>
      
      <div className="bg-gray-100 dark:bg-gray-900 h-64 sm:h-96 w-full rounded-2xl mb-8 flex items-center justify-center">
        <span className="text-gray-400 dark:text-gray-600 font-medium">Image Placeholder</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-4">{project.title}</h1>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.techStack.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-sm rounded-full text-gray-700 dark:text-gray-300">
            {tech}
          </span>
        ))}
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
      </div>

      <div className="flex gap-4 mt-12 pt-8 border-t border-gray-100 dark:border-gray-900">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
            Visit Project
          </a>
        )}
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-5 py-2 border border-gray-200 dark:border-gray-800 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
            View Source
          </a>
        )}
      </div>
    </div>
  );
}
