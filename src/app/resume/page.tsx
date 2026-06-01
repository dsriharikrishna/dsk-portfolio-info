"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Briefcase, Mail } from "lucide-react";
import Link from "next/link";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

const resumeData = {
  name: "Dasari Sriharikrishna",
  title: "Product Engineer / Full Stack Developer",
  summary: "Full Stack Developer with 2+ years of experience building scalable applications using React.js, Next.js, TypeScript, FastAPI and modern frontend architectures. Experienced in enterprise dashboards, AI operations platforms, browser extensions, authentication systems and large-scale UI development. I focus on delivering highly performant, accessible, and beautiful web experiences that drive business value.",
  contact: {
    email: "dsriharikrishna2002@gmail.com", 
    github: "https://github.com/dsriharikrishna",
    linkedin: "https://www.linkedin.com/in/dasari-sriharikrishna/",
    location: "India"
  },
  experience: [
    {
      role: "Product Engineer",
      company: "Signitives IT Solutions",
      period: "2024 - Present",
      responsibilities: [
        "Built scalable enterprise applications",
        "Developed reusable UI architectures",
        "Integrated REST APIs and optimized frontend performance",
        "Worked on dashboard platforms and data visualization",
        "Collaborated with cross-functional teams",
      ],
    }
  ],
  projects: [
    {
      name: "ORKA.AI",
      role: "Lead Frontend Engineer",
      description: "AI Operations Platform featuring enterprise dashboard, workflow automation, real-time analytics, and role-based access control.",
    },
    {
      name: "Educare.AI",
      role: "Full Stack Developer",
      description: "AI-powered School Management Platform. Features: Student Management, Attendance, Reports, Fee Tracking, RBAC.",
    },
    {
      name: "SanathanaVani",
      role: "Frontend Developer",
      description: "Media Management Platform. Features: Content Publishing, Media Library, SEO Management, User Roles.",
    },
    {
      name: "Pronto",
      role: "Frontend Developer",
      description: "Enterprise Dashboard. Features: KPI Analytics, Reporting, User Management, Dashboard Insights.",
    },
    {
      name: "Lucas Form Fill",
      role: "Extension Developer",
      description: "Browser Extension. Features: Form Detection, Auto Fill, Productivity Automation.",
    }
  ],
  skills: {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Material UI"],
    state: ["Redux", "Redux Toolkit", "Zustand", "React Query"],
    backend: ["Node.js", "Express.js", "FastAPI"],
    database: ["PostgreSQL", "MongoDB", "MySQL"],
    tools: ["Linux", "Git", "Postman", "Playwright"],
  }
};

export default function ResumePage() {
  return (
    <div className="flex min-h-screen flex-col items-center w-full selection:bg-primary/30 selection:text-primary">
      <div className="w-full">
        <Navbar />
      </div>
      <main className="flex flex-col items-center w-full pt-32 pb-16 px-4 md:px-8 flex-grow">
        
        {/* Actions Header */}
        <div className="w-full max-w-4xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight font-heading">Interactive Resume</h1>
            <p className="text-muted-foreground mt-1">A structured view of my professional experience.</p>
          </div>
        </div>
        
        {/* Resume Content Container */}
        <div className="w-full max-w-4xl border border-border/50 rounded-xl overflow-hidden shadow-sm bg-card p-8 md:p-12 text-card-foreground">
          
          {/* Header Section */}
          <div className="border-b border-border/50 pb-8 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-2">{resumeData.name}</h1>
            <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">{resumeData.title}</h2>
            
            <div className="flex flex-wrap gap-4 text-sm">
              {/* Note: Update email if needed */}
              <Link href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="size-4" />
                <span>Contact Me</span>
              </Link>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" />
                <span>{resumeData.contact.location}</span>
              </div>
              <Link href={resumeData.contact.github} target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                <GithubIcon className="size-4" />
                <span>GitHub</span>
              </Link>
              <Link href={resumeData.contact.linkedin} target="_blank" className="flex items-center gap-2 hover:text-primary transition-colors">
                <LinkedinIcon className="size-4" />
                <span>LinkedIn</span>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Main Content (Left Column, 2/3 width) */}
            <div className="md:col-span-2 space-y-10">
              
              {/* Summary */}
              <section>
                <h3 className="text-xl font-bold font-heading mb-4 flex items-center gap-2 uppercase tracking-wider text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {resumeData.summary}
                </p>
              </section>

              {/* Experience */}
              <section>
                <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 uppercase tracking-wider text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Experience
                </h3>
                <div className="space-y-8">
                  {resumeData.experience.map((exp, i) => (
                    <div key={i} className="relative pl-6 border-l border-border/50">
                      <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                        <h4 className="text-lg font-bold">{exp.role}</h4>
                        <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full w-fit mt-2 sm:mt-0">{exp.period}</span>
                      </div>
                      <div className="text-muted-foreground font-medium mb-3 flex items-center gap-2">
                        <Briefcase className="size-4" />
                        {exp.company}
                      </div>
                      <ul className="list-disc list-inside space-y-1.5 text-muted-foreground">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="leading-relaxed">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 uppercase tracking-wider text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Key Projects
                </h3>
                <div className="space-y-6">
                  {resumeData.projects.map((project, i) => (
                    <div key={i}>
                      <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
                        <h4 className="text-lg font-bold">{project.name}</h4>
                        <span className="text-sm text-muted-foreground">{project.role}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar (Right Column, 1/3 width) */}
            <div className="space-y-10">
              
              {/* Skills */}
              <section>
                <h3 className="text-xl font-bold font-heading mb-6 flex items-center gap-2 uppercase tracking-wider text-primary">
                  <span className="w-8 h-[1px] bg-primary"></span>
                  Skills
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.frontend.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">State Management</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.state.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Backend & Database</h4>
                    <div className="flex flex-wrap gap-2">
                      {[...resumeData.skills.backend, ...resumeData.skills.database].map(skill => (
                        <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {resumeData.skills.tools.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-md text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
              
            </div>
          </div>
          
        </div>
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
}
