"use client";

import Link from "next/link";
import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border/40 bg-background py-12 md:py-16">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-xl font-heading font-bold tracking-tight flex items-center gap-2 group">
            <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-105">D</div>
            <span>Sriharikrishna</span>
          </Link>
          <p className="text-sm text-muted-foreground mt-2 text-center md:text-left max-w-xs">
            Building modern SaaS products, AI platforms and enterprise applications.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full" })}>
            <GithubIcon className="size-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full" })}>
            <LinkedinIcon className="size-5" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="mailto:hello@example.com" className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-full" })}>
            <Mail className="size-5" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
      <div className="container px-6 md:px-12 mx-auto max-w-7xl mt-8 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© {currentYear} Dasari Sriharikrishna. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
