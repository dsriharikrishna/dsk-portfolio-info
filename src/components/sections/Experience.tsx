"use client";

import { BorderBeam } from "@/components/ui/border-beam";
import { BlurFade } from "@/components/ui/blur-fade";

const experiences = [
  {
    role: "Product Engineer",
    company: "Signitives IT Solutions",
    period: "2024 - Present",
    responsibilities: [
      "Built scalable enterprise applications",
      "Developed reusable UI architectures",
      "Integrated REST APIs",
      "Optimized frontend performance",
      "Worked on dashboard platforms",
      "Collaborated with cross-functional teams",
    ],
  },
  // We can add more items here to make it a true timeline
];

export function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 w-full bg-background/50">
      <div className="container px-6 md:px-12 mx-auto max-w-5xl">
        <BlurFade delay={0.1} inView>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
              Work <span className="text-primary">Experience</span>
            </h2>
            <div className="h-1 w-20 bg-primary rounded-full"></div>
          </div>
        </BlurFade>

        <div className="relative border-l border-border/50 ml-4 md:ml-6 pl-8 md:pl-12 space-y-12">
          {/* Timeline Line Glow */}
          <div className="absolute left-[-1px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-transparent opacity-30"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10"></div>
              
              <BlurFade delay={0.2 + index * 0.1} inView>
                <div className="relative p-8 rounded-2xl bg-card/40 backdrop-blur-xl border border-border/50 group overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.15)] hover:bg-card/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="mt-2 md:mt-0 text-sm font-medium text-muted-foreground px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 w-fit">
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start text-muted-foreground">
                        <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-secondary flex-shrink-0"></span>
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <BorderBeam size={200} duration={12} delay={9} colorFrom="#6366F1" colorTo="#8B5CF6" />
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
