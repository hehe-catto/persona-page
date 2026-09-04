import { skills } from "@/app/data";
import { Reveal } from "@/app/components/Reveal";

export function About() {
  return (
    <section aria-labelledby="about-label" className="py-16 border-t border-gray-200">
      <h2
        id="about-label"
        className="text-body font-bold text-gray-600 uppercase tracking-wider mb-8"
      >
        About
      </h2>
      <p className="text-bigbody text-gray-700 max-w-xl">
        I&apos;m currently a Software Engineer at Skipo, where I&apos;ve owned mobile
        (Flutter) and frontend (Vue, Next.js) development. My background is in
        Computer Science Engineering at Pontificia Universidad Católica de Chile,
        where I also teach UX/UI and Software Development.
      </p>
      <Reveal as="ul" pop className="flex flex-wrap gap-2 mt-6 max-w-xl">
        {skills.map((skill) => (
          <li
            key={skill}
            className="text-body text-gray-700 bg-gray-100 px-3 py-1 rounded-full transition-colors hover:bg-primary-100 hover:text-primary-800"
          >
            {skill}
          </li>
        ))}
      </Reveal>
    </section>
  );
}
