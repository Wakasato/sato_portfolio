import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 sm:py-24">
      <p className="text-sm font-medium tracking-[0.2em] uppercase text-accent mb-3">Work</p>
      <h1 className="font-display text-4xl sm:text-5xl font-medium tracking-tight text-foreground mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {projects.map((project) => {
          const isExternal = !!project.externalLink;
          return (
            <Link
              href={project.externalLink || `/projects/${project.id}`}
              key={project.id}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex flex-col"
            >
              <div className="bg-surface h-48 w-full overflow-hidden border border-border">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className={`w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ${project.imagePosition || 'object-center'}`} />
                ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-muted font-medium">Image Placeholder</span>
                </div>
              )}
            </div>
            <div className="pt-5 flex flex-col flex-1">
              <h2 className="font-display text-xl font-medium mb-2 text-foreground group-hover:text-accent transition-colors">{project.title}</h2>
              <p className="text-muted text-sm leading-relaxed mb-4 flex-1">{project.summary}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-auto text-xs uppercase tracking-wide text-muted">
                {project.techStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </Link>
          );
        })}
      </div>
    </div>
  );
}
