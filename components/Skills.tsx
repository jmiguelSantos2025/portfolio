"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React Native", level: 95, gradient: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", level: 92, gradient: "from-blue-400 to-indigo-500" },
  { name: "JavaScript", level: 70, gradient: "from-yellow-400 to-amber-500" },
  { name: "UI/UX Design", level: 75, gradient: "from-pink-400 to-purple-500" },
  { name: "Firebase", level: 80, gradient: "from-orange-400 to-red-500" },
  { name: "Visão Computacional", level: 65, gradient: "from-emerald-400 to-teal-500" },
];

const techBadges = [
  "React Native", "TypeScript", "JavaScript",
  "Firebase", "Expo", "Victory Charts",
  "Figma", "Git", "Node.js",
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 bg-white/[0.015]">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Stack
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Habilidades Técnicas
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-5 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-14">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="p-5 bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white text-sm font-semibold">{skill.name}</span>
                <span className="text-zinc-500 text-xs font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{
                    duration: 1.2,
                    delay: 0.3 + 0.08 * i,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center"
        >
          <p className="text-zinc-600 text-xs uppercase tracking-widest mb-5">
            Tecnologias que uso no dia a dia
          </p>
          <div className="flex flex-wrap gap-2.5 justify-center">
            {techBadges.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + 0.05 * i }}
                className="px-4 py-1.5 bg-emerald-500/8 border border-emerald-500/15 rounded-full text-emerald-400 text-sm hover:bg-emerald-500/15 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
