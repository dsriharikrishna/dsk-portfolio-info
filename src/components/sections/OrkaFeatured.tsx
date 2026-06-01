"use client";

import { motion } from "framer-motion";
import { ShineBorder } from "@/components/ui/shine-border";
import { Marquee } from "@/components/ui/marquee";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  Database,
  Users,
  Activity,
  BarChart,
  Eye,
  Globe
} from "lucide-react";

const features = [
  {
    Icon: Database,
    name: "Dataset Management",
    description: "Dataset Creation, Version Control, Data Validation, and Dataset Analytics.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-20"><Database className="h-64 w-64" /></div>,
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Users,
    name: "Human AI Workflows",
    description: "Human Reviews, Approval Chains, Task Assignment, Workflow Automation.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-20"><Users className="h-64 w-64" /></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Activity,
    name: "AI Evaluation",
    description: "Model Testing, Accuracy Tracking, Evaluation Campaigns.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-20"><Activity className="h-64 w-64" /></div>,
    className: "lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
  },
  {
    Icon: BarChart,
    name: "Benchmarking",
    description: "Comparative Analysis, Model Rankings, KPI Monitoring.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-20"><BarChart className="h-64 w-64" /></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Eye,
    name: "Workforce Monitoring",
    description: "Reviewer Analytics, Productivity Tracking, Workforce Insights.",
    href: "/",
    cta: "Learn more",
    background: <div className="absolute -right-20 -top-20 opacity-20"><Eye className="h-64 w-64" /></div>,
    className: "lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3",
  },
];

const metrics = [
  "Dataset Management",
  "AI Evaluation",
  "Workflow Automation",
  "Enterprise Governance",
  "Real-Time Analytics",
  "Workforce Monitoring",
];

const stack = ["Next.js", "TypeScript", "React Query", "Zustand", "Tailwind CSS", "FastAPI", "PostgreSQL"];

export function OrkaFeaturedSection() {
  return (
    <section className="relative py-32 w-full bg-background overflow-hidden border-y border-border/40">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0"></div>

      <div className="container px-6 md:px-12 mx-auto w-full relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium uppercase tracking-wider">Featured Project</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-6"
          >
            ORKA.<span className="text-primary">AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            An Enterprise AI Operations Platform that enables organizations to manage human-AI workflows,
            evaluate AI models, and govern AI operations at scale through configurable campaigns and automated orchestration.
          </motion.p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-border/50 bg-card md:shadow-2xl">
          <ShineBorder shineColor={["#6366F1", "#8B5CF6", "#06B6D4"]} />
          <div className="w-full p-8 md:p-12 relative z-10">
            <BentoGrid className="lg:grid-rows-2">
              {features.map((feature) => (
                <BentoCard key={feature.name} {...feature} />
              ))}
            </BentoGrid>
          </div>
          
          <div className="w-full border-t border-border/50 bg-background/50 backdrop-blur-sm p-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-wrap gap-2 items-center justify-center md:justify-start">
              {stack.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-full bg-muted/50 border border-border/50 text-xs font-medium text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-primary font-medium">
              <Globe className="size-4" />
              <span>Enterprise Platform</span>
            </div>
          </div>
        </div>

        <div className="mt-20 -mx-6 md:-mx-12 overflow-hidden">
          <Marquee className="[--duration:30s] border-y border-border/40 py-4 bg-muted/20">
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center gap-4 mx-8">
                <span className="text-xl font-heading font-semibold text-foreground/80 whitespace-nowrap">{metric}</span>
                <span className="h-2 w-2 rounded-full bg-primary/50"></span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
