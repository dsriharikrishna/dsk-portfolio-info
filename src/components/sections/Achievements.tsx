"use client";

import { motion } from "framer-motion";
import { NumberTicker } from "@/components/ui/number-ticker";

const achievements = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Enterprise Projects" },
  { value: 100, suffix: "+", label: "Issues Resolved" },
  { value: 20, suffix: "+", label: "Features Delivered" },
];

export function AchievementsSection() {
  return (
    <section className="relative py-20 w-full bg-primary/5 border-y border-border/40">
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center space-y-2"
            >
              <div className="flex items-center text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary">
                <NumberTicker
                  value={achievement.value}
                  className="text-primary tracking-tighter"
                />
                <span>{achievement.suffix}</span>
              </div>
              <p className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
