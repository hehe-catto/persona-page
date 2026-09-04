import { profile } from "@/app/data";
import { Reveal } from "@/app/components/Reveal";

export function Hero() {
  return (
    <section className="py-24">
      <Reveal>
        <h1 className="text-heading sm:text-display font-bold text-gray-900 tracking-tight">
          {profile.name}
        </h1>
        <p className="text-subheading font-bold text-primary-600 mt-2">
          {profile.role}
        </p>
        <p className="text-bigbody text-gray-700 mt-6 max-w-xl">{profile.bio}</p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-block mt-8 text-bigbody font-bold text-primary-600 underline underline-offset-4 decoration-2 hover:text-primary-700 transition-colors"
        >
          Message me
        </a>
      </Reveal>
    </section>
  );
}
