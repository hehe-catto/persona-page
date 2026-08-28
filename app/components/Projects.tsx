import { projects } from "@/app/data";

export function Projects() {
  return (
    <section aria-labelledby="projects-label" className="py-16 border-t border-gray-200">
      <h2
        id="projects-label"
        className="text-body font-bold text-gray-600 uppercase tracking-wider mb-8"
      >
        Projects
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 max-w-xl">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-lg bg-white shadow-sm transition-all hover:shadow-md hover:bg-primary-50 hover:-translate-y-1"
          >
            <h3 className="text-bigbody font-bold text-gray-900 group-hover:text-primary-900 transition-colors">
              {project.name}
            </h3>
            <p className="text-body text-gray-700 mt-1 group-hover:text-primary-800 transition-colors">
              {project.description}
            </p>
            <p className="text-body text-gray-600 mt-3 group-hover:text-primary-700 transition-colors">
              {project.tech.join(" · ")}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
