"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, Menu, X } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import { useUIStore } from "@/store/useUIStore";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { isMobileMenuOpen, toggleMobileMenu, setMobileMenuOpen, activeSection, setActiveSection } = useUIStore();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -80% 0px", // Trigger when section is near the top
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections defined in navItems
    navItems.forEach((item) => {
      const id = item.href.substring(1); // Remove '#'
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 backdrop-blur-md bg-background/80 border-b border-border/40 shadow-sm" : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex w-full max-w-7xl items-center justify-between">
        <Link href="/" className="text-xl font-heading font-bold tracking-tight flex items-center gap-2 group">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-105">D</div>
          <span className="hidden sm:inline-block">Sriharikrishna</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1">
            <Link href="https://github.com/dsriharikrishna" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <GithubIcon className="size-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/dasari-sriharikrishna/" target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "ghost", size: "icon" })}>
              <LinkedinIcon className="size-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
          
          <AnimatedThemeToggler 
            className={buttonVariants({ variant: "ghost", size: "icon" })} 
            variant="square"
          />
          
          <Link href="/resume" className={buttonVariants({ variant: "default", size: "sm", className: "hidden sm:flex gap-2" })}>
            <FileText className="size-4" />
            <span>Resume</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg font-medium py-2 border-b border-border/20 transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link 
                href="/resume.pdf" 
                target="_blank" 
                className={buttonVariants({ variant: "default", size: "lg", className: "w-full justify-center gap-2 mt-4" })}
                onClick={() => setMobileMenuOpen(false)}
              >
                <FileText className="size-5" />
                <span>Download Resume</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
