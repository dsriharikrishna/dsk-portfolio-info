"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Years Experience", value: "2+" },
  { label: "Enterprise Projects", value: "5+" },
  { label: "Issues Resolved", value: "100+" },
  { label: "Features Delivered", value: "20+" },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 w-full overflow-hidden bg-background">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(ellipse_at_center,white,transparent)]",
          "opacity-20"
        )}
      />
      
      <div className="container px-6 md:px-12 mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-md aspect-square rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 z-10 mix-blend-overlay"></div>
            <div className="w-full h-full bg-card border border-border/50 flex items-center justify-center">
              {/* Replace with actual image */}
              <div className="text-muted-foreground font-heading text-xl">Professional Image</div>
            </div>
            <BorderBeam size={100} duration={10} delay={0} colorFrom="#6366F1" colorTo="#06B6D4" />
          </motion.div>

          {/* Right Column: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Full Stack Developer with 2+ years of experience building scalable applications using React.js, Next.js, TypeScript, FastAPI and modern frontend architectures.
              </p>
              <p>
                Experienced in enterprise dashboards, AI operations platforms, browser extensions, authentication systems and large-scale UI development. 
                I focus on delivering highly performant, accessible, and beautiful web experiences that drive business value.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col p-4 rounded-xl bg-card border border-border/50 relative overflow-hidden group"
                >
                  <div className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
