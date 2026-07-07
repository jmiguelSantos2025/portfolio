"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

const projects = [
  {
    icon: "🌿",
    name: "EcoBreath",
    description:
      "Sistema de análise ambiental e monitoramento de CO2 em tempo real com visualização de dados e alertas inteligentes.",
    tech: ["React Native", "Firebase", "Victory Charts"],
    github: "https://github.com/jmiguelSantos2025/EcoBreath",
    live: null,
    accent: "emerald",
  },
  {
    icon: "💧",
    name: "GreenDrop",
    description:
      "Dispositivo de irrigação automático controlado por IA e reconhecimento de gestos para agricultura inteligente.",
    tech: ["React Native", "Firebase", "Figma"],
    github: "https://github.com/jmiguelSantos2025/GreenDropApp",
    live: null,
    accent: "green",
  },
  {
    icon: "☀️",
    name: "Solarise - Backend",
    description:
      "Plataforma de Gestão de Contratos para Geração de Energia Solar",
    tech: ["FastAPI", "SQLAlchemy", "Python"],
    github: "https://github.com/jmiguelSantos2025/solarise-backend",
    live: null,
    accent: "yellow",
  },
];

const accentMap: Record<string, { card: string; badge: string }> = {
  emerald: {
    card: "hover:border-emerald-500/30 hover:shadow-emerald-500/5",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/15",
  },
  green: {
    card: "hover:border-green-500/30 hover:shadow-green-500/5",
    badge: "bg-green-500/10 text-green-400 border-green-500/15",
  },
  purple: {
    card: "hover:border-purple-500/30 hover:shadow-purple-500/5",
    badge: "bg-purple-500/10 text-purple-400 border-purple-500/15",
  },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Portfólio
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Projetos em Destaque
          </h2>
          <div className="w-12 h-1 bg-emerald-500 mx-auto mt-5 rounded-full" />
          <p className="text-zinc-500 mt-5 max-w-md mx-auto text-sm leading-relaxed">
            Projetos que desenvolvi com foco em resolver a dor de clientes e tecnologias modernas.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => {
            const accent = accentMap[project.accent];
            return (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 * i }}
                className={`group p-6 bg-white/[0.04] rounded-2xl border border-white/5 shadow-xl hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ${accent.card}`}
              >
                <div className="text-3xl mb-4 select-none">{project.icon}</div>

                <h3 className="text-lg font-bold text-white mb-2">{project.name}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-3 py-1 rounded-full text-xs border ${accent.badge}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-xs font-medium"
                    >
                      <GithubIcon size={14} />
                      Código
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-zinc-500 hover:text-white transition-colors text-xs font-medium"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/jmiguelSantos2025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-zinc-400 rounded-full hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all text-sm font-medium"
          >
            <GithubIcon size={15} />
            Ver todos os projetos no GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
