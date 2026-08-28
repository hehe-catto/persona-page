import { About } from "@/app/components/About";
import { Experience } from "@/app/components/Experience";
import { Footer } from "@/app/components/Footer";
import { Hero } from "@/app/components/Hero";
// import { Projects } from "@/app/components/Projects";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6">
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Footer />
    </main>
  );
}
