import { experience } from "@/app/data";

export function Experience() {
  return (
    <section aria-labelledby="experience-label" className="py-16 border-t border-gray-200">
      <h2
        id="experience-label"
        className="text-body font-bold text-gray-600 uppercase tracking-wider mb-8"
      >
        Experience
      </h2>
      <div className="flex flex-col gap-10">
        {experience.map((job, i) => (
          <div
            key={`${job.company}-${job.period}`}
            style={{ animationDelay: `${120 + i * 110}ms` }}
            className="motion-safe:rise-in max-w-xl"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="text-subheading font-bold text-gray-900">
                {job.role}
              </h3>
              <span className="text-body text-gray-600 whitespace-nowrap">
                {job.period}
              </span>
            </div>
            <a
              href={job.url}
              target="_blank"
              rel="noopener noreferrer"
              className="underline-grow inline-block text-bigbody font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              {job.company}
            </a>
            <ul className="mt-3 flex flex-col gap-2">
              {job.points.map((point) => (
                <li key={point} className="group flex gap-3">
                  <svg
                    viewBox="0 0 16 16"
                    aria-hidden="true"
                    className="mt-1.5 size-3.5 shrink-0 fill-none stroke-primary-400 stroke-2 transition-transform duration-200 group-hover:translate-x-1"
                  >
                    <path
                      d="M6 3l5 5-5 5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-bigbody text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
