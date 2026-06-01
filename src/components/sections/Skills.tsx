"use client";

import { Marquee } from "@/components/ui/marquee";

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Material UI"],
  },
  {
    title: "State Management",
    skills: ["Redux", "Redux Toolkit", "Redux Saga", "Zustand", "React Query"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "Database",
    skills: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["Linux", "Git", "Postman", "Playwright"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 w-full bg-background overflow-hidden">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full gap-8">
        {/* First Row - Left to Right */}
        <Marquee pauseOnHover className="[--duration:40s]">
          {skillCategories.slice(0, 3).flatMap(cat => cat.skills).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-4 mx-2 rounded-xl bg-card border border-border/50 text-foreground font-medium text-lg hover:border-primary/50 hover:bg-card/80 transition-colors shadow-sm"
            >
              {skill}
            </div>
          ))}
        </Marquee>

        {/* Second Row - Right to Left */}
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {skillCategories.slice(2).flatMap(cat => cat.skills).map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-8 py-4 mx-2 rounded-xl bg-card border border-border/50 text-foreground font-medium text-lg hover:border-secondary/50 hover:bg-card/80 transition-colors shadow-sm"
            >
              {skill}
            </div>
          ))}
        </Marquee>

        {/* Gradient fades for the edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
      </div>
    </section>
  );
}
