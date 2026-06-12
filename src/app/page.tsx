import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

import { Suspense } from "react";

// Lazy load below-the-fold components to improve initial load performance
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Experience = dynamic(() => import("@/components/sections/Experience"), { ssr: true });
const Services = dynamic(() => import("@/components/sections/Services"), { ssr: true });
const TechStack = dynamic(() => import("@/components/sections/TechStack"), { ssr: true });
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <TechStack />
      <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center font-mono tracking-widest text-primary animate-pulse py-24">FETCHING_REPOSITORIES...</div>}>
        <FeaturedProjects />
      </Suspense>
      <Contact />
    </div>
  );
}
