"use client";

import { motion } from "framer-motion";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { GraduationCap, Video, LayoutDashboard, FormInput } from "lucide-react";

const projects = [
  {
    Icon: GraduationCap,
    name: "Educare.AI",
    description: "AI-powered School Management Platform. Features: Student Management, Attendance, Reports, Fee Tracking, RBAC.",
    href: "/",
    cta: "View Project",
    background: <div className="absolute right-0 top-0 opacity-10"><GraduationCap className="h-[300px] w-[300px]" /></div>,
    className: "col-span-1 lg:col-span-2",
  },
  {
    Icon: Video,
    name: "SanathanaVani",
    description: "Media Management Platform. Features: Content Publishing, Media Library, SEO Management, User Roles.",
    href: "/",
    cta: "View Project",
    background: <div className="absolute -right-10 top-0 opacity-10"><Video className="h-[250px] w-[250px]" /></div>,
    className: "col-span-1 lg:col-span-1",
  },
  {
    Icon: LayoutDashboard,
    name: "Pronto",
    description: "Enterprise Dashboard. Features: KPI Analytics, Reporting, User Management, Dashboard Insights.",
    href: "/",
    cta: "View Project",
    background: <div className="absolute right-0 bottom-0 opacity-10"><LayoutDashboard className="h-[200px] w-[200px]" /></div>,
    className: "col-span-1 lg:col-span-1",
  },
  {
    Icon: FormInput,
    name: "Lucas Form Fill",
    description: "Browser Extension. Features: Form Detection, Auto Fill, Productivity Automation.",
    href: "/",
    cta: "View Project",
    background: <div className="absolute right-0 bottom-0 opacity-10"><FormInput className="h-[200px] w-[200px]" /></div>,
    className: "col-span-1 lg:col-span-2",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 w-full bg-background/50">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Other <span className="text-primary">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <BentoGrid className="grid-rows-2">
          {projects.map((project) => (
            <BentoCard key={project.name} {...project} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
