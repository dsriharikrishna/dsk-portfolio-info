"use client";

import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { GridPattern } from "@/components/ui/grid-pattern";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { cn } from "@/lib/utils";
import Link from "next/link";

const orbitIcons = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
];

export function HeroSection() {
  return (
    <section id="home" className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background pt-20">
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
          "opacity-30"
        )}
      />
      
      <div className="container px-6 md:px-12 z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl">
        <div className="flex flex-col items-start text-left lg:w-1/2">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium text-muted-foreground mb-2"
          >
            Hello, I&apos;m
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold tracking-tighter mb-4"
          >
            Dasari <br className="hidden sm:block" />
            <AuroraText>Sriharikrishna</AuroraText>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-16 mb-2"
          >
            <TypingAnimation
              className="text-2xl sm:text-3xl font-heading font-semibold text-foreground/90"
              duration={50}
              delay={500}
            >
              Full Stack Developer
            </TypingAnimation>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Building modern SaaS products, AI platforms and enterprise applications.
            Passionate about UI architecture and performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link href="#projects" className={buttonVariants({ size: "lg", className: "h-12 px-6" })}>
              View Projects <ArrowRight className="ml-2 size-4" />
            </Link>
            {/* <Link href="/resume.pdf" target="_blank" className={buttonVariants({ variant: "secondary", size: "lg", className: "h-12 px-6" })}>
              <Download className="mr-2 size-4" /> Resume
            </Link> */}
            <Link href="#contact" className={buttonVariants({ variant: "outline", size: "lg", className: "h-12 px-6" })}>
              <Mail className="mr-2 size-4" /> Contact Me
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative lg:w-1/2 flex items-center justify-center min-h-[500px]"
        >
          <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-foreground/80 to-foreground/20 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent">
              AI
            </span>
            
            {/* Inner Circles */}
            <OrbitingCircles
              className="border-none bg-transparent"
              duration={20}
              radius={80}
              iconSize={30}
            >
              <img src={orbitIcons[0]} alt="React" className="size-full opacity-80" />
              <img src={orbitIcons[1]} alt="Next.js" className="size-full opacity-80 dark:invert" />
            </OrbitingCircles>
            
            {/* Middle Circles */}
            <OrbitingCircles
              className="border-none bg-transparent"
              radius={140}
              duration={25}
              iconSize={40}
              reverse
            >
              <img src={orbitIcons[2]} alt="TypeScript" className="size-full opacity-80" />
              <img src={orbitIcons[3]} alt="FastAPI" className="size-full opacity-80" />
            </OrbitingCircles>
            
            {/* Outer Circles */}
            <OrbitingCircles
              className="border-none bg-transparent"
              radius={200}
              duration={30}
              iconSize={50}
            >
              <img src={orbitIcons[4]} alt="PostgreSQL" className="size-full opacity-80" />
              <img src={orbitIcons[5]} alt="Redux" className="size-full opacity-80" />
            </OrbitingCircles>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
