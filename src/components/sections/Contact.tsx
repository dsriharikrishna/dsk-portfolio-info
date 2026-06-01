"use client";

import { motion } from "framer-motion";
import { BorderBeam } from "@/components/ui/border-beam";
import { buttonVariants } from "@/components/ui/button";
import { Mail, CalendarDays } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 w-full bg-background overflow-hidden flex items-center justify-center">
      {/* Spotlight Effect Fallback */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/40 via-background to-transparent blur-3xl"></div>
      </div>

      <div className="container px-6 md:px-12 mx-auto max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-8 md:p-16 rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 overflow-hidden"
        >
          <BorderBeam size={250} duration={12} delay={9} colorFrom="#6366F1" colorTo="#06B6D4" />
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold tracking-tight mb-6">
            Let&apos;s Build Something <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Amazing Together
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Open to Full Stack Development, AI Engineering, Frontend Engineering, and Product Engineering opportunities.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="mailto:hello@example.com" className={buttonVariants({ size: "lg", className: "w-full sm:w-auto h-14 px-8 text-base" })}>
              <Mail className="mr-2 size-5" /> Hire Me
            </Link>
            <Link href="https://cal.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "secondary", size: "lg", className: "w-full sm:w-auto h-14 px-8 text-base" })}>
              <CalendarDays className="mr-2 size-5" /> Schedule Call
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-6">
            <Link href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2 bg-muted/50 rounded-full border border-border/50 hover:bg-muted">
              <Mail className="size-6" />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-full size-12" })}>
              <GithubIcon className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "icon", className: "rounded-full size-12" })}>
              <LinkedinIcon className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
