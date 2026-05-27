import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => {
          const isExternal = !!project.externalLink;
          return (
            <Link 
              href={project.externalLink || `/projects/${project.id}`} 
              key={project.id} 
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="group flex flex-col border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
            >
              <div className="bg-gray-100 dark:bg-gray-900 h-48 w-full overflow-hidden">
                {project.imageUrl ? (
                  <img src={project.imageUrl} alt={project.title} className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${project.imagePosition || 'object-center'}`} />
                ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400 dark:text-gray-600 font-medium">Image Placeholder</span>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded-md text-gray-600 dark:text-gray-300">
                    {tech}
                  </span>
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
