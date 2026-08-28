import { profile } from "@/app/data";

export function Hero() {
  return (
    <section className="py-24">
      <h1 className="motion-safe:rise-in text-heading sm:text-display font-bold text-gray-900 tracking-tight">
        {profile.name}
      </h1>
      <p className="motion-safe:rise-in [animation-delay:90ms] text-subheading font-bold text-primary-600 mt-2">
        {profile.role}
      </p>
      <p className="motion-safe:rise-in [animation-delay:180ms] text-bigbody text-gray-700 mt-6 max-w-xl">
        {profile.bio}
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="motion-safe:rise-in [animation-delay:270ms] inline-block mt-8 text-bigbody font-bold text-primary-600 underline underline-offset-4 decoration-2 hover:text-primary-700 transition-colors"
      >
        Message me
      </a>
    </section>
  );
}
